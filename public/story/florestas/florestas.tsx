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

const florestasStory: Story = {
  title: "Tupã, o protetor das florestas e matas",
  slug: "tupa-florestas",
  pages: [
    {
      page: 1,
      text: "Tupã, o protetor das florestas e matas",
      image: "/story/florestas/images/capa.png",
    },
    {
      page: 2,
      text: "Era uma vez, uma menina chamada Bia e seu amigo, um cachorro chamado Tito. Eles adoravam explorar a floresta ao lado de sua casa e descobrir novas aventuras. Um dia, encontraram uma figura mística brilhante entre as árvores. Era Tupã, o deus indígena do trovão e da natureza.",
      image: "/story/florestas/images/img2.png",
      audio: {
        content: "/story/florestas/audios/1.mp3",
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
            startAt: 1.1,
            endAt: 1.44,
          },
          {
            word: "menina",
            startAt: 1.44,
            endAt: 1.78,
          },
          {
            word: "chamada",
            startAt: 1.78,
            endAt: 2.2,
          },
          {
            word: "Bea",
            startAt: 2.2,
            endAt: 2.44,
          },
          {
            word: "e",
            startAt: 2.44,
            endAt: 2.58,
          },
          {
            word: "seu",
            startAt: 2.58,
            endAt: 2.74,
          },
          {
            word: "amigo,",
            startAt: 2.74,
            endAt: 3.1,
          },
          {
            word: "um",
            startAt: 3.28,
            endAt: 3.5,
          },
          {
            word: "cachorro",
            startAt: 3.5,
            endAt: 3.94,
          },
          {
            word: "chamado",
            startAt: 3.94,
            endAt: 4.32,
          },
          {
            word: "Tito.",
            startAt: 4.32,
            endAt: 4.72,
          },
          {
            word: "Eles",
            startAt: 5.2,
            endAt: 5.88,
          },
          {
            word: "adoravam",
            startAt: 5.88,
            endAt: 6.36,
          },
          {
            word: "explorar",
            startAt: 6.36,
            endAt: 6.82,
          },
          {
            word: "a",
            startAt: 6.82,
            endAt: 6.9,
          },
          {
            word: "floresta",
            startAt: 6.9,
            endAt: 7.34,
          },
          {
            word: "ao",
            startAt: 7.34,
            endAt: 7.52,
          },
          {
            word: "lado",
            startAt: 7.52,
            endAt: 7.72,
          },
          {
            word: "de",
            startAt: 7.72,
            endAt: 7.86,
          },
          {
            word: "sua",
            startAt: 7.86,
            endAt: 8.08,
          },
          {
            word: "casa",
            startAt: 8.08,
            endAt: 8.44,
          },
          {
            word: "e",
            startAt: 8.44,
            endAt: 8.56,
          },
          {
            word: "descobrir",
            startAt: 8.56,
            endAt: 9,
          },
          {
            word: "novas",
            startAt: 9,
            endAt: 9.46,
          },
          {
            word: "aventuras.",
            startAt: 9.46,
            endAt: 10.1,
          },
          {
            word: "Um",
            startAt: 10.62,
            endAt: 11.24,
          },
          {
            word: "dia,",
            startAt: 11.24,
            endAt: 11.56,
          },
          {
            word: "encontraram",
            startAt: 11.78,
            endAt: 12.42,
          },
          {
            word: "uma",
            startAt: 12.42,
            endAt: 12.58,
          },
          {
            word: "figura",
            startAt: 12.58,
            endAt: 12.96,
          },
          {
            word: "mística",
            startAt: 12.96,
            endAt: 13.46,
          },
          {
            word: "brilhante",
            startAt: 13.46,
            endAt: 14,
          },
          {
            word: "entre",
            startAt: 14,
            endAt: 14.24,
          },
          {
            word: "as",
            startAt: 14.24,
            endAt: 14.44,
          },
          {
            word: "árvores.",
            startAt: 14.44,
            endAt: 14.9,
          },
          {
            word: "Era",
            startAt: 15.46,
            endAt: 16.06,
          },
          {
            word: "Tupã,",
            startAt: 16.06,
            endAt: 16.48,
          },
          {
            word: "o",
            startAt: 16.7,
            endAt: 16.96,
          },
          {
            word: "deus",
            startAt: 16.96,
            endAt: 17.22,
          },
          {
            word: "indígena",
            startAt: 17.22,
            endAt: 17.72,
          },
          {
            word: "do",
            startAt: 17.72,
            endAt: 17.82,
          },
          {
            word: "trovão",
            startAt: 17.82,
            endAt: 18.22,
          },
          {
            word: "e",
            startAt: 18.22,
            endAt: 18.32,
          },
          {
            word: "da",
            startAt: 18.32,
            endAt: 18.44,
          },
          {
            word: "natureza.",
            startAt: 18.44,
            endAt: 19,
          },
        ],
      },
    },
    {
      page: 3,
      text: 'Tupã, com sua voz suave e poderosa, disse, "Bia, Tito, preciso da ajuda de vocês. O planeta está em perigo por causa das mudanças climáticas e danos à natureza." Bia e Tito sentiram a urgência da missão e decidiram ajudar Tupã.',
      image: "/story/florestas/images/img3.png",
      audio: {
        content: "/story/florestas/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupan,",
            startAt: 0,
            endAt: 0.6,
          },
          {
            word: "com",
            startAt: 0.76,
            endAt: 1.02,
          },
          {
            word: "sua",
            startAt: 1.02,
            endAt: 1.3,
          },
          {
            word: "voz",
            startAt: 1.3,
            endAt: 1.56,
          },
          {
            word: "suave",
            startAt: 1.56,
            endAt: 2,
          },
          {
            word: "e",
            startAt: 2,
            endAt: 2.12,
          },
          {
            word: "poderosa,",
            startAt: 2.12,
            endAt: 2.66,
          },
          {
            word: "disse,",
            startAt: 2.96,
            endAt: 3.32,
          },
          {
            word: "Bia,",
            startAt: 3.56,
            endAt: 3.98,
          },
          {
            word: "Tito,",
            startAt: 4.22,
            endAt: 4.52,
          },
          {
            word: "preciso",
            startAt: 4.8,
            endAt: 5.3,
          },
          {
            word: "da",
            startAt: 5.3,
            endAt: 5.46,
          },
          {
            word: "ajuda",
            startAt: 5.46,
            endAt: 5.8,
          },
          {
            word: "de",
            startAt: 5.8,
            endAt: 5.96,
          },
          {
            word: "vocês.",
            startAt: 5.96,
            endAt: 6.5,
          },
          {
            word: "O",
            startAt: 7.28,
            endAt: 7.58,
          },
          {
            word: "planeta",
            startAt: 7.58,
            endAt: 7.96,
          },
          {
            word: "está",
            startAt: 7.96,
            endAt: 8.26,
          },
          {
            word: "em",
            startAt: 8.26,
            endAt: 8.4,
          },
          {
            word: "perigo",
            startAt: 8.4,
            endAt: 8.7,
          },
          {
            word: "por",
            startAt: 8.7,
            endAt: 8.96,
          },
          {
            word: "causa",
            startAt: 8.96,
            endAt: 9.24,
          },
          {
            word: "das",
            startAt: 9.24,
            endAt: 9.42,
          },
          {
            word: "mudanças",
            startAt: 9.42,
            endAt: 9.96,
          },
          {
            word: "climáticas",
            startAt: 9.96,
            endAt: 10.5,
          },
          {
            word: "e",
            startAt: 10.5,
            endAt: 10.7,
          },
          {
            word: "danos",
            startAt: 10.7,
            endAt: 11.06,
          },
          {
            word: "à",
            startAt: 11.06,
            endAt: 11.16,
          },
          {
            word: "natureza.",
            startAt: 11.16,
            endAt: 11.72,
          },
          {
            word: "Bia",
            startAt: 12.28,
            endAt: 12.88,
          },
          {
            word: "e",
            startAt: 12.88,
            endAt: 13.02,
          },
          {
            word: "Tito",
            startAt: 13.02,
            endAt: 13.32,
          },
          {
            word: "sentiram",
            startAt: 13.32,
            endAt: 13.82,
          },
          {
            word: "a",
            startAt: 13.82,
            endAt: 13.9,
          },
          {
            word: "urgência",
            startAt: 13.9,
            endAt: 14.34,
          },
          {
            word: "da",
            startAt: 14.34,
            endAt: 14.48,
          },
          {
            word: "missão",
            startAt: 14.48,
            endAt: 14.84,
          },
          {
            word: "e",
            startAt: 14.84,
            endAt: 14.96,
          },
          {
            word: "decidiram",
            startAt: 14.96,
            endAt: 15.44,
          },
          {
            word: "ajudar",
            startAt: 15.44,
            endAt: 15.76,
          },
          {
            word: "Tupan.",
            startAt: 15.76,
            endAt: 16.18,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'Tupã explicou que o clima do planeta estava mudando rapidamente. "O planeta está esquentando, e isso está causando problemas para os animais e as plantas. Precisamos fazer algo!", disse Tupã.',
      image: "/story/florestas/images/img4.png",
      audio: {
        content: "/story/florestas/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupan",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "explicou",
            startAt: 0.58,
            endAt: 1.04,
          },
          {
            word: "que",
            startAt: 1.04,
            endAt: 1.18,
          },
          {
            word: "o",
            startAt: 1.18,
            endAt: 1.26,
          },
          {
            word: "clima",
            startAt: 1.26,
            endAt: 1.54,
          },
          {
            word: "do",
            startAt: 1.54,
            endAt: 1.66,
          },
          {
            word: "planeta",
            startAt: 1.66,
            endAt: 2.02,
          },
          {
            word: "estava",
            startAt: 2.02,
            endAt: 2.4,
          },
          {
            word: "mudando",
            startAt: 2.4,
            endAt: 2.86,
          },
          {
            word: "rapidamente.",
            startAt: 2.86,
            endAt: 3.6,
          },
          {
            word: "O",
            startAt: 4.3,
            endAt: 4.66,
          },
          {
            word: "planeta",
            startAt: 4.66,
            endAt: 5.04,
          },
          {
            word: "está",
            startAt: 5.04,
            endAt: 5.3,
          },
          {
            word: "esquentando,",
            startAt: 5.3,
            endAt: 5.92,
          },
          {
            word: "e",
            startAt: 6.04,
            endAt: 6.34,
          },
          {
            word: "isso",
            startAt: 6.34,
            endAt: 6.5,
          },
          {
            word: "está",
            startAt: 6.5,
            endAt: 6.7,
          },
          {
            word: "causando",
            startAt: 6.7,
            endAt: 7.1,
          },
          {
            word: "problemas",
            startAt: 7.1,
            endAt: 7.58,
          },
          {
            word: "para",
            startAt: 7.58,
            endAt: 7.84,
          },
          {
            word: "os",
            startAt: 7.84,
            endAt: 7.98,
          },
          {
            word: "animais",
            startAt: 7.98,
            endAt: 8.42,
          },
          {
            word: "e",
            startAt: 8.42,
            endAt: 8.54,
          },
          {
            word: "as",
            startAt: 8.54,
            endAt: 8.68,
          },
          {
            word: "plantas.",
            startAt: 8.68,
            endAt: 9.2,
          },
          {
            word: "Precisamos",
            startAt: 10.08,
            endAt: 10.8,
          },
          {
            word: "fazer",
            startAt: 10.8,
            endAt: 11.12,
          },
          {
            word: "algo,",
            startAt: 11.12,
            endAt: 11.48,
          },
          {
            word: "disse",
            startAt: 11.68,
            endAt: 12.02,
          },
          {
            word: "Tupan.",
            startAt: 12.02,
            endAt: 12.46,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Bia e Tito decidiram ajudar. Primeiro, aprenderam que é importante reciclar. "Vamos separar o lixo e reutilizar materiais para proteger a natureza!", disse Bia, enquanto Tito abanava o rabo animado.',
      image: "/story/florestas/images/img5.png",
      audio: {
        content: "/story/florestas/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Bia",
            startAt: 0,
            endAt: 0.5,
          },
          {
            word: "e",
            startAt: 0.5,
            endAt: 0.66,
          },
          {
            word: "Tito",
            startAt: 0.66,
            endAt: 0.88,
          },
          {
            word: "decidiram",
            startAt: 0.88,
            endAt: 1.42,
          },
          {
            word: "ajudar.",
            startAt: 1.42,
            endAt: 1.84,
          },
          {
            word: "Primeiro,",
            startAt: 2.52,
            endAt: 3.26,
          },
          {
            word: "aprenderam",
            startAt: 3.58,
            endAt: 4.08,
          },
          {
            word: "que",
            startAt: 4.08,
            endAt: 4.22,
          },
          {
            word: "é",
            startAt: 4.22,
            endAt: 4.32,
          },
          {
            word: "importante",
            startAt: 4.32,
            endAt: 4.9,
          },
          {
            word: "reciclar.",
            startAt: 4.9,
            endAt: 5.56,
          },
          {
            word: "Vamos",
            startAt: 5.96,
            endAt: 6.7,
          },
          {
            word: "separar",
            startAt: 6.7,
            endAt: 7.22,
          },
          {
            word: "o",
            startAt: 7.22,
            endAt: 7.32,
          },
          {
            word: "lixo",
            startAt: 7.32,
            endAt: 7.64,
          },
          {
            word: "e",
            startAt: 7.64,
            endAt: 7.74,
          },
          {
            word: "reutilizar",
            startAt: 7.74,
            endAt: 8.3,
          },
          {
            word: "materiais",
            startAt: 8.3,
            endAt: 8.9,
          },
          {
            word: "para",
            startAt: 8.9,
            endAt: 9.06,
          },
          {
            word: "proteger",
            startAt: 9.06,
            endAt: 9.54,
          },
          {
            word: "a",
            startAt: 9.54,
            endAt: 9.66,
          },
          {
            word: "natureza,",
            startAt: 9.66,
            endAt: 10.24,
          },
          {
            word: "disse",
            startAt: 10.38,
            endAt: 10.74,
          },
          {
            word: "Bia,",
            startAt: 10.74,
            endAt: 11.12,
          },
          {
            word: "enquanto",
            startAt: 11.32,
            endAt: 11.72,
          },
          {
            word: "Tito",
            startAt: 11.72,
            endAt: 12.04,
          },
          {
            word: "abanava",
            startAt: 12.04,
            endAt: 12.46,
          },
          {
            word: "o",
            startAt: 12.46,
            endAt: 12.58,
          },
          {
            word: "rabo",
            startAt: 12.58,
            endAt: 12.88,
          },
          {
            word: "animado.",
            startAt: 12.88,
            endAt: 13.34,
          },
        ],
      },
    },
    {
      page: 6,
      text: 'Eles também aprenderam a economizar água. "Vamos fechar a torneira enquanto escovamos os dentes e tomar banhos mais curtos!", disse Bia. Tito adorou a ideia e latiu em aprovação.',
      image: "/story/florestas/images/img6.png",
      audio: {
        content: "/story/florestas/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Eles",
            startAt: 0,
            endAt: 0.44,
          },
          {
            word: "também",
            startAt: 0.44,
            endAt: 0.76,
          },
          {
            word: "aprenderam",
            startAt: 0.76,
            endAt: 1.42,
          },
          {
            word: "a",
            startAt: 1.42,
            endAt: 1.52,
          },
          {
            word: "economizar",
            startAt: 1.52,
            endAt: 2.16,
          },
          {
            word: "água.",
            startAt: 2.16,
            endAt: 2.5,
          },
          {
            word: "Vamos",
            startAt: 3.08,
            endAt: 3.76,
          },
          {
            word: "fechar",
            startAt: 3.76,
            endAt: 4.14,
          },
          {
            word: "a",
            startAt: 4.14,
            endAt: 4.26,
          },
          {
            word: "torneira",
            startAt: 4.26,
            endAt: 4.6,
          },
          {
            word: "enquanto",
            startAt: 4.6,
            endAt: 4.84,
          },
          {
            word: "escovamos",
            startAt: 4.84,
            endAt: 5.38,
          },
          {
            word: "os",
            startAt: 5.38,
            endAt: 5.56,
          },
          {
            word: "dentes",
            startAt: 5.56,
            endAt: 5.92,
          },
          {
            word: "e",
            startAt: 5.92,
            endAt: 6,
          },
          {
            word: "tomar",
            startAt: 6,
            endAt: 6.26,
          },
          {
            word: "banhos",
            startAt: 6.26,
            endAt: 6.7,
          },
          {
            word: "mais",
            startAt: 6.7,
            endAt: 7.02,
          },
          {
            word: "curtos,",
            startAt: 7.02,
            endAt: 7.6,
          },
          {
            word: "disse",
            startAt: 7.76,
            endAt: 8.12,
          },
          {
            word: "Bia.",
            startAt: 8.12,
            endAt: 8.48,
          },
          {
            word: "Tito",
            startAt: 9.14,
            endAt: 9.72,
          },
          {
            word: "adorou",
            startAt: 9.72,
            endAt: 10.06,
          },
          {
            word: "a",
            startAt: 10.06,
            endAt: 10.16,
          },
          {
            word: "ideia",
            startAt: 10.16,
            endAt: 10.48,
          },
          {
            word: "e",
            startAt: 10.48,
            endAt: 10.68,
          },
          {
            word: "latiu",
            startAt: 10.68,
            endAt: 11.06,
          },
          {
            word: "em",
            startAt: 11.06,
            endAt: 11.2,
          },
          {
            word: "aprovação.",
            startAt: 11.2,
            endAt: 11.8,
          },
        ],
      },
    },
    {
      page: 7,
      text: 'Tupã mostrou a eles que plantar árvores ajuda a combater as mudanças climáticas. "As árvores absorvem o gás carbônico e produzem oxigênio", explicou Tupã. Bia e Tito plantaram muitas árvores ao redor da floresta.',
      image: "/story/florestas/images/img7.png",
      audio: {
        content: "/story/florestas/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupã",
            startAt: 0,
            endAt: 0.54,
          },
          {
            word: "mostrou",
            startAt: 0.54,
            endAt: 1,
          },
          {
            word: "a",
            startAt: 1,
            endAt: 1.14,
          },
          {
            word: "eles",
            startAt: 1.14,
            endAt: 1.4,
          },
          {
            word: "que",
            startAt: 1.4,
            endAt: 1.54,
          },
          {
            word: "plantar",
            startAt: 1.54,
            endAt: 1.98,
          },
          {
            word: "árvores",
            startAt: 1.98,
            endAt: 2.4,
          },
          {
            word: "ajuda",
            startAt: 2.4,
            endAt: 2.8,
          },
          {
            word: "a",
            startAt: 2.8,
            endAt: 2.98,
          },
          {
            word: "combater",
            startAt: 2.98,
            endAt: 3.3,
          },
          {
            word: "as",
            startAt: 3.3,
            endAt: 3.5,
          },
          {
            word: "mudanças",
            startAt: 3.5,
            endAt: 4.02,
          },
          {
            word: "climáticas.",
            startAt: 4.02,
            endAt: 4.66,
          },
          {
            word: "As",
            startAt: 5.24,
            endAt: 5.9,
          },
          {
            word: "árvores",
            startAt: 5.9,
            endAt: 6.38,
          },
          {
            word: "absorvem",
            startAt: 6.38,
            endAt: 6.98,
          },
          {
            word: "o",
            startAt: 6.98,
            endAt: 7.08,
          },
          {
            word: "gás",
            startAt: 7.08,
            endAt: 7.3,
          },
          {
            word: "carbônico",
            startAt: 7.3,
            endAt: 7.94,
          },
          {
            word: "e",
            startAt: 7.94,
            endAt: 8.08,
          },
          {
            word: "produzem",
            startAt: 8.08,
            endAt: 8.56,
          },
          {
            word: "oxigênio,",
            startAt: 8.56,
            endAt: 9.24,
          },
          {
            word: "explicou",
            startAt: 9.42,
            endAt: 9.96,
          },
          {
            word: "Tupã.",
            startAt: 9.96,
            endAt: 10.38,
          },
          {
            word: "Bia",
            startAt: 11.3,
            endAt: 11.56,
          },
          {
            word: "e",
            startAt: 11.56,
            endAt: 11.66,
          },
          {
            word: "Tito",
            startAt: 11.66,
            endAt: 11.88,
          },
          {
            word: "plantaram",
            startAt: 11.88,
            endAt: 12.36,
          },
          {
            word: "muitas",
            startAt: 12.36,
            endAt: 12.72,
          },
          {
            word: "árvores",
            startAt: 12.72,
            endAt: 13.26,
          },
          {
            word: "ao",
            startAt: 13.26,
            endAt: 13.42,
          },
          {
            word: "redor",
            startAt: 13.42,
            endAt: 13.72,
          },
          {
            word: "da",
            startAt: 13.72,
            endAt: 13.86,
          },
          {
            word: "floresta.",
            startAt: 13.86,
            endAt: 14.42,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Durante a aventura, encontraram uma tartaruga marinha que estava triste porque havia muito lixo no mar. "Precisamos ajudar a limpar!", disse Bia. Eles recolheram o lixo e deixaram a praia limpa para a tartaruga.',
      image: "/story/florestas/images/img8.png",
      audio: {
        content: "/story/florestas/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Durante",
            startAt: 0,
            endAt: 0.62,
          },
          {
            word: "a",
            startAt: 0.62,
            endAt: 0.7,
          },
          {
            word: "aventura,",
            startAt: 0.7,
            endAt: 1.18,
          },
          {
            word: "encontraram",
            startAt: 1.46,
            endAt: 2.08,
          },
          {
            word: "uma",
            startAt: 2.08,
            endAt: 2.24,
          },
          {
            word: "tartaruga",
            startAt: 2.24,
            endAt: 2.8,
          },
          {
            word: "marinha",
            startAt: 2.8,
            endAt: 3.2,
          },
          {
            word: "que",
            startAt: 3.2,
            endAt: 3.36,
          },
          {
            word: "estava",
            startAt: 3.36,
            endAt: 3.64,
          },
          {
            word: "triste",
            startAt: 3.64,
            endAt: 4,
          },
          {
            word: "porque",
            startAt: 4,
            endAt: 4.32,
          },
          {
            word: "havia",
            startAt: 4.32,
            endAt: 4.6,
          },
          {
            word: "muito",
            startAt: 4.6,
            endAt: 5.12,
          },
          {
            word: "lixo",
            startAt: 5.12,
            endAt: 5.46,
          },
          {
            word: "no",
            startAt: 5.46,
            endAt: 5.6,
          },
          {
            word: "mar.",
            startAt: 5.6,
            endAt: 5.86,
          },
          {
            word: "Precisamos",
            startAt: 6.680000000000001,
            endAt: 7.36,
          },
          {
            word: "ajudar",
            startAt: 7.36,
            endAt: 7.72,
          },
          {
            word: "a",
            startAt: 7.72,
            endAt: 7.86,
          },
          {
            word: "limpar,",
            startAt: 7.86,
            endAt: 8.28,
          },
          {
            word: "disse",
            startAt: 8.44,
            endAt: 8.82,
          },
          {
            word: "Bia.",
            startAt: 8.82,
            endAt: 9.2,
          },
          {
            word: "Eles",
            startAt: 9.78,
            endAt: 10.38,
          },
          {
            word: "recolheram",
            startAt: 10.38,
            endAt: 10.92,
          },
          {
            word: "o",
            startAt: 10.92,
            endAt: 11.02,
          },
          {
            word: "lixo",
            startAt: 11.02,
            endAt: 11.3,
          },
          {
            word: "e",
            startAt: 11.3,
            endAt: 11.4,
          },
          {
            word: "deixaram",
            startAt: 11.4,
            endAt: 11.78,
          },
          {
            word: "a",
            startAt: 11.78,
            endAt: 11.88,
          },
          {
            word: "praia",
            startAt: 11.88,
            endAt: 12.16,
          },
          {
            word: "limpa",
            startAt: 12.16,
            endAt: 12.54,
          },
          {
            word: "para",
            startAt: 12.54,
            endAt: 12.76,
          },
          {
            word: "a",
            startAt: 12.76,
            endAt: 12.86,
          },
          {
            word: "tartaruga.",
            startAt: 12.86,
            endAt: 13.36,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'Tupã também ensinou a importância de economizar energia. "Apague as luzes quando sair de um cômodo e use mais a luz do sol!", disse Tupan. Bia começou a praticar isso em sua casa.',
      image: "/story/florestas/images/img9.png",
      audio: {
        content: "/story/florestas/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Tupan",
            startAt: 0,
            endAt: 0.58,
          },
          {
            word: "também",
            startAt: 0.58,
            endAt: 0.96,
          },
          {
            word: "ensinou",
            startAt: 0.96,
            endAt: 1.38,
          },
          {
            word: "a",
            startAt: 1.38,
            endAt: 1.48,
          },
          {
            word: "importância",
            startAt: 1.48,
            endAt: 2.06,
          },
          {
            word: "de",
            startAt: 2.06,
            endAt: 2.2,
          },
          {
            word: "economizar",
            startAt: 2.2,
            endAt: 2.74,
          },
          {
            word: "energia.",
            startAt: 2.74,
            endAt: 3.24,
          },
          {
            word: "Apague",
            startAt: 4.06,
            endAt: 4.66,
          },
          {
            word: "as",
            startAt: 4.66,
            endAt: 4.82,
          },
          {
            word: "luzes",
            startAt: 4.82,
            endAt: 5.22,
          },
          {
            word: "quando",
            startAt: 5.22,
            endAt: 5.46,
          },
          {
            word: "sair",
            startAt: 5.46,
            endAt: 5.8,
          },
          {
            word: "de",
            startAt: 5.8,
            endAt: 5.96,
          },
          {
            word: "um",
            startAt: 5.96,
            endAt: 6.1,
          },
          {
            word: "cômodo",
            startAt: 6.1,
            endAt: 6.46,
          },
          {
            word: "e",
            startAt: 6.46,
            endAt: 6.62,
          },
          {
            word: "use",
            startAt: 6.62,
            endAt: 6.86,
          },
          {
            word: "mais",
            startAt: 6.86,
            endAt: 7.2,
          },
          {
            word: "a",
            startAt: 7.2,
            endAt: 7.36,
          },
          {
            word: "luz",
            startAt: 7.36,
            endAt: 7.6,
          },
          {
            word: "do",
            startAt: 7.6,
            endAt: 7.76,
          },
          {
            word: "sol,",
            startAt: 7.76,
            endAt: 8.06,
          },
          {
            word: "disse",
            startAt: 8.28,
            endAt: 8.58,
          },
          {
            word: "Tupan.",
            startAt: 8.58,
            endAt: 9.04,
          },
          {
            word: "Bia",
            startAt: 9.92,
            endAt: 10.2,
          },
          {
            word: "começou",
            startAt: 10.2,
            endAt: 10.58,
          },
          {
            word: "a",
            startAt: 10.58,
            endAt: 10.74,
          },
          {
            word: "praticar",
            startAt: 10.74,
            endAt: 11.22,
          },
          {
            word: "isso",
            startAt: 11.22,
            endAt: 11.46,
          },
          {
            word: "em",
            startAt: 11.46,
            endAt: 11.58,
          },
          {
            word: "sua",
            startAt: 11.58,
            endAt: 11.82,
          },
          {
            word: "casa.",
            startAt: 11.82,
            endAt: 12.18,
          },
        ],
      },
    },
    {
      page: 10,
      text: 'Ao final da aventura, Tupan agradeceu a Bia e Tito por sua ajuda. "Vocês são verdadeiros heróis do planeta. Continuem cuidando do meio ambiente", disse Tupã.',
      image: "/story/florestas/images/img10.png",
      audio: {
        content: "/story/florestas/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Ao",
            startAt: 0,
            endAt: 0.36,
          },
          {
            word: "final",
            startAt: 0.36,
            endAt: 0.66,
          },
          {
            word: "da",
            startAt: 0.66,
            endAt: 0.78,
          },
          {
            word: "aventura,",
            startAt: 0.78,
            endAt: 1.28,
          },
          {
            word: "Tupan",
            startAt: 1.6,
            endAt: 1.9,
          },
          {
            word: "agradeceu",
            startAt: 1.9,
            endAt: 2.46,
          },
          {
            word: "a",
            startAt: 2.46,
            endAt: 2.64,
          },
          {
            word: "Bia",
            startAt: 2.64,
            endAt: 2.82,
          },
          {
            word: "e",
            startAt: 2.82,
            endAt: 2.96,
          },
          {
            word: "Tito",
            startAt: 2.96,
            endAt: 3.16,
          },
          {
            word: "por",
            startAt: 3.16,
            endAt: 3.36,
          },
          {
            word: "sua",
            startAt: 3.36,
            endAt: 3.58,
          },
          {
            word: "ajuda.",
            startAt: 3.58,
            endAt: 3.94,
          },
          {
            word: "Vocês",
            startAt: 4.56,
            endAt: 5.2,
          },
          {
            word: "são",
            startAt: 5.2,
            endAt: 5.5,
          },
          {
            word: "verdadeiros",
            startAt: 5.5,
            endAt: 6.16,
          },
          {
            word: "heróis",
            startAt: 6.16,
            endAt: 6.58,
          },
          {
            word: "do",
            startAt: 6.58,
            endAt: 6.68,
          },
          {
            word: "planeta.",
            startAt: 6.68,
            endAt: 7.16,
          },
          {
            word: "Continuem",
            startAt: 8.1,
            endAt: 8.74,
          },
          {
            word: "cuidando",
            startAt: 8.74,
            endAt: 9.3,
          },
          {
            word: "do",
            startAt: 9.3,
            endAt: 9.48,
          },
          {
            word: "meio",
            startAt: 9.48,
            endAt: 9.72,
          },
          {
            word: "ambiente,",
            startAt: 9.72,
            endAt: 10.26,
          },
          {
            word: "disse",
            startAt: 10.52,
            endAt: 10.86,
          },
          {
            word: "Tupan.",
            startAt: 10.86,
            endAt: 11.3,
          },
        ],
      },
    },
    {
      page: 11,
      text: "Bia e Tito voltaram para casa felizes, sabendo que pequenas atitudes fazem uma grande diferença. Eles continuaram a proteger o planeta todos os dias, inspirando seus amigos a fazerem o mesmo. Espero que essa história ajude as crianças a entenderem a importância da sustentabilidade e do cuidado com o meio ambiente de maneira divertida e educativa.",
      image: "/story/florestas/images/img11.png",
      audio: {
        content: "/story/florestas/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Bia",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "e",
            startAt: 0.48,
            endAt: 0.62,
          },
          {
            word: "Tito",
            startAt: 0.62,
            endAt: 0.84,
          },
          {
            word: "voltaram",
            startAt: 0.84,
            endAt: 1.3,
          },
          {
            word: "para",
            startAt: 1.3,
            endAt: 1.46,
          },
          {
            word: "casa",
            startAt: 1.46,
            endAt: 1.76,
          },
          {
            word: "felizes,",
            startAt: 1.76,
            endAt: 2.3,
          },
          {
            word: "sabendo",
            startAt: 2.56,
            endAt: 3.1,
          },
          {
            word: "que",
            startAt: 3.1,
            endAt: 3.26,
          },
          {
            word: "pequenas",
            startAt: 3.26,
            endAt: 3.66,
          },
          {
            word: "atitudes",
            startAt: 3.66,
            endAt: 4.16,
          },
          {
            word: "fazem",
            startAt: 4.16,
            endAt: 4.58,
          },
          {
            word: "uma",
            startAt: 4.58,
            endAt: 4.78,
          },
          {
            word: "grande",
            startAt: 4.78,
            endAt: 5.14,
          },
          {
            word: "diferença.",
            startAt: 5.14,
            endAt: 5.72,
          },
          {
            word: "Eles",
            startAt: 6.28,
            endAt: 6.92,
          },
          {
            word: "continuaram",
            startAt: 6.92,
            endAt: 7.58,
          },
          {
            word: "a",
            startAt: 7.58,
            endAt: 7.72,
          },
          {
            word: "proteger",
            startAt: 7.72,
            endAt: 8.12,
          },
          {
            word: "o",
            startAt: 8.12,
            endAt: 8.24,
          },
          {
            word: "planeta",
            startAt: 8.24,
            endAt: 8.56,
          },
          {
            word: "todos",
            startAt: 8.56,
            endAt: 8.96,
          },
          {
            word: "os",
            startAt: 8.96,
            endAt: 9.22,
          },
          {
            word: "dias,",
            startAt: 9.22,
            endAt: 9.5,
          },
          {
            word: "inspirando",
            startAt: 9.84,
            endAt: 10.3,
          },
          {
            word: "seus",
            startAt: 10.3,
            endAt: 10.5,
          },
          {
            word: "amigos",
            startAt: 10.5,
            endAt: 10.92,
          },
          {
            word: "a",
            startAt: 10.92,
            endAt: 11.14,
          },
          {
            word: "fazerem",
            startAt: 11.14,
            endAt: 11.5,
          },
          {
            word: "o",
            startAt: 11.5,
            endAt: 11.64,
          },
          {
            word: "mesmo.",
            startAt: 11.64,
            endAt: 11.96,
          },
          {
            word: "Espero",
            startAt: 12.7,
            endAt: 13.34,
          },
          {
            word: "que",
            startAt: 13.34,
            endAt: 13.52,
          },
          {
            word: "essa",
            startAt: 13.52,
            endAt: 13.7,
          },
          {
            word: "história",
            startAt: 13.7,
            endAt: 14.06,
          },
          {
            word: "ajude",
            startAt: 14.06,
            endAt: 14.44,
          },
          {
            word: "as",
            startAt: 14.44,
            endAt: 14.58,
          },
          {
            word: "crianças",
            startAt: 14.58,
            endAt: 15,
          },
          {
            word: "a",
            startAt: 15,
            endAt: 15.22,
          },
          {
            word: "entenderem",
            startAt: 15.22,
            endAt: 15.66,
          },
          {
            word: "a",
            startAt: 15.66,
            endAt: 15.8,
          },
          {
            word: "importância",
            startAt: 15.8,
            endAt: 16.42,
          },
          {
            word: "da",
            startAt: 16.42,
            endAt: 16.6,
          },
          {
            word: "sustentabilidade",
            startAt: 16.6,
            endAt: 17.54,
          },
          {
            word: "e",
            startAt: 17.54,
            endAt: 17.7,
          },
          {
            word: "do",
            startAt: 17.7,
            endAt: 17.8,
          },
          {
            word: "cuidado",
            startAt: 17.8,
            endAt: 18.18,
          },
          {
            word: "com",
            startAt: 18.18,
            endAt: 18.44,
          },
          {
            word: "o",
            startAt: 18.44,
            endAt: 18.56,
          },
          {
            word: "meio",
            startAt: 18.56,
            endAt: 18.72,
          },
          {
            word: "ambiente",
            startAt: 18.72,
            endAt: 19.12,
          },
          {
            word: "de",
            startAt: 19.12,
            endAt: 19.32,
          },
          {
            word: "maneira",
            startAt: 19.32,
            endAt: 19.64,
          },
          {
            word: "divertida",
            startAt: 19.64,
            endAt: 20.26,
          },
          {
            word: "e",
            startAt: 20.26,
            endAt: 20.38,
          },
          {
            word: "educativa.",
            startAt: 20.38,
            endAt: 21.02,
          },
        ],
      },
    },
  ],
};

export default florestasStory;
