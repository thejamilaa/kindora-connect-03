import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, Search, Award, Users, Sparkles, Heart, ArrowRight, Menu, X,
  GraduationCap, Building2, Leaf, Stethoscope, Palette, Cpu,
  Calendar, Clock, CheckCircle2, Star, ChevronDown, Twitter, Instagram, Linkedin, Github,
} from "lucide-react";
import heroImg from "@/assets/hero-volunteers.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Landing,
});

const categories = [
  { icon: GraduationCap, label: "Education", count: 128 },
  { icon: Leaf, label: "Environment", count: 96 },
  { icon: Stethoscope, label: "Healthcare", count: 74 },
  { icon: Heart, label: "Community", count: 152 },
  { icon: Cpu, label: "Technology", count: 43 },
  { icon: Palette, label: "Arts & Culture", count: 61 },
];

const opportunities = [
  {
    org: "Green Tashkent",
    title: "Weekend Tree Planting Initiative",
    location: "Yunusabad District",
    distance: "1.2 km",
    date: "Sat, Aug 8",
    duration: "4 hours",
    category: "Environment",
    seats: 12,
    tag: "Weekend",
  },
  {
    org: "Read & Rise NGO",
    title: "Tutor Kids in Math & English",
    location: "Chilanzar District",
    distance: "3.4 km",
    date: "Every Sun",
    duration: "3 hours",
    category: "Education",
    seats: 6,
    tag: "Recurring",
  },
  {
    org: "City Health Foundation",
    title: "Community Health Awareness Fair",
    location: "Mirzo Ulugbek",
    distance: "2.8 km",
    date: "Sun, Aug 16",
    duration: "6 hours",
    category: "Healthcare",
    seats: 20,
    tag: "New",
  },
];

const steps = [
  { n: "01", title: "Discover nearby", desc: "Set your region and neighborhood. We surface opportunities closest to you first." },
  { n: "02", title: "Apply in one tap", desc: "Send your profile to organizations with a single click and track every application." },
  { n: "03", title: "Earn recognition", desc: "Complete events, log hours, and receive verified digital certificates for your portfolio." },
];

const stats = [
  { value: "12,400+", label: "Active students" },
  { value: "850+", label: "Organizations" },
  { value: "3,200+", label: "Opportunities" },
  { value: "98%", label: "Satisfaction rate" },
];

const testimonials = [
  {
    quote: "Kindora helped me find volunteer work 10 minutes from my home. My university application looked completely different because of it.",
    name: "Amina R.",
    role: "Student, Grade 11",
  },
  {
    quote: "We recruited 40 motivated student volunteers in a week. The dashboard makes managing applications effortless.",
    name: "Bekzod K.",
    role: "Coordinator, Green Tashkent",
  },
  {
    quote: "The certificate system is beautiful. My students actually feel proud to share what they earned.",
    name: "Dilnoza M.",
    role: "Teacher & mentor",
  },
];

