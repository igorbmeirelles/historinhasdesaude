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

const transitoStory: Story = {
  title: "A Aventura de Pedro e Ana no Trânsito Seguro",
  slug: "transito-seguro",
  pages: [
    {
      page: 1,
      text: "A Aventura de Pedro e Ana no Trânsito Seguro",
      image: "/story/transito/images/capa.png",
    },
    {
      page: 2,
      text: "Era uma vez, dois amigos chamados Pedro e Ana que adoravam brincar e passear pela cidade, mas sabiam que precisavam aprender sobre segurança no trânsito para se manterem seguros.",
      image: "/story/transito/images/2.png",
      audio: {
        content: "/story/transito/audios/1.mp3",
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
            word: "dois",
            startAt: 1.06,
            endAt: 1.16,
          },
          {
            word: "amigos",
            startAt: 1.16,
            endAt: 1.56,
          },
          {
            word: "chamados",
            startAt: 1.56,
            endAt: 2.04,
          },
          {
            word: "Pedro",
            startAt: 2.04,
            endAt: 2.46,
          },
          {
            word: "e",
            startAt: 2.46,
            endAt: 2.68,
          },
          {
            word: "Ana",
            startAt: 2.68,
            endAt: 2.96,
          },
          {
            word: "que",
            startAt: 2.96,
            endAt: 3.12,
          },
          {
            word: "adoravam",
            startAt: 3.12,
            endAt: 3.58,
          },
          {
            word: "brincar",
            startAt: 3.58,
            endAt: 4.06,
          },
          {
            word: "e",
            startAt: 4.06,
            endAt: 4.14,
          },
          {
            word: "passear",
            startAt: 4.14,
            endAt: 4.56,
          },
          {
            word: "pela",
            startAt: 4.56,
            endAt: 4.78,
          },
          {
            word: "cidade,",
            startAt: 4.78,
            endAt: 5.28,
          },
          {
            word: "mas",
            startAt: 5.52,
            endAt: 5.72,
          },
          {
            word: "sabiam",
            startAt: 5.72,
            endAt: 6.12,
          },
          {
            word: "que",
            startAt: 6.12,
            endAt: 6.26,
          },
          {
            word: "precisavam",
            startAt: 6.26,
            endAt: 6.88,
          },
          {
            word: "aprender",
            startAt: 6.88,
            endAt: 7.26,
          },
          {
            word: "sobre",
            startAt: 7.26,
            endAt: 7.68,
          },
          {
            word: "segurança",
            startAt: 7.68,
            endAt: 8.18,
          },
          {
            word: "no",
            startAt: 8.18,
            endAt: 8.42,
          },
          {
            word: "trânsito",
            startAt: 8.42,
            endAt: 8.88,
          },
          {
            word: "para",
            startAt: 8.88,
            endAt: 9.08,
          },
          {
            word: "se",
            startAt: 9.08,
            endAt: 9.26,
          },
          {
            word: "manterem",
            startAt: 9.26,
            endAt: 9.64,
          },
          {
            word: "seguros.",
            startAt: 9.64,
            endAt: 10.2,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Um dia, a professora Carla organizou uma aula especial sobre segurança no trânsito. Ela mostrou um semáforo e explicou. "O verde significa que é seguro para o pedestre atravessar, o amarelo é para ter atenção e o vermelho é para parar". E devemos seguir a faixa.',
      image: "/story/transito/images/3.png",
      audio: {
        content: "/story/transito/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Um",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "dia,",
            startAt: 0.38,
            endAt: 0.66,
          },
          {
            word: "a",
            startAt: 0.8,
            endAt: 0.92,
          },
          {
            word: "professora",
            startAt: 0.92,
            endAt: 1.4,
          },
          {
            word: "Carla",
            startAt: 1.4,
            endAt: 1.74,
          },
          {
            word: "organizou",
            startAt: 1.74,
            endAt: 2.36,
          },
          {
            word: "uma",
            startAt: 2.36,
            endAt: 2.54,
          },
          {
            word: "aula",
            startAt: 2.54,
            endAt: 2.78,
          },
          {
            word: "especial",
            startAt: 2.78,
            endAt: 3.28,
          },
          {
            word: "sobre",
            startAt: 3.28,
            endAt: 3.74,
          },
          {
            word: "segurança",
            startAt: 3.74,
            endAt: 4.22,
          },
          {
            word: "no",
            startAt: 4.22,
            endAt: 4.46,
          },
          {
            word: "trânsito.",
            startAt: 4.46,
            endAt: 4.98,
          },
          {
            word: "Ela",
            startAt: 5.18,
            endAt: 5.48,
          },
          {
            word: "mostrou",
            startAt: 5.48,
            endAt: 5.86,
          },
          {
            word: "um",
            startAt: 5.86,
            endAt: 5.98,
          },
          {
            word: "semáforo",
            startAt: 5.98,
            endAt: 6.56,
          },
          {
            word: "e",
            startAt: 6.56,
            endAt: 6.66,
          },
          {
            word: "explicou.",
            startAt: 6.66,
            endAt: 7.24,
          },
          {
            word: "O",
            startAt: 7.38,
            endAt: 7.62,
          },
          {
            word: "verde",
            startAt: 7.62,
            endAt: 7.9,
          },
          {
            word: "significa",
            startAt: 7.9,
            endAt: 8.42,
          },
          {
            word: "que",
            startAt: 8.42,
            endAt: 8.7,
          },
          {
            word: "é",
            startAt: 8.7,
            endAt: 8.8,
          },
          {
            word: "seguro",
            startAt: 8.8,
            endAt: 9.18,
          },
          {
            word: "para",
            startAt: 9.18,
            endAt: 9.4,
          },
          {
            word: "o",
            startAt: 9.4,
            endAt: 9.52,
          },
          {
            word: "pedestre",
            startAt: 9.52,
            endAt: 10,
          },
          {
            word: "atravessar,",
            startAt: 10,
            endAt: 10.66,
          },
          {
            word: "o",
            startAt: 10.82,
            endAt: 11.04,
          },
          {
            word: "amarelo",
            startAt: 11.04,
            endAt: 11.52,
          },
          {
            word: "é",
            startAt: 11.52,
            endAt: 11.62,
          },
          {
            word: "para",
            startAt: 11.62,
            endAt: 11.78,
          },
          {
            word: "ter",
            startAt: 11.78,
            endAt: 12,
          },
          {
            word: "atenção",
            startAt: 12,
            endAt: 12.36,
          },
          {
            word: "e",
            startAt: 12.36,
            endAt: 12.66,
          },
          {
            word: "o",
            startAt: 12.66,
            endAt: 12.74,
          },
          {
            word: "vermelho",
            startAt: 12.74,
            endAt: 13.22,
          },
          {
            word: "é",
            startAt: 13.22,
            endAt: 13.32,
          },
          {
            word: "para",
            startAt: 13.32,
            endAt: 13.5,
          },
          {
            word: "parar.",
            startAt: 13.5,
            endAt: 13.86,
          },
          {
            word: "E",
            startAt: 14.06,
            endAt: 14.24,
          },
          {
            word: "devemos",
            startAt: 14.24,
            endAt: 14.68,
          },
          {
            word: "seguir",
            startAt: 14.68,
            endAt: 14.94,
          },
          {
            word: "a",
            startAt: 14.94,
            endAt: 15.12,
          },
          {
            word: "faixa.",
            startAt: 15.12,
            endAt: 15.56,
          },
        ],
      },
    },
    {
      page: 4,
      text: "Animados, Pedro e Ana decidiram praticar o que aprenderam. Ao chegarem à faixa de pedestres, eles olharam para os dois lados e esperaram o semáforo ficar verde antes de atravessar.",
      image: "/story/transito/images/4.png",
      audio: {
        content: "/story/transito/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Animados,",
            startAt: 0,
            endAt: 0.8,
          },
          {
            word: "Pedro",
            startAt: 1.02,
            endAt: 1.24,
          },
          {
            word: "e",
            startAt: 1.24,
            endAt: 1.4,
          },
          {
            word: "Ana",
            startAt: 1.4,
            endAt: 1.64,
          },
          {
            word: "decidiram",
            startAt: 1.64,
            endAt: 2.22,
          },
          {
            word: "praticar",
            startAt: 2.22,
            endAt: 2.8,
          },
          {
            word: "o",
            startAt: 2.8,
            endAt: 2.88,
          },
          {
            word: "que",
            startAt: 2.88,
            endAt: 2.98,
          },
          {
            word: "aprenderam.",
            startAt: 2.98,
            endAt: 3.58,
          },
          {
            word: "Ao",
            startAt: 3.74,
            endAt: 3.98,
          },
          {
            word: "chegarem",
            startAt: 3.98,
            endAt: 4.4,
          },
          {
            word: "à",
            startAt: 4.4,
            endAt: 4.56,
          },
          {
            word: "faixa",
            startAt: 4.56,
            endAt: 4.88,
          },
          {
            word: "de",
            startAt: 4.88,
            endAt: 5.02,
          },
          {
            word: "pedestres,",
            startAt: 5.02,
            endAt: 5.68,
          },
          {
            word: "eles",
            startAt: 5.88,
            endAt: 6.1,
          },
          {
            word: "olharam",
            startAt: 6.1,
            endAt: 6.56,
          },
          {
            word: "para",
            startAt: 6.56,
            endAt: 6.72,
          },
          {
            word: "os",
            startAt: 6.72,
            endAt: 6.88,
          },
          {
            word: "dois",
            startAt: 6.88,
            endAt: 7.1,
          },
          {
            word: "lados",
            startAt: 7.1,
            endAt: 7.48,
          },
          {
            word: "e",
            startAt: 7.48,
            endAt: 7.72,
          },
          {
            word: "esperaram",
            startAt: 7.72,
            endAt: 8.2,
          },
          {
            word: "o",
            startAt: 8.2,
            endAt: 8.34,
          },
          {
            word: "semáforo",
            startAt: 8.34,
            endAt: 8.94,
          },
          {
            word: "ficar",
            startAt: 8.94,
            endAt: 9.14,
          },
          {
            word: "verde",
            startAt: 9.14,
            endAt: 9.62,
          },
          {
            word: "antes",
            startAt: 9.62,
            endAt: 10.04,
          },
          {
            word: "de",
            startAt: 10.04,
            endAt: 10.22,
          },
          {
            word: "atravessar.",
            startAt: 10.22,
            endAt: 10.88,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Enquanto caminhavam, viram uma placa de "Pare". Ana lembrou que isso significava que todos os veículos deviam parar para os pedestres atravessarem em segurança. Eles atravessaram a rua com cuidado.',
      image: "/story/transito/images/5.png",
      audio: {
        content: "/story/transito/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Enquanto",
            startAt: 0,
            endAt: 0.62,
          },
          {
            word: "caminhavam,",
            startAt: 0.62,
            endAt: 1.28,
          },
          {
            word: "viram",
            startAt: 1.5,
            endAt: 1.72,
          },
          {
            word: "uma",
            startAt: 1.72,
            endAt: 1.88,
          },
          {
            word: "placa",
            startAt: 1.88,
            endAt: 2.24,
          },
          {
            word: "de",
            startAt: 2.24,
            endAt: 2.38,
          },
          {
            word: "pare.",
            startAt: 2.38,
            endAt: 2.7,
          },
          {
            word: "Ana",
            startAt: 3.02,
            endAt: 3.24,
          },
          {
            word: "lembrou",
            startAt: 3.24,
            endAt: 3.68,
          },
          {
            word: "que",
            startAt: 3.68,
            endAt: 3.86,
          },
          {
            word: "isso",
            startAt: 3.86,
            endAt: 4.06,
          },
          {
            word: "significava",
            startAt: 4.06,
            endAt: 4.82,
          },
          {
            word: "que",
            startAt: 4.82,
            endAt: 4.98,
          },
          {
            word: "todos",
            startAt: 4.98,
            endAt: 5.36,
          },
          {
            word: "os",
            startAt: 5.36,
            endAt: 5.58,
          },
          {
            word: "veículos",
            startAt: 5.58,
            endAt: 6.02,
          },
          {
            word: "deviam",
            startAt: 6.02,
            endAt: 6.46,
          },
          {
            word: "parar",
            startAt: 6.46,
            endAt: 6.78,
          },
          {
            word: "para",
            startAt: 6.78,
            endAt: 7.04,
          },
          {
            word: "os",
            startAt: 7.04,
            endAt: 7.22,
          },
          {
            word: "pedestres",
            startAt: 7.22,
            endAt: 7.82,
          },
          {
            word: "atravessarem",
            startAt: 7.82,
            endAt: 8.58,
          },
          {
            word: "em",
            startAt: 8.58,
            endAt: 8.7,
          },
          {
            word: "segurança.",
            startAt: 8.7,
            endAt: 9.1,
          },
          {
            word: "Eles",
            startAt: 9.56,
            endAt: 9.92,
          },
          {
            word: "atravessaram",
            startAt: 9.92,
            endAt: 10.6,
          },
          {
            word: "a",
            startAt: 10.6,
            endAt: 10.74,
          },
          {
            word: "rua",
            startAt: 10.74,
            endAt: 10.96,
          },
          {
            word: "com",
            startAt: 10.96,
            endAt: 11.16,
          },
          {
            word: "cuidado.",
            startAt: 11.16,
            endAt: 11.64,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'No caminho, encontraram uma ciclovia. Pedro explicou: "É aqui que as bicicletas devem andar. Precisamos ficar fora da ciclovia para não atrapalhar os ciclistas."',
      image: "/story/transito/images/6.png",
      audio: {
        content: "/story/transito/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "No",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "caminho,",
            startAt: 0.32,
            endAt: 0.72,
          },
          {
            word: "encontraram",
            startAt: 0.94,
            endAt: 1.52,
          },
          {
            word: "uma",
            startAt: 1.52,
            endAt: 1.66,
          },
          {
            word: "ciclovia.",
            startAt: 1.66,
            endAt: 2.28,
          },
          {
            word: "Pedro",
            startAt: 2.52,
            endAt: 2.88,
          },
          {
            word: "explicou,",
            startAt: 2.88,
            endAt: 3.42,
          },
          {
            word: "é",
            startAt: 3.56,
            endAt: 3.76,
          },
          {
            word: "aqui",
            startAt: 3.76,
            endAt: 4,
          },
          {
            word: "que",
            startAt: 4,
            endAt: 4.16,
          },
          {
            word: "as",
            startAt: 4.16,
            endAt: 4.3,
          },
          {
            word: "bicicletas",
            startAt: 4.3,
            endAt: 5.02,
          },
          {
            word: "devem",
            startAt: 5.02,
            endAt: 5.36,
          },
          {
            word: "andar.",
            startAt: 5.36,
            endAt: 5.68,
          },
          {
            word: "Precisamos",
            startAt: 5.98,
            endAt: 6.58,
          },
          {
            word: "ficar",
            startAt: 6.58,
            endAt: 6.88,
          },
          {
            word: "fora",
            startAt: 6.88,
            endAt: 7.24,
          },
          {
            word: "da",
            startAt: 7.24,
            endAt: 7.4,
          },
          {
            word: "ciclovia",
            startAt: 7.4,
            endAt: 7.98,
          },
          {
            word: "para",
            startAt: 7.98,
            endAt: 8.22,
          },
          {
            word: "não",
            startAt: 8.22,
            endAt: 8.44,
          },
          {
            word: "atrapalhar",
            startAt: 8.44,
            endAt: 9.02,
          },
          {
            word: "os",
            startAt: 9.02,
            endAt: 9.16,
          },
          {
            word: "ciclistas.",
            startAt: 9.16,
            endAt: 9.76,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'Chegando perto de um cruzamento movimentado, Ana apontou para um guarda de trânsito. "Ele nos ajuda a atravessar em segurança, basta seguir suas instruções", disse ela.',
      image: "/story/transito/images/7.png",
      audio: {
        content: "/story/transito/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Chegando",
            startAt: 0,
            endAt: 0.64,
          },
          {
            word: "perto",
            startAt: 0.64,
            endAt: 0.98,
          },
          {
            word: "de",
            startAt: 0.98,
            endAt: 1.16,
          },
          {
            word: "um",
            startAt: 1.16,
            endAt: 1.26,
          },
          {
            word: "cruzamento",
            startAt: 1.26,
            endAt: 1.78,
          },
          {
            word: "movimentado,",
            startAt: 1.78,
            endAt: 2.64,
          },
          {
            word: "Ana",
            startAt: 2.92,
            endAt: 3.08,
          },
          {
            word: "apontou",
            startAt: 3.08,
            endAt: 3.58,
          },
          {
            word: "para",
            startAt: 3.58,
            endAt: 3.76,
          },
          {
            word: "um",
            startAt: 3.76,
            endAt: 3.88,
          },
          {
            word: "guarda",
            startAt: 3.88,
            endAt: 4.24,
          },
          {
            word: "de",
            startAt: 4.24,
            endAt: 4.34,
          },
          {
            word: "trânsito.",
            startAt: 4.34,
            endAt: 4.88,
          },
          {
            word: "Ele",
            startAt: 5.04,
            endAt: 5.38,
          },
          {
            word: "nos",
            startAt: 5.38,
            endAt: 5.58,
          },
          {
            word: "ajuda",
            startAt: 5.58,
            endAt: 6,
          },
          {
            word: "a",
            startAt: 6,
            endAt: 6.1,
          },
          {
            word: "atravessar",
            startAt: 6.1,
            endAt: 6.66,
          },
          {
            word: "em",
            startAt: 6.66,
            endAt: 6.76,
          },
          {
            word: "segurança,",
            startAt: 6.76,
            endAt: 7.32,
          },
          {
            word: "basta",
            startAt: 7.5,
            endAt: 7.78,
          },
          {
            word: "seguir",
            startAt: 7.78,
            endAt: 8.14,
          },
          {
            word: "suas",
            startAt: 8.14,
            endAt: 8.5,
          },
          {
            word: "instruções,",
            startAt: 8.5,
            endAt: 9.18,
          },
          {
            word: "disse",
            startAt: 9.32,
            endAt: 9.62,
          },
          {
            word: "ela.",
            startAt: 9.62,
            endAt: 9.94,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Depois, viram um sinal de "Escola". A professora Carla tinha dito que perto das escolas, os carros devem dirigir devagar e ter cuidado extra com as crianças.',
      image: "/story/transito/images/8.jpg",
      audio: {
        content: "/story/transito/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois,",
            startAt: 0,
            endAt: 0.66,
          },
          {
            word: "viram",
            startAt: 0.88,
            endAt: 1.1,
          },
          {
            word: "um",
            startAt: 1.1,
            endAt: 1.2,
          },
          {
            word: "sinal",
            startAt: 1.2,
            endAt: 1.5,
          },
          {
            word: "de",
            startAt: 1.5,
            endAt: 1.64,
          },
          {
            word: "escola.",
            startAt: 1.64,
            endAt: 2.14,
          },
          {
            word: "A",
            startAt: 2.36,
            endAt: 2.6,
          },
          {
            word: "professora",
            startAt: 2.6,
            endAt: 3.1,
          },
          {
            word: "Carla",
            startAt: 3.1,
            endAt: 3.44,
          },
          {
            word: "tinha",
            startAt: 3.44,
            endAt: 3.72,
          },
          {
            word: "dito",
            startAt: 3.72,
            endAt: 4.08,
          },
          {
            word: "que",
            startAt: 4.08,
            endAt: 4.24,
          },
          {
            word: "perto",
            startAt: 4.24,
            endAt: 4.52,
          },
          {
            word: "das",
            startAt: 4.52,
            endAt: 4.76,
          },
          {
            word: "escolas,",
            startAt: 4.76,
            endAt: 5.32,
          },
          {
            word: "os",
            startAt: 5.48,
            endAt: 5.72,
          },
          {
            word: "carros",
            startAt: 5.72,
            endAt: 6.08,
          },
          {
            word: "devem",
            startAt: 6.08,
            endAt: 6.4,
          },
          {
            word: "dirigir",
            startAt: 6.4,
            endAt: 6.82,
          },
          {
            word: "devagar",
            startAt: 6.82,
            endAt: 7.2,
          },
          {
            word: "e",
            startAt: 7.2,
            endAt: 7.38,
          },
          {
            word: "ter",
            startAt: 7.38,
            endAt: 7.52,
          },
          {
            word: "cuidado",
            startAt: 7.52,
            endAt: 8,
          },
          {
            word: "extra",
            startAt: 8,
            endAt: 8.4,
          },
          {
            word: "com",
            startAt: 8.4,
            endAt: 8.58,
          },
          {
            word: "as",
            startAt: 8.58,
            endAt: 8.72,
          },
          {
            word: "crianças.",
            startAt: 8.72,
            endAt: 9.2,
          },
        ],
      },
    },
    {
      page: 9,
      text: "Pedro e Ana também aprenderam que quando estiverem andando à noite ou em dias nublados, é importante usar roupas claras ou refletivas para serem vistos pelos motoristas, e nunca entrar em carro de estranhos ou falar com motoristas que não conhece.",
      image: "/story/transito/images/9.jpeg",
      audio: {
        content: "/story/transito/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Pedro",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "e",
            startAt: 0.48,
            endAt: 0.66,
          },
          {
            word: "Ana",
            startAt: 0.66,
            endAt: 0.88,
          },
          {
            word: "também",
            startAt: 0.88,
            endAt: 1.26,
          },
          {
            word: "aprenderam",
            startAt: 1.26,
            endAt: 1.86,
          },
          {
            word: "que",
            startAt: 1.86,
            endAt: 2.02,
          },
          {
            word: "quando",
            startAt: 2.02,
            endAt: 2.26,
          },
          {
            word: "estiverem",
            startAt: 2.26,
            endAt: 2.8,
          },
          {
            word: "andando",
            startAt: 2.8,
            endAt: 3.22,
          },
          {
            word: "à",
            startAt: 3.22,
            endAt: 3.32,
          },
          {
            word: "noite",
            startAt: 3.32,
            endAt: 3.62,
          },
          {
            word: "ou",
            startAt: 3.62,
            endAt: 3.84,
          },
          {
            word: "em",
            startAt: 3.84,
            endAt: 4.04,
          },
          {
            word: "dias",
            startAt: 4.04,
            endAt: 4.26,
          },
          {
            word: "nublados,",
            startAt: 4.26,
            endAt: 4.86,
          },
          {
            word: "é",
            startAt: 5.04,
            endAt: 5.22,
          },
          {
            word: "importante",
            startAt: 5.22,
            endAt: 5.68,
          },
          {
            word: "usar",
            startAt: 5.68,
            endAt: 6.04,
          },
          {
            word: "roupas",
            startAt: 6.04,
            endAt: 6.5,
          },
          {
            word: "claras",
            startAt: 6.5,
            endAt: 6.96,
          },
          {
            word: "ou",
            startAt: 6.96,
            endAt: 7.08,
          },
          {
            word: "refletivas",
            startAt: 7.08,
            endAt: 7.72,
          },
          {
            word: "para",
            startAt: 7.72,
            endAt: 7.98,
          },
          {
            word: "serem",
            startAt: 7.98,
            endAt: 8.28,
          },
          {
            word: "vistos",
            startAt: 8.28,
            endAt: 8.74,
          },
          {
            word: "pelos",
            startAt: 8.74,
            endAt: 8.98,
          },
          {
            word: "motoristas,",
            startAt: 8.98,
            endAt: 9.68,
          },
          {
            word: "e",
            startAt: 9.84,
            endAt: 10.16,
          },
          {
            word: "nunca",
            startAt: 10.16,
            endAt: 10.44,
          },
          {
            word: "entrar",
            startAt: 10.44,
            endAt: 10.72,
          },
          {
            word: "em",
            startAt: 10.72,
            endAt: 10.88,
          },
          {
            word: "carro",
            startAt: 10.88,
            endAt: 11.16,
          },
          {
            word: "de",
            startAt: 11.16,
            endAt: 11.34,
          },
          {
            word: "estranhos",
            startAt: 11.34,
            endAt: 11.88,
          },
          {
            word: "ou",
            startAt: 11.88,
            endAt: 12.1,
          },
          {
            word: "falar",
            startAt: 12.1,
            endAt: 12.42,
          },
          {
            word: "com",
            startAt: 12.42,
            endAt: 12.6,
          },
          {
            word: "motoristas",
            startAt: 12.6,
            endAt: 13.22,
          },
          {
            word: "que",
            startAt: 13.22,
            endAt: 13.4,
          },
          {
            word: "não",
            startAt: 13.4,
            endAt: 13.56,
          },
          {
            word: "conhece.",
            startAt: 13.56,
            endAt: 14.16,
          },
        ],
      },
    },
    {
      page: 10,
      text: "Finalmente voltaram para casa e contaram aos pais tudo o que aprenderam. Os pais ficaram orgulhosos e felizes por Pedro e Ana estarem mais conscientes sobre a segurança no trânsito.",
      image: "/story/transito/images/10.jpg",
      audio: {
        content: "/story/transito/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Finalmente",
            startAt: 0,
            endAt: 0.86,
          },
          {
            word: "voltaram",
            startAt: 0.86,
            endAt: 1.32,
          },
          {
            word: "para",
            startAt: 1.32,
            endAt: 1.5,
          },
          {
            word: "casa",
            startAt: 1.5,
            endAt: 1.92,
          },
          {
            word: "e",
            startAt: 1.92,
            endAt: 2.08,
          },
          {
            word: "contaram",
            startAt: 2.08,
            endAt: 2.48,
          },
          {
            word: "aos",
            startAt: 2.48,
            endAt: 2.7,
          },
          {
            word: "pais",
            startAt: 2.7,
            endAt: 3,
          },
          {
            word: "tudo",
            startAt: 3,
            endAt: 3.28,
          },
          {
            word: "o",
            startAt: 3.28,
            endAt: 3.4,
          },
          {
            word: "que",
            startAt: 3.4,
            endAt: 3.44,
          },
          {
            word: "aprenderam.",
            startAt: 3.44,
            endAt: 4.02,
          },
          {
            word: "Os",
            startAt: 4.2,
            endAt: 4.48,
          },
          {
            word: "pais",
            startAt: 4.48,
            endAt: 4.76,
          },
          {
            word: "ficaram",
            startAt: 4.76,
            endAt: 5.2,
          },
          {
            word: "orgulhosos",
            startAt: 5.2,
            endAt: 5.86,
          },
          {
            word: "e",
            startAt: 5.86,
            endAt: 5.96,
          },
          {
            word: "felizes",
            startAt: 5.96,
            endAt: 6.36,
          },
          {
            word: "por",
            startAt: 6.36,
            endAt: 6.62,
          },
          {
            word: "Pedro",
            startAt: 6.62,
            endAt: 6.98,
          },
          {
            word: "e",
            startAt: 6.98,
            endAt: 7.2,
          },
          {
            word: "Ana",
            startAt: 7.2,
            endAt: 7.44,
          },
          {
            word: "estarem",
            startAt: 7.44,
            endAt: 7.8,
          },
          {
            word: "mais",
            startAt: 7.8,
            endAt: 8.04,
          },
          {
            word: "conscientes",
            startAt: 8.04,
            endAt: 8.7,
          },
          {
            word: "sobre",
            startAt: 8.7,
            endAt: 8.9,
          },
          {
            word: "a",
            startAt: 8.9,
            endAt: 9,
          },
          {
            word: "segurança",
            startAt: 9,
            endAt: 9.48,
          },
          {
            word: "no",
            startAt: 9.48,
            endAt: 9.68,
          },
          {
            word: "trânsito.",
            startAt: 9.68,
            endAt: 10.18,
          },
        ],
      },
    },
    {
      page: 11,
      text: "Desde aquele dia, Pedro e Ana sempre seguiram as regras de trânsito e ensinaram seus amigos sobre a importância de serem cuidadosos e atentos ao atravessar as ruas. Esta história foi criada para ajudar você a entender um pouco sobre segurança no trânsito para se manterem seguras!.",
      image: "/story/transito/images/11.jpeg",
      audio: {
        content: "/story/transito/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Desde",
            startAt: 0,
            endAt: 0.52,
          },
          {
            word: "aquele",
            startAt: 0.52,
            endAt: 0.82,
          },
          {
            word: "dia,",
            startAt: 0.82,
            endAt: 1.18,
          },
          {
            word: "Pedro",
            startAt: 1.38,
            endAt: 1.62,
          },
          {
            word: "e",
            startAt: 1.62,
            endAt: 1.82,
          },
          {
            word: "Ana",
            startAt: 1.82,
            endAt: 2.02,
          },
          {
            word: "sempre",
            startAt: 2.02,
            endAt: 2.42,
          },
          {
            word: "seguiram",
            startAt: 2.42,
            endAt: 2.94,
          },
          {
            word: "as",
            startAt: 2.94,
            endAt: 3.12,
          },
          {
            word: "regras",
            startAt: 3.12,
            endAt: 3.52,
          },
          {
            word: "de",
            startAt: 3.52,
            endAt: 3.62,
          },
          {
            word: "trânsito",
            startAt: 3.62,
            endAt: 4.14,
          },
          {
            word: "e",
            startAt: 4.14,
            endAt: 4.34,
          },
          {
            word: "ensinaram",
            startAt: 4.34,
            endAt: 4.86,
          },
          {
            word: "seus",
            startAt: 4.86,
            endAt: 5.06,
          },
          {
            word: "amigos",
            startAt: 5.06,
            endAt: 5.52,
          },
          {
            word: "sobre",
            startAt: 5.52,
            endAt: 5.82,
          },
          {
            word: "a",
            startAt: 5.82,
            endAt: 5.92,
          },
          {
            word: "importância",
            startAt: 5.92,
            endAt: 6.5,
          },
          {
            word: "de",
            startAt: 6.5,
            endAt: 6.66,
          },
          {
            word: "serem",
            startAt: 6.66,
            endAt: 6.9,
          },
          {
            word: "cuidadosos",
            startAt: 6.9,
            endAt: 7.66,
          },
          {
            word: "e",
            startAt: 7.66,
            endAt: 7.78,
          },
          {
            word: "atentos",
            startAt: 7.78,
            endAt: 8.26,
          },
          {
            word: "ao",
            startAt: 8.26,
            endAt: 8.42,
          },
          {
            word: "atravessar",
            startAt: 8.42,
            endAt: 9,
          },
          {
            word: "as",
            startAt: 9,
            endAt: 9.14,
          },
          {
            word: "ruas.",
            startAt: 9.14,
            endAt: 9.54,
          },
          {
            word: "Esta",
            startAt: 9.76,
            endAt: 10.12,
          },
          {
            word: "história",
            startAt: 10.12,
            endAt: 10.5,
          },
          {
            word: "foi",
            startAt: 10.5,
            endAt: 10.72,
          },
          {
            word: "criada",
            startAt: 10.72,
            endAt: 11.16,
          },
          {
            word: "para",
            startAt: 11.16,
            endAt: 11.36,
          },
          {
            word: "ajudar",
            startAt: 11.36,
            endAt: 11.64,
          },
          {
            word: "você",
            startAt: 11.64,
            endAt: 12.1,
          },
          {
            word: "a",
            startAt: 12.1,
            endAt: 12.26,
          },
          {
            word: "entender",
            startAt: 12.26,
            endAt: 12.54,
          },
          {
            word: "um",
            startAt: 12.54,
            endAt: 12.76,
          },
          {
            word: "pouco",
            startAt: 12.76,
            endAt: 13.06,
          },
          {
            word: "sobre",
            startAt: 13.06,
            endAt: 13.36,
          },
          {
            word: "segurança",
            startAt: 13.36,
            endAt: 13.86,
          },
          {
            word: "no",
            startAt: 13.86,
            endAt: 14.1,
          },
          {
            word: "trânsito",
            startAt: 14.1,
            endAt: 14.54,
          },
          {
            word: "para",
            startAt: 14.54,
            endAt: 14.76,
          },
          {
            word: "se",
            startAt: 14.76,
            endAt: 14.94,
          },
          {
            word: "manterem",
            startAt: 14.94,
            endAt: 15.3,
          },
          {
            word: "seguras.",
            startAt: 15.3,
            endAt: 15.84,
          },
        ],
      },
    },
  ],
};

export default transitoStory;
