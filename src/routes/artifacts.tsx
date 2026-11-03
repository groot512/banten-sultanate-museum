import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageIntro, VirtualBadge } from "@/components/shell";
import { ModelViewer } from "@/components/viewers";
import { useT } from "@/lib/i18n";
import { artifacts, scenes, sites, ui } from "@/lib/content";

export const Route = createFileRoute("/artifacts")({ component: ArtifactsPage });

function ArtifactsPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main id="content" className="pt-16">
        <PageIntro
          kicker={`03 · ${t(ui.pilot)}`}
          title={t({ ko: "유물 전시관", id: "Ruang artefak", en: "Object hall", su: "Rohangan barang" })}
          lede={t({
            ko: "카드의 칸은 이름, 연대, 위치, 소장, 한 줄, 연표로 통일합니다. 여섯 점은 후보입니다.",
            id: "Kolom kartu seragam: nama, tarikh, letak, simpanan, satu kalimat, linimasa. Enam benda ini calon.",
            en: "Every card uses the same fields: name, date, place, keeper, one line, timeline. These six are candidates.",
            su: "Kartu sarua: ngaran, tarikh, tempat, panyimpen, hiji kalimat. Genep ieu calon.",
          })}
        />
        <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-12 md:grid-cols-12" aria-label="3D">
          <div className="md:col-span-5">
            <ModelViewer alt={t({ ko: "3D 뷰어 예시 모델(반튼 유물 아님)", id: "Model contoh penampil 3D", en: "3D viewer sample model", su: "Model conto 3D" })} sampleLabel={t({ ko: "예시", id: "Contoh", en: "Sample", su: "Conto" })} />
          </div>
          <div className="md:col-span-7">
            <p className="text-sm text-gold">{t({ ko: "3D 유물 뷰어 · 예시(실제 반튼 유물 아님)", id: "Penampil artefak 3D · contoh", en: "3D object viewer · sample", su: "Panémbong 3D · conto" })}</p>
            <h2 className="mt-1 font-display text-3xl text-sand">{t({ ko: "돌려보고 확대하는 유물", id: "Putar dan perbesar benda", en: "Turn and zoom an object", su: "Puter jeung gedéan" })}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-sand">{t({
              ko: "드래그로 돌리고, 휠이나 두 손가락으로 확대합니다. 지금 모델은 구조 확인용 공개 예시(Khronos glTF 샘플 Lantern, CC0)이며 반튼 유물이 아닙니다. 유물 3D 스캔이 나오면 같은 자리에 들어갑니다.",
              id: "Seret untuk memutar, gulir atau dua jari untuk memperbesar. Model ini contoh publik (Khronos Lantern, CC0), bukan artefak Banten.",
              en: "Drag to turn, scroll or pinch to zoom. This model is a public sample (Khronos glTF Lantern, CC0), not a Banten object. Real scans will replace it.",
              su: "Model ieu conto umum (Khronos Lantern, CC0), lain barang Banten.",
            })}</p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-5 pb-20">
          {artifacts.map((item) => {
            const scene = scenes.find((entry) => entry.id === item.sceneId);
            const site = sites.find((entry) => entry.id === item.siteId);
            return (
              <article key={item.id} id={item.id} className="grid gap-6 border-t border-line py-10 md:grid-cols-12">
                <figure className="md:col-span-5">
                  {item.image ? (
                    <span className="relative block">
                      <img src={item.image} alt={item.imageAlt ? t(item.imageAlt) : ""} className="w-full object-cover" />
                      <span className="absolute left-3 top-3">
                        <VirtualBadge />
                      </span>
                    </span>
                  ) : (
                    <span className="grid min-h-64 place-items-center bg-teak px-6 text-center text-sm text-mist">
                      {t(ui.emptyShot)}
                    </span>
                  )}
                </figure>
                <div className="md:col-span-7">
                  <p className="text-sm text-gold">{t(item.kind)}</p>
                  <h2 className="mt-1 font-display text-4xl text-sand">{t(item.name)}</h2>
                  <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-mist">{t(ui.era)}</dt>
                      <dd className="mt-1 text-sand">{t(item.era)}</dd>
                    </div>
                    <div>
                      <dt className="text-mist">{t(ui.place)}</dt>
                      <dd className="mt-1 text-sand">{t(item.place)}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-mist">{t(ui.holder)}</dt>
                      <dd className="mt-1 text-sand">{t(item.holder)}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-mist">{t(ui.digital)}</dt>
                      <dd className="mt-1 text-sand">{t(item.digital)}</dd>
                    </div>
                  </dl>
                  <p className="mt-5 max-w-xl text-pretty leading-relaxed text-sand">{t(item.point)}</p>
                  {item.review ? (
                    <p className="mt-4 max-w-xl border-l-2 border-gold pl-3 text-sm leading-relaxed text-sand">
                      <span className="text-gold">{t(ui.review)}. </span>
                      {t(item.review)}
                    </p>
                  ) : null}
                  <p className="mt-4 flex flex-wrap gap-x-5">
                    {scene ? (
                      <Link to="/history" hash={scene.id} className="inline-flex min-h-11 items-center text-sm text-gold">
                        {t(ui.relatedScene)} · {scene.years}
                      </Link>
                    ) : null}
                    {site ? (
                      <Link to="/sites" hash={site.id} className="inline-flex min-h-11 items-center text-sm text-gold">
                        {t(ui.relatedSite)} · {t(site.name)}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
