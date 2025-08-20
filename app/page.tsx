"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import StarIcon from "./components/StarIcon"
import { 
  Cloud, 
  Code2, 
  Database, 
  Bot, 
  Network, 
  Gamepad, 
  Binary, 
  Brain,
  Calculator,
  Globe,
  Webhook,
  Smartphone,
  Star
} from "lucide-react"
import { useUIStore, type AppKey } from "@/lib/ui-store"
import Eyes from "./components/Eyes"
import Dock from "./components/Dock"
import DesktopWindow from "./components/Window"
import CommandPalette from "./components/CommandPalette"

type WindowSpec = {
  key: Exclude<AppKey, "palette" | null>
  title: string
  content: React.ReactNode
}

// Placeholder content builders
function AboutContent() {
  const subjects = [
    {
      icon: Bot,
      title: "Construção de Robôs",
      description: "Dê vida às suas ideias criando robôs incríveis com LEG e outras tecnologias de ponta! Aprenda a combinar hardware e software em projetos práticos que vão impressionar todo mundo."
    },
    {
      icon: Code2,
      title: "Programação Avançada",
      description: "Domine as linguagens de programação mais procuradas pelo mercado e desenvolva soluções criativas para problemas reais. Do básico ao avançado, você vai se tornar um mestre da codificação!"
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Web e Mobile",
      description: "Crie sites e aplicativos incríveis do zero! Aprenda Frontend para deixar tudo bonito, Back-end para fazer funcionar perfeitamente e Mobile para estar na mão de milhões de usuários."
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Entre no mundo fascinante da Ciência de Dados, Machine Learning e Deep Learning! Desenvolvasistemas inteligentes que aprendem, evoluem e tomamdecisões por conta própria."
    },
    {
      icon: Gamepad,
      title: "Jogos Digitais",
      description: "Entre no universo dos jogos digitais e transforme suas ideias em experiências interativas incríveis! Domine engines como Unity, aprenda programação de gameplay, design de personagens, física de jogos e otimização para diferentes plataformas."
    },
    {
      icon: Star,
      title: "Projetos Práticos",
      description: "Na Campo Real, você não fica só na teoria. Aqui você coloca a mão na massa e começa a desenvolver projetos reais desde o início do curso, construindo um portfólio impressionante que vai abrir portas no mercado de trabalho."
    },
  ]

  return (
    <div className="space-y-6">
      <div className="p-5 md:p-6 rounded-xl border-3 border-black" style={{
        background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
      }}>
        <h1 className="font-black leading-none text-white text-3xl md:text-5xl">
          Engenharia de Software
          <StarIcon/>
        </h1>
        <p className="mt-4 text-lg text-white">Desenvolva o Futuro da Tecnologia na Campo Real.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Desenvolvimento Web", "Desenvolvimento Mobile", "Jogos Digitais", "Inteligência Artificial", "Robótica", "Rede de Computadores",].map((chip) => (
            <span
              key={chip}
              className="text-sm font-semibold px-3 py-1 rounded-md border-[3px] border-black"
              style={{ backgroundColor: "#FF2E63", color: "#000" }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5 rounded-xl border-3 border-black" style={{
        background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
      }}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, i) => {
            const Icon = subject.icon
            return (
              <div key={i} className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF2E63] grid place-items-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-black text-xl mb-3 text-black">{subject.title}</h3>
                <p className="text-gray-800 text-sm leading-relaxed">{subject.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="p-5 rounded-xl border-3 border-black" style={{
        background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
      }}>
        <div className="text-center text-white mb-6">
          <h2 className="font-black text-3xl mb-4">Não perca a chance de iniciar sua jornada no mundo da tecnologia e garantir um futuro brilhante.</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] text-center">
              <div className="text-4xl font-black text-[#FF2E63] mb-2">97%</div>
              <div className="font-bold text-lg text-black mb-1">Empregabilidade</div>
              <div className="text-sm text-gray-700">Nossos alunos conquistam vagas no mercado antes mesmo de se formar!</div>
            </div>
            
            <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] text-center">
              <div className="text-4xl font-black text-[#FF2E63] mb-2">50+</div>
              <div className="font-bold text-lg text-black mb-1">Projetos reais</div>
              <div className="text-sm text-gray-700">Desenvolvidos por nossos alunos todos os anos</div>
            </div>
            
            <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] text-center">
              <div className="text-4xl font-black text-[#FF2E63] mb-2">15+</div>
              <div className="font-bold text-lg text-black mb-1">Empresas parceiras</div>
              <div className="text-sm text-gray-700">Oferecendo estágios e oportunidades exclusivas</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {[
                "Processo seletivo simplificado",
                "Bolsas de estudo disponíveis", 
                "Laboratórios modernos",
                "Professores experientes",
                "Conexão direta com o mercado de trabalho"
              ].map((benefit, i) => (
                <span key={i} className="text-sm font-semibold px-3 py-2 rounded-md border-[3px] border-black bg-white text-black">
                  ✓ {benefit}
                </span>
              ))}
            </div>
          </div>

          <p className="text-lg">
            Siga-nos no Instagram <a href="https://www.instagram.com/engsoft.camporeal/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FF2E63] hover:underline transition-all">@engsoft.camporeal</a> e confira os projetos incríveis que nossos alunos estão desenvolvendo!
          </p>
        </div>
      </div>
    </div>
  )
}

