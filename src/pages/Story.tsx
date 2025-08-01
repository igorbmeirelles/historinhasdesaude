import { Home, RotateCcw, StepBack, StepForward } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import alimentosStory from "../../public/story/alimentos/alimentos";
import higieneStory from "../../public/story/higiene/higiene";
import florestasStory from "../../public/story/florestas/florestas";
import dengueStory from "../../public/story/dengue/dengue";
import transitoStory from "../../public/story/transito/transito";
import vacinaStory from "../../public/story/vacina/vacina";
import piolhoStory from "../../public/story/piolho/piolho";
import jardimStory from "../../public/story/jardim/jardim";
import amizadeStory from "../../public/story/amizade/amizade";
import oculosStory from "../../public/story/oculos/oculos";
import telaStory from "../../public/story/tela/tela";
import recreioStory from "../../public/story/recreio/recreio";
// TODO: Delay para aparecer o texto

type Audio = {
  content: string;
  type: string;
  wordsTimestamp: {
    word: string;
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

const stories = [
  higieneStory,
  alimentosStory,
  florestasStory,
  dengueStory,
  transitoStory,
  vacinaStory,
  piolhoStory,
  jardimStory,
  amizadeStory,
  oculosStory,
  telaStory,
  recreioStory,
];

export function StoryPage() {
  const params = useParams<{ storySlug: string }>();

  const [story, setStory] = useState<Story | undefined>(undefined);
  const audioIntervalChecker = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageText, setPageText] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function goToNextPage() {
    if (!story) return;
    if (currentIndex < story.pages.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setPageText("");
      stopAudio();
    }
  }

  function goToPreviousPage() {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setPageText("");
    stopAudio();
  }

  function stopAudio() {
    if (audioIntervalChecker.current) {
      clearInterval(audioIntervalChecker.current);
      audioIntervalChecker.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  const playAudio = useCallback(() => {
    if (!audioRef.current) return;
    const isPlaying = audioRef.current.currentTime !== 0;
    if (isPlaying) {
      stopAudio();
      playAudio();
      return;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    audioRef.current.onplay = () => {
      const currentStoryPage = story?.pages[currentIndex];
      if (!currentStoryPage?.audio || !audioRef.current) return;
      const words = currentStoryPage.text.split(" ");
      const wordsTimestamp = currentStoryPage.audio.wordsTimestamp;
      if (audioIntervalChecker.current) {
        clearInterval(audioIntervalChecker.current);
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
      audioIntervalChecker.current = interval;
    };
  }, [currentIndex, story?.pages]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.load();
    //if (currentIndex !== 0) playAudio();
    playAudio();
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
    <div className="px-4 pt-4 pb-20 min-h-dvh bg-[#3b0764]">
      <div className="max-w-[768px] mx-auto rounded-md">
        <div className="flex flex-col items-center gap-3 text-white">
          {/* Row for back button and page indicator, pushed to ends */}
          <div className="flex justify-between items-center w-full">
            <Link
              to="/"
              className="text-white hover:opacity-80 flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Menu</span>
            </Link>
            <div className="text-sm opacity-70">
              Página {currentIndex + 1} de {story.pages.length}
            </div>
          </div>

          {/* Row for control buttons, centered horizontally */}
          <div className="flex justify-center items-center gap-3 mt-2">
            {currentIndex !== 0 ? (
              <button
                onClick={goToPreviousPage}
                className="bg-red-500 p-2 rounded-full hover:brightness-90 cursor-pointer"
              >
                <StepBack size={24} />
              </button>
            ) : (
              // Invisible placeholder to maintain layout when button is not present
              <div className="p-2 rounded-full invisible">
                <StepBack size={24} />
              </div>
            )}
            <button
              onClick={playAudio}
              className="bg-amber-500 p-2 rounded-full hover:brightness-90 cursor-pointer"
            >
              <RotateCcw size={24} />
            </button>
            {currentIndex < story.pages.length - 1 ? (
              <button
                onClick={goToNextPage}
                className="bg-green-500 p-2 rounded-full hover:brightness-90 cursor-pointer"
              >
                <StepForward size={24} />
              </button>
            ) : (
              // Invisible placeholder to maintain layout when button is not present
              <div className="p-2 rounded-full invisible">
                <StepForward size={24} />
              </div>
            )}
          </div>
        </div>

        <div className="my-4 text-white min-h-20">
          <p className="transition-opacity duration-200 ease-in-out">
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
