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

export default alimentosStory;
