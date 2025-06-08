import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <main className="flex flex-col items-center justify-center p-6 py-8 flex-1">
      <div className="w-full max-w-[700px]">
        <div className="relative flex items-center">
          {/* Botão Esquerda */}
          <button
            className="z-10 bg-purple-700 hover:bg-purple-600 text-white shadow-lg border border-purple-400/50 h-10 w-10 rounded-full flex items-center justify-center"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev > 0 ? prev - 1 : storySlugs.length - 1
              )
            }
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carrossel */}
          <div className="overflow-hidden rounded-xl flex-1 mx-4">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {storySlugs.map((story) => (
                <div key={story.slug} className="w-full flex-shrink-0 px-2">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-purple-900/80 to-purple-800/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500/20">
                    <img
                      src={story.image}
                      alt={`capa-${story.slug}`}
                      className="w-20 h-20 rounded-lg object-cover border-2 border-white/20"
                    />
                    <Link
                      to={`/historia/v2/${story.slug}`}
                      className="flex-1 block text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 font-medium text-lg"
                    >
                      {story.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Direita */}
          <button
            className="z-10 bg-purple-700 hover:bg-purple-600 text-white shadow-lg border border-purple-400/50 h-10 w-10 rounded-full flex items-center justify-center"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev < storySlugs.length - 1 ? prev + 1 : 0
              )
            }
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bolinhas de progresso */}
        <div className="flex justify-center gap-2 mt-4">
          {storySlugs.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-purple-400 scale-110"
                  : "bg-purple-400/50 hover:bg-purple-400/80"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
