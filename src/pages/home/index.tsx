import { Link } from "react-router-dom";
import capa from "../../assets/capa.webp";

const storySlugs = [
  { title: "3: Mia e o Reino dos Alimentos Saudáveis", slug: "mia-alimentos" },
  { title: "6: Beto e o Clube da Higiene", slug: "beto-higiene" },
  {
    title: "11: Tupã, o Protetor das Florestas e Matas,",
    slug: "tupa-florestas",
  },
];

export function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-violet-900 to-violet-950 p-6">
      <div className="mb-10">
        <img
          src={capa}
          alt="Capa principal"
          className="max-w-[360px] rounded-xl shadow-lg"
        />
      </div>

      <div className="grid gap-4 w-full max-w-[400px] text-center">
        {storySlugs.map((story) => (
          <Link
            key={story.slug}
            to={`/historia/v2/${story.slug}`}
            className="block bg-violet-700 text-white py-3 px-6 rounded-xl hover:bg-violet-600 transition"
          >
            {story.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