const faqs = [
  { q: "Who can join Kindora?", a: "Any student can sign up for free. Organizations, schools, NGOs, and companies can create verified accounts to post opportunities." },
  { q: "How does location matching work?", a: "You set your region, district, and neighborhood. Kindora ranks opportunities by real distance so you always see the closest ones first." },
  { q: "Are the certificates official?", a: "Yes. Every certificate is digitally signed by the organizing entity and includes a QR code for public verification." },
  { q: "Does it cost anything?", a: "Kindora is free for students. Organizations get a generous free tier with optional premium tools for larger programs." },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="dark min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display text-xl font-bold">Kindora</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#opportunities" className="transition hover:text-foreground">Opportunities</a>
            <a href="#how" className="transition hover:text-foreground">How it works</a>
            <a href="#organizations" className="transition hover:text-foreground">For organizations</a>
            <a href="#faq" className="transition hover:text-foreground">FAQ</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" className="text-foreground hover:bg-white/5">Sign in</Button>
            <Button className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              Get started
            </Button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-sm">
              {["Opportunities", "How it works", "For organizations", "FAQ"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s.+/, "")}`}
                  className="rounded-lg px-3 py-3 text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <Button variant="outline" className="flex-1">Sign in</Button>
                <Button className="flex-1 bg-gradient-primary text-primary-foreground">Get started</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute left-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Volunteer smarter, closer to home
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Find volunteer <br />
              opportunities <span className="text-gradient">near you</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Helping students build stronger futures through local volunteer experiences.
              Discover projects across the street — not across the city.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                Find opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border/80 bg-white/5 backdrop-blur hover:bg-white/10">
                Post an opportunity
              </Button>
            </div>

            {/* Search card */}
            <div className="mt-10 glass rounded-2xl p-3 shadow-elegant">
              <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Region / District / Neighborhood"
                    className="h-12 border-transparent bg-white/5 pl-9 focus-visible:ring-primary"
                  />
                </div>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Category or keyword"
                    className="h-12 border-transparent bg-white/5 pl-9 focus-visible:ring-primary"
                  />
                </div>
                <Button className="h-12 bg-gradient-primary px-6 text-primary-foreground hover:opacity-90">
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="glass overflow-hidden rounded-3xl p-2 shadow-elegant">
              <img
                src={heroImg}
                alt="Students volunteering together in their community"
                width={1400}
                height={1200}
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass hidden rounded-2xl p-4 shadow-elegant sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Certificates issued</p>
                  <p className="font-display text-lg font-semibold">4,812</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-8 glass hidden rounded-2xl p-4 shadow-elegant md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Active volunteers</p>
                  <p className="font-display text-lg font-semibold">12.4k</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-20 max-w-7xl px-6">
          <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-6 sm:grid-cols-4 sm:p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Categories</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Choose the cause that moves you</h2>
            </div>
            <a href="#opportunities" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              Explore all <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map(({ icon: Icon, label, count }) => (
              <button
                key={label}
                className="group glass flex flex-col items-start gap-3 rounded-2xl p-5 text-left transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 transition group-hover:bg-gradient-primary">
                  <Icon className="h-5 w-5 text-primary transition group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-xs text-muted-foreground">{count} open</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Nearby opportunities</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Handpicked for your neighborhood</h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              {["Nearest", "Newest", "Popular", "Ending soon"].map((f, i) => (
                <button
                  key={f}
                  className={`rounded-full px-4 py-2 text-xs transition ${
                    i === 0
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((o) => (
              <article
                key={o.title}
                className="glass group flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{o.org}</p>
                      <p className="text-xs text-primary">{o.category}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                    {o.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{o.title}</h3>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {o.location}</span>
                  <span className="inline-flex items-center gap-1 text-primary">• {o.distance}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {o.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {o.duration}</span>
                  <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {o.seats} seats</span>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4">
                  <Button className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90">Apply</Button>
                  <Button variant="outline" size="icon" className="border-border/80 bg-white/5 hover:bg-white/10" aria-label="Save opportunity">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">How it works</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Three steps from search to certificate</h2>
            <p className="mt-3 text-muted-foreground">
              Kindora keeps the whole volunteer journey in one polished flow — no spreadsheets, no group chats, no missed hours.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="glass relative rounded-2xl p-8">
                <span className="font-display text-5xl font-bold text-gradient">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For organizations */}
      <section id="organizations" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass grid gap-10 rounded-3xl p-8 shadow-elegant lg:grid-cols-2 lg:p-14">
            <div>
              <p className="text-sm font-medium text-primary">For organizations</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Recruit motivated student volunteers in minutes</h2>
              <p className="mt-4 text-muted-foreground">
                Post opportunities, review applicants, and issue verifiable certificates from one dashboard.
                Built for NGOs, schools, and companies running community programs.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Applicant tracking with accept & reject flows",
                  "Digital certificates with QR verification",
                  "Analytics on volunteer hours and reach",
                  "Event reminders and notifications",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                  Create organization account
                </Button>
                <Button variant="outline" className="border-border/80 bg-white/5 hover:bg-white/10">
                  Book a demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Applicants this week</p>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">+18%</span>
                </div>
                <div className="mt-4 flex h-32 items-end gap-2">
                  {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-md bg-gradient-primary opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    { name: "Amina R.", role: "Environment · 12h", status: "Accepted" },
                    { name: "Sardor B.", role: "Education · 6h", status: "Pending" },
                    { name: "Zilola U.", role: "Healthcare · 9h", status: "Accepted" },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                          {a.name.split(" ")[0][0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{a.name}</p>
                          <p className="text-xs text-muted-foreground">{a.role}</p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] ${
                          a.status === "Accepted"
                            ? "bg-primary/15 text-primary"
                            : "bg-white/10 text-muted-foreground"
                        }`}
                      >
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Loved by community</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Stories from students and organizers</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="glass flex flex-col rounded-2xl p-6">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-medium text-primary">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Everything you need to know</h2>
            <p className="mt-4 text-muted-foreground">
              Still curious? Reach out at{" "}
              <a className="text-primary underline-offset-4 hover:underline" href="mailto:hello@kindora.app">
                hello@kindora.app
              </a>
              .
            </p>
          </div>
          <Accordion type="single" collapsible className="glass rounded-2xl p-2 sm:p-4">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`i-${i}`} className="border-border/60 px-3">
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass relative overflow-hidden rounded-3xl p-10 text-center shadow-elegant sm:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
            </div>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              Start volunteering <span className="text-gradient">this weekend</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands of students turning nearby opportunities into skills, memories, and stronger futures.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                Create free account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border/80 bg-white/5 hover:bg-white/10">
                I represent an organization
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-display text-xl font-bold">Kindora</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Connecting students with meaningful volunteer work — one neighborhood at a time.
            </p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg glass transition hover:border-primary/40 hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Platform" links={["Opportunities", "Organizations", "Certificates", "Leaderboard"]} />
          <FooterCol title="Company" links={["About", "Contact", "Careers", "Blog"]} />

          <div>
            <p className="text-sm font-semibold">Get updates</p>
            <p className="mt-2 text-xs text-muted-foreground">New opportunities near you, monthly.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="you@school.edu" className="h-10 border-transparent bg-white/5" />
              <Button className="h-10 bg-gradient-primary text-primary-foreground hover:opacity-90">Join</Button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/60 px-6 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Kindora. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition hover:text-foreground">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
