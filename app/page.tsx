"use client"

import type React from "react"
// Import não é necessário para imagens em public
// As imagens serão referenciadas diretamente pelo caminho
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
  Webhook
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
  return (
    <div className="p-5 md:p-6 rounded-xl border-3 border-black" style={{
      background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
    }}>
      <h1 className="font-black leading-none text-white" style={{ fontSize: 52 }}>
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

  ]
  return (
    <div className="p-5 rounded-xl border-3 border-black" style={{
      background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
    }}>
      <div className="grid gap-4 md:grid-cols-3">
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
  const subjects = [
    {
      icon: Code2,
      title: "Desenvolvimento Web/Mobile",
      description: "Criação de aplicações modernas para web e dispositivos móveis."
    },
    {
      icon: Gamepad,
      title: "Jogos Digitais",
      description: "Desenvolvimento de jogos, engines e mecânicas de gameplay."
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Machine Learning, Redes Neurais e Sistemas Inteligentes."
    },
    {
      icon: Bot,
      title: "Robótica",
      description: "Automação, sistemas robóticos e integração de hardware."
    },
    {
      icon: Network,
      title: "Redes de Computadores",
      description: "Infraestrutura de redes, protocolos e segurança."
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Modelagem, gestão e otimização de bancos de dados."
    },
        {
      icon: Calculator,
      title: "Fundamentos Matemáticos",
      description: "Base matemática essencial para computação e análise de algoritmos."
    },
    {
      icon: Webhook,
      title: "APIs e Microserviços",
      description: "Arquitetura de sistemas distribuídos e integração de serviços."
    },
        { 
      icon: Cloud,
      title: "Computação em Nuvem",
      description: "Infraestrutura em nuvem, serviços distribuídos e deployments escaláveis."
    },
  ]
  return (
    <div className="p-5 rounded-xl border-3 border-black" style={{
      background: 'linear-gradient(135deg, #0A1930 0%, #1B3B6F 100%)'
    }}>
      <div className="grid gap-4 md:grid-cols-3">
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
