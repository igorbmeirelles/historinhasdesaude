import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getCollection } from "../../lib/firebase";
import image from "../../assets/2.png";
import { PlayIcon, StepBack, StepForward } from "lucide-react";

interface Alignment {
  character_start_times_seconds: number[];
  character_end_times_seconds: number[];
  characters: string[];
}

interface NormalizedAlignment {
  characters: string[];
  character_end_times_seconds: number[];
  character_start_times_seconds: number[];
}

interface AudioData {
  audio_base64: string;
  alignment: Alignment;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  normalized_alignment: NormalizedAlignment;
}

export function History() {
  const [textPlaying, setTextPlaying] = useState<string>("");
  const [completeText, setCompleteText] = useState<string>("");
  const currentAudio = useRef<HTMLAudioElement | null>(null);
  const currentLabel = useRef<NodeJS.Timeout | null>(null);
  const [currentAudioMetadata, setCurrentAudioMetadata] =
    useState<NormalizedAlignment | null>(null);

  const imageRef1 = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  const images = useMemo(() => [imageRef1, imageRef2], []);

  const currentImageIndex = useRef<number>(0);

  const audio = useMemo(async () => {
    const querySnapshot = await getCollection("audios");
    const data = [] as Array<AudioData>;

    querySnapshot.forEach((doc) => {
      data.push(doc.data() as AudioData);
    });

    return data;
  }, []);

  const renderWords = useCallback(
    (
      _text_script_start: number[],
      text_script_end: number[],
      chars: string[],
      audio: HTMLAudioElement
    ) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < chars.length) {
          if (audio.currentTime >= text_script_end[currentIndex]) {
            setCompleteText((prev) => {
              const clone = [...prev];
              clone.shift();
              return clone.join("");
            });

            setTextPlaying((prev) => prev + (chars[currentIndex] ?? ""));
            currentIndex++;
          }
        } else {
          clearInterval(interval);
        }
      }, 10);

      return interval;
    },
    []
  );

  const animateImage = useCallback(() => {
    const image = images[currentImageIndex.current];

    image.current?.classList.add("h-auto");
    image.current?.classList.add("mt-25");
    image.current?.classList.add("transition-all")
    image.current?.classList.add("-translate-y-20");
    image.current?.classList.remove("opacity-0");

    currentImageIndex.current = (currentImageIndex.current + 1) % 2;
  }, [images]);

  const playAudio = useCallback(
    (audio64: string) => {
      const byteCharacters = atob(audio64);
      const byteNumbers = new Uint8Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const audioBlob = new Blob([byteNumbers], { type: "audio/mp3" });
      const url = URL.createObjectURL(audioBlob);

      const audio = new Audio(url);

      audio.onplay = () => {
        if (!currentAudioMetadata) return;

        animateImage();

        currentLabel.current = renderWords(
          currentAudioMetadata?.character_start_times_seconds,
          currentAudioMetadata?.character_end_times_seconds,
          currentAudioMetadata?.characters,
          currentAudio.current as HTMLAudioElement
        );
      };

      audio.play();

      return audio;
    },
    [currentAudioMetadata, renderWords, animateImage]
  );

  const resetImages = useCallback(() => {
    const image = images[(currentImageIndex.current + 1) % 2];

    console.log("Antes da remoção:", image.current?.classList);
    image.current?.classList.remove("transition-all");
    image.current?.classList.add("h-0");
    image.current?.classList.add("opacity-0");
    image.current?.classList.remove("h-auto");
    image.current?.classList.remove("-translate-y-20");
    image.current?.classList.remove("mt-25");
    console.log("Depois da remoção:", image.current?.classList);
  }, [images]);

  const toAudio = useCallback(
    (audio: AudioData) => {
      resetImages();
      setTextPlaying("");
      setCompleteText(() => audio.normalized_alignment.characters.join(""));
      setCurrentAudioMetadata(audio.normalized_alignment);
      return playAudio(audio.audio_base64);
    },
    [playAudio, resetImages]
  );

  const handlePlayButton = useCallback(async () => {
    if (!currentAudio.current?.paused) currentAudio.current?.pause();

    const a = await audio;

    currentAudio.current = toAudio(a[0]);
  }, [audio, toAudio]);

  function clearData() {
    currentAudio.current?.pause();
    if (currentLabel.current) clearInterval(currentLabel.current);
  }

  useEffect(() => {
    let mounted = true;

    audio.then((aud) => {
      if (!mounted) return;
      currentAudio.current = toAudio(aud[0]);
    });

    return () => {
      mounted = false;
      clearData();
    };
  }, [toAudio, audio]);

  useEffect(() => {
    return () => {
      clearData();
    };
  }, []);

  return (
    <div className="px-4 pt-4 min-h-dvh bg-violet-950">
      <div className="max-w-[768px] mx-auto rounded-md">
        <div className="flex justify-center gap-2">
          <button className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90">
            <StepBack />
          </button>
          <button
            onClick={handlePlayButton}
            className="bg-amber-500 p-2 rounded-full cursor-pointer hover:brightness-90"
          >
            <PlayIcon />
          </button>
          <button className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90">
            <StepForward />
          </button>
        </div>

        <div className="d-content my-4">
          {textPlaying}
          <span className="invisible">{completeText}</span>
        </div>

        <img
          src={image}
          className="rounded-md transform opacity-0 duration-500 h-0"
          ref={imageRef1}
        />

        <img
          src={image}
          className="rounded-md transform transition-all opacity-0 duration-500 h-0"
          ref={imageRef2}
        />
      </div>
    </div>
  );
}
