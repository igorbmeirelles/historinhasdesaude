import { ChevronLeft, PlayIcon, StepBack, StepForward } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

const alimentosStory: Story = {
  title: "Mia e o Reino dos Alimentos Saudáveis",
  slug: "mia-alimentos",
  pages: [
    {
      page: 1,
      text: "Mia e o Reino dos Alimentos Saudáveis",
      image: "/story/alimentos/images/capa.png",
    },
    {
      page: 2,
      text: "Era uma vez, uma menina chamada Mia que adorava brincar no jardim de sua avó. Um dia, enquanto explorava, ela encontrou uma portinha mágica no tronco de uma árvore. Curiosa, Mia abriu a porta e foi transportada para o reino dos alimentos saudáveis.",
      image: "/story/alimentos/images/img2.png",
      audio: {
        content: "/story/alimentos/audios/1.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Era",
            startAt: 0,
            endAt: 0.4,
          },
          {
            word: "uma",
            startAt: 0.4,
            endAt: 0.54,
          },
          {
            word: "vez,",
            startAt: 0.54,
            endAt: 0.9,
          },
          {
            word: "uma",
            startAt: 1.12,
            endAt: 1.42,
          },
          {
            word: "menina",
            startAt: 1.42,
            endAt: 1.78,
          },
          {
            word: "chamada",
            startAt: 1.78,
            endAt: 2.22,
          },
          {
            word: "Mia",
            startAt: 2.22,
            endAt: 2.48,
          },
          {
            word: "que",
            startAt: 2.48,
            endAt: 2.64,
          },
          {
            word: "adorava",
            startAt: 2.64,
            endAt: 3.02,
          },
          {
            word: "brincar",
            startAt: 3.02,
            endAt: 3.52,
          },
          {
            word: "no",
            startAt: 3.52,
            endAt: 3.66,
          },
          {
            word: "jardim",
            startAt: 3.66,
            endAt: 4.06,
          },
          {
            word: "de",
            startAt: 4.06,
            endAt: 4.18,
          },
          {
            word: "sua",
            startAt: 4.18,
            endAt: 4.42,
          },
          {
            word: "avó.",
            startAt: 4.42,
            endAt: 4.68,
          },
          {
            word: "Um",
            startAt: 5.2,
            endAt: 5.74,
          },
          {
            word: "dia,",
            startAt: 5.74,
            endAt: 6.04,
          },
          {
            word: "enquanto",
            startAt: 6.26,
            endAt: 6.66,
          },
          {
            word: "explorava,",
            startAt: 6.66,
            endAt: 7.3,
          },
          {
            word: "ela",
            startAt: 7.56,
            endAt: 7.74,
          },
          {
            word: "encontrou",
            startAt: 7.74,
            endAt: 8.14,
          },
          {
            word: "uma",
            startAt: 8.14,
            endAt: 8.3,
          },
          {
            word: "portinha",
            startAt: 8.3,
            endAt: 8.74,
          },
          {
            word: "mágica",
            startAt: 8.74,
            endAt: 9.2,
          },
          {
            word: "no",
            startAt: 9.2,
            endAt: 9.32,
          },
          {
            word: "tronco",
            startAt: 9.32,
            endAt: 9.66,
          },
          {
            word: "de",
            startAt: 9.66,
            endAt: 9.76,
          },
          {
            word: "uma",
            startAt: 9.76,
            endAt: 9.92,
          },
          {
            word: "árvore.",
            startAt: 9.92,
            endAt: 10.34,
          },
          {
            word: "Curiosa,",
            startAt: 11.280000000000001,
            endAt: 11.82,
          },
          {
            word: "Mia",
            startAt: 12.1,
            endAt: 12.32,
          },
          {
            word: "abriu",
            startAt: 12.32,
            endAt: 12.64,
          },
          {
            word: "a",
            startAt: 12.64,
            endAt: 12.8,
          },
          {
            word: "porta",
            startAt: 12.8,
            endAt: 13.06,
          },
          {
            word: "e",
            startAt: 13.06,
            endAt: 13.16,
          },
          {
            word: "foi",
            startAt: 13.16,
            endAt: 13.3,
          },
          {
            word: "transportada",
            startAt: 13.3,
            endAt: 14.02,
          },
          {
            word: "para",
            startAt: 14.02,
            endAt: 14.2,
          },
          {
            word: "o",
            startAt: 14.2,
            endAt: 14.3,
          },
          {
            word: "reino",
            startAt: 14.3,
            endAt: 14.54,
          },
          {
            word: "dos",
            startAt: 14.54,
            endAt: 14.74,
          },
          {
            word: "alimentos",
            startAt: 14.74,
            endAt: 15.16,
          },
          {
            word: "saudáveis.",
            startAt: 15.16,
            endAt: 15.78,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'No reino dos alimentos saudáveis, Mia conheceu o rei Frutópolis, um abacaxi sorridente. "Bem-vinda, Mia! Vou te mostrar os alimentos mais saudáveis do nosso reino", disse o rei.',
      image: "/story/alimentos/images/img3.png",
      audio: {
        content: "/story/alimentos/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "No",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "reino",
            startAt: 0.36,
            endAt: 0.66,
          },
          {
            word: "dos",
            startAt: 0.66,
            endAt: 0.84,
          },
          {
            word: "alimentos",
            startAt: 0.84,
            endAt: 1.22,
          },
          {
            word: "saudáveis,",
            startAt: 1.22,
            endAt: 1.92,
          },
          {
            word: "Mia",
            startAt: 2.36,
            endAt: 2.5,
          },
          {
            word: "conheceu",
            startAt: 2.5,
            endAt: 3.04,
          },
          {
            word: "o",
            startAt: 3.04,
            endAt: 3.18,
          },
          {
            word: "rei",
            startAt: 3.18,
            endAt: 3.34,
          },
          {
            word: "Frutópolis,",
            startAt: 3.34,
            endAt: 4.02,
          },
          {
            word: "um",
            startAt: 4.26,
            endAt: 4.44,
          },
          {
            word: "abacaxi",
            startAt: 4.44,
            endAt: 5.02,
          },
          {
            word: "sorridente.",
            startAt: 5.02,
            endAt: 5.6,
          },
          {
            word: "Bem",
            startAt: 6.14,
            endAt: 6.82,
          },
          {
            word: "-vinda,",
            startAt: 6.82,
            endAt: 7.26,
          },
          {
            word: "Mia!",
            startAt: 7.52,
            endAt: 7.78,
          },
          {
            word: "Vou",
            startAt: 8.32,
            endAt: 8.94,
          },
          {
            word: "te",
            startAt: 8.94,
            endAt: 9.08,
          },
          {
            word: "mostrar",
            startAt: 9.08,
            endAt: 9.46,
          },
          {
            word: "os",
            startAt: 9.46,
            endAt: 9.62,
          },
          {
            word: "alimentos",
            startAt: 9.62,
            endAt: 10.06,
          },
          {
            word: "mais",
            startAt: 10.06,
            endAt: 10.42,
          },
          {
            word: "saudáveis",
            startAt: 10.42,
            endAt: 11,
          },
          {
            word: "do",
            startAt: 11,
            endAt: 11.14,
          },
          {
            word: "nosso",
            startAt: 11.14,
            endAt: 11.4,
          },
          {
            word: "reino,",
            startAt: 11.4,
            endAt: 11.8,
          },
          {
            word: "disse",
            startAt: 12.04,
            endAt: 12.4,
          },
          {
            word: "o",
            startAt: 12.4,
            endAt: 12.6,
          },
          {
            word: "rei.",
            startAt: 12.6,
            endAt: 12.8,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'A primeira parada foi na Floresta das Frutas. Lá, Mia viu maçãs vermelhas, bananas amarelas e uvas roxas. O rei Frutópolis explicou, "frutas são importantes para a saúde porque têm muitas vitaminas!"',
      image: "/story/alimentos/images/img4.png",
      audio: {
        content: "/story/alimentos/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "A",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "primeira",
            startAt: 0.32,
            endAt: 0.58,
          },
          {
            word: "parada",
            startAt: 0.58,
            endAt: 1.06,
          },
          {
            word: "foi",
            startAt: 1.06,
            endAt: 1.24,
          },
          {
            word: "na",
            startAt: 1.24,
            endAt: 1.38,
          },
          {
            word: "Floresta",
            startAt: 1.38,
            endAt: 1.88,
          },
          {
            word: "das",
            startAt: 1.88,
            endAt: 2.1,
          },
          {
            word: "Frutas.",
            startAt: 2.1,
            endAt: 2.58,
          },
          {
            word: "Lá,",
            startAt: 3.16,
            endAt: 3.84,
          },
          {
            word: "Mia",
            startAt: 4.06,
            endAt: 4.24,
          },
          {
            word: "viu",
            startAt: 4.24,
            endAt: 4.48,
          },
          {
            word: "maçãs",
            startAt: 4.48,
            endAt: 4.92,
          },
          {
            word: "vermelhas,",
            startAt: 4.92,
            endAt: 5.48,
          },
          {
            word: "bananas",
            startAt: 5.66,
            endAt: 6.06,
          },
          {
            word: "amarelas",
            startAt: 6.06,
            endAt: 6.64,
          },
          {
            word: "e",
            startAt: 6.64,
            endAt: 6.8,
          },
          {
            word: "uvas",
            startAt: 6.8,
            endAt: 7.1,
          },
          {
            word: "roxas.",
            startAt: 7.1,
            endAt: 7.56,
          },
          {
            word: "O",
            startAt: 8.3,
            endAt: 8.64,
          },
          {
            word: "rei",
            startAt: 8.64,
            endAt: 8.92,
          },
          {
            word: "Frutópolis",
            startAt: 8.92,
            endAt: 9.54,
          },
          {
            word: "explicou,",
            startAt: 9.54,
            endAt: 10.02,
          },
          {
            word: "frutas",
            startAt: 10.28,
            endAt: 10.84,
          },
          {
            word: "são",
            startAt: 10.84,
            endAt: 10.98,
          },
          {
            word: "importantes",
            startAt: 10.98,
            endAt: 11.56,
          },
          {
            word: "para",
            startAt: 11.56,
            endAt: 11.84,
          },
          {
            word: "a",
            startAt: 11.84,
            endAt: 11.98,
          },
          {
            word: "saúde",
            startAt: 11.98,
            endAt: 12.28,
          },
          {
            word: "porque",
            startAt: 12.28,
            endAt: 12.64,
          },
          {
            word: "têm",
            startAt: 12.64,
            endAt: 12.86,
          },
          {
            word: "muitas",
            startAt: 12.86,
            endAt: 13.26,
          },
          {
            word: "vitaminas.",
            startAt: 13.26,
            endAt: 14.06,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Em seguida, foram para o campo dos vegetais. Mia encontrou cenouras, brócolis e espinafre. "Comer vegetais faz bem para os olhos e os ossos", disse o rei.',
      image: "/story/alimentos/images/img5.png",
      audio: {
        content: "/story/alimentos/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Em",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "seguida,",
            startAt: 0.38,
            endAt: 0.86,
          },
          {
            word: "foram",
            startAt: 1.02,
            endAt: 1.28,
          },
          {
            word: "para",
            startAt: 1.28,
            endAt: 1.5,
          },
          {
            word: "o",
            startAt: 1.5,
            endAt: 1.6,
          },
          {
            word: "campo",
            startAt: 1.6,
            endAt: 1.88,
          },
          {
            word: "dos",
            startAt: 1.88,
            endAt: 2.12,
          },
          {
            word: "vegetais.",
            startAt: 2.12,
            endAt: 2.76,
          },
          {
            word: "Mia",
            startAt: 3.82,
            endAt: 3.96,
          },
          {
            word: "encontrou",
            startAt: 3.96,
            endAt: 4.42,
          },
          {
            word: "cenouras,",
            startAt: 4.42,
            endAt: 5.02,
          },
          {
            word: "brócolis",
            startAt: 5.36,
            endAt: 5.84,
          },
          {
            word: "e",
            startAt: 5.84,
            endAt: 5.94,
          },
          {
            word: "espinafre.",
            startAt: 5.94,
            endAt: 6.52,
          },
          {
            word: "Comer",
            startAt: 7.359999999999999,
            endAt: 7.84,
          },
          {
            word: "vegetais",
            startAt: 7.84,
            endAt: 8.32,
          },
          {
            word: "faz",
            startAt: 8.32,
            endAt: 8.54,
          },
          {
            word: "bem",
            startAt: 8.54,
            endAt: 8.76,
          },
          {
            word: "para",
            startAt: 8.76,
            endAt: 8.96,
          },
          {
            word: "os",
            startAt: 8.96,
            endAt: 9.12,
          },
          {
            word: "olhos",
            startAt: 9.12,
            endAt: 9.34,
          },
          {
            word: "e",
            startAt: 9.34,
            endAt: 9.5,
          },
          {
            word: "os",
            startAt: 9.5,
            endAt: 9.68,
          },
          {
            word: "ossos,",
            startAt: 9.68,
            endAt: 10.12,
          },
          {
            word: "disse",
            startAt: 10.26,
            endAt: 10.6,
          },
          {
            word: "o",
            startAt: 10.6,
            endAt: 10.78,
          },
          {
            word: "rei.",
            startAt: 10.78,
            endAt: 10.98,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Logo depois, chegaram ao Lago das Proteínas. Mia viu peixes nadando e frangos brincando na água. "Proteínas ajudam a construir músculos fortes", contou o rei.',
      image: "/story/alimentos/images/img6.png",
      audio: {
        content: "/story/alimentos/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Logo",
            startAt: 0,
            endAt: 0.56,
          },
          {
            word: "depois,",
            startAt: 0.56,
            endAt: 0.94,
          },
          {
            word: "chegaram",
            startAt: 1.22,
            endAt: 1.78,
          },
          {
            word: "ao",
            startAt: 1.78,
            endAt: 1.92,
          },
          {
            word: "Lago",
            startAt: 1.92,
            endAt: 2.22,
          },
          {
            word: "das",
            startAt: 2.22,
            endAt: 2.42,
          },
          {
            word: "Proteínas.",
            startAt: 2.42,
            endAt: 3.1,
          },
          {
            word: "Nia",
            startAt: 4.1,
            endAt: 4.32,
          },
          {
            word: "viu",
            startAt: 4.32,
            endAt: 4.5,
          },
          {
            word: "peixes",
            startAt: 4.5,
            endAt: 4.92,
          },
          {
            word: "nadando",
            startAt: 4.92,
            endAt: 5.38,
          },
          {
            word: "e",
            startAt: 5.38,
            endAt: 5.48,
          },
          {
            word: "frangos",
            startAt: 5.48,
            endAt: 5.88,
          },
          {
            word: "brincando",
            startAt: 5.88,
            endAt: 6.4,
          },
          {
            word: "na",
            startAt: 6.4,
            endAt: 6.56,
          },
          {
            word: "água.",
            startAt: 6.56,
            endAt: 6.84,
          },
          {
            word: "Proteínas",
            startAt: 7.6,
            endAt: 8.38,
          },
          {
            word: "ajudam",
            startAt: 8.38,
            endAt: 8.8,
          },
          {
            word: "a",
            startAt: 8.8,
            endAt: 8.9,
          },
          {
            word: "construir",
            startAt: 8.9,
            endAt: 9.3,
          },
          {
            word: "músculos",
            startAt: 9.3,
            endAt: 9.9,
          },
          {
            word: "fortes,",
            startAt: 9.9,
            endAt: 10.5,
          },
          {
            word: "contou",
            startAt: 10.66,
            endAt: 11.14,
          },
          {
            word: "o",
            startAt: 11.14,
            endAt: 11.26,
          },
          {
            word: "rei.",
            startAt: 11.26,
            endAt: 11.48,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'A próxima parada foi a Colina dos Laticínios, onde havia vacas sorridentes e cabras felizes. "Laticínios como leite, queijo e iogurte são bons para os ossos", explicou o rei de Frutópolis.',
      image: "/story/alimentos/images/img7.png",
      audio: {
        content: "/story/alimentos/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "A",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "próxima",
            startAt: 0.32,
            endAt: 0.72,
          },
          {
            word: "parada",
            startAt: 0.72,
            endAt: 1.24,
          },
          {
            word: "foi",
            startAt: 1.24,
            endAt: 1.44,
          },
          {
            word: "a",
            startAt: 1.44,
            endAt: 1.52,
          },
          {
            word: "Colina",
            startAt: 1.52,
            endAt: 1.86,
          },
          {
            word: "dos",
            startAt: 1.86,
            endAt: 2.04,
          },
          {
            word: "Laticínios,",
            startAt: 2.04,
            endAt: 2.74,
          },
          {
            word: "onde",
            startAt: 2.88,
            endAt: 3.28,
          },
          {
            word: "havia",
            startAt: 3.28,
            endAt: 3.56,
          },
          {
            word: "vacas",
            startAt: 3.56,
            endAt: 4.02,
          },
          {
            word: "sorridentes",
            startAt: 4.02,
            endAt: 4.68,
          },
          {
            word: "e",
            startAt: 4.68,
            endAt: 4.78,
          },
          {
            word: "cabras",
            startAt: 4.78,
            endAt: 5.14,
          },
          {
            word: "felizes.",
            startAt: 5.14,
            endAt: 5.62,
          },
          {
            word: "Laticínios",
            startAt: 6.72,
            endAt: 7.32,
          },
          {
            word: "como",
            startAt: 7.32,
            endAt: 7.52,
          },
          {
            word: "leite,",
            startAt: 7.52,
            endAt: 7.92,
          },
          {
            word: "queijo",
            startAt: 8.2,
            endAt: 8.48,
          },
          {
            word: "e",
            startAt: 8.48,
            endAt: 8.58,
          },
          {
            word: "iogurte",
            startAt: 8.58,
            endAt: 9.02,
          },
          {
            word: "são",
            startAt: 9.02,
            endAt: 9.24,
          },
          {
            word: "bons",
            startAt: 9.24,
            endAt: 9.6,
          },
          {
            word: "para",
            startAt: 9.6,
            endAt: 9.8,
          },
          {
            word: "os",
            startAt: 9.8,
            endAt: 9.92,
          },
          {
            word: "ossos,",
            startAt: 9.92,
            endAt: 10.34,
          },
          {
            word: "explicou",
            startAt: 10.52,
            endAt: 11.08,
          },
          {
            word: "o",
            startAt: 11.08,
            endAt: 11.2,
          },
          {
            word: "rei",
            startAt: 11.2,
            endAt: 11.36,
          },
          {
            word: "de",
            startAt: 11.36,
            endAt: 11.42,
          },
          {
            word: "Frutópolis.",
            startAt: 11.42,
            endAt: 12.16,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Mia e o rei continuaram até o Jardim dos Grãos. Lá, ela viu trigo, arroz e ervilha. "Os grãos nos dão energia para brincar e aprender", disse o rei.',
      image: "/story/alimentos/images/img8.png",
      audio: {
        content: "/story/alimentos/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Mia",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "e",
            startAt: 0.48,
            endAt: 0.62,
          },
          {
            word: "o",
            startAt: 0.62,
            endAt: 0.74,
          },
          {
            word: "rei",
            startAt: 0.74,
            endAt: 0.92,
          },
          {
            word: "continuaram",
            startAt: 0.92,
            endAt: 1.54,
          },
          {
            word: "até",
            startAt: 1.54,
            endAt: 1.78,
          },
          {
            word: "o",
            startAt: 1.78,
            endAt: 1.92,
          },
          {
            word: "Jardim",
            startAt: 1.92,
            endAt: 2.32,
          },
          {
            word: "dos",
            startAt: 2.32,
            endAt: 2.5,
          },
          {
            word: "Grãos.",
            startAt: 2.5,
            endAt: 2.86,
          },
          {
            word: "Lá,",
            startAt: 3.5600000000000005,
            endAt: 4.16,
          },
          {
            word: "ela",
            startAt: 4.32,
            endAt: 4.62,
          },
          {
            word: "viu",
            startAt: 4.62,
            endAt: 4.82,
          },
          {
            word: "trigo,",
            startAt: 4.82,
            endAt: 5.22,
          },
          {
            word: "arroz",
            startAt: 5.5,
            endAt: 5.98,
          },
          {
            word: "e",
            startAt: 5.98,
            endAt: 6.06,
          },
          {
            word: "ervilha.",
            startAt: 6.06,
            endAt: 6.52,
          },
          {
            word: "Os",
            startAt: 7.02,
            endAt: 7.62,
          },
          {
            word: "grãos",
            startAt: 7.62,
            endAt: 7.98,
          },
          {
            word: "nos",
            startAt: 7.98,
            endAt: 8.2,
          },
          {
            word: "dão",
            startAt: 8.2,
            endAt: 8.36,
          },
          {
            word: "energia",
            startAt: 8.36,
            endAt: 8.78,
          },
          {
            word: "para",
            startAt: 8.78,
            endAt: 9.08,
          },
          {
            word: "brincar",
            startAt: 9.08,
            endAt: 9.54,
          },
          {
            word: "e",
            startAt: 9.54,
            endAt: 9.62,
          },
          {
            word: "aprender,",
            startAt: 9.62,
            endAt: 10.12,
          },
          {
            word: "disse",
            startAt: 10.36,
            endAt: 10.72,
          },
          {
            word: "o",
            startAt: 10.72,
            endAt: 10.88,
          },
          {
            word: "rei.",
            startAt: 10.88,
            endAt: 11.1,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'Finalmente, visitaram o pomar das nozes e sementes. Mia encontrou amêndoas, nozes e sementes de girassol. "Essas delícias ajudam a manter o coração saudável", contou o rei.',
      image: "/story/alimentos/images/img9.png",
      audio: {
        content: "/story/alimentos/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Finalmente,",
            startAt: 0,
            endAt: 0.92,
          },
          {
            word: "visitaram",
            startAt: 1.26,
            endAt: 1.76,
          },
          {
            word: "o",
            startAt: 1.76,
            endAt: 1.88,
          },
          {
            word: "pomar",
            startAt: 1.88,
            endAt: 2.26,
          },
          {
            word: "das",
            startAt: 2.26,
            endAt: 2.48,
          },
          {
            word: "nozes",
            startAt: 2.48,
            endAt: 2.88,
          },
          {
            word: "e",
            startAt: 2.88,
            endAt: 3.02,
          },
          {
            word: "sementes.",
            startAt: 3.02,
            endAt: 3.58,
          },
          {
            word: "Mia",
            startAt: 4.1,
            endAt: 4.74,
          },
          {
            word: "encontrou",
            startAt: 4.74,
            endAt: 5.2,
          },
          {
            word: "amêndoas,",
            startAt: 5.2,
            endAt: 5.76,
          },
          {
            word: "nozes",
            startAt: 5.92,
            endAt: 6.4,
          },
          {
            word: "e",
            startAt: 6.4,
            endAt: 6.5,
          },
          {
            word: "sementes",
            startAt: 6.5,
            endAt: 7,
          },
          {
            word: "de",
            startAt: 7,
            endAt: 7.12,
          },
          {
            word: "girassol.",
            startAt: 7.12,
            endAt: 7.68,
          },
          {
            word: "Essas",
            startAt: 8.22,
            endAt: 9.02,
          },
          {
            word: "delícias",
            startAt: 9.02,
            endAt: 9.48,
          },
          {
            word: "ajudam",
            startAt: 9.48,
            endAt: 9.94,
          },
          {
            word: "a",
            startAt: 9.94,
            endAt: 10.04,
          },
          {
            word: "manter",
            startAt: 10.04,
            endAt: 10.34,
          },
          {
            word: "o",
            startAt: 10.34,
            endAt: 10.48,
          },
          {
            word: "coração",
            startAt: 10.48,
            endAt: 10.82,
          },
          {
            word: "saudável,",
            startAt: 10.82,
            endAt: 11.54,
          },
          {
            word: "contou",
            startAt: 11.78,
            endAt: 12.3,
          },
          {
            word: "o",
            startAt: 12.3,
            endAt: 12.46,
          },
          {
            word: "rei.",
            startAt: 12.46,
            endAt: 12.66,
          },
        ],
      },
    },
    {
      page: 10,
      text: 'Depois de explorar todo o reino, o rei Frutópolis disse, "Agora você sabe como os alimentos saudáveis podem fazer bem para o seu corpo. Volte e compartilhe com seus amigos!"',
      image: "/story/alimentos/images/img10.png",
      audio: {
        content: "/story/alimentos/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "de",
            startAt: 0.58,
            endAt: 0.82,
          },
          {
            word: "explorar",
            startAt: 0.82,
            endAt: 1.26,
          },
          {
            word: "todo",
            startAt: 1.26,
            endAt: 1.5,
          },
          {
            word: "o",
            startAt: 1.5,
            endAt: 1.66,
          },
          {
            word: "reino,",
            startAt: 1.66,
            endAt: 1.92,
          },
          {
            word: "o",
            startAt: 2.18,
            endAt: 2.34,
          },
          {
            word: "rei",
            startAt: 2.34,
            endAt: 2.56,
          },
          {
            word: "Frutópolis",
            startAt: 2.56,
            endAt: 3.14,
          },
          {
            word: "disse,",
            startAt: 3.14,
            endAt: 3.44,
          },
          {
            word: "Agora",
            startAt: 3.68,
            endAt: 4.1,
          },
          {
            word: "você",
            startAt: 4.1,
            endAt: 4.4,
          },
          {
            word: "sabe",
            startAt: 4.4,
            endAt: 4.68,
          },
          {
            word: "como",
            startAt: 4.68,
            endAt: 4.9,
          },
          {
            word: "os",
            startAt: 4.9,
            endAt: 5.02,
          },
          {
            word: "alimentos",
            startAt: 5.02,
            endAt: 5.42,
          },
          {
            word: "saudáveis",
            startAt: 5.42,
            endAt: 6.02,
          },
          {
            word: "podem",
            startAt: 6.02,
            endAt: 6.32,
          },
          {
            word: "fazer",
            startAt: 6.32,
            endAt: 6.62,
          },
          {
            word: "bem",
            startAt: 6.62,
            endAt: 6.9,
          },
          {
            word: "para",
            startAt: 6.9,
            endAt: 7.12,
          },
          {
            word: "o",
            startAt: 7.12,
            endAt: 7.24,
          },
          {
            word: "seu",
            startAt: 7.24,
            endAt: 7.36,
          },
          {
            word: "corpo.",
            startAt: 7.36,
            endAt: 7.76,
          },
          {
            word: "Volte",
            startAt: 8.54,
            endAt: 9.1,
          },
          {
            word: "e",
            startAt: 9.1,
            endAt: 9.22,
          },
          {
            word: "compartilhe",
            startAt: 9.22,
            endAt: 9.76,
          },
          {
            word: "com",
            startAt: 9.76,
            endAt: 9.9,
          },
          {
            word: "seus",
            startAt: 9.9,
            endAt: 10.14,
          },
          {
            word: "amigos!",
            startAt: 10.14,
            endAt: 10.52,
          },
        ],
      },
    },
    {
      page: 11,
      text: "Mia voltou para o jardim de sua avó, ansiosa para contar a todos sobre sua aventura no reino dos alimentos saudáveis e a importância de comer bem. Essa história foi criada para inspirar e ensinar você sobre alimentação saudável.",
      image: "/story/alimentos/images/img11.png",
      audio: {
        content: "/story/alimentos/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Mia",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "voltou",
            startAt: 0.48,
            endAt: 0.88,
          },
          {
            word: "para",
            startAt: 0.88,
            endAt: 1.06,
          },
          {
            word: "o",
            startAt: 1.06,
            endAt: 1.14,
          },
          {
            word: "jardim",
            startAt: 1.14,
            endAt: 1.52,
          },
          {
            word: "de",
            startAt: 1.52,
            endAt: 1.66,
          },
          {
            word: "sua",
            startAt: 1.66,
            endAt: 1.9,
          },
          {
            word: "avó,",
            startAt: 1.9,
            endAt: 2.22,
          },
          {
            word: "ansiosa",
            startAt: 2.42,
            endAt: 2.98,
          },
          {
            word: "para",
            startAt: 2.98,
            endAt: 3.2,
          },
          {
            word: "contar",
            startAt: 3.2,
            endAt: 3.56,
          },
          {
            word: "a",
            startAt: 3.56,
            endAt: 3.76,
          },
          {
            word: "todos",
            startAt: 3.76,
            endAt: 4.04,
          },
          {
            word: "sobre",
            startAt: 4.04,
            endAt: 4.34,
          },
          {
            word: "sua",
            startAt: 4.34,
            endAt: 4.56,
          },
          {
            word: "aventura",
            startAt: 4.56,
            endAt: 5.04,
          },
          {
            word: "no",
            startAt: 5.04,
            endAt: 5.2,
          },
          {
            word: "reino",
            startAt: 5.2,
            endAt: 5.48,
          },
          {
            word: "dos",
            startAt: 5.48,
            endAt: 5.68,
          },
          {
            word: "alimentos",
            startAt: 5.68,
            endAt: 6.1,
          },
          {
            word: "saudáveis",
            startAt: 6.1,
            endAt: 6.72,
          },
          {
            word: "e",
            startAt: 6.72,
            endAt: 6.88,
          },
          {
            word: "a",
            startAt: 6.88,
            endAt: 6.96,
          },
          {
            word: "importância",
            startAt: 6.96,
            endAt: 7.54,
          },
          {
            word: "de",
            startAt: 7.54,
            endAt: 7.68,
          },
          {
            word: "comer",
            startAt: 7.68,
            endAt: 7.96,
          },
          {
            word: "bem.",
            startAt: 7.96,
            endAt: 8.24,
          },
          {
            word: "Essa",
            startAt: 8.84,
            endAt: 9.42,
          },
          {
            word: "história",
            startAt: 9.42,
            endAt: 9.8,
          },
          {
            word: "foi",
            startAt: 9.8,
            endAt: 10,
          },
          {
            word: "criada",
            startAt: 10,
            endAt: 10.46,
          },
          {
            word: "para",
            startAt: 10.46,
            endAt: 10.66,
          },
          {
            word: "inspirar",
            startAt: 10.66,
            endAt: 11.14,
          },
          {
            word: "e",
            startAt: 11.14,
            endAt: 11.24,
          },
          {
            word: "ensinar",
            startAt: 11.24,
            endAt: 11.56,
          },
          {
            word: "você",
            startAt: 11.56,
            endAt: 11.86,
          },
          {
            word: "sobre",
            startAt: 11.86,
            endAt: 12.22,
          },
          {
            word: "alimentação",
            startAt: 12.22,
            endAt: 12.9,
          },
          {
            word: "saudável.",
            startAt: 12.9,
            endAt: 13.54,
          },
        ],
      },
    },
  ],
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
      text: "Era uma vez um menino chamado Beto, que adorava brincar ao ar livre. Um dia, depois de uma tarde de aventuras no parque, ele voltou para casa todo sujo. Sua mãe, Dona Lúcia, decidiu ensinar a Beto a importância da higiene corporal.",
      image: "/story/higiene/images/img2.jpg",
      audio: {
        content: "/story/higiene/audios/1.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Era",
            startAt: 0.0,
            endAt: 0.4,
          },
          {
            word: "uma",
            startAt: 0.4,
            endAt: 0.56,
          },
          {
            word: "vez",
            startAt: 0.56,
            endAt: 0.8,
          },
          {
            word: "um",
            startAt: 0.8,
            endAt: 0.94,
          },
          {
            word: "menino",
            startAt: 0.94,
            endAt: 1.3,
          },
          {
            word: "chamado",
            startAt: 1.3,
            endAt: 1.66,
          },
          {
            word: "Beto,",
            startAt: 1.66,
            endAt: 2.16,
          },
          {
            word: "que",
            startAt: 2.28,
            endAt: 2.46,
          },
          {
            word: "adorava",
            startAt: 2.46,
            endAt: 2.9,
          },
          {
            word: "brincar",
            startAt: 2.9,
            endAt: 3.36,
          },
          {
            word: "ao",
            startAt: 3.36,
            endAt: 3.46,
          },
          {
            word: "ar",
            startAt: 3.46,
            endAt: 3.62,
          },
          {
            word: "livre.",
            startAt: 3.62,
            endAt: 3.96,
          },
          {
            word: "Um",
            startAt: 4.5,
            endAt: 5.08,
          },
          {
            word: "dia,",
            startAt: 5.08,
            endAt: 5.4,
          },
          {
            word: "depois",
            startAt: 5.68,
            endAt: 6.04,
          },
          {
            word: "de",
            startAt: 6.04,
            endAt: 6.22,
          },
          {
            word: "uma",
            startAt: 6.22,
            endAt: 6.34,
          },
          {
            word: "tarde",
            startAt: 6.34,
            endAt: 6.66,
          },
          {
            word: "de",
            startAt: 6.66,
            endAt: 6.82,
          },
          {
            word: "aventuras",
            startAt: 6.82,
            endAt: 7.3,
          },
          {
            word: "no",
            startAt: 7.3,
            endAt: 7.44,
          },
          {
            word: "parque,",
            startAt: 7.44,
            endAt: 7.82,
          },
          {
            word: "ele",
            startAt: 8.02,
            endAt: 8.16,
          },
          {
            word: "voltou",
            startAt: 8.16,
            endAt: 8.54,
          },
          {
            word: "para",
            startAt: 8.54,
            endAt: 8.74,
          },
          {
            word: "casa",
            startAt: 8.74,
            endAt: 9.04,
          },
          {
            word: "todo",
            startAt: 9.04,
            endAt: 9.38,
          },
          {
            word: "sujo.",
            startAt: 9.38,
            endAt: 9.84,
          },
          {
            word: "Sua",
            startAt: 10.48,
            endAt: 11.12,
          },
          {
            word: "mãe,",
            startAt: 11.12,
            endAt: 11.32,
          },
          {
            word: "Dona",
            startAt: 11.62,
            endAt: 11.9,
          },
          {
            word: "Lúcia,",
            startAt: 11.9,
            endAt: 12.24,
          },
          {
            word: "decidiu",
            startAt: 12.52,
            endAt: 13.0,
          },
          {
            word: "ensinar",
            startAt: 13.0,
            endAt: 13.36,
          },
          {
            word: "a",
            startAt: 13.36,
            endAt: 13.48,
          },
          {
            word: "Beto",
            startAt: 13.48,
            endAt: 13.8,
          },
          {
            word: "a",
            startAt: 13.8,
            endAt: 13.9,
          },
          {
            word: "importância",
            startAt: 13.9,
            endAt: 14.46,
          },
          {
            word: "da",
            startAt: 14.46,
            endAt: 14.62,
          },
          {
            word: "higiene",
            startAt: 14.62,
            endAt: 15.12,
          },
          {
            word: "corporal.",
            startAt: 15.12,
            endAt: 15.72,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Dona Lúcia explicou a Beto que lavar as mãos é essencial para evitar germes. "Cante a música da ciranda cirandinha enquanto lava as mãos com sabão", disse ela. Beto achou divertido e começou a cantar enquanto esfregava as mãos.',
      image: "/story/higiene/images/img3.jpg",
      audio: {
        content: "/story/higiene/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Dona", startAt: 0, endAt: 0.6 },
          { word: "Lúcia", startAt: 0.6, endAt: 0.88 },
          { word: "explicou", startAt: 0.88, endAt: 1.32 },
          { word: "a", startAt: 1.32, endAt: 1.5 },
          { word: "Beto", startAt: 1.5, endAt: 1.8 },
          { word: "que", startAt: 1.8, endAt: 1.92 },
          { word: "lavar", startAt: 1.92, endAt: 2.24 },
          { word: "as", startAt: 2.24, endAt: 2.4 },
          { word: "mãos", startAt: 2.4, endAt: 2.72 },
          { word: "é", startAt: 2.72, endAt: 2.86 },
          { word: "essencial", startAt: 2.86, endAt: 3.38 },
          { word: "para", startAt: 3.38, endAt: 3.58 },
          { word: "evitar", startAt: 3.58, endAt: 3.92 },
          { word: "germes.", startAt: 3.92, endAt: 4.54 },
          { word: "Cante", startAt: 5.44, endAt: 5.76 },
          { word: "a", startAt: 5.76, endAt: 5.88 },
          { word: "música", startAt: 5.88, endAt: 6.24 },
          { word: "da", startAt: 6.24, endAt: 6.4 },
          { word: "ciranda", startAt: 6.4, endAt: 6.84 },
          { word: "cirandinha", startAt: 6.84, endAt: 7.5 },
          { word: "enquanto", startAt: 7.5, endAt: 8.02 },
          { word: "lava", startAt: 8.02, endAt: 8.38 },
          { word: "as", startAt: 8.38, endAt: 8.54 },
          { word: "mãos", startAt: 8.54, endAt: 8.84 },
          { word: "com", startAt: 8.84, endAt: 9 },
          { word: "sabão,", startAt: 9, endAt: 9.4 },
          { word: "disse", startAt: 9.58, endAt: 9.94 },
          { word: "ela.", startAt: 9.94, endAt: 10.24 },
          { word: "Beto", startAt: 11.16, endAt: 11.56 },
          { word: "achou", startAt: 11.56, endAt: 11.84 },
          { word: "divertido", startAt: 11.84, endAt: 12.48 },
          { word: "e", startAt: 12.48, endAt: 12.84 },
          { word: "começou", startAt: 12.84, endAt: 13.24 },
          { word: "a", startAt: 13.24, endAt: 13.44 },
          { word: "cantar", startAt: 13.44, endAt: 13.82 },
          { word: "enquanto", startAt: 13.82, endAt: 14.14 },
          { word: "esfregava", startAt: 14.14, endAt: 14.68 },
          { word: "as", startAt: 14.68, endAt: 14.86 },
          { word: "mãos.", startAt: 14.86, endAt: 15.22 },
        ],
      },
    },
    {
      page: 4,
      text: 'Depois, foi a hora de escovar os dentes. "Use a escova de dentes e o creme dental para deixar os dentes limpos e fortes", ensinou dona Lúcia. Beto aprendeu a escovar os dentes em movimentos circulares, sem esquecer a língua e usar o fio dental.',
      image: "/story/higiene/images/img4.png",
      audio: {
        content: "/story/higiene/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Depois,", startAt: 0, endAt: 0.68 },
          { word: "foi", startAt: 0.96, endAt: 1.24 },
          { word: "a", startAt: 1.24, endAt: 1.4 },
          { word: "hora", startAt: 1.4, endAt: 1.58 },
          { word: "de", startAt: 1.58, endAt: 1.74 },
          { word: "escovar", startAt: 1.74, endAt: 2.14 },
          { word: "os", startAt: 2.14, endAt: 2.3 },
          { word: "dentes.", startAt: 2.3, endAt: 2.78 },
          { word: "Use", startAt: 3.3800000000000003, endAt: 3.98 },
          { word: "a", startAt: 3.98, endAt: 4.16 },
          { word: "escova", startAt: 4.16, endAt: 4.5 },
          { word: "de", startAt: 4.5, endAt: 4.64 },
          { word: "dentes", startAt: 4.64, endAt: 5.04 },
          { word: "e", startAt: 5.04, endAt: 5.14 },
          { word: "o", startAt: 5.14, endAt: 5.26 },
          { word: "creme", startAt: 5.26, endAt: 5.5 },
          { word: "dental", startAt: 5.5, endAt: 5.8 },
          { word: "para", startAt: 5.8, endAt: 6.1 },
          { word: "deixar", startAt: 6.1, endAt: 6.4 },
          { word: "os", startAt: 6.4, endAt: 6.62 },
          { word: "dentes", startAt: 6.62, endAt: 7.02 },
          { word: "limpos", startAt: 7.02, endAt: 7.36 },
          { word: "e", startAt: 7.36, endAt: 7.5 },
          { word: "fortes,", startAt: 7.5, endAt: 8.02 },
          { word: "ensinou", startAt: 8.18, endAt: 8.7 },
          { word: "dona", startAt: 8.7, endAt: 8.92 },
          { word: "Lúcia.", startAt: 8.92, endAt: 9.38 },
          { word: "Beto", startAt: 10.3, endAt: 10.62 },
          { word: "aprendeu", startAt: 10.62, endAt: 11.02 },
          { word: "a", startAt: 11.02, endAt: 11.18 },
          { word: "escovar", startAt: 11.18, endAt: 11.52 },
          { word: "os", startAt: 11.52, endAt: 11.68 },
          { word: "dentes", startAt: 11.68, endAt: 12.04 },
          { word: "em", startAt: 12.04, endAt: 12.14 },
          { word: "movimentos", startAt: 12.14, endAt: 12.66 },
          { word: "circulares,", startAt: 12.66, endAt: 13.36 },
          { word: "sem", startAt: 13.6, endAt: 13.94 },
          { word: "esquecer", startAt: 13.94, endAt: 14.38 },
          { word: "a", startAt: 14.38, endAt: 14.48 },
          { word: "língua", startAt: 14.48, endAt: 14.86 },
          { word: "e", startAt: 14.86, endAt: 15.04 },
          { word: "usar", startAt: 15.04, endAt: 15.32 },
          { word: "o", startAt: 15.32, endAt: 15.52 },
          { word: "fio", startAt: 15.52, endAt: 15.68 },
          { word: "dental.", startAt: 15.68, endAt: 15.98 },
        ],
      },
    },
    {
      page: 5,
      text: 'Na manhã seguinte, Beto calçou seus tênis e foi para a escola. Durante a aula de educação física, ele notou que seus pés estavam com chulé. "Você precisa lavar bem os pés todos os dias", lembrou-se das palavras de sua mãe.',
      image: "/story/higiene/images/img5.jpg",
      audio: {
        content: "/story/higiene/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Na", startAt: 0, endAt: 0.36 },
          { word: "manhã", startAt: 0.36, endAt: 0.64 },
          { word: "seguinte,", startAt: 0.64, endAt: 1.12 },
          { word: "Beto", startAt: 1.52, endAt: 1.82 },
          { word: "calçou", startAt: 1.82, endAt: 2.18 },
          { word: "seus", startAt: 2.18, endAt: 2.44 },
          { word: "tênis", startAt: 2.44, endAt: 2.86 },
          { word: "e", startAt: 2.86, endAt: 2.98 },
          { word: "foi", startAt: 2.98, endAt: 3.2 },
          { word: "para", startAt: 3.2, endAt: 3.38 },
          { word: "a", startAt: 3.38, endAt: 3.54 },
          { word: "escola.", startAt: 3.54, endAt: 3.82 },
          { word: "Durante", startAt: 4.6000000000000005, endAt: 5.16 },
          { word: "a", startAt: 5.16, endAt: 5.28 },
          { word: "aula", startAt: 5.28, endAt: 5.52 },
          { word: "de", startAt: 5.52, endAt: 5.66 },
          { word: "educação", startAt: 5.66, endAt: 6.1 },
          { word: "física,", startAt: 6.1, endAt: 6.54 },
          { word: "ele", startAt: 6.8, endAt: 6.96 },
          { word: "notou", startAt: 6.96, endAt: 7.32 },
          { word: "que", startAt: 7.32, endAt: 7.46 },
          { word: "seus", startAt: 7.46, endAt: 7.68 },
          { word: "pés", startAt: 7.68, endAt: 7.96 },
          { word: "estavam", startAt: 7.96, endAt: 8.36 },
          { word: "com", startAt: 8.36, endAt: 8.54 },
          { word: "chulé.", startAt: 8.54, endAt: 8.92 },
          { word: "Você", startAt: 9.6, endAt: 10.16 },
          { word: "precisa", startAt: 10.16, endAt: 10.62 },
          { word: "lavar", startAt: 10.62, endAt: 11.02 },
          { word: "bem", startAt: 11.02, endAt: 11.28 },
          { word: "os", startAt: 11.28, endAt: 11.48 },
          { word: "pés", startAt: 11.48, endAt: 11.78 },
          { word: "todos", startAt: 11.78, endAt: 12.08 },
          { word: "os", startAt: 12.08, endAt: 12.34 },
          { word: "dias,", startAt: 12.34, endAt: 12.66 },
          { word: "lembrou", startAt: 12.9, endAt: 13.52 },
          { word: "-se", startAt: 13.52, endAt: 13.62 },
          { word: "das", startAt: 13.62, endAt: 13.76 },
          { word: "palavras", startAt: 13.76, endAt: 14.22 },
          { word: "de", startAt: 14.22, endAt: 14.42 },
          { word: "sua", startAt: 14.42, endAt: 14.64 },
          { word: "mãe.", startAt: 14.64, endAt: 14.9 },
        ],
      },
    },
    {
      page: 6,
      text: "Beto começou a lavar os pés cuidadosamente todos os dias, garantindo que estavam bem secos antes de calçar os tênis. Ele até encontrou um talquinho perfumado para manter os pés fresquinhos.",
      image: "/story/higiene/images/img6.jpg",
      audio: {
        content: "/story/higiene/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Beto", startAt: 0, endAt: 0.6 },
          { word: "começou", startAt: 0.6, endAt: 0.96 },
          { word: "a", startAt: 0.96, endAt: 1.16 },
          { word: "lavar", startAt: 1.16, endAt: 1.46 },
          { word: "os", startAt: 1.46, endAt: 1.6 },
          { word: "pés", startAt: 1.6, endAt: 1.88 },
          { word: "cuidadosamente", startAt: 1.88, endAt: 2.7 },
          { word: "todos", startAt: 2.7, endAt: 3.06 },
          { word: "os", startAt: 3.06, endAt: 3.34 },
          { word: "dias,", startAt: 3.34, endAt: 3.64 },
          { word: "garantindo", startAt: 3.94, endAt: 4.64 },
          { word: "que", startAt: 4.64, endAt: 4.78 },
          { word: "estavam", startAt: 4.78, endAt: 5.08 },
          { word: "bem", startAt: 5.08, endAt: 5.38 },
          { word: "secos", startAt: 5.38, endAt: 5.9 },
          { word: "antes", startAt: 5.9, endAt: 6.12 },
          { word: "de", startAt: 6.12, endAt: 6.3 },
          { word: "calçar", startAt: 6.3, endAt: 6.68 },
          { word: "os", startAt: 6.68, endAt: 6.86 },
          { word: "tênis.", startAt: 6.86, endAt: 7.26 },
          { word: "Ele", startAt: 7.860000000000001, endAt: 8.46 },
          { word: "até", startAt: 8.46, endAt: 8.68 },
          { word: "encontrou", startAt: 8.68, endAt: 9.16 },
          { word: "um", startAt: 9.16, endAt: 9.28 },
          { word: "talquinho", startAt: 9.28, endAt: 9.72 },
          { word: "perfumado", startAt: 9.72, endAt: 10.38 },
          { word: "para", startAt: 10.38, endAt: 10.6 },
          { word: "manter", startAt: 10.6, endAt: 10.92 },
          { word: "os", startAt: 10.92, endAt: 11.12 },
          { word: "pés", startAt: 11.12, endAt: 11.38 },
          { word: "fresquinhos.", startAt: 11.38, endAt: 11.98 },
        ],
      },
    },
    {
      page: 7,
      text: 'Na escola, a professora Cláudia falou sobre a importância do banho diário. "O banho ajuda a tirar a sujeira e o suor do corpo, deixando você limpinho e cheiroso", explicou ela. Beto decidiu que sempre tomaria banho antes de dormir.',
      image: "/story/higiene/images/img7.jpg",
      audio: {
        content: "/story/higiene/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Na", startAt: 0, endAt: 0.36 },
          { word: "escola,", startAt: 0.36, endAt: 0.82 },
          { word: "a", startAt: 1, endAt: 1.16 },
          { word: "professora", startAt: 1.16, endAt: 1.62 },
          { word: "Cláudia", startAt: 1.62, endAt: 2.04 },
          { word: "falou", startAt: 2.04, endAt: 2.32 },
          { word: "sobre", startAt: 2.32, endAt: 2.6 },
          { word: "a", startAt: 2.6, endAt: 2.68 },
          { word: "importância", startAt: 2.68, endAt: 3.24 },
          { word: "do", startAt: 3.24, endAt: 3.4 },
          { word: "banho", startAt: 3.4, endAt: 3.74 },
          { word: "diário.", startAt: 3.74, endAt: 4.16 },
          { word: "O", startAt: 4.68, endAt: 5.18 },
          { word: "banho", startAt: 5.18, endAt: 5.54 },
          { word: "ajuda", startAt: 5.54, endAt: 5.9 },
          { word: "a", startAt: 5.9, endAt: 6.04 },
          { word: "tirar", startAt: 6.04, endAt: 6.16 },
          { word: "a", startAt: 6.16, endAt: 6.38 },
          { word: "sujeira", startAt: 6.38, endAt: 6.74 },
          { word: "e", startAt: 6.74, endAt: 6.84 },
          { word: "o", startAt: 6.84, endAt: 6.94 },
          { word: "suor", startAt: 6.94, endAt: 7.26 },
          { word: "do", startAt: 7.26, endAt: 7.36 },
          { word: "corpo,", startAt: 7.36, endAt: 7.76 },
          { word: "deixando", startAt: 8.02, endAt: 8.54 },
          { word: "você", startAt: 8.54, endAt: 8.82 },
          { word: "limpinho", startAt: 8.82, endAt: 9.28 },
          { word: "e", startAt: 9.28, endAt: 9.4 },
          { word: "cheiroso,", startAt: 9.4, endAt: 9.88 },
          { word: "explicou", startAt: 10.08, endAt: 10.6 },
          { word: "ela.", startAt: 10.6, endAt: 10.88 },
          { word: "Beto", startAt: 11.82, endAt: 12.2 },
          { word: "decidiu", startAt: 12.2, endAt: 12.64 },
          { word: "que", startAt: 12.64, endAt: 12.78 },
          { word: "sempre", startAt: 12.78, endAt: 13.16 },
          { word: "tomaria", startAt: 13.16, endAt: 13.56 },
          { word: "banho", startAt: 13.56, endAt: 14 },
          { word: "antes", startAt: 14, endAt: 14.3 },
          { word: "de", startAt: 14.3, endAt: 14.46 },
          { word: "dormir.", startAt: 14.46, endAt: 14.78 },
        ],
      },
    },
    {
      page: 8,
      text: "Para completar sua rotina de higiene, Beto aprendeu a cortar as unhas regularmente e a usar roupas limpas todos os dias. Ele até gostou de escolher suas roupas favoritas para ir à escola. Enquanto um uniforme está lavando, ele usa o outro, e assim, durante a semana, está sempre cheiroso.",
      image: "/story/higiene/images/img8.png",
      audio: {
        content: "/story/higiene/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Para", startAt: 0, endAt: 0.38 },
          { word: "completar", startAt: 0.38, endAt: 1 },
          { word: "sua", startAt: 1, endAt: 1.14 },
          { word: "rotina", startAt: 1.14, endAt: 1.58 },
          { word: "de", startAt: 1.58, endAt: 1.72 },
          { word: "higiene,", startAt: 1.72, endAt: 2.14 },
          { word: "Beto", startAt: 2.5, endAt: 2.78 },
          { word: "aprendeu", startAt: 2.78, endAt: 3.18 },
          { word: "a", startAt: 3.18, endAt: 3.32 },
          { word: "cortar", startAt: 3.32, endAt: 3.6 },
          { word: "as", startAt: 3.6, endAt: 3.88 },
          { word: "unhas", startAt: 3.88, endAt: 4.16 },
          { word: "regularmente", startAt: 4.16, endAt: 4.86 },
          { word: "e", startAt: 4.86, endAt: 4.98 },
          { word: "a", startAt: 4.98, endAt: 5.04 },
          { word: "usar", startAt: 5.04, endAt: 5.22 },
          { word: "roupas", startAt: 5.22, endAt: 5.66 },
          { word: "limpas", startAt: 5.66, endAt: 6 },
          { word: "todos", startAt: 6, endAt: 6.34 },
          { word: "os", startAt: 6.34, endAt: 6.58 },
          { word: "dias.", startAt: 6.58, endAt: 6.84 },
          { word: "Ele", startAt: 7.5, endAt: 8.08 },
          { word: "até", startAt: 8.08, endAt: 8.26 },
          { word: "gostou", startAt: 8.26, endAt: 8.72 },
          { word: "de", startAt: 8.72, endAt: 8.84 },
          { word: "escolher", startAt: 8.84, endAt: 9.22 },
          { word: "suas", startAt: 9.22, endAt: 9.46 },
          { word: "roupas", startAt: 9.46, endAt: 9.84 },
          { word: "favoritas", startAt: 9.84, endAt: 10.38 },
          { word: "para", startAt: 10.38, endAt: 10.62 },
          { word: "ir", startAt: 10.62, endAt: 10.82 },
          { word: "à", startAt: 10.82, endAt: 10.9 },
          { word: "escola.", startAt: 10.9, endAt: 11.28 },
          { word: "Enquanto", startAt: 12.14, endAt: 12.72 },
          { word: "um", startAt: 12.72, endAt: 12.84 },
          { word: "uniforme", startAt: 12.84, endAt: 13.38 },
          { word: "está", startAt: 13.38, endAt: 13.52 },
          { word: "lavando,", startAt: 13.52, endAt: 13.88 },
          { word: "ele", startAt: 13.98, endAt: 14.04 },
          { word: "usa", startAt: 14.04, endAt: 14.32 },
          { word: "o", startAt: 14.32, endAt: 14.42 },
          { word: "outro,", startAt: 14.42, endAt: 14.72 },
          { word: "e", startAt: 14.86, endAt: 15.22 },
          { word: "assim,", startAt: 15.22, endAt: 15.58 },
          { word: "durante", startAt: 15.78, endAt: 16.14 },
          { word: "a", startAt: 16.14, endAt: 16.3 },
          { word: "semana,", startAt: 16.3, endAt: 16.66 },
          { word: "está", startAt: 16.98, endAt: 17.2 },
          { word: "sempre", startAt: 17.2, endAt: 17.66 },
          { word: "cheiroso.", startAt: 17.66, endAt: 18.2 },
        ],
      },
    },
    {
      page: 9,
      text: "Os amigos de Beto na escola começaram a notar que ele estava sempre limpinho e cheiroso. Eles decidiram criar o Clube da Higiene, onde todos se ajudavam a lembrar das regras de higiene, como banhos, lavar as mãos, escovar dentes e cabelos, trocar as meias e usar talco nos tênis e axilas e lavar bem os pés e as axilas.",
      image: "/story/higiene/images/img9.jpg",
      audio: {
        content: "/story/higiene/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Os", startAt: 0, endAt: 0.4 },
          { word: "amigos", startAt: 0.4, endAt: 0.74 },
          { word: "de", startAt: 0.74, endAt: 0.9 },
          { word: "Beto", startAt: 0.9, endAt: 1.26 },
          { word: "na", startAt: 1.26, endAt: 1.32 },
          { word: "escola", startAt: 1.32, endAt: 1.66 },
          { word: "começaram", startAt: 1.66, endAt: 2.24 },
          { word: "a", startAt: 2.24, endAt: 2.38 },
          { word: "notar", startAt: 2.38, endAt: 2.7 },
          { word: "que", startAt: 2.7, endAt: 2.86 },
          { word: "ele", startAt: 2.86, endAt: 2.98 },
          { word: "estava", startAt: 2.98, endAt: 3.24 },
          { word: "sempre", startAt: 3.24, endAt: 3.7 },
          { word: "limpinho", startAt: 3.7, endAt: 4.18 },
          { word: "e", startAt: 4.18, endAt: 4.3 },
          { word: "cheiroso.", startAt: 4.3, endAt: 4.78 },
          { word: "Eles", startAt: 5.32, endAt: 5.92 },
          { word: "decidiram", startAt: 5.92, endAt: 6.38 },
          { word: "criar", startAt: 6.38, endAt: 6.62 },
          { word: "o", startAt: 6.62, endAt: 6.8 },
          { word: "Clube", startAt: 6.8, endAt: 7.1 },
          { word: "da", startAt: 7.1, endAt: 7.24 },
          { word: "Higiene,", startAt: 7.24, endAt: 7.72 },
          { word: "onde", startAt: 7.94, endAt: 8.24 },
          { word: "todos", startAt: 8.24, endAt: 8.64 },
          { word: "se", startAt: 8.64, endAt: 8.82 },
          { word: "ajudavam", startAt: 8.82, endAt: 9.26 },
          { word: "a", startAt: 9.26, endAt: 9.36 },
          { word: "lembrar", startAt: 9.36, endAt: 9.68 },
          { word: "das", startAt: 9.68, endAt: 9.92 },
          { word: "regras", startAt: 9.92, endAt: 10.34 },
          { word: "de", startAt: 10.34, endAt: 10.44 },
          { word: "higiene,", startAt: 10.44, endAt: 10.88 },
          { word: "como", startAt: 11.12, endAt: 11.42 },
          { word: "banhos,", startAt: 11.42, endAt: 12.2 },
          { word: "lavar", startAt: 12.38, endAt: 12.82 },
          { word: "as", startAt: 12.82, endAt: 13 },
          { word: "mãos,", startAt: 13, endAt: 13.34 },
          { word: "escovar", startAt: 13.68, endAt: 14.12 },
          { word: "dentes", startAt: 14.12, endAt: 14.58 },
          { word: "e", startAt: 14.58, endAt: 14.66 },
          { word: "cabelos,", startAt: 14.66, endAt: 15.18 },
          { word: "trocar", startAt: 15.42, endAt: 15.76 },
          { word: "as", startAt: 15.76, endAt: 15.98 },
          { word: "meias", startAt: 15.98, endAt: 16.28 },
          { word: "e", startAt: 16.28, endAt: 16.38 },
          { word: "usar", startAt: 16.38, endAt: 16.6 },
          { word: "talco", startAt: 16.6, endAt: 17 },
          { word: "nos", startAt: 17, endAt: 17.18 },
          { word: "tênis", startAt: 17.18, endAt: 17.54 },
          { word: "e", startAt: 17.54, endAt: 17.64 },
          { word: "axilas", startAt: 17.64, endAt: 18.1 },
          { word: "e", startAt: 18.1, endAt: 18.2 },
          { word: "lavar", startAt: 18.2, endAt: 18.54 },
          { word: "bem", startAt: 18.54, endAt: 18.76 },
          { word: "os", startAt: 18.76, endAt: 18.96 },
          { word: "pés", startAt: 18.96, endAt: 19.24 },
          { word: "e", startAt: 19.24, endAt: 19.36 },
          { word: "as", startAt: 19.36, endAt: 19.48 },
          { word: "axilas.", startAt: 19.48, endAt: 20.08 },
        ],
      },
    },
    {
      page: 10,
      text: "Todos os dias, no recreio, Beto e seus amigos cantavam a música Ciranda Cirandinha enquanto lavavam as mãos e compartilhavam dicas de higiene. Eles ficaram famosos na escola por serem os mais higiênicos.",
      image: "/story/higiene/images/img10.png",
      audio: {
        content: "/story/higiene/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "Todos", startAt: 0, endAt: 0.5 },
          { word: "os", startAt: 0.5, endAt: 0.8 },
          { word: "dias,", startAt: 0.8, endAt: 1 },
          { word: "no", startAt: 1.28, endAt: 1.46 },
          { word: "recreio,", startAt: 1.46, endAt: 1.94 },
          { word: "Beto", startAt: 2.2, endAt: 2.5 },
          { word: "e", startAt: 2.5, endAt: 2.56 },
          { word: "seus", startAt: 2.56, endAt: 2.74 },
          { word: "amigos", startAt: 2.74, endAt: 3.14 },
          { word: "cantavam", startAt: 3.14, endAt: 3.74 },
          { word: "a", startAt: 3.74, endAt: 3.86 },
          { word: "música", startAt: 3.86, endAt: 4.24 },
          { word: "Ciranda", startAt: 4.24, endAt: 4.74 },
          { word: "Cirandinha", startAt: 4.74, endAt: 5.3 },
          { word: "enquanto", startAt: 5.3, endAt: 5.68 },
          { word: "lavavam", startAt: 5.68, endAt: 6.24 },
          { word: "as", startAt: 6.24, endAt: 6.42 },
          { word: "mãos", startAt: 6.42, endAt: 6.68 },
          { word: "e", startAt: 6.68, endAt: 6.78 },
          { word: "compartilhavam", startAt: 6.78, endAt: 7.44 },
          { word: "dicas", startAt: 7.44, endAt: 7.8 },
          { word: "de", startAt: 7.8, endAt: 8 },
          { word: "higiene.", startAt: 8, endAt: 8.42 },
          { word: "Eles", startAt: 9.02, endAt: 9.62 },
          { word: "ficaram", startAt: 9.62, endAt: 10 },
          { word: "famosos", startAt: 10, endAt: 10.54 },
          { word: "na", startAt: 10.54, endAt: 10.68 },
          { word: "escola", startAt: 10.68, endAt: 11.04 },
          { word: "por", startAt: 11.04, endAt: 11.28 },
          { word: "serem", startAt: 11.28, endAt: 11.54 },
          { word: "os", startAt: 11.54, endAt: 11.74 },
          { word: "mais", startAt: 11.74, endAt: 12.02 },
          { word: "higiênicos.", startAt: 12.02, endAt: 12.66 },
        ],
      },
    },
    {
      page: 11,
      text: "E assim, Beto e seus amigos do Clube da Higiene aprenderam que manter o corpo limpo é divertido e importante para a saúde. Muitos coleguinhas queriam entrar no Clube da Higiene. Esta história foi criada para incentivar você a ter hábitos de higiene de forma divertida e educativa.",
      image: "/story/higiene/images/img11.jpg",
      audio: {
        content: "/story/higiene/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          { word: "E", startAt: 0, endAt: 0.34 },
          { word: "assim,", startAt: 0.34, endAt: 0.68 },
          { word: "Beto", startAt: 1.06, endAt: 1.32 },
          { word: "e", startAt: 1.32, endAt: 1.4 },
          { word: "seus", startAt: 1.4, endAt: 1.56 },
          { word: "amigos", startAt: 1.56, endAt: 1.92 },
          { word: "do", startAt: 1.92, endAt: 2.1 },
          { word: "Clube", startAt: 2.1, endAt: 2.42 },
          { word: "da", startAt: 2.42, endAt: 2.56 },
          { word: "Higiene", startAt: 2.56, endAt: 2.98 },
          { word: "aprenderam", startAt: 2.98, endAt: 3.56 },
          { word: "que", startAt: 3.56, endAt: 3.66 },
          { word: "manter", startAt: 3.66, endAt: 3.96 },
          { word: "o", startAt: 3.96, endAt: 4.12 },
          { word: "corpo", startAt: 4.12, endAt: 4.42 },
          { word: "limpo", startAt: 4.42, endAt: 4.8 },
          { word: "é", startAt: 4.8, endAt: 4.96 },
          { word: "divertido", startAt: 4.96, endAt: 5.44 },
          { word: "e", startAt: 5.44, endAt: 5.54 },
          { word: "importante", startAt: 5.54, endAt: 5.96 },
          { word: "para", startAt: 5.96, endAt: 6.28 },
          { word: "a", startAt: 6.28, endAt: 6.4 },
          { word: "saúde.", startAt: 6.4, endAt: 6.78 },
          { word: "Muitos", startAt: 7.52, endAt: 8.16 },
          { word: "coleguinhas", startAt: 8.16, endAt: 8.74 },
          { word: "queriam", startAt: 8.74, endAt: 9.14 },
          { word: "entrar", startAt: 9.14, endAt: 9.4 },
          { word: "no", startAt: 9.4, endAt: 9.64 },
          { word: "Clube", startAt: 9.64, endAt: 9.96 },
          { word: "da", startAt: 9.96, endAt: 10.1 },
          { word: "Higiene.", startAt: 10.1, endAt: 10.54 },
          { word: "Esta", startAt: 11.12, endAt: 11.76 },
          { word: "história", startAt: 11.76, endAt: 12.14 },
          { word: "foi", startAt: 12.14, endAt: 12.36 },
          { word: "criada", startAt: 12.36, endAt: 12.8 },
          { word: "para", startAt: 12.8, endAt: 12.98 },
          { word: "incentivar", startAt: 12.98, endAt: 13.58 },
          { word: "você", startAt: 13.58, endAt: 13.88 },
          { word: "a", startAt: 13.88, endAt: 14.02 },
          { word: "ter", startAt: 14.02, endAt: 14.16 },
          { word: "hábitos", startAt: 14.16, endAt: 14.56 },
          { word: "de", startAt: 14.56, endAt: 14.68 },
          { word: "higiene", startAt: 14.68, endAt: 15.16 },
          { word: "de", startAt: 15.16, endAt: 15.32 },
          { word: "forma", startAt: 15.32, endAt: 15.64 },
          { word: "divertida", startAt: 15.64, endAt: 16.24 },
          { word: "e", startAt: 16.24, endAt: 16.36 },
          { word: "educativa.", startAt: 16.36, endAt: 17.04 },
        ],
      },
    },
  ],
};

