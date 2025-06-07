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

/* image: "/story/jardim/images/capa.png",
      audio: {
        content: "/story/jardim/audios/0.mp3",
        type: "audio/mp3",
      } */

const jardimStory: Story = {
  title: "O Jardim da Mente",
  slug: "jardim-mente",
  pages: [
    {
      page: 1,
      text: "Bem-vindo ao Jardim da Mente. Clique em Avançar para começar.",
      image: "/story/jardim/images/capa.png",
      audio: {
        content: "/story/jardim/audios/0.mp3",
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
            endAt: 0.8,
          },
          {
            word: "ao",
            startAt: 0.8,
            endAt: 0.9,
          },
          {
            word: "Jardim",
            startAt: 0.9,
            endAt: 1.28,
          },
          {
            word: "da",
            startAt: 1.28,
            endAt: 1.42,
          },
          {
            word: "Mente.",
            startAt: 1.42,
            endAt: 1.72,
          },
          {
            word: "Clique",
            startAt: 2,
            endAt: 2.34,
          },
          {
            word: "em",
            startAt: 2.34,
            endAt: 2.46,
          },
          {
            word: "Avançar",
            startAt: 2.46,
            endAt: 2.98,
          },
          {
            word: "para",
            startAt: 2.98,
            endAt: 3.18,
          },
          {
            word: "começar.",
            startAt: 3.18,
            endAt: 3.64,
          },
        ],
      },
    },
    {
      page: 2,
      text: 'Era uma vez, uma menina chamada Luísa que adorava brincar no jardim de sua casa. Um dia enquanto brincava, ela encontrou um passarinho chamado Pipo. Pipo tinha uma mensagem importante para Luísa. "Vamos explorar o jardim da mente e aprender a cuidar da nossa saúde mental!"',
      image: "/story/jardim/images/2.png",
      audio: {
        content: "/story/jardim/audios/1.mp3",
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
            endAt: 0.92,
          },
          {
            word: "uma",
            startAt: 1.04,
            endAt: 1.22,
          },
          {
            word: "menina",
            startAt: 1.22,
            endAt: 1.6,
          },
          {
            word: "chamada",
            startAt: 1.6,
            endAt: 2.04,
          },
          {
            word: "Luísa",
            startAt: 2.04,
            endAt: 2.48,
          },
          {
            word: "que",
            startAt: 2.48,
            endAt: 2.6,
          },
          {
            word: "adorava",
            startAt: 2.6,
            endAt: 3.04,
          },
          {
            word: "brincar",
            startAt: 3.04,
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
            endAt: 4.08,
          },
          {
            word: "de",
            startAt: 4.08,
            endAt: 4.18,
          },
          {
            word: "sua",
            startAt: 4.18,
            endAt: 4.38,
          },
          {
            word: "casa.",
            startAt: 4.38,
            endAt: 4.76,
          },
          {
            word: "Um",
            startAt: 4.96,
            endAt: 5.28,
          },
          {
            word: "dia",
            startAt: 5.28,
            endAt: 5.52,
          },
          {
            word: "enquanto",
            startAt: 5.52,
            endAt: 5.92,
          },
          {
            word: "brincava,",
            startAt: 5.92,
            endAt: 6.58,
          },
          {
            word: "ela",
            startAt: 6.7,
            endAt: 6.86,
          },
          {
            word: "encontrou",
            startAt: 6.86,
            endAt: 7.3,
          },
          {
            word: "um",
            startAt: 7.3,
            endAt: 7.4,
          },
          {
            word: "passarinho",
            startAt: 7.4,
            endAt: 7.9,
          },
          {
            word: "chamado",
            startAt: 7.9,
            endAt: 8.3,
          },
          {
            word: "Pipo.",
            startAt: 8.3,
            endAt: 8.76,
          },
          {
            word: "Pipo",
            startAt: 8.92,
            endAt: 9.42,
          },
          {
            word: "tinha",
            startAt: 9.42,
            endAt: 9.54,
          },
          {
            word: "uma",
            startAt: 9.54,
            endAt: 9.72,
          },
          {
            word: "mensagem",
            startAt: 9.72,
            endAt: 10.22,
          },
          {
            word: "importante",
            startAt: 10.22,
            endAt: 10.72,
          },
          {
            word: "para",
            startAt: 10.72,
            endAt: 10.98,
          },
          {
            word: "Luísa.",
            startAt: 10.98,
            endAt: 11.48,
          },
          {
            word: "Vamos",
            startAt: 11.62,
            endAt: 12,
          },
          {
            word: "explorar",
            startAt: 12,
            endAt: 12.58,
          },
          {
            word: "o",
            startAt: 12.58,
            endAt: 12.66,
          },
          {
            word: "jardim",
            startAt: 12.66,
            endAt: 13.06,
          },
          {
            word: "da",
            startAt: 13.06,
            endAt: 13.22,
          },
          {
            word: "mente",
            startAt: 13.22,
            endAt: 13.54,
          },
          {
            word: "e",
            startAt: 13.54,
            endAt: 13.72,
          },
          {
            word: "aprender",
            startAt: 13.72,
            endAt: 14.06,
          },
          {
            word: "a",
            startAt: 14.06,
            endAt: 14.26,
          },
          {
            word: "cuidar",
            startAt: 14.26,
            endAt: 14.6,
          },
          {
            word: "da",
            startAt: 14.6,
            endAt: 14.74,
          },
          {
            word: "nossa",
            startAt: 14.74,
            endAt: 15.04,
          },
          {
            word: "saúde",
            startAt: 15.04,
            endAt: 15.46,
          },
          {
            word: "mental.",
            startAt: 15.46,
            endAt: 15.8,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Curiosa, Luísa seguiu Pipo até um portão mágico que levava ao jardim da mente. "Saúde mental é como cuidar de um jardim dentro da nossa cabeça. Vamos ver como funciona!", disse Pipo.',
      image: "/story/jardim/images/3.png",
      audio: {
        content: "/story/jardim/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Curiosa,",
            startAt: 0,
            endAt: 0.78,
          },
          {
            word: "Luísa",
            startAt: 1.1,
            endAt: 1.48,
          },
          {
            word: "seguiu",
            startAt: 1.48,
            endAt: 1.76,
          },
          {
            word: "Pipo",
            startAt: 1.76,
            endAt: 2.12,
          },
          {
            word: "até",
            startAt: 2.12,
            endAt: 2.28,
          },
          {
            word: "um",
            startAt: 2.28,
            endAt: 2.4,
          },
          {
            word: "portão",
            startAt: 2.4,
            endAt: 2.74,
          },
          {
            word: "mágico",
            startAt: 2.74,
            endAt: 3.2,
          },
          {
            word: "que",
            startAt: 3.2,
            endAt: 3.34,
          },
          {
            word: "levava",
            startAt: 3.34,
            endAt: 3.78,
          },
          {
            word: "ao",
            startAt: 3.78,
            endAt: 3.9,
          },
          {
            word: "jardim",
            startAt: 3.9,
            endAt: 4.28,
          },
          {
            word: "da",
            startAt: 4.28,
            endAt: 4.4,
          },
          {
            word: "mente.",
            startAt: 4.4,
            endAt: 4.76,
          },
          {
            word: "Saúde",
            startAt: 4.98,
            endAt: 5.62,
          },
          {
            word: "mental",
            startAt: 5.62,
            endAt: 5.96,
          },
          {
            word: "é",
            startAt: 5.96,
            endAt: 6.24,
          },
          {
            word: "como",
            startAt: 6.24,
            endAt: 6.44,
          },
          {
            word: "cuidar",
            startAt: 6.44,
            endAt: 6.9,
          },
          {
            word: "de",
            startAt: 6.9,
            endAt: 7.02,
          },
          {
            word: "um",
            startAt: 7.02,
            endAt: 7.12,
          },
          {
            word: "jardim",
            startAt: 7.12,
            endAt: 7.52,
          },
          {
            word: "dentro",
            startAt: 7.52,
            endAt: 7.86,
          },
          {
            word: "da",
            startAt: 7.86,
            endAt: 8.06,
          },
          {
            word: "nossa",
            startAt: 8.06,
            endAt: 8.34,
          },
          {
            word: "cabeça.",
            startAt: 8.34,
            endAt: 8.84,
          },
          {
            word: "Vamos",
            startAt: 9.08,
            endAt: 9.48,
          },
          {
            word: "ver",
            startAt: 9.48,
            endAt: 9.72,
          },
          {
            word: "como",
            startAt: 9.72,
            endAt: 10,
          },
          {
            word: "funciona,",
            startAt: 10,
            endAt: 10.64,
          },
          {
            word: "disse",
            startAt: 10.86,
            endAt: 11.2,
          },
          {
            word: "Pipo.",
            startAt: 11.2,
            endAt: 11.68,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'No primeiro canto do jardim, Luísa encontrou flores que representavam sentimentos como alegria, tristeza e medo. "É importante falar sobre nossos sentimentos e entender que todos eles são normais", explicou Pipo.',
      image: "/story/jardim/images/4.png",
      audio: {
        content: "/story/jardim/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "No",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "primeiro",
            startAt: 0.36,
            endAt: 0.7,
          },
          {
            word: "canto",
            startAt: 0.7,
            endAt: 1.08,
          },
          {
            word: "do",
            startAt: 1.08,
            endAt: 1.2,
          },
          {
            word: "jardim,",
            startAt: 1.2,
            endAt: 1.7,
          },
          {
            word: "Luísa",
            startAt: 2,
            endAt: 2.38,
          },
          {
            word: "encontrou",
            startAt: 2.38,
            endAt: 2.76,
          },
          {
            word: "flores",
            startAt: 2.76,
            endAt: 3.18,
          },
          {
            word: "que",
            startAt: 3.18,
            endAt: 3.34,
          },
          {
            word: "representavam",
            startAt: 3.34,
            endAt: 4.08,
          },
          {
            word: "sentimentos",
            startAt: 4.08,
            endAt: 4.78,
          },
          {
            word: "como",
            startAt: 4.78,
            endAt: 4.98,
          },
          {
            word: "alegria,",
            startAt: 4.98,
            endAt: 5.5,
          },
          {
            word: "tristeza",
            startAt: 5.58,
            endAt: 6.16,
          },
          {
            word: "e",
            startAt: 6.16,
            endAt: 6.28,
          },
          {
            word: "medo.",
            startAt: 6.28,
            endAt: 6.6,
          },
          {
            word: "É",
            startAt: 6.76,
            endAt: 7.04,
          },
          {
            word: "importante",
            startAt: 7.04,
            endAt: 7.52,
          },
          {
            word: "falar",
            startAt: 7.52,
            endAt: 7.86,
          },
          {
            word: "sobre",
            startAt: 7.86,
            endAt: 8.3,
          },
          {
            word: "nossos",
            startAt: 8.3,
            endAt: 8.62,
          },
          {
            word: "sentimentos",
            startAt: 8.62,
            endAt: 9.34,
          },
          {
            word: "e",
            startAt: 9.34,
            endAt: 9.48,
          },
          {
            word: "entender",
            startAt: 9.48,
            endAt: 9.84,
          },
          {
            word: "que",
            startAt: 9.84,
            endAt: 10.08,
          },
          {
            word: "todos",
            startAt: 10.08,
            endAt: 10.46,
          },
          {
            word: "eles",
            startAt: 10.46,
            endAt: 10.82,
          },
          {
            word: "são",
            startAt: 10.82,
            endAt: 11.02,
          },
          {
            word: "normais,",
            startAt: 11.02,
            endAt: 11.58,
          },
          {
            word: "explicou",
            startAt: 11.68,
            endAt: 12.14,
          },
          {
            word: "Pipo.",
            startAt: 12.14,
            endAt: 12.58,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Mais adiante, Luísa viu uma fonte mágica chamada relaxamento. "Tomar um tempo para relaxar é essencial. Podemos fazer isso respirando fundo, ouvindo música ou fazendo algo que gostamos", disse Pipo.',
      image: "/story/jardim/images/5.png",
      audio: {
        content: "/story/jardim/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Mais",
            startAt: 0,
            endAt: 0.46,
          },
          {
            word: "adiante,",
            startAt: 0.46,
            endAt: 1.02,
          },
          {
            word: "Luísa",
            startAt: 1.18,
            endAt: 1.58,
          },
          {
            word: "viu",
            startAt: 1.58,
            endAt: 1.72,
          },
          {
            word: "uma",
            startAt: 1.72,
            endAt: 1.9,
          },
          {
            word: "fonte",
            startAt: 1.9,
            endAt: 2.18,
          },
          {
            word: "mágica",
            startAt: 2.18,
            endAt: 2.68,
          },
          {
            word: "chamada",
            startAt: 2.68,
            endAt: 3.14,
          },
          {
            word: "relaxamento.",
            startAt: 3.14,
            endAt: 3.92,
          },
          {
            word: "Tomar",
            startAt: 4.14,
            endAt: 4.58,
          },
          {
            word: "um",
            startAt: 4.58,
            endAt: 4.72,
          },
          {
            word: "tempo",
            startAt: 4.72,
            endAt: 5,
          },
          {
            word: "para",
            startAt: 5,
            endAt: 5.2,
          },
          {
            word: "relaxar",
            startAt: 5.2,
            endAt: 5.74,
          },
          {
            word: "é",
            startAt: 5.74,
            endAt: 5.86,
          },
          {
            word: "essencial.",
            startAt: 5.86,
            endAt: 6.46,
          },
          {
            word: "Podemos",
            startAt: 6.68,
            endAt: 7.26,
          },
          {
            word: "fazer",
            startAt: 7.26,
            endAt: 7.5,
          },
          {
            word: "isso",
            startAt: 7.5,
            endAt: 7.78,
          },
          {
            word: "respirando",
            startAt: 7.78,
            endAt: 8.3,
          },
          {
            word: "fundo,",
            startAt: 8.3,
            endAt: 8.7,
          },
          {
            word: "ouvindo",
            startAt: 8.9,
            endAt: 9.32,
          },
          {
            word: "música",
            startAt: 9.32,
            endAt: 9.82,
          },
          {
            word: "ou",
            startAt: 9.82,
            endAt: 10.02,
          },
          {
            word: "fazendo",
            startAt: 10.02,
            endAt: 10.38,
          },
          {
            word: "algo",
            startAt: 10.38,
            endAt: 10.74,
          },
          {
            word: "que",
            startAt: 10.74,
            endAt: 10.9,
          },
          {
            word: "gostamos,",
            startAt: 10.9,
            endAt: 11.46,
          },
          {
            word: "disse",
            startAt: 11.62,
            endAt: 11.84,
          },
          {
            word: "Pipo.",
            startAt: 11.84,
            endAt: 12.28,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Continuando a caminhada, eles chegaram ao campo das brincadeiras. "Brincar com amigos e se divertir é ótimo para a nossa mente!", disse Pipo. Luísa correu pelo campo, jogando bola e rindo com seus amigos.',
      image: "/story/jardim/images/6.png",
      audio: {
        content: "/story/jardim/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Continuando",
            startAt: 0,
            endAt: 0.8,
          },
          {
            word: "a",
            startAt: 0.8,
            endAt: 0.9,
          },
          {
            word: "caminhada,",
            startAt: 0.9,
            endAt: 1.46,
          },
          {
            word: "eles",
            startAt: 1.6,
            endAt: 1.76,
          },
          {
            word: "chegaram",
            startAt: 1.76,
            endAt: 2.22,
          },
          {
            word: "ao",
            startAt: 2.22,
            endAt: 2.34,
          },
          {
            word: "campo",
            startAt: 2.34,
            endAt: 2.64,
          },
          {
            word: "das",
            startAt: 2.64,
            endAt: 2.88,
          },
          {
            word: "brincadeiras.",
            startAt: 2.88,
            endAt: 3.62,
          },
          {
            word: "Brincar",
            startAt: 3.84,
            endAt: 4.38,
          },
          {
            word: "com",
            startAt: 4.38,
            endAt: 4.52,
          },
          {
            word: "amigos",
            startAt: 4.52,
            endAt: 4.92,
          },
          {
            word: "e",
            startAt: 4.92,
            endAt: 5.1,
          },
          {
            word: "se",
            startAt: 5.1,
            endAt: 5.24,
          },
          {
            word: "divertir",
            startAt: 5.24,
            endAt: 5.7,
          },
          {
            word: "é",
            startAt: 5.7,
            endAt: 5.8,
          },
          {
            word: "ótimo",
            startAt: 5.8,
            endAt: 6.22,
          },
          {
            word: "para",
            startAt: 6.22,
            endAt: 6.46,
          },
          {
            word: "a",
            startAt: 6.46,
            endAt: 6.6,
          },
          {
            word: "nossa",
            startAt: 6.6,
            endAt: 6.78,
          },
          {
            word: "mente,",
            startAt: 6.78,
            endAt: 7.22,
          },
          {
            word: "disse",
            startAt: 7.4,
            endAt: 7.7,
          },
          {
            word: "Pipo.",
            startAt: 7.7,
            endAt: 8.16,
          },
          {
            word: "Luísa",
            startAt: 8.44,
            endAt: 8.88,
          },
          {
            word: "correu",
            startAt: 8.88,
            endAt: 9.16,
          },
          {
            word: "pelo",
            startAt: 9.16,
            endAt: 9.36,
          },
          {
            word: "campo,",
            startAt: 9.36,
            endAt: 9.78,
          },
          {
            word: "jogando",
            startAt: 10,
            endAt: 10.42,
          },
          {
            word: "bola",
            startAt: 10.42,
            endAt: 10.78,
          },
          {
            word: "e",
            startAt: 10.78,
            endAt: 10.9,
          },
          {
            word: "rindo",
            startAt: 10.9,
            endAt: 11.16,
          },
          {
            word: "com",
            startAt: 11.16,
            endAt: 11.32,
          },
          {
            word: "seus",
            startAt: 11.32,
            endAt: 11.6,
          },
          {
            word: "amigos.",
            startAt: 11.6,
            endAt: 12,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'Depois, Pipo levou Luiz à Biblioteca dos Pensamentos. "Aqui, você pode organizar seus pensamentos e escrever em um diário. Isso ajuda a entender melhor o que está acontecendo na sua cabeça", explicou o passarinho.',
      image: "/story/jardim/images/7.jpeg",
      audio: {
        content: "/story/jardim/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois,",
            startAt: 0,
            endAt: 0.64,
          },
          {
            word: "Pipo",
            startAt: 0.88,
            endAt: 1.12,
          },
          {
            word: "levou",
            startAt: 1.12,
            endAt: 1.4,
          },
          {
            word: "Luiz",
            startAt: 1.4,
            endAt: 1.76,
          },
          {
            word: "à",
            startAt: 1.76,
            endAt: 1.84,
          },
          {
            word: "Biblioteca",
            startAt: 1.84,
            endAt: 2.44,
          },
          {
            word: "dos",
            startAt: 2.44,
            endAt: 2.62,
          },
          {
            word: "Pensamentos.",
            startAt: 2.62,
            endAt: 3.3,
          },
          {
            word: "Aqui,",
            startAt: 3.6,
            endAt: 4.06,
          },
          {
            word: "você",
            startAt: 4.26,
            endAt: 4.6,
          },
          {
            word: "pode",
            startAt: 4.6,
            endAt: 4.9,
          },
          {
            word: "organizar",
            startAt: 4.9,
            endAt: 5.5,
          },
          {
            word: "seus",
            startAt: 5.5,
            endAt: 5.72,
          },
          {
            word: "pensamentos",
            startAt: 5.72,
            endAt: 6.34,
          },
          {
            word: "e",
            startAt: 6.34,
            endAt: 6.54,
          },
          {
            word: "escrever",
            startAt: 6.54,
            endAt: 6.92,
          },
          {
            word: "em",
            startAt: 6.92,
            endAt: 7.16,
          },
          {
            word: "um",
            startAt: 7.16,
            endAt: 7.32,
          },
          {
            word: "diário.",
            startAt: 7.32,
            endAt: 7.72,
          },
          {
            word: "Isso",
            startAt: 7.88,
            endAt: 8.24,
          },
          {
            word: "ajuda",
            startAt: 8.24,
            endAt: 8.64,
          },
          {
            word: "a",
            startAt: 8.64,
            endAt: 8.78,
          },
          {
            word: "entender",
            startAt: 8.78,
            endAt: 9.06,
          },
          {
            word: "melhor",
            startAt: 9.06,
            endAt: 9.44,
          },
          {
            word: "o",
            startAt: 9.44,
            endAt: 9.66,
          },
          {
            word: "que",
            startAt: 9.66,
            endAt: 9.76,
          },
          {
            word: "está",
            startAt: 9.76,
            endAt: 9.96,
          },
          {
            word: "acontecendo",
            startAt: 9.96,
            endAt: 10.52,
          },
          {
            word: "na",
            startAt: 10.52,
            endAt: 10.74,
          },
          {
            word: "sua",
            startAt: 10.74,
            endAt: 10.92,
          },
          {
            word: "cabeça,",
            startAt: 10.92,
            endAt: 11.44,
          },
          {
            word: "explicou",
            startAt: 11.56,
            endAt: 12.08,
          },
          {
            word: "o",
            startAt: 12.08,
            endAt: 12.2,
          },
          {
            word: "passarinho.",
            startAt: 12.2,
            endAt: 12.7,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Em outro canto do jardim, Luísa encontrou um espelho especial chamado autoestima. "É importante lembrar que você é especial e se amar do jeitinho que você é", disse Pipo. Luísa olhou no espelho e sorriu.',
      image: "/story/jardim/images/8.png",
      audio: {
        content: "/story/jardim/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Em",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "outro",
            startAt: 0.36,
            endAt: 0.6,
          },
          {
            word: "canto",
            startAt: 0.6,
            endAt: 0.96,
          },
          {
            word: "do",
            startAt: 0.96,
            endAt: 1.08,
          },
          {
            word: "jardim,",
            startAt: 1.08,
            endAt: 1.56,
          },
          {
            word: "Luísa",
            startAt: 1.86,
            endAt: 2.26,
          },
          {
            word: "encontrou",
            startAt: 2.26,
            endAt: 2.64,
          },
          {
            word: "um",
            startAt: 2.64,
            endAt: 2.76,
          },
          {
            word: "espelho",
            startAt: 2.76,
            endAt: 3.16,
          },
          {
            word: "especial",
            startAt: 3.16,
            endAt: 3.6,
          },
          {
            word: "chamado",
            startAt: 3.6,
            endAt: 4.1,
          },
          {
            word: "autoestima.",
            startAt: 4.1,
            endAt: 4.92,
          },
          {
            word: "É",
            startAt: 5.08,
            endAt: 5.34,
          },
          {
            word: "importante",
            startAt: 5.34,
            endAt: 5.84,
          },
          {
            word: "lembrar",
            startAt: 5.84,
            endAt: 6.24,
          },
          {
            word: "que",
            startAt: 6.24,
            endAt: 6.48,
          },
          {
            word: "você",
            startAt: 6.48,
            endAt: 6.78,
          },
          {
            word: "é",
            startAt: 6.78,
            endAt: 6.92,
          },
          {
            word: "especial",
            startAt: 6.92,
            endAt: 7.4,
          },
          {
            word: "e",
            startAt: 7.4,
            endAt: 7.7,
          },
          {
            word: "se",
            startAt: 7.7,
            endAt: 7.82,
          },
          {
            word: "amar",
            startAt: 7.82,
            endAt: 8.04,
          },
          {
            word: "do",
            startAt: 8.04,
            endAt: 8.24,
          },
          {
            word: "jeitinho",
            startAt: 8.24,
            endAt: 8.76,
          },
          {
            word: "que",
            startAt: 8.76,
            endAt: 8.94,
          },
          {
            word: "você",
            startAt: 8.94,
            endAt: 9.26,
          },
          {
            word: "é,",
            startAt: 9.26,
            endAt: 9.44,
          },
          {
            word: "disse",
            startAt: 9.5,
            endAt: 9.7,
          },
          {
            word: "Pipo.",
            startAt: 9.7,
            endAt: 10.14,
          },
          {
            word: "Luísa",
            startAt: 10.34,
            endAt: 10.9,
          },
          {
            word: "olhou",
            startAt: 10.9,
            endAt: 11.1,
          },
          {
            word: "no",
            startAt: 11.1,
            endAt: 11.24,
          },
          {
            word: "espelho",
            startAt: 11.24,
            endAt: 11.68,
          },
          {
            word: "e",
            startAt: 11.68,
            endAt: 11.76,
          },
          {
            word: "sorriu.",
            startAt: 11.76,
            endAt: 12.18,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'No final do jardim, havia um banco chamado Amizade. "Ter amigos e conversar com eles nos faz sentir bem. Converse sobre seus sentimentos e ouça os outros também", aconselhou Pipo.',
      image: "/story/jardim/images/9.png",
      audio: {
        content: "/story/jardim/audios/8.mp3",
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
            endAt: 0.78,
          },
          {
            word: "jardim,",
            startAt: 0.78,
            endAt: 1.26,
          },
          {
            word: "havia",
            startAt: 1.38,
            endAt: 1.66,
          },
          {
            word: "um",
            startAt: 1.66,
            endAt: 1.84,
          },
          {
            word: "banco",
            startAt: 1.84,
            endAt: 2.1,
          },
          {
            word: "chamado",
            startAt: 2.1,
            endAt: 2.5,
          },
          {
            word: "Amizade.",
            startAt: 2.5,
            endAt: 3.1,
          },
          {
            word: "Ter",
            startAt: 3.42,
            endAt: 3.6,
          },
          {
            word: "amigos",
            startAt: 3.6,
            endAt: 3.98,
          },
          {
            word: "e",
            startAt: 3.98,
            endAt: 4.14,
          },
          {
            word: "conversar",
            startAt: 4.14,
            endAt: 4.7,
          },
          {
            word: "com",
            startAt: 4.7,
            endAt: 4.86,
          },
          {
            word: "eles",
            startAt: 4.86,
            endAt: 5.16,
          },
          {
            word: "nos",
            startAt: 5.16,
            endAt: 5.38,
          },
          {
            word: "faz",
            startAt: 5.38,
            endAt: 5.58,
          },
          {
            word: "sentir",
            startAt: 5.58,
            endAt: 5.92,
          },
          {
            word: "bem.",
            startAt: 5.92,
            endAt: 6.24,
          },
          {
            word: "Converse",
            startAt: 6.6,
            endAt: 7.02,
          },
          {
            word: "sobre",
            startAt: 7.02,
            endAt: 7.36,
          },
          {
            word: "seus",
            startAt: 7.36,
            endAt: 7.6,
          },
          {
            word: "sentimentos",
            startAt: 7.6,
            endAt: 8.26,
          },
          {
            word: "e",
            startAt: 8.26,
            endAt: 8.36,
          },
          {
            word: "ouça",
            startAt: 8.36,
            endAt: 8.64,
          },
          {
            word: "os",
            startAt: 8.64,
            endAt: 8.84,
          },
          {
            word: "outros",
            startAt: 8.84,
            endAt: 9.1,
          },
          {
            word: "também,",
            startAt: 9.1,
            endAt: 9.48,
          },
          {
            word: "aconselhou",
            startAt: 9.62,
            endAt: 10.14,
          },
          {
            word: "Pipo.",
            startAt: 10.14,
            endAt: 10.58,
          },
        ],
      },
    },
    {
      page: 10,
      text: 'Ao final da aventura, Pipo disse: "Cuidar da saúde mental é como cuidar deste jardim. Fale sobre seus sentimentos, relaxe, brinque, organize seus pensamentos, ame a si mesmo e valorize suas amizades."',
      image: "/story/jardim/images/10.png",
      audio: {
        content: "/story/jardim/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Ao",
            startAt: 0,
            endAt: 0.34,
          },
          {
            word: "final",
            startAt: 0.34,
            endAt: 0.62,
          },
          {
            word: "da",
            startAt: 0.62,
            endAt: 0.76,
          },
          {
            word: "aventura,",
            startAt: 0.76,
            endAt: 1.28,
          },
          {
            word: "Pipo",
            startAt: 1.42,
            endAt: 1.7,
          },
          {
            word: "disse,",
            startAt: 1.7,
            endAt: 2.02,
          },
          {
            word: "cuidar",
            startAt: 2.24,
            endAt: 2.64,
          },
          {
            word: "da",
            startAt: 2.64,
            endAt: 2.76,
          },
          {
            word: "saúde",
            startAt: 2.76,
            endAt: 3.14,
          },
          {
            word: "mental",
            startAt: 3.14,
            endAt: 3.54,
          },
          {
            word: "é",
            startAt: 3.54,
            endAt: 3.86,
          },
          {
            word: "como",
            startAt: 3.86,
            endAt: 4.08,
          },
          {
            word: "cuidar",
            startAt: 4.08,
            endAt: 4.52,
          },
          {
            word: "deste",
            startAt: 4.52,
            endAt: 4.82,
          },
          {
            word: "jardim.",
            startAt: 4.82,
            endAt: 5.36,
          },
          {
            word: "Fale",
            startAt: 5.64,
            endAt: 5.98,
          },
          {
            word: "sobre",
            startAt: 5.98,
            endAt: 6.26,
          },
          {
            word: "seus",
            startAt: 6.26,
            endAt: 6.5,
          },
          {
            word: "sentimentos,",
            startAt: 6.5,
            endAt: 7.22,
          },
          {
            word: "relaxe,",
            startAt: 7.34,
            endAt: 7.8,
          },
          {
            word: "brinque,",
            startAt: 7.94,
            endAt: 8.26,
          },
          {
            word: "organize",
            startAt: 8.4,
            endAt: 8.8,
          },
          {
            word: "seus",
            startAt: 8.8,
            endAt: 9.1,
          },
          {
            word: "pensamentos,",
            startAt: 9.1,
            endAt: 9.82,
          },
          {
            word: "ame",
            startAt: 10.18,
            endAt: 10.4,
          },
          {
            word: "a",
            startAt: 10.4,
            endAt: 10.5,
          },
          {
            word: "si",
            startAt: 10.5,
            endAt: 10.6,
          },
          {
            word: "mesmo",
            startAt: 10.6,
            endAt: 10.98,
          },
          {
            word: "e",
            startAt: 10.98,
            endAt: 11.14,
          },
          {
            word: "valorize",
            startAt: 11.14,
            endAt: 11.64,
          },
          {
            word: "suas",
            startAt: 11.64,
            endAt: 11.9,
          },
          {
            word: "amizades.",
            startAt: 11.9,
            endAt: 12.52,
          },
        ],
      },
    },
    {
      page: 11,
      text: "Luísa voltou para casa e compartilhou tudo o que aprendeu com sua família. Ela sabia que cuidando da sua mente poderia ser mais feliz e saudável. Espero que essa história ajude você a entender a importância de cuidar da saúde mental de maneira divertida!.",
      image: "/story/jardim/images/11.png",
      audio: {
        content: "/story/jardim/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Luísa",
            startAt: 0,
            endAt: 0.66,
          },
          {
            word: "voltou",
            startAt: 0.66,
            endAt: 0.98,
          },
          {
            word: "para",
            startAt: 0.98,
            endAt: 1.16,
          },
          {
            word: "casa",
            startAt: 1.16,
            endAt: 1.58,
          },
          {
            word: "e",
            startAt: 1.58,
            endAt: 1.74,
          },
          {
            word: "compartilhou",
            startAt: 1.74,
            endAt: 2.38,
          },
          {
            word: "tudo",
            startAt: 2.38,
            endAt: 2.72,
          },
          {
            word: "o",
            startAt: 2.72,
            endAt: 2.88,
          },
          {
            word: "que",
            startAt: 2.88,
            endAt: 2.92,
          },
          {
            word: "aprendeu",
            startAt: 2.92,
            endAt: 3.36,
          },
          {
            word: "com",
            startAt: 3.36,
            endAt: 3.5,
          },
          {
            word: "sua",
            startAt: 3.5,
            endAt: 3.7,
          },
          {
            word: "família.",
            startAt: 3.7,
            endAt: 4.12,
          },
          {
            word: "Ela",
            startAt: 4.46,
            endAt: 4.66,
          },
          {
            word: "sabia",
            startAt: 4.66,
            endAt: 5.02,
          },
          {
            word: "que",
            startAt: 5.02,
            endAt: 5.24,
          },
          {
            word: "cuidando",
            startAt: 5.24,
            endAt: 5.7,
          },
          {
            word: "da",
            startAt: 5.7,
            endAt: 5.88,
          },
          {
            word: "sua",
            startAt: 5.88,
            endAt: 6.06,
          },
          {
            word: "mente",
            startAt: 6.06,
            endAt: 6.44,
          },
          {
            word: "poderia",
            startAt: 6.44,
            endAt: 6.82,
          },
          {
            word: "ser",
            startAt: 6.82,
            endAt: 7.14,
          },
          {
            word: "mais",
            startAt: 7.14,
            endAt: 7.42,
          },
          {
            word: "feliz",
            startAt: 7.42,
            endAt: 7.74,
          },
          {
            word: "e",
            startAt: 7.74,
            endAt: 7.92,
          },
          {
            word: "saudável.",
            startAt: 7.92,
            endAt: 8.48,
          },
          {
            word: "Espero",
            startAt: 8.72,
            endAt: 9.16,
          },
          {
            word: "que",
            startAt: 9.16,
            endAt: 9.34,
          },
          {
            word: "essa",
            startAt: 9.34,
            endAt: 9.54,
          },
          {
            word: "história",
            startAt: 9.54,
            endAt: 9.88,
          },
          {
            word: "ajude",
            startAt: 9.88,
            endAt: 10.3,
          },
          {
            word: "você",
            startAt: 10.3,
            endAt: 10.64,
          },
          {
            word: "a",
            startAt: 10.64,
            endAt: 10.84,
          },
          {
            word: "entender",
            startAt: 10.84,
            endAt: 11.16,
          },
          {
            word: "a",
            startAt: 11.16,
            endAt: 11.36,
          },
          {
            word: "importância",
            startAt: 11.36,
            endAt: 11.92,
          },
          {
            word: "de",
            startAt: 11.92,
            endAt: 12.08,
          },
          {
            word: "cuidar",
            startAt: 12.08,
            endAt: 12.5,
          },
          {
            word: "da",
            startAt: 12.5,
            endAt: 12.62,
          },
          {
            word: "saúde",
            startAt: 12.62,
            endAt: 13,
          },
          {
            word: "mental",
            startAt: 13,
            endAt: 13.4,
          },
          {
            word: "de",
            startAt: 13.4,
            endAt: 13.64,
          },
          {
            word: "maneira",
            startAt: 13.64,
            endAt: 14,
          },
          {
            word: "divertida.",
            startAt: 14,
            endAt: 14.72,
          },
        ],
      },
    },
  ],
};

export default jardimStory;
