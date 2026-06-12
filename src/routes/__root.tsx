import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="font-display text-[10rem] lg:text-[15rem] leading-none text-ink mb-4">404</div>
      <h1 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter mb-6">
        Manşet Bulunamadı
      </h1>
      <p className="max-w-md text-lg font-medium opacity-80 mb-10 mx-auto">
        Aradığınız sayfa yayından kaldırılmış, taşınmış veya hiç var olmamış olabilir. Tıpkı sızdırılan bir haber gibi, burası artık boş.
      </p>
      <Link
        to="/"
        className="inline-block bg-ink text-paper px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Bu sayfa yüklenemedi
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bizden kaynaklı bir sorun oluştu. Sayfayı yenilemeyi deneyebilir veya ana sayfaya dönebilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tekrar dene
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ana sayfaya dön
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const canonicalUrl = `https://basin-bulteni.com`;
    
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Breles — Online Basın Bülteni Dağıtımı" },
        { name: "description", content: "Breles, basın bülteninizi 4.500'den fazla premium yayın organı, haber ajansı ve birinci sınıf editör masasına dağıtır." },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { property: "og:title", content: "Breles — Online Basın Bülteni Dağıtımı" },
        { property: "og:description", content: "Duyurularınızı küresel manşetlere dönüştürün. 4.500'den fazla premium yayına doğrudan dağıtım." },
        { property: "og:url", content: canonicalUrl },
        { property: "og:site_name", content: "Breles" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Breles Dağıtım A.Ş.",
            "url": "https://basin-bulteni.com",
            "logo": "https://basin-bulteni.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Maslak Mah. Büyükdere Cad. No: 255 Nurol Plaza, Kat: 12",
              "addressLocality": "Sarıyer",
              "addressRegion": "İstanbul",
              "postalCode": "34485",
              "addressCountry": "TR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-212-000-0000",
              "contactType": "customer service"
            }
          })
        }
      ]
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-grow">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
