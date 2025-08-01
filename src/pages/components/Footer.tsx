export function Footer() {
  type Logo = {
    name: string;
    image: string;
    link: string;
  };

  const partnerLogos: Logo[] = [
    {
      name: "labmapps",
      image: "/images/labmapps.png",
      link: "https://linktr.ee/labmapps",
    },
    {
      name: "espaco",
      image: "/images/espaco.png",
      link: "https://www.instagram.com/espacoabertosaudeuff/",
    },
    {
      name: "ciencia",
      image: "/images/ciencia.png",
      link: "https://www.youtube.com/c/Ci%C3%AAnciaSa%C3%BAdeUFF",
    },
    { name: "porque será", image: "images/porquesera.png", link: "/" },
    { name: "pensu", image: "/images/pensu.png", link: "/" },
    {
      name: "enfermagem",
      image: "/images/enfermagem.png",
      link: "https://eeaac.uff.br/",
    },
    {
      name: "proex",
      image: "/images/proex.png",
      link: " https://www.uff.br/proex/",
    },
    { name: "uff", image: "/images/uff.png", link: "https://www.uff.br/" },
  ];

  return (
    <footer className="bg-[#3b0764] backdrop-blur-sm border-t border-purple-500/30 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 p-1.5 backdrop-blur-sm border-2 border-purple-300/30 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={logo.image}
                  alt={`Logo ${logo.name}`}
                  className="w-full h-full rounded-full object-contain"
                  title={logo.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
