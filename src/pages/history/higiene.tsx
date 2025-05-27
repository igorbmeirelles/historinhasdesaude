import { ChevronLeft, PlayIcon, StepBack, StepForward } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import capa from "../../assets/hist-higiene/imgs-higiene/capa.png";
import img2 from "../../assets/hist-higiene/imgs-higiene/img2.jpg";
import img3 from "../../assets/hist-higiene/imgs-higiene/img3.jpg";
import img4 from "../../assets/hist-higiene/imgs-higiene/img4.png";
import img5 from "../../assets/hist-higiene/imgs-higiene/img5.jpg";
import img6 from "../../assets/hist-higiene/imgs-higiene/img6.jpg";
import img7 from "../../assets/hist-higiene/imgs-higiene/img7.jpg";
import img8 from "../../assets/hist-higiene/imgs-higiene/img8.png";
import img9 from "../../assets/hist-higiene/imgs-higiene/img9.jpg";
import img10 from "../../assets/hist-higiene/imgs-higiene/img10.png";
import img11 from "../../assets/hist-higiene/imgs-higiene/img11.jpg";

import audio1 from "../../assets/hist-higiene/audios-higiene/1.mp3";
import audio2 from "../../assets/hist-higiene/audios-higiene/2.mp3";
import audio3 from "../../assets/hist-higiene/audios-higiene/3.mp3";
import audio4 from "../../assets/hist-higiene/audios-higiene/4.mp3";
import audio5 from "../../assets/hist-higiene/audios-higiene/5.mp3";
import audio6 from "../../assets/hist-higiene/audios-higiene/6.mp3";
import audio7 from "../../assets/hist-higiene/audios-higiene/7.mp3";
import audio8 from "../../assets/hist-higiene/audios-higiene/8.mp3";
import audio9 from "../../assets/hist-higiene/audios-higiene/9.mp3";
import audio10 from "../../assets/hist-higiene/audios-higiene/10.mp3";

export function HistoryHigiene() {
  const audios = [
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
    audio6,
    audio7,
    audio8,
    audio9,
    audio10,
  ];

  const images = [
    capa,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const texts = [
    `Beto e o Clube da Higiene`,
    `Era uma vez um menino chamado Beto, que adorava brincar ao ar livre. Um dia, depois de uma tarde de aventuras no parque, ele voltou para caso todo sujo. Sua mãe, Dona lúcia, decidiu ensinar a beto a importância da higiene corporal`,
    `Dona lúcia explicou a Beto que lavar as mãos é essencial para evitar germes. "Cante a música do 'Parabéns' enquanto lava as mãos com sabão", disse ela. Beto achou divertido e começou a cantar enquanto esfregava as mãos.`,
    `Depois, foi a hora de escovar os dentes. "Use a escova de dentes e o creme dental para deixar os dentes limpos e fortes", ensinou Dona Lúcia. Beto aprendeu a escovar os dentes em movimentos circulares, sem esquecer a língua e usar o fio dental.`,
    `Na manhã seguinte, Beto calçou seus tênis e foi para a escola. Durante a aula de educação física, ele notou que seus pés estavam com chulé. "Você precisa lavar bem os pés todos os dias", lembrou-se das palavras de sua mãe.`,
    `Beto começou a lavar os pés cuidadosamente todos os dias, garantindo que estavam bem secos antes de calçar os tênis. Ele até encontrou um talquinho perfumado para manter os pés fresquinhos!`,
    `Na escola, a professora Fernanda falou sobre a importância do banho diário. "O banho ajuda a tirar a sujeira e o suor do corpo, deixando você limpinho e cheiroso", explicou ela. Beto decidiu que sempre tomaria banho antes de dormir.`,
    `Para completar sua rotina de higiene, Beto aprendeu a cortar as unhas regularmente e a usar roupas limpas todos os dias. Ele até gostou de escolher suas roupas favoritas para ir à escola.`,
    `Os amigos de Beto na escola começaram a notar que ele estava sempre limpinho e cheiroso. Eles decidiram criar o Clube da Higiene, onde todos se ajudavam a lembrar das regras de higiene.`,
    `Todos os dias, no recreio, Beto e seus amigos cantavam a música 'ciranda cirandinha' enquanto lavavam as mãos e compartilhavam dicas de higiene. Eles ficaram famosos na escola por serem os mais higiênicos.`,
    `E assim, Beto e seus amigos do Clube da Higiene aprenderam que manter o corpo limpo é divertido e importante para a saúde. Muitos coleguinhas queriam entrar no clube da higiene. Esta história foi criada para incentivar você a ter hábitos de higiene de forma divertida e educativa!`,
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  function nextPag() {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }
  function lastPage() {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }

  function activatingAudio() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  useEffect(() => {
    if (currentIndex > 0 && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentIndex]);

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
            onClick={lastPage}
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
            onClick={nextPag}
            className="bg-[#ffffff17] p-2 rounded-full scale-75 cursor-pointer hover:brightness-90 mr-auto"
          >
            <StepForward />
          </button>
        </div>

        <div className="my-4 text-white">
          <p>{texts[currentIndex]}</p>
        </div>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="rounded-md transform"
        />

        {currentIndex > 0 && (
          <audio ref={audioRef}>
            <source src={audios[currentIndex - 1]} type="audio/mp3" />
          </audio>
        )}
      </div>
    </div>
  );
}
