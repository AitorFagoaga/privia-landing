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

  useEffect(() => {
    // Intersection Observer for scroll animations
    if (typeof window !== 'undefined') {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      }, observerOptions)

      // Observe all elements with animation classes
      const animatedElements = document.querySelectorAll('.animate-on-scroll')
      animatedElements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }
  }, [])

  const handleDemoRequest = () => {
    setIsSubmitted(true)
    console.log("Demo request submitted")
  }

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-white/10">
        <div 
          className="h-full bg-[#F5A35B] transition-all duration-300 ease-out"
          style={{ width: typeof window !== 'undefined' ? `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` : '0%' }}
        />
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2029]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/images/PriviaIndividualFinal.svg" 
                alt="Privia Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 filter drop-shadow-lg"
              />
              <div className="text-white font-serif text-xl font-light tracking-wider">
                Privia
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#inicio" className="text-[#F5A35B] hover:text-[#F5A35B]/80 transition-colors duration-200 text-sm font-medium tracking-wide border-b border-[#F5A35B]">
                  INICIO
                </a>
                <a href="#servicios" className="text-white/90 hover:text-[#F5A35B] transition-colors duration-200 text-sm font-medium tracking-wide">
                  SERVICIOS
                </a>
                <a href="#nosotros" className="text-white/90 hover:text-[#F5A35B] transition-colors duration-200 text-sm font-medium tracking-wide">
                  NOSOTROS
                </a>
                <a href="#contacto" className="text-white/90 hover:text-[#F5A35B] transition-colors duration-200 text-sm font-medium tracking-wide">
                  CONTACTO
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white/90 hover:text-[#F5A35B]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="min-h-screen relative overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
          style={{
            backgroundImage: "url(/images/portada_landing_pv.jpg)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
      >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/55 to-slate-900/80" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#F5A35B]/40 rounded-full animate-float opacity-60" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-[#1F2029]/30 rounded-full animate-float opacity-70" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-[#F5A35B]/20 rounded-full animate-float opacity-60" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-full text-center">
            <div className="max-w-6xl mx-auto">
              <div className="opacity-0 animate-fade-in-up mb-16">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light tracking-tight leading-[1.1] mb-6">
                  El Sistema Operativo de la  <br/>
                  <span className="text-[#F5A35B] font-medium"> Experiencia Residencial.</span>
                </h1>
                <div className="w-24 h-px bg-[#F5A35B] mx-auto opacity-60"></div>
              </div>

              <div className="opacity-0 animate-fade-in-up animate-delay-200 mb-16 max-w-3xl mx-auto">
                <p className="text-white/80 text-xl md:text-2xl font-light tracking-wide leading-relaxed text-center">
                  Privia es el sistema operativo que potencia a las comunidades de lujo, automatizando lo complejo para que solo quede la excelencia.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up animate-delay-400">
                {!isSubmitted ? (
                  <div className="flex justify-center">
                    <Button
                      onClick={handleDemoRequest}
                      className="bg-transparent border border-[#F5A35B] text-[#F5A35B] hover:bg-[#F5A35B] hover:text-white px-12 py-4 text-base font-light tracking-[0.2em] transition-all duration-300 rounded-none uppercase"
                    >
                      Solicitar Consulta
                    </Button>
                  </div>
                ) : (
                  <div className="max-w-xl mx-auto">
                    <div className="p-10 bg-white/5 backdrop-blur-2xl border border-[#F5A35B]/20 shadow-[0_20px_60px_rgba(245,163,91,0.15)] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F5A35B]/5 to-transparent"></div>
                      <div className="relative">
                        <div className="w-16 h-px bg-[#F5A35B] mx-auto mb-6"></div>
                        <h3 className="font-serif text-2xl text-white mb-6 font-light tracking-wide">Solicitud Registrada</h3>
                        <p className="text-white/80 leading-relaxed text-lg font-light">
                          Gracias por su interés en Privia. Nuestro equipo se pondrá en contacto para coordinar una consulta privada y explorar cómo podemos elevar su comunidad.
                        </p>
                        <div className="w-12 h-px bg-[#F5A35B] mx-auto mt-6"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up animate-delay-600">
          <div className="flex flex-col items-center cursor-pointer group" onClick={() => {
            if (typeof window !== 'undefined') {
              document.querySelector('section')?.scrollIntoView({ behavior: 'smooth' })
            }
          }}>
            <div className="relative">
              {/* Liquid glass background with pulse effect */}
              <div className="w-14 h-14 rounded-full bg-white/8 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-500 group-hover:scale-110 shadow-[0_8px_32px_rgba(31,32,41,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] animate-liquid-pulse">
                {/* Inner glow effect */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Arrow icon */}
                <svg 
                  className="w-6 h-6 text-white/90 animate-gentle-bounce relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-white/30 animate-float opacity-60"></div>
              <div className="absolute -bottom-2 -right-1 w-1.5 h-1.5 rounded-full bg-[#F5A35B]/40 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Elegant line indicator */}
            <div className="mt-3 h-12 w-px bg-gradient-to-b from-white/50 via-white/20 to-transparent"></div>
            
            {/* Subtle text hint */}
            <p className="mt-2 text-white/60 text-xs font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              EXPLORAR
            </p>
          </div>
        </div>
      </main>

      {/* Bespoke by Design Section */}
      <section id="servicios" className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Elegant background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-[#F5A35B] mx-auto mb-8"></div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 font-light tracking-tight">
             Diseñado a medida
            </h2>
            <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Las comunidades de élite enfrentan un desafío único: gestionar operaciones complejas sin comprometer una experiencia de lujo para los residentes. Las soluciones genéricas fallan porque no entienden su estándar.
            </p>
          </div>
          {/* Principles */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#F5A35B]/10 to-[#F5A35B]/20 rounded-full flex items-center justify-center border border-[#F5A35B]/30 group-hover:shadow-lg transition-all duration-300">
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full"></div>
              </div>
              <h4 className="text-xl font-serif text-white mb-4 font-light">Sistemas Rígidos</h4>
              <p className="text-white/70 leading-relaxed font-light text-base">
                ¿Su software actual le obliga a adaptar sus reglas a la tecnología, y no al revés?
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#F5A35B]/10 to-[#F5A35B]/20 rounded-full flex items-center justify-center border border-[#F5A35B]/30 group-hover:shadow-lg transition-all duration-300">
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full"></div>
              </div>
              <h4 className="text-xl font-serif text-white mb-4 font-light">Fricción para el Residente</h4>
              <p className="text-white/70 leading-relaxed font-light text-base">
                ¿Recibe quejas constantes sobre procesos anticuados para reservar amenities, gestionar invitados o solicitar servicios?
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#F5A35B]/10 to-[#F5A35B]/20 rounded-full flex items-center justify-center border border-[#F5A35B]/30 group-hover:shadow-lg transition-all duration-300">
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full"></div>
              </div>
              <h4 className="text-xl font-serif text-white mb-4 font-light">Ineficiencia Operativa</h4>
              <p className="text-white/70 leading-relaxed font-light text-base">
                ¿Su equipo invierte horas en tareas manuales que una plataforma inteligente podría automatizar en segundos?
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mt-20 text-center">
            <div className="w-16 h-px bg-[#F5A35B] mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-8 font-light tracking-tight">
                <span className="text-[#F5A35B]">Nuestra Solución:</span> Privia no es un software, es su socio operativo.
              </h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                Creamos una plataforma centralizada que se adapta a las reglas y la identidad de su comunidad, eliminando la fricción para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invisible Excellence Section */}
      <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #F5A35B 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-[#F5A35B] mx-auto mb-8"></div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 font-light tracking-tight">
              Excelencia invisible
            </h2>
            <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
              La tecnología más sofisticada es aquella que nunca se nota. Experiencias perfectas que fluyen sin esfuerzo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Mobility Excellence */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-100 to-white p-8 lg:p-10 h-full hover:shadow-lg transition-all duration-500 relative overflow-hidden border border-slate-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5A35B]/10 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-3 h-3 bg-[#F5A35B] rounded-full mb-8"></div>
                  <h3 className="text-2xl font-serif text-slate-800 mb-6 font-light">Adaptabilidad Absoluta, No Configuración.</h3>
                  <p className="text-slate-600 leading-relaxed font-light text-lg mb-6">
                    Los sistemas comunes le ofrecen 'opciones' dentro de una caja rígida. Nosotros rompemos la caja. No configuramos un software existente; moldeamos nuestra plataforma para que se adapte perfectamente a las reglas, la identidad y las necesidades únicas de su comunidad. Su operación dicta la tecnología, no al revés.
                  </p>
                </div>
              </div>
            </div>

            {/* Access Excellence */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-100 to-white p-8 lg:p-10 h-full hover:shadow-lg transition-all duration-500 relative overflow-hidden border border-slate-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1F2029]/10 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-3 h-3 bg-[#1F2029] rounded-full mb-8"></div>
                  <h3 className="text-2xl font-serif text-slate-800 mb-6 font-light">Diseño Obsesivo, No Funcionalidad.</h3>
                  <p className="text-slate-600 leading-relaxed font-light text-lg mb-6">
                    Para nosotros, la forma en que un residente interactúa con la tecnología es tan importante como lo que hace. Cada pantalla, cada botón y cada notificación está diseñada con la misma atención al detalle que un arquitecto le daría a su living. El resultado es una experiencia intuitiva y elegante que se siente como una extensión natural de su comunidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Excellence */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-100 to-white p-8 lg:p-10 h-full hover:shadow-lg transition-all duration-500 relative overflow-hidden border border-slate-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5A35B]/5 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-3 h-3 bg-[#F5A35B] rounded-full mb-8"></div>
                  <h3 className="text-2xl font-serif text-slate-800 mb-6 font-light">Servicio de white-glove concierge, No Soporte Técnico.</h3>
                  <p className="text-slate-600 leading-relaxed font-light text-lg mb-6">
                    Nuestros clientes no envían 'tickets de soporte'. Tienen un socio estratégico dedicado que entiende sus operaciones. Brindamos implementación proactiva, monitoreo constante y nos anticipamos a sus necesidades. Somos una extensión de su equipo de gestión, no un proveedor externo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected by the Finest Section */}
      {/* <section id="nosotros" className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, #d97706 25%, transparent 25%), linear-gradient(-45deg, #d97706 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d97706 75%), linear-gradient(-45deg, transparent 75%, #d97706 75%)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-[#F5A35B] mx-auto mb-8"></div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 font-light tracking-tight">
              Seleccionado por los mejores
            </h2>
            <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
              Comunidades que no aceptan menos que la perfección eligen Privia como su sistema operativo invisible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-20 bg-[#F5A35B]"></div>
                <h3 className="text-3xl font-serif text-slate-800 mb-6 font-light">Criterio de selección</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light mb-6">
                  No trabajamos con cualquier comunidad. Seleccionamos aquellas que comparten nuestra visión 
                  de excelencia invisible y experiencias sin concesiones.
                </p>
                <div className="text-slate-500 font-light italic">
                  "Donde la exclusividad encuentra la innovación"
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-white p-12 border border-slate-200/50 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F5A35B]/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F5A35B]/5 to-transparent"></div>
                <div className="relative">
                  <div className="text-center space-y-8">
                    <div className="w-4 h-4 bg-[#F5A35B] rounded-full mx-auto"></div>
                    <div>
                      <div className="text-4xl font-serif text-slate-800 font-light mb-2">Exclusividad</div>
                      <div className="text-slate-600 text-lg">por invitación únicamente</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#F5A35B]/10 to-white border border-[#F5A35B]/20 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A35B]/5 to-transparent"></div>
                <div className="w-1 h-8 bg-[#F5A35B]"></div>
              </div>
              <h4 className="text-xl font-serif text-slate-800 mb-4 font-light">Residentes distinguidos</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                Comunidades habitadas por individuos que valoran la excelencia en cada aspecto de su vida.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#F5A35B]/10 to-white border border-[#F5A35B]/20 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A35B]/5 to-transparent"></div>
                <div className="w-1 h-8 bg-[#F5A35B]"></div>
              </div>
              <h4 className="text-xl font-serif text-slate-800 mb-4 font-light">Estándares sin concesiones</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                Lugares donde el detalle importa y la mediocría simplemente no es una opción.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#F5A35B]/10 to-white border border-[#F5A35B]/20 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A35B]/5 to-transparent"></div>
                <div className="w-1 h-8 bg-[#F5A35B]"></div>
              </div>
              <h4 className="text-xl font-serif text-slate-800 mb-4 font-light">Visión compartida</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                Administraciones que entienden que la tecnología debe elevar, no complicar.
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <div className="w-12 h-px bg-[#F5A35B] mx-auto mb-8"></div>
            <p className="text-slate-700 text-xl font-light italic leading-relaxed max-w-2xl mx-auto">
              "Si su comunidad cumple con nuestros estándares de excelencia, nos gustaría conocerla."
            </p>
          </div>
        </div>
      </section> */}

      {/* Selective Partnership Section */}
      <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#F5A35B]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#1F2029]/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-[#F5A35B]/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-[#F5A35B] mx-auto mb-8"></div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 font-light tracking-tight">
              No somos para todos.
            </h2>
            <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed max-w-4xl mx-auto mb-12">
              Seleccionamos cuidadosamente a las comunidades con las que nos asociamos. Buscamos administraciones con una visión a largo plazo, que entiendan que invertir en la experiencia del residente es la estrategia de crecimiento más inteligente.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full opacity-40"></div>
                <div className="w-16 h-px bg-[#F5A35B] opacity-30 mx-4"></div>
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full opacity-40"></div>
              </div>
              <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed mb-12 italic">
                "Si su comunidad comparte nuestra obsesión por la excelencia y está lista para explorar cómo un socio tecnológico puede desbloquear un nuevo nivel de prestigio y eficiencia, nos gustaría conversar."
              </p>
              
              <div className="flex justify-center">
                <Button
                  className="bg-transparent border border-[#F5A35B] text-[#F5A35B] hover:bg-[#F5A35B] hover:text-white px-12 py-4 text-base font-light tracking-[0.2em] transition-all duration-300 rounded-none uppercase"
                >
                  Solicitar Consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Bridge */}
      <div className="relative h-32 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-[#F5A35B] opacity-60"></div>
            <div className="w-3 h-3 bg-[#F5A35B] rounded-full opacity-80"></div>
            <div className="w-12 h-px bg-[#F5A35B] opacity-60"></div>
          </div>
        </div>
        {/* Subtle connecting text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/40 text-sm font-light italic mt-8">
            Para comunidades que merecen lo extraordinario
          </p>
        </div>
      </div>

      {/* Beyond Expectations Section */}
      <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #F5A35B 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            {/* Echoing the partnership theme with subtle connecting elements */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-6 h-px bg-[#F5A35B] opacity-40"></div>
              <div className="w-16 h-px bg-[#F5A35B] mx-2"></div>
              <div className="w-6 h-px bg-[#F5A35B] opacity-40"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 font-light tracking-tight">
              Su comunidad merece un sistema operativo a su altura.
            </h2>
            <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
              Las comunidades que elegimos merecen más que herramientas genéricas. Merecen una plataforma que entienda el significado de la excelencia y se adapte a su estándar único.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#F5A35B]/10 to-[#F5A35B]/20 border border-[#F5A35B]/30 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full"></div>
              </div>
              <div>
                <h5 className="text-lg font-serif text-slate-800 font-light mb-3">Llamada de Descubrimiento (15 min)</h5>
                <p className="text-slate-600 text-sm font-light">Una breve conversación para entender los desafíos únicos de su comunidad.</p>
              </div>
            </div>

            <div className="text-center space-y-6">
             <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#F5A35B]/10 to-[#F5A35B]/20 border border-[#F5A35B]/30 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full"></div>
              </div>
              <div>
                <h5 className="text-lg font-serif text-slate-800 font-light mb-3">Demo Personalizada</h5>
                <p className="text-slate-600 text-sm font-light">Le mostraremos exactamente cómo Privia puede resolver esos desafíos.</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#F5A35B]/10 to-[#F5A35B]/20 border border-[#F5A35B]/30 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 bg-[#F5A35B] rounded-full"></div>
              </div>
              <div>
                <h5 className="text-lg font-serif text-slate-800 font-light mb-3">Propuesta a Medida</h5>
                <p className="text-slate-600 text-sm font-light">Recibirá una propuesta clara y transparente, sin sorpresas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gradient-to-br from-slate-900 to-blue-900 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#F5A35B]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-cyan-400/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/images/PriviaIndividualFinal.svg" 
                  alt="Privia Logo" 
                  className="w-12 h-12 filter drop-shadow-lg"
                />
                <span className="font-serif text-3xl text-white font-light">Privia</span>
              </div>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F5A35B]/20 flex items-center justify-center hover:bg-[#F5A35B]/30 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-[#F5A35B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5A35B]/20 flex items-center justify-center hover:bg-[#F5A35B]/30 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-[#F5A35B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium text-lg mb-6">Enlaces</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-white/70 hover:text-[#F5A35B] transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-white/70 hover:text-[#F5A35B] transition-colors">Servicios</a></li>
                <li><a href="#nosotros" className="text-white/70 hover:text-[#F5A35B] transition-colors">Nosotros</a></li>
                <li><a href="#contacto" className="text-white/70 hover:text-[#F5A35B] transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-medium text-lg mb-6">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#F5A35B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-white/70 text-sm">info@privia.com</span>
                </div>
             
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Privia. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/50 hover:text-[#F5A35B] transition-colors">Privacidad</a>
                <a href="#" className="text-white/50 hover:text-[#F5A35B] transition-colors">Términos</a>
                <a href="#" className="text-white/50 hover:text-[#F5A35B] transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
