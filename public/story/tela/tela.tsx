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

const telaStory: Story = {
  title: "A Aventura de João e a Tela Mágica",
  slug: "tela-magica",
  pages: [
    {
      page: 1,
      text: "Bem-vindo à Aventura de João e à Tela Mágica, clique em Avançar para começar.",
      image: "/story/tela/images/capa.png",
      audio: {
        content: "/story/tela/audios/0.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Bem",
            startAt: 0,
            endAt: 0.42,
          },
          {
            word: "-vindo",
            startAt: 0.42,
            endAt: 0.7,
          },
          {
            word: "à",
            startAt: 0.7,
            endAt: 0.82,
          },
          {
            word: "Aventura",
            startAt: 0.82,
            endAt: 1.22,
          },
          {
            word: "de",
            startAt: 1.22,
            endAt: 1.4,
          },
          {
            word: "João",
            startAt: 1.4,
            endAt: 1.72,
          },
          {
            word: "e",
            startAt: 1.72,
            endAt: 1.92,
          },
          {
            word: "à",
            startAt: 1.92,
            endAt: 2.06,
          },
          {
            word: "Tela",
            startAt: 2.06,
            endAt: 2.24,
          },
          {
            word: "Mágica,",
            startAt: 2.24,
            endAt: 2.78,
          },
          {
            word: "clique",
            startAt: 3,
            endAt: 3.26,
          },
          {
            word: "em",
            startAt: 3.26,
            endAt: 3.46,
          },
          {
            word: "Avançar",
            startAt: 3.46,
            endAt: 3.92,
          },
          {
            word: "para",
            startAt: 3.92,
            endAt: 4.14,
          },
          {
            word: "começar.",
            startAt: 4.14,
            endAt: 4.58,
          },
        ],
      },
    },
    {
      page: 2,
      text: "Era uma vez, um menino chamado João que adorava jogar no celular. Ele passava horas e horas olhando para a tela, esquecendo de brincar com seus amigos e de explorar o mundo ao seu redor.",
      image: "/story/tela/images/2.png",
      audio: {
        content: "/story/tela/audios/1.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Era",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "uma",
            startAt: 0.38,
            endAt: 0.54,
          },
          {
            word: "vez,",
            startAt: 0.54,
            endAt: 0.9,
          },
          {
            word: "um",
            startAt: 1,
            endAt: 1.14,
          },
          {
            word: "menino",
            startAt: 1.14,
            endAt: 1.5,
          },
          {
            word: "chamado",
            startAt: 1.5,
            endAt: 1.88,
          },
          {
            word: "João",
            startAt: 1.88,
            endAt: 2.28,
          },
          {
            word: "que",
            startAt: 2.28,
            endAt: 2.44,
          },
          {
            word: "adorava",
            startAt: 2.44,
            endAt: 2.88,
          },
          {
            word: "jogar",
            startAt: 2.88,
            endAt: 3.18,
          },
          {
            word: "no",
            startAt: 3.18,
            endAt: 3.4,
          },
          {
            word: "celular.",
            startAt: 3.4,
            endAt: 3.84,
          },
          {
            word: "Ele",
            startAt: 4.08,
            endAt: 4.34,
          },
          {
            word: "passava",
            startAt: 4.34,
            endAt: 4.8,
          },
          {
            word: "horas",
            startAt: 4.8,
            endAt: 5.14,
          },
          {
            word: "e",
            startAt: 5.14,
            endAt: 5.34,
          },
          {
            word: "horas",
            startAt: 5.34,
            endAt: 5.58,
          },
          {
            word: "olhando",
            startAt: 5.58,
            endAt: 5.96,
          },
          {
            word: "para",
            startAt: 5.96,
            endAt: 6.16,
          },
          {
            word: "a",
            startAt: 6.16,
            endAt: 6.3,
          },
          {
            word: "tela,",
            startAt: 6.3,
            endAt: 6.58,
          },
          {
            word: "esquecendo",
            startAt: 6.82,
            endAt: 7.42,
          },
          {
            word: "de",
            startAt: 7.42,
            endAt: 7.56,
          },
          {
            word: "brincar",
            startAt: 7.56,
            endAt: 7.96,
          },
          {
            word: "com",
            startAt: 7.96,
            endAt: 8.1,
          },
          {
            word: "seus",
            startAt: 8.1,
            endAt: 8.36,
          },
          {
            word: "amigos",
            startAt: 8.36,
            endAt: 8.8,
          },
          {
            word: "e",
            startAt: 8.8,
            endAt: 8.98,
          },
          {
            word: "de",
            startAt: 8.98,
            endAt: 9.08,
          },
          {
            word: "explorar",
            startAt: 9.08,
            endAt: 9.58,
          },
          {
            word: "o",
            startAt: 9.58,
            endAt: 9.68,
          },
          {
            word: "mundo",
            startAt: 9.68,
            endAt: 9.94,
          },
          {
            word: "ao",
            startAt: 9.94,
            endAt: 10.1,
          },
          {
            word: "seu",
            startAt: 10.1,
            endAt: 10.22,
          },
          {
            word: "redor.",
            startAt: 10.22,
            endAt: 10.62,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Um dia enquanto jogava, João ouviu uma voz misteriosa vindo de dentro do celular. "João, venha comigo para uma aventura!", disse a voz. Curioso, João aceitou o convite e foi transportado para dentro do mundo da tela mágica.',
      image: "/story/tela/images/3.png",
      audio: {
        content: "/story/tela/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Um",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "dia",
            startAt: 0.38,
            endAt: 0.64,
          },
          {
            word: "enquanto",
            startAt: 0.64,
            endAt: 1.02,
          },
          {
            word: "jogava,",
            startAt: 1.02,
            endAt: 1.64,
          },
          {
            word: "João",
            startAt: 1.84,
            endAt: 2,
          },
          {
            word: "ouviu",
            startAt: 2,
            endAt: 2.44,
          },
          {
            word: "uma",
            startAt: 2.44,
            endAt: 2.6,
          },
          {
            word: "voz",
            startAt: 2.6,
            endAt: 2.9,
          },
          {
            word: "misteriosa",
            startAt: 2.9,
            endAt: 3.56,
          },
          {
            word: "vindo",
            startAt: 3.56,
            endAt: 3.9,
          },
          {
            word: "de",
            startAt: 3.9,
            endAt: 4.06,
          },
          {
            word: "dentro",
            startAt: 4.06,
            endAt: 4.36,
          },
          {
            word: "do",
            startAt: 4.36,
            endAt: 4.54,
          },
          {
            word: "celular.",
            startAt: 4.54,
            endAt: 5,
          },
          {
            word: "João,",
            startAt: 5.26,
            endAt: 5.66,
          },
          {
            word: "venha",
            startAt: 5.86,
            endAt: 6.04,
          },
          {
            word: "comigo",
            startAt: 6.04,
            endAt: 6.38,
          },
          {
            word: "para",
            startAt: 6.38,
            endAt: 6.64,
          },
          {
            word: "uma",
            startAt: 6.64,
            endAt: 6.78,
          },
          {
            word: "aventura,",
            startAt: 6.78,
            endAt: 7.32,
          },
          {
            word: "disse",
            startAt: 7.44,
            endAt: 7.72,
          },
          {
            word: "a",
            startAt: 7.72,
            endAt: 7.88,
          },
          {
            word: "voz.",
            startAt: 7.88,
            endAt: 8.2,
          },
          {
            word: "Curioso,",
            startAt: 8.56,
            endAt: 9.12,
          },
          {
            word: "João",
            startAt: 9.34,
            endAt: 9.62,
          },
          {
            word: "aceitou",
            startAt: 9.62,
            endAt: 10.08,
          },
          {
            word: "o",
            startAt: 10.08,
            endAt: 10.2,
          },
          {
            word: "convite",
            startAt: 10.2,
            endAt: 10.64,
          },
          {
            word: "e",
            startAt: 10.64,
            endAt: 10.78,
          },
          {
            word: "foi",
            startAt: 10.78,
            endAt: 10.94,
          },
          {
            word: "transportado",
            startAt: 10.94,
            endAt: 11.68,
          },
          {
            word: "para",
            startAt: 11.68,
            endAt: 11.88,
          },
          {
            word: "dentro",
            startAt: 11.88,
            endAt: 12.26,
          },
          {
            word: "do",
            startAt: 12.26,
            endAt: 12.46,
          },
          {
            word: "mundo",
            startAt: 12.46,
            endAt: 12.74,
          },
          {
            word: "da",
            startAt: 12.74,
            endAt: 12.92,
          },
          {
            word: "tela",
            startAt: 12.92,
            endAt: 13.14,
          },
          {
            word: "mágica.",
            startAt: 13.14,
            endAt: 13.7,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'Dentro da tela, João conheceu uma fada chamada Luma. Ela disse, "Bem-vindo, João. Vou te mostrar os perigos de ficar muito tempo no celular", disse Luma. João seguiu a fada, ansioso para descobrir o que ela tinha a ensinar.',
      image: "/story/tela/images/4.png",
      audio: {
        content: "/story/tela/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Dentro",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "da",
            startAt: 0.58,
            endAt: 0.72,
          },
          {
            word: "tela,",
            startAt: 0.72,
            endAt: 1.08,
          },
          {
            word: "João",
            startAt: 1.28,
            endAt: 1.44,
          },
          {
            word: "conheceu",
            startAt: 1.44,
            endAt: 1.98,
          },
          {
            word: "uma",
            startAt: 1.98,
            endAt: 2.14,
          },
          {
            word: "fada",
            startAt: 2.14,
            endAt: 2.44,
          },
          {
            word: "chamada",
            startAt: 2.44,
            endAt: 2.88,
          },
          {
            word: "Luma.",
            startAt: 2.88,
            endAt: 3.2,
          },
          {
            word: "Ela",
            startAt: 3.52,
            endAt: 3.72,
          },
          {
            word: "disse,",
            startAt: 3.72,
            endAt: 4.14,
          },
          {
            word: "Bem",
            startAt: 4.26,
            endAt: 4.42,
          },
          {
            word: "-vindo,",
            startAt: 4.42,
            endAt: 4.76,
          },
          {
            word: "João.",
            startAt: 4.82,
            endAt: 5.1,
          },
          {
            word: "Vou",
            startAt: 5.34,
            endAt: 5.64,
          },
          {
            word: "te",
            startAt: 5.64,
            endAt: 5.78,
          },
          {
            word: "mostrar",
            startAt: 5.78,
            endAt: 6.14,
          },
          {
            word: "os",
            startAt: 6.14,
            endAt: 6.34,
          },
          {
            word: "perigos",
            startAt: 6.34,
            endAt: 6.76,
          },
          {
            word: "de",
            startAt: 6.76,
            endAt: 6.92,
          },
          {
            word: "ficar",
            startAt: 6.92,
            endAt: 7.22,
          },
          {
            word: "muito",
            startAt: 7.22,
            endAt: 7.54,
          },
          {
            word: "tempo",
            startAt: 7.54,
            endAt: 7.9,
          },
          {
            word: "no",
            startAt: 7.9,
            endAt: 8.06,
          },
          {
            word: "celular,",
            startAt: 8.06,
            endAt: 8.56,
          },
          {
            word: "disse",
            startAt: 8.7,
            endAt: 8.98,
          },
          {
            word: "Luma.",
            startAt: 8.98,
            endAt: 9.36,
          },
          {
            word: "João",
            startAt: 9.7,
            endAt: 9.98,
          },
          {
            word: "seguiu",
            startAt: 9.98,
            endAt: 10.38,
          },
          {
            word: "a",
            startAt: 10.38,
            endAt: 10.54,
          },
          {
            word: "fada,",
            startAt: 10.54,
            endAt: 10.84,
          },
          {
            word: "ansioso",
            startAt: 10.98,
            endAt: 11.52,
          },
          {
            word: "para",
            startAt: 11.52,
            endAt: 11.72,
          },
          {
            word: "descobrir",
            startAt: 11.72,
            endAt: 12.2,
          },
          {
            word: "o",
            startAt: 12.2,
            endAt: 12.42,
          },
          {
            word: "que",
            startAt: 12.42,
            endAt: 12.52,
          },
          {
            word: "ela",
            startAt: 12.52,
            endAt: 12.7,
          },
          {
            word: "tinha",
            startAt: 12.7,
            endAt: 12.98,
          },
          {
            word: "a",
            startAt: 12.98,
            endAt: 13.14,
          },
          {
            word: "ensinar.",
            startAt: 13.14,
            endAt: 13.52,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Primeiro, Luma mostrou um grupo de crianças com olhos cansados e vermelhos. "Essas crianças passaram muito tempo olhando para a tela do celular. Seus olhos estão machucados", explicou a fada. E elas não conseguem prestar atenção em mais nada.',
      image: "/story/tela/images/5.png",
      audio: {
        content: "/story/tela/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Primeiro,",
            startAt: 0,
            endAt: 0.68,
          },
          {
            word: "Luma",
            startAt: 0.8,
            endAt: 0.94,
          },
          {
            word: "mostrou",
            startAt: 0.94,
            endAt: 1.34,
          },
          {
            word: "um",
            startAt: 1.34,
            endAt: 1.46,
          },
          {
            word: "grupo",
            startAt: 1.46,
            endAt: 1.7,
          },
          {
            word: "de",
            startAt: 1.7,
            endAt: 1.88,
          },
          {
            word: "crianças",
            startAt: 1.88,
            endAt: 2.32,
          },
          {
            word: "com",
            startAt: 2.32,
            endAt: 2.6,
          },
          {
            word: "olhos",
            startAt: 2.6,
            endAt: 2.9,
          },
          {
            word: "cansados",
            startAt: 2.9,
            endAt: 3.48,
          },
          {
            word: "e",
            startAt: 3.48,
            endAt: 3.64,
          },
          {
            word: "vermelhos.",
            startAt: 3.64,
            endAt: 4.28,
          },
          {
            word: "Essas",
            startAt: 4.44,
            endAt: 4.98,
          },
          {
            word: "crianças",
            startAt: 4.98,
            endAt: 5.42,
          },
          {
            word: "passaram",
            startAt: 5.42,
            endAt: 5.96,
          },
          {
            word: "muito",
            startAt: 5.96,
            endAt: 6.24,
          },
          {
            word: "tempo",
            startAt: 6.24,
            endAt: 6.58,
          },
          {
            word: "olhando",
            startAt: 6.58,
            endAt: 6.98,
          },
          {
            word: "para",
            startAt: 6.98,
            endAt: 7.2,
          },
          {
            word: "a",
            startAt: 7.2,
            endAt: 7.32,
          },
          {
            word: "tela",
            startAt: 7.32,
            endAt: 7.52,
          },
          {
            word: "do",
            startAt: 7.52,
            endAt: 7.68,
          },
          {
            word: "celular.",
            startAt: 7.68,
            endAt: 8.16,
          },
          {
            word: "Seus",
            startAt: 8.38,
            endAt: 8.86,
          },
          {
            word: "olhos",
            startAt: 8.86,
            endAt: 9.12,
          },
          {
            word: "estão",
            startAt: 9.12,
            endAt: 9.4,
          },
          {
            word: "machucados,",
            startAt: 9.4,
            endAt: 10.12,
          },
          {
            word: "explicou",
            startAt: 10.28,
            endAt: 10.8,
          },
          {
            word: "a",
            startAt: 10.8,
            endAt: 10.96,
          },
          {
            word: "fada.",
            startAt: 10.96,
            endAt: 11.28,
          },
          {
            word: "E",
            startAt: 11.48,
            endAt: 11.74,
          },
          {
            word: "elas",
            startAt: 11.74,
            endAt: 11.96,
          },
          {
            word: "não",
            startAt: 11.96,
            endAt: 12.14,
          },
          {
            word: "conseguem",
            startAt: 12.14,
            endAt: 12.7,
          },
          {
            word: "prestar",
            startAt: 12.7,
            endAt: 13.04,
          },
          {
            word: "atenção",
            startAt: 13.04,
            endAt: 13.54,
          },
          {
            word: "em",
            startAt: 13.54,
            endAt: 13.76,
          },
          {
            word: "mais",
            startAt: 13.76,
            endAt: 14,
          },
          {
            word: "nada.",
            startAt: 14,
            endAt: 14.36,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Depois, a fada levou João a um campo de flores. "Olhe para essas flores lindas, João. Se você ficar muito tempo no celular, pode perder a chance de ver as belezas do mundo real", disse Luma. João percebeu que estava perdendo muitas coisas bonitas ao seu redor.',
      image: "/story/tela/images/6.png",
      audio: {
        content: "/story/tela/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois,",
            startAt: 0,
            endAt: 0.66,
          },
          {
            word: "a",
            startAt: 0.8,
            endAt: 0.92,
          },
          {
            word: "fada",
            startAt: 0.92,
            endAt: 1.14,
          },
          {
            word: "levou",
            startAt: 1.14,
            endAt: 1.5,
          },
          {
            word: "João",
            startAt: 1.5,
            endAt: 1.78,
          },
          {
            word: "a",
            startAt: 1.78,
            endAt: 1.98,
          },
          {
            word: "um",
            startAt: 1.98,
            endAt: 2.08,
          },
          {
            word: "campo",
            startAt: 2.08,
            endAt: 2.36,
          },
          {
            word: "de",
            startAt: 2.36,
            endAt: 2.5,
          },
          {
            word: "flores.",
            startAt: 2.5,
            endAt: 2.96,
          },
          {
            word: "Olhe",
            startAt: 3.16,
            endAt: 3.58,
          },
          {
            word: "para",
            startAt: 3.58,
            endAt: 3.72,
          },
          {
            word: "essas",
            startAt: 3.72,
            endAt: 4,
          },
          {
            word: "flores",
            startAt: 4,
            endAt: 4.38,
          },
          {
            word: "lindas,",
            startAt: 4.38,
            endAt: 4.82,
          },
          {
            word: "João.",
            startAt: 4.88,
            endAt: 5.1,
          },
          {
            word: "Se",
            startAt: 5.36,
            endAt: 5.7,
          },
          {
            word: "você",
            startAt: 5.7,
            endAt: 5.96,
          },
          {
            word: "ficar",
            startAt: 5.96,
            endAt: 6.3,
          },
          {
            word: "muito",
            startAt: 6.3,
            endAt: 6.58,
          },
          {
            word: "tempo",
            startAt: 6.58,
            endAt: 6.9,
          },
          {
            word: "no",
            startAt: 6.9,
            endAt: 7.08,
          },
          {
            word: "celular,",
            startAt: 7.08,
            endAt: 7.54,
          },
          {
            word: "pode",
            startAt: 7.78,
            endAt: 8,
          },
          {
            word: "perder",
            startAt: 8,
            endAt: 8.3,
          },
          {
            word: "a",
            startAt: 8.3,
            endAt: 8.5,
          },
          {
            word: "chance",
            startAt: 8.5,
            endAt: 8.84,
          },
          {
            word: "de",
            startAt: 8.84,
            endAt: 9.02,
          },
          {
            word: "ver",
            startAt: 9.02,
            endAt: 9.2,
          },
          {
            word: "as",
            startAt: 9.2,
            endAt: 9.36,
          },
          {
            word: "belezas",
            startAt: 9.36,
            endAt: 9.9,
          },
          {
            word: "do",
            startAt: 9.9,
            endAt: 10.04,
          },
          {
            word: "mundo",
            startAt: 10.04,
            endAt: 10.3,
          },
          {
            word: "real,",
            startAt: 10.3,
            endAt: 10.66,
          },
          {
            word: "disse",
            startAt: 10.82,
            endAt: 11.12,
          },
          {
            word: "Luma.",
            startAt: 11.12,
            endAt: 11.48,
          },
          {
            word: "João",
            startAt: 11.82,
            endAt: 12.1,
          },
          {
            word: "percebeu",
            startAt: 12.1,
            endAt: 12.7,
          },
          {
            word: "que",
            startAt: 12.7,
            endAt: 12.82,
          },
          {
            word: "estava",
            startAt: 12.82,
            endAt: 13.1,
          },
          {
            word: "perdendo",
            startAt: 13.1,
            endAt: 13.58,
          },
          {
            word: "muitas",
            startAt: 13.58,
            endAt: 13.92,
          },
          {
            word: "coisas",
            startAt: 13.92,
            endAt: 14.34,
          },
          {
            word: "bonitas",
            startAt: 14.34,
            endAt: 14.9,
          },
          {
            word: "ao",
            startAt: 14.9,
            endAt: 15.08,
          },
          {
            word: "seu",
            startAt: 15.08,
            endAt: 15.24,
          },
          {
            word: "redor.",
            startAt: 15.24,
            endAt: 15.66,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'Em seguida, Luma mostrou a João um menino que estava com dores nas costas e nos braços. "Usar o celular por muito tempo também pode machucar seu corpo. É importante se movimentar e brincar ao ar livre", aconselhou a fada.',
      image: "/story/tela/images/7.png",
      audio: {
        content: "/story/tela/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Em",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "seguida,",
            startAt: 0.36,
            endAt: 0.82,
          },
          {
            word: "Luma",
            startAt: 1.04,
            endAt: 1.18,
          },
          {
            word: "mostrou",
            startAt: 1.18,
            endAt: 1.6,
          },
          {
            word: "a",
            startAt: 1.6,
            endAt: 1.74,
          },
          {
            word: "João",
            startAt: 1.74,
            endAt: 1.9,
          },
          {
            word: "um",
            startAt: 1.9,
            endAt: 2.12,
          },
          {
            word: "menino",
            startAt: 2.12,
            endAt: 2.46,
          },
          {
            word: "que",
            startAt: 2.46,
            endAt: 2.62,
          },
          {
            word: "estava",
            startAt: 2.62,
            endAt: 2.92,
          },
          {
            word: "com",
            startAt: 2.92,
            endAt: 3.12,
          },
          {
            word: "dores",
            startAt: 3.12,
            endAt: 3.52,
          },
          {
            word: "nas",
            startAt: 3.52,
            endAt: 3.7,
          },
          {
            word: "costas",
            startAt: 3.7,
            endAt: 4.2,
          },
          {
            word: "e",
            startAt: 4.2,
            endAt: 4.3,
          },
          {
            word: "nos",
            startAt: 4.3,
            endAt: 4.48,
          },
          {
            word: "braços.",
            startAt: 4.48,
            endAt: 5,
          },
          {
            word: "Usar",
            startAt: 5.22,
            endAt: 5.7,
          },
          {
            word: "o",
            startAt: 5.7,
            endAt: 5.76,
          },
          {
            word: "celular",
            startAt: 5.76,
            endAt: 6.18,
          },
          {
            word: "por",
            startAt: 6.18,
            endAt: 6.46,
          },
          {
            word: "muito",
            startAt: 6.46,
            endAt: 6.74,
          },
          {
            word: "tempo",
            startAt: 6.74,
            endAt: 7.12,
          },
          {
            word: "também",
            startAt: 7.12,
            endAt: 7.46,
          },
          {
            word: "pode",
            startAt: 7.46,
            endAt: 7.88,
          },
          {
            word: "machucar",
            startAt: 7.88,
            endAt: 8.4,
          },
          {
            word: "seu",
            startAt: 8.4,
            endAt: 8.58,
          },
          {
            word: "corpo.",
            startAt: 8.58,
            endAt: 8.98,
          },
          {
            word: "É",
            startAt: 9.14,
            endAt: 9.4,
          },
          {
            word: "importante",
            startAt: 9.4,
            endAt: 9.88,
          },
          {
            word: "se",
            startAt: 9.88,
            endAt: 10.08,
          },
          {
            word: "movimentar",
            startAt: 10.08,
            endAt: 10.7,
          },
          {
            word: "e",
            startAt: 10.7,
            endAt: 10.78,
          },
          {
            word: "brincar",
            startAt: 10.78,
            endAt: 11.18,
          },
          {
            word: "ao",
            startAt: 11.18,
            endAt: 11.3,
          },
          {
            word: "ar",
            startAt: 11.3,
            endAt: 11.44,
          },
          {
            word: "livre,",
            startAt: 11.44,
            endAt: 11.8,
          },
          {
            word: "aconselhou",
            startAt: 11.9,
            endAt: 12.42,
          },
          {
            word: "a",
            startAt: 12.42,
            endAt: 12.62,
          },
          {
            word: "fada.",
            startAt: 12.62,
            endAt: 12.9,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'A fada também mostrou um menino que parecia muito ansioso. "Passar muito tempo no celular pode te deixar nervoso e preocupado, porque seu cérebro precisa de descanso", explicou Luma. João percebeu que ele também se sentia assim às vezes.',
      image: "/story/tela/images/8.png",
      audio: {
        content: "/story/tela/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "A",
            startAt: 0,
            endAt: 0.34,
          },
          {
            word: "fada",
            startAt: 0.34,
            endAt: 0.62,
          },
          {
            word: "também",
            startAt: 0.62,
            endAt: 0.96,
          },
          {
            word: "mostrou",
            startAt: 0.96,
            endAt: 1.4,
          },
          {
            word: "um",
            startAt: 1.4,
            endAt: 1.5,
          },
          {
            word: "menino",
            startAt: 1.5,
            endAt: 1.88,
          },
          {
            word: "que",
            startAt: 1.88,
            endAt: 2.02,
          },
          {
            word: "parecia",
            startAt: 2.02,
            endAt: 2.44,
          },
          {
            word: "muito",
            startAt: 2.44,
            endAt: 2.76,
          },
          {
            word: "ansioso.",
            startAt: 2.76,
            endAt: 3.36,
          },
          {
            word: "Passar",
            startAt: 3.54,
            endAt: 4.04,
          },
          {
            word: "muito",
            startAt: 4.04,
            endAt: 4.3,
          },
          {
            word: "tempo",
            startAt: 4.3,
            endAt: 4.66,
          },
          {
            word: "no",
            startAt: 4.66,
            endAt: 4.84,
          },
          {
            word: "celular",
            startAt: 4.84,
            endAt: 5.28,
          },
          {
            word: "pode",
            startAt: 5.28,
            endAt: 5.64,
          },
          {
            word: "te",
            startAt: 5.64,
            endAt: 5.78,
          },
          {
            word: "deixar",
            startAt: 5.78,
            endAt: 6.16,
          },
          {
            word: "nervoso",
            startAt: 6.16,
            endAt: 6.74,
          },
          {
            word: "e",
            startAt: 6.74,
            endAt: 6.86,
          },
          {
            word: "preocupado,",
            startAt: 6.86,
            endAt: 7.52,
          },
          {
            word: "porque",
            startAt: 7.64,
            endAt: 7.92,
          },
          {
            word: "seu",
            startAt: 7.92,
            endAt: 8.18,
          },
          {
            word: "cérebro",
            startAt: 8.18,
            endAt: 8.6,
          },
          {
            word: "precisa",
            startAt: 8.6,
            endAt: 9.02,
          },
          {
            word: "de",
            startAt: 9.02,
            endAt: 9.2,
          },
          {
            word: "descanso,",
            startAt: 9.2,
            endAt: 9.78,
          },
          {
            word: "explicou",
            startAt: 9.88,
            endAt: 10.4,
          },
          {
            word: "Luma.",
            startAt: 10.4,
            endAt: 10.7,
          },
          {
            word: "João",
            startAt: 11.04,
            endAt: 11.26,
          },
          {
            word: "percebeu",
            startAt: 11.26,
            endAt: 11.88,
          },
          {
            word: "que",
            startAt: 11.88,
            endAt: 12,
          },
          {
            word: "ele",
            startAt: 12,
            endAt: 12.14,
          },
          {
            word: "também",
            startAt: 12.14,
            endAt: 12.42,
          },
          {
            word: "se",
            startAt: 12.42,
            endAt: 12.7,
          },
          {
            word: "sentia",
            startAt: 12.7,
            endAt: 13.08,
          },
          {
            word: "assim",
            startAt: 13.08,
            endAt: 13.34,
          },
          {
            word: "às",
            startAt: 13.34,
            endAt: 13.54,
          },
          {
            word: "vezes.",
            startAt: 13.54,
            endAt: 13.9,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'Luma levou João a uma sala de aula onde as crianças estavam distraídas com seus celulares e não prestavam atenção na professora. "Quando você usa o celular demais, pode atrapalhar seus estudos e seu aprendizado", explicou a fada.',
      image: "/story/tela/images/9.png",
      audio: {
        content: "/story/tela/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Luma",
            startAt: 0,
            endAt: 0.44,
          },
          {
            word: "levou",
            startAt: 0.44,
            endAt: 0.78,
          },
          {
            word: "João",
            startAt: 0.78,
            endAt: 1.06,
          },
          {
            word: "a",
            startAt: 1.06,
            endAt: 1.26,
          },
          {
            word: "uma",
            startAt: 1.26,
            endAt: 1.42,
          },
          {
            word: "sala",
            startAt: 1.42,
            endAt: 1.74,
          },
          {
            word: "de",
            startAt: 1.74,
            endAt: 1.92,
          },
          {
            word: "aula",
            startAt: 1.92,
            endAt: 2.22,
          },
          {
            word: "onde",
            startAt: 2.22,
            endAt: 2.5,
          },
          {
            word: "as",
            startAt: 2.5,
            endAt: 2.66,
          },
          {
            word: "crianças",
            startAt: 2.66,
            endAt: 3.08,
          },
          {
            word: "estavam",
            startAt: 3.08,
            endAt: 3.54,
          },
          {
            word: "distraídas",
            startAt: 3.54,
            endAt: 4.28,
          },
          {
            word: "com",
            startAt: 4.28,
            endAt: 4.42,
          },
          {
            word: "seus",
            startAt: 4.42,
            endAt: 4.62,
          },
          {
            word: "celulares",
            startAt: 4.62,
            endAt: 5.18,
          },
          {
            word: "e",
            startAt: 5.18,
            endAt: 5.44,
          },
          {
            word: "não",
            startAt: 5.44,
            endAt: 5.58,
          },
          {
            word: "prestavam",
            startAt: 5.58,
            endAt: 6.12,
          },
          {
            word: "atenção",
            startAt: 6.12,
            endAt: 6.54,
          },
          {
            word: "na",
            startAt: 6.54,
            endAt: 6.74,
          },
          {
            word: "professora.",
            startAt: 6.74,
            endAt: 7.36,
          },
          {
            word: "Quando",
            startAt: 7.54,
            endAt: 7.9,
          },
          {
            word: "você",
            startAt: 7.9,
            endAt: 8.2,
          },
          {
            word: "usa",
            startAt: 8.2,
            endAt: 8.52,
          },
          {
            word: "o",
            startAt: 8.52,
            endAt: 8.62,
          },
          {
            word: "celular",
            startAt: 8.62,
            endAt: 8.96,
          },
          {
            word: "demais,",
            startAt: 8.96,
            endAt: 9.42,
          },
          {
            word: "pode",
            startAt: 9.64,
            endAt: 9.86,
          },
          {
            word: "atrapalhar",
            startAt: 9.86,
            endAt: 10.42,
          },
          {
            word: "seus",
            startAt: 10.42,
            endAt: 10.7,
          },
          {
            word: "estudos",
            startAt: 10.7,
            endAt: 11.2,
          },
          {
            word: "e",
            startAt: 11.2,
            endAt: 11.3,
          },
          {
            word: "seu",
            startAt: 11.3,
            endAt: 11.46,
          },
          {
            word: "aprendizado,",
            startAt: 11.46,
            endAt: 12.16,
          },
          {
            word: "explicou",
            startAt: 12.3,
            endAt: 12.8,
          },
          {
            word: "a",
            startAt: 12.8,
            endAt: 12.98,
          },
          {
            word: "fada.",
            startAt: 12.98,
            endAt: 13.26,
          },
        ],
      },
    },
    {
      page: 10,
      text: 'Por fim, Luma mostrou a João um grupo de amigos brincando juntos no parque. "Brincar com amigos é muito mais divertido do que ficar sozinho no celular. A amizade é importante para a felicidade", disse a fada.',
      image: "/story/tela/images/10.jpeg",
      audio: {
        content: "/story/tela/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Por",
            startAt: 0,
            endAt: 0.4,
          },
          {
            word: "fim,",
            startAt: 0.4,
            endAt: 0.62,
          },
          {
            word: "Luma",
            startAt: 0.94,
            endAt: 1.08,
          },
          {
            word: "mostrou",
            startAt: 1.08,
            endAt: 1.5,
          },
          {
            word: "a",
            startAt: 1.5,
            endAt: 1.64,
          },
          {
            word: "João",
            startAt: 1.64,
            endAt: 1.86,
          },
          {
            word: "um",
            startAt: 1.86,
            endAt: 2.08,
          },
          {
            word: "grupo",
            startAt: 2.08,
            endAt: 2.28,
          },
          {
            word: "de",
            startAt: 2.28,
            endAt: 2.44,
          },
          {
            word: "amigos",
            startAt: 2.44,
            endAt: 2.82,
          },
          {
            word: "brincando",
            startAt: 2.82,
            endAt: 3.34,
          },
          {
            word: "juntos",
            startAt: 3.34,
            endAt: 3.74,
          },
          {
            word: "no",
            startAt: 3.74,
            endAt: 3.92,
          },
          {
            word: "parque.",
            startAt: 3.92,
            endAt: 4.36,
          },
          {
            word: "Brincar",
            startAt: 4.64,
            endAt: 5.08,
          },
          {
            word: "com",
            startAt: 5.08,
            endAt: 5.22,
          },
          {
            word: "amigos",
            startAt: 5.22,
            endAt: 5.64,
          },
          {
            word: "é",
            startAt: 5.64,
            endAt: 5.84,
          },
          {
            word: "muito",
            startAt: 5.84,
            endAt: 6.12,
          },
          {
            word: "mais",
            startAt: 6.12,
            endAt: 6.38,
          },
          {
            word: "divertido",
            startAt: 6.38,
            endAt: 6.98,
          },
          {
            word: "do",
            startAt: 6.98,
            endAt: 7.12,
          },
          {
            word: "que",
            startAt: 7.12,
            endAt: 7.24,
          },
          {
            word: "ficar",
            startAt: 7.24,
            endAt: 7.54,
          },
          {
            word: "sozinho",
            startAt: 7.54,
            endAt: 8.04,
          },
          {
            word: "no",
            startAt: 8.04,
            endAt: 8.2,
          },
          {
            word: "celular.",
            startAt: 8.2,
            endAt: 8.64,
          },
          {
            word: "A",
            startAt: 8.86,
            endAt: 9.08,
          },
          {
            word: "amizade",
            startAt: 9.08,
            endAt: 9.56,
          },
          {
            word: "é",
            startAt: 9.56,
            endAt: 9.68,
          },
          {
            word: "importante",
            startAt: 9.68,
            endAt: 10.2,
          },
          {
            word: "para",
            startAt: 10.2,
            endAt: 10.42,
          },
          {
            word: "a",
            startAt: 10.42,
            endAt: 10.56,
          },
          {
            word: "felicidade,",
            startAt: 10.56,
            endAt: 11.22,
          },
          {
            word: "disse",
            startAt: 11.36,
            endAt: 11.54,
          },
          {
            word: "a",
            startAt: 11.54,
            endAt: 11.76,
          },
          {
            word: "fada.",
            startAt: 11.76,
            endAt: 12.04,
          },
        ],
      },
    },
    {
      page: 11,
      text: 'Luma então explicou que ficar muito tempo no celular também pode atrapalhar o sono. "A luz da tela do celular pode fazer você ter dificuldade para dormir, e dormir bem é importante para ter energia e se sentir bem", explicou ela.',
      image: "/story/tela/images/11.png",
      audio: {
        content: "/story/tela/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Luma",
            startAt: 0,
            endAt: 0.46,
          },
          {
            word: "então",
            startAt: 0.46,
            endAt: 0.74,
          },
          {
            word: "explicou",
            startAt: 0.74,
            endAt: 1.26,
          },
          {
            word: "que",
            startAt: 1.26,
            endAt: 1.4,
          },
          {
            word: "ficar",
            startAt: 1.4,
            endAt: 1.7,
          },
          {
            word: "muito",
            startAt: 1.7,
            endAt: 2.02,
          },
          {
            word: "tempo",
            startAt: 2.02,
            endAt: 2.4,
          },
          {
            word: "no",
            startAt: 2.4,
            endAt: 2.56,
          },
          {
            word: "celular",
            startAt: 2.56,
            endAt: 3,
          },
          {
            word: "também",
            startAt: 3,
            endAt: 3.36,
          },
          {
            word: "pode",
            startAt: 3.36,
            endAt: 3.8,
          },
          {
            word: "atrapalhar",
            startAt: 3.8,
            endAt: 4.32,
          },
          {
            word: "o",
            startAt: 4.32,
            endAt: 4.44,
          },
          {
            word: "sono.",
            startAt: 4.44,
            endAt: 4.76,
          },
          {
            word: "A",
            startAt: 4.96,
            endAt: 5.2,
          },
          {
            word: "luz",
            startAt: 5.2,
            endAt: 5.4,
          },
          {
            word: "da",
            startAt: 5.4,
            endAt: 5.54,
          },
          {
            word: "tela",
            startAt: 5.54,
            endAt: 5.82,
          },
          {
            word: "do",
            startAt: 5.82,
            endAt: 5.98,
          },
          {
            word: "celular",
            startAt: 5.98,
            endAt: 6.4,
          },
          {
            word: "pode",
            startAt: 6.4,
            endAt: 6.72,
          },
          {
            word: "fazer",
            startAt: 6.72,
            endAt: 7.06,
          },
          {
            word: "você",
            startAt: 7.06,
            endAt: 7.36,
          },
          {
            word: "ter",
            startAt: 7.36,
            endAt: 7.56,
          },
          {
            word: "dificuldade",
            startAt: 7.56,
            endAt: 8.18,
          },
          {
            word: "para",
            startAt: 8.18,
            endAt: 8.46,
          },
          {
            word: "dormir,",
            startAt: 8.46,
            endAt: 8.88,
          },
          {
            word: "e",
            startAt: 9.06,
            endAt: 9.28,
          },
          {
            word: "dormir",
            startAt: 9.28,
            endAt: 9.58,
          },
          {
            word: "bem",
            startAt: 9.58,
            endAt: 9.88,
          },
          {
            word: "é",
            startAt: 9.88,
            endAt: 10.06,
          },
          {
            word: "importante",
            startAt: 10.06,
            endAt: 10.58,
          },
          {
            word: "para",
            startAt: 10.58,
            endAt: 10.84,
          },
          {
            word: "ter",
            startAt: 10.84,
            endAt: 11.06,
          },
          {
            word: "energia",
            startAt: 11.06,
            endAt: 11.52,
          },
          {
            word: "e",
            startAt: 11.52,
            endAt: 11.76,
          },
          {
            word: "se",
            startAt: 11.76,
            endAt: 11.9,
          },
          {
            word: "sentir",
            startAt: 11.9,
            endAt: 12.24,
          },
          {
            word: "bem,",
            startAt: 12.24,
            endAt: 12.56,
          },
          {
            word: "explicou",
            startAt: 12.66,
            endAt: 13.18,
          },
          {
            word: "ela.",
            startAt: 13.18,
            endAt: 13.46,
          },
        ],
      },
    },
    {
      page: 12,
      text: "João aprendeu que é importante usar o celular com moderação e sempre tirar um tempo para brincar, estudar, dormir bem e explorar o mundo real. Ele agradeceu a Luma pela lição e decidiu mudar seus hábitos.",
      image: "/story/tela/images/12.png",
      audio: {
        content: "/story/tela/audios/11.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "João",
            startAt: 0,
            endAt: 0.5,
          },
          {
            word: "aprendeu",
            startAt: 0.5,
            endAt: 1.06,
          },
          {
            word: "que",
            startAt: 1.06,
            endAt: 1.2,
          },
          {
            word: "é",
            startAt: 1.2,
            endAt: 1.28,
          },
          {
            word: "importante",
            startAt: 1.28,
            endAt: 1.7,
          },
          {
            word: "usar",
            startAt: 1.7,
            endAt: 2.04,
          },
          {
            word: "o",
            startAt: 2.04,
            endAt: 2.2,
          },
          {
            word: "celular",
            startAt: 2.2,
            endAt: 2.6,
          },
          {
            word: "com",
            startAt: 2.6,
            endAt: 2.84,
          },
          {
            word: "moderação",
            startAt: 2.84,
            endAt: 3.44,
          },
          {
            word: "e",
            startAt: 3.44,
            endAt: 3.76,
          },
          {
            word: "sempre",
            startAt: 3.76,
            endAt: 4.1,
          },
          {
            word: "tirar",
            startAt: 4.1,
            endAt: 4.38,
          },
          {
            word: "um",
            startAt: 4.38,
            endAt: 4.6,
          },
          {
            word: "tempo",
            startAt: 4.6,
            endAt: 4.86,
          },
          {
            word: "para",
            startAt: 4.86,
            endAt: 5.06,
          },
          {
            word: "brincar,",
            startAt: 5.06,
            endAt: 5.58,
          },
          {
            word: "estudar,",
            startAt: 5.68,
            endAt: 6.18,
          },
          {
            word: "dormir",
            startAt: 6.42,
            endAt: 6.72,
          },
          {
            word: "bem",
            startAt: 6.72,
            endAt: 7.06,
          },
          {
            word: "e",
            startAt: 7.06,
            endAt: 7.3,
          },
          {
            word: "explorar",
            startAt: 7.3,
            endAt: 7.82,
          },
          {
            word: "o",
            startAt: 7.82,
            endAt: 7.92,
          },
          {
            word: "mundo",
            startAt: 7.92,
            endAt: 8.12,
          },
          {
            word: "real.",
            startAt: 8.12,
            endAt: 8.46,
          },
          {
            word: "Ele",
            startAt: 8.7,
            endAt: 8.98,
          },
          {
            word: "agradeceu",
            startAt: 8.98,
            endAt: 9.52,
          },
          {
            word: "a",
            startAt: 9.52,
            endAt: 9.66,
          },
          {
            word: "Luma",
            startAt: 9.66,
            endAt: 9.86,
          },
          {
            word: "pela",
            startAt: 9.86,
            endAt: 10.1,
          },
          {
            word: "lição",
            startAt: 10.1,
            endAt: 10.5,
          },
          {
            word: "e",
            startAt: 10.5,
            endAt: 10.72,
          },
          {
            word: "decidiu",
            startAt: 10.72,
            endAt: 11.18,
          },
          {
            word: "mudar",
            startAt: 11.18,
            endAt: 11.44,
          },
          {
            word: "seus",
            startAt: 11.44,
            endAt: 11.74,
          },
          {
            word: "hábitos.",
            startAt: 11.74,
            endAt: 12.36,
          },
        ],
      },
    },
    {
      page: 13,
      text: "De volta à sua casa, João começou a brincar mais ao ar livre, estudar com mais atenção, dormir melhor e passar tempo com seus amigos e familiares. Ele estava mais feliz e saudável, lembrando sempre das lições que aprendeu com a fada Luma. Essa história foi criada para ajudar as crianças a entenderem a importância de usar o celular com moderação, somente em situações necessárias, a cuidar de sua saúde, dormir bem e a valorizar o mundo ao seu redor.",
      image: "/story/tela/images/13.jpeg",
      audio: {
        content: "/story/tela/audios/12.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "De",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "volta",
            startAt: 0.38,
            endAt: 0.68,
          },
          {
            word: "à",
            startAt: 0.68,
            endAt: 0.8,
          },
          {
            word: "sua",
            startAt: 0.8,
            endAt: 0.94,
          },
          {
            word: "casa,",
            startAt: 0.94,
            endAt: 1.38,
          },
          {
            word: "João",
            startAt: 1.58,
            endAt: 1.74,
          },
          {
            word: "começou",
            startAt: 1.74,
            endAt: 2.2,
          },
          {
            word: "a",
            startAt: 2.2,
            endAt: 2.36,
          },
          {
            word: "brincar",
            startAt: 2.36,
            endAt: 2.76,
          },
          {
            word: "mais",
            startAt: 2.76,
            endAt: 3.04,
          },
          {
            word: "ao",
            startAt: 3.04,
            endAt: 3.2,
          },
          {
            word: "ar",
            startAt: 3.2,
            endAt: 3.36,
          },
          {
            word: "livre,",
            startAt: 3.36,
            endAt: 3.7,
          },
          {
            word: "estudar",
            startAt: 3.96,
            endAt: 4.38,
          },
          {
            word: "com",
            startAt: 4.38,
            endAt: 4.52,
          },
          {
            word: "mais",
            startAt: 4.52,
            endAt: 4.76,
          },
          {
            word: "atenção,",
            startAt: 4.76,
            endAt: 5.24,
          },
          {
            word: "dormir",
            startAt: 5.6,
            endAt: 5.9,
          },
          {
            word: "melhor",
            startAt: 5.9,
            endAt: 6.3,
          },
          {
            word: "e",
            startAt: 6.3,
            endAt: 6.5,
          },
          {
            word: "passar",
            startAt: 6.5,
            endAt: 6.8,
          },
          {
            word: "tempo",
            startAt: 6.8,
            endAt: 7.16,
          },
          {
            word: "com",
            startAt: 7.16,
            endAt: 7.34,
          },
          {
            word: "seus",
            startAt: 7.34,
            endAt: 7.6,
          },
          {
            word: "amigos",
            startAt: 7.6,
            endAt: 7.96,
          },
          {
            word: "e",
            startAt: 7.96,
            endAt: 8.14,
          },
          {
            word: "familiares.",
            startAt: 8.14,
            endAt: 8.84,
          },
          {
            word: "Ele",
            startAt: 9.02,
            endAt: 9.34,
          },
          {
            word: "estava",
            startAt: 9.34,
            endAt: 9.64,
          },
          {
            word: "mais",
            startAt: 9.64,
            endAt: 9.96,
          },
          {
            word: "feliz",
            startAt: 9.96,
            endAt: 10.26,
          },
          {
            word: "e",
            startAt: 10.26,
            endAt: 10.46,
          },
          {
            word: "saudável,",
            startAt: 10.46,
            endAt: 11.04,
          },
          {
            word: "lembrando",
            startAt: 11.24,
            endAt: 11.7,
          },
          {
            word: "sempre",
            startAt: 11.7,
            endAt: 12.12,
          },
          {
            word: "das",
            startAt: 12.12,
            endAt: 12.34,
          },
          {
            word: "lições",
            startAt: 12.34,
            endAt: 12.74,
          },
          {
            word: "que",
            startAt: 12.74,
            endAt: 12.96,
          },
          {
            word: "aprendeu",
            startAt: 12.96,
            endAt: 13.4,
          },
          {
            word: "com",
            startAt: 13.4,
            endAt: 13.56,
          },
          {
            word: "a",
            startAt: 13.56,
            endAt: 13.72,
          },
          {
            word: "fada",
            startAt: 13.72,
            endAt: 13.92,
          },
          {
            word: "Luma.",
            startAt: 13.92,
            endAt: 14.28,
          },
          {
            word: "Essa",
            startAt: 14.5,
            endAt: 14.84,
          },
          {
            word: "história",
            startAt: 14.84,
            endAt: 15.22,
          },
          {
            word: "foi",
            startAt: 15.22,
            endAt: 15.42,
          },
          {
            word: "criada",
            startAt: 15.42,
            endAt: 15.88,
          },
          {
            word: "para",
            startAt: 15.88,
            endAt: 16.1,
          },
          {
            word: "ajudar",
            startAt: 16.1,
            endAt: 16.38,
          },
          {
            word: "as",
            startAt: 16.38,
            endAt: 16.6,
          },
          {
            word: "crianças",
            startAt: 16.6,
            endAt: 17.06,
          },
          {
            word: "a",
            startAt: 17.06,
            endAt: 17.3,
          },
          {
            word: "entenderem",
            startAt: 17.3,
            endAt: 17.76,
          },
          {
            word: "a",
            startAt: 17.76,
            endAt: 17.9,
          },
          {
            word: "importância",
            startAt: 17.9,
            endAt: 18.46,
          },
          {
            word: "de",
            startAt: 18.46,
            endAt: 18.6,
          },
          {
            word: "usar",
            startAt: 18.6,
            endAt: 18.84,
          },
          {
            word: "o",
            startAt: 18.84,
            endAt: 18.98,
          },
          {
            word: "celular",
            startAt: 18.98,
            endAt: 19.4,
          },
          {
            word: "com",
            startAt: 19.4,
            endAt: 19.64,
          },
          {
            word: "moderação,",
            startAt: 19.64,
            endAt: 20.26,
          },
          {
            word: "somente",
            startAt: 20.42,
            endAt: 21,
          },
          {
            word: "em",
            startAt: 21,
            endAt: 21.14,
          },
          {
            word: "situações",
            startAt: 21.14,
            endAt: 21.66,
          },
          {
            word: "necessárias,",
            startAt: 21.66,
            endAt: 22.4,
          },
          {
            word: "a",
            startAt: 22.54,
            endAt: 22.7,
          },
          {
            word: "cuidar",
            startAt: 22.7,
            endAt: 23.08,
          },
          {
            word: "de",
            startAt: 23.08,
            endAt: 23.2,
          },
          {
            word: "sua",
            startAt: 23.2,
            endAt: 23.4,
          },
          {
            word: "saúde,",
            startAt: 23.4,
            endAt: 23.9,
          },
          {
            word: "dormir",
            startAt: 24.18,
            endAt: 24.5,
          },
          {
            word: "bem",
            startAt: 24.5,
            endAt: 24.82,
          },
          {
            word: "e",
            startAt: 24.82,
            endAt: 25,
          },
          {
            word: "a",
            startAt: 25,
            endAt: 25.1,
          },
          {
            word: "valorizar",
            startAt: 25.1,
            endAt: 25.58,
          },
          {
            word: "o",
            startAt: 25.58,
            endAt: 25.72,
          },
          {
            word: "mundo",
            startAt: 25.72,
            endAt: 25.94,
          },
          {
            word: "ao",
            startAt: 25.94,
            endAt: 26.1,
          },
          {
            word: "seu",
            startAt: 26.1,
            endAt: 26.24,
          },
          {
            word: "redor.",
            startAt: 26.24,
            endAt: 26.64,
          },
        ],
      },
    },
  ],
};

export default telaStory;
