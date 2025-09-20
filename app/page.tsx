"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function PriviaLandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDemoRequest = () => {
    setIsSubmitted(true)
    console.log("Demo request submitted")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
          style={{
            backgroundImage: "url(/images/boston-p.jpg)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2029]/70 via-[#1F2029]/55 to-[#1F2029]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-full text-center">
            <div className="opacity-0 animate-fade-in-up mb-12">
              <div className="flex items-center justify-center gap-4 mb-[-36px]">
                <img 
                  src="/images/PriviaIndividualFinal.svg" 
                  alt="Privia Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 filter drop-shadow-lg"
                />
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white whitespace-nowrap xl:text-9xl font-normal tracking-wide">
                  Privia
                </h1>
              </div>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="opacity-0 animate-fade-in-up animate-delay-200 mb-12 mt-8">
                <p className="text-white/90 text-lg font-light tracking-wide leading-relaxed">
                  Software exclusivo para las comunidades<br/>más distinguidas de Punta del Este
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up animate-delay-400">
                {!isSubmitted ? (
                  <div className="max-w-sm mx-auto">
                    <div className="flex justify-center p-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-[0_8px_32px_rgba(31,32,41,0.3),0_2px_8px_rgba(0,0,0,0.1)] relative hover:bg-white/15 hover:border-white/30 transition-all duration-500 ease-out hover:scale-[1.02]">
                      <Button
                        onClick={handleDemoRequest}
                        className="bg-transparent text-white hover:bg-[#F5A35B] hover:text-[#1F2029] rounded-full px-12 py-3 transition-all duration-300 font-medium hover:shadow-[0_6px_20px_rgba(245,163,91,0.4)] text-base w-full border-0"
                      >
                        Solicitar Demostración Privada
                      </Button>
                    </div>
                    <p className="text-sm text-white/70 mt-6 font-light tracking-wide">
                      Experiencias tecnológicas que reflejan su estilo de vida
                    </p>
                  </div>
                ) : (
                  <div className="max-w-sm mx-auto">
                    <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_12px_40px_rgba(31,32,41,0.2)]">
                      <h3 className="font-serif text-3xl text-white mb-4 font-light">Excelente</h3>
                      <p className="text-white/90 leading-relaxed">
                        Hemos recibido su solicitud. Un especialista se pondrá en contacto para coordinar una demostración personalizada.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1F2029] mb-6 font-light">
              Excelencia en cada detalle
            </h2>
            <p className="text-[#1F2029]/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Diseñado específicamente para comunidades que valoran la privacidad, 
              la sofisticación y la atención personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5A35B]/10 flex items-center justify-center group-hover:bg-[#F5A35B]/20 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#F5A35B]"></div>
              </div>
              <h3 className="font-serif text-2xl text-[#1F2029] mb-4 font-light">Privacidad Total</h3>
              <p className="text-[#1F2029]/70 leading-relaxed">
                Sistemas diseñados con los más altos estándares de seguridad y discreción.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5A35B]/10 flex items-center justify-center group-hover:bg-[#F5A35B]/20 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#F5A35B]"></div>
              </div>
              <h3 className="font-serif text-2xl text-[#1F2029] mb-4 font-light">Servicio Exclusivo</h3>
              <p className="text-[#1F2029]/70 leading-relaxed">
                Atención personalizada y soporte dedicado las 24 horas del día.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5A35B]/10 flex items-center justify-center group-hover:bg-[#F5A35B]/20 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#F5A35B]"></div>
              </div>
              <h3 className="font-serif text-2xl text-[#1F2029] mb-4 font-light">Innovación Elegante</h3>
              <p className="text-[#1F2029]/70 leading-relaxed">
                Tecnología de vanguardia integrada de manera invisible y sofisticada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-24 bg-gradient-to-br from-[#1F2029] to-[#1F2029]/95">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-white/90 text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
            "La sofisticación tecnológica que nuestra comunidad esperaba. 
            Privia ha elevado significativamente la experiencia de nuestros residentes."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-1 h-12 bg-[#F5A35B]"></div>
            <div className="text-left">
              <p className="text-white font-medium">Gerente General</p>
              <p className="text-white/70 text-sm">Comunidad Premium, Punta del Este</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#F5A35B] to-[#F5A35B]/95 py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <img 
                src="/images/PriviaIndividualFinal.svg" 
                alt="Privia Logo" 
                className="w-8 h-8"
              />
              <span className="font-serif text-2xl text-[#1F2029] font-light">Privia</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[#1F2029]/70 text-sm mb-2">
                Software exclusivo para comunidades distinguidas
              </p>
              <p className="text-[#1F2029]/50 text-xs">
                Punta del Este, Uruguay | {new Date().getFullYear()}
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-[#1F2029]/40 text-xs">
              © {new Date().getFullYear()} Privia. Todos los derechos reservados. 
              Diseñado para la excelencia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
