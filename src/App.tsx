import { Button } from "./components/ui/button";
import NavbarTop from "./components/ui/navbar_top";
import { ThemeProvider } from "./lib/theme_provider";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import TextCycle from "./components/ui/text_cicler";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/ui/model";
import { Suspense } from "react"
import NavBarBot from "./components/ui/navbar_bot";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavbarTop />
      <NavBarBot />

      <div style={{ height: '400px', width: '100%' }}>
        <Canvas
          shadows
          orthographic
          camera={{
            zoom: 120,
          }}
          gl={{
            antialias: true,
            alpha: true,
          }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

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
            Olá! Meu nome é Gabriel Nunes, sou um desenvolvedor Fullstack de São Paulo, apaixonado por tecnologia e inovação. Atualmente, sou formado no curso de Desenvolvimento de Sistemas na ETEC de Sapopemba e já acumulo experiências com diversas ferramentas e linguagens.
          </p>
        </div>

        <div className="flex justify-center mt-5">
        </div>

        <h1 className="font-[Spectral] text-2xl mt-10 underline underline-offset-[6px] decoration-muted decoration-[6px]">
          Habilidades
        </h1>

        <p className="text-justify mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel augue felis. Integer viverra lectus at tempor malesuada. Sed maximus ipsum lacus, vitae pellentesque nulla interdum sit amet. Sed augue felis, auctor in varius sed, ultricies nec augue. Vestibulum feugiat varius congue. Aliquam interdum congue orci, eget rhoncus felis. Nam semper purus vel orci facilisis pharetra.
        </p>
      </div>

    </ThemeProvider>
  );
}

export default App;

