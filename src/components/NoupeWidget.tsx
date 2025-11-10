"use client"

import { useEffect, useState } from "react"

const NOUPE_SCRIPT_ID = "noupe-widget-script"
const NOUPE_SCRIPT_SRC = "https://www.noupe.com/embed/0199f7e54eba7b3b938061a96c5a9e56e957.js"

export default function NoupeWidget() {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const existing = document.getElementById(NOUPE_SCRIPT_ID)
    if (existing) {
      setShowFallback(false)
      return
    }

    const script = document.createElement("script")
    script.id = NOUPE_SCRIPT_ID
    script.src = NOUPE_SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => setShowFallback(false)
    script.onerror = () => {
      console.error("Noupe widget failed to load.")
      setShowFallback(true)
    }

    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return showFallback ? (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 60 }}>
      <a
        href="mailto:sales@astrentech.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 20px",
          backgroundColor: "#22d3ee",
          color: "#000",
          borderRadius: "9999px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "14px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 24px rgba(34, 211, 238, 0.2)",
          transition: "all 0.2s ease"
        }}
      >
        💬 Chat with us
      </a>
    </div>
  ) : null
}