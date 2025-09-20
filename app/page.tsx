"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function NewsletterLandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleDemoRequest = () => {
    setIsSubmitted(true)
    console.log("Demo request submitted")
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
        style={{
          backgroundImage: "url(/images/boston-p.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 shadow-none">
        <div className="w-full text-center">
          <div className="opacity-0 animate-fade-in-up mb-12">
            <div className="flex items-center justify-center gap-4 mb-[-36px]">
              <img 
                src="/images/PriviaIndividualFinal.svg" 
                alt="Privia Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
              />
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white whitespace-nowrap xl:text-9xl font-normal tracking-normal">
                Privia
              </h1>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="opacity-0 animate-fade-in-up animate-delay-200 mb-12 mt-8">
              <p className="text-white/85 text-base font-light tracking-normal leading-tight my-0 py-0">
                Para comunidades donde cada detalle importa. 
              </p>
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-400">
              {!isSubmitted ? (
                <div className="max-w-sm mx-auto">
                  <div className="flex justify-center p-1 bg-white/12 backdrop-blur-md rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none relative hover:bg-white/16 hover:border-white/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-500 ease-out hover:scale-[1.02]">
                    <Button
                      onClick={handleDemoRequest}
                      className="bg-transparent text-white hover:bg-[#F5A35B] hover:text-white rounded-full px-12 py-3 transition-all duration-300 font-medium hover:shadow-[0_6px_20px_rgba(245,163,91,0.3),0_2px_8px_rgba(245,163,91,0.2)] relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none hover:before:from-[#F5A35B]/20 text-base w-full"
                    >
                      Solicitar Demo
                    </Button>
                  </div>
                  <p className="text-sm text-white/60 mt-6 font-light">
                    La experiencia que los residentes merecen.
                  </p>
                </div>
              ) : (
                <div className="max-w-sm mx-auto">
                  <div className="p-8 bg-white/12 backdrop-blur-md rounded-3xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.05)] relative before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/8 before:via-transparent before:to-black/5 before:pointer-events-none">
                    <h3 className="font-serif text-3xl text-white mb-4 font-light">¡Gracias!</h3>
                    <p className="text-white/85 leading-relaxed">
                      Hemos recibido tu solicitud de demo. Nos pondremos en contacto contigo pronto para mostrarte todo lo que Privia puede hacer.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
