import { Mail, Instagram, Facebook, Youtube, Home } from "lucide-react";

export function Equipe() {
  const equipe = [
    {
      nome: "Igor Barreto Meirelles",
      descricao: "Acad. Sistemas da Computação/ Cederj-UFF",
      foto: "/images/igor.png",
    },
    {
      nome: "Pedro Marcolino Faria da Costa",
      descricao: "Acad. Sistemas da Computação / Cederj-UFF",
      foto: "/images/pedro.png",
    },
    {
      nome: "Matheus Marcolino Faria da Costa",
      descricao: "Acad. Sistemas da Computação / Cederj-UFF",
      foto: "/images/matheus.png",
    },
    {
      nome: "Maria Rita Jardim da Silva",
      descricao: "Acad. Enfermagem / EEAAC-UFF",
      foto: "/images/maria.png",
    },
    {
      nome: "Jorge Luiz Lima",
      descricao: "Prof. Saúde Coletiva e Políticas Públicas - MEP e PPGSC -UFF",
      foto: "/images/jorge.png",
    },
  ];

  const projetos = [
    "Laboratório de Mídia e Aplicativos para Promoção da Saúde Labmapps",
    "Programa de Ensino, Pesquisa e Extensão Espaço Aberto para Saúde -UFF",
    "Projeto Ciência & Saúde UFF",
    "Projeto de Ensino Saúde na Universidade – Pensu",
    'Projeto "Por Que Será?": discutindo com adolescentes sobre saúde e qualidade de vida',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4 text-black">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header com botão Home */}
        <div className="relative text-center py-8">
          {/* Botão Voltar para Home */}
          <a
            href="/"
            className="absolute left-0 top-8 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-blue-600"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </a>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Espaço Aberto para Saúde
          </h1>
          <p className="text-lg text-gray-600">
            Universidade Federal Fluminense
          </p>
        </div>
        {/* Equipe Envolvida */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Equipe Envolvida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {equipe.map((membro, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-32 h-40 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                    {membro.nome}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2">
                    {membro.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contato e Redes Sociais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sugestões e Dúvidas */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Sugestões e Dúvidas
            </h2>
            <p className="text-gray-600 mb-4">
              Envie sua opinião, críticas e sugestões:
            </p>
            <a
              href="mailto:pensuprojeto@gmail.com"
              className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              pensuprojeto@gmail.com
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Nossas Redes Sociais
            </h2>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/espacoabertosaudeuff/"
                target="_blank"
                className="flex items-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Instagram className="w-4 h-4 mr-2" />
                espacoabertosaudeuff
              </a>

              <a
                href="https://www.facebook.com/EspacoAbertoParaSaude"
                target="_blank"
                className="flex items-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Espaço Aberto Para Saúde
              </a>

              <a
                href="https://www.youtube.com/c/Ci%C3%AAnciaSa%C3%BAdeUFF"
                target="_blank"
                className="flex items-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Ciência Saúde UFF
              </a>

              <a
                href="https://www.youtube.com/@espacoabertosaudeuff"
                target="_blank"
                className="flex items-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Espaço Aberto para Saúde UFF
              </a>
            </div>
          </div>
        </div>

        {/* Projetos Envolvidos */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Projetos Envolvidos
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Este produto faz parte das propostas inovadoras dos seguintes
            projetos:
          </p>
          <div className="space-y-3">
            {projetos.map((projeto, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400"
              >
                <p className="text-gray-700 text-sm">{projeto}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 font-medium">
            Nos siga em nossas redes sociais e saiba mais!
          </p>
        </div>
      </div>
    </div>
  );
}
