import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ko" | "id" | "en" | "su";

export type Copy = Record<Lang, string>;

export function L(ko: string, id: string, en: string, su: string): Copy {
  return { ko, id, en, su };
}

const LANGS: Lang[] = ["ko", "id", "en", "su"];

type Ctx = { lang: Lang; setLang: (lang: Lang) => void };

const LangContext = createContext<Ctx>({ lang: "ko", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("banten-lang");
    if (saved && LANGS.includes(saved as Lang)) setLangState(saved as Lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "su" ? "su" : lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("banten-lang", next);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useLang();
  return (copy: Copy) => copy[lang];
}

export const langChoices: { id: Lang; short: string; name: string }[] = [
  { id: "ko", short: "KO", name: "한국어" },
  { id: "id", short: "ID", name: "Indonesia" },
  { id: "su", short: "SU", name: "Basa Sunda" },
  { id: "en", short: "EN", name: "English" },
];
