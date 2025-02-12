import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-purple-300">
      <div className="text-center">
        <div className={`book ${isOpen ? "open" : ""}`}>
          <div className="cover">
            <div className="front">
              <span className="text-4xl font-bold">Livro Educativo</span>
            </div>
            <div className="back"></div>
          </div>
          <div className="pages"></div>
        </div>
        <h1 className="mt-8 text-4xl font-bold text-purple-800 animate-bounce">
          Em Breve!
        </h1>
        <p className="mt-4 text-2xl text-purple-600 animate-pulse">
          Uma aventura incrível está chegando...
        </p>
      </div>
    </main>
  );
}

export default App;
