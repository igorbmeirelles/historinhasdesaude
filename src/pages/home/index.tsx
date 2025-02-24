import { Link } from "react-router-dom";
import capa from "../../assets/capa.webp";

export function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b bg-violet-950">
      <div className="grid max-w-[1280px]">
        <Link to="/historia/pequenos-herois-contra-o-mosquito-da-denque" className="focus:outline-none max-w-[360px] max-h-[360px] rounded-xl overflow-hidden">
          <img src={capa} />
        </Link>
      </div>
    </main>
  );
}
