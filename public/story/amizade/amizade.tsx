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

/* image: "/story/amizade/images/capa.png",
      audio: {
        content: "/story/amizade/audios/0.mp3",
        type: "audio/mp3",
      } */

const amizadeStory: Story = {
  title: "Lili e o Poder da Amizade",
  slug: "lili-amizade",
  pages: [
    {
      page: 1,
      text: "Olá, vamos começar a história da Lili e o Poder da Amizade. Clique em avançar para iniciar.",
      image: "/story/amizade/images/capa.png",
      audio: {
        content: "/story/amizade/audios/0.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Olá,",
            startAt: 0,
            endAt: 0.46,
          },
          {
            word: "vamos",
            startAt: 0.82,
            endAt: 1.12,
          },
          {
            word: "começar",
            startAt: 1.12,
            endAt: 1.56,
          },
          {
            word: "a",
            startAt: 1.56,
            endAt: 1.7,
          },
          {
            word: "história",
            startAt: 1.7,
            endAt: 2.02,
          },
          {
            word: "da",
            startAt: 2.02,
            endAt: 2.18,
          },
          {
            word: "Lily",
            startAt: 2.18,
            endAt: 2.4,
          },
          {
            word: "e",
            startAt: 2.4,
            endAt: 2.6,
          },
          {
            word: "o",
            startAt: 2.6,
            endAt: 2.68,
          },
          {
            word: "poder",
            startAt: 2.68,
            endAt: 2.94,
          },
          {
            word: "da",
            startAt: 2.94,
            endAt: 3.1,
          },
          {
            word: "amizade.",
            startAt: 3.1,
            endAt: 3.64,
          },
          {
            word: "Clique",
            startAt: 4.260000000000001,
            endAt: 4.86,
          },
          {
            word: "em",
            startAt: 4.86,
            endAt: 5,
          },
          {
            word: "avançar",
            startAt: 5,
            endAt: 5.56,
          },
          {
            word: "para",
            startAt: 5.56,
            endAt: 5.72,
          },
          {
            word: "iniciar.",
            startAt: 5.72,
            endAt: 6.26,
          },
        ],
      },
    },
    {
      page: 2,
      text: "Era uma vez, na escola Aurora, uma menina chamada Lili. Ela adorava desenhar e brincar com seus amigos. Um dia, um novo aluno chamado Tomás chegou à escola. Tomás era tímido e usava óculos grandes.",
      image: "/story/amizade/images/2.png",
      audio: {
        content: "/story/amizade/audios/1.mp3",
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
            word: "na",
            startAt: 1.08,
            endAt: 1.24,
          },
          {
            word: "escola",
            startAt: 1.24,
            endAt: 1.58,
          },
          {
            word: "Aurora,",
            startAt: 1.58,
            endAt: 1.9,
          },
          {
            word: "uma",
            startAt: 2.26,
            endAt: 2.5,
          },
          {
            word: "menina",
            startAt: 2.5,
            endAt: 2.84,
          },
          {
            word: "chamada",
            startAt: 2.84,
            endAt: 3.28,
          },
          {
            word: "Lili.",
            startAt: 3.28,
            endAt: 3.58,
          },
          {
            word: "Ela",
            startAt: 4.37,
            endAt: 4.72,
          },
          {
            word: "adorava",
            startAt: 4.72,
            endAt: 5.12,
          },
          {
            word: "desenhar",
            startAt: 5.12,
            endAt: 5.6,
          },
          {
            word: "e",
            startAt: 5.6,
            endAt: 5.7,
          },
          {
            word: "brincar",
            startAt: 5.7,
            endAt: 6.14,
          },
          {
            word: "com",
            startAt: 6.14,
            endAt: 6.3,
          },
          {
            word: "seus",
            startAt: 6.3,
            endAt: 6.54,
          },
          {
            word: "amigos.",
            startAt: 6.54,
            endAt: 6.92,
          },
          {
            word: "Um",
            startAt: 7.62,
            endAt: 8.14,
          },
          {
            word: "dia,",
            startAt: 8.14,
            endAt: 8.44,
          },
          {
            word: "um",
            startAt: 8.7,
            endAt: 8.96,
          },
          {
            word: "novo",
            startAt: 8.96,
            endAt: 9.28,
          },
          {
            word: "aluno",
            startAt: 9.28,
            endAt: 9.62,
          },
          {
            word: "chamado",
            startAt: 9.62,
            endAt: 10.02,
          },
          {
            word: "Tomás",
            startAt: 10.02,
            endAt: 10.42,
          },
          {
            word: "chegou",
            startAt: 10.42,
            endAt: 10.7,
          },
          {
            word: "à",
            startAt: 10.7,
            endAt: 10.86,
          },
          {
            word: "escola.",
            startAt: 10.86,
            endAt: 11.26,
          },
          {
            word: "Tomás",
            startAt: 11.88,
            endAt: 12.58,
          },
          {
            word: "era",
            startAt: 12.58,
            endAt: 12.74,
          },
          {
            word: "tímido",
            startAt: 12.74,
            endAt: 13.18,
          },
          {
            word: "e",
            startAt: 13.18,
            endAt: 13.28,
          },
          {
            word: "usava",
            startAt: 13.28,
            endAt: 13.66,
          },
          {
            word: "óculos",
            startAt: 13.66,
            endAt: 14.06,
          },
          {
            word: "grandes.",
            startAt: 14.06,
            endAt: 14.5,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'No recreio, alguns colegas começaram a rir de Tomás por causa dos seus óculos. Lili percebeu que Tomás estava triste e decidiu se aproximar dele. "Oi, Tomás! Quer brincar comigo?", perguntou Lili.',
      image: "/story/amizade/images/3.png",
      audio: {
        content: "/story/amizade/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "No",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "recreio,",
            startAt: 0.36,
            endAt: 0.88,
          },
          {
            word: "alguns",
            startAt: 1.12,
            endAt: 1.48,
          },
          {
            word: "colegas",
            startAt: 1.48,
            endAt: 2.04,
          },
          {
            word: "começaram",
            startAt: 2.04,
            endAt: 2.56,
          },
          {
            word: "a",
            startAt: 2.56,
            endAt: 2.7,
          },
          {
            word: "rir",
            startAt: 2.7,
            endAt: 2.9,
          },
          {
            word: "de",
            startAt: 2.9,
            endAt: 3.02,
          },
          {
            word: "Tomás",
            startAt: 3.02,
            endAt: 3.36,
          },
          {
            word: "por",
            startAt: 3.36,
            endAt: 3.58,
          },
          {
            word: "causa",
            startAt: 3.58,
            endAt: 3.88,
          },
          {
            word: "dos",
            startAt: 3.88,
            endAt: 4.06,
          },
          {
            word: "seus",
            startAt: 4.06,
            endAt: 4.3,
          },
          {
            word: "óculos.",
            startAt: 4.3,
            endAt: 4.74,
          },
          {
            word: "Lili",
            startAt: 5.74,
            endAt: 6.02,
          },
          {
            word: "percebeu",
            startAt: 6.02,
            endAt: 6.6,
          },
          {
            word: "que",
            startAt: 6.6,
            endAt: 6.72,
          },
          {
            word: "Tomás",
            startAt: 6.72,
            endAt: 7.06,
          },
          {
            word: "estava",
            startAt: 7.06,
            endAt: 7.38,
          },
          {
            word: "triste",
            startAt: 7.38,
            endAt: 7.8,
          },
          {
            word: "e",
            startAt: 7.8,
            endAt: 7.94,
          },
          {
            word: "decidiu",
            startAt: 7.94,
            endAt: 8.34,
          },
          {
            word: "se",
            startAt: 8.34,
            endAt: 8.46,
          },
          {
            word: "aproximar",
            startAt: 8.46,
            endAt: 9.02,
          },
          {
            word: "dele.",
            startAt: 9.02,
            endAt: 9.3,
          },
          {
            word: "Oi,",
            startAt: 9.88,
            endAt: 10.48,
          },
          {
            word: "Tomás!",
            startAt: 10.66,
            endAt: 11.34,
          },
          {
            word: "Quer",
            startAt: 11.82,
            endAt: 12.5,
          },
          {
            word: "brincar",
            startAt: 12.5,
            endAt: 12.94,
          },
          {
            word: "comigo?",
            startAt: 12.94,
            endAt: 13.32,
          },
          {
            word: "Perguntou",
            startAt: 13.52,
            endAt: 14.22,
          },
          {
            word: "Lili.",
            startAt: 14.22,
            endAt: 14.5,
          },
        ],
      },
    },
    {
      page: 4,
      text: "Tomás sorriu timidamente e aceitou o convite. Eles começaram a brincar juntos, mas os outros colegas continuaram a fazer piadas sobre Tomás. Lili sabia que aquilo era bullying, uma ofensa, provocação, agressão e que precisava fazer algo.",
      image: "/story/amizade/images/4.png",
      audio: {
        content: "/story/amizade/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tomás",
            startAt: 0,
            endAt: 0.56,
          },
          {
            word: "sorriu",
            startAt: 0.56,
            endAt: 1.04,
          },
          {
            word: "timidamente",
            startAt: 1.04,
            endAt: 1.56,
          },
          {
            word: "e",
            startAt: 1.56,
            endAt: 1.86,
          },
          {
            word: "aceitou",
            startAt: 1.86,
            endAt: 2.28,
          },
          {
            word: "o",
            startAt: 2.28,
            endAt: 2.4,
          },
          {
            word: "convite.",
            startAt: 2.4,
            endAt: 2.82,
          },
          {
            word: "Eles",
            startAt: 3.38,
            endAt: 3.98,
          },
          {
            word: "começaram",
            startAt: 3.98,
            endAt: 4.52,
          },
          {
            word: "a",
            startAt: 4.52,
            endAt: 4.62,
          },
          {
            word: "brincar",
            startAt: 4.62,
            endAt: 5,
          },
          {
            word: "juntos,",
            startAt: 5,
            endAt: 5.36,
          },
          {
            word: "mas",
            startAt: 5.66,
            endAt: 5.94,
          },
          {
            word: "os",
            startAt: 5.94,
            endAt: 6.1,
          },
          {
            word: "outros",
            startAt: 6.1,
            endAt: 6.34,
          },
          {
            word: "colegas",
            startAt: 6.34,
            endAt: 6.92,
          },
          {
            word: "continuaram",
            startAt: 6.92,
            endAt: 7.54,
          },
          {
            word: "a",
            startAt: 7.54,
            endAt: 7.68,
          },
          {
            word: "fazer",
            startAt: 7.68,
            endAt: 8,
          },
          {
            word: "piadas",
            startAt: 8,
            endAt: 8.48,
          },
          {
            word: "sobre",
            startAt: 8.48,
            endAt: 8.72,
          },
          {
            word: "Tomás.",
            startAt: 8.72,
            endAt: 9.22,
          },
          {
            word: "Lily",
            startAt: 10.18,
            endAt: 10.46,
          },
          {
            word: "sabia",
            startAt: 10.46,
            endAt: 10.86,
          },
          {
            word: "que",
            startAt: 10.86,
            endAt: 11.14,
          },
          {
            word: "aquilo",
            startAt: 11.14,
            endAt: 11.48,
          },
          {
            word: "era",
            startAt: 11.48,
            endAt: 11.62,
          },
          {
            word: "bullying,",
            startAt: 11.62,
            endAt: 12,
          },
          {
            word: "uma",
            startAt: 12.3,
            endAt: 12.52,
          },
          {
            word: "ofensa,",
            startAt: 12.52,
            endAt: 13.02,
          },
          {
            word: "provocação,",
            startAt: 13.36,
            endAt: 13.98,
          },
          {
            word: "agressão",
            startAt: 14.24,
            endAt: 14.8,
          },
          {
            word: "e",
            startAt: 14.8,
            endAt: 14.94,
          },
          {
            word: "que",
            startAt: 14.94,
            endAt: 15.04,
          },
          {
            word: "precisava",
            startAt: 15.04,
            endAt: 15.6,
          },
          {
            word: "fazer",
            startAt: 15.6,
            endAt: 15.92,
          },
          {
            word: "algo.",
            startAt: 15.92,
            endAt: 16.24,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Na aula seguinte, a professora Sofia falou sobre o bullying. Ela explicou que bullying é quando alguém machuca ou faz outra pessoa se sentir mal de propósito, e que isso é errado. "Devemos sempre tratar os outros com respeito e gentileza", disse a professora.',
      image: "/story/amizade/images/5.png",
      audio: {
        content: "/story/amizade/audios/4.mp3",
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
            word: "seguinte,",
            startAt: 0.62,
            endAt: 1.12,
          },
          {
            word: "a",
            startAt: 1.36,
            endAt: 1.5,
          },
          {
            word: "professora",
            startAt: 1.5,
            endAt: 2.06,
          },
          {
            word: "Sofia",
            startAt: 2.06,
            endAt: 2.46,
          },
          {
            word: "falou",
            startAt: 2.46,
            endAt: 2.84,
          },
          {
            word: "sobre",
            startAt: 2.84,
            endAt: 3.12,
          },
          {
            word: "o",
            startAt: 3.12,
            endAt: 3.28,
          },
          {
            word: "bullying.",
            startAt: 3.28,
            endAt: 3.54,
          },
          {
            word: "Ela",
            startAt: 4.140000000000001,
            endAt: 4.7,
          },
          {
            word: "explicou",
            startAt: 4.7,
            endAt: 5.12,
          },
          {
            word: "que",
            startAt: 5.12,
            endAt: 5.28,
          },
          {
            word: "bullying",
            startAt: 5.28,
            endAt: 5.62,
          },
          {
            word: "é",
            startAt: 5.62,
            endAt: 5.78,
          },
          {
            word: "quando",
            startAt: 5.78,
            endAt: 5.96,
          },
          {
            word: "alguém",
            startAt: 5.96,
            endAt: 6.22,
          },
          {
            word: "machuca",
            startAt: 6.22,
            endAt: 6.78,
          },
          {
            word: "ou",
            startAt: 6.78,
            endAt: 6.92,
          },
          {
            word: "faz",
            startAt: 6.92,
            endAt: 7.22,
          },
          {
            word: "outra",
            startAt: 7.22,
            endAt: 7.46,
          },
          {
            word: "pessoa",
            startAt: 7.46,
            endAt: 7.86,
          },
          {
            word: "se",
            startAt: 7.86,
            endAt: 8.1,
          },
          {
            word: "sentir",
            startAt: 8.1,
            endAt: 8.44,
          },
          {
            word: "mal",
            startAt: 8.44,
            endAt: 8.7,
          },
          {
            word: "de",
            startAt: 8.7,
            endAt: 8.84,
          },
          {
            word: "propósito,",
            startAt: 8.84,
            endAt: 9.46,
          },
          {
            word: "e",
            startAt: 9.62,
            endAt: 9.88,
          },
          {
            word: "que",
            startAt: 9.88,
            endAt: 10.08,
          },
          {
            word: "isso",
            startAt: 10.08,
            endAt: 10.36,
          },
          {
            word: "é",
            startAt: 10.36,
            endAt: 10.46,
          },
          {
            word: "errado.",
            startAt: 10.46,
            endAt: 10.82,
          },
          {
            word: "Devemos",
            startAt: 11.72,
            endAt: 12.28,
          },
          {
            word: "sempre",
            startAt: 12.28,
            endAt: 12.58,
          },
          {
            word: "tratar",
            startAt: 12.58,
            endAt: 12.92,
          },
          {
            word: "os",
            startAt: 12.92,
            endAt: 13.18,
          },
          {
            word: "outros",
            startAt: 13.18,
            endAt: 13.42,
          },
          {
            word: "com",
            startAt: 13.42,
            endAt: 13.6,
          },
          {
            word: "respeito",
            startAt: 13.6,
            endAt: 14.14,
          },
          {
            word: "e",
            startAt: 14.14,
            endAt: 14.26,
          },
          {
            word: "gentileza,",
            startAt: 14.26,
            endAt: 14.94,
          },
          {
            word: "disse",
            startAt: 15.14,
            endAt: 15.5,
          },
          {
            word: "a",
            startAt: 15.5,
            endAt: 15.62,
          },
          {
            word: "professora.",
            startAt: 15.62,
            endAt: 16.18,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Lili levantou a mão e contou como Tomás estava sendo tratado. A professora elogiou Lili por sua coragem e pediu que todos refletissem sobre suas ações. "Vamos ser amigos e ajudar uns aos outros", disse Lili.',
      image: "/story/amizade/images/6.png",
      audio: {
        content: "/story/amizade/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Lili",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "levantou",
            startAt: 0.48,
            endAt: 1,
          },
          {
            word: "a",
            startAt: 1,
            endAt: 1.14,
          },
          {
            word: "mão",
            startAt: 1.14,
            endAt: 1.3,
          },
          {
            word: "e",
            startAt: 1.3,
            endAt: 1.42,
          },
          {
            word: "contou",
            startAt: 1.42,
            endAt: 1.8,
          },
          {
            word: "como",
            startAt: 1.8,
            endAt: 2.04,
          },
          {
            word: "Tomás",
            startAt: 2.04,
            endAt: 2.44,
          },
          {
            word: "estava",
            startAt: 2.44,
            endAt: 2.76,
          },
          {
            word: "sendo",
            startAt: 2.76,
            endAt: 3.12,
          },
          {
            word: "tratado.",
            startAt: 3.12,
            endAt: 3.64,
          },
          {
            word: "A",
            startAt: 4.1,
            endAt: 4.68,
          },
          {
            word: "professora",
            startAt: 4.68,
            endAt: 5.18,
          },
          {
            word: "elogiou",
            startAt: 5.18,
            endAt: 5.62,
          },
          {
            word: "Lili",
            startAt: 5.62,
            endAt: 5.88,
          },
          {
            word: "por",
            startAt: 5.88,
            endAt: 6.08,
          },
          {
            word: "sua",
            startAt: 6.08,
            endAt: 6.28,
          },
          {
            word: "coragem",
            startAt: 6.28,
            endAt: 6.76,
          },
          {
            word: "e",
            startAt: 6.76,
            endAt: 6.9,
          },
          {
            word: "pediu",
            startAt: 6.9,
            endAt: 7.2,
          },
          {
            word: "que",
            startAt: 7.2,
            endAt: 7.32,
          },
          {
            word: "todos",
            startAt: 7.32,
            endAt: 7.7,
          },
          {
            word: "refletissem",
            startAt: 7.7,
            endAt: 8.46,
          },
          {
            word: "sobre",
            startAt: 8.46,
            endAt: 8.7,
          },
          {
            word: "suas",
            startAt: 8.7,
            endAt: 9.08,
          },
          {
            word: "ações.",
            startAt: 9.08,
            endAt: 9.56,
          },
          {
            word: "Vamos",
            startAt: 10.22,
            endAt: 10.88,
          },
          {
            word: "ser",
            startAt: 10.88,
            endAt: 11.12,
          },
          {
            word: "amigos",
            startAt: 11.12,
            endAt: 11.5,
          },
          {
            word: "e",
            startAt: 11.5,
            endAt: 11.7,
          },
          {
            word: "ajudar",
            startAt: 11.7,
            endAt: 12.04,
          },
          {
            word: "uns",
            startAt: 12.04,
            endAt: 12.24,
          },
          {
            word: "aos",
            startAt: 12.24,
            endAt: 12.46,
          },
          {
            word: "outros,",
            startAt: 12.46,
            endAt: 12.82,
          },
          {
            word: "disse",
            startAt: 13.04,
            endAt: 13.36,
          },
          {
            word: "Lili.",
            startAt: 13.36,
            endAt: 13.64,
          },
        ],
      },
    },
    {
      page: 7,
      text: "Os colegas perceberam que estavam errados e pediram desculpas a Tomás. Eles prometeram nunca mais fazer bullying e começaram a chamar Tomás para brincar.",
      image: "/story/amizade/images/7.png",
      audio: {
        content: "/story/amizade/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Os",
            startAt: 0,
            endAt: 0.4,
          },
          {
            word: "colegas",
            startAt: 0.4,
            endAt: 0.92,
          },
          {
            word: "perceberam",
            startAt: 0.92,
            endAt: 1.52,
          },
          {
            word: "que",
            startAt: 1.52,
            endAt: 1.64,
          },
          {
            word: "estavam",
            startAt: 1.64,
            endAt: 1.92,
          },
          {
            word: "errados",
            startAt: 1.92,
            endAt: 2.4,
          },
          {
            word: "e",
            startAt: 2.4,
            endAt: 2.56,
          },
          {
            word: "pediram",
            startAt: 2.56,
            endAt: 2.9,
          },
          {
            word: "desculpas",
            startAt: 2.9,
            endAt: 3.46,
          },
          {
            word: "a",
            startAt: 3.46,
            endAt: 3.6,
          },
          {
            word: "Tomás.",
            startAt: 3.6,
            endAt: 3.98,
          },
          {
            word: "Eles",
            startAt: 4.46,
            endAt: 5.2,
          },
          {
            word: "prometeram",
            startAt: 5.2,
            endAt: 5.74,
          },
          {
            word: "nunca",
            startAt: 5.74,
            endAt: 6.04,
          },
          {
            word: "mais",
            startAt: 6.04,
            endAt: 6.36,
          },
          {
            word: "fazer",
            startAt: 6.36,
            endAt: 6.66,
          },
          {
            word: "bullying",
            startAt: 6.66,
            endAt: 7.04,
          },
          {
            word: "e",
            startAt: 7.04,
            endAt: 7.5,
          },
          {
            word: "começaram",
            startAt: 7.5,
            endAt: 8.06,
          },
          {
            word: "a",
            startAt: 8.06,
            endAt: 8.18,
          },
          {
            word: "chamar",
            startAt: 8.18,
            endAt: 8.5,
          },
          {
            word: "Tomás",
            startAt: 8.5,
            endAt: 8.88,
          },
          {
            word: "para",
            startAt: 8.88,
            endAt: 9.04,
          },
          {
            word: "brincar.",
            startAt: 9.04,
            endAt: 9.52,
          },
        ],
      },
    },
    {
      page: 8,
      text: "Com o tempo, Tomás fez muitos amigos e se sentiu feliz na escola. Ele e Lili se tornaram grandes amigos e sempre se apoiavam.",
      image: "/story/amizade/images/8.png",
      audio: {
        content: "/story/amizade/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Com",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "o",
            startAt: 0.36,
            endAt: 0.56,
          },
          {
            word: "tempo,",
            startAt: 0.56,
            endAt: 0.82,
          },
          {
            word: "Tomás",
            startAt: 1.14,
            endAt: 1.48,
          },
          {
            word: "fez",
            startAt: 1.48,
            endAt: 1.7,
          },
          {
            word: "muitos",
            startAt: 1.7,
            endAt: 2.06,
          },
          {
            word: "amigos",
            startAt: 2.06,
            endAt: 2.5,
          },
          {
            word: "e",
            startAt: 2.5,
            endAt: 2.7,
          },
          {
            word: "se",
            startAt: 2.7,
            endAt: 2.84,
          },
          {
            word: "sentiu",
            startAt: 2.84,
            endAt: 3.18,
          },
          {
            word: "feliz",
            startAt: 3.18,
            endAt: 3.52,
          },
          {
            word: "na",
            startAt: 3.52,
            endAt: 3.7,
          },
          {
            word: "escola.",
            startAt: 3.7,
            endAt: 4.08,
          },
          {
            word: "Ele",
            startAt: 4.68,
            endAt: 5.24,
          },
          {
            word: "e",
            startAt: 5.24,
            endAt: 5.36,
          },
          {
            word: "Lili",
            startAt: 5.36,
            endAt: 5.54,
          },
          {
            word: "se",
            startAt: 5.54,
            endAt: 5.78,
          },
          {
            word: "tornaram",
            startAt: 5.78,
            endAt: 6.16,
          },
          {
            word: "grandes",
            startAt: 6.16,
            endAt: 6.52,
          },
          {
            word: "amigos",
            startAt: 6.52,
            endAt: 7,
          },
          {
            word: "e",
            startAt: 7,
            endAt: 7.2,
          },
          {
            word: "sempre",
            startAt: 7.2,
            endAt: 7.54,
          },
          {
            word: "se",
            startAt: 7.54,
            endAt: 7.72,
          },
          {
            word: "apoiavam.",
            startAt: 7.72,
            endAt: 8.3,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'A professora ficou orgulhosa de ver como todos aprenderam a importância de serem gentis e respeitosos. "A amizade e o respeito são mais fortes que qualquer brincadeira de mau gosto".',
      image: "/story/amizade/images/9.png",
      audio: {
        content: "/story/amizade/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "A",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "professora",
            startAt: 0.32,
            endAt: 0.9,
          },
          {
            word: "ficou",
            startAt: 0.9,
            endAt: 1.2,
          },
          {
            word: "orgulhosa",
            startAt: 1.2,
            endAt: 1.78,
          },
          {
            word: "de",
            startAt: 1.78,
            endAt: 1.92,
          },
          {
            word: "ver",
            startAt: 1.92,
            endAt: 2.12,
          },
          {
            word: "como",
            startAt: 2.12,
            endAt: 2.36,
          },
          {
            word: "todos",
            startAt: 2.36,
            endAt: 2.74,
          },
          {
            word: "aprenderam",
            startAt: 2.74,
            endAt: 3.36,
          },
          {
            word: "a",
            startAt: 3.36,
            endAt: 3.46,
          },
          {
            word: "importância",
            startAt: 3.46,
            endAt: 4.06,
          },
          {
            word: "de",
            startAt: 4.06,
            endAt: 4.22,
          },
          {
            word: "serem",
            startAt: 4.22,
            endAt: 4.52,
          },
          {
            word: "gentis",
            startAt: 4.52,
            endAt: 4.98,
          },
          {
            word: "e",
            startAt: 4.98,
            endAt: 5.08,
          },
          {
            word: "respeitosos.",
            startAt: 5.08,
            endAt: 5.9,
          },
          {
            word: "A",
            startAt: 6.32,
            endAt: 6.92,
          },
          {
            word: "amizade",
            startAt: 6.92,
            endAt: 7.46,
          },
          {
            word: "e",
            startAt: 7.46,
            endAt: 7.54,
          },
          {
            word: "o",
            startAt: 7.54,
            endAt: 7.62,
          },
          {
            word: "respeito",
            startAt: 7.62,
            endAt: 8.1,
          },
          {
            word: "são",
            startAt: 8.1,
            endAt: 8.3,
          },
          {
            word: "mais",
            startAt: 8.3,
            endAt: 8.54,
          },
          {
            word: "fortes",
            startAt: 8.54,
            endAt: 9.02,
          },
          {
            word: "que",
            startAt: 9.02,
            endAt: 9.14,
          },
          {
            word: "qualquer",
            startAt: 9.14,
            endAt: 9.52,
          },
          {
            word: "brincadeira",
            startAt: 9.52,
            endAt: 10.08,
          },
          {
            word: "de",
            startAt: 10.08,
            endAt: 10.22,
          },
          {
            word: "mau",
            startAt: 10.22,
            endAt: 10.38,
          },
          {
            word: "gosto.",
            startAt: 10.38,
            endAt: 10.78,
          },
        ],
      },
    },
    {
      page: 10,
      text: "E assim, na Escola Aurora, todos aprenderam que o bullying é errado e que a amizade e o respeito são o caminho para um ambiente feliz e saudável. Esta história foi criada para você aprender sobre bullying e como evitá-lo. Assim a escola será um ambiente de amizade e respeito.",
      image: "/story/amizade/images/10.png",
      audio: {
        content: "/story/amizade/audios/9.mp3",
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
            word: "na",
            startAt: 0.9,
            endAt: 1.08,
          },
          {
            word: "Escola",
            startAt: 1.08,
            endAt: 1.44,
          },
          {
            word: "Aurora,",
            startAt: 1.44,
            endAt: 1.78,
          },
          {
            word: "todos",
            startAt: 2.04,
            endAt: 2.38,
          },
          {
            word: "aprenderam",
            startAt: 2.38,
            endAt: 3.06,
          },
          {
            word: "que",
            startAt: 3.06,
            endAt: 3.16,
          },
          {
            word: "o",
            startAt: 3.16,
            endAt: 3.34,
          },
          {
            word: "bullying",
            startAt: 3.34,
            endAt: 3.6,
          },
          {
            word: "é",
            startAt: 3.6,
            endAt: 3.76,
          },
          {
            word: "errado",
            startAt: 3.76,
            endAt: 4.1,
          },
          {
            word: "e",
            startAt: 4.1,
            endAt: 4.22,
          },
          {
            word: "que",
            startAt: 4.22,
            endAt: 4.32,
          },
          {
            word: "a",
            startAt: 4.32,
            endAt: 4.4,
          },
          {
            word: "amizade",
            startAt: 4.4,
            endAt: 4.78,
          },
          {
            word: "e",
            startAt: 4.78,
            endAt: 4.92,
          },
          {
            word: "o",
            startAt: 4.92,
            endAt: 4.98,
          },
          {
            word: "respeito",
            startAt: 4.98,
            endAt: 5.44,
          },
          {
            word: "são",
            startAt: 5.44,
            endAt: 5.66,
          },
          {
            word: "o",
            startAt: 5.66,
            endAt: 5.78,
          },
          {
            word: "caminho",
            startAt: 5.78,
            endAt: 6.04,
          },
          {
            word: "para",
            startAt: 6.04,
            endAt: 6.28,
          },
          {
            word: "um",
            startAt: 6.28,
            endAt: 6.4,
          },
          {
            word: "ambiente",
            startAt: 6.4,
            endAt: 6.8,
          },
          {
            word: "feliz",
            startAt: 6.8,
            endAt: 7.18,
          },
          {
            word: "e",
            startAt: 7.18,
            endAt: 7.36,
          },
          {
            word: "saudável.",
            startAt: 7.36,
            endAt: 7.86,
          },
          {
            word: "Esta",
            startAt: 8.5,
            endAt: 9.02,
          },
          {
            word: "história",
            startAt: 9.02,
            endAt: 9.36,
          },
          {
            word: "foi",
            startAt: 9.36,
            endAt: 9.56,
          },
          {
            word: "criada",
            startAt: 9.56,
            endAt: 10.02,
          },
          {
            word: "para",
            startAt: 10.02,
            endAt: 10.22,
          },
          {
            word: "você",
            startAt: 10.22,
            endAt: 10.48,
          },
          {
            word: "aprender",
            startAt: 10.48,
            endAt: 10.82,
          },
          {
            word: "sobre",
            startAt: 10.82,
            endAt: 11.18,
          },
          {
            word: "bullying",
            startAt: 11.18,
            endAt: 11.54,
          },
          {
            word: "e",
            startAt: 11.54,
            endAt: 11.74,
          },
          {
            word: "como",
            startAt: 11.74,
            endAt: 11.94,
          },
          {
            word: "evitá",
            startAt: 11.94,
            endAt: 12.36,
          },
          {
            word: "-lo.",
            startAt: 12.36,
            endAt: 12.48,
          },
          {
            word: "Assim",
            startAt: 12.66,
            endAt: 13.08,
          },
          {
            word: "a",
            startAt: 13.08,
            endAt: 13.26,
          },
          {
            word: "escola",
            startAt: 13.26,
            endAt: 13.6,
          },
          {
            word: "será",
            startAt: 13.6,
            endAt: 13.9,
          },
          {
            word: "um",
            startAt: 13.9,
            endAt: 14.04,
          },
          {
            word: "ambiente",
            startAt: 14.04,
            endAt: 14.4,
          },
          {
            word: "de",
            startAt: 14.4,
            endAt: 14.58,
          },
          {
            word: "amizade",
            startAt: 14.58,
            endAt: 15.08,
          },
          {
            word: "e",
            startAt: 15.08,
            endAt: 15.2,
          },
          {
            word: "respeito.",
            startAt: 15.2,
            endAt: 15.72,
          },
        ],
      },
    },
  ],
};

export default amizadeStory;
