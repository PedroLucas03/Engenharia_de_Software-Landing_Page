"use client"

import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import type { AppKey } from "@/lib/ui-store"

export default function CommandPalette({
  open = false,
  onOpenChange = () => {},
  onAction = () => {},
  onReset = () => {},
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onAction?: (k: Exclude<AppKey, "palette" | null>) => void
  onReset?: () => void
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, onOpenChange])

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Digite um comando..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup heading="Abrir">
          <CommandItem onSelect={() => onAction("about")}>Abrir Sobre</CommandItem>
          <CommandItem onSelect={() => onAction("art")}>Abrir Trabalhos e Projetos</CommandItem>
          <CommandItem onSelect={() => onAction("philosophy")}>Abrir Corpo Docente</CommandItem>
          <CommandItem onSelect={() => onAction("resume")}>Abrir Matriz Curricular</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Sistema">
          <CommandItem
            onSelect={() => {
              onReset()
            }}
          >
            Reiniciar Tela
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
