import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCollection } from "../../lib/firebase";
import { ChevronLeft, PlayIcon, StepBack, StepForward } from "lucide-react";

const getAudioAsBase64 = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path);
    const blob = await response.blob();

    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Erro ao carregar o áudio:", error);
    return "";
  }
};

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
  normalized_alignment?: NormalizedAlignment;
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
  const params = useParams();
  console.log(params);

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

  /* const audio = useMemo(async () => {
    const querySnapshot = await getCollection(
      "audios",
      "pequenos-herois-contra-o-mosquito-da-dengue"
    );

    const data = [] as Array<AudioData>;

    querySnapshot.forEach((doc) => {
      data.push(doc.data() as AudioData);
    });

    return data.sort((a, b) => a.order - b.order);
  }, []); */

  const audio = useMemo(async () => {
    const audios: AudioData[] = [
      /*  {
        id: "1",
        order: 1,
        text: `Beto e o Clube da Higiene`,
        title: "",
        image: "../../assets/hist-higiene/imgs-higiene/capa.png",
        createdAt: "",
        audioConfig: {
          createdAt: { nanoseconds: 0, seconds: 0 },
          audio_base64: "../../assets/hist-higiene/audios-higiene/1.mp3",
          alignment: {
            characters: "Beto e o Clube da Higiene".split(""),
            character_end_times_seconds: [],
            character_start_times_seconds: [],
          },
        },
      }, */
      {
        id: "2",
        order: 2,
        text: `Era uma vez um menino chamado Beto, que adorava brincar ao ar livre. Um dia, depois de uma tarde de aventuras no parque, ele voltou para caso todo sujo. Sua mãe, Dona lúcia, decidiu ensinar a beto a importância da higiene corporal`,
        title: "",
        image: "../../assets/hist-higiene/imgs-higiene/img2.png",
        createdAt: "",
        audioConfig: {
          audio_base64: await getAudioAsBase64("hist-higiene/2.mp3"),
          createdAt: { nanoseconds: 0, seconds: 0 },
          alignment: {
            characters:
              "Era uma vez um menino chamado Beto, que adorava brincar ao ar livre. Um dia, depois de uma tarde de aventuras no parque, ele voltou para caso todo sujo. Sua mãe, Dona lúcia, decidiu ensinar a beto a importância da higiene corporal".split(
                ""
              ),

            character_start_times_seconds: [],
            character_end_times_seconds: [
              0.072522, 0.145043, 0.217565, 0.290087, 0.362609, 0.43513,
              0.507652, 0.580174, 0.652696, 0.725217, 0.797739, 0.870261,
              0.942783, 1.015304, 1.087826, 1.160348, 1.23287, 1.305391,
              1.377913, 1.450435, 1.522957, 1.595478, 1.668, 1.740522, 1.813043,
              1.885565, 1.958087, 2.030609, 2.10313, 2.175652, 2.248174,
              2.320696, 2.393217, 2.465739, 2.538261, 2.610783, 2.683304,
              2.755826, 2.828348, 2.90087, 2.973391, 3.045913, 3.118435,
              3.190957, 3.263478, 3.336, 3.408522, 3.481043, 3.553565, 3.626087,
              3.698609, 3.77113, 3.843652, 3.916174, 3.988696, 4.061217,
              4.133739, 4.206261, 4.278783, 4.351304, 4.423826, 4.496348,
              4.56887, 4.641391, 4.713913, 4.786435, 4.858957, 4.931478, 5.004,
              5.076522, 5.149043, 5.221565, 5.294087, 5.366609, 5.43913,
              5.511652, 5.584174, 5.656696, 5.729217, 5.801739, 5.874261,
              5.946783, 6.019304, 6.091826, 6.164348, 6.23687, 6.309391,
              6.381913, 6.454435, 6.526957, 6.599478, 6.672, 6.744522, 6.817043,
              6.889565, 6.962087, 7.034609, 7.10713, 7.179652, 7.252174,
              7.324696, 7.397217, 7.469739, 7.542261, 7.614783, 7.687304,
              7.759826, 7.832348, 7.90487, 7.977391, 8.049913, 8.122435,
              8.194957, 8.267478, 8.34, 8.412522, 8.485043, 8.557565, 8.630087,
              8.702609, 8.77513, 8.847652, 8.920174, 8.992696, 9.065217,
              9.137739, 9.210261, 9.282783, 9.355304, 9.427826, 9.500348,
              9.57287, 9.645391, 9.717913, 9.790435, 9.862957, 9.935478, 10.008,
              10.080522, 10.153043, 10.225565, 10.298087, 10.370609, 10.44313,
              10.515652, 10.588174, 10.660696, 10.733217, 10.805739, 10.878261,
              10.950783, 11.023304, 11.095826, 11.168348, 11.24087, 11.313391,
              11.385913, 11.458435, 11.530957, 11.603478, 11.676, 11.748522,
              11.821043, 11.893565, 11.966087, 12.038609, 12.11113, 12.183652,
              12.256174, 12.328696, 12.401217, 12.473739, 12.546261, 12.618783,
              12.691304, 12.763826, 12.836348, 12.90887, 12.981391, 13.053913,
              13.126435, 13.198957, 13.271478, 13.344, 13.416522, 13.489043,
              13.561565, 13.634087, 13.706609, 13.77913, 13.851652, 13.924174,
              13.996696, 14.069217, 14.141739, 14.214261, 14.286783, 14.359304,
              14.431826, 14.504348, 14.57687, 14.649391, 14.721913, 14.794435,
              14.866957, 14.939478, 15.012, 15.084522, 15.157043, 15.229565,
              15.302087, 15.374609, 15.44713, 15.519652, 15.592174, 15.664696,
              15.737217, 15.809739, 15.882261, 15.954783, 16.027304, 16.099826,
              16.172348, 16.24487, 16.317391, 16.389913, 16.462435, 16.534957,
              16.607478, 16.68,
            ],
          },
        },
      },
    ];

    return audios;
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

            setTextPlaying(() => {
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

  const hide = useCallback(
    (image: React.RefObject<HTMLImageElement | null>) => {
      image.current?.classList.remove("transition-all");
      image.current?.classList.add("h-0");
      image.current?.classList.add("opacity-0");
      image.current?.classList.remove("h-auto");
      image.current?.classList.remove("-translate-y-20");
      image.current?.classList.remove("mt-25");
    },
    []
  );

  const show = useCallback(
    (image: React.RefObject<HTMLImageElement | null>) => {
      image.current?.classList.add("transition-all");
      image.current?.classList.remove("h-0");
      image.current?.classList.remove("opacity-0");
      image.current?.classList.add("h-auto");
      image.current?.classList.add("-translate-y-20");
      image.current?.classList.add("mt-25");
    },
    []
  );

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

  async function playPrev() {
    if (currentHistoryIndex.current == 0) return;

    currentHistoryIndex.current = currentHistoryIndex.current - 1;

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
        <div className="flex justify-center gap-2 items-center">
          <div className="mr-auto">
            <Link to="/" className="d-flex">
              <ChevronLeft />
            </Link>
          </div>
          <button
            className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90"
            onClick={playPrev}
          >
            <StepBack />
          </button>
          <button
            onClick={handlePlayButton}
            className="bg-amber-500 p-2 rounded-full cursor-pointer hover:brightness-90"
          >
            <PlayIcon />
          </button>
          <button
            className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90 mr-auto"
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
