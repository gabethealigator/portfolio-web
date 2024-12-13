import { Button } from "./components/ui/button";
import Navbar from "./components/ui/navbar";
import { ThemeProvider } from "./lib/theme_provider";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import TextCycle from "./components/ui/text_cicler";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="h-64"></div>

      <div className="flex flex-col justify-center h-full text-left mx-auto px-7 lg:w-[30%] md:w-[50%]">
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <FiLinkedin />
          </Button>
          <Button variant="outline" size="icon">
            <FiGithub />
          </Button>
          <Button variant="outline">
            Contato <FaPaperPlane />
          </Button>
        </div>

        <p className="border border-muted rounded-sm p-2 w-auto font-medium text-md text-center mb-6 mt-2">
          Olá, sou dev Fullstack e moro em São Paulo.
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-semibold tracking-wide font-[Spectral]">
              Gabriel Nunes
            </h1>
            <p className="text-sm tracking-wide">
              <TextCycle />
            </p>
          </div>

          <div className="flex justify-center order-1 mt-10 lg:mt-0 lg:order-1">
            <Avatar className="w-28 h-28 border border-muted">
              <AvatarImage src="https://avatars.githubusercontent.com/u/140721470?v=4" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div>
          <h1 className="font-[Spectral] text-2xl mt-10 underline underline-offset-[6px] decoration-muted decoration-[6px]">
            Sobre Mim
          </h1>

          <p className="text-justify mt-5">
            Olá! Meu nome é Gabriel Nunes, sou um desenvolvedor Fullstack de São Paulo, apaixonado por tecnologia e inovação. Atualmente, estou finalizando o curso de Desenvolvimento de Sistemas na ETEC de Sapopemba e já acumulo experiências com diversas ferramentas e linguagens.
          </p>
        </div>

        <div className="flex justify-center mt-5">
        </div>

        <h1 className="font-[Spectral] text-2xl mt-10 underline underline-offset-[6px] decoration-muted decoration-[6px]">
          Habilidades
        </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;

