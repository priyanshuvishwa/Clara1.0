"use client"

import { useRef, useEffect } from "react"
import { Card } from "@mui/material"

const BotpressChat = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    const container = containerRef.current

    if (iframe && container) {
      const observer = new ResizeObserver(() => {
        iframe.style.height = `${container.offsetHeight}px`
      })

      observer.observe(container)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <Card className="bg-white shadow-lg rounded-2xl overflow-hidden border-pink-200">
      <div className="text-center py-3 border-b border-pink-100">
        <h2 className="text-lg font-medium text-pink-600">Campus Learning And Resource Assistant</h2>
      </div>
      <div ref={containerRef} className="h-[70vh] w-full">
        <iframe
          ref={iframeRef}
          src="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/09/22/20250509220444-LF6G5CF3.json"
          className="w-full h-full border-none"
          title="Campus Learning And Resource Assistant"
        ></iframe>
      </div>
    </Card>
  )
}

export default BotpressChat
