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

const higieneStory: Story = {
  title: "Beto e o Clube da Higiene",
  slug: "beto-higiene",
  pages: [
    {
      page: 1,
      text: "Olá, vamos começar a historinha de Beto e o Clube da Higiene. Clique em Avançar para iniciar a aventura.",
      image: "/story/higiene/images/capa.png",
      audio: {
        content: "/story/higiene/audios/0.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Olá,",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "vamos",
            startAt: 0.88,
            endAt: 1.16,
          },
          {
            word: "começar",
            startAt: 1.16,
            endAt: 1.6,
          },
          {
            word: "a",
            startAt: 1.6,
            endAt: 1.76,
          },
          {
            word: "historinha",
            startAt: 1.76,
            endAt: 2.12,
          },
          {
            word: "de",
            startAt: 2.12,
            endAt: 2.26,
          },
          {
            word: "Beto",
            startAt: 2.26,
            endAt: 2.66,
          },
          {
            word: "e",
            startAt: 2.66,
            endAt: 2.72,
          },
          {
            word: "o",
            startAt: 2.72,
            endAt: 2.82,
          },
          {
            word: "Clube",
            startAt: 2.82,
            endAt: 3.12,
          },
          {
            word: "da",
            startAt: 3.12,
            endAt: 3.26,
          },
          {
            word: "Higiene.",
            startAt: 3.26,
            endAt: 3.72,
          },
          {
            word: "Clique",
            startAt: 3.98,
            endAt: 4.32,
          },
          {
            word: "em",
            startAt: 4.32,
            endAt: 4.46,
          },
          {
            word: "Avançar",
            startAt: 4.46,
            endAt: 4.94,
          },
          {
            word: "para",
            startAt: 4.94,
            endAt: 5.14,
          },
          {
            word: "iniciar",
            startAt: 5.14,
            endAt: 5.62,
          },
          {
            word: "a",
            startAt: 5.62,
            endAt: 5.66,
          },
          {
            word: "aventura.",
            startAt: 5.66,
            endAt: 6.12,
          },
        ],
      },
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

export default higieneStory;
