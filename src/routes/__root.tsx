import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { LangProvider, useT } from "@/lib/i18n";
import { publicUrl, ui } from "@/lib/content";
import appCss from "../styles.css?url";

const APP_NAME = "반튼 술탄국 버추얼 박물관";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "반튼 술탄국의 역사, 유물, 반튼 라마 유적을 한곳에서 보는 웹 박물관 파일럿. 그림은 가상 이미지입니다.",
      },
      { name: "theme-color", content: "#0c100e" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: publicUrl("favicon.svg") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <LangProvider>
            <SkipLink />
            <Outlet />
          </LangProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function SkipLink() {
  const t = useT();
  return (
    <a className="skip" href="#content">
      {t(ui.skip)}
    </a>
  );
}
