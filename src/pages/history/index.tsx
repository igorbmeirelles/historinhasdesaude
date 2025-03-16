import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getCollection } from "../../lib/firebase";
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

interface AudioSettings {
  audio_base64: string;
  alignment: Alignment;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  normalized_alignment: NormalizedAlignment;
}

interface AudioData {
  audioConfig: AudioSettings;
  createdAt: string;
  id: string;
  order: number;
  text: string;
  title: string;
  image: string;
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
  const imageUrl1 = useRef<string>("");
  const imageUrl2 = useRef<string>("");
  const imagesUrl = useMemo(() => [imageUrl1, imageUrl2], []);

  const currentImageIndex = useRef<number>(0);
  const currentHistoryIndex = useRef<number>(0);

  const audio = useMemo(async () => {
    const querySnapshot = await getCollection(
      "audios",
      "pequenos-herois-contra-o-mosquito-da-dengue"
    );

    const data = [] as Array<AudioData>;

    querySnapshot.forEach((doc) => {
      data.push(doc.data() as AudioData);
    });

    return data.sort((a, b) => a.order - b.order);
  }, []);

  const renderWords = useCallback(
    (
      _text_script_start: number[],
      text_script_end: number[],
      chars: string[],
      audioPlayer: HTMLAudioElement
    ) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < chars.length) {
          if (audioPlayer.currentTime >= text_script_end[currentIndex]) {
            setCompleteText((prev) => {
              const clone = [...prev];
              clone.shift();
              return clone.join("");
            });

            setTextPlaying((prev) => {
              return chars.slice(0, currentIndex + 1).join("");
            });
            currentIndex++;
          }
        } else {
          clearInterval(interval);
        }
      }, 1);

      return interval;
    },
    []
  );
  const playAudio = useCallback(
    (aud: AudioSettings) => {
      const byteCharacters = atob(aud.audio_base64);
      const byteNumbers = new Uint8Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const audioBlob = new Blob([byteNumbers], { type: "audio/mp3" });
      const url = URL.createObjectURL(audioBlob);

      const audioPlayer = new Audio(url);

      audioPlayer.onplay = () => {
        if (!currentAudioMetadata) return;

        currentLabel.current = renderWords(
          aud?.alignment.character_start_times_seconds,
          aud?.alignment.character_end_times_seconds,
          aud?.alignment.characters,
          audioPlayer
        );
      };

      audioPlayer.play();

      return audioPlayer;
    },
    [currentAudioMetadata, renderWords]
  );

  const hide = useCallback((image) => {
    image.current?.classList.remove("transition-all");
    image.current?.classList.add("h-0");
    image.current?.classList.add("opacity-0");
    image.current?.classList.remove("h-auto");
    image.current?.classList.remove("-translate-y-20");
    image.current?.classList.remove("mt-25");
  }, []);

  const show = useCallback((image) => {
    image.current?.classList.add("transition-all");
    image.current?.classList.remove("h-0");
    image.current?.classList.remove("opacity-0");
    image.current?.classList.add("h-auto");
    image.current?.classList.add("-translate-y-20");
    image.current?.classList.add("mt-25");
  }, []);

  const resetImages = useCallback(() => {
    const imageNext = images[(currentImageIndex.current + 1) % 2];
    hide(imageNext);

    const currentImage = images[currentImageIndex.current];
    show(currentImage);
  }, [images, show, hide]);

  const toAudio = useCallback(
    (aud: AudioSettings) => {
      resetImages();
      setTextPlaying("");
      setCompleteText(() => aud.alignment.characters.join(""));
      setCurrentAudioMetadata(aud.alignment);
      return playAudio(aud);
    },
    [playAudio, resetImages]
  );

  const handlePlayButton = useCallback(async () => {
    if (!currentAudio.current?.paused) currentAudio.current?.pause();

    const a = await audio;

    const config = a[currentHistoryIndex.current].audioConfig;
    currentAudio.current = toAudio(config);
  }, [audio, toAudio]);

  function clearData() {
    currentAudio.current?.pause();
    if (currentLabel.current) clearInterval(currentLabel.current);
  }

  async function playNext() {
    const a = await audio;

    currentHistoryIndex.current = (currentHistoryIndex.current + 1) % a.length;

    handlePlayButton();
  }

  useEffect(() => {
    let mounted = true;

    audio.then((aud) => {
      if (!mounted) return;
      imageUrl1.current = aud[currentHistoryIndex.current].image;
      imageUrl2.current =
        aud[(currentHistoryIndex.current + 1) % aud.length].image;
      currentAudio.current = toAudio(
        aud[currentHistoryIndex.current].audioConfig
      );
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
          <button
            className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90"
            onClick={playNext}
          >
            <StepForward />
          </button>
        </div>

        <div className="d-content my-4 text-white">
          {textPlaying}
          <span className="invisible">{completeText}</span>
        </div>

        <img
          src={imagesUrl[0].current}
          className="rounded-md transform"
          ref={imageRef1}
        />

        <img
          src={imagesUrl[1].current}
          className="rounded-md transform"
          ref={imageRef2}
        />
      </div>
    </div>
  );
}
