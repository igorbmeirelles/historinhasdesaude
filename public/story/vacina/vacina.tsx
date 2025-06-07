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

const vacinaStory: Story = {
  title: "Nina e a Magia das Vacinas",
  slug: "nina-vacinas",
  pages: [
    {
      page: 1,
      text: "Bem-vindo ao conto de Nina e a magia das vacinas. Clique em avançar para começar a aventura.",
      image: "/story/vacina/images/capa.jpg",
      audio: {
        content: "/story/vacina/audios/0.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Bem",
            startAt: 0,
            endAt: 0.46,
          },
          {
            word: "-vindo",
            startAt: 0.46,
            endAt: 0.74,
          },
          {
            word: "ao",
            startAt: 0.74,
            endAt: 0.92,
          },
          {
            word: "conto",
            startAt: 0.92,
            endAt: 1.2,
          },
          {
            word: "de",
            startAt: 1.2,
            endAt: 1.28,
          },
          {
            word: "Nina",
            startAt: 1.28,
            endAt: 1.56,
          },
          {
            word: "e",
            startAt: 1.56,
            endAt: 1.74,
          },
          {
            word: "a",
            startAt: 1.74,
            endAt: 1.86,
          },
          {
            word: "magia",
            startAt: 1.86,
            endAt: 2.2,
          },
          {
            word: "das",
            startAt: 2.2,
            endAt: 2.36,
          },
          {
            word: "vacinas.",
            startAt: 2.36,
            endAt: 2.9,
          },
          {
            word: "Clique",
            startAt: 3.18,
            endAt: 3.52,
          },
          {
            word: "em",
            startAt: 3.52,
            endAt: 3.64,
          },
          {
            word: "avançar",
            startAt: 3.64,
            endAt: 4.18,
          },
          {
            word: "para",
            startAt: 4.18,
            endAt: 4.36,
          },
          {
            word: "começar",
            startAt: 4.36,
            endAt: 4.8,
          },
          {
            word: "a",
            startAt: 4.8,
            endAt: 4.98,
          },
          {
            word: "aventura.",
            startAt: 4.98,
            endAt: 5.42,
          },
        ],
      },
    },
    {
      page: 2,
      text: "Era uma vez, em um vilarejo encantado, uma menina chamada Nina. Ela adorava brincar no campo e explorar a floresta com seu cachorro Pipoca. Um dia, Nina encontrou uma carta misteriosa no jardim.",
      image: "/story/vacina/images/2.png",
      audio: {
        content: "/story/vacina/audios/1.mp3",
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
            endAt: 0.94,
          },
          {
            word: "em",
            startAt: 1.1,
            endAt: 1.26,
          },
          {
            word: "um",
            startAt: 1.26,
            endAt: 1.38,
          },
          {
            word: "vilarejo",
            startAt: 1.38,
            endAt: 1.82,
          },
          {
            word: "encantado,",
            startAt: 1.82,
            endAt: 2.4,
          },
          {
            word: "uma",
            startAt: 2.6,
            endAt: 2.8,
          },
          {
            word: "menina",
            startAt: 2.8,
            endAt: 3.14,
          },
          {
            word: "chamada",
            startAt: 3.14,
            endAt: 3.58,
          },
          {
            word: "Nina.",
            startAt: 3.58,
            endAt: 3.84,
          },
          {
            word: "Ela",
            startAt: 4.38,
            endAt: 5.06,
          },
          {
            word: "adorava",
            startAt: 5.06,
            endAt: 5.44,
          },
          {
            word: "brincar",
            startAt: 5.44,
            endAt: 5.92,
          },
          {
            word: "no",
            startAt: 5.92,
            endAt: 6.06,
          },
          {
            word: "campo",
            startAt: 6.06,
            endAt: 6.38,
          },
          {
            word: "e",
            startAt: 6.38,
            endAt: 6.5,
          },
          {
            word: "explorar",
            startAt: 6.5,
            endAt: 6.9,
          },
          {
            word: "a",
            startAt: 6.9,
            endAt: 6.98,
          },
          {
            word: "floresta",
            startAt: 6.98,
            endAt: 7.44,
          },
          {
            word: "com",
            startAt: 7.44,
            endAt: 7.6,
          },
          {
            word: "seu",
            startAt: 7.6,
            endAt: 7.8,
          },
          {
            word: "cachorro",
            startAt: 7.8,
            endAt: 8.26,
          },
          {
            word: "Pipoca.",
            startAt: 8.26,
            endAt: 8.78,
          },
          {
            word: "Um",
            startAt: 9.28,
            endAt: 9.84,
          },
          {
            word: "dia,",
            startAt: 9.84,
            endAt: 10.14,
          },
          {
            word: "Nina",
            startAt: 10.36,
            endAt: 10.6,
          },
          {
            word: "encontrou",
            startAt: 10.6,
            endAt: 11.06,
          },
          {
            word: "uma",
            startAt: 11.06,
            endAt: 11.24,
          },
          {
            word: "carta",
            startAt: 11.24,
            endAt: 11.58,
          },
          {
            word: "misteriosa",
            startAt: 11.58,
            endAt: 12.28,
          },
          {
            word: "no",
            startAt: 12.28,
            endAt: 12.44,
          },
          {
            word: "jardim.",
            startAt: 12.44,
            endAt: 12.86,
          },
        ],
      },
    },
    {
      page: 3,
      text: "A carta era do grande professor Coruja, que vivia no alto da Montanha da Sabedoria. Ele convidava Nina para aprender sobre a magia das vacinas e como elas protegiam todos contra doenças.",
      image: "/story/vacina/images/3.png",
      audio: {
        content: "/story/vacina/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "A",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "carta",
            startAt: 0.38,
            endAt: 0.68,
          },
          {
            word: "era",
            startAt: 0.68,
            endAt: 0.88,
          },
          {
            word: "do",
            startAt: 0.88,
            endAt: 1.02,
          },
          {
            word: "grande",
            startAt: 1.02,
            endAt: 1.32,
          },
          {
            word: "professor",
            startAt: 1.32,
            endAt: 1.88,
          },
          {
            word: "Coruja,",
            startAt: 1.88,
            endAt: 2.38,
          },
          {
            word: "que",
            startAt: 2.54,
            endAt: 2.74,
          },
          {
            word: "vivia",
            startAt: 2.74,
            endAt: 3.12,
          },
          {
            word: "no",
            startAt: 3.12,
            endAt: 3.28,
          },
          {
            word: "alto",
            startAt: 3.28,
            endAt: 3.52,
          },
          {
            word: "da",
            startAt: 3.52,
            endAt: 3.66,
          },
          {
            word: "Montanha",
            startAt: 3.66,
            endAt: 4.1,
          },
          {
            word: "da",
            startAt: 4.1,
            endAt: 4.26,
          },
          {
            word: "Sabedoria.",
            startAt: 4.26,
            endAt: 4.8,
          },
          {
            word: "Ele",
            startAt: 5.36,
            endAt: 5.96,
          },
          {
            word: "convidava",
            startAt: 5.96,
            endAt: 6.48,
          },
          {
            word: "Nina",
            startAt: 6.48,
            endAt: 6.72,
          },
          {
            word: "para",
            startAt: 6.72,
            endAt: 6.98,
          },
          {
            word: "aprender",
            startAt: 6.98,
            endAt: 7.3,
          },
          {
            word: "sobre",
            startAt: 7.3,
            endAt: 7.66,
          },
          {
            word: "a",
            startAt: 7.66,
            endAt: 7.76,
          },
          {
            word: "magia",
            startAt: 7.76,
            endAt: 8.12,
          },
          {
            word: "das",
            startAt: 8.12,
            endAt: 8.28,
          },
          {
            word: "vacinas",
            startAt: 8.28,
            endAt: 8.76,
          },
          {
            word: "e",
            startAt: 8.76,
            endAt: 8.9,
          },
          {
            word: "como",
            startAt: 8.9,
            endAt: 9.1,
          },
          {
            word: "elas",
            startAt: 9.1,
            endAt: 9.3,
          },
          {
            word: "protegiam",
            startAt: 9.3,
            endAt: 9.84,
          },
          {
            word: "todos",
            startAt: 9.84,
            endAt: 10.26,
          },
          {
            word: "contra",
            startAt: 10.26,
            endAt: 10.64,
          },
          {
            word: "doenças.",
            startAt: 10.64,
            endAt: 11.18,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'Curiosa e corajosa, Nina pegou Pipoca e subiu à montanha. No caminho, encontrou amigos que tinham histórias para contar sobre vacinas. A primeira foi a Abelhinha Mel, que explicou: "Vacinas nos protegem de doenças como a gripe."',
      image: "/story/vacina/images/4.png",
      audio: {
        content: "/story/vacina/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Curiosa",
            startAt: 0,
            endAt: 0.7,
          },
          {
            word: "e",
            startAt: 0.7,
            endAt: 0.82,
          },
          {
            word: "corajosa,",
            startAt: 0.82,
            endAt: 1.44,
          },
          {
            word: "Nina",
            startAt: 1.66,
            endAt: 1.84,
          },
          {
            word: "pegou",
            startAt: 1.84,
            endAt: 2.18,
          },
          {
            word: "pipoca",
            startAt: 2.18,
            endAt: 2.64,
          },
          {
            word: "e",
            startAt: 2.64,
            endAt: 2.76,
          },
          {
            word: "subiu",
            startAt: 2.76,
            endAt: 3.1,
          },
          {
            word: "à",
            startAt: 3.1,
            endAt: 3.2,
          },
          {
            word: "montanha.",
            startAt: 3.2,
            endAt: 3.72,
          },
          {
            word: "No",
            startAt: 4.22,
            endAt: 4.8,
          },
          {
            word: "caminho,",
            startAt: 4.8,
            endAt: 5.2,
          },
          {
            word: "encontrou",
            startAt: 5.46,
            endAt: 5.92,
          },
          {
            word: "amigos",
            startAt: 5.92,
            endAt: 6.26,
          },
          {
            word: "que",
            startAt: 6.26,
            endAt: 6.48,
          },
          {
            word: "tinham",
            startAt: 6.48,
            endAt: 6.7,
          },
          {
            word: "histórias",
            startAt: 6.7,
            endAt: 7.2,
          },
          {
            word: "para",
            startAt: 7.2,
            endAt: 7.38,
          },
          {
            word: "contar",
            startAt: 7.38,
            endAt: 7.7,
          },
          {
            word: "sobre",
            startAt: 7.7,
            endAt: 8.02,
          },
          {
            word: "vacinas.",
            startAt: 8.02,
            endAt: 8.58,
          },
          {
            word: "A",
            startAt: 9.379999999999999,
            endAt: 9.7,
          },
          {
            word: "primeira",
            startAt: 9.7,
            endAt: 10.02,
          },
          {
            word: "foi",
            startAt: 10.02,
            endAt: 10.28,
          },
          {
            word: "a",
            startAt: 10.28,
            endAt: 10.4,
          },
          {
            word: "Abelhinha",
            startAt: 10.4,
            endAt: 10.76,
          },
          {
            word: "Mel,",
            startAt: 10.76,
            endAt: 11,
          },
          {
            word: "que",
            startAt: 11.24,
            endAt: 11.46,
          },
          {
            word: "explicou,",
            startAt: 11.46,
            endAt: 11.96,
          },
          {
            word: "vacinas",
            startAt: 12.16,
            endAt: 12.86,
          },
          {
            word: "nos",
            startAt: 12.86,
            endAt: 13.02,
          },
          {
            word: "protegem",
            startAt: 13.02,
            endAt: 13.54,
          },
          {
            word: "de",
            startAt: 13.54,
            endAt: 13.66,
          },
          {
            word: "doenças",
            startAt: 13.66,
            endAt: 14.18,
          },
          {
            word: "como",
            startAt: 14.18,
            endAt: 14.4,
          },
          {
            word: "a",
            startAt: 14.4,
            endAt: 14.56,
          },
          {
            word: "gripe.",
            startAt: 14.56,
            endAt: 14.86,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Mais adiante, encontrou o coelho Saltitão, que disse: "A vacina me protegeu contra a caxumba. Agora posso pular livremente!". Nina ficou feliz em saber como as vacinas ajudavam os amigos.',
      image: "/story/vacina/images/5.jpg",
      audio: {
        content: "/story/vacina/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Mais",
            startAt: 0,
            endAt: 0.5,
          },
          {
            word: "adiante,",
            startAt: 0.5,
            endAt: 1.08,
          },
          {
            word: "encontrou",
            startAt: 1.3,
            endAt: 1.86,
          },
          {
            word: "o",
            startAt: 1.86,
            endAt: 2.02,
          },
          {
            word: "coelho",
            startAt: 2.02,
            endAt: 2.36,
          },
          {
            word: "saltitão,",
            startAt: 2.36,
            endAt: 2.84,
          },
          {
            word: "que",
            startAt: 3.02,
            endAt: 3.26,
          },
          {
            word: "disse,",
            startAt: 3.26,
            endAt: 3.62,
          },
          {
            word: "a",
            startAt: 3.78,
            endAt: 3.96,
          },
          {
            word: "vacina",
            startAt: 3.96,
            endAt: 4.36,
          },
          {
            word: "me",
            startAt: 4.36,
            endAt: 4.52,
          },
          {
            word: "protegeu",
            startAt: 4.52,
            endAt: 5.02,
          },
          {
            word: "contra",
            startAt: 5.02,
            endAt: 5.34,
          },
          {
            word: "a",
            startAt: 5.34,
            endAt: 5.46,
          },
          {
            word: "cachumba.",
            startAt: 5.46,
            endAt: 5.88,
          },
          {
            word: "Agora",
            startAt: 6.5,
            endAt: 7.2,
          },
          {
            word: "posso",
            startAt: 7.2,
            endAt: 7.6,
          },
          {
            word: "pular",
            startAt: 7.6,
            endAt: 7.98,
          },
          {
            word: "livremente.",
            startAt: 7.98,
            endAt: 8.72,
          },
          {
            word: "Nina",
            startAt: 9.28,
            endAt: 9.94,
          },
          {
            word: "ficou",
            startAt: 9.94,
            endAt: 10.26,
          },
          {
            word: "feliz",
            startAt: 10.26,
            endAt: 10.62,
          },
          {
            word: "em",
            startAt: 10.62,
            endAt: 10.82,
          },
          {
            word: "saber",
            startAt: 10.82,
            endAt: 11.1,
          },
          {
            word: "como",
            startAt: 11.1,
            endAt: 11.36,
          },
          {
            word: "as",
            startAt: 11.36,
            endAt: 11.52,
          },
          {
            word: "vacinas",
            startAt: 11.52,
            endAt: 11.98,
          },
          {
            word: "ajudavam",
            startAt: 11.98,
            endAt: 12.54,
          },
          {
            word: "os",
            startAt: 12.54,
            endAt: 12.7,
          },
          {
            word: "amigos.",
            startAt: 12.7,
            endAt: 13.04,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Ao chegar ao topo da montanha, Nina foi recebida pelo grande professor Coruja. "As vacinas são como escudos mágicos. Elas ensinam nosso corpo a lutar contra os vilões das doenças", explicou Coruja.',
      image: "/story/vacina/images/6.jpg",
      audio: {
        content: "/story/vacina/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Ao",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "chegar",
            startAt: 0.38,
            endAt: 0.7,
          },
          {
            word: "ao",
            startAt: 0.7,
            endAt: 0.88,
          },
          {
            word: "topo",
            startAt: 0.88,
            endAt: 1.2,
          },
          {
            word: "da",
            startAt: 1.2,
            endAt: 1.26,
          },
          {
            word: "montanha,",
            startAt: 1.26,
            endAt: 1.78,
          },
          {
            word: "Nina",
            startAt: 2.06,
            endAt: 2.24,
          },
          {
            word: "foi",
            startAt: 2.24,
            endAt: 2.46,
          },
          {
            word: "recebida",
            startAt: 2.46,
            endAt: 2.96,
          },
          {
            word: "pelo",
            startAt: 2.96,
            endAt: 3.18,
          },
          {
            word: "grande",
            startAt: 3.18,
            endAt: 3.5,
          },
          {
            word: "professor",
            startAt: 3.5,
            endAt: 4.02,
          },
          {
            word: "Coruja.",
            startAt: 4.02,
            endAt: 4.5,
          },
          {
            word: "As",
            startAt: 4.96,
            endAt: 5.6,
          },
          {
            word: "vacinas",
            startAt: 5.6,
            endAt: 6.1,
          },
          {
            word: "são",
            startAt: 6.1,
            endAt: 6.3,
          },
          {
            word: "como",
            startAt: 6.3,
            endAt: 6.5,
          },
          {
            word: "escudos",
            startAt: 6.5,
            endAt: 6.94,
          },
          {
            word: "mágicos.",
            startAt: 6.94,
            endAt: 7.58,
          },
          {
            word: "Elas",
            startAt: 8.2,
            endAt: 8.84,
          },
          {
            word: "ensinam",
            startAt: 8.84,
            endAt: 9.26,
          },
          {
            word: "nosso",
            startAt: 9.26,
            endAt: 9.5,
          },
          {
            word: "corpo",
            startAt: 9.5,
            endAt: 9.88,
          },
          {
            word: "a",
            startAt: 9.88,
            endAt: 10,
          },
          {
            word: "lutar",
            startAt: 10,
            endAt: 10.28,
          },
          {
            word: "contra",
            startAt: 10.28,
            endAt: 10.62,
          },
          {
            word: "os",
            startAt: 10.62,
            endAt: 10.76,
          },
          {
            word: "vilões",
            startAt: 10.76,
            endAt: 11.16,
          },
          {
            word: "das",
            startAt: 11.16,
            endAt: 11.36,
          },
          {
            word: "doenças,",
            startAt: 11.36,
            endAt: 11.94,
          },
          {
            word: "explicou",
            startAt: 12.12,
            endAt: 12.62,
          },
          {
            word: "Coruja.",
            startAt: 12.62,
            endAt: 13.1,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'O professor Coruja mostrou a Nina uma coleção de frascos coloridos, cada um representando uma vacina diferente. "Esses frascos ajudam a proteger contra doenças como sarampo, poliomielite e rubéola". O professor disse que conhecia seus pais e que eles também tomaram vacinas.',
      image: "/story/vacina/images/7.jpg",
      audio: {
        content: "/story/vacina/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "O",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "professor",
            startAt: 0.32,
            endAt: 0.82,
          },
          {
            word: "Coruja",
            startAt: 0.82,
            endAt: 1.26,
          },
          {
            word: "mostrou",
            startAt: 1.26,
            endAt: 1.68,
          },
          {
            word: "a",
            startAt: 1.68,
            endAt: 1.8,
          },
          {
            word: "Nina",
            startAt: 1.8,
            endAt: 1.98,
          },
          {
            word: "uma",
            startAt: 1.98,
            endAt: 2.2,
          },
          {
            word: "coleção",
            startAt: 2.2,
            endAt: 2.62,
          },
          {
            word: "de",
            startAt: 2.62,
            endAt: 2.78,
          },
          {
            word: "frascos",
            startAt: 2.78,
            endAt: 3.24,
          },
          {
            word: "coloridos,",
            startAt: 3.24,
            endAt: 3.82,
          },
          {
            word: "cada",
            startAt: 4.04,
            endAt: 4.32,
          },
          {
            word: "um",
            startAt: 4.32,
            endAt: 4.5,
          },
          {
            word: "representando",
            startAt: 4.5,
            endAt: 5.24,
          },
          {
            word: "uma",
            startAt: 5.24,
            endAt: 5.4,
          },
          {
            word: "vacina",
            startAt: 5.4,
            endAt: 5.82,
          },
          {
            word: "diferente.",
            startAt: 5.82,
            endAt: 6.38,
          },
          {
            word: "Esses",
            startAt: 6.96,
            endAt: 7.72,
          },
          {
            word: "frascos",
            startAt: 7.72,
            endAt: 8.22,
          },
          {
            word: "ajudam",
            startAt: 8.22,
            endAt: 8.68,
          },
          {
            word: "a",
            startAt: 8.68,
            endAt: 8.78,
          },
          {
            word: "proteger",
            startAt: 8.78,
            endAt: 9.22,
          },
          {
            word: "contra",
            startAt: 9.22,
            endAt: 9.52,
          },
          {
            word: "doenças",
            startAt: 9.52,
            endAt: 10.06,
          },
          {
            word: "como",
            startAt: 10.06,
            endAt: 10.3,
          },
          {
            word: "sarampo,",
            startAt: 10.3,
            endAt: 10.88,
          },
          {
            word: "poliomielite",
            startAt: 11.22,
            endAt: 11.92,
          },
          {
            word: "e",
            startAt: 11.92,
            endAt: 12.06,
          },
          {
            word: "rubeula.",
            startAt: 12.06,
            endAt: 12.48,
          },
          {
            word: "O",
            startAt: 13.159999999999998,
            endAt: 13.56,
          },
          {
            word: "professor",
            startAt: 13.56,
            endAt: 13.98,
          },
          {
            word: "disse",
            startAt: 13.98,
            endAt: 14.46,
          },
          {
            word: "que",
            startAt: 14.46,
            endAt: 14.64,
          },
          {
            word: "conhecia",
            startAt: 14.64,
            endAt: 15.08,
          },
          {
            word: "seus",
            startAt: 15.08,
            endAt: 15.34,
          },
          {
            word: "pais",
            startAt: 15.34,
            endAt: 15.6,
          },
          {
            word: "e",
            startAt: 15.6,
            endAt: 15.76,
          },
          {
            word: "que",
            startAt: 15.76,
            endAt: 15.88,
          },
          {
            word: "eles",
            startAt: 15.88,
            endAt: 16.08,
          },
          {
            word: "também",
            startAt: 16.08,
            endAt: 16.36,
          },
          {
            word: "tomaram",
            startAt: 16.36,
            endAt: 16.76,
          },
          {
            word: "vacinas.",
            startAt: 16.76,
            endAt: 17.34,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Nina percebeu que, ao tomar vacinas, ela ajudava não só a si mesma, mas também a proteger sua família e amigos. "Eu quero ser uma heroína protetora das vacinas!", exclamou Nina.',
      image: "/story/vacina/images/8.jpg",
      audio: {
        content: "/story/vacina/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Nina",
            startAt: 0,
            endAt: 0.5,
          },
          {
            word: "percebeu",
            startAt: 0.5,
            endAt: 1.08,
          },
          {
            word: "que,",
            startAt: 1.08,
            endAt: 1.28,
          },
          {
            word: "ao",
            startAt: 1.52,
            endAt: 1.76,
          },
          {
            word: "tomar",
            startAt: 1.76,
            endAt: 2.02,
          },
          {
            word: "vacinas,",
            startAt: 2.02,
            endAt: 2.58,
          },
          {
            word: "ela",
            startAt: 2.82,
            endAt: 3.06,
          },
          {
            word: "ajudava",
            startAt: 3.06,
            endAt: 3.52,
          },
          {
            word: "não",
            startAt: 3.52,
            endAt: 3.68,
          },
          {
            word: "só",
            startAt: 3.68,
            endAt: 3.94,
          },
          {
            word: "a",
            startAt: 3.94,
            endAt: 4.12,
          },
          {
            word: "si",
            startAt: 4.12,
            endAt: 4.24,
          },
          {
            word: "mesma,",
            startAt: 4.24,
            endAt: 4.58,
          },
          {
            word: "mas",
            startAt: 4.78,
            endAt: 5.12,
          },
          {
            word: "também",
            startAt: 5.12,
            endAt: 5.46,
          },
          {
            word: "a",
            startAt: 5.46,
            endAt: 5.64,
          },
          {
            word: "proteger",
            startAt: 5.64,
            endAt: 6.1,
          },
          {
            word: "sua",
            startAt: 6.1,
            endAt: 6.28,
          },
          {
            word: "família",
            startAt: 6.28,
            endAt: 6.72,
          },
          {
            word: "e",
            startAt: 6.72,
            endAt: 6.9,
          },
          {
            word: "amigos.",
            startAt: 6.9,
            endAt: 7.36,
          },
          {
            word: "Eu",
            startAt: 7.920000000000002,
            endAt: 8.48,
          },
          {
            word: "quero",
            startAt: 8.48,
            endAt: 8.78,
          },
          {
            word: "ser",
            startAt: 8.78,
            endAt: 8.98,
          },
          {
            word: "uma",
            startAt: 8.98,
            endAt: 9.14,
          },
          {
            word: "heroína",
            startAt: 9.14,
            endAt: 9.44,
          },
          {
            word: "protetora",
            startAt: 9.44,
            endAt: 10,
          },
          {
            word: "das",
            startAt: 10,
            endAt: 10.18,
          },
          {
            word: "vacinas,",
            startAt: 10.18,
            endAt: 10.74,
          },
          {
            word: "exclamou",
            startAt: 10.94,
            endAt: 11.5,
          },
          {
            word: "Nina.",
            startAt: 11.5,
            endAt: 11.8,
          },
        ],
      },
    },
    {
      page: 9,
      text: "Na volta para casa, Nina contou a todos sobre a importância das vacinas. Seus amigos e familiares decidiram se vacinar também, criando um vilarejo saudável e protegido.",
      image: "/story/vacina/images/9.jpeg",
      audio: {
        content: "/story/vacina/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Na",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "volta",
            startAt: 0.38,
            endAt: 0.74,
          },
          {
            word: "para",
            startAt: 0.74,
            endAt: 0.96,
          },
          {
            word: "casa,",
            startAt: 0.96,
            endAt: 1.36,
          },
          {
            word: "Nina",
            startAt: 1.6,
            endAt: 1.78,
          },
          {
            word: "contou",
            startAt: 1.78,
            endAt: 2.2,
          },
          {
            word: "a",
            startAt: 2.2,
            endAt: 2.32,
          },
          {
            word: "todos",
            startAt: 2.32,
            endAt: 2.62,
          },
          {
            word: "sobre",
            startAt: 2.62,
            endAt: 2.88,
          },
          {
            word: "a",
            startAt: 2.88,
            endAt: 2.98,
          },
          {
            word: "importância",
            startAt: 2.98,
            endAt: 3.54,
          },
          {
            word: "das",
            startAt: 3.54,
            endAt: 3.72,
          },
          {
            word: "vacinas.",
            startAt: 3.72,
            endAt: 4.24,
          },
          {
            word: "Seus",
            startAt: 4.92,
            endAt: 5.64,
          },
          {
            word: "amigos",
            startAt: 5.64,
            endAt: 5.96,
          },
          {
            word: "e",
            startAt: 5.96,
            endAt: 6.14,
          },
          {
            word: "familiares",
            startAt: 6.14,
            endAt: 6.78,
          },
          {
            word: "decidiram",
            startAt: 6.78,
            endAt: 7.3,
          },
          {
            word: "se",
            startAt: 7.3,
            endAt: 7.44,
          },
          {
            word: "vacinar",
            startAt: 7.44,
            endAt: 7.86,
          },
          {
            word: "também,",
            startAt: 7.86,
            endAt: 8.2,
          },
          {
            word: "criando",
            startAt: 8.56,
            endAt: 8.94,
          },
          {
            word: "um",
            startAt: 8.94,
            endAt: 9.08,
          },
          {
            word: "vilarejo",
            startAt: 9.08,
            endAt: 9.62,
          },
          {
            word: "saudável",
            startAt: 9.62,
            endAt: 10.16,
          },
          {
            word: "e",
            startAt: 10.16,
            endAt: 10.3,
          },
          {
            word: "protegido.",
            startAt: 10.3,
            endAt: 10.9,
          },
        ],
      },
    },
    {
      page: 10,
      text: "De volta ao campo, Nina e Pipoca brincaram felizes, sabendo que estavam protegidos pelas vacinas. Ela prometeu sempre lembrar a todos da importância de se vacinar.",
      image: "/story/vacina/images/10.jpg",
      audio: {
        content: "/story/vacina/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "De",
            startAt: 0,
            endAt: 0.4,
          },
          {
            word: "volta",
            startAt: 0.4,
            endAt: 0.74,
          },
          {
            word: "ao",
            startAt: 0.74,
            endAt: 0.88,
          },
          {
            word: "campo,",
            startAt: 0.88,
            endAt: 1.2,
          },
          {
            word: "Nina",
            startAt: 1.54,
            endAt: 1.72,
          },
          {
            word: "e",
            startAt: 1.72,
            endAt: 1.88,
          },
          {
            word: "Pipoca",
            startAt: 1.88,
            endAt: 2.28,
          },
          {
            word: "brincaram",
            startAt: 2.28,
            endAt: 2.7,
          },
          {
            word: "felizes,",
            startAt: 2.7,
            endAt: 3.2,
          },
          {
            word: "sabendo",
            startAt: 3.52,
            endAt: 4.04,
          },
          {
            word: "que",
            startAt: 4.04,
            endAt: 4.2,
          },
          {
            word: "estavam",
            startAt: 4.2,
            endAt: 4.48,
          },
          {
            word: "protegidos",
            startAt: 4.48,
            endAt: 5.14,
          },
          {
            word: "pelas",
            startAt: 5.14,
            endAt: 5.42,
          },
          {
            word: "vacinas.",
            startAt: 5.42,
            endAt: 5.92,
          },
          {
            word: "Ela",
            startAt: 6.48,
            endAt: 7.16,
          },
          {
            word: "prometeu",
            startAt: 7.16,
            endAt: 7.62,
          },
          {
            word: "sempre",
            startAt: 7.62,
            endAt: 8.04,
          },
          {
            word: "lembrar",
            startAt: 8.04,
            endAt: 8.38,
          },
          {
            word: "a",
            startAt: 8.38,
            endAt: 8.58,
          },
          {
            word: "todos",
            startAt: 8.58,
            endAt: 8.86,
          },
          {
            word: "da",
            startAt: 8.86,
            endAt: 9.02,
          },
          {
            word: "importância",
            startAt: 9.02,
            endAt: 9.64,
          },
          {
            word: "de",
            startAt: 9.64,
            endAt: 9.78,
          },
          {
            word: "se",
            startAt: 9.78,
            endAt: 9.94,
          },
          {
            word: "vacinar.",
            startAt: 9.94,
            endAt: 10.44,
          },
        ],
      },
    },
    {
      page: 11,
      text: "E assim, no vilarejo encantado, todos viveram felizes e saudáveis, graças à magia das vacinas e à coragem de Nina. Essa história foi criada para mostrar a você a importância das vacinas e como elas nos protegem e são seguras!.",
      image: "/story/vacina/images/11.jpg",
      audio: {
        content: "/story/vacina/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "E",
            startAt: 0,
            endAt: 0.34,
          },
          {
            word: "assim,",
            startAt: 0.34,
            endAt: 0.68,
          },
          {
            word: "no",
            startAt: 0.92,
            endAt: 1.1,
          },
          {
            word: "vilarejo",
            startAt: 1.1,
            endAt: 1.6,
          },
          {
            word: "encantado,",
            startAt: 1.6,
            endAt: 2.22,
          },
          {
            word: "todos",
            startAt: 2.44,
            endAt: 2.78,
          },
          {
            word: "viveram",
            startAt: 2.78,
            endAt: 3.16,
          },
          {
            word: "felizes",
            startAt: 3.16,
            endAt: 3.6,
          },
          {
            word: "e",
            startAt: 3.6,
            endAt: 3.78,
          },
          {
            word: "saudáveis,",
            startAt: 3.78,
            endAt: 4.32,
          },
          {
            word: "graças",
            startAt: 4.5,
            endAt: 5.08,
          },
          {
            word: "à",
            startAt: 5.08,
            endAt: 5.2,
          },
          {
            word: "magia",
            startAt: 5.2,
            endAt: 5.54,
          },
          {
            word: "das",
            startAt: 5.54,
            endAt: 5.72,
          },
          {
            word: "vacinas",
            startAt: 5.72,
            endAt: 6.22,
          },
          {
            word: "e",
            startAt: 6.22,
            endAt: 6.38,
          },
          {
            word: "à",
            startAt: 6.38,
            endAt: 6.48,
          },
          {
            word: "coragem",
            startAt: 6.48,
            endAt: 6.9,
          },
          {
            word: "de",
            startAt: 6.9,
            endAt: 7.06,
          },
          {
            word: "Nina.",
            startAt: 7.06,
            endAt: 7.32,
          },
          {
            word: "Essa",
            startAt: 8.02,
            endAt: 8.58,
          },
          {
            word: "história",
            startAt: 8.58,
            endAt: 8.94,
          },
          {
            word: "foi",
            startAt: 8.94,
            endAt: 9.14,
          },
          {
            word: "criada",
            startAt: 9.14,
            endAt: 9.62,
          },
          {
            word: "para",
            startAt: 9.62,
            endAt: 9.82,
          },
          {
            word: "mostrar",
            startAt: 9.82,
            endAt: 10.16,
          },
          {
            word: "a",
            startAt: 10.16,
            endAt: 10.32,
          },
          {
            word: "você",
            startAt: 10.32,
            endAt: 10.56,
          },
          {
            word: "a",
            startAt: 10.56,
            endAt: 10.72,
          },
          {
            word: "importância",
            startAt: 10.72,
            endAt: 11.26,
          },
          {
            word: "das",
            startAt: 11.26,
            endAt: 11.44,
          },
          {
            word: "vacinas",
            startAt: 11.44,
            endAt: 12.02,
          },
          {
            word: "e",
            startAt: 12.02,
            endAt: 12.42,
          },
          {
            word: "como",
            startAt: 12.42,
            endAt: 12.7,
          },
          {
            word: "elas",
            startAt: 12.7,
            endAt: 12.98,
          },
          {
            word: "nos",
            startAt: 12.98,
            endAt: 13.16,
          },
          {
            word: "protegem",
            startAt: 13.16,
            endAt: 13.74,
          },
          {
            word: "e",
            startAt: 13.74,
            endAt: 13.88,
          },
          {
            word: "são",
            startAt: 13.88,
            endAt: 14.08,
          },
          {
            word: "seguras.",
            startAt: 14.08,
            endAt: 14.64,
          },
        ],
      },
    },
  ],
};

export default vacinaStory;
