import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { langChoices, useLang, useT } from "@/lib/i18n";
import { navItems, ui } from "@/lib/content";

export function Header() {
  const t = useT();
  const { lang, setLang } = useLang();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="min-w-0 shrink leading-tight">
          <span className="block text-xs tracking-widest text-gold">BANTEN</span>
          <span className="font-display text-base text-sand sm:text-lg">{t(ui.museum)}</span>
        </Link>
        <nav className="ml-6 hidden items-center gap-5 lg:flex" aria-label={t(ui.menu)}>
          {navItems.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm ${active ? "text-gold" : "text-sand"}`}
                aria-current={active ? "page" : undefined}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          {langChoices.map((choice) => (
            <button
              key={choice.id}
              type="button"
              aria-pressed={lang === choice.id}
              aria-label={choice.name}
              onClick={() => setLang(choice.id)}
              className={`min-h-11 min-w-11 px-1 text-xs tracking-wide ${lang === choice.id ? "text-gold" : "text-mist"}`}
            >
              {choice.short}
            </button>
          ))}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-sand lg:hidden"
            aria-expanded={open}
            aria-label={open ? t(ui.close) : t(ui.menu)}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="fixed inset-0 top-16 z-30 overflow-y-auto bg-ink px-6 py-8 lg:hidden" aria-label={t(ui.menu)}>
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="block py-3 font-display text-4xl text-sand">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-line bg-teak">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="font-display text-2xl text-sand">{t(ui.line2)}</p>
          <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-mist">{t(ui.disclaimer)}</p>
        </div>
        <div className="md:col-span-5 md:text-right">
          <p className="text-sm text-gold">{t(ui.fromBrief)}</p>
          <p className="mt-2 text-sm text-mist">VM-1 · 1552–1813 · {t(ui.provisional)}</p>
          <p className="mt-6 text-sm">
            <a className="text-sand underline decoration-line underline-offset-4" href="https://www.metadwipa.id">
              metadwipa.id
            </a>
            <span className="text-mist"> · </span>
            <a className="text-sand underline decoration-line underline-offset-4" href="https://www.bamboochain.id/">
              bamboochain.id
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function VirtualBadge() {
  const t = useT();
  return (
    <span className="inline-flex items-center border border-gold/70 bg-ink/85 px-2 py-1 text-xs tracking-wide text-sand">
      {t(ui.virtual)}
    </span>
  );
}

export function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="mx-auto max-w-6xl px-5 pb-8 pt-8">
      <p className="text-sm text-gold">{kicker}</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight text-balance text-sand sm:text-6xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-mist">{lede}</p>
    </header>
  );
}
