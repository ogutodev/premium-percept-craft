import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

import { MotionRuntime } from "@/components/motion-runtime";

import { lp, useLocale } from "@/lib/i18n";
import { CHROME } from "@/lib/content/chrome";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { MetaRow } from "@/components/brand";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { isPreviewHost } from "@/lib/host";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const locale = useLocale();
  const t = CHROME[locale].nf;
  return (
    <div className="min-h-screen bg-superficie text-tinta">
      <SiteNav />
      <main id="main" className="section-y">
        <div className="wrap">
          <MetaRow items={["404", "TRÍADE"]} />
          <h1 className="mt-10">{t.title}</h1>
          <p className="mt-6 max-w-[60ch] text-[19px]">{t.body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={lp(locale, "/")} className="btn-pill">{t.home} <span className="arr">→</span></a>
            <a href={lp(locale, "/solutions")} className="link-u">{t.services}</a>
            <a href={lp(locale, "/#diagnostic")} className="link-u">{t.diag}</a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  staticData: { sitemap: false },
  loader: () => ({ noindex: isPreviewHost() }),
  head: ({ loaderData }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "TRÍADE Marketing & Publicité" },
      { name: "theme-color", content: "#01366C" },
      { property: "og:site_name", content: "TRÍADE" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      ...(loaderData?.noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..100,400..900&family=Instrument+Serif:ital@1&display=swap",
      },
    ],
    scripts: [
      {
        children:
          "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')}catch(e){}",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <html suppressHydrationWarning lang={locale === "fr" ? "fr-CH" : locale === "pt" ? "pt-BR" : "en"}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MotionRuntime />
      <Outlet />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
