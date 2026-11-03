import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageIntro, VirtualBadge } from "@/components/shell";
import { useT } from "@/lib/i18n";
import { publicUrl, scenes, sites, ui } from "@/lib/content";

export const Route = createFileRoute("/history")({ component: HistoryPage });

function HistoryPage() {
  const t = useT();
  const [open, setOpen] = useState("s1552");

  return (
    <>
      <Header />
      <main id="content" className="pt-16">
        <PageIntro
          kicker={`02 · ${t(ui.pilot)}`}
          title={t({ ko: "역사 전시관", id: "Ruang sejarah", en: "History hall", su: "Rohangan sajarah" })}
          lede={t({
            ko: "열한 장면을 오래된 순서대로 둡니다. 연도가 갈리는 곳은 문장을 잠그지 않습니다.",
            id: "Sebelas adegan, dari yang lama. Tahun yang bercabang tidak dikunci.",
            en: "Eleven scenes, oldest first. Where the year splits, the sentence stays open.",
            su: "Sabelas adegan, ti nu kolot. Taun nu béda teu dikonci.",
          })}
        />
        <div className="mx-auto max-w-6xl px-5 pb-20">
          <figure className="mb-10">
            <span className="relative block">
              <img
                src={publicUrl("museum/gallery.webp")}
                alt={t({
                  ko: "연표가 벽에 있는 역사 전시실의 가상 내부",
                  id: "Interior virtual ruang sejarah dengan linimasa di dinding",
                  en: "Virtual interior of a history room with a timeline on the wall",
                  su: "Interior maya rohangan sajarah",
                })}
                className="aspect-video w-full object-cover"
              />
              <span className="absolute left-3 top-3">
                <VirtualBadge />
              </span>
            </span>
          </figure>
          <ol className="border-l border-line">
            {scenes.map((scene) => {
              const isOpen = open === scene.id;
              const site = sites.find((item) => item.id === scene.siteId);
              return (
                <li key={scene.id} id={scene.id} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? "" : scene.id)}
                    className="flex w-full items-baseline gap-4 py-5 pl-5 text-left"
                  >
                    <span className="w-28 shrink-0 text-sm tabular-nums text-gold">{scene.years}</span>
                    <span>
                      <span className="block font-display text-2xl text-sand sm:text-3xl">{t(scene.title)}</span>
                      <span className="mt-1 block text-sm text-mist">{t(scene.exhibit)}</span>
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="grid gap-6 pb-8 pl-5 md:grid-cols-12">
                      {scene.image ? (
                        <figure className="md:col-span-5">
                          <span className="relative block">
                            <img src={scene.image} alt={scene.imageAlt ? t(scene.imageAlt) : ""} className="w-full object-cover" />
                            <span className="absolute left-3 top-3">
                              <VirtualBadge />
                            </span>
                          </span>
                        </figure>
                      ) : null}
                      <div className={scene.image ? "md:col-span-7" : "md:col-span-12"}>
                        <p className="max-w-xl text-pretty leading-relaxed text-sand">{t(scene.body)}</p>
                        {scene.review ? (
                          <p className="mt-4 max-w-xl border-l-2 border-gold pl-3 text-sm leading-relaxed text-sand">
                            <span className="text-gold">{t(ui.review)}. </span>
                            {t(scene.review)}
                          </p>
                        ) : null}
                        {site ? (
                          <p className="mt-4">
                            <Link to="/sites" hash={site.id} className="inline-flex min-h-11 items-center text-sm text-gold">
                              {t(ui.relatedSite)} · {t(site.name)}
                            </Link>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}
