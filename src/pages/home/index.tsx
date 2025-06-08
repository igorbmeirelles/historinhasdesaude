import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
