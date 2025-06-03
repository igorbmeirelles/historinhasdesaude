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
    title: "3: Mia e o Reino dos Alimentos Saudáveis",
    slug: "mia-alimentos",
    image: "/story/alimentos/images/capa.png",
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
    title: "11: Tupã, o Protetor das Florestas e Matas",
    slug: "tupa-florestas",
    image: "/story/florestas/images/capa.png",
  },
];

export function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-violet-900 to-violet-950 p-6">
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
