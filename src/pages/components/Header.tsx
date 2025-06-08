import { ExternalLink, Users, Heart } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo ou título centralizado em mobile */}
          <h1 className="text-2xl lg:text-3xl font-bold text-white text-center lg:text-left">
            Historinhas de Saúde
          </h1>

          {/* Links principais */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
            <a
              href="https://linktr.ee/labmapps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-black px-4 py-2 rounded hover:bg-yellow-500/20 hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              Visite IABMAPPS
            </a>
            <a
              href="https://drive.google.com/file/d/1zDLWlleXspf97u_NLxyEDVmP4x3zJ_Wy/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-black px-4 py-2 rounded hover:bg-yellow-500/20 hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              Historinhas PDF
            </a>
            <a
              href="https://drive.google.com/file/d/1czf7OXihcXHRwnS2_DO2XExLeyr5izou/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-black px-4 py-2 rounded hover:bg-yellow-500/20 hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/20"
            >
              <Users className="w-4 h-4" />
              Equipe Envolvida
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUXFTe7qbXnhkAWwUs6-mXe7cel3irzR-krhFQir0-J8Rxpw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-black px-4 py-2 rounded hover:bg-yellow-500/20 hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/20"
            >
              <Heart className="w-4 h-4" />
              Vote na Favorita
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
