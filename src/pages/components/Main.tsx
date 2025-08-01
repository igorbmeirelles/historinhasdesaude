import { Link } from "react-router-dom";
import {
  Heart,
  Smile,
  Leaf,
  Brain,
  Monitor,
  ShieldPlus,
  Bath,
  Users,
  UtensilsCrossed,
} from "lucide-react";

type Story = {
  title: string;
  slug: string;
  image: string;
  category: string;
};

const storySlugs: Story[] = [
  {
    title: "1: Pequenos Heróis Contra o Mosquito da Dengue",
    slug: "herois-dengue",
    image: "/story/dengue/images/capa.png",
    category: "Saúde",
  },
  {
    title: "2: Brincadeiras legais no recreio",
    slug: "brincadeiras-recreio",
    image: "/story/recreio/images/capa.jpeg",
    category: "Diversão",
  },
  {
    title: "3: Mia e o Reino dos Alimentos Saudáveis",
    slug: "mia-alimentos",
    image: "/story/alimentos/images/capa.png",
    category: "Alimentação",
  },
  {
    title: "4: Lili e o Poder da Amizade",
    slug: "lili-amizade",
    image: "/story/amizade/images/capa.png",
    category: "Amizade",
  },
  {
    title: "5: A Aventura de Pedro e Ana no Trânsito Seguro",
    slug: "transito-seguro",
    image: "/story/transito/images/capa.png",
    category: "Segurança",
  },
  {
    title: "6: Beto e o Clube da Higiene",
    slug: "beto-higiene",
    image: "/story/higiene/images/capa.png",
    category: "Higiene",
  },
  {
    title: "7: Nina e a Magia das Vacinas",
    slug: "nina-vacinas",
    image: "/story/vacina/images/capa.jpg",
    category: "Saúde",
  },
  {
    title: "8: Os Óculos de Luísa e seu Amigo Léo",
    slug: "oculos-luisa",
    image: "/story/oculos/images/capa.png",
    category: "Inclusão",
  },
  {
    title: "9: A Aventura de João e a Tela Mágica",
    slug: "tela-magica",
    image: "/story/tela/images/capa.png",
    category: "Tecnologia",
  },
  {
    title: "10: A história de Lucas no combate aos piolhos",
    slug: "lucas-piolho",
    image: "/story/piolho/images/capa.png",
    category: "Saúde",
  },
  {
    title: "11: Tupã, o Protetor das Florestas e Matas",
    slug: "tupa-florestas",
    image: "/story/florestas/images/capa.png",
    category: "Natureza",
  },
  {
    title: "12: O Jardim da Mente",
    slug: "jardim-mente",
    image: "/story/jardim/images/capa.png",
    category: "Bem-estar",
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Saúde":
      return <Heart className="w-4 h-4" />;
    case "Diversão":
      return <Smile className="w-4 h-4" />;
    case "Alimentação":
      return <UtensilsCrossed className="w-4 h-4" />;
    case "Amizade":
      return <Users className="w-4 h-4" />;
    case "Segurança":
      return <ShieldPlus className="w-4 h-4" />;
    case "Higiene":
      return <Bath className="w-4 h-4" />;
    case "Inclusão":
      return <Users className="w-4 h-4" />;
    case "Tecnologia":
      return <Monitor className="w-4 h-4" />;
    case "Natureza":
      return <Leaf className="w-4 h-4" />;
    case "Bem-estar":
      return <Brain className="w-4 h-4" />;
    default:
      return <Brain className="w-4 h-4" />;
  }
};

export function Main() {
  return (
    <main className="relative z-10 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {storySlugs.map((story) => (
            <Link
              to={`/historia/v2/${story.slug}`}
              key={story.slug}
              className="group block"
            >
              <div
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 transform-gpu backface-hidden
                min-h-[380px] flex flex-col"
              >
                {/* Imagem da História */}
                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0 rounded-t-3xl">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Conteúdo do Card */}
                <div className="pt-6 px-6 flex flex-col flex-grow">
                  {/* Categoria da História */}
                  {story.category && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="text-purple-500">
                        {getCategoryIcon(story.category)}
                      </span>
                      <span className="font-medium text-gray-600">
                        {story.category}
                      </span>
                    </div>
                  )}

                  <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {story.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
