import { createElement, useEffect, useRef, useState } from "react";

/**
 * 3D(model-viewer)·360°(Pannellum) 뷰어. 둘 다 CDN 스크립트를 브라우저에서만 불러온다.
 * 지금 들어 있는 모델과 파노라마는 구조 확인용 공개 샘플이다. 실제 유물 스캔(glTF/GLB)과
 * 유적 360° 사진이 생기면 SAMPLE_MODEL / SAMPLE_PANORAMA 값만 바꾸면 된다.
 */
export const SAMPLE_MODEL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Lantern/glTF-Binary/Lantern.glb";
export const SAMPLE_PANORAMA = "https://pannellum.org/images/alma.jpg";

const MODEL_VIEWER_JS = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
const PANNELLUM_JS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
const PANNELLUM_CSS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";

const loading = new Map<string, Promise<void>>();
function loadScript(src: string, module = false) {
  if (!loading.has(src)) {
    loading.set(
      src,
      new Promise<void>((resolve, reject) => {
        const el = document.createElement("script");
        el.src = src;
        if (module) el.type = "module";
        el.onload = () => resolve();
        el.onerror = () => reject(new Error(`load failed: ${src}`));
        document.head.appendChild(el);
      }),
    );
  }
  return loading.get(src)!;
}
function loadCss(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const el = document.createElement("link");
  el.rel = "stylesheet";
  el.href = href;
  document.head.appendChild(el);
}

function SampleTag({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute right-3 top-3 z-10 bg-ink/80 px-2 py-1 text-xs tracking-wide text-gold">
      {label}
    </span>
  );
}

export function ModelViewer({ src = SAMPLE_MODEL, alt, sampleLabel }: { src?: string; alt: string; sampleLabel?: string }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    loadScript(MODEL_VIEWER_JS, true).then(() => setReady(true), () => setFailed(true));
  }, []);
  return (
    <div className="relative aspect-square w-full bg-teak">
      {sampleLabel ? <SampleTag label={sampleLabel} /> : null}
      {ready
        ? createElement("model-viewer", {
            src,
            alt,
            "camera-controls": "",
            "auto-rotate": "",
            "touch-action": "pan-y",
            "shadow-intensity": "1",
            style: { width: "100%", height: "100%", background: "transparent" },
          })
        : (
          <span className="grid h-full place-items-center text-sm text-mist">
            {failed ? "3D 뷰어를 불러오지 못했습니다" : "3D 뷰어 불러오는 중"}
          </span>
        )}
    </div>
  );
}

type PannellumApi = { viewer: (el: HTMLElement, cfg: Record<string, unknown>) => { destroy: () => void } };

export function PanoramaViewer({ src = SAMPLE_PANORAMA, title, sampleLabel }: { src?: string; title: string; sampleLabel?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let viewer: { destroy: () => void } | undefined;
    let alive = true;
    loadCss(PANNELLUM_CSS);
    loadScript(PANNELLUM_JS).then(
      () => {
        const api = (window as unknown as { pannellum?: PannellumApi }).pannellum;
        if (!alive || !box.current || !api) return;
        viewer = api.viewer(box.current, {
          type: "equirectangular",
          panorama: src,
          title,
          autoLoad: false,
          showZoomCtrl: true,
          compass: false,
        });
      },
      () => setFailed(true),
    );
    return () => {
      alive = false;
      viewer?.destroy();
    };
  }, [src, title]);
  return (
    <div className="relative aspect-video w-full bg-teak">
      {sampleLabel ? <SampleTag label={sampleLabel} /> : null}
      <div ref={box} className="h-full w-full" />
      {failed ? <span className="absolute inset-0 grid place-items-center text-sm text-mist">360° 뷰어를 불러오지 못했습니다</span> : null}
    </div>
  );
}