const florestasStory: Story = {
  title: "Tupã, o protetor das florestas e matas",
  slug: "tupa-florestas",
  pages: [
    {
      page: 1,
      text: "Tupã, o protetor das florestas e matas",
      image: "/story/florestas/images/capa.png",
    },
    {
      page: 2,
      text: "Era uma vez, uma menina chamada Bia e seu amigo, um cachorro chamado Tito. Eles adoravam explorar a floresta ao lado de sua casa e descobrir novas aventuras. Um dia, encontraram uma figura mística brilhante entre as árvores. Era Tupã, o deus indígena do trovão e da natureza.",
      image: "/story/florestas/images/img2.png",
      audio: {
        content: "/story/florestas/audios/1.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Era",
            startAt: 0,
            endAt: 0.4,
          },
          {
            word: "uma",
            startAt: 0.4,
            endAt: 0.54,
          },
          {
            word: "vez,",
            startAt: 0.54,
            endAt: 0.9,
          },
          {
            word: "uma",
            startAt: 1.1,
            endAt: 1.44,
          },
          {
            word: "menina",
            startAt: 1.44,
            endAt: 1.78,
          },
          {
            word: "chamada",
            startAt: 1.78,
            endAt: 2.2,
          },
          {
            word: "Bea",
            startAt: 2.2,
            endAt: 2.44,
          },
          {
            word: "e",
            startAt: 2.44,
            endAt: 2.58,
          },
          {
            word: "seu",
            startAt: 2.58,
            endAt: 2.74,
          },
          {
            word: "amigo,",
            startAt: 2.74,
            endAt: 3.1,
          },
          {
            word: "um",
            startAt: 3.28,
            endAt: 3.5,
          },
          {
            word: "cachorro",
            startAt: 3.5,
            endAt: 3.94,
          },
          {
            word: "chamado",
            startAt: 3.94,
            endAt: 4.32,
          },
          {
            word: "Tito.",
            startAt: 4.32,
            endAt: 4.72,
          },
          {
            word: "Eles",
            startAt: 5.2,
            endAt: 5.88,
          },
          {
            word: "adoravam",
            startAt: 5.88,
            endAt: 6.36,
          },
          {
            word: "explorar",
            startAt: 6.36,
            endAt: 6.82,
          },
          {
            word: "a",
            startAt: 6.82,
            endAt: 6.9,
          },
          {
            word: "floresta",
            startAt: 6.9,
            endAt: 7.34,
          },
          {
            word: "ao",
            startAt: 7.34,
            endAt: 7.52,
          },
          {
            word: "lado",
            startAt: 7.52,
            endAt: 7.72,
          },
          {
            word: "de",
            startAt: 7.72,
            endAt: 7.86,
          },
          {
            word: "sua",
            startAt: 7.86,
            endAt: 8.08,
          },
          {
            word: "casa",
            startAt: 8.08,
            endAt: 8.44,
          },
          {
            word: "e",
            startAt: 8.44,
            endAt: 8.56,
          },
          {
            word: "descobrir",
            startAt: 8.56,
            endAt: 9,
          },
          {
            word: "novas",
            startAt: 9,
            endAt: 9.46,
          },
          {
            word: "aventuras.",
            startAt: 9.46,
            endAt: 10.1,
          },
          {
            word: "Um",
            startAt: 10.62,
            endAt: 11.24,
          },
          {
            word: "dia,",
            startAt: 11.24,
            endAt: 11.56,
          },
          {
            word: "encontraram",
            startAt: 11.78,
            endAt: 12.42,
          },
          {
            word: "uma",
            startAt: 12.42,
            endAt: 12.58,
          },
          {
            word: "figura",
            startAt: 12.58,
            endAt: 12.96,
          },
          {
            word: "mística",
            startAt: 12.96,
            endAt: 13.46,
          },
          {
            word: "brilhante",
            startAt: 13.46,
            endAt: 14,
          },
          {
            word: "entre",
            startAt: 14,
            endAt: 14.24,
          },
          {
            word: "as",
            startAt: 14.24,
            endAt: 14.44,
          },
          {
            word: "árvores.",
            startAt: 14.44,
            endAt: 14.9,
          },
          {
            word: "Era",
            startAt: 15.46,
            endAt: 16.06,
          },
          {
            word: "Tupã,",
            startAt: 16.06,
            endAt: 16.48,
          },
          {
            word: "o",
            startAt: 16.7,
            endAt: 16.96,
          },
          {
            word: "deus",
            startAt: 16.96,
            endAt: 17.22,
          },
          {
            word: "indígena",
            startAt: 17.22,
            endAt: 17.72,
          },
          {
            word: "do",
            startAt: 17.72,
            endAt: 17.82,
          },
          {
            word: "trovão",
            startAt: 17.82,
            endAt: 18.22,
          },
          {
            word: "e",
            startAt: 18.22,
            endAt: 18.32,
          },
          {
            word: "da",
            startAt: 18.32,
            endAt: 18.44,
          },
          {
            word: "natureza.",
            startAt: 18.44,
            endAt: 19,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Tupã, com sua voz suave e poderosa, disse, "Bia, Tito, preciso da ajuda de vocês. O planeta está em perigo por causa das mudanças climáticas e danos à natureza." Bia e Tito sentiram a urgência da missão e decidiram ajudar Tupã.',
      image: "/story/florestas/images/img3.png",
      audio: {
        content: "/story/florestas/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupan,",
            startAt: 0,
            endAt: 0.6,
          },
          {
            word: "com",
            startAt: 0.76,
            endAt: 1.02,
          },
          {
            word: "sua",
            startAt: 1.02,
            endAt: 1.3,
          },
          {
            word: "voz",
            startAt: 1.3,
            endAt: 1.56,
          },
          {
            word: "suave",
            startAt: 1.56,
            endAt: 2,
          },
          {
            word: "e",
            startAt: 2,
            endAt: 2.12,
          },
          {
            word: "poderosa,",
            startAt: 2.12,
            endAt: 2.66,
          },
          {
            word: "disse,",
            startAt: 2.96,
            endAt: 3.32,
          },
          {
            word: "Bia,",
            startAt: 3.56,
            endAt: 3.98,
          },
          {
            word: "Tito,",
            startAt: 4.22,
            endAt: 4.52,
          },
          {
            word: "preciso",
            startAt: 4.8,
            endAt: 5.3,
          },
          {
            word: "da",
            startAt: 5.3,
            endAt: 5.46,
          },
          {
            word: "ajuda",
            startAt: 5.46,
            endAt: 5.8,
          },
          {
            word: "de",
            startAt: 5.8,
            endAt: 5.96,
          },
          {
            word: "vocês.",
            startAt: 5.96,
            endAt: 6.5,
          },
          {
            word: "O",
            startAt: 7.28,
            endAt: 7.58,
          },
          {
            word: "planeta",
            startAt: 7.58,
            endAt: 7.96,
          },
          {
            word: "está",
            startAt: 7.96,
            endAt: 8.26,
          },
          {
            word: "em",
            startAt: 8.26,
            endAt: 8.4,
          },
          {
            word: "perigo",
            startAt: 8.4,
            endAt: 8.7,
          },
          {
            word: "por",
            startAt: 8.7,
            endAt: 8.96,
          },
          {
            word: "causa",
            startAt: 8.96,
            endAt: 9.24,
          },
          {
            word: "das",
            startAt: 9.24,
            endAt: 9.42,
          },
          {
            word: "mudanças",
            startAt: 9.42,
            endAt: 9.96,
          },
          {
            word: "climáticas",
            startAt: 9.96,
            endAt: 10.5,
          },
          {
            word: "e",
            startAt: 10.5,
            endAt: 10.7,
          },
          {
            word: "danos",
            startAt: 10.7,
            endAt: 11.06,
          },
          {
            word: "à",
            startAt: 11.06,
            endAt: 11.16,
          },
          {
            word: "natureza.",
            startAt: 11.16,
            endAt: 11.72,
          },
          {
            word: "Bia",
            startAt: 12.28,
            endAt: 12.88,
          },
          {
            word: "e",
            startAt: 12.88,
            endAt: 13.02,
          },
          {
            word: "Tito",
            startAt: 13.02,
            endAt: 13.32,
          },
          {
            word: "sentiram",
            startAt: 13.32,
            endAt: 13.82,
          },
          {
            word: "a",
            startAt: 13.82,
            endAt: 13.9,
          },
          {
            word: "urgência",
            startAt: 13.9,
            endAt: 14.34,
          },
          {
            word: "da",
            startAt: 14.34,
            endAt: 14.48,
          },
          {
            word: "missão",
            startAt: 14.48,
            endAt: 14.84,
          },
          {
            word: "e",
            startAt: 14.84,
            endAt: 14.96,
          },
          {
            word: "decidiram",
            startAt: 14.96,
            endAt: 15.44,
          },
          {
            word: "ajudar",
            startAt: 15.44,
            endAt: 15.76,
          },
          {
            word: "Tupan.",
            startAt: 15.76,
            endAt: 16.18,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'Tupã explicou que o clima do planeta estava mudando rapidamente. "O planeta está esquentando, e isso está causando problemas para os animais e as plantas. Precisamos fazer algo!", disse Tupã.',
      image: "/story/florestas/images/img4.png",
      audio: {
        content: "/story/florestas/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupan",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "explicou",
            startAt: 0.58,
            endAt: 1.04,
          },
          {
            word: "que",
            startAt: 1.04,
            endAt: 1.18,
          },
          {
            word: "o",
            startAt: 1.18,
            endAt: 1.26,
          },
          {
            word: "clima",
            startAt: 1.26,
            endAt: 1.54,
          },
          {
            word: "do",
            startAt: 1.54,
            endAt: 1.66,
          },
          {
            word: "planeta",
            startAt: 1.66,
            endAt: 2.02,
          },
          {
            word: "estava",
            startAt: 2.02,
            endAt: 2.4,
          },
          {
            word: "mudando",
            startAt: 2.4,
            endAt: 2.86,
          },
          {
            word: "rapidamente.",
            startAt: 2.86,
            endAt: 3.6,
          },
          {
            word: "O",
            startAt: 4.3,
            endAt: 4.66,
          },
          {
            word: "planeta",
            startAt: 4.66,
            endAt: 5.04,
          },
          {
            word: "está",
            startAt: 5.04,
            endAt: 5.3,
          },
          {
            word: "esquentando,",
            startAt: 5.3,
            endAt: 5.92,
          },
          {
            word: "e",
            startAt: 6.04,
            endAt: 6.34,
          },
          {
            word: "isso",
            startAt: 6.34,
            endAt: 6.5,
          },
          {
            word: "está",
            startAt: 6.5,
            endAt: 6.7,
          },
          {
            word: "causando",
            startAt: 6.7,
            endAt: 7.1,
          },
          {
            word: "problemas",
            startAt: 7.1,
            endAt: 7.58,
          },
          {
            word: "para",
            startAt: 7.58,
            endAt: 7.84,
          },
          {
            word: "os",
            startAt: 7.84,
            endAt: 7.98,
          },
          {
            word: "animais",
            startAt: 7.98,
            endAt: 8.42,
          },
          {
            word: "e",
            startAt: 8.42,
            endAt: 8.54,
          },
          {
            word: "as",
            startAt: 8.54,
            endAt: 8.68,
          },
          {
            word: "plantas.",
            startAt: 8.68,
            endAt: 9.2,
          },
          {
            word: "Precisamos",
            startAt: 10.08,
            endAt: 10.8,
          },
          {
            word: "fazer",
            startAt: 10.8,
            endAt: 11.12,
          },
          {
            word: "algo,",
            startAt: 11.12,
            endAt: 11.48,
          },
          {
            word: "disse",
            startAt: 11.68,
            endAt: 12.02,
          },
          {
            word: "Tupan.",
            startAt: 12.02,
            endAt: 12.46,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Bia e Tito decidiram ajudar. Primeiro, aprenderam que é importante reciclar. "Vamos separar o lixo e reutilizar materiais para proteger a natureza!", disse Bia, enquanto Tito abanava o rabo animado.',
      image: "/story/florestas/images/img5.png",
      audio: {
        content: "/story/florestas/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Bia",
            startAt: 0,
            endAt: 0.5,
          },
          {
            word: "e",
            startAt: 0.5,
            endAt: 0.66,
          },
          {
            word: "Tito",
            startAt: 0.66,
            endAt: 0.88,
          },
          {
            word: "decidiram",
            startAt: 0.88,
            endAt: 1.42,
          },
          {
            word: "ajudar.",
            startAt: 1.42,
            endAt: 1.84,
          },
          {
            word: "Primeiro,",
            startAt: 2.52,
            endAt: 3.26,
          },
          {
            word: "aprenderam",
            startAt: 3.58,
            endAt: 4.08,
          },
          {
            word: "que",
            startAt: 4.08,
            endAt: 4.22,
          },
          {
            word: "é",
            startAt: 4.22,
            endAt: 4.32,
          },
          {
            word: "importante",
            startAt: 4.32,
            endAt: 4.9,
          },
          {
            word: "reciclar.",
            startAt: 4.9,
            endAt: 5.56,
          },
          {
            word: "Vamos",
            startAt: 5.96,
            endAt: 6.7,
          },
          {
            word: "separar",
            startAt: 6.7,
            endAt: 7.22,
          },
          {
            word: "o",
            startAt: 7.22,
            endAt: 7.32,
          },
          {
            word: "lixo",
            startAt: 7.32,
            endAt: 7.64,
          },
          {
            word: "e",
            startAt: 7.64,
            endAt: 7.74,
          },
          {
            word: "reutilizar",
            startAt: 7.74,
            endAt: 8.3,
          },
          {
            word: "materiais",
            startAt: 8.3,
            endAt: 8.9,
          },
          {
            word: "para",
            startAt: 8.9,
            endAt: 9.06,
          },
          {
            word: "proteger",
            startAt: 9.06,
            endAt: 9.54,
          },
          {
            word: "a",
            startAt: 9.54,
            endAt: 9.66,
          },
          {
            word: "natureza,",
            startAt: 9.66,
            endAt: 10.24,
          },
          {
            word: "disse",
            startAt: 10.38,
            endAt: 10.74,
          },
          {
            word: "Bia,",
            startAt: 10.74,
            endAt: 11.12,
          },
          {
            word: "enquanto",
            startAt: 11.32,
            endAt: 11.72,
          },
          {
            word: "Tito",
            startAt: 11.72,
            endAt: 12.04,
          },
          {
            word: "abanava",
            startAt: 12.04,
            endAt: 12.46,
          },
          {
            word: "o",
            startAt: 12.46,
            endAt: 12.58,
          },
          {
            word: "rabo",
            startAt: 12.58,
            endAt: 12.88,
          },
          {
            word: "animado.",
            startAt: 12.88,
            endAt: 13.34,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Eles também aprenderam a economizar água. "Vamos fechar a torneira enquanto escovamos os dentes e tomar banhos mais curtos!", disse Bia. Tito adorou a ideia e latiu em aprovação.',
      image: "/story/florestas/images/img6.png",
      audio: {
        content: "/story/florestas/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Eles",
            startAt: 0,
            endAt: 0.44,
          },
          {
            word: "também",
            startAt: 0.44,
            endAt: 0.76,
          },
          {
            word: "aprenderam",
            startAt: 0.76,
            endAt: 1.42,
          },
          {
            word: "a",
            startAt: 1.42,
            endAt: 1.52,
          },
          {
            word: "economizar",
            startAt: 1.52,
            endAt: 2.16,
          },
          {
            word: "água.",
            startAt: 2.16,
            endAt: 2.5,
          },
          {
            word: "Vamos",
            startAt: 3.08,
            endAt: 3.76,
          },
          {
            word: "fechar",
            startAt: 3.76,
            endAt: 4.14,
          },
          {
            word: "a",
            startAt: 4.14,
            endAt: 4.26,
          },
          {
            word: "torneira",
            startAt: 4.26,
            endAt: 4.6,
          },
          {
            word: "enquanto",
            startAt: 4.6,
            endAt: 4.84,
          },
          {
            word: "escovamos",
            startAt: 4.84,
            endAt: 5.38,
          },
          {
            word: "os",
            startAt: 5.38,
            endAt: 5.56,
          },
          {
            word: "dentes",
            startAt: 5.56,
            endAt: 5.92,
          },
          {
            word: "e",
            startAt: 5.92,
            endAt: 6,
          },
          {
            word: "tomar",
            startAt: 6,
            endAt: 6.26,
          },
          {
            word: "banhos",
            startAt: 6.26,
            endAt: 6.7,
          },
          {
            word: "mais",
            startAt: 6.7,
            endAt: 7.02,
          },
          {
            word: "curtos,",
            startAt: 7.02,
            endAt: 7.6,
          },
          {
            word: "disse",
            startAt: 7.76,
            endAt: 8.12,
          },
          {
            word: "Bia.",
            startAt: 8.12,
            endAt: 8.48,
          },
          {
            word: "Tito",
            startAt: 9.14,
            endAt: 9.72,
          },
          {
            word: "adorou",
            startAt: 9.72,
            endAt: 10.06,
          },
          {
            word: "a",
            startAt: 10.06,
            endAt: 10.16,
          },
          {
            word: "ideia",
            startAt: 10.16,
            endAt: 10.48,
          },
          {
            word: "e",
            startAt: 10.48,
            endAt: 10.68,
          },
          {
            word: "latiu",
            startAt: 10.68,
            endAt: 11.06,
          },
          {
            word: "em",
            startAt: 11.06,
            endAt: 11.2,
          },
          {
            word: "aprovação.",
            startAt: 11.2,
            endAt: 11.8,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'Tupã mostrou a eles que plantar árvores ajuda a combater as mudanças climáticas. "As árvores absorvem o gás carbônico e produzem oxigênio", explicou Tupã. Bia e Tito plantaram muitas árvores ao redor da floresta.',
      image: "/story/florestas/images/img7.png",
      audio: {
        content: "/story/florestas/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupã",
            startAt: 0,
            endAt: 0.54,
          },
          {
            word: "mostrou",
            startAt: 0.54,
            endAt: 1,
          },
          {
            word: "a",
            startAt: 1,
            endAt: 1.14,
          },
          {
            word: "eles",
            startAt: 1.14,
            endAt: 1.4,
          },
          {
            word: "que",
            startAt: 1.4,
            endAt: 1.54,
          },
          {
            word: "plantar",
            startAt: 1.54,
            endAt: 1.98,
          },
          {
            word: "árvores",
            startAt: 1.98,
            endAt: 2.4,
          },
          {
            word: "ajuda",
            startAt: 2.4,
            endAt: 2.8,
          },
          {
            word: "a",
            startAt: 2.8,
            endAt: 2.98,
          },
          {
            word: "combater",
            startAt: 2.98,
            endAt: 3.3,
          },
          {
            word: "as",
            startAt: 3.3,
            endAt: 3.5,
          },
          {
            word: "mudanças",
            startAt: 3.5,
            endAt: 4.02,
          },
          {
            word: "climáticas.",
            startAt: 4.02,
            endAt: 4.66,
          },
          {
            word: "As",
            startAt: 5.24,
            endAt: 5.9,
          },
          {
            word: "árvores",
            startAt: 5.9,
            endAt: 6.38,
          },
          {
            word: "absorvem",
            startAt: 6.38,
            endAt: 6.98,
          },
          {
            word: "o",
            startAt: 6.98,
            endAt: 7.08,
          },
          {
            word: "gás",
            startAt: 7.08,
            endAt: 7.3,
          },
          {
            word: "carbônico",
            startAt: 7.3,
            endAt: 7.94,
          },
          {
            word: "e",
            startAt: 7.94,
            endAt: 8.08,
          },
          {
            word: "produzem",
            startAt: 8.08,
            endAt: 8.56,
          },
          {
            word: "oxigênio,",
            startAt: 8.56,
            endAt: 9.24,
          },
          {
            word: "explicou",
            startAt: 9.42,
            endAt: 9.96,
          },
          {
            word: "Tupã.",
            startAt: 9.96,
            endAt: 10.38,
          },
          {
            word: "Bia",
            startAt: 11.3,
            endAt: 11.56,
          },
          {
            word: "e",
            startAt: 11.56,
            endAt: 11.66,
          },
          {
            word: "Tito",
            startAt: 11.66,
            endAt: 11.88,
          },
          {
            word: "plantaram",
            startAt: 11.88,
            endAt: 12.36,
          },
          {
            word: "muitas",
            startAt: 12.36,
            endAt: 12.72,
          },
          {
            word: "árvores",
            startAt: 12.72,
            endAt: 13.26,
          },
          {
            word: "ao",
            startAt: 13.26,
            endAt: 13.42,
          },
          {
            word: "redor",
            startAt: 13.42,
            endAt: 13.72,
          },
          {
            word: "da",
            startAt: 13.72,
            endAt: 13.86,
          },
          {
            word: "floresta.",
            startAt: 13.86,
            endAt: 14.42,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Durante a aventura, encontraram uma tartaruga marinha que estava triste porque havia muito lixo no mar. "Precisamos ajudar a limpar!", disse Bia. Eles recolheram o lixo e deixaram a praia limpa para a tartaruga.',
      image: "/story/florestas/images/img8.png",
      audio: {
        content: "/story/florestas/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Durante",
            startAt: 0,
            endAt: 0.62,
          },
          {
            word: "a",
            startAt: 0.62,
            endAt: 0.7,
          },
          {
            word: "aventura,",
            startAt: 0.7,
            endAt: 1.18,
          },
          {
            word: "encontraram",
            startAt: 1.46,
            endAt: 2.08,
          },
          {
            word: "uma",
            startAt: 2.08,
            endAt: 2.24,
          },
          {
            word: "tartaruga",
            startAt: 2.24,
            endAt: 2.8,
          },
          {
            word: "marinha",
            startAt: 2.8,
            endAt: 3.2,
          },
          {
            word: "que",
            startAt: 3.2,
            endAt: 3.36,
          },
          {
            word: "estava",
            startAt: 3.36,
            endAt: 3.64,
          },
          {
            word: "triste",
            startAt: 3.64,
            endAt: 4,
          },
          {
            word: "porque",
            startAt: 4,
            endAt: 4.32,
          },
          {
            word: "havia",
            startAt: 4.32,
            endAt: 4.6,
          },
          {
            word: "muito",
            startAt: 4.6,
            endAt: 5.12,
          },
          {
            word: "lixo",
            startAt: 5.12,
            endAt: 5.46,
          },
          {
            word: "no",
            startAt: 5.46,
            endAt: 5.6,
          },
          {
            word: "mar.",
            startAt: 5.6,
            endAt: 5.86,
          },
          {
            word: "Precisamos",
            startAt: 6.680000000000001,
            endAt: 7.36,
          },
          {
            word: "ajudar",
            startAt: 7.36,
            endAt: 7.72,
          },
          {
            word: "a",
            startAt: 7.72,
            endAt: 7.86,
          },
          {
            word: "limpar,",
            startAt: 7.86,
            endAt: 8.28,
          },
          {
            word: "disse",
            startAt: 8.44,
            endAt: 8.82,
          },
          {
            word: "Bia.",
            startAt: 8.82,
            endAt: 9.2,
          },
          {
            word: "Eles",
            startAt: 9.78,
            endAt: 10.38,
          },
          {
            word: "recolheram",
            startAt: 10.38,
            endAt: 10.92,
          },
          {
            word: "o",
            startAt: 10.92,
            endAt: 11.02,
          },
          {
            word: "lixo",
            startAt: 11.02,
            endAt: 11.3,
          },
          {
            word: "e",
            startAt: 11.3,
            endAt: 11.4,
          },
          {
            word: "deixaram",
            startAt: 11.4,
            endAt: 11.78,
          },
          {
            word: "a",
            startAt: 11.78,
            endAt: 11.88,
          },
          {
            word: "praia",
            startAt: 11.88,
            endAt: 12.16,
          },
          {
            word: "limpa",
            startAt: 12.16,
            endAt: 12.54,
          },
          {
            word: "para",
            startAt: 12.54,
            endAt: 12.76,
          },
          {
            word: "a",
            startAt: 12.76,
            endAt: 12.86,
          },
          {
            word: "tartaruga.",
            startAt: 12.86,
            endAt: 13.36,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'Tupã também ensinou a importância de economizar energia. "Apague as luzes quando sair de um cômodo e use mais a luz do sol!", disse Tupan. Bia começou a praticar isso em sua casa.',
      image: "/story/florestas/images/img9.png",
      audio: {
        content: "/story/florestas/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupan",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "também",
            startAt: 0.58,
            endAt: 0.96,
          },
          {
            word: "ensinou",
            startAt: 0.96,
            endAt: 1.38,
          },
          {
            word: "a",
            startAt: 1.38,
            endAt: 1.48,
          },
          {
            word: "importância",
            startAt: 1.48,
            endAt: 2.06,
          },
          {
            word: "de",
            startAt: 2.06,
            endAt: 2.2,
          },
          {
            word: "economizar",
            startAt: 2.2,
            endAt: 2.74,
          },
          {
            word: "energia.",
            startAt: 2.74,
            endAt: 3.24,
          },
          {
            word: "Apague",
            startAt: 4.06,
            endAt: 4.66,
          },
          {
            word: "as",
            startAt: 4.66,
            endAt: 4.82,
          },
          {
            word: "luzes",
            startAt: 4.82,
            endAt: 5.22,
          },
          {
            word: "quando",
            startAt: 5.22,
            endAt: 5.46,
          },
          {
            word: "sair",
            startAt: 5.46,
            endAt: 5.8,
          },
          {
            word: "de",
            startAt: 5.8,
            endAt: 5.96,
          },
          {
            word: "um",
            startAt: 5.96,
            endAt: 6.1,
          },
          {
            word: "cômodo",
            startAt: 6.1,
            endAt: 6.46,
          },
          {
            word: "e",
            startAt: 6.46,
            endAt: 6.62,
          },
          {
            word: "use",
            startAt: 6.62,
            endAt: 6.86,
          },
          {
            word: "mais",
            startAt: 6.86,
            endAt: 7.2,
          },
          {
            word: "a",
            startAt: 7.2,
            endAt: 7.36,
          },
          {
            word: "luz",
            startAt: 7.36,
            endAt: 7.6,
          },
          {
            word: "do",
            startAt: 7.6,
            endAt: 7.76,
          },
          {
            word: "sol,",
            startAt: 7.76,
            endAt: 8.06,
          },
          {
            word: "disse",
            startAt: 8.28,
            endAt: 8.58,
          },
          {
            word: "Tupan.",
            startAt: 8.58,
            endAt: 9.04,
          },
          {
            word: "Bia",
            startAt: 9.92,
            endAt: 10.2,
          },
          {
            word: "começou",
            startAt: 10.2,
            endAt: 10.58,
          },
          {
            word: "a",
            startAt: 10.58,
            endAt: 10.74,
          },
          {
            word: "praticar",
            startAt: 10.74,
            endAt: 11.22,
          },
          {
            word: "isso",
            startAt: 11.22,
            endAt: 11.46,
          },
          {
            word: "em",
            startAt: 11.46,
            endAt: 11.58,
          },
          {
            word: "sua",
            startAt: 11.58,
            endAt: 11.82,
          },
          {
            word: "casa.",
            startAt: 11.82,
            endAt: 12.18,
          },
        ],
      },
    },
    {
      page: 10,
      text: 'Ao final da aventura, Tupan agradeceu a Bia e Tito por sua ajuda. "Vocês são verdadeiros heróis do planeta. Continuem cuidando do meio ambiente", disse Tupã.',
      image: "/story/florestas/images/img10.png",
      audio: {
        content: "/story/florestas/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Ao",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "final",
            startAt: 0.36,
            endAt: 0.66,
          },
          {
            word: "da",
            startAt: 0.66,
            endAt: 0.78,
          },
          {
            word: "aventura,",
            startAt: 0.78,
            endAt: 1.28,
          },
          {
            word: "Tupan",
            startAt: 1.6,
            endAt: 1.9,
          },
          {
            word: "agradeceu",
            startAt: 1.9,
            endAt: 2.46,
          },
          {
            word: "a",
            startAt: 2.46,
            endAt: 2.64,
          },
          {
            word: "Bia",
            startAt: 2.64,
            endAt: 2.82,
          },
          {
            word: "e",
            startAt: 2.82,
            endAt: 2.96,
          },
          {
            word: "Tito",
            startAt: 2.96,
            endAt: 3.16,
          },
          {
            word: "por",
            startAt: 3.16,
            endAt: 3.36,
          },
          {
            word: "sua",
            startAt: 3.36,
            endAt: 3.58,
          },
          {
            word: "ajuda.",
            startAt: 3.58,
            endAt: 3.94,
          },
          {
            word: "Vocês",
            startAt: 4.56,
            endAt: 5.2,
          },
          {
            word: "são",
            startAt: 5.2,
            endAt: 5.5,
          },
          {
            word: "verdadeiros",
            startAt: 5.5,
            endAt: 6.16,
          },
          {
            word: "heróis",
            startAt: 6.16,
            endAt: 6.58,
          },
          {
            word: "do",
            startAt: 6.58,
            endAt: 6.68,
          },
          {
            word: "planeta.",
            startAt: 6.68,
            endAt: 7.16,
          },
          {
            word: "Continuem",
            startAt: 8.1,
            endAt: 8.74,
          },
          {
            word: "cuidando",
            startAt: 8.74,
            endAt: 9.3,
          },
          {
            word: "do",
            startAt: 9.3,
            endAt: 9.48,
          },
          {
            word: "meio",
            startAt: 9.48,
            endAt: 9.72,
          },
          {
            word: "ambiente,",
            startAt: 9.72,
            endAt: 10.26,
          },
          {
            word: "disse",
            startAt: 10.52,
            endAt: 10.86,
          },
          {
            word: "Tupan.",
            startAt: 10.86,
            endAt: 11.3,
          },
        ],
      },
    },
    {
      page: 11,
      text: "Bia e Tito voltaram para casa felizes, sabendo que pequenas atitudes fazem uma grande diferença. Eles continuaram a proteger o planeta todos os dias, inspirando seus amigos a fazerem o mesmo. Espero que essa história ajude as crianças a entenderem a importância da sustentabilidade e do cuidado com o meio ambiente de maneira divertida e educativa.",
      image: "/story/florestas/images/img11.png",
      audio: {
        content: "/story/florestas/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Bia",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "e",
            startAt: 0.48,
            endAt: 0.62,
          },
          {
            word: "Tito",
            startAt: 0.62,
            endAt: 0.84,
          },
          {
            word: "voltaram",
            startAt: 0.84,
            endAt: 1.3,
          },
          {
            word: "para",
            startAt: 1.3,
            endAt: 1.46,
          },
          {
            word: "casa",
            startAt: 1.46,
            endAt: 1.76,
          },
          {
            word: "felizes,",
            startAt: 1.76,
            endAt: 2.3,
          },
          {
            word: "sabendo",
            startAt: 2.56,
            endAt: 3.1,
          },
          {
            word: "que",
            startAt: 3.1,
            endAt: 3.26,
          },
          {
            word: "pequenas",
            startAt: 3.26,
            endAt: 3.66,
          },
          {
            word: "atitudes",
            startAt: 3.66,
            endAt: 4.16,
          },
          {
            word: "fazem",
            startAt: 4.16,
            endAt: 4.58,
          },
          {
            word: "uma",
            startAt: 4.58,
            endAt: 4.78,
          },
          {
            word: "grande",
            startAt: 4.78,
            endAt: 5.14,
          },
          {
            word: "diferença.",
            startAt: 5.14,
            endAt: 5.72,
          },
          {
            word: "Eles",
            startAt: 6.28,
            endAt: 6.92,
          },
          {
            word: "continuaram",
            startAt: 6.92,
            endAt: 7.58,
          },
          {
            word: "a",
            startAt: 7.58,
            endAt: 7.72,
          },
          {
            word: "proteger",
            startAt: 7.72,
            endAt: 8.12,
          },
          {
            word: "o",
            startAt: 8.12,
            endAt: 8.24,
          },
          {
            word: "planeta",
            startAt: 8.24,
            endAt: 8.56,
          },
          {
            word: "todos",
            startAt: 8.56,
            endAt: 8.96,
          },
          {
            word: "os",
            startAt: 8.96,
            endAt: 9.22,
          },
          {
            word: "dias,",
            startAt: 9.22,
            endAt: 9.5,
          },
          {
            word: "inspirando",
            startAt: 9.84,
            endAt: 10.3,
          },
          {
            word: "seus",
            startAt: 10.3,
            endAt: 10.5,
          },
          {
            word: "amigos",
            startAt: 10.5,
            endAt: 10.92,
          },
          {
            word: "a",
            startAt: 10.92,
            endAt: 11.14,
          },
          {
            word: "fazerem",
            startAt: 11.14,
            endAt: 11.5,
          },
          {
            word: "o",
            startAt: 11.5,
            endAt: 11.64,
          },
          {
            word: "mesmo.",
            startAt: 11.64,
            endAt: 11.96,
          },
          {
            word: "Espero",
            startAt: 12.7,
            endAt: 13.34,
          },
          {
            word: "que",
            startAt: 13.34,
            endAt: 13.52,
          },
          {
            word: "essa",
            startAt: 13.52,
            endAt: 13.7,
          },
          {
            word: "história",
            startAt: 13.7,
            endAt: 14.06,
          },
          {
            word: "ajude",
            startAt: 14.06,
            endAt: 14.44,
          },
          {
            word: "as",
            startAt: 14.44,
            endAt: 14.58,
          },
          {
            word: "crianças",
            startAt: 14.58,
            endAt: 15,
          },
          {
            word: "a",
            startAt: 15,
            endAt: 15.22,
          },
          {
            word: "entenderem",
            startAt: 15.22,
            endAt: 15.66,
          },
          {
            word: "a",
            startAt: 15.66,
            endAt: 15.8,
          },
          {
            word: "importância",
            startAt: 15.8,
            endAt: 16.42,
          },
          {
            word: "da",
            startAt: 16.42,
            endAt: 16.6,
          },
          {
            word: "sustentabilidade",
            startAt: 16.6,
            endAt: 17.54,
          },
          {
            word: "e",
            startAt: 17.54,
            endAt: 17.7,
          },
          {
            word: "do",
            startAt: 17.7,
            endAt: 17.8,
          },
          {
            word: "cuidado",
            startAt: 17.8,
            endAt: 18.18,
          },
          {
            word: "com",
            startAt: 18.18,
            endAt: 18.44,
          },
          {
            word: "o",
            startAt: 18.44,
            endAt: 18.56,
          },
          {
            word: "meio",
            startAt: 18.56,
            endAt: 18.72,
          },
          {
            word: "ambiente",
            startAt: 18.72,
            endAt: 19.12,
          },
          {
            word: "de",
            startAt: 19.12,
            endAt: 19.32,
          },
          {
            word: "maneira",
            startAt: 19.32,
            endAt: 19.64,
          },
          {
            word: "divertida",
            startAt: 19.64,
            endAt: 20.26,
          },
          {
            word: "e",
            startAt: 20.26,
            endAt: 20.38,
          },
          {
            word: "educativa.",
            startAt: 20.38,
            endAt: 21.02,
          },
        ],
      },
    },
  ],
};

const stories = [higieneStory, alimentosStory, florestasStory];

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
