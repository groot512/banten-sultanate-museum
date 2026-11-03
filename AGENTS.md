# 반튼 술탄국 버추얼 박물관 (목업)

정적 웹 박물관 파일럿. TanStack Start + Vite + Tailwind로 만들고 GitHub Pages에 프리렌더해 배포한다.
로그인·DB·서버 기능은 없다.

## 구조
- `src/routes/` 페이지: `/`(입구), `/history`(연표), `/artifacts`(유물), `/sites`(유적 360°), `/plan`(배치·계획)
- `src/lib/content.ts` 모든 문구(ko/id/en/su)와 출처 목록
- `src/lib/i18n.tsx` 언어 전환
- `src/components/viewers.tsx` model-viewer(3D)·Pannellum(360°) 뷰어. 지금은 '예시' 자료이며 반튼 유물·유적이 아님
- `public/museum/*.webp` 가상 이미지, `public/samples/` 예시 자료, `public/manifest.webmanifest`

## 명령
- `npm run dev` 개발 서버(:8080)
- `GITHUB_PAGES=1 npm run build && node scripts/pages-html.mjs` Pages용 빌드(`dist/client`)
- `npm run typecheck`, `npm run lint`

## 배포
`main`에 push하면 `.github/workflows/pages.yml`이 Pages로 배포한다. 작업은 브랜치와 PR로 한다.

## 고증 원칙
- 연도·인물·지명·유물 설명은 학술·박물관·정부·백과사전 출처로 확인하고 `content.ts`의 `sources`에 남긴다.
- 확인 안 된 내용은 '확인 필요'로 표시하거나 넣지 않는다.
- 이미지는 모두 가상 이미지이며 화면에 그렇게 표시한다. 예시 3D/360 자료는 '예시'로 표시한다.
