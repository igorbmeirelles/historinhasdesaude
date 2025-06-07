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

/* image: "/story/recreio/images/capa.jpeg",
      audio: {
        content: "/story/recreio/audios/0.mp3",
        type: "audio/mp3",
      } */

const recreioStory: Story = {
  title: "Brincadeiras legais no recreio",
  slug: "brincadeiras-recreio",
  pages: [
    {
      page: 1,
      text: "Bem-vindo à historinha, brincadeiras legais no recreio, clique em avançar para começar a aventura de nossos amiguinhos.",
      image: "/story/recreio/images/capa.jpeg",
      audio: {
        content: "/story/recreio/audios/0.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Bem",
            startAt: 0,
            endAt: 0.44,
          },
          {
            word: "-vindo",
            startAt: 0.44,
            endAt: 0.72,
          },
          {
            word: "à",
            startAt: 0.72,
            endAt: 0.82,
          },
          {
            word: "historinha,",
            startAt: 0.82,
            endAt: 1.36,
          },
          {
            word: "brincadeiras",
            startAt: 1.62,
            endAt: 2.2,
          },
          {
            word: "legais",
            startAt: 2.2,
            endAt: 2.64,
          },
          {
            word: "no",
            startAt: 2.64,
            endAt: 2.78,
          },
          {
            word: "recreio,",
            startAt: 2.78,
            endAt: 3.26,
          },
          {
            word: "clique",
            startAt: 3.48,
            endAt: 3.74,
          },
          {
            word: "em",
            startAt: 3.74,
            endAt: 3.94,
          },
          {
            word: "avançar",
            startAt: 3.94,
            endAt: 4.42,
          },
          {
            word: "para",
            startAt: 4.42,
            endAt: 4.62,
          },
          {
            word: "começar",
            startAt: 4.62,
            endAt: 5.02,
          },
          {
            word: "a",
            startAt: 5.02,
            endAt: 5.2,
          },
          {
            word: "aventura",
            startAt: 5.2,
            endAt: 5.64,
          },
          {
            word: "de",
            startAt: 5.64,
            endAt: 5.8,
          },
          {
            word: "nossos",
            startAt: 5.8,
            endAt: 6.1,
          },
          {
            word: "amiguinhos.",
            startAt: 6.1,
            endAt: 6.8,
          },
        ],
      },
    },
    {
      page: 2,
      text: "Era uma vez, na Escola Primavera, dois amigos chamados Bia e Léo. Eles adoravam o recreio, onde podiam correr, brincar e se exercitar. Um dia, a professora Clara lhes contou sobre o misterioso Recreio Encantado, um lugar mágico onde todas as brincadeiras ganhavam vida.",
      image: "/story/recreio/images/2.jpeg",
      audio: {
        content: "/story/recreio/audios/1.mp3",
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
            endAt: 0.56,
          },
          {
            word: "vez,",
            startAt: 0.56,
            endAt: 0.9,
          },
          {
            word: "na",
            startAt: 1.02,
            endAt: 1.08,
          },
          {
            word: "Escola",
            startAt: 1.08,
            endAt: 1.44,
          },
          {
            word: "Primavera,",
            startAt: 1.44,
            endAt: 2.12,
          },
          {
            word: "dois",
            startAt: 2.2,
            endAt: 2.36,
          },
          {
            word: "amigos",
            startAt: 2.36,
            endAt: 2.76,
          },
          {
            word: "chamados",
            startAt: 2.76,
            endAt: 3.26,
          },
          {
            word: "Bia",
            startAt: 3.26,
            endAt: 3.64,
          },
          {
            word: "e",
            startAt: 3.64,
            endAt: 3.76,
          },
          {
            word: "Léo.",
            startAt: 3.76,
            endAt: 3.98,
          },
          {
            word: "Eles",
            startAt: 4.18,
            endAt: 4.52,
          },
          {
            word: "adoravam",
            startAt: 4.52,
            endAt: 5.08,
          },
          {
            word: "o",
            startAt: 5.08,
            endAt: 5.2,
          },
          {
            word: "recreio,",
            startAt: 5.2,
            endAt: 5.66,
          },
          {
            word: "onde",
            startAt: 5.78,
            endAt: 5.98,
          },
          {
            word: "podiam",
            startAt: 5.98,
            endAt: 6.42,
          },
          {
            word: "correr,",
            startAt: 6.42,
            endAt: 6.74,
          },
          {
            word: "brincar",
            startAt: 6.96,
            endAt: 7.4,
          },
          {
            word: "e",
            startAt: 7.4,
            endAt: 7.48,
          },
          {
            word: "se",
            startAt: 7.48,
            endAt: 7.6,
          },
          {
            word: "exercitar.",
            startAt: 7.6,
            endAt: 8.18,
          },
          {
            word: "Um",
            startAt: 8.4,
            endAt: 8.64,
          },
          {
            word: "dia,",
            startAt: 8.64,
            endAt: 8.96,
          },
          {
            word: "a",
            startAt: 9.08,
            endAt: 9.18,
          },
          {
            word: "professora",
            startAt: 9.18,
            endAt: 9.62,
          },
          {
            word: "Clara",
            startAt: 9.62,
            endAt: 9.98,
          },
          {
            word: "lhes",
            startAt: 9.98,
            endAt: 10.24,
          },
          {
            word: "contou",
            startAt: 10.24,
            endAt: 10.58,
          },
          {
            word: "sobre",
            startAt: 10.58,
            endAt: 10.86,
          },
          {
            word: "o",
            startAt: 10.86,
            endAt: 10.96,
          },
          {
            word: "misterioso",
            startAt: 10.96,
            endAt: 11.58,
          },
          {
            word: "Recreio",
            startAt: 11.58,
            endAt: 12.06,
          },
          {
            word: "Encantado,",
            startAt: 12.06,
            endAt: 12.74,
          },
          {
            word: "um",
            startAt: 12.92,
            endAt: 13.12,
          },
          {
            word: "lugar",
            startAt: 13.12,
            endAt: 13.38,
          },
          {
            word: "mágico",
            startAt: 13.38,
            endAt: 13.92,
          },
          {
            word: "onde",
            startAt: 13.92,
            endAt: 14.16,
          },
          {
            word: "todas",
            startAt: 14.16,
            endAt: 14.54,
          },
          {
            word: "as",
            startAt: 14.54,
            endAt: 14.76,
          },
          {
            word: "brincadeiras",
            startAt: 14.76,
            endAt: 15.4,
          },
          {
            word: "ganhavam",
            startAt: 15.4,
            endAt: 15.86,
          },
          {
            word: "vida.",
            startAt: 15.86,
            endAt: 16.2,
          },
        ],
      },
    },
    {
      page: 3,
      text: "Empolgados, Bia e Léo decidiram explorar o recreio encantado. Primeiramente encontraram o Parque das Cordinhas, onde podiam pular corda e fazer muitos amigos. Eles começaram a pular corda juntos, contando alto em cada salto. Foi com muita emoção e risos.",
      image: "/story/recreio/images/3.jpeg",
      audio: {
        content: "/story/recreio/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Empolgados,",
            startAt: 0,
            endAt: 0.88,
          },
          {
            word: "Bia",
            startAt: 1.02,
            endAt: 1.24,
          },
          {
            word: "e",
            startAt: 1.24,
            endAt: 1.38,
          },
          {
            word: "Léo",
            startAt: 1.38,
            endAt: 1.6,
          },
          {
            word: "decidiram",
            startAt: 1.6,
            endAt: 2.18,
          },
          {
            word: "explorar",
            startAt: 2.18,
            endAt: 2.72,
          },
          {
            word: "o",
            startAt: 2.72,
            endAt: 2.8,
          },
          {
            word: "recreio",
            startAt: 2.8,
            endAt: 3.2,
          },
          {
            word: "encantado.",
            startAt: 3.2,
            endAt: 3.84,
          },
          {
            word: "Primeiramente",
            startAt: 4.26,
            endAt: 4.9,
          },
          {
            word: "encontraram",
            startAt: 4.9,
            endAt: 5.54,
          },
          {
            word: "o",
            startAt: 5.54,
            endAt: 5.64,
          },
          {
            word: "Parque",
            startAt: 5.64,
            endAt: 5.96,
          },
          {
            word: "das",
            startAt: 5.96,
            endAt: 6.16,
          },
          {
            word: "Cordinhas,",
            startAt: 6.16,
            endAt: 6.84,
          },
          {
            word: "onde",
            startAt: 7,
            endAt: 7.24,
          },
          {
            word: "podiam",
            startAt: 7.24,
            endAt: 7.66,
          },
          {
            word: "pular",
            startAt: 7.66,
            endAt: 7.98,
          },
          {
            word: "corda",
            startAt: 7.98,
            endAt: 8.46,
          },
          {
            word: "e",
            startAt: 8.46,
            endAt: 8.56,
          },
          {
            word: "fazer",
            startAt: 8.56,
            endAt: 8.86,
          },
          {
            word: "muitos",
            startAt: 8.86,
            endAt: 9.2,
          },
          {
            word: "amigos.",
            startAt: 9.2,
            endAt: 9.7,
          },
          {
            word: "Eles",
            startAt: 10.02,
            endAt: 10.4,
          },
          {
            word: "começaram",
            startAt: 10.4,
            endAt: 10.98,
          },
          {
            word: "a",
            startAt: 10.98,
            endAt: 11.14,
          },
          {
            word: "pular",
            startAt: 11.14,
            endAt: 11.4,
          },
          {
            word: "corda",
            startAt: 11.4,
            endAt: 11.88,
          },
          {
            word: "juntos,",
            startAt: 11.88,
            endAt: 12.24,
          },
          {
            word: "contando",
            startAt: 12.36,
            endAt: 12.78,
          },
          {
            word: "alto",
            startAt: 12.78,
            endAt: 13.14,
          },
          {
            word: "em",
            startAt: 13.14,
            endAt: 13.3,
          },
          {
            word: "cada",
            startAt: 13.3,
            endAt: 13.54,
          },
          {
            word: "salto.",
            startAt: 13.54,
            endAt: 14.04,
          },
          {
            word: "Foi",
            startAt: 14.24,
            endAt: 14.52,
          },
          {
            word: "com",
            startAt: 14.52,
            endAt: 14.74,
          },
          {
            word: "muita",
            startAt: 14.74,
            endAt: 14.98,
          },
          {
            word: "emoção",
            startAt: 14.98,
            endAt: 15.42,
          },
          {
            word: "e",
            startAt: 15.42,
            endAt: 15.58,
          },
          {
            word: "risos.",
            startAt: 15.58,
            endAt: 16.02,
          },
        ],
      },
    },
    {
      page: 4,
      text: "Depois, descobriram a floresta dos bambolês. Bia pegou um bambolê e começou a rodá-lo na cintura, enquanto Léo tentava equilibrar vários bambolês nos braços e na cabeça, rindo muito.",
      image: "/story/recreio/images/4.jpeg",
      audio: {
        content: "/story/recreio/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois,",
            startAt: 0,
            endAt: 0.64,
          },
          {
            word: "descobriram",
            startAt: 0.84,
            endAt: 1.44,
          },
          {
            word: "a",
            startAt: 1.44,
            endAt: 1.54,
          },
          {
            word: "floresta",
            startAt: 1.54,
            endAt: 2.02,
          },
          {
            word: "dos",
            startAt: 2.02,
            endAt: 2.22,
          },
          {
            word: "bambolês.",
            startAt: 2.22,
            endAt: 2.84,
          },
          {
            word: "Bia",
            startAt: 3.18,
            endAt: 3.54,
          },
          {
            word: "pegou",
            startAt: 3.54,
            endAt: 3.86,
          },
          {
            word: "um",
            startAt: 3.86,
            endAt: 3.98,
          },
          {
            word: "bambolê",
            startAt: 3.98,
            endAt: 4.44,
          },
          {
            word: "e",
            startAt: 4.44,
            endAt: 4.6,
          },
          {
            word: "começou",
            startAt: 4.6,
            endAt: 4.98,
          },
          {
            word: "a",
            startAt: 4.98,
            endAt: 5.12,
          },
          {
            word: "rodá",
            startAt: 5.12,
            endAt: 5.42,
          },
          {
            word: "-lo",
            startAt: 5.42,
            endAt: 5.54,
          },
          {
            word: "na",
            startAt: 5.54,
            endAt: 5.66,
          },
          {
            word: "cintura,",
            startAt: 5.66,
            endAt: 6.16,
          },
          {
            word: "enquanto",
            startAt: 6.38,
            endAt: 6.76,
          },
          {
            word: "Léo",
            startAt: 6.76,
            endAt: 7.02,
          },
          {
            word: "tentava",
            startAt: 7.02,
            endAt: 7.46,
          },
          {
            word: "equilibrar",
            startAt: 7.46,
            endAt: 7.98,
          },
          {
            word: "vários",
            startAt: 7.98,
            endAt: 8.38,
          },
          {
            word: "bambolês",
            startAt: 8.38,
            endAt: 9,
          },
          {
            word: "nos",
            startAt: 9,
            endAt: 9.18,
          },
          {
            word: "braços",
            startAt: 9.18,
            endAt: 9.66,
          },
          {
            word: "e",
            startAt: 9.66,
            endAt: 9.82,
          },
          {
            word: "na",
            startAt: 9.82,
            endAt: 9.92,
          },
          {
            word: "cabeça,",
            startAt: 9.92,
            endAt: 10.42,
          },
          {
            word: "rindo",
            startAt: 10.6,
            endAt: 10.82,
          },
          {
            word: "muito.",
            startAt: 10.82,
            endAt: 11.22,
          },
        ],
      },
    },
    {
      page: 5,
      text: "Seguindo em frente, os amigos chegaram ao campo dos jogos, onde havia várias bolas coloridas. Bia e Léo começaram a jogar futebol com os colegas, passando a bola de um para o outro e marcando gols imaginários.",
      image: "/story/recreio/images/5.jpeg",
      audio: {
        content: "/story/recreio/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Seguindo",
            startAt: 0,
            endAt: 0.7,
          },
          {
            word: "em",
            startAt: 0.7,
            endAt: 0.84,
          },
          {
            word: "frente,",
            startAt: 0.84,
            endAt: 1.22,
          },
          {
            word: "os",
            startAt: 1.36,
            endAt: 1.48,
          },
          {
            word: "amigos",
            startAt: 1.48,
            endAt: 1.82,
          },
          {
            word: "chegaram",
            startAt: 1.82,
            endAt: 2.3,
          },
          {
            word: "ao",
            startAt: 2.3,
            endAt: 2.44,
          },
          {
            word: "campo",
            startAt: 2.44,
            endAt: 2.74,
          },
          {
            word: "dos",
            startAt: 2.74,
            endAt: 2.96,
          },
          {
            word: "jogos,",
            startAt: 2.96,
            endAt: 3.34,
          },
          {
            word: "onde",
            startAt: 3.62,
            endAt: 3.88,
          },
          {
            word: "havia",
            startAt: 3.88,
            endAt: 4.16,
          },
          {
            word: "várias",
            startAt: 4.16,
            endAt: 4.54,
          },
          {
            word: "bolas",
            startAt: 4.54,
            endAt: 4.96,
          },
          {
            word: "coloridas.",
            startAt: 4.96,
            endAt: 5.56,
          },
          {
            word: "Bia",
            startAt: 5.98,
            endAt: 6.28,
          },
          {
            word: "e",
            startAt: 6.28,
            endAt: 6.44,
          },
          {
            word: "Léo",
            startAt: 6.44,
            endAt: 6.64,
          },
          {
            word: "começaram",
            startAt: 6.64,
            endAt: 7.18,
          },
          {
            word: "a",
            startAt: 7.18,
            endAt: 7.3,
          },
          {
            word: "jogar",
            startAt: 7.3,
            endAt: 7.58,
          },
          {
            word: "futebol",
            startAt: 7.58,
            endAt: 8.14,
          },
          {
            word: "com",
            startAt: 8.14,
            endAt: 8.3,
          },
          {
            word: "os",
            startAt: 8.3,
            endAt: 8.44,
          },
          {
            word: "colegas,",
            startAt: 8.44,
            endAt: 9,
          },
          {
            word: "passando",
            startAt: 9.16,
            endAt: 9.54,
          },
          {
            word: "a",
            startAt: 9.54,
            endAt: 9.66,
          },
          {
            word: "bola",
            startAt: 9.66,
            endAt: 9.94,
          },
          {
            word: "de",
            startAt: 9.94,
            endAt: 10.1,
          },
          {
            word: "um",
            startAt: 10.1,
            endAt: 10.26,
          },
          {
            word: "para",
            startAt: 10.26,
            endAt: 10.46,
          },
          {
            word: "o",
            startAt: 10.46,
            endAt: 10.58,
          },
          {
            word: "outro",
            startAt: 10.58,
            endAt: 10.88,
          },
          {
            word: "e",
            startAt: 10.88,
            endAt: 11.04,
          },
          {
            word: "marcando",
            startAt: 11.04,
            endAt: 11.44,
          },
          {
            word: "gols",
            startAt: 11.44,
            endAt: 11.84,
          },
          {
            word: "imaginários.",
            startAt: 11.84,
            endAt: 12.48,
          },
        ],
      },
    },
    {
      page: 6,
      text: "Depois de uma partida animada, encontraram a trilha das aventuras, um caminho cheio de obstáculos. Eles correram, pularam e rastejaram, desafiando-se a completar o percurso no menor tempo possível.",
      image: "/story/recreio/images/6.jpeg",
      audio: {
        content: "/story/recreio/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois",
            startAt: 0,
            endAt: 0.52,
          },
          {
            word: "de",
            startAt: 0.52,
            endAt: 0.7,
          },
          {
            word: "uma",
            startAt: 0.7,
            endAt: 0.84,
          },
          {
            word: "partida",
            startAt: 0.84,
            endAt: 1.3,
          },
          {
            word: "animada,",
            startAt: 1.3,
            endAt: 1.84,
          },
          {
            word: "encontraram",
            startAt: 2.06,
            endAt: 2.56,
          },
          {
            word: "a",
            startAt: 2.56,
            endAt: 2.68,
          },
          {
            word: "trilha",
            startAt: 2.68,
            endAt: 2.98,
          },
          {
            word: "das",
            startAt: 2.98,
            endAt: 3.16,
          },
          {
            word: "aventuras,",
            startAt: 3.16,
            endAt: 3.8,
          },
          {
            word: "um",
            startAt: 3.94,
            endAt: 4.16,
          },
          {
            word: "caminho",
            startAt: 4.16,
            endAt: 4.48,
          },
          {
            word: "cheio",
            startAt: 4.48,
            endAt: 4.86,
          },
          {
            word: "de",
            startAt: 4.86,
            endAt: 4.98,
          },
          {
            word: "obstáculos.",
            startAt: 4.98,
            endAt: 5.66,
          },
          {
            word: "Eles",
            startAt: 5.94,
            endAt: 6.3,
          },
          {
            word: "correram,",
            startAt: 6.3,
            endAt: 6.8,
          },
          {
            word: "pularam",
            startAt: 6.94,
            endAt: 7.36,
          },
          {
            word: "e",
            startAt: 7.36,
            endAt: 7.46,
          },
          {
            word: "rastejaram,",
            startAt: 7.46,
            endAt: 8.18,
          },
          {
            word: "desafiando",
            startAt: 8.4,
            endAt: 9.02,
          },
          {
            word: "-se",
            startAt: 9.02,
            endAt: 9.14,
          },
          {
            word: "a",
            startAt: 9.14,
            endAt: 9.22,
          },
          {
            word: "completar",
            startAt: 9.22,
            endAt: 9.7,
          },
          {
            word: "o",
            startAt: 9.7,
            endAt: 9.8,
          },
          {
            word: "percurso",
            startAt: 9.8,
            endAt: 10.32,
          },
          {
            word: "no",
            startAt: 10.32,
            endAt: 10.46,
          },
          {
            word: "menor",
            startAt: 10.46,
            endAt: 10.78,
          },
          {
            word: "tempo",
            startAt: 10.78,
            endAt: 11.06,
          },
          {
            word: "possível.",
            startAt: 11.06,
            endAt: 11.6,
          },
        ],
      },
    },
    {
      page: 7,
      text: "O próximo destino foi o Pátio das Danças. Lá, uma música alegre começou a tocar e todos começaram a dançar. Bia e Léo inventaram passos de dança engraçados, convidando os amigos para se juntarem a eles.",
      image: "/story/recreio/images/7.jpeg",
      audio: {
        content: "/story/recreio/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "O",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "próximo",
            startAt: 0.32,
            endAt: 0.68,
          },
          {
            word: "destino",
            startAt: 0.68,
            endAt: 1.2,
          },
          {
            word: "foi",
            startAt: 1.2,
            endAt: 1.4,
          },
          {
            word: "o",
            startAt: 1.4,
            endAt: 1.5,
          },
          {
            word: "Pátio",
            startAt: 1.5,
            endAt: 1.84,
          },
          {
            word: "das",
            startAt: 1.84,
            endAt: 2.04,
          },
          {
            word: "Danças.",
            startAt: 2.04,
            endAt: 2.48,
          },
          {
            word: "Lá,",
            startAt: 2.74,
            endAt: 3.14,
          },
          {
            word: "uma",
            startAt: 3.26,
            endAt: 3.46,
          },
          {
            word: "música",
            startAt: 3.46,
            endAt: 3.82,
          },
          {
            word: "alegre",
            startAt: 3.82,
            endAt: 4.28,
          },
          {
            word: "começou",
            startAt: 4.28,
            endAt: 4.66,
          },
          {
            word: "a",
            startAt: 4.66,
            endAt: 4.8,
          },
          {
            word: "tocar",
            startAt: 4.8,
            endAt: 5.06,
          },
          {
            word: "e",
            startAt: 5.06,
            endAt: 5.26,
          },
          {
            word: "todos",
            startAt: 5.26,
            endAt: 5.62,
          },
          {
            word: "começaram",
            startAt: 5.62,
            endAt: 6.22,
          },
          {
            word: "a",
            startAt: 6.22,
            endAt: 6.38,
          },
          {
            word: "dançar.",
            startAt: 6.38,
            endAt: 6.8,
          },
          {
            word: "Bia",
            startAt: 7.08,
            endAt: 7.42,
          },
          {
            word: "e",
            startAt: 7.42,
            endAt: 7.58,
          },
          {
            word: "Léo",
            startAt: 7.58,
            endAt: 7.8,
          },
          {
            word: "inventaram",
            startAt: 7.8,
            endAt: 8.34,
          },
          {
            word: "passos",
            startAt: 8.34,
            endAt: 8.82,
          },
          {
            word: "de",
            startAt: 8.82,
            endAt: 8.96,
          },
          {
            word: "dança",
            startAt: 8.96,
            endAt: 9.28,
          },
          {
            word: "engraçados,",
            startAt: 9.28,
            endAt: 9.98,
          },
          {
            word: "convidando",
            startAt: 10.28,
            endAt: 10.76,
          },
          {
            word: "os",
            startAt: 10.76,
            endAt: 10.9,
          },
          {
            word: "amigos",
            startAt: 10.9,
            endAt: 11.28,
          },
          {
            word: "para",
            startAt: 11.28,
            endAt: 11.58,
          },
          {
            word: "se",
            startAt: 11.58,
            endAt: 11.78,
          },
          {
            word: "juntarem",
            startAt: 11.78,
            endAt: 12.24,
          },
          {
            word: "a",
            startAt: 12.24,
            endAt: 12.42,
          },
          {
            word: "eles.",
            startAt: 12.42,
            endAt: 12.74,
          },
        ],
      },
    },
    {
      page: 8,
      text: "Depois de tanto se exercitar, Bia e Léo chegaram à fonte da energia. Eles beberam a água fresca e se sentiram renovados, prontos para continuar brincando.",
      image: "/story/recreio/images/8.jpeg",
      audio: {
        content: "/story/recreio/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois",
            startAt: 0,
            endAt: 0.56,
          },
          {
            word: "de",
            startAt: 0.56,
            endAt: 0.8,
          },
          {
            word: "tanto",
            startAt: 0.8,
            endAt: 1.04,
          },
          {
            word: "se",
            startAt: 1.04,
            endAt: 1.26,
          },
          {
            word: "exercitar,",
            startAt: 1.26,
            endAt: 1.86,
          },
          {
            word: "Bia",
            startAt: 2.08,
            endAt: 2.28,
          },
          {
            word: "e",
            startAt: 2.28,
            endAt: 2.44,
          },
          {
            word: "Léo",
            startAt: 2.44,
            endAt: 2.66,
          },
          {
            word: "chegaram",
            startAt: 2.66,
            endAt: 3.16,
          },
          {
            word: "à",
            startAt: 3.16,
            endAt: 3.26,
          },
          {
            word: "fonte",
            startAt: 3.26,
            endAt: 3.58,
          },
          {
            word: "da",
            startAt: 3.58,
            endAt: 3.74,
          },
          {
            word: "energia.",
            startAt: 3.74,
            endAt: 4.16,
          },
          {
            word: "Eles",
            startAt: 4.5,
            endAt: 4.88,
          },
          {
            word: "beberam",
            startAt: 4.88,
            endAt: 5.34,
          },
          {
            word: "a",
            startAt: 5.34,
            endAt: 5.44,
          },
          {
            word: "água",
            startAt: 5.44,
            endAt: 5.68,
          },
          {
            word: "fresca",
            startAt: 5.68,
            endAt: 6.2,
          },
          {
            word: "e",
            startAt: 6.2,
            endAt: 6.32,
          },
          {
            word: "se",
            startAt: 6.32,
            endAt: 6.46,
          },
          {
            word: "sentiram",
            startAt: 6.46,
            endAt: 6.9,
          },
          {
            word: "renovados,",
            startAt: 6.9,
            endAt: 7.54,
          },
          {
            word: "prontos",
            startAt: 7.68,
            endAt: 8.06,
          },
          {
            word: "para",
            startAt: 8.06,
            endAt: 8.24,
          },
          {
            word: "continuar",
            startAt: 8.24,
            endAt: 8.64,
          },
          {
            word: "brincando.",
            startAt: 8.64,
            endAt: 9.36,
          },
        ],
      },
    },
    {
      page: 9,
      text: "Logo em seguida, encontraram a árvore das pipas. Subiram na árvore e soltaram pipas coloridas, observando-as voar alto no céu, e se divertirem com as formas que as pipas faziam.",
      image: "/story/recreio/images/9.jpeg",
      audio: {
        content: "/story/recreio/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Logo",
            startAt: 0,
            endAt: 0.52,
          },
          {
            word: "em",
            startAt: 0.52,
            endAt: 0.64,
          },
          {
            word: "seguida,",
            startAt: 0.64,
            endAt: 1.08,
          },
          {
            word: "encontraram",
            startAt: 1.3,
            endAt: 1.82,
          },
          {
            word: "a",
            startAt: 1.82,
            endAt: 1.94,
          },
          {
            word: "árvore",
            startAt: 1.94,
            endAt: 2.3,
          },
          {
            word: "das",
            startAt: 2.3,
            endAt: 2.5,
          },
          {
            word: "pipas.",
            startAt: 2.5,
            endAt: 3.04,
          },
          {
            word: "Subiram",
            startAt: 3.4,
            endAt: 3.88,
          },
          {
            word: "na",
            startAt: 3.88,
            endAt: 4.04,
          },
          {
            word: "árvore",
            startAt: 4.04,
            endAt: 4.42,
          },
          {
            word: "e",
            startAt: 4.42,
            endAt: 4.56,
          },
          {
            word: "soltaram",
            startAt: 4.56,
            endAt: 4.98,
          },
          {
            word: "pipas",
            startAt: 4.98,
            endAt: 5.4,
          },
          {
            word: "coloridas,",
            startAt: 5.4,
            endAt: 6,
          },
          {
            word: "observando",
            startAt: 6.12,
            endAt: 6.78,
          },
          {
            word: "-as",
            startAt: 6.78,
            endAt: 6.92,
          },
          {
            word: "voar",
            startAt: 6.92,
            endAt: 7.24,
          },
          {
            word: "alto",
            startAt: 7.24,
            endAt: 7.48,
          },
          {
            word: "no",
            startAt: 7.48,
            endAt: 7.64,
          },
          {
            word: "céu,",
            startAt: 7.64,
            endAt: 7.92,
          },
          {
            word: "e",
            startAt: 8.06,
            endAt: 8.3,
          },
          {
            word: "se",
            startAt: 8.3,
            endAt: 8.42,
          },
          {
            word: "divertirem",
            startAt: 8.42,
            endAt: 9.04,
          },
          {
            word: "com",
            startAt: 9.04,
            endAt: 9.16,
          },
          {
            word: "as",
            startAt: 9.16,
            endAt: 9.32,
          },
          {
            word: "formas",
            startAt: 9.32,
            endAt: 9.66,
          },
          {
            word: "que",
            startAt: 9.66,
            endAt: 9.84,
          },
          {
            word: "as",
            startAt: 9.84,
            endAt: 9.98,
          },
          {
            word: "pipas",
            startAt: 9.98,
            endAt: 10.3,
          },
          {
            word: "faziam.",
            startAt: 10.3,
            endAt: 10.8,
          },
        ],
      },
    },
    {
      page: 10,
      text: "No final do dia, a professora Clara chamou todos para voltarem para a sala. Bia e Léo estavam cansados, mas muito felizes. Eles aprenderam que brincar e se exercitar tornava o dia mais divertido e saudável.",
      image: "/story/recreio/images/10.jpeg",
      audio: {
        content: "/story/recreio/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "No",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "final",
            startAt: 0.32,
            endAt: 0.62,
          },
          {
            word: "do",
            startAt: 0.62,
            endAt: 0.8,
          },
          {
            word: "dia,",
            startAt: 0.8,
            endAt: 1.1,
          },
          {
            word: "a",
            startAt: 1.24,
            endAt: 1.34,
          },
          {
            word: "professora",
            startAt: 1.34,
            endAt: 1.8,
          },
          {
            word: "Clara",
            startAt: 1.8,
            endAt: 2.1,
          },
          {
            word: "chamou",
            startAt: 2.1,
            endAt: 2.52,
          },
          {
            word: "todos",
            startAt: 2.52,
            endAt: 2.92,
          },
          {
            word: "para",
            startAt: 2.92,
            endAt: 3.18,
          },
          {
            word: "voltarem",
            startAt: 3.18,
            endAt: 3.7,
          },
          {
            word: "para",
            startAt: 3.7,
            endAt: 3.9,
          },
          {
            word: "a",
            startAt: 3.9,
            endAt: 4.08,
          },
          {
            word: "sala.",
            startAt: 4.08,
            endAt: 4.3,
          },
          {
            word: "Bia",
            startAt: 4.72,
            endAt: 4.96,
          },
          {
            word: "e",
            startAt: 4.96,
            endAt: 5.1,
          },
          {
            word: "Léo",
            startAt: 5.1,
            endAt: 5.3,
          },
          {
            word: "estavam",
            startAt: 5.3,
            endAt: 5.64,
          },
          {
            word: "cansados,",
            startAt: 5.64,
            endAt: 6.26,
          },
          {
            word: "mas",
            startAt: 6.46,
            endAt: 6.66,
          },
          {
            word: "muito",
            startAt: 6.66,
            endAt: 6.98,
          },
          {
            word: "felizes.",
            startAt: 6.98,
            endAt: 7.46,
          },
          {
            word: "Eles",
            startAt: 7.76,
            endAt: 8.16,
          },
          {
            word: "aprenderam",
            startAt: 8.16,
            endAt: 8.72,
          },
          {
            word: "que",
            startAt: 8.72,
            endAt: 8.84,
          },
          {
            word: "brincar",
            startAt: 8.84,
            endAt: 9.34,
          },
          {
            word: "e",
            startAt: 9.34,
            endAt: 9.42,
          },
          {
            word: "se",
            startAt: 9.42,
            endAt: 9.56,
          },
          {
            word: "exercitar",
            startAt: 9.56,
            endAt: 10.12,
          },
          {
            word: "tornava",
            startAt: 10.12,
            endAt: 10.66,
          },
          {
            word: "o",
            startAt: 10.66,
            endAt: 10.78,
          },
          {
            word: "dia",
            startAt: 10.78,
            endAt: 10.94,
          },
          {
            word: "mais",
            startAt: 10.94,
            endAt: 11.26,
          },
          {
            word: "divertido",
            startAt: 11.26,
            endAt: 11.84,
          },
          {
            word: "e",
            startAt: 11.84,
            endAt: 11.94,
          },
          {
            word: "saudável.",
            startAt: 11.94,
            endAt: 12.48,
          },
        ],
      },
    },
    {
      page: 11,
      text: "Os dois amigos prometeram continuar explorando o recreio encantado todos os dias, descobrindo novas formas de brincar e se exercitarem juntos. Essa história foi criada para inspirar você a brincar e se exercitar, se mantendo feliz e com saúde.",
      image: "/story/recreio/images/11.jpeg",
      audio: {
        content: "/story/recreio/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Os",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "dois",
            startAt: 0.38,
            endAt: 0.56,
          },
          {
            word: "amigos",
            startAt: 0.56,
            endAt: 1.04,
          },
          {
            word: "prometeram",
            startAt: 1.04,
            endAt: 1.66,
          },
          {
            word: "continuar",
            startAt: 1.66,
            endAt: 2.12,
          },
          {
            word: "explorando",
            startAt: 2.12,
            endAt: 2.76,
          },
          {
            word: "o",
            startAt: 2.76,
            endAt: 2.9,
          },
          {
            word: "recreio",
            startAt: 2.9,
            endAt: 3.26,
          },
          {
            word: "encantado",
            startAt: 3.26,
            endAt: 3.86,
          },
          {
            word: "todos",
            startAt: 3.86,
            endAt: 4.24,
          },
          {
            word: "os",
            startAt: 4.24,
            endAt: 4.52,
          },
          {
            word: "dias,",
            startAt: 4.52,
            endAt: 4.8,
          },
          {
            word: "descobrindo",
            startAt: 5.1,
            endAt: 5.7,
          },
          {
            word: "novas",
            startAt: 5.7,
            endAt: 6.12,
          },
          {
            word: "formas",
            startAt: 6.12,
            endAt: 6.48,
          },
          {
            word: "de",
            startAt: 6.48,
            endAt: 6.66,
          },
          {
            word: "brincar",
            startAt: 6.66,
            endAt: 7.12,
          },
          {
            word: "e",
            startAt: 7.12,
            endAt: 7.2,
          },
          {
            word: "se",
            startAt: 7.2,
            endAt: 7.32,
          },
          {
            word: "exercitarem",
            startAt: 7.32,
            endAt: 7.98,
          },
          {
            word: "juntos.",
            startAt: 7.98,
            endAt: 8.38,
          },
          {
            word: "Essa",
            startAt: 8.72,
            endAt: 9.08,
          },
          {
            word: "história",
            startAt: 9.08,
            endAt: 9.48,
          },
          {
            word: "foi",
            startAt: 9.48,
            endAt: 9.68,
          },
          {
            word: "criada",
            startAt: 9.68,
            endAt: 10.12,
          },
          {
            word: "para",
            startAt: 10.12,
            endAt: 10.32,
          },
          {
            word: "inspirar",
            startAt: 10.32,
            endAt: 10.78,
          },
          {
            word: "você",
            startAt: 10.78,
            endAt: 11.04,
          },
          {
            word: "a",
            startAt: 11.04,
            endAt: 11.2,
          },
          {
            word: "brincar",
            startAt: 11.2,
            endAt: 11.6,
          },
          {
            word: "e",
            startAt: 11.6,
            endAt: 11.7,
          },
          {
            word: "se",
            startAt: 11.7,
            endAt: 11.82,
          },
          {
            word: "exercitar,",
            startAt: 11.82,
            endAt: 12.44,
          },
          {
            word: "se",
            startAt: 12.6,
            endAt: 12.8,
          },
          {
            word: "mantendo",
            startAt: 12.8,
            endAt: 13.18,
          },
          {
            word: "feliz",
            startAt: 13.18,
            endAt: 13.54,
          },
          {
            word: "e",
            startAt: 13.54,
            endAt: 13.74,
          },
          {
            word: "com",
            startAt: 13.74,
            endAt: 13.88,
          },
          {
            word: "saúde.",
            startAt: 13.88,
            endAt: 14.36,
          },
        ],
      },
    },
  ],
};

export default recreioStory;
