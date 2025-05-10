"use client"
import BotpressChat from "@/components/botpress-chat"
import ClaraLogo from "@/components/clara-logo"

export default function ChatInterface() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-pink-100 to-white">
      <div className="w-full max-w-3xl px-4 py-8">
        <div className="text-center mb-8">
          <ClaraLogo />
        </div>

        <BotpressChat />
      </div>
    </div>
  )
}
