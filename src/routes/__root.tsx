import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TRÍADE — Studio créatif cinématographique · Genève" },
      { name: "description", content: "TRÍADE conçoit des récits visuels stratégiques qui transforment les entreprises en marques premium. Film, photographie, branding et publicité depuis Genève." },
      { name: "author", content: "TRÍADE Marketing et Publicité" },
      { property: "og:title", content: "TRÍADE — Studio créatif cinématographique · Genève" },
      { property: "og:description", content: "Récits visuels stratégiques qui transforment les entreprises en marques premium." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
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
      <Outlet />
      <a
        href="https://wa.me/41789670537?text=Bonjour%20TR%C3%8DADE%2C%20je%20souhaite%20obtenir%20un%20devis."
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter TRÍADE sur WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 transition-transform hover:scale-105 md:bottom-8 md:right-8"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19.05 4.91A10 10 0 0 0 4.1 17.34L3 22l4.78-1.25A10 10 0 1 0 19.05 4.91Zm-7 16.18a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-2.84.74.76-2.77-.2-.31A8.2 8.2 0 1 1 12.05 21.1Zm4.5-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.56.13s-.64.81-.79.98-.29.19-.54.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34a.45.45 0 0 0 0-.43c-.06-.13-.56-1.35-.77-1.85s-.41-.43-.56-.44h-.48a.93.93 0 0 0-.67.31 2.83 2.83 0 0 0-.88 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c.6.26 1.07.42 1.43.54a3.46 3.46 0 0 0 1.58.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.11-.23-.18-.48-.31Z"/>
        </svg>
        WhatsApp
      </a>
    </QueryClientProvider>
  );
}
