import { ChevronLeft, PlayIcon, StepBack, StepForward } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import alimentosStory from "../../public/story/alimentos/alimentos";
import higieneStory from "../../public/story/higiene/higiene";
import florestasStory from "../../public/story/florestas/florestas";
import dengueStory from "../../public/story/dengue/dengue";
import transitoStory from "../../public/story/transito/transito";
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
    if (currentIndex !== 0) playAudio();
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
            onClick={playAudio}
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
