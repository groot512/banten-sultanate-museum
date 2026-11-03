import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { rooms, ui } from "@/lib/content";

const place: Record<string, string> = {
  enter: "md:col-span-6 md:min-h-40",
  history: "md:col-span-2 md:min-h-52",
  objects: "md:col-span-2 md:min-h-52",
  sites: "md:col-span-2 md:min-h-52",
  court: "md:col-span-4 md:min-h-36",
  back: "md:col-span-2 md:min-h-36",
};

export function FloorPlan() {
  const t = useT();

  return (
    <div className="border border-line bg-ink p-4 sm:p-6">
      <div className="mb-4 flex items-end justify-between gap-4 border-b border-line pb-3">
        <div>
          <p className="text-xs tracking-widest text-gold">VM-1</p>
          <h3 className="font-display text-2xl text-sand">{t(ui.sheetTitle)}</h3>
        </div>
        <p className="max-w-56 text-right text-xs leading-relaxed text-mist">{t(ui.sheetNote)}</p>
      </div>
      <div className="grid gap-2 md:grid-cols-6">
        {rooms.map((room) => {
          const className = `flex min-h-28 flex-col justify-between border border-line bg-teak p-4 text-left ${place[room.id] ?? ""} ${room.to ? "hover:border-gold" : ""}`;
          const inner = (
            <>
              <span className="text-xs tabular-nums text-gold">{room.index}</span>
              <span>
                <span className="block font-display text-2xl text-sand">{t(room.title)}</span>
                <span className="mt-1 block text-sm leading-relaxed text-mist">{t(room.text)}</span>
              </span>
            </>
          );
          if (!room.to) {
            return (
              <div key={room.id} className={className}>
                {inner}
              </div>
            );
          }
          return (
            <Link key={room.id} to={room.to} hash={room.hash} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
