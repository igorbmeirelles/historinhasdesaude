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

const dengueStory: Story = {
  title: "Pequenos Heróis Contra o Mosquito da Dengue",
  slug: "herois-dengue",
  pages: [
    {
      page: 1,
      text: "Bem-vindo à historinha, pequenos heróis contra o mosquito da Dengue, clique em avançar para começar a aventura de nossos amiguinhos.",
      image: "/story/dengue/images/capa.png",
      audio: {
        content: "/story/dengue/audios/0.mp3",
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
            endAt: 0.76,
          },
          {
            word: "à",
            startAt: 0.76,
            endAt: 0.88,
          },
          {
            word: "historinha,",
            startAt: 0.88,
            endAt: 1.38,
          },
          {
            word: "pequenos",
            startAt: 1.7,
            endAt: 2.08,
          },
          {
            word: "heróis",
            startAt: 2.08,
            endAt: 2.48,
          },
          {
            word: "contra",
            startAt: 2.48,
            endAt: 2.74,
          },
          {
            word: "o",
            startAt: 2.74,
            endAt: 2.84,
          },
          {
            word: "mosquito",
            startAt: 2.84,
            endAt: 3.22,
          },
          {
            word: "da",
            startAt: 3.22,
            endAt: 3.4,
          },
          {
            word: "dengue,",
            startAt: 3.4,
            endAt: 3.74,
          },
          {
            word: "clique",
            startAt: 4.1,
            endAt: 4.3,
          },
          {
            word: "em",
            startAt: 4.3,
            endAt: 4.48,
          },
          {
            word: "avançar",
            startAt: 4.48,
            endAt: 5,
          },
          {
            word: "para",
            startAt: 5,
            endAt: 5.18,
          },
          {
            word: "começar",
            startAt: 5.18,
            endAt: 5.62,
          },
          {
            word: "a",
            startAt: 5.62,
            endAt: 5.76,
          },
          {
            word: "aventura",
            startAt: 5.76,
            endAt: 6.18,
          },
          {
            word: "de",
            startAt: 6.18,
            endAt: 6.34,
          },
          {
            word: "nossos",
            startAt: 6.34,
            endAt: 6.66,
          },
          {
            word: "amiguinhos.",
            startAt: 6.66,
            endAt: 7.32,
          },
        ],
      },
    },
    {
      page: 2,
      text: "Era uma vez, na cidade de Sol Radiante, um grupo de amigos chamados Pequenos Heróis. Eles adoravam brincar no quintal da casa do João, mas um dia, ouviram falar sobre o perigo do mosquito da dengue.",
      image: "/story/dengue/images/2.png",
      audio: {
        content: "/story/dengue/audios/1.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Era",
            startAt: 0,
            endAt: 0.2,
          },
          {
            word: "uma",
            startAt: 0.2,
            endAt: 0.34,
          },
          {
            word: "vez,",
            startAt: 0.34,
            endAt: 0.72,
          },
          {
            word: "na",
            startAt: 0.92,
            endAt: 1.22,
          },
          {
            word: "cidade",
            startAt: 1.22,
            endAt: 1.56,
          },
          {
            word: "de",
            startAt: 1.56,
            endAt: 1.8,
          },
          {
            word: "Sol",
            startAt: 1.8,
            endAt: 2,
          },
          {
            word: "Radiante,",
            startAt: 2,
            endAt: 2.6,
          },
          {
            word: "um",
            startAt: 2.84,
            endAt: 3.08,
          },
          {
            word: "grupo",
            startAt: 3.08,
            endAt: 3.38,
          },
          {
            word: "de",
            startAt: 3.38,
            endAt: 3.5,
          },
          {
            word: "amigos",
            startAt: 3.5,
            endAt: 3.82,
          },
          {
            word: "chamados",
            startAt: 3.82,
            endAt: 4.32,
          },
          {
            word: "Pequenos",
            startAt: 4.32,
            endAt: 4.78,
          },
          {
            word: "Heróis.",
            startAt: 4.78,
            endAt: 5.26,
          },
          {
            word: "Eles",
            startAt: 5.44,
            endAt: 5.88,
          },
          {
            word: "adoravam",
            startAt: 5.88,
            endAt: 6.32,
          },
          {
            word: "brincar",
            startAt: 6.32,
            endAt: 6.8,
          },
          {
            word: "no",
            startAt: 6.8,
            endAt: 6.94,
          },
          {
            word: "quintal",
            startAt: 6.94,
            endAt: 7.36,
          },
          {
            word: "da",
            startAt: 7.36,
            endAt: 7.52,
          },
          {
            word: "casa",
            startAt: 7.52,
            endAt: 7.84,
          },
          {
            word: "do",
            startAt: 7.84,
            endAt: 7.98,
          },
          {
            word: "João,",
            startAt: 7.98,
            endAt: 8.28,
          },
          {
            word: "mas",
            startAt: 8.52,
            endAt: 8.8,
          },
          {
            word: "um",
            startAt: 8.8,
            endAt: 8.96,
          },
          {
            word: "dia,",
            startAt: 8.96,
            endAt: 9.28,
          },
          {
            word: "ouviram",
            startAt: 9.42,
            endAt: 9.94,
          },
          {
            word: "falar",
            startAt: 9.94,
            endAt: 10.3,
          },
          {
            word: "sobre",
            startAt: 10.3,
            endAt: 10.54,
          },
          {
            word: "o",
            startAt: 10.54,
            endAt: 10.64,
          },
          {
            word: "perigo",
            startAt: 10.64,
            endAt: 10.96,
          },
          {
            word: "do",
            startAt: 10.96,
            endAt: 11.1,
          },
          {
            word: "mosquito",
            startAt: 11.1,
            endAt: 11.56,
          },
          {
            word: "da",
            startAt: 11.56,
            endAt: 11.74,
          },
          {
            word: "dengue.",
            startAt: 11.74,
            endAt: 12.06,
          },
        ],
      },
    },
    {
      page: 3,
      text: "A professora Ana explicou que os mosquitos da Dengue gostam de colocar seus ovos em água parada. Os pequenos heróis decidiram que iriam acabar com todos os focos de Dengue no Quintal do João.",
      image: "/story/dengue/images/3.png",
      audio: {
        content: "/story/dengue/audios/2.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "A",
            startAt: 0,
            endAt: 0.16,
          },
          {
            word: "professora",
            startAt: 0.16,
            endAt: 0.74,
          },
          {
            word: "Ana",
            startAt: 0.74,
            endAt: 0.96,
          },
          {
            word: "explicou",
            startAt: 0.96,
            endAt: 1.4,
          },
          {
            word: "que",
            startAt: 1.4,
            endAt: 1.54,
          },
          {
            word: "os",
            startAt: 1.54,
            endAt: 1.64,
          },
          {
            word: "mosquitos",
            startAt: 1.64,
            endAt: 2.18,
          },
          {
            word: "da",
            startAt: 2.18,
            endAt: 2.32,
          },
          {
            word: "Dengue",
            startAt: 2.32,
            endAt: 2.68,
          },
          {
            word: "gostam",
            startAt: 2.68,
            endAt: 3.08,
          },
          {
            word: "de",
            startAt: 3.08,
            endAt: 3.18,
          },
          {
            word: "colocar",
            startAt: 3.18,
            endAt: 3.54,
          },
          {
            word: "seus",
            startAt: 3.54,
            endAt: 3.84,
          },
          {
            word: "ovos",
            startAt: 3.84,
            endAt: 4.22,
          },
          {
            word: "em",
            startAt: 4.22,
            endAt: 4.38,
          },
          {
            word: "água",
            startAt: 4.38,
            endAt: 4.62,
          },
          {
            word: "parada.",
            startAt: 4.62,
            endAt: 5.08,
          },
          {
            word: "Os",
            startAt: 5.3,
            endAt: 5.58,
          },
          {
            word: "pequenos",
            startAt: 5.58,
            endAt: 6.02,
          },
          {
            word: "heróis",
            startAt: 6.02,
            endAt: 6.44,
          },
          {
            word: "decidiram",
            startAt: 6.44,
            endAt: 6.94,
          },
          {
            word: "que",
            startAt: 6.94,
            endAt: 7.1,
          },
          {
            word: "iriam",
            startAt: 7.1,
            endAt: 7.36,
          },
          {
            word: "acabar",
            startAt: 7.36,
            endAt: 7.7,
          },
          {
            word: "com",
            startAt: 7.7,
            endAt: 7.98,
          },
          {
            word: "todos",
            startAt: 7.98,
            endAt: 8.38,
          },
          {
            word: "os",
            startAt: 8.38,
            endAt: 8.62,
          },
          {
            word: "focos",
            startAt: 8.62,
            endAt: 9,
          },
          {
            word: "de",
            startAt: 9,
            endAt: 9.12,
          },
          {
            word: "Dengue",
            startAt: 9.12,
            endAt: 9.48,
          },
          {
            word: "no",
            startAt: 9.48,
            endAt: 9.6,
          },
          {
            word: "Quintal",
            startAt: 9.6,
            endAt: 10.04,
          },
          {
            word: "do",
            startAt: 10.04,
            endAt: 10.2,
          },
          {
            word: "João.",
            startAt: 10.2,
            endAt: 10.46,
          },
        ],
      },
    },
    {
      page: 4,
      text: 'Primeiro, eles pegaram baldes e esvaziaram todos os potes e vasos que tinham água. "Não podemos deixar nenhum pouquinho de água!", disse Maria, a mais atenta do grupo.',
      image: "/story/dengue/images/4.jpeg",
      audio: {
        content: "/story/dengue/audios/3.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Primeiro,",
            startAt: 0,
            endAt: 0.48,
          },
          {
            word: "eles",
            startAt: 0.66,
            endAt: 0.86,
          },
          {
            word: "pegaram",
            startAt: 0.86,
            endAt: 1.26,
          },
          {
            word: "baldes",
            startAt: 1.26,
            endAt: 1.68,
          },
          {
            word: "e",
            startAt: 1.68,
            endAt: 1.76,
          },
          {
            word: "esvaziaram",
            startAt: 1.76,
            endAt: 2.32,
          },
          {
            word: "todos",
            startAt: 2.32,
            endAt: 2.64,
          },
          {
            word: "os",
            startAt: 2.64,
            endAt: 2.86,
          },
          {
            word: "potes",
            startAt: 2.86,
            endAt: 3.22,
          },
          {
            word: "e",
            startAt: 3.22,
            endAt: 3.34,
          },
          {
            word: "vasos",
            startAt: 3.34,
            endAt: 3.7,
          },
          {
            word: "que",
            startAt: 3.7,
            endAt: 3.86,
          },
          {
            word: "tinham",
            startAt: 3.86,
            endAt: 4.12,
          },
          {
            word: "água.",
            startAt: 4.12,
            endAt: 4.5,
          },
          {
            word: "Não",
            startAt: 4.76,
            endAt: 5.08,
          },
          {
            word: "podemos",
            startAt: 5.08,
            endAt: 5.52,
          },
          {
            word: "deixar",
            startAt: 5.52,
            endAt: 6,
          },
          {
            word: "nenhum",
            startAt: 6,
            endAt: 6.28,
          },
          {
            word: "pouquinho",
            startAt: 6.28,
            endAt: 6.78,
          },
          {
            word: "de",
            startAt: 6.78,
            endAt: 7.04,
          },
          {
            word: "água,",
            startAt: 7.04,
            endAt: 7.38,
          },
          {
            word: "disse",
            startAt: 7.62,
            endAt: 8.08,
          },
          {
            word: "Maria,",
            startAt: 8.08,
            endAt: 8.48,
          },
          {
            word: "a",
            startAt: 8.74,
            endAt: 9,
          },
          {
            word: "mais",
            startAt: 9,
            endAt: 9.26,
          },
          {
            word: "atenta",
            startAt: 9.26,
            endAt: 9.66,
          },
          {
            word: "do",
            startAt: 9.66,
            endAt: 9.8,
          },
          {
            word: "grupo.",
            startAt: 9.8,
            endAt: 10.08,
          },
        ],
      },
    },
    {
      page: 5,
      text: 'Depois, eles tamparam a caixa d"água com uma tampa com presilhas e uma tela no respirador. "Ah sim, os mosquitos não vão conseguir entrar", explicou Pedro, o mais forte do grupo.',
      image: "/story/dengue/images/5.png",
      audio: {
        content: "/story/dengue/audios/4.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Depois,",
            startAt: 0,
            endAt: 0.64,
          },
          {
            word: "eles",
            startAt: 0.94,
            endAt: 1.26,
          },
          {
            word: "tamparam",
            startAt: 1.26,
            endAt: 1.64,
          },
          {
            word: "a",
            startAt: 1.64,
            endAt: 1.76,
          },
          {
            word: "caixa",
            startAt: 1.76,
            endAt: 2.04,
          },
          {
            word: "d",
            startAt: 2.04,
            endAt: 2.18,
          },
          {
            word: "'água",
            startAt: 2.18,
            endAt: 2.38,
          },
          {
            word: "com",
            startAt: 2.38,
            endAt: 2.54,
          },
          {
            word: "uma",
            startAt: 2.54,
            endAt: 2.74,
          },
          {
            word: "tampa",
            startAt: 2.74,
            endAt: 3.1,
          },
          {
            word: "com",
            startAt: 3.1,
            endAt: 3.28,
          },
          {
            word: "presilhas",
            startAt: 3.28,
            endAt: 3.76,
          },
          {
            word: "e",
            startAt: 3.76,
            endAt: 3.9,
          },
          {
            word: "uma",
            startAt: 3.9,
            endAt: 4.04,
          },
          {
            word: "tela",
            startAt: 4.04,
            endAt: 4.36,
          },
          {
            word: "no",
            startAt: 4.36,
            endAt: 4.5,
          },
          {
            word: "respirador.",
            startAt: 4.5,
            endAt: 5.16,
          },
          {
            word: "Ah",
            startAt: 5.74,
            endAt: 6.28,
          },
          {
            word: "sim,",
            startAt: 6.28,
            endAt: 6.42,
          },
          {
            word: "os",
            startAt: 6.68,
            endAt: 6.9,
          },
          {
            word: "mosquitos",
            startAt: 6.9,
            endAt: 7.44,
          },
          {
            word: "não",
            startAt: 7.44,
            endAt: 7.64,
          },
          {
            word: "vão",
            startAt: 7.64,
            endAt: 7.86,
          },
          {
            word: "conseguir",
            startAt: 7.86,
            endAt: 8.28,
          },
          {
            word: "entrar,",
            startAt: 8.28,
            endAt: 8.68,
          },
          {
            word: "explicou",
            startAt: 8.9,
            endAt: 9.42,
          },
          {
            word: "Pedro,",
            startAt: 9.42,
            endAt: 9.8,
          },
          {
            word: "o",
            startAt: 10.02,
            endAt: 10.28,
          },
          {
            word: "mais",
            startAt: 10.28,
            endAt: 10.5,
          },
          {
            word: "forte",
            startAt: 10.5,
            endAt: 10.86,
          },
          {
            word: "do",
            startAt: 10.86,
            endAt: 11.02,
          },
          {
            word: "grupo.",
            startAt: 11.02,
            endAt: 11.32,
          },
        ],
      },
    },
    {
      page: 6,
      text: "Joana, que adorava plantas, percebeu que o prato da planta tinha água acumulada. Eles colocaram areia nos pratinhos das plantas para impedir a água de ficar parada.",
      image: "/story/dengue/images/6.png",
      audio: {
        content: "/story/dengue/audios/5.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Joana,",
            startAt: 0,
            endAt: 0.68,
          },
          {
            word: "que",
            startAt: 0.82,
            endAt: 0.98,
          },
          {
            word: "adorava",
            startAt: 0.98,
            endAt: 1.4,
          },
          {
            word: "plantas,",
            startAt: 1.4,
            endAt: 1.94,
          },
          {
            word: "percebeu",
            startAt: 2.18,
            endAt: 2.74,
          },
          {
            word: "que",
            startAt: 2.74,
            endAt: 2.84,
          },
          {
            word: "o",
            startAt: 2.84,
            endAt: 2.94,
          },
          {
            word: "prato",
            startAt: 2.94,
            endAt: 3.26,
          },
          {
            word: "da",
            startAt: 3.26,
            endAt: 3.36,
          },
          {
            word: "planta",
            startAt: 3.36,
            endAt: 3.78,
          },
          {
            word: "tinha",
            startAt: 3.78,
            endAt: 4,
          },
          {
            word: "água",
            startAt: 4,
            endAt: 4.32,
          },
          {
            word: "acumulada.",
            startAt: 4.32,
            endAt: 4.94,
          },
          {
            word: "Eles",
            startAt: 5.4,
            endAt: 6.04,
          },
          {
            word: "colocaram",
            startAt: 6.04,
            endAt: 6.52,
          },
          {
            word: "areia",
            startAt: 6.52,
            endAt: 6.86,
          },
          {
            word: "nos",
            startAt: 6.86,
            endAt: 7.04,
          },
          {
            word: "pratinhos",
            startAt: 7.04,
            endAt: 7.5,
          },
          {
            word: "das",
            startAt: 7.5,
            endAt: 7.7,
          },
          {
            word: "plantas",
            startAt: 7.7,
            endAt: 8.16,
          },
          {
            word: "para",
            startAt: 8.16,
            endAt: 8.32,
          },
          {
            word: "impedir",
            startAt: 8.32,
            endAt: 8.72,
          },
          {
            word: "a",
            startAt: 8.72,
            endAt: 8.82,
          },
          {
            word: "água",
            startAt: 8.82,
            endAt: 9.06,
          },
          {
            word: "de",
            startAt: 9.06,
            endAt: 9.18,
          },
          {
            word: "ficar",
            startAt: 9.18,
            endAt: 9.5,
          },
          {
            word: "parada.",
            startAt: 9.5,
            endAt: 9.98,
          },
        ],
      },
    },
    {
      page: 7,
      text: "Os pequenos heróis da vida real também conferiram os vasos, potes e garrafas velhas que estavam no quintal, e os guardaram em um lugar coberto para que não acumulassem água e outros foram para o lixo.",
      image: "/story/dengue/images/7.png",
      audio: {
        content: "/story/dengue/audios/6.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Os",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "pequenos",
            startAt: 0.38,
            endAt: 0.84,
          },
          {
            word: "heróis",
            startAt: 0.84,
            endAt: 1.22,
          },
          {
            word: "da",
            startAt: 1.22,
            endAt: 1.32,
          },
          {
            word: "vida",
            startAt: 1.32,
            endAt: 1.56,
          },
          {
            word: "real",
            startAt: 1.56,
            endAt: 1.9,
          },
          {
            word: "também",
            startAt: 1.9,
            endAt: 2.2,
          },
          {
            word: "conferiram",
            startAt: 2.2,
            endAt: 2.78,
          },
          {
            word: "os",
            startAt: 2.78,
            endAt: 2.94,
          },
          {
            word: "vasos,",
            startAt: 2.94,
            endAt: 3.36,
          },
          {
            word: "potes",
            startAt: 3.68,
            endAt: 4,
          },
          {
            word: "e",
            startAt: 4,
            endAt: 4.1,
          },
          {
            word: "garrafas",
            startAt: 4.1,
            endAt: 4.6,
          },
          {
            word: "velhas",
            startAt: 4.6,
            endAt: 5,
          },
          {
            word: "que",
            startAt: 5,
            endAt: 5.14,
          },
          {
            word: "estavam",
            startAt: 5.14,
            endAt: 5.46,
          },
          {
            word: "no",
            startAt: 5.46,
            endAt: 5.62,
          },
          {
            word: "quintal,",
            startAt: 5.62,
            endAt: 6.08,
          },
          {
            word: "e",
            startAt: 6.12,
            endAt: 6.56,
          },
          {
            word: "os",
            startAt: 6.56,
            endAt: 6.72,
          },
          {
            word: "guardaram",
            startAt: 6.72,
            endAt: 7.22,
          },
          {
            word: "em",
            startAt: 7.22,
            endAt: 7.34,
          },
          {
            word: "um",
            startAt: 7.34,
            endAt: 7.44,
          },
          {
            word: "lugar",
            startAt: 7.44,
            endAt: 7.7,
          },
          {
            word: "coberto",
            startAt: 7.7,
            endAt: 8.26,
          },
          {
            word: "para",
            startAt: 8.26,
            endAt: 8.44,
          },
          {
            word: "que",
            startAt: 8.44,
            endAt: 8.6,
          },
          {
            word: "não",
            startAt: 8.6,
            endAt: 8.76,
          },
          {
            word: "acumulassem",
            startAt: 8.76,
            endAt: 9.46,
          },
          {
            word: "água",
            startAt: 9.46,
            endAt: 9.74,
          },
          {
            word: "e",
            startAt: 9.74,
            endAt: 9.92,
          },
          {
            word: "outros",
            startAt: 9.92,
            endAt: 10.2,
          },
          {
            word: "foram",
            startAt: 10.2,
            endAt: 10.48,
          },
          {
            word: "para",
            startAt: 10.48,
            endAt: 10.66,
          },
          {
            word: "o",
            startAt: 10.66,
            endAt: 10.74,
          },
          {
            word: "lixo.",
            startAt: 10.74,
            endAt: 11.06,
          },
        ],
      },
    },
    {
      page: 8,
      text: 'Enquanto isso, Lucas, o mais curioso, encontrou uma garrafa deitada no jardim. Ele a levantou, jogou fora a água que estava dentro e a colocou num lugar coberto. "Pronto! Nenhum mosquito vai colocar ovos aqui!", disse Lucas.',
      image: "/story/dengue/images/8.png",
      audio: {
        content: "/story/dengue/audios/7.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Enquanto",
            startAt: 0,
            endAt: 0.68,
          },
          {
            word: "isso,",
            startAt: 0.68,
            endAt: 1.02,
          },
          {
            word: "Lucas,",
            startAt: 1.3,
            endAt: 1.64,
          },
          {
            word: "o",
            startAt: 1.88,
            endAt: 2.08,
          },
          {
            word: "mais",
            startAt: 2.08,
            endAt: 2.32,
          },
          {
            word: "curioso,",
            startAt: 2.32,
            endAt: 2.9,
          },
          {
            word: "encontrou",
            startAt: 3.12,
            endAt: 3.56,
          },
          {
            word: "uma",
            startAt: 3.56,
            endAt: 3.7,
          },
          {
            word: "garrafa",
            startAt: 3.7,
            endAt: 4.2,
          },
          {
            word: "deitada",
            startAt: 4.2,
            endAt: 4.64,
          },
          {
            word: "no",
            startAt: 4.64,
            endAt: 4.78,
          },
          {
            word: "jardim.",
            startAt: 4.78,
            endAt: 5.22,
          },
          {
            word: "Ele",
            startAt: 5.92,
            endAt: 6.26,
          },
          {
            word: "a",
            startAt: 6.26,
            endAt: 6.36,
          },
          {
            word: "levantou,",
            startAt: 6.36,
            endAt: 6.84,
          },
          {
            word: "jogou",
            startAt: 7.12,
            endAt: 7.48,
          },
          {
            word: "fora",
            startAt: 7.48,
            endAt: 7.82,
          },
          {
            word: "a",
            startAt: 7.82,
            endAt: 7.94,
          },
          {
            word: "água",
            startAt: 7.94,
            endAt: 8.14,
          },
          {
            word: "que",
            startAt: 8.14,
            endAt: 8.28,
          },
          {
            word: "estava",
            startAt: 8.28,
            endAt: 8.54,
          },
          {
            word: "dentro",
            startAt: 8.54,
            endAt: 8.96,
          },
          {
            word: "e",
            startAt: 8.96,
            endAt: 9.12,
          },
          {
            word: "a",
            startAt: 9.12,
            endAt: 9.22,
          },
          {
            word: "colocou",
            startAt: 9.22,
            endAt: 9.58,
          },
          {
            word: "num",
            startAt: 9.58,
            endAt: 9.72,
          },
          {
            word: "lugar",
            startAt: 9.72,
            endAt: 9.98,
          },
          {
            word: "coberto.",
            startAt: 9.98,
            endAt: 10.56,
          },
          {
            word: "Pronto!",
            startAt: 11.2,
            endAt: 11.88,
          },
          {
            word: "Nenhum",
            startAt: 12.58,
            endAt: 13.26,
          },
          {
            word: "mosquito",
            startAt: 13.26,
            endAt: 13.64,
          },
          {
            word: "vai",
            startAt: 13.64,
            endAt: 13.86,
          },
          {
            word: "colocar",
            startAt: 13.86,
            endAt: 14.26,
          },
          {
            word: "ovos",
            startAt: 14.26,
            endAt: 14.68,
          },
          {
            word: "aqui,",
            startAt: 14.68,
            endAt: 14.94,
          },
          {
            word: "disse",
            startAt: 15.14,
            endAt: 15.46,
          },
          {
            word: "Lucas.",
            startAt: 15.46,
            endAt: 15.88,
          },
        ],
      },
    },
    {
      page: 9,
      text: 'Ao final do dia, o quintal estava limpo e seguro. A professora Ana ficou muito orgulhosa e disse, "Vocês são verdadeiros heróis da saúde!"',
      image: "/story/dengue/images/9.png",
      audio: {
        content: "/story/dengue/audios/8.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Ao",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "final",
            startAt: 0.38,
            endAt: 0.64,
          },
          {
            word: "do",
            startAt: 0.64,
            endAt: 0.82,
          },
          {
            word: "dia,",
            startAt: 0.82,
            endAt: 1.08,
          },
          {
            word: "o",
            startAt: 1.34,
            endAt: 1.56,
          },
          {
            word: "quintal",
            startAt: 1.56,
            endAt: 2,
          },
          {
            word: "estava",
            startAt: 2,
            endAt: 2.34,
          },
          {
            word: "limpo",
            startAt: 2.34,
            endAt: 2.72,
          },
          {
            word: "e",
            startAt: 2.72,
            endAt: 2.8,
          },
          {
            word: "seguro.",
            startAt: 2.8,
            endAt: 3.18,
          },
          {
            word: "A",
            startAt: 3.64,
            endAt: 4.24,
          },
          {
            word: "professora",
            startAt: 4.24,
            endAt: 4.82,
          },
          {
            word: "Ana",
            startAt: 4.82,
            endAt: 5.08,
          },
          {
            word: "ficou",
            startAt: 5.08,
            endAt: 5.42,
          },
          {
            word: "muito",
            startAt: 5.42,
            endAt: 5.84,
          },
          {
            word: "orgulhosa",
            startAt: 5.84,
            endAt: 6.38,
          },
          {
            word: "e",
            startAt: 6.38,
            endAt: 6.52,
          },
          {
            word: "disse,",
            startAt: 6.52,
            endAt: 6.82,
          },
          {
            word: "Vocês",
            startAt: 7.04,
            endAt: 7.5,
          },
          {
            word: "são",
            startAt: 7.5,
            endAt: 7.76,
          },
          {
            word: "verdadeiros",
            startAt: 7.76,
            endAt: 8.36,
          },
          {
            word: "heróis",
            startAt: 8.36,
            endAt: 8.76,
          },
          {
            word: "da",
            startAt: 8.76,
            endAt: 8.86,
          },
          {
            word: "saúde!",
            startAt: 8.86,
            endAt: 9.3,
          },
        ],
      },
    },
    {
      page: 10,
      text: "Os pequenos agentes da saúde prometeram continuar cuidando do quintal e ensinaram suas famílias e amigos a fazerem o mesmo. Assim, a cidade de Sol Radiante ficou protegida dos mosquitos da dengue.",
      image: "/story/dengue/images/10.png",
      audio: {
        content: "/story/dengue/audios/9.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "Os",
            startAt: 0,
            endAt: 0.38,
          },
          {
            word: "pequenos",
            startAt: 0.38,
            endAt: 0.8,
          },
          {
            word: "agentes",
            startAt: 0.8,
            endAt: 1.3,
          },
          {
            word: "da",
            startAt: 1.3,
            endAt: 1.44,
          },
          {
            word: "saúde",
            startAt: 1.44,
            endAt: 1.82,
          },
          {
            word: "prometeram",
            startAt: 1.82,
            endAt: 2.42,
          },
          {
            word: "continuar",
            startAt: 2.42,
            endAt: 2.84,
          },
          {
            word: "cuidando",
            startAt: 2.84,
            endAt: 3.42,
          },
          {
            word: "do",
            startAt: 3.42,
            endAt: 3.56,
          },
          {
            word: "quintal",
            startAt: 3.56,
            endAt: 4.06,
          },
          {
            word: "e",
            startAt: 4.06,
            endAt: 4.18,
          },
          {
            word: "ensinaram",
            startAt: 4.18,
            endAt: 4.6,
          },
          {
            word: "suas",
            startAt: 4.6,
            endAt: 4.82,
          },
          {
            word: "famílias",
            startAt: 4.82,
            endAt: 5.34,
          },
          {
            word: "e",
            startAt: 5.34,
            endAt: 5.44,
          },
          {
            word: "amigos",
            startAt: 5.44,
            endAt: 5.8,
          },
          {
            word: "a",
            startAt: 5.8,
            endAt: 6,
          },
          {
            word: "fazerem",
            startAt: 6,
            endAt: 6.36,
          },
          {
            word: "o",
            startAt: 6.36,
            endAt: 6.48,
          },
          {
            word: "mesmo.",
            startAt: 6.48,
            endAt: 6.8,
          },
          {
            word: "Assim,",
            startAt: 7.44,
            endAt: 8.12,
          },
          {
            word: "a",
            startAt: 8.36,
            endAt: 8.56,
          },
          {
            word: "cidade",
            startAt: 8.56,
            endAt: 8.9,
          },
          {
            word: "de",
            startAt: 8.9,
            endAt: 9.16,
          },
          {
            word: "Sol",
            startAt: 9.16,
            endAt: 9.36,
          },
          {
            word: "Radiante",
            startAt: 9.36,
            endAt: 9.9,
          },
          {
            word: "ficou",
            startAt: 9.9,
            endAt: 10.18,
          },
          {
            word: "protegida",
            startAt: 10.18,
            endAt: 10.78,
          },
          {
            word: "dos",
            startAt: 10.78,
            endAt: 10.96,
          },
          {
            word: "mosquitos",
            startAt: 10.96,
            endAt: 11.52,
          },
          {
            word: "da",
            startAt: 11.52,
            endAt: 11.66,
          },
          {
            word: "dengue.",
            startAt: 11.66,
            endAt: 12,
          },
        ],
      },
    },
    {
      page: 11,
      text: "E foi assim que João, Maria, Pedro, Joana e Lucas se tornaram os verdadeiros pequenos heróis da saúde, sempre prontos para proteger a saúde de todos. Essa história foi criada para inspirar e divertir você, enquanto aprende sobre a importância de combater o mosquito da dengue.",
      image: "/story/dengue/images/11.png",
      audio: {
        content: "/story/dengue/audios/10.mp3",
        type: "audio/mp3",
        wordsTimestamp: [
          {
            word: "E",
            startAt: 0,
            endAt: 0.32,
          },
          {
            word: "foi",
            startAt: 0.32,
            endAt: 0.54,
          },
          {
            word: "assim",
            startAt: 0.54,
            endAt: 0.82,
          },
          {
            word: "que",
            startAt: 0.82,
            endAt: 1,
          },
          {
            word: "João,",
            startAt: 1,
            endAt: 1.28,
          },
          {
            word: "Maria,",
            startAt: 1.54,
            endAt: 2,
          },
          {
            word: "Pedro,",
            startAt: 2.28,
            endAt: 2.64,
          },
          {
            word: "Joana",
            startAt: 3,
            endAt: 3.38,
          },
          {
            word: "e",
            startAt: 3.38,
            endAt: 3.52,
          },
          {
            word: "Lucas",
            startAt: 3.52,
            endAt: 3.78,
          },
          {
            word: "se",
            startAt: 3.78,
            endAt: 4,
          },
          {
            word: "tornaram",
            startAt: 4,
            endAt: 4.42,
          },
          {
            word: "os",
            startAt: 4.42,
            endAt: 4.56,
          },
          {
            word: "verdadeiros",
            startAt: 4.56,
            endAt: 5.1,
          },
          {
            word: "pequenos",
            startAt: 5.1,
            endAt: 5.52,
          },
          {
            word: "heróis",
            startAt: 5.52,
            endAt: 5.9,
          },
          {
            word: "da",
            startAt: 5.9,
            endAt: 6,
          },
          {
            word: "saúde,",
            startAt: 6,
            endAt: 6.46,
          },
          {
            word: "sempre",
            startAt: 6.76,
            endAt: 7.18,
          },
          {
            word: "prontos",
            startAt: 7.18,
            endAt: 7.66,
          },
          {
            word: "para",
            startAt: 7.66,
            endAt: 7.84,
          },
          {
            word: "proteger",
            startAt: 7.84,
            endAt: 8.32,
          },
          {
            word: "a",
            startAt: 8.32,
            endAt: 8.44,
          },
          {
            word: "saúde",
            startAt: 8.44,
            endAt: 8.84,
          },
          {
            word: "de",
            startAt: 8.84,
            endAt: 9.02,
          },
          {
            word: "todos.",
            startAt: 9.02,
            endAt: 9.36,
          },
          {
            word: "Essa",
            startAt: 10.02,
            endAt: 10.66,
          },
          {
            word: "história",
            startAt: 10.66,
            endAt: 11.02,
          },
          {
            word: "foi",
            startAt: 11.02,
            endAt: 11.24,
          },
          {
            word: "criada",
            startAt: 11.24,
            endAt: 11.68,
          },
          {
            word: "para",
            startAt: 11.68,
            endAt: 11.88,
          },
          {
            word: "inspirar",
            startAt: 11.88,
            endAt: 12.34,
          },
          {
            word: "e",
            startAt: 12.34,
            endAt: 12.42,
          },
          {
            word: "divertir",
            startAt: 12.42,
            endAt: 12.92,
          },
          {
            word: "você,",
            startAt: 12.92,
            endAt: 13.3,
          },
          {
            word: "enquanto",
            startAt: 13.54,
            endAt: 14.02,
          },
          {
            word: "aprende",
            startAt: 14.02,
            endAt: 14.5,
          },
          {
            word: "sobre",
            startAt: 14.5,
            endAt: 14.7,
          },
          {
            word: "a",
            startAt: 14.7,
            endAt: 14.8,
          },
          {
            word: "importância",
            startAt: 14.8,
            endAt: 15.38,
          },
          {
            word: "de",
            startAt: 15.38,
            endAt: 15.52,
          },
          {
            word: "combater",
            startAt: 15.52,
            endAt: 15.94,
          },
          {
            word: "o",
            startAt: 15.94,
            endAt: 16.08,
          },
          {
            word: "mosquito",
            startAt: 16.08,
            endAt: 16.52,
          },
          {
            word: "da",
            startAt: 16.52,
            endAt: 16.74,
          },
          {
            word: "dengue.",
            startAt: 16.74,
            endAt: 17.06,
          },
        ],
      },
    },
  ],
};

export default dengueStory;
