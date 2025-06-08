import { Link } from "react-router-dom";

type Story = {
  title: string;
  slug: string;
  image: string;
};

const storySlugs: Story[] = [
  {
    title: "1: Pequenos Heróis Contra o Mosquito da Dengue",
    slug: "herois-dengue",
    image: "/story/dengue/images/capa.png",
  },
  {
    title: "2: Brincadeiras legais no recreio",
    slug: "brincadeiras-recreio",
    image: "/story/recreio/images/capa.jpeg",
  },
  {
    title: "3: Mia e o Reino dos Alimentos Saudáveis",
    slug: "mia-alimentos",
    image: "/story/alimentos/images/capa.png",
  },
  {
    title: "4: Lili e o Poder da Amizade",
    slug: "lili-amizade",
    image: "/story/amizade/images/capa.png",
  },
  {
    title: "5: A Aventura de Pedro e Ana no Trânsito Seguro",
    slug: "transito-seguro",
    image: "/story/transito/images/capa.png",
  },
  {
    title: "6: Beto e o Clube da Higiene",
    slug: "beto-higiene",
    image: "/story/higiene/images/capa.png",
  },
  {
    title: "7: Nina e a Magia das Vacinas",
    slug: "nina-vacinas",
    image: "/story/vacina/images/capa.jpg",
  },
  {
    title: "8: Os Óculos de Luísa e seu Amigo Léo",
    slug: "oculos-luisa",
    image: "/story/oculos/images/capa.png",
  },
  {
    title: "9: A Aventura de João e a Tela Mágica",
    slug: "tela-magica",
    image: "/story/tela/images/capa.png",
  },
  {
    title: "10: A história de Lucas no combate aos piolhos",
    slug: "lucas-piolho",
    image: "/story/piolho/images/capa.png",
  },
  {
    title: "11: Tupã, o Protetor das Florestas e Matas",
    slug: "tupa-florestas",
    image: "/story/florestas/images/capa.png",
  },
  {
    title: "12: O Jardim da Mente",
    slug: "jardim-mente",
    image: "/story/jardim/images/capa.png",
  },
];

export function Main() {
  //const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-purple-950/70 backdrop-blur-sm p-6">
      <div className="grid gap-4 w-full max-w-[400px]">
        {storySlugs.map((story) => (
          <div
            key={story.slug}
            className="flex items-center gap-4 bg-violet-800 rounded-xl p-4 transition"
          >
            <img
              src={story.image}
              alt={`capa-${story.slug}`}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <Link
              to={`/historia/v2/${story.slug}`}
              className="block text-white py-2 px-3 rounded-xl hover:bg-violet-600 transition"
            >
              {story.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
