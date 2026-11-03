import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, VirtualBadge } from "@/components/shell";
import { Compare } from "@/components/compare";
import { FloorPlan } from "@/components/floor-plan";
import { useT } from "@/lib/i18n";
import { filmstrip, halls, messages, publicUrl, ui } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const t = useT();

  return (
    <>
      <Header />
      <main id="content">
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            <Compare
              className="min-h-screen"
              offsetHeader
              showBadge={false}
              beforeSrc={publicUrl("museum/palace-recon.jpg")}
              afterSrc={publicUrl("museum/palace-ruins.jpg")}
              beforeAlt={{
                ko: "전성기 궁궐의 가상 복원",
                id: "Rekonstruksi virtual keraton masa jaya",
                en: "Virtual reconstruction of the palace at its peak",
                su: "Rekonstruksi maya keraton mangsa jaya",
              }}
              afterAlt={{
                ko: "낮은 벽과 연못만 남은 궁터의 가상 이미지",
                id: "Gambar virtual tapak keraton yang tinggal dinding dan kolam",
                en: "Virtual image of the palace footprint, walls and a pool",
                su: "Gambar maya tapak keraton",
              }}
            />
          </div>
          <div className="relative z-10 flex min-h-screen flex-col justify-end bg-gradient-to-t from-ink via-ink/75 to-transparent">
            <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-32">
              <div className="max-w-3xl bg-ink/80 p-6 sm:p-8">
              <VirtualBadge />
              <p className="text-sm text-gold">
                {t(ui.kicker)} · 1552–1813 · {t(ui.provisional)}
              </p>
              <h1 className="mt-3 font-display text-5xl leading-none text-balance text-sand sm:text-7xl">
                <span className="block">{t(ui.line1)}</span>
                <span className="block">{t(ui.line2)}</span>
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-sand sm:text-lg">{t(ui.lede)}</p>
              <p className="mt-3 max-w-xl text-sm text-mist">{t(ui.heroNote)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/history" className="inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink">
                  {t(ui.enter)}
                </Link>
                <Link
                  to="/plan"
                  className="inline-flex min-h-11 items-center border border-sand/50 px-5 text-sm text-sand"
                >
                  {t(ui.seePlan)}
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label={t(ui.catalog)} className="grid sm:grid-cols-3">
          {filmstrip.map((item) => (
            <Link key={item.image} to={item.href} hash={item.hash} className="group relative block h-64 overflow-hidden sm:h-80">
              <img
                src={item.image}
                alt={t(item.alt)}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4">
                <span className="font-display text-2xl text-sand">{t(item.caption)}</span>
                <VirtualBadge />
              </span>
            </Link>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm text-gold">01 · {t(ui.kicker)}</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl text-balance text-sand">{t(ui.line1)}</h2>
          <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
            {messages.map((message) => (
              <article key={message.n} className="bg-ink p-6 sm:p-8">
                <p className="text-sm tabular-nums text-gold">{message.n}</p>
                <h3 className="mt-3 font-display text-3xl text-sand">{t(message.title)}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-mist">{t(message.body)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line bg-teak">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-sm text-gold">02</p>
            <h2 className="mt-2 font-display text-4xl text-sand">
              {t({ ko: "세 개의 전시관", id: "Tiga ruang", en: "Three halls", su: "Tilu rohangan" })}
            </h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-3">
              {halls.map((hall) => (
                <Link key={hall.to} to={hall.to} className="group block">
                  <span className="relative block h-64 overflow-hidden">
                    <img
                      src={hall.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3">
                      <VirtualBadge />
                    </span>
                  </span>
                  <h3 className="mt-4 font-display text-3xl text-sand">{t(hall.title)}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-mist">{t(hall.body)}</p>
                  <span className="mt-3 inline-flex min-h-11 items-center text-sm text-gold">{t(hall.meta)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm text-gold">03 · {t(ui.sheetTitle)}</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl text-balance text-sand">
            {t({
              ko: "관람 동선을 건물처럼",
              id: "Alur kunjungan, dibayangkan sebagai bangunan",
              en: "The visit, imagined as a building",
              su: "Alur kunjungan, dibayangkeun salaku wangunan",
            })}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-mist">{t(ui.aerialCaption)}</p>
          <figure className="mt-8">
            <span className="relative block">
              <img
                src={publicUrl("museum/museum-air.jpg")}
                alt={t(ui.aerialCaption)}
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-3 top-3">
                <VirtualBadge />
              </span>
            </span>
          </figure>
          <div className="mt-6">
            <FloorPlan />
          </div>
          <p className="mt-6">
            <Link to="/plan" className="inline-flex min-h-11 items-center text-gold">
              {t(ui.seePlan)}
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
