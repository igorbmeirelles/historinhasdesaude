export function Footer() {
  type Logo = {
    name: string;
    image: string;
  };

  const partnerLogos: Logo[] = [
    { name: "labmapps", image: "/images/labmapps.png" },
    { name: "espaco", image: "/images/espaco.png" },
    { name: "ciencia", image: "/images/ciencia.png" },
    { name: "pensu", image: "/images/pensu.png" },
    { name: "uff", image: "/images/uff.png" },
    { name: "proex", image: "/images/proex.png" },
  ];

  return (
    <footer className="bg-purple-950/70 backdrop-blur-sm border-t border-purple-400/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 p-1.5 backdrop-blur-sm border-2 border-purple-300/30 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-110">
                <img
                  src={logo.image}
                  alt={`Logo ${logo.name}`}
                  className="w-full h-full rounded-full object-contain"
                  title={logo.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
