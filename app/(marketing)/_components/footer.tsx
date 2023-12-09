
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
        <Logo/>
        <div className="md:ml-auto w-full justify-between flex items-center gap-x-2 text-muted-foreground text-sm">
          <div className="flex gap-x-2 items-center">
            <p>follow my social media </p>
            <ArrowRight className="w-4 h-4 animate-pulse"/>
          </div>
            <div className="flex gap-x-5">
              <a href="https://www.instagram.com/haekalrfny/" target="_blank"><Instagram className="w-4 h-4"/></a>
              <a href="https://www.linkedin.com/in/haekalrfny/" target="_blank">    <Linkedin className="w-4 h-4"/></a>
              <a href="https://github.com/haekalrfny" target="_blank"><Github className="w-4 h-4"/></a>
            </div>
        </div>
    </div>
  )
}