function ArtContent() {
  const works = [
    { image: "/images/Tcc.png", title: "TCC", alt: "Trabalhos de Conclusão de Curso" },
    { image: "/images/Inovacao.jpg", title: "Inovação", alt: "Projeto de Inovação" },
    { image: "/images/Robotica.jpg", title: "Robótica", alt: "Projeto de Robótica" },
    { image: "/images/Game Night.png", title: "Game Night", alt: "Evento Game Night" },
    { image: "/images/Softweek.png", title: "Softweek", alt: "Evento Softweek" },
    { image: "/images/Uniformes.png", title: "Uniformes", alt: "Uniformes do Curso" },
  ]
  return (
    <div className="p-4 md:p-5 rounded-xl border-3 border-black" style={{
      background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
    }}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {works.map((work, i) => (
          <div key={i} className="aspect-square border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] overflow-hidden">
            <img
              src={work.image}
              alt={work.alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function PhilosophyContent() {
  const professors = [
    {
      name: "Coordenadora Isabelle Cordova",
      course: "",
      image: "/images/Belle.jpg"
    },
    {
      name: "Professor Giovane Galvão",
      course: "	Desenvolvimento de Sistemas WEB/Mobile",
      image: "/images/Giovane.png"
    },
    {
      name: "Professora Adriana Loli",
      course: "Fundamentos Matemáticos",
      image: "/images/Loli.jpg"
    },
    {
      name: "Professor Gabriel Dall Pozzo",
      course: "Jogos Digitais",
      image: "/images/Gabriel.jpg"
    },
    {
      name: "Professor Enrique Da Roza",
      course: "Inteligência Artificial",
      image: "/images/Enrique.jpg"
    },
    {
      name: "Professor Luan Gracheki",
      course: "Robótica e",
      secondaryCourse: "Redes de Computadores",
      image: "/images/Luan.jpg"
    },
    {
      name: "Professor Giovano Goles",
      course: "Banco de Dados",
      image: "/images/Giovano.jpg"
    },
    {
      name: "Professora Fabiana Camargo",
      course: "Programação e Sistemas Computacionais",
      image: "/Fabiana.jpg"
    },
    {
      name: "Professor Moacir Guedes Oliveira",
      course: "Programação e Sistemas Computacionais",
      image: "/Moacir.png"
    },

  ]
  return (
    <div className="p-5 rounded-xl border-3 border-black" style={{
      background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
    }}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {professors.map((prof, i) => (
          <div key={i} className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black mb-4 mt-2">
              <img 
                src={prof.image} 
                alt={`Foto do ${prof.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <h3 className="font-black text-xl mb-2 text-black">{prof.name}</h3>
              <p className="text-gray-800 font-semibold text-base">
                {prof.course}
                {prof.secondaryCourse && (
                  <>
                    <br />
                    {prof.secondaryCourse}
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResumeContent() {
  const semesters = [
    {
      period: "1º Período",
      subjects: ["Criatividade e Inovação", "Estatística", "Fundamentos para Engenharia de Software", "Lógica Computacional", "Programação e Sistemas Computacionais I"]
    },
    {
      period: "2º Período", 
      subjects: ["Comunicação e Metodologia", "Interação Humano Computador", "Matemática Discreta e Linear", "Organização e Arquitetura de Computadores", "Programação e Sistemas Computacionais II", "Robótica"]
    },
    {
      period: "3º Período",
      subjects: ["Banco de Dados I", "Desenvolvimento Front-End", "Normatização de Processo de Software", "Programação Orientada a Objetos", "Redes de Computadores"]
    },
    {
      period: "4º Período",
      subjects: ["Análise e Projeto de Sistemas", "Banco de Dados II", "Ciência de Dados", "Desenvolvimento Back-End", "Gestão Empreendedora"]
    },
    {
      period: "5º Período",
      subjects: ["Desenvolvimento Web Full-Stack", "Inteligência Artificial", "Jogos Digitais", "Optativa I", "Propriedade Intelectual e Legislação Tecnológica"]
    },
    {
      period: "6º Período",
      subjects: ["Desenvolvimento Mobile", "Machine Learning e Deep Learning", "Optativa II", "Programa de Extensão Institucional - PEX", "Qualidade de Software"]
    },
    {
      period: "7º Período",
      subjects: ["Extensão I", "Trabalho de Conclusão de Curso I"]
    },
    {
      period: "8º Período",
      subjects: ["Estágio Supervisionado", "Extensão II", "Trabalho de Conclusão de Curso II"]
    }
  ]

  return (
    <div className="p-5 rounded-xl border-3 border-black" style={{
      background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
    }}>
      <div className="text-center text-white mb-6">
        <h2 className="font-black text-3xl mb-2">Matriz Curricular</h2>
        <p className="text-lg">Conheça as principais disciplinas do curso</p>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {semesters.map((semester, i) => (
          <div key={i} className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
            <h3 className="font-black text-lg mb-3 text-[#FF2E63] text-center">{semester.period}</h3>
            <ul className="space-y-2">
              {semester.subjects.map((subject, j) => (
                <li key={j} className="text-sm text-gray-800 font-medium leading-tight">
                  • {subject}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  // Windows order doubles as z-order; last is topmost
  const [openApps, setOpenApps] = useState<Exclude<AppKey, "palette" | null>[]>(["about"])
  const [paletteOpen, setPaletteOpen] = useState(false)
  const setActiveApp = useUIStore((s) => s.setActiveApp)
  const activeApp = useUIStore((s) => s.activeApp)

  // Initialize active app (About by default)
  useEffect(() => {
    setActiveApp("about")
  }, [setActiveApp])

  // Global key handling: Esc closes palette or topmost window
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (paletteOpen) {
          setPaletteOpen(false)
          setActiveApp(null)
          return
        }
        if (openApps.length > 0) {
          const top = openApps[openApps.length - 1]
          closeApp(top)
          return
        }
      }
      // Enter on focused dock item is native click; no interception necessary.
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [paletteOpen, openApps])

  const windows: WindowSpec[] = useMemo(
    () => [
      { key: "about", title: "Sobre", content: <AboutContent /> },
      { key: "art", title: "Trabalhos e Projetos", content: <ArtContent /> },
      { key: "philosophy", title: "Corpo Docente", content: <PhilosophyContent /> },
      { key: "resume", title: "Matriz Curricular", content: <ResumeContent /> },
    ],
    [],
  )

  function openApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      if (prev.includes(app)) {
        const without = prev.filter((a) => a !== app)
        return [...without, app]
      }
      return [...prev, app]
    })
    setActiveApp(app)
  }

  function closeApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => prev.filter((a) => a !== app))
    // If top was closed, set active to new top or null
    setActiveApp((s) => {
      // s can accept direct value; but we need latest openApps after removal
      return null
    })
  }

  function focusApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      const without = prev.filter((a) => a !== app)
      return [...without, app]
    })
    setActiveApp(app)
  }

  function resetAll() {
    setOpenApps(["about"])
    setPaletteOpen(false)
    setActiveApp("about")
  }

  return (
    <main className="fixed inset-0 overflow-hidden">
      {/* Background: off-white, 8px grid + subtle grain */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#1B3B6F",
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 8px)
          `,
          backgroundSize: "8px 8px, 8px 8px",
        }}
      />
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "2px 2px",
        }}
      />

      {/* p5 Eyes wallpaper */}
      <Eyes activeApp={activeApp ?? null} />

      {/* Windows */}
      <div className="absolute inset-0 z-10">
        {windows
          .filter((w) => openApps.includes(w.key))
          .map((w) => {
            const zIndex = 100 + openApps.indexOf(w.key)
            return (
              <DesktopWindow
                key={w.key}
                appKey={w.key}
                title={w.title}
                zIndex={zIndex}
                onClose={() => closeApp(w.key)}
                onFocus={() => focusApp(w.key)}
              >
                {w.content}
              </DesktopWindow>
            )
          })}
      </div>

      {/* Dock */}
      <div className="absolute left-0 right-0 bottom-6 z-20 flex justify-center">
        <Dock
          activeApp={activeApp ?? null}
          onOpen={(k) => openApp(k)}
          onOpenPalette={() => {
            setPaletteOpen(true)
            setActiveApp("palette")
          }}
        />
      </div>

      {/* Command Palette */}
      <CommandPalette
        open={paletteOpen}
        onOpenChange={(o) => {
          setPaletteOpen(o)
          if (!o) setActiveApp(null)
          if (o) setActiveApp("palette")
        }}
        onAction={(k) => {
          openApp(k)
          setPaletteOpen(false)
        }}
        onReset={resetAll}
      />
    </main>
  )
}
