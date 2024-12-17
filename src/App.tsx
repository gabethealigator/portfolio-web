import { Button } from "./components/ui/button";
import { BsBraces } from "react-icons/bs";
import { motion } from "framer-motion";
import NavbarTop from "./components/ui/navbar_top";
import { ThemeProvider } from "./lib/theme_provider";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import TextCycle from "./components/ui/text_cicler";
import { Canvas } from "@react-three/fiber";
import NavBarBot from "./components/ui/navbar_bot";
import { Scene } from "./components/ui/model";
import { SkillsAccordion } from "./components/ui/skills_accordion";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavbarTop />
      <NavBarBot />

      <div style={{ height: '400px', width: '100%' }} id="home">
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
          <Scene />
        </Canvas>
      </div>

      <div className="flex flex-col justify-center h-full text-left mx-auto px-7 max-w-[610px]">
        <div className="flex justify-between">
          <div className="flex flex-row gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Button variant="outline" size="icon" onClick={() => window.open("https://www.linkedin.com/in/gabriel-nunes-6bb365297/")}>
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <FiLinkedin />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Button variant="outline" size="icon" onClick={() => window.open("https://github.com/gabrielmslima")}>
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <FiGithub />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex lg:hidden"
            >
              <Button variant="outline" size="icon" onClick={() => window.open("https://github.com/gabrielmslima/portfolio-web")}>
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <BsBraces />
                </motion.div>
              </Button>
            </motion.div>
          </div>

          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Button variant="outline">
                <div className="flex items-center gap-2">
                  Contato
                  <motion.div
                    animate={{ x: 0, y: 0 }}
                    whileHover={{
                      x: [0, 4, 0],
                      y: [0, -4, 0],
                      transition: {
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <FaPaperPlane />
                  </motion.div>
                </div>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="border border-muted rounded-full p-2 w-auto font-medium text-md text-center mb-6 mt-2"
          >
            Olá, sou dev Fullstack e moro em São Paulo.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 text-left">
            <h1
              className="text-4xl font-semibold tracking-wide font-[Spectral]"
            >
              Gabriel Nunes
            </h1>
            <p className="text-sm tracking-wide">
              <TextCycle />
            </p>
          </div>

          <motion.div
            className="flex justify-center order-1 mt-10 lg:mt-0 lg:order-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Avatar className="w-28 h-28 border border-muted lg:ml-20">
              <AvatarImage
                loading="lazy"
                src="https://avatars.githubusercontent.com/u/140721470?v=4&size=112"
                alt="Profile picture"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>

        <div className="text-left flex flex-col justify-center items-center">
          <h1 className="align self-start font-[Spectral] text-2xl mt-10 underline underline-offset-[6px] decoration-muted decoration-[6px]" id="sobre">
            Sobre Mim
          </h1>

          <p className="text-justify mt-5">
            Olá, meu nome é Gabriel Nunes, sou um desenvolvedor Fullstack de São Paulo e tenho uma grande paixão por utilizar sistemas Linux, personalizando meu ambiente de desenvolvimento para atender às minhas necessidades. Durante o curso de Desenvolvimento de Sistemas, as habilidades que mais desenvolvi foram trabalho em equipe, liderança e gestão de tempo, que considero fundamentais para uma atuação eficiente no ambiente corporativo. Além disso, aprimorei meu espírito autodidata, sempre buscando aprender novas ferramentas e tecnologias por conta própria.
          </p>

          <div>

            <motion.button
              className="mt-10 border border-muted p-2 rounded-full flex justify-center items-center gap-2 hover:bg-accent"
              onClick={() => window.location.href = "/path/to/your/file.pdf"}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Download CV <FiDownload />
            </motion.button>

          </div>
        </div>

        <div className="text-left">
          <h1 className="font-[Spectral] text-2xl mt-14 underline underline-offset-[6px] decoration-muted decoration-[6px]" id="habilidades">
            Habilidades
          </h1>

          <p className="text-justify mt-5 mb-10">
            Ferramentas que tenho contato ou conhecimento.
          </p>

          <SkillsAccordion />
        </div>

        <div className="text-left">
          <h1 className="font-[Spectral] text-2xl mt-14 underline underline-offset-[6px] decoration-muted decoration-[6px]" id="projetos">
            Projetos
          </h1>

          <p className="text-justify mt-5">
          </p>
        </div>

        <div className="h-20" />
      </div>
    </ThemeProvider >
  );
}
