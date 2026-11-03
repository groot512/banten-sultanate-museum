import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Footer, Header, PageIntro, VirtualBadge } from "@/components/shell";
import { FloorPlan } from "@/components/floor-plan";
import { useT } from "@/lib/i18n";
import { parties, phases, publicUrl, questions, sources, tech, ui } from "@/lib/content";

export const Route = createFileRoute("/plan")({ component: PlanPage });

function PlanPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main id="content" className="pt-16">
        <PageIntro
          kicker={t(ui.fromBrief)}
          title={t({
            ko: "배치와 구축 계획",
            id: "Denah dan rencana bangun",
            en: "Layout and build plan",
            su: "Denah jeung rencana",
          })}
          lede={t({
            ko: "웹 박물관 하나입니다. 입구 홀과 전시관 셋. 착수일과 재원은 아직 없고, 개월은 착수가 정해진 뒤의 경과입니다. 단계는 겹칩니다.",
            id: "Satu museum web. Pendapa dan tiga ruang. Hari mulai dan dana belum ada. Bulan dihitung setelah mulai. Tahap boleh tumpang tindih.",
            en: "One website. An entrance and three halls. There is no start date and no budget yet. Months are counted after a start. Stages overlap.",
            su: "Hiji musieum wéb. Lawang jeung tilu rohangan. Poé mimiti jeung dana acan aya.",
          })}
        />

        <section id="aerial" className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="font-display text-3xl text-sand">
            {t({ ko: "가상 조감", id: "Pandangan udara", en: "Virtual aerial", su: "Pandangan udara" })}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-mist">{t(ui.aerialCaption)}</p>
          <figure className="mt-6">
            <span className="relative block">
              <img src={publicUrl("museum/museum-air.webp")} alt={t(ui.aerialCaption)} className="aspect-video w-full object-cover" />
              <span className="absolute left-3 top-3">
                <VirtualBadge />
              </span>
            </span>
            <figcaption className="mt-2 text-sm text-mist">
              {t({
                ko: "위는 공간으로 옮긴 인상. 아래는 실제 화면의 배치입니다.",
                id: "Atas adalah kesan ruang. Bawah adalah denah layar yang sungguh dipakai.",
                en: "Above is a spatial impression. Below is the screen plan that the site actually uses.",
                su: "Luhur kesan rohangan. Handap denah layar.",
              })}
            </figcaption>
          </figure>
          <div id="floor" className="mt-8">
            <FloorPlan />
          </div>
        </section>

        <section id="roadmap" className="border-t border-line bg-teak">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-3xl text-sand">
              {t({ ko: "다섯 단계, 그리고 지금", id: "Lima tahap, dan sekarang", en: "Five stages, and now", su: "Lima tahap, jeung ayeuna" })}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-mist">
              {t({
                ko: "막대는 착수 후 10개월입니다. 0단계는 그 밖에 있고, 지금 이 사이트입니다. 허가와 감수가 끝나기 전에 촬영과 해설 확정에 들어가지 않습니다.",
                id: "Batang adalah 10 bulan setelah mulai. Tahap 0 ada di luar batang, dan itulah situs ini. Syuting dan kalimat final tidak dimulai sebelum izin dan tinjauan selesai.",
                en: "The bars are ten months after a start. Stage 0 sits outside them, and it is this site. Filming and final sentences do not begin before permits and review are done.",
                su: "Batang téh 10 bulan sanggeus mimiti. Tahap 0 aya di luarna, nyaéta situs ieu.",
              })}
            </p>
            <ol className="mt-8 hidden md:grid">
              <li className="grid grid-cols-10 gap-1 text-xs tabular-nums text-mist">
                {Array.from({ length: 10 }, (_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </li>
            </ol>
            <ol className="mt-4 grid gap-6">
              {phases.map((phase) => (
                <li key={phase.id} className="grid gap-3 border-t border-line pt-4 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <p className="text-sm tabular-nums text-gold">
                      {phase.id} · {t(phase.when)}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-sand">{t(phase.title)}</h3>
                  </div>
                  <div className="md:col-span-8">
                    {phase.chart ? (
                      <div className="mb-3 hidden h-3 grid-cols-10 md:grid">
                        <span
                          className="h-3 bg-gold"
                          style={{ gridColumn: `${phase.chart.start} / span ${phase.chart.span}` }}
                        />
                      </div>
                    ) : (
                      <p className="mb-3 text-sm text-gold md:mb-3">{t(ui.pilot)}</p>
                    )}
                    <p className="text-pretty leading-relaxed text-sand">{t(phase.body)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl text-sand">
            {t({ ko: "기술 구성", id: "Susunan teknis", en: "How it is built", su: "Susunan téknis" })}
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {tech.map((row) => (
              <div key={row.name.en} className="grid gap-1 py-4 md:grid-cols-12">
                <h3 className="text-sand md:col-span-3">{t(row.name)}</h3>
                <p className="text-mist md:col-span-5">{t(row.how)}</p>
                <p className="text-sm text-mist md:col-span-4">{t(row.note)}</p>
              </div>
            ))}
          </div>
        </section>

        <Questions />

        <section id="parties" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl text-sand">
            {t({ ko: "기획에 이름을 올린 쪽", id: "Pihak yang tercatat", en: "Parties named in the brief", su: "Pihak nu kacatet" })}
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {parties.map((party) => (
              <li key={party.name} className="grid gap-1 py-4 md:grid-cols-12">
                <p className="text-sand md:col-span-4">{party.name}</p>
                <p className="text-sm leading-relaxed text-mist md:col-span-8">{t(party.role)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="sources" className="border-t border-line bg-teak">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-3xl text-sand">
              {t({ ko: "출처", id: "Sumber", en: "Sources", su: "Sumber" })}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-mist">
              {t({
                ko: "기준일 2026-10-31. 위키 두 편은 원문을 열었고, 나머지는 기획 당시 검색 요약입니다. 세부 연도는 전시 전에 원사료로 다시 확인합니다.",
                id: "Per 31 Oktober 2026. Dua artikel Wikipedia dibaca utuh. Sisanya, saat naskah disusun, hanya ringkasan pencarian. Tahun rinci dicek lagi ke sumber primer sebelum pameran.",
                en: "As of 31 October 2026. The two Wikipedia articles were read. The rest, at the time of the brief, were search summaries. Detail years are checked against primary sources before the exhibition.",
                su: "Per 31 Oktober 2026. Dua artikel Wikipedia dibaca. Sésana ringkesan.",
              })}
            </p>
            <ul className="mt-6 grid gap-4">
              {sources.map((source) => (
                <li key={source.href}>
                  <a className="text-sand underline decoration-line underline-offset-4" href={source.href}>
                    {source.name}
                  </a>
                  <p className="text-sm text-mist">{t(source.note)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Questions() {
  const t = useT();
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("banten-open-questions");
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore broken local notes */
    }
  }, []);

  const count = questions.filter((question) => done[question.id]).length;

  function toggle(id: string) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("banten-open-questions", JSON.stringify(next));
      return next;
    });
  }

  return (
    <section id="questions" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl text-sand">
            {t({ ko: "확정 전에 남은 것", id: "Yang masih terbuka", en: "Still open", su: "Nu masih kabuka" })}
          </h2>
          <p className="text-sm tabular-nums text-gold">
            {count}/{questions.length} {t(ui.settled)}
          </p>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-mist">{t(ui.workshop)}</p>
        <ul className="mt-6">
          {questions.map((question) => {
            const on = Boolean(done[question.id]);
            return (
              <li key={question.id} className="border-t border-line">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  onClick={() => toggle(question.id)}
                  className="flex w-full gap-4 py-4 text-left"
                >
                  <span
                    className={`mt-1 grid h-5 w-5 shrink-0 place-items-center border ${on ? "border-gold bg-gold text-ink" : "border-mist"}`}
                  >
                    {on ? <Check className="h-3.5 w-3.5" aria-hidden /> : null}
                  </span>
                  <span>
                    <span className="block text-sand">{t(question.title)}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-mist">{t(question.body)}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
