"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "The Cost Problem", href: "#problem-solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
]

const heroStats = [
  { value: "99%", label: "false alarms eliminated" },
  { value: "24/7", label: "camera coverage without extra headcount" },
  { value: "6–12 mo", label: "typical ROI window" },
]

const painPoints = [
  {
    title: "Exorbitant Guarding Costs",
    description:
      "A single 24/7 post now exceeds $3K per month. Multiply that by every gate and patrol route and budgets collapse.",
  },
  {
    title: "Alert Fatigue Is Real",
    description:
      "Over 75% of alarms are weather, wildlife, or shadows. Guards stop trusting the system and real threats slip through.",
  },
  {
    title: "Zero Operational Insight",
    description:
      "Hours of footage sit untouched. There is no easy way to review incidents, track trends, or justify staffing levels.",
  },
]

const solutionHighlights = [
  "Eliminate 99% of false alarms so guards act only on verified threats.",
  "Redeploy staff coverage with data-backed heatmaps and incident analytics.",
  "Deliver board-ready reporting that proves savings and risk reduction every week.",
]

const howItWorksSteps = [
  {
    step: "1",
    title: "Connect",
    description:
      "Link Privia to your existing CCTV in days. No rip-and-replace, no new hardware budget, no operational downtime.",
  },
  {
    step: "2",
    title: "Analyze",
    description:
      "Video feeds stream through our platform in real time. Privia learns routine activity and flags anomalies with human-level precision.",
  },
  {
    step: "3",
    title: "Alert",
    description:
      "Only verified threats trigger priority alerts. Guards move with confidence while residents gain measurable protection.",
  },
]

const benefitCards = [
  {
    title: "Real Threat Verification",
    description:
      "Privia filters every feed and forwards only validated incidents. Guard shifts focus on the 1% that matter, shrinking overtime and response lag.",
    meta: "99% reduction in noise",
  },
  {
    title: "Pattern Intelligence",
    description:
      "Spot recurring perimeter testing, suspicious vehicle loops, or late-night foot traffic. Anticipate the next incident instead of reacting to the last one.",
    meta: "Heatmaps & anomaly trails",
  },
  {
    title: "Zero-Disruption Deployment",
    description:
      "Keep the cameras and guard talent you already paid for. Privia slots into your VMS and augments operations immediately.",
    meta: "Hardware-agnostic integration",
  },
  {
    title: "Executive-Ready Reporting",
    description:
      "Weekly dashboards quantify reduced dispatches, staffing efficiencies, and SLA performance. Give boards and residents the proof they expect.",
    meta: "Cost & risk KPIs on demand",
  },
]

