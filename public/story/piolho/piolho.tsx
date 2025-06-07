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

const piolhoStory: Story = {
  title: "A história de Lucas no combate aos piolhos",
  slug: "lucas-piolho",
  pages: [
    {
      page: 1,
      text: "Olá, vamos começar a história de Lucas no combate aos piolhos. Clique em Avançar.",
      image: "/story/piolho/images/capa.png",
      audio: {
        content: "/story/piolho/audios/0.mp3",
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
            endAt: 1.74,
          },
          {
            word: "história",
            startAt: 1.74,
            endAt: 2.04,
          },
          {
            word: "de",
            startAt: 2.04,
            endAt: 2.22,
          },
          {
            word: "Lucas",
            startAt: 2.22,
            endAt: 2.56,
          },
          {
            word: "no",
            startAt: 2.56,
            endAt: 2.74,
          },
          {
            word: "combate",
            startAt: 2.74,
            endAt: 3.22,
          },
          {
            word: "aos",
            startAt: 3.22,
            endAt: 3.4,
          },
          {
            word: "piolhos.",
            startAt: 3.4,
            endAt: 3.92,
          },
          {
            word: "Clique",
            startAt: 4.14,
            endAt: 4.5,
          },
          {
            word: "em",
            startAt: 4.5,
            endAt: 4.62,
          },
          {
            word: "Avançar.",
            startAt: 4.62,
            endAt: 5.16,
          },
        ],
      },
    },
    {
      page: 2,
      text: "Era uma vez, um menino chamado Lucas que adorava brincar no parque com seus amigos. Um dia, ele começou a sentir uma coceira na cabeça e ficou curioso para descobrir o que estava acontecendo.",
      image: "/story/piolho/images/2.png",
      audio: {
        content: "/story/piolho/audios/1.mp3",
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
            endAt: 0.92,
          },
          {
            word: "um",
            startAt: 1.12,
            endAt: 1.38,
          },
          {
            word: "menino",
            startAt: 1.38,
            endAt: 1.74,
          },
          {
            word: "chamado",
            startAt: 1.74,
            endAt: 2.1,
          },
          {
            word: "Lucas",
            startAt: 2.1,
            endAt: 2.58,
          },
          {
            word: "que",
            startAt: 2.58,
            endAt: 2.74,
          },
          {
            word: "adorava",
            startAt: 2.74,
            endAt: 3.1,
          },
          {
            word: "brincar",
            startAt: 3.1,
            endAt: 3.54,
          },
          {
            word: "no",
            startAt: 3.54,
            endAt: 3.68,
          },
          {
            word: "parque",
            startAt: 3.68,
            endAt: 4.04,
          },
          {
            word: "com",
            startAt: 4.04,
            endAt: 4.2,
          },
          {
            word: "seus",
            startAt: 4.2,
            endAt: 4.46,
          },
          {
            word: "amigos.",
            startAt: 4.46,
            endAt: 4.84,
          },
          {
            word: "Um",
            startAt: 5.5,
            endAt: 6.06,
          },
          {
            word: "dia,",
            startAt: 6.06,
            endAt: 6.38,
          },
          {
            word: "ele",
            startAt: 6.58,
            endAt: 6.8,
          },
          {
            word: "começou",
            startAt: 6.8,
            endAt: 7.18,
          },
          {
            word: "a",
            startAt: 7.18,
            endAt: 7.34,
          },
          {
            word: "sentir",
            startAt: 7.34,
            endAt: 7.58,
          },
          {
            word: "uma",
            startAt: 7.58,
            endAt: 7.8,
          },
          {
            word: "coceira",
            startAt: 7.8,
            endAt: 8.22,
          },
          {
            word: "na",
            startAt: 8.22,
            endAt: 8.34,
          },
          {
            word: "cabeça",
            startAt: 8.34,
            endAt: 8.7,
          },
          {
            word: "e",
            startAt: 8.7,
            endAt: 8.92,
          },
          {
            word: "ficou",
            startAt: 8.92,
            endAt: 9.18,
          },
          {
            word: "curioso",
            startAt: 9.18,
            endAt: 9.76,
          },
          {
            word: "para",
            startAt: 9.76,
            endAt: 9.9,
          },
          {
            word: "descobrir",
            startAt: 9.9,
            endAt: 10.34,
          },
          {
            word: "o",
            startAt: 10.34,
            endAt: 10.52,
          },
          {
            word: "que",
            startAt: 10.52,
            endAt: 10.62,
          },
          {
            word: "estava",
            startAt: 10.62,
            endAt: 10.9,
          },
          {
            word: "acontecendo.",
            startAt: 10.9,
            endAt: 11.38,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Lucas foi falar com sua mãe, Dona Clara, que olhou com atenção e disse: "Lucas, você está com piolhos! Não se preocupe, vamos cuidar disso juntos." Lucas ficou um pouco preocupado, mas decidiu que queria aprender mais sobre os piolhos.',
      image: "/story/piolho/images/3.jpeg",
      audio: {
        content: "/story/piolho/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Lucas",
            startAt: 0,
            endAt: 0.56,
          },
          {
            word: "foi",
            startAt: 0.56,
            endAt: 0.8,
          },
          {
            word: "falar",
            startAt: 0.8,
            endAt: 1.1,
          },
          {
            word: "com",
            startAt: 1.1,
            endAt: 1.26,
          },
          {
            word: "sua",
            startAt: 1.26,
            endAt: 1.52,
          },
          {
            word: "mãe,",
            startAt: 1.52,
            endAt: 1.78,
          },
          {
            word: "Dona",
            startAt: 2.12,
            endAt: 2.42,
          },
          {
            word: "Clara,",
            startAt: 2.42,
            endAt: 2.68,
          },
          {
            word: "que",
            startAt: 2.96,
            endAt: 3.12,
          },
          {
            word: "olhou",
            startAt: 3.12,
            endAt: 3.4,
          },
          {
            word: "com",
            startAt: 3.4,
            endAt: 3.56,
          },
          {
            word: "atenção",
            startAt: 3.56,
            endAt: 4,
          },
          {
            word: "e",
            startAt: 4,
            endAt: 4.22,
          },
          {
            word: "disse,",
            startAt: 4.22,
            endAt: 4.56,
          },
          {
            word: "Lucas,",
            startAt: 4.74,
            endAt: 5.2,
          },
          {
            word: "você",
            startAt: 5.48,
            endAt: 5.92,
          },
          {
            word: "está",
            startAt: 5.92,
            endAt: 6.16,
          },
          {
            word: "com",
            startAt: 6.16,
            endAt: 6.36,
          },
          {
            word: "piolhos.",
            startAt: 6.36,
            endAt: 6.88,
          },
          {
            word: "Não",
            startAt: 7.52,
            endAt: 8.08,
          },
          {
            word: "se",
            startAt: 8.08,
            endAt: 8.24,
          },
          {
            word: "preocupe,",
            startAt: 8.24,
            endAt: 8.74,
          },
          {
            word: "vamos",
            startAt: 9.04,
            endAt: 9.32,
          },
          {
            word: "cuidar",
            startAt: 9.32,
            endAt: 9.76,
          },
          {
            word: "disso",
            startAt: 9.76,
            endAt: 10.06,
          },
          {
            word: "juntos.",
            startAt: 10.06,
            endAt: 10.46,
          },
          {
            word: "Lucas",
            startAt: 11.38,
            endAt: 11.94,
          },
          {
            word: "ficou",
            startAt: 11.94,
            endAt: 12.24,
          },
          {
            word: "um",
            startAt: 12.24,
            endAt: 12.4,
          },
          {
            word: "pouco",
            startAt: 12.4,
            endAt: 12.66,
          },
          {
            word: "preocupado,",
            startAt: 12.66,
            endAt: 13.32,
          },
          {
            word: "mas",
            startAt: 13.54,
            endAt: 13.8,
          },
          {
            word: "decidiu",
            startAt: 13.8,
            endAt: 14.24,
          },
          {
            word: "que",
            startAt: 14.24,
            endAt: 14.38,
          },
          {
            word: "queria",
            startAt: 14.38,
            endAt: 14.62,
          },
          {
            word: "aprender",
            startAt: 14.62,
            endAt: 14.94,
          },
          {
            word: "mais",
            startAt: 14.94,
            endAt: 15.38,
          },
          {
            word: "sobre",
            startAt: 15.38,
            endAt: 15.62,
          },
          {
            word: "os",
            startAt: 15.62,
            endAt: 15.74,
          },
          {
            word: "piolhos.",
            startAt: 15.74,
            endAt: 16.22,
          },
        ],
      },
    },
    {
      page: 4,
      text: "Dona Clara explicou que os piolhos são pequenos insetos que gostam de viver no cabelo e se alimentam de sangue. Eles se espalham de uma cabeça para outra quando encostamos ou compartilhamos pentes e chapéus, disse ela.",
      image: "/story/piolho/images/4.png",
      audio: {
        content: "/story/piolho/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Dona",
            startAt: 0,
            endAt: 0.6,
          },
          {
            word: "Clara",
            startAt: 0.6,
            endAt: 0.78,
          },
          {
            word: "explicou",
            startAt: 0.78,
            endAt: 1.3,
          },
          {
            word: "que",
            startAt: 1.3,
            endAt: 1.42,
          },
          {
            word: "os",
            startAt: 1.42,
            endAt: 1.58,
          },
          {
            word: "piolhos",
            startAt: 1.58,
            endAt: 1.9,
          },
          {
            word: "são",
            startAt: 1.9,
            endAt: 2.06,
          },
          {
            word: "pequenos",
            startAt: 2.06,
            endAt: 2.5,
          },
          {
            word: "insetos",
            startAt: 2.5,
            endAt: 3.04,
          },
          {
            word: "que",
            startAt: 3.04,
            endAt: 3.24,
          },
          {
            word: "gostam",
            startAt: 3.24,
            endAt: 3.68,
          },
          {
            word: "de",
            startAt: 3.68,
            endAt: 3.78,
          },
          {
            word: "viver",
            startAt: 3.78,
            endAt: 4.08,
          },
          {
            word: "no",
            startAt: 4.08,
            endAt: 4.24,
          },
          {
            word: "cabelo",
            startAt: 4.24,
            endAt: 4.64,
          },
          {
            word: "e",
            startAt: 4.64,
            endAt: 4.74,
          },
          {
            word: "se",
            startAt: 4.74,
            endAt: 4.84,
          },
          {
            word: "alimentam",
            startAt: 4.84,
            endAt: 5.32,
          },
          {
            word: "de",
            startAt: 5.32,
            endAt: 5.44,
          },
          {
            word: "sangue.",
            startAt: 5.44,
            endAt: 5.98,
          },
          {
            word: "Eles",
            startAt: 6.46,
            endAt: 7.06,
          },
          {
            word: "se",
            startAt: 7.06,
            endAt: 7.22,
          },
          {
            word: "espalham",
            startAt: 7.22,
            endAt: 7.62,
          },
          {
            word: "de",
            startAt: 7.62,
            endAt: 7.74,
          },
          {
            word: "uma",
            startAt: 7.74,
            endAt: 7.86,
          },
          {
            word: "cabeça",
            startAt: 7.86,
            endAt: 8.34,
          },
          {
            word: "para",
            startAt: 8.34,
            endAt: 8.56,
          },
          {
            word: "outra",
            startAt: 8.56,
            endAt: 8.86,
          },
          {
            word: "quando",
            startAt: 8.86,
            endAt: 9.12,
          },
          {
            word: "encostamos",
            startAt: 9.12,
            endAt: 9.66,
          },
          {
            word: "ou",
            startAt: 9.66,
            endAt: 9.84,
          },
          {
            word: "compartilhamos",
            startAt: 9.84,
            endAt: 10.52,
          },
          {
            word: "pentes",
            startAt: 10.52,
            endAt: 10.92,
          },
          {
            word: "e",
            startAt: 10.92,
            endAt: 11.1,
          },
          {
            word: "chapéus,",
            startAt: 11.1,
            endAt: 11.56,
          },
          {
            word: "disse",
            startAt: 11.74,
            endAt: 12.1,
          },
          {
            word: "ela.",
            startAt: 12.1,
            endAt: 12.4,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Para evitar piolhos, Dona Clara ensinou Pedro a não compartilhar pentes, escovas e chapéus com os amigos. "Sempre use suas próprias coisas, e na escola, é importante manter o cabelo preso para evitar que os piolhos se espalhem", ela aconselhou.',
      image: "/story/piolho/images/5.png",
      audio: {
        content: "/story/piolho/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Para",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "evitar",
            startAt: 0.36,
            endAt: 0.68,
          },
          {
            word: "piolhos,",
            startAt: 0.68,
            endAt: 1.24,
          },
          {
            word: "Dona",
            startAt: 1.48,
            endAt: 1.76,
          },
          {
            word: "Clara",
            startAt: 1.76,
            endAt: 1.94,
          },
          {
            word: "ensinou",
            startAt: 1.94,
            endAt: 2.36,
          },
          {
            word: "Pedro",
            startAt: 2.36,
            endAt: 2.72,
          },
          {
            word: "a",
            startAt: 2.72,
            endAt: 2.84,
          },
          {
            word: "não",
            startAt: 2.84,
            endAt: 2.98,
          },
          {
            word: "compartilhar",
            startAt: 2.98,
            endAt: 3.58,
          },
          {
            word: "pentes,",
            startAt: 3.58,
            endAt: 4.04,
          },
          {
            word: "escovas",
            startAt: 4.42,
            endAt: 4.92,
          },
          {
            word: "e",
            startAt: 4.92,
            endAt: 5.04,
          },
          {
            word: "chapéus",
            startAt: 5.04,
            endAt: 5.44,
          },
          {
            word: "com",
            startAt: 5.44,
            endAt: 5.58,
          },
          {
            word: "os",
            startAt: 5.58,
            endAt: 5.72,
          },
          {
            word: "amigos.",
            startAt: 5.72,
            endAt: 6.08,
          },
          {
            word: "Sempre",
            startAt: 6.94,
            endAt: 7.54,
          },
          {
            word: "use",
            startAt: 7.54,
            endAt: 7.84,
          },
          {
            word: "suas",
            startAt: 7.84,
            endAt: 8.12,
          },
          {
            word: "próprias",
            startAt: 8.12,
            endAt: 8.54,
          },
          {
            word: "coisas,",
            startAt: 8.54,
            endAt: 9,
          },
          {
            word: "e",
            startAt: 9.18,
            endAt: 9.3,
          },
          {
            word: "na",
            startAt: 9.3,
            endAt: 9.42,
          },
          {
            word: "escola,",
            startAt: 9.42,
            endAt: 9.84,
          },
          {
            word: "é",
            startAt: 9.98,
            endAt: 10.24,
          },
          {
            word: "importante",
            startAt: 10.24,
            endAt: 10.76,
          },
          {
            word: "manter",
            startAt: 10.76,
            endAt: 11.14,
          },
          {
            word: "o",
            startAt: 11.14,
            endAt: 11.26,
          },
          {
            word: "cabelo",
            startAt: 11.26,
            endAt: 11.58,
          },
          {
            word: "preso",
            startAt: 11.58,
            endAt: 11.94,
          },
          {
            word: "para",
            startAt: 11.94,
            endAt: 12.06,
          },
          {
            word: "evitar",
            startAt: 12.06,
            endAt: 12.34,
          },
          {
            word: "que",
            startAt: 12.34,
            endAt: 12.6,
          },
          {
            word: "os",
            startAt: 12.6,
            endAt: 12.72,
          },
          {
            word: "piolhos",
            startAt: 12.72,
            endAt: 13.1,
          },
          {
            word: "se",
            startAt: 13.1,
            endAt: 13.24,
          },
          {
            word: "espalhem,",
            startAt: 13.24,
            endAt: 13.64,
          },
          {
            word: "ela",
            startAt: 13.8,
            endAt: 14.02,
          },
          {
            word: "aconselhou.",
            startAt: 14.02,
            endAt: 14.56,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Agora, era hora de tratar os piolhos travessos! Dona Clara usou um pente fino para remover os piolhos e lêndeas do cabelo de Lucas. "Esse pente é como um super-herói contra piolhos!", brincou ela.',
      image: "/story/piolho/images/6.png",
      audio: {
        content: "/story/piolho/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Agora,",
            startAt: 0,
            endAt: 0.68,
          },
          {
            word: "era",
            startAt: 0.92,
            endAt: 1.2,
          },
          {
            word: "hora",
            startAt: 1.2,
            endAt: 1.46,
          },
          {
            word: "de",
            startAt: 1.46,
            endAt: 1.62,
          },
          {
            word: "tratar",
            startAt: 1.62,
            endAt: 1.92,
          },
          {
            word: "os",
            startAt: 1.92,
            endAt: 2.16,
          },
          {
            word: "piolhos",
            startAt: 2.16,
            endAt: 2.6,
          },
          {
            word: "travessos.",
            startAt: 2.6,
            endAt: 3.38,
          },
          {
            word: "Dona",
            startAt: 4.12,
            endAt: 4.68,
          },
          {
            word: "Clara",
            startAt: 4.68,
            endAt: 4.88,
          },
          {
            word: "usou",
            startAt: 4.88,
            endAt: 5.24,
          },
          {
            word: "um",
            startAt: 5.24,
            endAt: 5.4,
          },
          {
            word: "pente",
            startAt: 5.4,
            endAt: 5.62,
          },
          {
            word: "fino",
            startAt: 5.62,
            endAt: 5.94,
          },
          {
            word: "para",
            startAt: 5.94,
            endAt: 6.16,
          },
          {
            word: "remover",
            startAt: 6.16,
            endAt: 6.54,
          },
          {
            word: "os",
            startAt: 6.54,
            endAt: 6.74,
          },
          {
            word: "piolhos",
            startAt: 6.74,
            endAt: 7.2,
          },
          {
            word: "e",
            startAt: 7.2,
            endAt: 7.34,
          },
          {
            word: "lêndias",
            startAt: 7.34,
            endAt: 7.68,
          },
          {
            word: "do",
            startAt: 7.68,
            endAt: 7.8,
          },
          {
            word: "cabelo",
            startAt: 7.8,
            endAt: 8.2,
          },
          {
            word: "de",
            startAt: 8.2,
            endAt: 8.34,
          },
          {
            word: "Lucas.",
            startAt: 8.34,
            endAt: 8.68,
          },
          {
            word: "Esse",
            startAt: 9.48,
            endAt: 10.04,
          },
          {
            word: "pente",
            startAt: 10.04,
            endAt: 10.42,
          },
          {
            word: "é",
            startAt: 10.42,
            endAt: 10.56,
          },
          {
            word: "como",
            startAt: 10.56,
            endAt: 10.7,
          },
          {
            word: "um",
            startAt: 10.7,
            endAt: 10.86,
          },
          {
            word: "super",
            startAt: 10.86,
            endAt: 11.12,
          },
          {
            word: "-herói",
            startAt: 11.12,
            endAt: 11.4,
          },
          {
            word: "contra",
            startAt: 11.4,
            endAt: 11.64,
          },
          {
            word: "piolhos,",
            startAt: 11.64,
            endAt: 12.22,
          },
          {
            word: "brincou",
            startAt: 12.36,
            endAt: 12.9,
          },
          {
            word: "ela.",
            startAt: 12.9,
            endAt: 13.18,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'Ela também passou um shampoo especial no cabelo de Lucas para garantir que todos os piolhos fossem eliminados. "Esse shampoo é como uma poção mágica contra piolhos!", disse ela.',
      image: "/story/piolho/images/7.png",
      audio: {
        content: "/story/piolho/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Ela",
            startAt: 0,
            endAt: 0.42,
          },
          {
            word: "também",
            startAt: 0.42,
            endAt: 0.76,
          },
          {
            word: "passou",
            startAt: 0.76,
            endAt: 1.14,
          },
          {
            word: "um",
            startAt: 1.14,
            endAt: 1.3,
          },
          {
            word: "shampoo",
            startAt: 1.3,
            endAt: 1.66,
          },
          {
            word: "especial",
            startAt: 1.66,
            endAt: 2.18,
          },
          {
            word: "no",
            startAt: 2.18,
            endAt: 2.4,
          },
          {
            word: "cabelo",
            startAt: 2.4,
            endAt: 2.76,
          },
          {
            word: "de",
            startAt: 2.76,
            endAt: 2.9,
          },
          {
            word: "Lucas",
            startAt: 2.9,
            endAt: 3.24,
          },
          {
            word: "para",
            startAt: 3.24,
            endAt: 3.46,
          },
          {
            word: "garantir",
            startAt: 3.46,
            endAt: 3.98,
          },
          {
            word: "que",
            startAt: 3.98,
            endAt: 4.14,
          },
          {
            word: "todos",
            startAt: 4.14,
            endAt: 4.48,
          },
          {
            word: "os",
            startAt: 4.48,
            endAt: 4.72,
          },
          {
            word: "piolhos",
            startAt: 4.72,
            endAt: 5.1,
          },
          {
            word: "fossem",
            startAt: 5.1,
            endAt: 5.52,
          },
          {
            word: "eliminados.",
            startAt: 5.52,
            endAt: 6.12,
          },
          {
            word: "Esse",
            startAt: 6.68,
            endAt: 7.36,
          },
          {
            word: "shampoo",
            startAt: 7.36,
            endAt: 7.76,
          },
          {
            word: "é",
            startAt: 7.76,
            endAt: 7.92,
          },
          {
            word: "como",
            startAt: 7.92,
            endAt: 8.14,
          },
          {
            word: "uma",
            startAt: 8.14,
            endAt: 8.3,
          },
          {
            word: "poção",
            startAt: 8.3,
            endAt: 8.64,
          },
          {
            word: "mágica",
            startAt: 8.64,
            endAt: 9.12,
          },
          {
            word: "contra",
            startAt: 9.12,
            endAt: 9.42,
          },
          {
            word: "piolhos,",
            startAt: 9.42,
            endAt: 10,
          },
          {
            word: "disse",
            startAt: 10.14,
            endAt: 10.54,
          },
          {
            word: "ela.",
            startAt: 10.54,
            endAt: 10.88,
          },
        ],
      },
    },
    {
      page: 8,
      text: "Lucas ficou feliz em saber que podia voltar a brincar sem coceira. Ele contou aos amigos sobre os piolhos e como evitá-los. Todos acharam as dicas muito úteis!.",
      image: "/story/piolho/images/8.png",
      audio: {
        content: "/story/piolho/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Lucas",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "ficou",
            startAt: 0.58,
            endAt: 0.9,
          },
          {
            word: "feliz",
            startAt: 0.9,
            endAt: 1.24,
          },
          {
            word: "em",
            startAt: 1.24,
            endAt: 1.42,
          },
          {
            word: "saber",
            startAt: 1.42,
            endAt: 1.72,
          },
          {
            word: "que",
            startAt: 1.72,
            endAt: 1.92,
          },
          {
            word: "podia",
            startAt: 1.92,
            endAt: 2.22,
          },
          {
            word: "voltar",
            startAt: 2.22,
            endAt: 2.54,
          },
          {
            word: "a",
            startAt: 2.54,
            endAt: 2.74,
          },
          {
            word: "brincar",
            startAt: 2.74,
            endAt: 3.14,
          },
          {
            word: "sem",
            startAt: 3.14,
            endAt: 3.3,
          },
          {
            word: "coceira.",
            startAt: 3.3,
            endAt: 3.82,
          },
          {
            word: "Ele",
            startAt: 4.55,
            endAt: 4.88,
          },
          {
            word: "contou",
            startAt: 4.88,
            endAt: 5.32,
          },
          {
            word: "aos",
            startAt: 5.32,
            endAt: 5.48,
          },
          {
            word: "amigos",
            startAt: 5.48,
            endAt: 5.84,
          },
          {
            word: "sobre",
            startAt: 5.84,
            endAt: 6.12,
          },
          {
            word: "os",
            startAt: 6.12,
            endAt: 6.3,
          },
          {
            word: "piolhos",
            startAt: 6.3,
            endAt: 6.72,
          },
          {
            word: "e",
            startAt: 6.72,
            endAt: 6.86,
          },
          {
            word: "como",
            startAt: 6.86,
            endAt: 7.08,
          },
          {
            word: "evitá",
            startAt: 7.08,
            endAt: 7.48,
          },
          {
            word: "-los.",
            startAt: 7.48,
            endAt: 7.72,
          },
          {
            word: "Todos",
            startAt: 8.34,
            endAt: 9,
          },
          {
            word: "acharam",
            startAt: 9,
            endAt: 9.56,
          },
          {
            word: "as",
            startAt: 9.56,
            endAt: 9.74,
          },
          {
            word: "dicas",
            startAt: 9.74,
            endAt: 10.08,
          },
          {
            word: "muito",
            startAt: 10.08,
            endAt: 10.6,
          },
          {
            word: "úteis.",
            startAt: 10.6,
            endAt: 11.14,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'Depois de tratar os piolhos, Lucas e sua mãe lavaram todas as roupas de cama e chapéus. "Assim garantimos que nenhum piolho fique escondido por aqui!", explicou dona Clara.',
      image: "/story/piolho/images/9.png",
      audio: {
        content: "/story/piolho/audios/8.mp3",
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
            endAt: 0.8,
          },
          {
            word: "tratar",
            startAt: 0.8,
            endAt: 1.08,
          },
          {
            word: "os",
            startAt: 1.08,
            endAt: 1.32,
          },
          {
            word: "piolhos,",
            startAt: 1.32,
            endAt: 1.8,
          },
          {
            word: "Lucas",
            startAt: 2.06,
            endAt: 2.38,
          },
          {
            word: "e",
            startAt: 2.38,
            endAt: 2.54,
          },
          {
            word: "sua",
            startAt: 2.54,
            endAt: 2.74,
          },
          {
            word: "mãe",
            startAt: 2.74,
            endAt: 2.96,
          },
          {
            word: "lavaram",
            startAt: 2.96,
            endAt: 3.4,
          },
          {
            word: "todas",
            startAt: 3.4,
            endAt: 3.72,
          },
          {
            word: "as",
            startAt: 3.72,
            endAt: 3.94,
          },
          {
            word: "roupas",
            startAt: 3.94,
            endAt: 4.34,
          },
          {
            word: "de",
            startAt: 4.34,
            endAt: 4.46,
          },
          {
            word: "cama",
            startAt: 4.46,
            endAt: 4.78,
          },
          {
            word: "e",
            startAt: 4.78,
            endAt: 4.9,
          },
          {
            word: "chapéus.",
            startAt: 4.9,
            endAt: 5.4,
          },
          {
            word: "Assim",
            startAt: 6.219999999999999,
            endAt: 6.779999999999999,
          },
          {
            word: "garantimos",
            startAt: 6.779999999999999,
            endAt: 7.34,
          },
          {
            word: "que",
            startAt: 7.34,
            endAt: 7.52,
          },
          {
            word: "nenhum",
            startAt: 7.52,
            endAt: 7.8,
          },
          {
            word: "piolho",
            startAt: 7.8,
            endAt: 8.2,
          },
          {
            word: "fique",
            startAt: 8.2,
            endAt: 8.44,
          },
          {
            word: "escondido",
            startAt: 8.44,
            endAt: 8.96,
          },
          {
            word: "por",
            startAt: 8.96,
            endAt: 9.18,
          },
          {
            word: "aqui,",
            startAt: 9.18,
            endAt: 9.42,
          },
          {
            word: "explicou",
            startAt: 9.58,
            endAt: 10.1,
          },
          {
            word: "dona",
            startAt: 10.1,
            endAt: 10.34,
          },
          {
            word: "Clara.",
            startAt: 10.34,
            endAt: 10.76,
          },
        ],
      },
    },
    {
      page: 10,
      text: 'Lucas aprendeu que, com cuidado e atenção, é fácil evitar e tratar os piolhos. "E lembre-se, Lucas, coçar a cabeça demais pode machucar e causar feridas", disse Dona Clara. Ele prometeu sempre seguir as dicas dela.',
      image: "/story/piolho/images/10.png",
      audio: {
        content: "/story/piolho/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Lucas",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "aprendeu",
            startAt: 0.58,
            endAt: 1.08,
          },
          {
            word: "que,",
            startAt: 1.08,
            endAt: 1.3,
          },
          {
            word: "com",
            startAt: 1.54,
            endAt: 1.82,
          },
          {
            word: "cuidado",
            startAt: 1.82,
            endAt: 2.24,
          },
          {
            word: "e",
            startAt: 2.24,
            endAt: 2.4,
          },
          {
            word: "atenção,",
            startAt: 2.4,
            endAt: 2.8,
          },
          {
            word: "é",
            startAt: 3.1,
            endAt: 3.34,
          },
          {
            word: "fácil",
            startAt: 3.34,
            endAt: 3.7,
          },
          {
            word: "evitar",
            startAt: 3.7,
            endAt: 4.04,
          },
          {
            word: "e",
            startAt: 4.04,
            endAt: 4.26,
          },
          {
            word: "tratar",
            startAt: 4.26,
            endAt: 4.54,
          },
          {
            word: "os",
            startAt: 4.54,
            endAt: 4.78,
          },
          {
            word: "piolhos.",
            startAt: 4.78,
            endAt: 5.24,
          },
          {
            word: "E",
            startAt: 5.78,
            endAt: 6.3,
          },
          {
            word: "lembre",
            startAt: 6.3,
            endAt: 6.64,
          },
          {
            word: "-se,",
            startAt: 6.64,
            endAt: 6.8,
          },
          {
            word: "Lucas,",
            startAt: 7.02,
            endAt: 7.4,
          },
          {
            word: "coçar",
            startAt: 7.82,
            endAt: 8.08,
          },
          {
            word: "a",
            startAt: 8.08,
            endAt: 8.2,
          },
          {
            word: "cabeça",
            startAt: 8.2,
            endAt: 8.58,
          },
          {
            word: "demais",
            startAt: 8.58,
            endAt: 8.92,
          },
          {
            word: "pode",
            startAt: 8.92,
            endAt: 9.24,
          },
          {
            word: "machucar",
            startAt: 9.24,
            endAt: 9.8,
          },
          {
            word: "e",
            startAt: 9.8,
            endAt: 9.86,
          },
          {
            word: "causar",
            startAt: 9.86,
            endAt: 10.22,
          },
          {
            word: "feridas,",
            startAt: 10.22,
            endAt: 10.72,
          },
          {
            word: "disse",
            startAt: 10.94,
            endAt: 11.3,
          },
          {
            word: "Dona",
            startAt: 11.3,
            endAt: 11.68,
          },
          {
            word: "Clara.",
            startAt: 11.68,
            endAt: 11.94,
          },
          {
            word: "Ele",
            startAt: 12.48,
            endAt: 13.06,
          },
          {
            word: "prometeu",
            startAt: 13.06,
            endAt: 13.48,
          },
          {
            word: "sempre",
            startAt: 13.48,
            endAt: 13.9,
          },
          {
            word: "seguir",
            startAt: 13.9,
            endAt: 14.26,
          },
          {
            word: "as",
            startAt: 14.26,
            endAt: 14.48,
          },
          {
            word: "dicas",
            startAt: 14.48,
            endAt: 14.8,
          },
          {
            word: "dela.",
            startAt: 14.8,
            endAt: 15.12,
          },
        ],
      },
    },
    {
      page: 11,
      text: "E assim, Lucas continuou a brincar feliz e livre de coceiras, sempre lembrando das lições sobre os piolhos e como evitá-los. Espero que essa história ajude você a entender como evitar e tratar os piolhos de maneira divertida e educativa!",
      image: "/story/piolho/images/11.png",
      audio: {
        content: "/story/piolho/audios/10.mp3",
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
            endAt: 0.66,
          },
          {
            word: "Lucas",
            startAt: 1,
            endAt: 1.36,
          },
          {
            word: "continuou",
            startAt: 1.36,
            endAt: 1.98,
          },
          {
            word: "a",
            startAt: 1.98,
            endAt: 2.08,
          },
          {
            word: "brincar",
            startAt: 2.08,
            endAt: 2.46,
          },
          {
            word: "feliz",
            startAt: 2.46,
            endAt: 2.8,
          },
          {
            word: "e",
            startAt: 2.8,
            endAt: 3,
          },
          {
            word: "livre",
            startAt: 3,
            endAt: 3.28,
          },
          {
            word: "de",
            startAt: 3.28,
            endAt: 3.46,
          },
          {
            word: "coceiras,",
            startAt: 3.46,
            endAt: 4,
          },
          {
            word: "sempre",
            startAt: 4.28,
            endAt: 4.74,
          },
          {
            word: "lembrando",
            startAt: 4.74,
            endAt: 5.22,
          },
          {
            word: "das",
            startAt: 5.22,
            endAt: 5.4,
          },
          {
            word: "lições",
            startAt: 5.4,
            endAt: 5.76,
          },
          {
            word: "sobre",
            startAt: 5.76,
            endAt: 6.02,
          },
          {
            word: "os",
            startAt: 6.02,
            endAt: 6.2,
          },
          {
            word: "piolhos",
            startAt: 6.2,
            endAt: 6.62,
          },
          {
            word: "e",
            startAt: 6.62,
            endAt: 6.72,
          },
          {
            word: "como",
            startAt: 6.72,
            endAt: 6.92,
          },
          {
            word: "evitá",
            startAt: 6.92,
            endAt: 7.34,
          },
          {
            word: "-los.",
            startAt: 7.34,
            endAt: 7.56,
          },
          {
            word: "Espero",
            startAt: 8.34,
            endAt: 8.98,
          },
          {
            word: "que",
            startAt: 8.98,
            endAt: 9.16,
          },
          {
            word: "essa",
            startAt: 9.16,
            endAt: 9.34,
          },
          {
            word: "história",
            startAt: 9.34,
            endAt: 9.72,
          },
          {
            word: "ajude",
            startAt: 9.72,
            endAt: 10.1,
          },
          {
            word: "você",
            startAt: 10.1,
            endAt: 10.42,
          },
          {
            word: "a",
            startAt: 10.42,
            endAt: 10.56,
          },
          {
            word: "entender",
            startAt: 10.56,
            endAt: 10.82,
          },
          {
            word: "como",
            startAt: 10.82,
            endAt: 11.18,
          },
          {
            word: "evitar",
            startAt: 11.18,
            endAt: 11.5,
          },
          {
            word: "e",
            startAt: 11.5,
            endAt: 11.74,
          },
          {
            word: "tratar",
            startAt: 11.74,
            endAt: 11.98,
          },
          {
            word: "os",
            startAt: 11.98,
            endAt: 12.22,
          },
          {
            word: "piolhos",
            startAt: 12.22,
            endAt: 12.64,
          },
          {
            word: "de",
            startAt: 12.64,
            endAt: 12.76,
          },
          {
            word: "maneira",
            startAt: 12.76,
            endAt: 13.1,
          },
          {
            word: "divertida",
            startAt: 13.1,
            endAt: 13.7,
          },
          {
            word: "e",
            startAt: 13.7,
            endAt: 13.84,
          },
          {
            word: "educativa.",
            startAt: 13.84,
            endAt: 14.46,
          },
        ],
      },
    },
  ],
};

export default piolhoStory;
