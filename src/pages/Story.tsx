import { ChevronLeft, PlayIcon, StepBack, StepForward } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

// TODO: Adicionar cada palavra no words timestamp
// TODO: Não funciona quando da play, não está resetando
// TODO: Atraso nos audios (Pesquisar modelos de IA que convertem o texto para audio e modificar o timestamp)
// TODO: Animação e deixar mais suave o conteudo aparecendo
type Audio = {
  content: string;
  type: string;
  wordsTimestamp: {
    startAt: number;
    endAt: number;
  }[];
};

type Page = {
  page: number;
  text: string;
  image: string;
  audio?: Audio;
};

type Story = {
  title: string;
  slug: string;
  pages: Page[];
};

const higieneStory: Story = {
  title: "Beto e o Clube da Higiene",
  slug: "beto-higiene",
  pages: [
    {
      page: 1,
      text: "Beto e o Clube da Higiene",
      image: "/story/higiene/images/capa.png",
    },
    {
      page: 2,
      text: "Era uma vez um menino chamado Beto, que adorava brincar ao ar livre. Um dia, depois de uma tarde de aventuras no parque, ele voltou para casa todo sujo. Sua mãe, Dona lúcia, decidiu ensinar a beto a importância da higiene corporal",
      image: "/story/higiene/images/img2.jpg",
      audio: {
        content: "/story/higiene/audios/1.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { startAt: 0.0, endAt: 0.4 },
          { startAt: 0.4, endAt: 0.79 },
          { startAt: 0.79, endAt: 1.19 },
          { startAt: 1.19, endAt: 1.59 },
          { startAt: 1.59, endAt: 1.99 },
          { startAt: 1.99, endAt: 2.39 },
          { startAt: 2.39, endAt: 2.79 },
          { startAt: 2.79, endAt: 3.18 },
          { startAt: 3.18, endAt: 3.58 },
          { startAt: 3.58, endAt: 3.98 },
          { startAt: 3.98, endAt: 4.38 },
          { startAt: 4.38, endAt: 4.78 },
          { startAt: 4.78, endAt: 5.18 },
          { startAt: 5.18, endAt: 5.58 },
          { startAt: 5.58, endAt: 5.98 },
          { startAt: 5.98, endAt: 6.38 },
          { startAt: 6.38, endAt: 6.78 },
          { startAt: 6.78, endAt: 7.18 },
          { startAt: 7.18, endAt: 7.58 },
          { startAt: 7.58, endAt: 7.98 },
          { startAt: 7.98, endAt: 8.38 },
          { startAt: 8.38, endAt: 8.78 },
          { startAt: 8.78, endAt: 9.18 },
          { startAt: 9.18, endAt: 9.58 },
          { startAt: 9.58, endAt: 9.98 },
          { startAt: 9.98, endAt: 10.38 },
          { startAt: 10.38, endAt: 10.78 },
          { startAt: 10.78, endAt: 11.18 },
          { startAt: 11.18, endAt: 11.58 },
          { startAt: 11.58, endAt: 11.98 },
          { startAt: 11.98, endAt: 12.38 },
          { startAt: 12.38, endAt: 12.78 },
          { startAt: 12.78, endAt: 13.18 },
          { startAt: 13.18, endAt: 13.58 },
          { startAt: 13.58, endAt: 13.98 },
          { startAt: 13.98, endAt: 14.38 },
          { startAt: 14.38, endAt: 14.78 },
          { startAt: 14.78, endAt: 15.18 },
          { startAt: 15.18, endAt: 15.58 },
          { startAt: 15.58, endAt: 15.98 },
          { startAt: 15.58, endAt: 15.98 },
          { startAt: 15.98, endAt: 16.38 },
        ],
      },
    },
  ],
};

const stories = [higieneStory];

export function StoryPage() {
  const params = useParams<{ storySlug: string }>();

  const [story, setStory] = useState<Story | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageText, setPageText] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function goToNextPage() {
    if (!story) return;
    if (currentIndex < story.pages.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setPageText("");
    }
  }

  function goToPreviousPage() {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setPageText("");
  }

  function activatingAudio() {
    if (audioRef.current) {
      playAudio();
    }
  }

  const playAudio = useCallback(() => {
    if (!audioRef.current) return;
    const isPlaying = audioRef.current.currentTime !== 0;
    console.log({ isPlaying });
    if (isPlaying) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    audioRef.current.onplay = () => {
      const currentStoryPage = story?.pages[currentIndex];
      if (!currentStoryPage?.audio || !audioRef.current) return;
      const words = currentStoryPage.text.split(" ");
      const wordsTimestamp = currentStoryPage.audio.wordsTimestamp;
      if (words.length !== wordsTimestamp.length) {
        throw new Error("Transcription not work as expected");
      }
      const interval = setInterval(() => {
        if (!audioRef.current) {
          clearInterval(interval);
          return;
        }
        const currentTime = audioRef.current.currentTime;
        const timestamps = wordsTimestamp.filter(
          (word) => word.endAt <= currentTime
        );
        const finishReading = timestamps.length === wordsTimestamp.length;
        if (finishReading) {
          clearInterval(interval);
          setPageText(currentStoryPage.text);
        } else {
          setPageText(words.slice(0, timestamps.length).join(" "));
        }
      }, 1);
    };
  }, [currentIndex, story?.pages]);

  useEffect(() => {
    if (currentIndex > 0 && audioRef.current) {
      audioRef.current.load();
      playAudio();
    }
  }, [currentIndex, playAudio]);

  useEffect(() => {
    const storyFound = stories.find((story) => story.slug === params.storySlug);
    setStory(storyFound);
  }, [params]);

  const currentStoryPage = story?.pages[currentIndex];

  if (!currentStoryPage) {
    return (
      <div>
        <h1>História não encontrada</h1>
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-20 min-h-dvh bg-violet-950">
      <div className="max-w-[768px] mx-auto rounded-md">
        <div className="flex justify-center gap-2 items-center">
          <div className="mr-auto">
            <Link to="/" className="d-flex">
              <ChevronLeft />
            </Link>
          </div>
          <button
            onClick={goToPreviousPage}
            className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90"
          >
            <StepBack />
          </button>
          <button
            onClick={activatingAudio}
            className="bg-amber-500 p-2 rounded-full cursor-pointer hover:brightness-90"
          >
            <PlayIcon />
          </button>
          <button
            onClick={goToNextPage}
            className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90 mr-auto"
          >
            <StepForward />
          </button>
        </div>

        <div className="my-4 text-white">
          <p className="transition-all">
            {currentStoryPage.audio ? pageText : currentStoryPage.text}
          </p>
        </div>

        <img
          src={currentStoryPage.image}
          alt={`Slide ${currentIndex + 1}`}
          className="rounded-md transform"
        />

        <audio ref={audioRef}>
          <source
            src={currentStoryPage.audio?.content}
            type={currentStoryPage.audio?.type}
          />
        </audio>
      </div>
    </div>
  );
}
