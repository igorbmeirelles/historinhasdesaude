import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export function Home() {
  return (
    <div className="min-h-screen bg-[#3b0764] flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
