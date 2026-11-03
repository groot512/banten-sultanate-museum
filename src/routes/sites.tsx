import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageIntro, VirtualBadge } from "@/components/shell";
import { Compare } from "@/components/compare";
import { PanoramaViewer } from "@/components/viewers";
import { useT } from "@/lib/i18n";
import { artifacts, publicUrl, sites, ui } from "@/lib/content";

export const Route = createFileRoute("/sites")({ component: SitesPage });

function SitesPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main id="content" className="pt-16">
        <PageIntro
          kicker={`04 · ${t(ui.pilot)}`}
          title={t({ ko: "유적지 360° 영상관", id: "Ruang film situs", en: "Site film hall", su: "Rohangan pilem situs" })}
          lede={t({
            ko: "여덟 곳은 반튼 라마입니다. 아래 화면은 촬영 전의 자리표시이고, 스로소완만 전성기와 오늘을 겹쳐 봅니다.",
            id: "Delapan tempat di Banten Lama. Layar di bawah hanya penanda sebelum syuting. Hanya Surosowan yang menimpa masa jaya dan hari ini.",
            en: "Eight places in Old Banten. The frames below are stand-ins before the shoot. Only Surosowan overlays peak and present.",
            su: "Dalapan tempat di Banten Lama. Gambar di handap ngan pananda saméméh syuting.",
          })}
        />
        <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-12 lg:grid-cols-12" aria-label="360">
          <div className="lg:col-span-7">
            <PanoramaViewer title={t({ ko: "360° 예시", id: "Contoh 360°", en: "360° sample", su: "Conto 360°" })} sampleLabel={t({ ko: "예시", id: "Contoh", en: "Sample", su: "Conto" })} />
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-gold">{t({ ko: "360° 유적 뷰어 · 예시(실제 반튼 유적 아님)", id: "Penampil situs 360° · contoh", en: "360° site viewer · sample", su: "Panémbong 360° · conto" })}</p>
            <h2 className="mt-1 font-display text-3xl text-sand">{t({ ko: "안에 서서 둘러보기", id: "Berdiri dan melihat sekeliling", en: "Stand inside and look around", su: "Nangtung jeung ningali" })}</h2>
            <p className="mt-4 leading-relaxed text-sand">{t({
              ko: "화면을 눌러 불러온 뒤 드래그로 둘러봅니다. 지금 사진은 Pannellum 예제 파노라마로, 반튼 유적이 아닙니다. 여덟 곳의 360° 촬영본이 나오면 같은 자리에 들어갑니다.",
              id: "Klik untuk memuat, lalu seret. Foto ini panorama contoh Pannellum, bukan situs Banten.",
              en: "Click to load, then drag to look around. This is Pannellum's example panorama, not a Banten site. The eight site shoots will replace it.",
              su: "Ieu panorama conto Pannellum, lain situs Banten.",
            })}</p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-5 pb-20">
          {sites.map((site) => {
            const object = artifacts.find((item) => item.id === site.artifactId);
            return (
              <article key={site.id} id={site.id} className="grid gap-6 border-t border-line py-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  {site.compare ? (
                    <Compare
                      className="aspect-video min-h-72"
                      beforeSrc={publicUrl("museum/palace-recon.webp")}
                      afterSrc={publicUrl("museum/palace-ruins.webp")}
                      beforeAlt={{
                        ko: "스로소완의 전성기 가상 복원",
                        id: "Rekonstruksi virtual Surosowan masa jaya",
                        en: "Virtual reconstruction of Surosowan at its peak",
                        su: "Rekonstruksi maya Surosowan",
                      }}
                      afterAlt={{
                        ko: "스로소완 궁터의 가상 이미지",
                        id: "Gambar virtual tapak Surosowan",
                        en: "Virtual image of the Surosowan footprint",
                        su: "Gambar maya tapak Surosowan",
                      }}
                    />
                  ) : site.image ? (
                    <PanStill src={site.image} alt={site.imageAlt ? t(site.imageAlt) : ""} />
                  ) : (
                    <div className="grid aspect-video place-items-center bg-teak px-6 text-center text-sm leading-relaxed text-mist">
                      {t(ui.emptyShot)}
                    </div>
                  )}
                  {site.image && !site.compare ? <p className="mt-2 text-sm text-mist">{t(ui.panHint)}</p> : null}
                  {site.compare ? <p className="mt-2 text-sm text-mist">{t(ui.heroNote)}</p> : null}
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm text-gold">{t(site.kind)}</p>
                  <h2 className="mt-1 font-display text-4xl text-balance text-sand">{t(site.name)}</h2>
                  <dl className="mt-5 grid gap-4 text-sm">
                    <div>
                      <dt className="text-mist">{t(ui.now)}</dt>
                      <dd className="mt-1 text-sand">{t(site.now)}</dd>
                    </div>
                    <div>
                      <dt className="text-mist">{t(ui.point)}</dt>
                      <dd className="mt-1 text-sand">{t(site.point)}</dd>
                    </div>
                  </dl>
                  {site.review ? (
                    <p className="mt-4 border-l-2 border-gold pl-3 text-sm leading-relaxed text-sand">
                      <span className="text-gold">{t(ui.review)}. </span>
                      {t(site.review)}
                    </p>
                  ) : null}
                  {object ? (
                    <p className="mt-4">
                      <Link to="/artifacts" hash={object.id} className="inline-flex min-h-11 items-center text-sm text-gold">
                        {t(ui.relatedObject)} · {t(object.name)}
                      </Link>
                    </p>
                  ) : null}
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

function PanStill({ src, alt }: { src: string; alt: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const drag = useRef<{ px: number; x: number } | null>(null);
  const [x, setX] = useState(30);

  return (
    <div
      ref={frame}
      className="relative aspect-video cursor-grab overflow-hidden bg-teak active:cursor-grabbing"
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        drag.current = { px: event.clientX, x };
      }}
      onPointerMove={(event) => {
        if (!drag.current || !frame.current) return;
        const width = frame.current.clientWidth || 1;
        const delta = ((event.clientX - drag.current.px) / width) * 70;
        setX(Math.min(60, Math.max(0, drag.current.x - delta)));
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{ transform: `translateX(-${x}%)` }}
        className="absolute top-0 h-full w-[170%] max-w-none object-cover"
      />
      <span className="absolute left-3 top-3">
        <VirtualBadge />
      </span>
    </div>
  );
}