export default function PriviaLandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      }, observerOptions)

      const animatedElements = document.querySelectorAll(".animate-on-scroll")
      animatedElements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }
  }, [])

  const scrollProgress =
    typeof window !== "undefined"
      ? Math.min(
          100,
          (scrollY /
            Math.max(
              1,
              document.documentElement.scrollHeight - window.innerHeight,
            )) *
            100,
        )
      : 0

  const scrollToCta = () => {
    if (typeof window !== "undefined") {
      document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleAssessmentRequest = () => {
    setIsSubmitted(true)
    console.log("ROI assessment requested")
  }

  return (
    <div className="min-h-screen bg-[#040712] text-slate-100 relative">
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-white/10">
        <div
          className="h-full bg-[#2CF5FF] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/images/PriviaIndividualFinal.svg"
              alt="Privia logo"
              className="h-10 w-10 drop-shadow-[0_0_12px_rgba(44,245,255,0.45)]"
            />
            <span className="font-serif text-xl tracking-[0.2em] text-white">
              Privia
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.18em] text-white/70 transition-colors duration-200 hover:text-[#2CF5FF]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={scrollToCta}
              className="rounded-full border border-[#2CF5FF]/70 bg-[#2CF5FF]/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2CF5FF] transition duration-300 hover:bg-[#2CF5FF] hover:text-slate-900"
            >
              ROI Assessment
            </Button>
          </div>
        </div>
      </nav>

      <main id="hero" className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(44,245,255,0.14),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(109,89,255,0.18),transparent_45%),linear-gradient(140deg,#050914_0%,#02040a_55%,#06122b_100%)]" />
          <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2CF5FF]/20 blur-3xl" />
          <div className="absolute -bottom-12 left-10 h-64 w-64 rounded-full bg-[#6D59FF]/25 blur-3xl" />
          <div className="absolute right-0 top-0 h-[640px] w-1/3 bg-gradient-to-l from-[#081230] via-[#040b1b]/90 to-transparent opacity-80" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <span className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60">
            AI co-pilot for physical security teams
          </span>
          <h1 className="animate-on-scroll mt-10 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Cut Guarding Costs Without Cutting Guards
          </h1>
          <p className="animate-on-scroll mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">
            Privia filters 24/7 camera feeds, kills 99% of false alarms, and
            keeps your existing team focused on real threats—no new hardware
            required.
          </p>
          <div className="animate-on-scroll mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Button
              onClick={scrollToCta}
              className="rounded-full bg-[#2CF5FF] px-10 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-[#7bfaff]"
            >
              Book a 20-Minute ROI Assessment
            </Button>
            <span className="text-sm text-white/60">
              We augment your guards, never replace them.
            </span>
          </div>

          <div className="animate-on-scroll mt-14 grid w-full gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-lg"
              >
                <p className="text-3xl font-semibold text-[#2CF5FF]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                document
                  .querySelector("section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="group flex flex-col items-center"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#2CF5FF]/60 group-hover:bg-[#2CF5FF]/10">
              <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
              <svg
                className="relative z-10 h-6 w-6 animate-gentle-bounce text-white/80 group-hover:text-[#2CF5FF]"
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
            <span className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">
              Scroll
            </span>
          </button>
        </div>
      </main>

      <section
        id="problem-solution"
        className="relative overflow-hidden py-28 text-slate-100"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f22]/60 to-[#030812]" />
        <div className="mx-auto max-w-6xl px-4">
          <div className="animate-on-scroll text-center">
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Property Security Is Overdue for a Reset
            </h2>
            <p className="mt-6 text-lg text-white/70 sm:text-xl">
              Guarding is your largest operating expense, yet the current model
              is broken—and getting more expensive every quarter.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              {painPoints.map((pain) => (
                <div
                  key={pain.title}
                  className="animate-on-scroll rounded-2xl border border-white/5 bg-[#070f1f]/80 p-6 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {pain.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    {pain.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll rounded-3xl border border-[#2CF5FF]/20 bg-gradient-to-br from-[#071029] via-[#050d1f] to-[#040a18] p-10 backdrop-blur-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#2CF5FF]">
                The Privia Response
              </span>
              <h3 className="mt-6 font-serif text-3xl text-white">
                An intelligent filter that makes every guard post count
              </h3>
              <p className="mt-4 text-base text-white/70">
                Privia plugs into the cameras you already rely on and becomes the signal processor your guards never
                had. We surface real threats instantly and give you the operational intelligence to{" "}
                redeploy coverage with confidence.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-white/75">
                {solutionHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2CF5FF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative overflow-hidden bg-[#020510] py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,89,255,0.22),transparent_60%)] opacity-70" />
        <div className="absolute -top-16 left-2/3 h-72 w-72 rounded-full bg-[#2CF5FF]/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="animate-on-scroll text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#2CF5FF]">
              Seamless Workflow
            </span>
            <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
              Connect. Analyze. Alert.
            </h2>
            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              Privia coexists with your infrastructure and supercharges your
              guard operations from day one.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="animate-on-scroll group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#2CF5FF]/50 hover:bg-[#2CF5FF]/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2CF5FF]/40 bg-[#2CF5FF]/10 text-lg font-semibold text-[#2CF5FF]">
                  {step.step}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="relative overflow-hidden bg-[#040a18] py-28 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(44,245,255,0.16),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(109,89,255,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="animate-on-scroll text-center">
            <h2 className="font-serif text-4xl md:text-5xl">
              Features Built for Operational ROI
            </h2>
            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              Translate technical capability into measurable savings, sharper
              coverage, and confident reporting.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {benefitCards.map((benefit) => (
              <div
                key={benefit.title}
                className="animate-on-scroll rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#2CF5FF]/40 hover:bg-[#2CF5FF]/5"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  {benefit.description}
                </p>
                <div className="mt-6 inline-flex items-center rounded-full border border-[#2CF5FF]/40 bg-[#2CF5FF]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#2CF5FF]">
                  {benefit.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative overflow-hidden bg-gradient-to-b from-[#040a18] via-[#020510] to-[#010308] py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,245,255,0.12),transparent_60%)]" />
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[#2CF5FF]/30" />
        <div className="absolute bottom-12 right-12 h-52 w-52 rounded-full border border-[#6D59FF]/25" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <span className="animate-on-scroll text-xs uppercase tracking-[0.3em] text-[#2CF5FF]">
            Take the Next Step
          </span>
          <h2 className="animate-on-scroll mt-6 font-serif text-4xl sm:text-5xl">
            Ready to see how much waste Privia can remove?
          </h2>
          <p className="animate-on-scroll mt-4 text-lg text-white/70">
            Request your tailored cost-savings plan and put your guards back on
            offense. We will model your current staffing, alarm load, and risk
            posture to uncover the fastest path to ROI.
          </p>

          {!isSubmitted ? (
            <div className="animate-on-scroll mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Button
                onClick={handleAssessmentRequest}
                className="rounded-full bg-[#2CF5FF] px-10 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-[#7bfaff]"
              >
                Request Cost-Savings Plan
              </Button>
              <p className="text-sm text-white/60">
                A Privia specialist will connect within 24 hours.
              </p>
            </div>
          ) : (
            <div className="animate-on-scroll mt-12 rounded-3xl border border-[#2CF5FF]/30 bg-[#041023]/80 p-10 backdrop-blur-xl">
              <h3 className="font-serif text-2xl text-[#2CF5FF]">
                Thank you — we&apos;re on it.
              </h3>
              <p className="mt-4 text-sm text-white/70">
                A Privia specialist will reach out within the next 24 hours with
                a tailored ROI walkthrough for your community. We look forward to
                helping you reclaim your security budget.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#010308] py-16 text-white/70">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-8 top-8 h-24 w-24 border border-[#2CF5FF]/30 rounded-full" />
          <div className="absolute bottom-6 right-10 h-32 w-32 border border-[#6D59FF]/25 rounded-full" />
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src="/images/PriviaIndividualFinal.svg"
                  alt="Privia logo"
                  className="h-10 w-10 drop-shadow-[0_0_12px_rgba(44,245,255,0.45)]"
                />
                <span className="font-serif text-2xl tracking-[0.2em] text-white">
                  Privia
                </span>
              </div>
              <p className="mt-6 max-w-sm text-sm text-white/60">
                AI-powered verification that keeps premium communities safer
                while protecting the guard teams that residents already trust.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                Navigation
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    className="transition-colors hover:text-[#2CF5FF]"
                    href="#hero"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#2CF5FF]"
                    href="#problem-solution"
                  >
                    The Cost Problem
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#2CF5FF]"
                    href="#how-it-works"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#2CF5FF]"
                    href="#benefits"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#2CF5FF]"
                    href="#cta"
                  >
                    ROI Assessment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="text-white/60">info@privia.com</span>
                </li>
                <li>
                  <span className="text-white/60">+1 (305) 555-0173</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <p>© {new Date().getFullYear()} Privia. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="transition-colors hover:text-[#2CF5FF]" href="#">
                Privacy
              </a>
              <a className="transition-colors hover:text-[#2CF5FF]" href="#">
                Terms
              </a>
              <a className="transition-colors hover:text-[#2CF5FF]" href="#">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
