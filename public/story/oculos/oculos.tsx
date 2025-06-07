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

const oculosStory: Story = {
  title: "Os Óculos de Luísa e seu Amigo Léo",
  slug: "oculos-luisa",
  pages: [
    {
      page: 1,
      text: "Bem-vindo à historinha, os óculos de Luísa e seu amigo Léo. Clique em avançar para começar.",
      image: "/story/oculos/images/capa.png",
      audio: {
        content: "/story/oculos/audios/0.mp3",
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
            endAt: 1.34,
          },
          {
            word: "os",
            startAt: 1.48,
            endAt: 1.7,
          },
          {
            word: "óculos",
            startAt: 1.7,
            endAt: 2.04,
          },
          {
            word: "de",
            startAt: 2.04,
            endAt: 2.22,
          },
          {
            word: "Luísa",
            startAt: 2.22,
            endAt: 2.64,
          },
          {
            word: "e",
            startAt: 2.64,
            endAt: 2.8,
          },
          {
            word: "seu",
            startAt: 2.8,
            endAt: 2.96,
          },
          {
            word: "amigo",
            startAt: 2.96,
            endAt: 3.26,
          },
          {
            word: "Léo.",
            startAt: 3.26,
            endAt: 3.58,
          },
          {
            word: "Clique",
            startAt: 3.86,
            endAt: 4.2,
          },
          {
            word: "em",
            startAt: 4.2,
            endAt: 4.32,
          },
          {
            word: "avançar",
            startAt: 4.32,
            endAt: 4.84,
          },
          {
            word: "para",
            startAt: 4.84,
            endAt: 5,
          },
          {
            word: "começar.",
            startAt: 5,
            endAt: 5.46,
          },
        ],
      },
    },
    {
      page: 2,
      text: "Era uma vez em uma escola chamada Alegre Aprender, uma menina chamada Luísa que adorava explorar e aprender. Um dia, na sala de aula, chegou um novo aluno chamado Léo. Ele usava óculos grandes e parecia ter dificuldade para ver o quadro. Luísa ficou curiosa e quis conhecer seu novo amigo.",
      image: "/story/oculos/images/2.png",
      audio: {
        content: "/story/oculos/audios/1.mp3",
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
            endAt: 0.56,
          },
          {
            word: "vez",
            startAt: 0.56,
            endAt: 0.9,
          },
          {
            word: "em",
            startAt: 0.9,
            endAt: 1.04,
          },
          {
            word: "uma",
            startAt: 1.04,
            endAt: 1.18,
          },
          {
            word: "escola",
            startAt: 1.18,
            endAt: 1.58,
          },
          {
            word: "chamada",
            startAt: 1.58,
            endAt: 2.06,
          },
          {
            word: "Alegre",
            startAt: 2.06,
            endAt: 2.46,
          },
          {
            word: "Aprender,",
            startAt: 2.46,
            endAt: 2.92,
          },
          {
            word: "uma",
            startAt: 3.06,
            endAt: 3.26,
          },
          {
            word: "menina",
            startAt: 3.26,
            endAt: 3.6,
          },
          {
            word: "chamada",
            startAt: 3.6,
            endAt: 4.04,
          },
          {
            word: "Luísa",
            startAt: 4.04,
            endAt: 4.46,
          },
          {
            word: "que",
            startAt: 4.46,
            endAt: 4.58,
          },
          {
            word: "adorava",
            startAt: 4.58,
            endAt: 5.04,
          },
          {
            word: "explorar",
            startAt: 5.04,
            endAt: 5.58,
          },
          {
            word: "e",
            startAt: 5.58,
            endAt: 5.68,
          },
          {
            word: "aprender.",
            startAt: 5.68,
            endAt: 6.08,
          },
          {
            word: "Um",
            startAt: 6.34,
            endAt: 6.62,
          },
          {
            word: "dia,",
            startAt: 6.62,
            endAt: 6.92,
          },
          {
            word: "na",
            startAt: 7,
            endAt: 7.12,
          },
          {
            word: "sala",
            startAt: 7.12,
            endAt: 7.4,
          },
          {
            word: "de",
            startAt: 7.4,
            endAt: 7.58,
          },
          {
            word: "aula,",
            startAt: 7.58,
            endAt: 7.88,
          },
          {
            word: "chegou",
            startAt: 8.06,
            endAt: 8.26,
          },
          {
            word: "um",
            startAt: 8.26,
            endAt: 8.44,
          },
          {
            word: "novo",
            startAt: 8.44,
            endAt: 8.68,
          },
          {
            word: "aluno",
            startAt: 8.68,
            endAt: 9,
          },
          {
            word: "chamado",
            startAt: 9,
            endAt: 9.36,
          },
          {
            word: "Léo.",
            startAt: 9.36,
            endAt: 9.7,
          },
          {
            word: "Ele",
            startAt: 9.98,
            endAt: 10.2,
          },
          {
            word: "usava",
            startAt: 10.2,
            endAt: 10.6,
          },
          {
            word: "óculos",
            startAt: 10.6,
            endAt: 11.02,
          },
          {
            word: "grandes",
            startAt: 11.02,
            endAt: 11.44,
          },
          {
            word: "e",
            startAt: 11.44,
            endAt: 11.62,
          },
          {
            word: "parecia",
            startAt: 11.62,
            endAt: 12.06,
          },
          {
            word: "ter",
            startAt: 12.06,
            endAt: 12.24,
          },
          {
            word: "dificuldade",
            startAt: 12.24,
            endAt: 12.84,
          },
          {
            word: "para",
            startAt: 12.84,
            endAt: 13.14,
          },
          {
            word: "ver",
            startAt: 13.14,
            endAt: 13.34,
          },
          {
            word: "o",
            startAt: 13.34,
            endAt: 13.52,
          },
          {
            word: "quadro.",
            startAt: 13.52,
            endAt: 13.9,
          },
          {
            word: "Luísa",
            startAt: 14.14,
            endAt: 14.6,
          },
          {
            word: "ficou",
            startAt: 14.6,
            endAt: 14.84,
          },
          {
            word: "curiosa",
            startAt: 14.84,
            endAt: 15.46,
          },
          {
            word: "e",
            startAt: 15.46,
            endAt: 15.58,
          },
          {
            word: "quis",
            startAt: 15.58,
            endAt: 15.8,
          },
          {
            word: "conhecer",
            startAt: 15.8,
            endAt: 16.26,
          },
          {
            word: "seu",
            startAt: 16.26,
            endAt: 16.52,
          },
          {
            word: "novo",
            startAt: 16.52,
            endAt: 16.78,
          },
          {
            word: "amigo.",
            startAt: 16.78,
            endAt: 17.12,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Durante a aula, Luísa notou que Léo precisava se aproximar bastante do quadro para enxergar bem. Ele parecia estar forçando a visão. Após a aula, Luísa perguntou: "Léo, por que você chega tão perto do quadro?"',
      image: "/story/oculos/images/3.png",
      audio: {
        content: "/story/oculos/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Durante",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "a",
            startAt: 0.58,
            endAt: 0.68,
          },
          {
            word: "aula,",
            startAt: 0.68,
            endAt: 0.98,
          },
          {
            word: "Luísa",
            startAt: 1.38,
            endAt: 1.7,
          },
          {
            word: "notou",
            startAt: 1.7,
            endAt: 2.02,
          },
          {
            word: "que",
            startAt: 2.02,
            endAt: 2.18,
          },
          {
            word: "Léo",
            startAt: 2.18,
            endAt: 2.4,
          },
          {
            word: "precisava",
            startAt: 2.4,
            endAt: 3,
          },
          {
            word: "se",
            startAt: 3,
            endAt: 3.16,
          },
          {
            word: "aproximar",
            startAt: 3.16,
            endAt: 3.74,
          },
          {
            word: "bastante",
            startAt: 3.74,
            endAt: 4.22,
          },
          {
            word: "do",
            startAt: 4.22,
            endAt: 4.4,
          },
          {
            word: "quadro",
            startAt: 4.4,
            endAt: 4.8,
          },
          {
            word: "para",
            startAt: 4.8,
            endAt: 4.98,
          },
          {
            word: "enxergar",
            startAt: 4.98,
            endAt: 5.46,
          },
          {
            word: "bem.",
            startAt: 5.46,
            endAt: 5.7,
          },
          {
            word: "Ele",
            startAt: 5.92,
            endAt: 6.2,
          },
          {
            word: "parecia",
            startAt: 6.2,
            endAt: 6.68,
          },
          {
            word: "estar",
            startAt: 6.68,
            endAt: 6.96,
          },
          {
            word: "forçando",
            startAt: 6.96,
            endAt: 7.5,
          },
          {
            word: "a",
            startAt: 7.5,
            endAt: 7.58,
          },
          {
            word: "visão.",
            startAt: 7.58,
            endAt: 7.92,
          },
          {
            word: "Após",
            startAt: 8.24,
            endAt: 8.68,
          },
          {
            word: "a",
            startAt: 8.68,
            endAt: 8.8,
          },
          {
            word: "aula,",
            startAt: 8.8,
            endAt: 9.08,
          },
          {
            word: "Luísa",
            startAt: 9.26,
            endAt: 9.68,
          },
          {
            word: "perguntou,",
            startAt: 9.68,
            endAt: 10.24,
          },
          {
            word: "Léo,",
            startAt: 10.4,
            endAt: 10.7,
          },
          {
            word: "por",
            startAt: 10.88,
            endAt: 11.04,
          },
          {
            word: "que",
            startAt: 11.04,
            endAt: 11.12,
          },
          {
            word: "você",
            startAt: 11.12,
            endAt: 11.42,
          },
          {
            word: "chega",
            startAt: 11.42,
            endAt: 11.68,
          },
          {
            word: "tão",
            startAt: 11.68,
            endAt: 11.9,
          },
          {
            word: "perto",
            startAt: 11.9,
            endAt: 12.24,
          },
          {
            word: "do",
            startAt: 12.24,
            endAt: 12.4,
          },
          {
            word: "quadro?",
            startAt: 12.4,
            endAt: 12.86,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'Léo explicou a Luísa que tinha miopia, uma condição que faz com que ele veja melhor de perto e tenha dificuldade para enxergar de longe. "Por isso uso óculos, eles me ajudam a ver melhor!", disse ele com um sorriso.',
      image: "/story/oculos/images/4.png",
      audio: {
        content: "/story/oculos/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Léo",
            startAt: 0,
            endAt: 0.44,
          },
          {
            word: "explicou",
            startAt: 0.44,
            endAt: 0.88,
          },
          {
            word: "a",
            startAt: 0.88,
            endAt: 1,
          },
          {
            word: "Luísa",
            startAt: 1,
            endAt: 1.42,
          },
          {
            word: "que",
            startAt: 1.42,
            endAt: 1.52,
          },
          {
            word: "tinha",
            startAt: 1.52,
            endAt: 1.74,
          },
          {
            word: "miopia,",
            startAt: 1.74,
            endAt: 2.24,
          },
          {
            word: "uma",
            startAt: 2.46,
            endAt: 2.7,
          },
          {
            word: "condição",
            startAt: 2.7,
            endAt: 3.2,
          },
          {
            word: "que",
            startAt: 3.2,
            endAt: 3.38,
          },
          {
            word: "faz",
            startAt: 3.38,
            endAt: 3.7,
          },
          {
            word: "com",
            startAt: 3.7,
            endAt: 3.9,
          },
          {
            word: "que",
            startAt: 3.9,
            endAt: 4.02,
          },
          {
            word: "ele",
            startAt: 4.02,
            endAt: 4.14,
          },
          {
            word: "veja",
            startAt: 4.14,
            endAt: 4.48,
          },
          {
            word: "melhor",
            startAt: 4.48,
            endAt: 4.8,
          },
          {
            word: "de",
            startAt: 4.8,
            endAt: 5.02,
          },
          {
            word: "perto",
            startAt: 5.02,
            endAt: 5.36,
          },
          {
            word: "e",
            startAt: 5.36,
            endAt: 5.58,
          },
          {
            word: "tenha",
            startAt: 5.58,
            endAt: 5.74,
          },
          {
            word: "dificuldade",
            startAt: 5.74,
            endAt: 6.36,
          },
          {
            word: "para",
            startAt: 6.36,
            endAt: 6.64,
          },
          {
            word: "enxergar",
            startAt: 6.64,
            endAt: 7.12,
          },
          {
            word: "de",
            startAt: 7.12,
            endAt: 7.26,
          },
          {
            word: "longe.",
            startAt: 7.26,
            endAt: 7.64,
          },
          {
            word: "Por",
            startAt: 7.8,
            endAt: 8.14,
          },
          {
            word: "isso",
            startAt: 8.14,
            endAt: 8.4,
          },
          {
            word: "uso",
            startAt: 8.4,
            endAt: 8.62,
          },
          {
            word: "óculos,",
            startAt: 8.62,
            endAt: 9.12,
          },
          {
            word: "eles",
            startAt: 9.28,
            endAt: 9.5,
          },
          {
            word: "me",
            startAt: 9.5,
            endAt: 9.68,
          },
          {
            word: "ajudam",
            startAt: 9.68,
            endAt: 10.12,
          },
          {
            word: "a",
            startAt: 10.12,
            endAt: 10.24,
          },
          {
            word: "ver",
            startAt: 10.24,
            endAt: 10.42,
          },
          {
            word: "melhor,",
            startAt: 10.42,
            endAt: 10.84,
          },
          {
            word: "disse",
            startAt: 11.1,
            endAt: 11.5,
          },
          {
            word: "ele",
            startAt: 11.5,
            endAt: 11.76,
          },
          {
            word: "com",
            startAt: 11.76,
            endAt: 11.94,
          },
          {
            word: "um",
            startAt: 11.94,
            endAt: 12.06,
          },
          {
            word: "sorriso.",
            startAt: 12.06,
            endAt: 12.6,
          },
        ],
      },
    },
    {
      page: 5,
      text: "Durante a aula de ciências, a professora Ana pediu que todos observassem uma planta. Ela estava distante, Luísa decidiu então ajudar Léo descrevendo cada parte da planta para ele. Léo conseguiu entender os detalhes das folhas e como era a planta, através das palavras de Luísa.",
      image: "/story/oculos/images/5.png",
      audio: {
        content: "/story/oculos/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Durante",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "a",
            startAt: 0.58,
            endAt: 0.7,
          },
          {
            word: "aula",
            startAt: 0.7,
            endAt: 0.88,
          },
          {
            word: "de",
            startAt: 0.88,
            endAt: 1.04,
          },
          {
            word: "ciências,",
            startAt: 1.04,
            endAt: 1.6,
          },
          {
            word: "a",
            startAt: 1.72,
            endAt: 1.78,
          },
          {
            word: "professora",
            startAt: 1.78,
            endAt: 2.28,
          },
          {
            word: "Ana",
            startAt: 2.28,
            endAt: 2.48,
          },
          {
            word: "pediu",
            startAt: 2.48,
            endAt: 2.88,
          },
          {
            word: "que",
            startAt: 2.88,
            endAt: 3.04,
          },
          {
            word: "todos",
            startAt: 3.04,
            endAt: 3.48,
          },
          {
            word: "observassem",
            startAt: 3.48,
            endAt: 4.32,
          },
          {
            word: "uma",
            startAt: 4.32,
            endAt: 4.46,
          },
          {
            word: "planta.",
            startAt: 4.46,
            endAt: 4.96,
          },
          {
            word: "Ela",
            startAt: 5.1,
            endAt: 5.42,
          },
          {
            word: "estava",
            startAt: 5.42,
            endAt: 5.76,
          },
          {
            word: "distante,",
            startAt: 5.76,
            endAt: 6.36,
          },
          {
            word: "Luísa",
            startAt: 6.56,
            endAt: 6.94,
          },
          {
            word: "decidiu",
            startAt: 6.94,
            endAt: 7.42,
          },
          {
            word: "então",
            startAt: 7.42,
            endAt: 7.68,
          },
          {
            word: "ajudar",
            startAt: 7.68,
            endAt: 8.1,
          },
          {
            word: "Léo",
            startAt: 8.1,
            endAt: 8.42,
          },
          {
            word: "descrevendo",
            startAt: 8.42,
            endAt: 9.02,
          },
          {
            word: "cada",
            startAt: 9.02,
            endAt: 9.34,
          },
          {
            word: "parte",
            startAt: 9.34,
            endAt: 9.72,
          },
          {
            word: "da",
            startAt: 9.72,
            endAt: 9.88,
          },
          {
            word: "planta",
            startAt: 9.88,
            endAt: 10.24,
          },
          {
            word: "para",
            startAt: 10.24,
            endAt: 10.42,
          },
          {
            word: "ele.",
            startAt: 10.42,
            endAt: 10.74,
          },
          {
            word: "Léo",
            startAt: 11.04,
            endAt: 11.34,
          },
          {
            word: "conseguiu",
            startAt: 11.34,
            endAt: 11.84,
          },
          {
            word: "entender",
            startAt: 11.84,
            endAt: 12.18,
          },
          {
            word: "os",
            startAt: 12.18,
            endAt: 12.4,
          },
          {
            word: "detalhes",
            startAt: 12.4,
            endAt: 12.84,
          },
          {
            word: "das",
            startAt: 12.84,
            endAt: 13.02,
          },
          {
            word: "folhas",
            startAt: 13.02,
            endAt: 13.44,
          },
          {
            word: "e",
            startAt: 13.44,
            endAt: 13.6,
          },
          {
            word: "como",
            startAt: 13.6,
            endAt: 13.82,
          },
          {
            word: "era",
            startAt: 13.82,
            endAt: 14.02,
          },
          {
            word: "a",
            startAt: 14.02,
            endAt: 14.2,
          },
          {
            word: "planta,",
            startAt: 14.2,
            endAt: 14.6,
          },
          {
            word: "através",
            startAt: 14.66,
            endAt: 15.04,
          },
          {
            word: "das",
            startAt: 15.04,
            endAt: 15.32,
          },
          {
            word: "palavras",
            startAt: 15.32,
            endAt: 15.76,
          },
          {
            word: "de",
            startAt: 15.76,
            endAt: 15.94,
          },
          {
            word: "Luísa.",
            startAt: 15.94,
            endAt: 16.44,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Na aula de música, Luísa e Léo aprenderam a tocar um novo instrumento. "Ouça o som das notas, é como magia!", disse Luísa. Léo ouviu atentamente e tocou as notas, sorrindo de alegria.',
      image: "/story/oculos/images/6.png",
      audio: {
        content: "/story/oculos/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Na",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "aula",
            startAt: 0.36,
            endAt: 0.64,
          },
          {
            word: "de",
            startAt: 0.64,
            endAt: 0.82,
          },
          {
            word: "música,",
            startAt: 0.82,
            endAt: 1.26,
          },
          {
            word: "Luísa",
            startAt: 1.48,
            endAt: 1.86,
          },
          {
            word: "e",
            startAt: 1.86,
            endAt: 2,
          },
          {
            word: "Léo",
            startAt: 2,
            endAt: 2.22,
          },
          {
            word: "aprenderam",
            startAt: 2.22,
            endAt: 2.82,
          },
          {
            word: "a",
            startAt: 2.82,
            endAt: 2.92,
          },
          {
            word: "tocar",
            startAt: 2.92,
            endAt: 3.18,
          },
          {
            word: "um",
            startAt: 3.18,
            endAt: 3.38,
          },
          {
            word: "novo",
            startAt: 3.38,
            endAt: 3.66,
          },
          {
            word: "instrumento.",
            startAt: 3.66,
            endAt: 4.34,
          },
          {
            word: "Ouça",
            startAt: 4.46,
            endAt: 4.92,
          },
          {
            word: "o",
            startAt: 4.92,
            endAt: 5.04,
          },
          {
            word: "som",
            startAt: 5.04,
            endAt: 5.18,
          },
          {
            word: "das",
            startAt: 5.18,
            endAt: 5.38,
          },
          {
            word: "notas,",
            startAt: 5.38,
            endAt: 5.86,
          },
          {
            word: "é",
            startAt: 5.94,
            endAt: 6.02,
          },
          {
            word: "como",
            startAt: 6.02,
            endAt: 6.24,
          },
          {
            word: "magia,",
            startAt: 6.24,
            endAt: 6.78,
          },
          {
            word: "disse",
            startAt: 6.94,
            endAt: 7.22,
          },
          {
            word: "Luísa.",
            startAt: 7.22,
            endAt: 7.76,
          },
          {
            word: "Léo",
            startAt: 7.96,
            endAt: 8.32,
          },
          {
            word: "ouviu",
            startAt: 8.32,
            endAt: 8.62,
          },
          {
            word: "atentamente",
            startAt: 8.62,
            endAt: 9.3,
          },
          {
            word: "e",
            startAt: 9.3,
            endAt: 9.46,
          },
          {
            word: "tocou",
            startAt: 9.46,
            endAt: 9.72,
          },
          {
            word: "as",
            startAt: 9.72,
            endAt: 9.86,
          },
          {
            word: "notas,",
            startAt: 9.86,
            endAt: 10.28,
          },
          {
            word: "sorrindo",
            startAt: 10.4,
            endAt: 10.86,
          },
          {
            word: "de",
            startAt: 10.86,
            endAt: 11,
          },
          {
            word: "alegria.",
            startAt: 11,
            endAt: 11.46,
          },
        ],
      },
    },
    {
      page: 7,
      text: "Durante o recreio, Luísa e Léo decidiram brincar de contar histórias. Luísa descrevia os personagens e os cenários com detalhes. Léo usava sua imaginação para criar aventuras incríveis, mostrando que todos podiam se divertir juntos.",
      image: "/story/oculos/images/7.jpeg",
      audio: {
        content: "/story/oculos/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Durante",
            startAt: 0,
            endAt: 0.56,
          },
          {
            word: "o",
            startAt: 0.56,
            endAt: 0.66,
          },
          {
            word: "recreio,",
            startAt: 0.66,
            endAt: 1.14,
          },
          {
            word: "Luísa",
            startAt: 1.26,
            endAt: 1.62,
          },
          {
            word: "e",
            startAt: 1.62,
            endAt: 1.76,
          },
          {
            word: "Léo",
            startAt: 1.76,
            endAt: 1.94,
          },
          {
            word: "decidiram",
            startAt: 1.94,
            endAt: 2.5,
          },
          {
            word: "brincar",
            startAt: 2.5,
            endAt: 2.98,
          },
          {
            word: "de",
            startAt: 2.98,
            endAt: 3.1,
          },
          {
            word: "contar",
            startAt: 3.1,
            endAt: 3.4,
          },
          {
            word: "histórias.",
            startAt: 3.4,
            endAt: 4.04,
          },
          {
            word: "Luísa",
            startAt: 4.26,
            endAt: 4.82,
          },
          {
            word: "descrevia",
            startAt: 4.82,
            endAt: 5.36,
          },
          {
            word: "os",
            startAt: 5.36,
            endAt: 5.54,
          },
          {
            word: "personagens",
            startAt: 5.54,
            endAt: 6.28,
          },
          {
            word: "e",
            startAt: 6.28,
            endAt: 6.46,
          },
          {
            word: "os",
            startAt: 6.46,
            endAt: 6.58,
          },
          {
            word: "cenários",
            startAt: 6.58,
            endAt: 7.02,
          },
          {
            word: "com",
            startAt: 7.02,
            endAt: 7.26,
          },
          {
            word: "detalhes.",
            startAt: 7.26,
            endAt: 7.84,
          },
          {
            word: "Léo",
            startAt: 8.14,
            endAt: 8.4,
          },
          {
            word: "usava",
            startAt: 8.4,
            endAt: 8.76,
          },
          {
            word: "sua",
            startAt: 8.76,
            endAt: 8.96,
          },
          {
            word: "imaginação",
            startAt: 8.96,
            endAt: 9.6,
          },
          {
            word: "para",
            startAt: 9.6,
            endAt: 9.88,
          },
          {
            word: "criar",
            startAt: 9.88,
            endAt: 10.2,
          },
          {
            word: "aventuras",
            startAt: 10.2,
            endAt: 10.76,
          },
          {
            word: "incríveis,",
            startAt: 10.76,
            endAt: 11.34,
          },
          {
            word: "mostrando",
            startAt: 11.62,
            endAt: 12.12,
          },
          {
            word: "que",
            startAt: 12.12,
            endAt: 12.3,
          },
          {
            word: "todos",
            startAt: 12.3,
            endAt: 12.7,
          },
          {
            word: "podiam",
            startAt: 12.7,
            endAt: 13.18,
          },
          {
            word: "se",
            startAt: 13.18,
            endAt: 13.32,
          },
          {
            word: "divertir",
            startAt: 13.32,
            endAt: 13.84,
          },
          {
            word: "juntos.",
            startAt: 13.84,
            endAt: 14.2,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Na aula de artes, Luiz ajudou Léo a sentir as texturas das diferentes tintas e materiais. "Essa tinta é áspera, e essa é suave", explicou ela. Juntos, eles criaram uma pintura colorida e única.',
      image: "/story/oculos/images/8.png",
      audio: {
        content: "/story/oculos/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Na",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "aula",
            startAt: 0.38,
            endAt: 0.62,
          },
          {
            word: "de",
            startAt: 0.62,
            endAt: 0.82,
          },
          {
            word: "artes,",
            startAt: 0.82,
            endAt: 1.28,
          },
          {
            word: "Luiz",
            startAt: 1.46,
            endAt: 1.72,
          },
          {
            word: "ajudou",
            startAt: 1.72,
            endAt: 2.14,
          },
          {
            word: "Léo",
            startAt: 2.14,
            endAt: 2.42,
          },
          {
            word: "a",
            startAt: 2.42,
            endAt: 2.56,
          },
          {
            word: "sentir",
            startAt: 2.56,
            endAt: 2.82,
          },
          {
            word: "as",
            startAt: 2.82,
            endAt: 3,
          },
          {
            word: "texturas",
            startAt: 3,
            endAt: 3.48,
          },
          {
            word: "das",
            startAt: 3.48,
            endAt: 3.68,
          },
          {
            word: "diferentes",
            startAt: 3.68,
            endAt: 4.2,
          },
          {
            word: "tintas",
            startAt: 4.2,
            endAt: 4.7,
          },
          {
            word: "e",
            startAt: 4.7,
            endAt: 4.82,
          },
          {
            word: "materiais.",
            startAt: 4.82,
            endAt: 5.52,
          },
          {
            word: "Essa",
            startAt: 5.7,
            endAt: 6.08,
          },
          {
            word: "tinta",
            startAt: 6.08,
            endAt: 6.42,
          },
          {
            word: "é",
            startAt: 6.42,
            endAt: 6.52,
          },
          {
            word: "áspera,",
            startAt: 6.52,
            endAt: 7.08,
          },
          {
            word: "e",
            startAt: 7.16,
            endAt: 7.4,
          },
          {
            word: "essa",
            startAt: 7.4,
            endAt: 7.6,
          },
          {
            word: "é",
            startAt: 7.6,
            endAt: 7.72,
          },
          {
            word: "suave,",
            startAt: 7.72,
            endAt: 8.16,
          },
          {
            word: "explicou",
            startAt: 8.3,
            endAt: 8.82,
          },
          {
            word: "ela.",
            startAt: 8.82,
            endAt: 9.1,
          },
          {
            word: "Juntos,",
            startAt: 9.4,
            endAt: 9.96,
          },
          {
            word: "eles",
            startAt: 10.06,
            endAt: 10.26,
          },
          {
            word: "criaram",
            startAt: 10.26,
            endAt: 10.7,
          },
          {
            word: "uma",
            startAt: 10.7,
            endAt: 10.86,
          },
          {
            word: "pintura",
            startAt: 10.86,
            endAt: 11.26,
          },
          {
            word: "colorida",
            startAt: 11.26,
            endAt: 11.78,
          },
          {
            word: "e",
            startAt: 11.78,
            endAt: 11.94,
          },
          {
            word: "única.",
            startAt: 11.94,
            endAt: 12.28,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'Enquanto exploravam a biblioteca da escola, Luísa encontrou livros com letras grandes e mostrou a Léo como lê-los. "Esses livros são feitos para quem tem dificuldade de enxergar de longe", disse ela. Léo ficou maravilhado com os livros.',
      image: "/story/oculos/images/9.png",
      audio: {
        content: "/story/oculos/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Enquanto",
            startAt: 0,
            endAt: 0.6,
          },
          {
            word: "exploravam",
            startAt: 0.6,
            endAt: 1.24,
          },
          {
            word: "a",
            startAt: 1.24,
            endAt: 1.38,
          },
          {
            word: "biblioteca",
            startAt: 1.38,
            endAt: 1.96,
          },
          {
            word: "da",
            startAt: 1.96,
            endAt: 2.1,
          },
          {
            word: "escola,",
            startAt: 2.1,
            endAt: 2.58,
          },
          {
            word: "Luísa",
            startAt: 2.92,
            endAt: 3.28,
          },
          {
            word: "encontrou",
            startAt: 3.28,
            endAt: 3.7,
          },
          {
            word: "livros",
            startAt: 3.7,
            endAt: 4.14,
          },
          {
            word: "com",
            startAt: 4.14,
            endAt: 4.32,
          },
          {
            word: "letras",
            startAt: 4.32,
            endAt: 4.72,
          },
          {
            word: "grandes",
            startAt: 4.72,
            endAt: 5.12,
          },
          {
            word: "e",
            startAt: 5.12,
            endAt: 5.32,
          },
          {
            word: "mostrou",
            startAt: 5.32,
            endAt: 5.68,
          },
          {
            word: "a",
            startAt: 5.68,
            endAt: 5.84,
          },
          {
            word: "Léo",
            startAt: 5.84,
            endAt: 6.02,
          },
          {
            word: "como",
            startAt: 6.02,
            endAt: 6.28,
          },
          {
            word: "lê",
            startAt: 6.28,
            endAt: 6.54,
          },
          {
            word: "-los.",
            startAt: 6.54,
            endAt: 6.72,
          },
          {
            word: "Esses",
            startAt: 6.94,
            endAt: 7.42,
          },
          {
            word: "livros",
            startAt: 7.42,
            endAt: 7.78,
          },
          {
            word: "são",
            startAt: 7.78,
            endAt: 7.94,
          },
          {
            word: "feitos",
            startAt: 7.94,
            endAt: 8.34,
          },
          {
            word: "para",
            startAt: 8.34,
            endAt: 8.58,
          },
          {
            word: "quem",
            startAt: 8.58,
            endAt: 8.76,
          },
          {
            word: "tem",
            startAt: 8.76,
            endAt: 8.94,
          },
          {
            word: "dificuldade",
            startAt: 8.94,
            endAt: 9.62,
          },
          {
            word: "de",
            startAt: 9.62,
            endAt: 9.82,
          },
          {
            word: "enxergar",
            startAt: 9.82,
            endAt: 10.32,
          },
          {
            word: "de",
            startAt: 10.32,
            endAt: 10.48,
          },
          {
            word: "longe,",
            startAt: 10.48,
            endAt: 10.86,
          },
          {
            word: "disse",
            startAt: 11.02,
            endAt: 11.22,
          },
          {
            word: "ela.",
            startAt: 11.22,
            endAt: 11.54,
          },
          {
            word: "Léo",
            startAt: 11.84,
            endAt: 12.12,
          },
          {
            word: "ficou",
            startAt: 12.12,
            endAt: 12.38,
          },
          {
            word: "maravilhado",
            startAt: 12.38,
            endAt: 13.04,
          },
          {
            word: "com",
            startAt: 13.04,
            endAt: 13.2,
          },
          {
            word: "os",
            startAt: 13.2,
            endAt: 13.36,
          },
          {
            word: "livros.",
            startAt: 13.36,
            endAt: 13.8,
          },
        ],
      },
    },
    {
      page: 10,
      text: 'Um dia, na aula de matemática, Luísa percebeu que estava tendo dificuldade para enxergar os números no quadro. Ela piscava os olhos e se aproximava da lousa, mas ainda assim não conseguia ver claramente. "Será que também estou com miopia?" pensou Luísa.',
      image: "/story/oculos/images/10.png",
      audio: {
        content: "/story/oculos/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Um",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "dia,",
            startAt: 0.36,
            endAt: 0.64,
          },
          {
            word: "na",
            startAt: 0.64,
            endAt: 0.86,
          },
          {
            word: "aula",
            startAt: 0.86,
            endAt: 1.1,
          },
          {
            word: "de",
            startAt: 1.1,
            endAt: 1.26,
          },
          {
            word: "matemática,",
            startAt: 1.26,
            endAt: 1.98,
          },
          {
            word: "Luísa",
            startAt: 2.34,
            endAt: 2.68,
          },
          {
            word: "percebeu",
            startAt: 2.68,
            endAt: 3.2,
          },
          {
            word: "que",
            startAt: 3.2,
            endAt: 3.34,
          },
          {
            word: "estava",
            startAt: 3.34,
            endAt: 3.6,
          },
          {
            word: "tendo",
            startAt: 3.6,
            endAt: 3.9,
          },
          {
            word: "dificuldade",
            startAt: 3.9,
            endAt: 4.52,
          },
          {
            word: "para",
            startAt: 4.52,
            endAt: 4.8,
          },
          {
            word: "enxergar",
            startAt: 4.8,
            endAt: 5.3,
          },
          {
            word: "os",
            startAt: 5.3,
            endAt: 5.5,
          },
          {
            word: "números",
            startAt: 5.5,
            endAt: 5.8,
          },
          {
            word: "no",
            startAt: 5.8,
            endAt: 6.02,
          },
          {
            word: "quadro.",
            startAt: 6.02,
            endAt: 6.5,
          },
          {
            word: "Ela",
            startAt: 6.62,
            endAt: 6.96,
          },
          {
            word: "piscava",
            startAt: 6.96,
            endAt: 7.44,
          },
          {
            word: "os",
            startAt: 7.44,
            endAt: 7.62,
          },
          {
            word: "olhos",
            startAt: 7.62,
            endAt: 7.92,
          },
          {
            word: "e",
            startAt: 7.92,
            endAt: 8.06,
          },
          {
            word: "se",
            startAt: 8.06,
            endAt: 8.16,
          },
          {
            word: "aproximava",
            startAt: 8.16,
            endAt: 8.74,
          },
          {
            word: "da",
            startAt: 8.74,
            endAt: 8.9,
          },
          {
            word: "lousa,",
            startAt: 8.9,
            endAt: 9.34,
          },
          {
            word: "mas",
            startAt: 9.46,
            endAt: 9.74,
          },
          {
            word: "ainda",
            startAt: 9.74,
            endAt: 10,
          },
          {
            word: "assim",
            startAt: 10,
            endAt: 10.28,
          },
          {
            word: "não",
            startAt: 10.28,
            endAt: 10.5,
          },
          {
            word: "conseguia",
            startAt: 10.5,
            endAt: 11.06,
          },
          {
            word: "ver",
            startAt: 11.06,
            endAt: 11.26,
          },
          {
            word: "claramente.",
            startAt: 11.26,
            endAt: 11.98,
          },
          {
            word: "Será",
            startAt: 12.24,
            endAt: 12.64,
          },
          {
            word: "que",
            startAt: 12.64,
            endAt: 12.82,
          },
          {
            word: "também",
            startAt: 12.82,
            endAt: 13.12,
          },
          {
            word: "estou",
            startAt: 13.12,
            endAt: 13.44,
          },
          {
            word: "com",
            startAt: 13.44,
            endAt: 13.68,
          },
          {
            word: "miopia?",
            startAt: 13.68,
            endAt: 14.14,
          },
          {
            word: "Pensou",
            startAt: 14.38,
            endAt: 14.88,
          },
          {
            word: "Luísa.",
            startAt: 14.88,
            endAt: 15.38,
          },
        ],
      },
    },
    {
      page: 11,
      text: 'Luísa contou para a professora Ana sobre sua dificuldade. A professora sugeriu que Luísa fizesse um exame de vista. "Não se preocupe, Luísa. Vamos descobrir o que está acontecendo e encontrar uma solução", disse a professora.',
      image: "/story/oculos/images/11.png",
      audio: {
        content: "/story/oculos/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Luísa",
            startAt: 0,
            endAt: 0.64,
          },
          {
            word: "contou",
            startAt: 0.64,
            endAt: 1,
          },
          {
            word: "para",
            startAt: 1,
            endAt: 1.2,
          },
          {
            word: "a",
            startAt: 1.2,
            endAt: 1.36,
          },
          {
            word: "professora",
            startAt: 1.36,
            endAt: 1.8,
          },
          {
            word: "Ana",
            startAt: 1.8,
            endAt: 2.08,
          },
          {
            word: "sobre",
            startAt: 2.08,
            endAt: 2.4,
          },
          {
            word: "sua",
            startAt: 2.4,
            endAt: 2.64,
          },
          {
            word: "dificuldade.",
            startAt: 2.64,
            endAt: 3.36,
          },
          {
            word: "A",
            startAt: 3.58,
            endAt: 3.82,
          },
          {
            word: "professora",
            startAt: 3.82,
            endAt: 4.32,
          },
          {
            word: "sugeriu",
            startAt: 4.32,
            endAt: 4.8,
          },
          {
            word: "que",
            startAt: 4.8,
            endAt: 4.96,
          },
          {
            word: "Luísa",
            startAt: 4.96,
            endAt: 5.42,
          },
          {
            word: "fizesse",
            startAt: 5.42,
            endAt: 5.88,
          },
          {
            word: "um",
            startAt: 5.88,
            endAt: 5.98,
          },
          {
            word: "exame",
            startAt: 5.98,
            endAt: 6.28,
          },
          {
            word: "de",
            startAt: 6.28,
            endAt: 6.44,
          },
          {
            word: "vista.",
            startAt: 6.44,
            endAt: 6.84,
          },
          {
            word: "Não",
            startAt: 7.06,
            endAt: 7.36,
          },
          {
            word: "se",
            startAt: 7.36,
            endAt: 7.52,
          },
          {
            word: "preocupe,",
            startAt: 7.52,
            endAt: 8.04,
          },
          {
            word: "Luísa.",
            startAt: 8.16,
            endAt: 8.52,
          },
          {
            word: "Vamos",
            startAt: 8.66,
            endAt: 9.1,
          },
          {
            word: "descobrir",
            startAt: 9.1,
            endAt: 9.58,
          },
          {
            word: "o",
            startAt: 9.58,
            endAt: 9.8,
          },
          {
            word: "que",
            startAt: 9.8,
            endAt: 9.88,
          },
          {
            word: "está",
            startAt: 9.88,
            endAt: 10.08,
          },
          {
            word: "acontecendo",
            startAt: 10.08,
            endAt: 10.68,
          },
          {
            word: "e",
            startAt: 10.68,
            endAt: 10.9,
          },
          {
            word: "encontrar",
            startAt: 10.9,
            endAt: 11.3,
          },
          {
            word: "uma",
            startAt: 11.3,
            endAt: 11.54,
          },
          {
            word: "solução,",
            startAt: 11.54,
            endAt: 12.1,
          },
          {
            word: "disse",
            startAt: 12.24,
            endAt: 12.42,
          },
          {
            word: "a",
            startAt: 12.42,
            endAt: 12.56,
          },
          {
            word: "professora.",
            startAt: 12.56,
            endAt: 13.16,
          },
        ],
      },
    },
    {
      page: 12,
      text: 'Após o exame, Luísa descobriu que também tinha miopia e precisava usar óculos. Quando voltou para a escola com seus novos óculos, Léo sorriu e disse: "Agora somos parceiros de óculos!"',
      image: "/story/oculos/images/12.png",
      audio: {
        content: "/story/oculos/audios/11.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Após",
            startAt: 0,
            endAt: 0.6,
          },
          {
            word: "o",
            startAt: 0.6,
            endAt: 0.74,
          },
          {
            word: "exame,",
            startAt: 0.74,
            endAt: 1.14,
          },
          {
            word: "Luísa",
            startAt: 1.32,
            endAt: 1.68,
          },
          {
            word: "descobriu",
            startAt: 1.68,
            endAt: 2.24,
          },
          {
            word: "que",
            startAt: 2.24,
            endAt: 2.38,
          },
          {
            word: "também",
            startAt: 2.38,
            endAt: 2.7,
          },
          {
            word: "tinha",
            startAt: 2.7,
            endAt: 3,
          },
          {
            word: "miopia",
            startAt: 3,
            endAt: 3.46,
          },
          {
            word: "e",
            startAt: 3.46,
            endAt: 3.68,
          },
          {
            word: "precisava",
            startAt: 3.68,
            endAt: 4.24,
          },
          {
            word: "usar",
            startAt: 4.24,
            endAt: 4.5,
          },
          {
            word: "óculos.",
            startAt: 4.5,
            endAt: 4.96,
          },
          {
            word: "Quando",
            startAt: 5.24,
            endAt: 5.56,
          },
          {
            word: "voltou",
            startAt: 5.56,
            endAt: 5.98,
          },
          {
            word: "para",
            startAt: 5.98,
            endAt: 6.16,
          },
          {
            word: "a",
            startAt: 6.16,
            endAt: 6.34,
          },
          {
            word: "escola",
            startAt: 6.34,
            endAt: 6.6,
          },
          {
            word: "com",
            startAt: 6.6,
            endAt: 6.8,
          },
          {
            word: "seus",
            startAt: 6.8,
            endAt: 7.06,
          },
          {
            word: "novos",
            startAt: 7.06,
            endAt: 7.44,
          },
          {
            word: "óculos,",
            startAt: 7.44,
            endAt: 7.9,
          },
          {
            word: "Léo",
            startAt: 8.08,
            endAt: 8.28,
          },
          {
            word: "sorriu",
            startAt: 8.28,
            endAt: 8.6,
          },
          {
            word: "e",
            startAt: 8.6,
            endAt: 8.68,
          },
          {
            word: "disse,",
            startAt: 8.68,
            endAt: 9.04,
          },
          {
            word: "Agora",
            startAt: 9.18,
            endAt: 9.56,
          },
          {
            word: "somos",
            startAt: 9.56,
            endAt: 9.94,
          },
          {
            word: "parceiros",
            startAt: 9.94,
            endAt: 10.5,
          },
          {
            word: "de",
            startAt: 10.5,
            endAt: 10.64,
          },
          {
            word: "óculos.",
            startAt: 10.64,
            endAt: 11.1,
          },
        ],
      },
    },
    {
      page: 13,
      text: "Desde então, Léo e Luísa se tornaram grandes amigos e exploradores na escola. Eles ensinaram a todos os colegas que com amizade e compreensão, todas as dificuldades podem ser superadas. Espero que essa história inspire você sobre a dificuldade visual e a importância da amizade e compreensão.",
      image: "/story/oculos/images/13.png",
      audio: {
        content: "/story/oculos/audios/12.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Desde",
            startAt: 0,
            endAt: 0.52,
          },
          {
            word: "então,",
            startAt: 0.52,
            endAt: 0.9,
          },
          {
            word: "Léo",
            startAt: 1.14,
            endAt: 1.38,
          },
          {
            word: "e",
            startAt: 1.38,
            endAt: 1.56,
          },
          {
            word: "Luísa",
            startAt: 1.56,
            endAt: 1.96,
          },
          {
            word: "se",
            startAt: 1.96,
            endAt: 2.12,
          },
          {
            word: "tornaram",
            startAt: 2.12,
            endAt: 2.56,
          },
          {
            word: "grandes",
            startAt: 2.56,
            endAt: 2.96,
          },
          {
            word: "amigos",
            startAt: 2.96,
            endAt: 3.4,
          },
          {
            word: "e",
            startAt: 3.4,
            endAt: 3.62,
          },
          {
            word: "exploradores",
            startAt: 3.62,
            endAt: 4.32,
          },
          {
            word: "na",
            startAt: 4.32,
            endAt: 4.48,
          },
          {
            word: "escola.",
            startAt: 4.48,
            endAt: 4.96,
          },
          {
            word: "Eles",
            startAt: 5.2,
            endAt: 5.58,
          },
          {
            word: "ensinaram",
            startAt: 5.58,
            endAt: 6.16,
          },
          {
            word: "a",
            startAt: 6.16,
            endAt: 6.3,
          },
          {
            word: "todos",
            startAt: 6.3,
            endAt: 6.58,
          },
          {
            word: "os",
            startAt: 6.58,
            endAt: 6.8,
          },
          {
            word: "colegas",
            startAt: 6.8,
            endAt: 7.3,
          },
          {
            word: "que",
            startAt: 7.3,
            endAt: 7.44,
          },
          {
            word: "com",
            startAt: 7.44,
            endAt: 7.6,
          },
          {
            word: "amizade",
            startAt: 7.6,
            endAt: 8.14,
          },
          {
            word: "e",
            startAt: 8.14,
            endAt: 8.32,
          },
          {
            word: "compreensão,",
            startAt: 8.32,
            endAt: 8.96,
          },
          {
            word: "todas",
            startAt: 9.16,
            endAt: 9.48,
          },
          {
            word: "as",
            startAt: 9.48,
            endAt: 9.68,
          },
          {
            word: "dificuldades",
            startAt: 9.68,
            endAt: 10.36,
          },
          {
            word: "podem",
            startAt: 10.36,
            endAt: 10.68,
          },
          {
            word: "ser",
            startAt: 10.68,
            endAt: 10.94,
          },
          {
            word: "superadas.",
            startAt: 10.94,
            endAt: 11.6,
          },
          {
            word: "Espero",
            startAt: 11.94,
            endAt: 12.36,
          },
          {
            word: "que",
            startAt: 12.36,
            endAt: 12.52,
          },
          {
            word: "essa",
            startAt: 12.52,
            endAt: 12.7,
          },
          {
            word: "história",
            startAt: 12.7,
            endAt: 13.08,
          },
          {
            word: "inspire",
            startAt: 13.08,
            endAt: 13.5,
          },
          {
            word: "você",
            startAt: 13.5,
            endAt: 13.78,
          },
          {
            word: "sobre",
            startAt: 13.78,
            endAt: 14.14,
          },
          {
            word: "a",
            startAt: 14.14,
            endAt: 14.26,
          },
          {
            word: "dificuldade",
            startAt: 14.26,
            endAt: 14.82,
          },
          {
            word: "visual",
            startAt: 14.82,
            endAt: 15.32,
          },
          {
            word: "e",
            startAt: 15.32,
            endAt: 15.6,
          },
          {
            word: "a",
            startAt: 15.6,
            endAt: 15.68,
          },
          {
            word: "importância",
            startAt: 15.68,
            endAt: 16.24,
          },
          {
            word: "da",
            startAt: 16.24,
            endAt: 16.36,
          },
          {
            word: "amizade",
            startAt: 16.36,
            endAt: 16.86,
          },
          {
            word: "e",
            startAt: 16.86,
            endAt: 16.98,
          },
          {
            word: "compreensão.",
            startAt: 16.98,
            endAt: 17.64,
          },
        ],
      },
    },
  ],
};

export default oculosStory;
