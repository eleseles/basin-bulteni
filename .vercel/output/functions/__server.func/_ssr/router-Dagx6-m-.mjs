import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-ChmkHWSR.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 bg-background border-b-2 border-ink px-6 py-4 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display text-3xl tracking-tighter uppercase hover:text-accent transition-colors", children: "Breles" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-accent transition-colors", children: "Ana Sayfa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#distribution", className: "hover:text-accent transition-colors", children: "Dağıtım" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basin-bulteni-paketleri", className: "hover:text-accent transition-colors [&.active]:text-accent", children: "Fiyatlandırma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#faq", className: "hover:text-accent transition-colors", children: "SSS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basin-bulteni-paketleri", className: "inline-block bg-ink text-paper px-6 py-2 text-sm font-bold uppercase tracking-tighter hover:bg-accent transition-colors", children: "Bülten Gönder" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-ink text-paper border-t-2 border-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-24 px-6 text-center border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] uppercase mb-12", children: [
        "Mirasınızı",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "yazdırmaya hazır mısınız?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basin-bulteni-paketleri", className: "bg-accent text-white px-12 py-6 text-xl font-display uppercase tracking-widest hover:scale-105 transition-transform inline-block", children: "Hemen Bülten Gönder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dagitim-agi", className: "border-2 border-white/20 px-12 py-6 text-xl font-display uppercase tracking-widest hover:border-white transition-colors inline-block", children: "Ağ Haritasını Görüntüle" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display text-5xl tracking-tighter uppercase mb-6 block hover:text-accent transition-colors", children: "Breles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium opacity-60 max-w-sm mb-8 text-sm leading-relaxed", children: "Dünyanın en prestijli haber merkezlerine doğrudan erişim sağlayan, veri odaklı basın bülteni dağıtım motoru." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors font-bold text-sm", children: "X" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors font-bold text-sm", children: "IN" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-accent mb-6", children: "Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 font-bold text-sm opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#distribution", className: "hover:text-white hover:opacity-100 transition-colors", children: "Nasıl Çalışır?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basin-bulteni-paketleri", className: "hover:text-white hover:opacity-100 transition-colors", children: "Fiyatlandırma" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dagitim-agi", className: "hover:text-white hover:opacity-100 transition-colors", children: "Dağıtım Ağı" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basari-hikayeleri", className: "hover:text-white hover:opacity-100 transition-colors", children: "Başarı Hikayeleri" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-accent mb-6", children: "Şirket" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 font-bold text-sm opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/hakkimizda", className: "hover:text-white hover:opacity-100 transition-colors", children: "Hakkımızda" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/iletisim", className: "hover:text-white hover:opacity-100 transition-colors", children: "İletişim" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sartlar", className: "hover:text-white hover:opacity-100 transition-colors", children: "Kullanım Şartları" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gizlilik", className: "hover:text-white hover:opacity-100 transition-colors", children: "Gizlilik Politikası" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-4 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-accent mb-6", children: "Kaynaklar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 font-bold text-sm opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-white hover:opacity-100 transition-colors", children: "Blog & İçgörüler" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#faq", className: "hover:text-white hover:opacity-100 transition-colors", children: "Sıkça Sorulan Sorular" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 border border-white/10 bg-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest mb-2 opacity-60", children: "Destek" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@basin-bulteni.com", className: "font-bold hover:text-accent transition-colors block text-sm", children: "hello@basin-bulteni.com" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 py-6 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Breles Dağıtım A.Ş. Tüm hakları saklıdır." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-pulse" }),
        "Sistemler Aktif"
      ] })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[10rem] lg:text-[15rem] leading-none text-ink mb-4", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-6xl uppercase tracking-tighter mb-6", children: "Manşet Bulunamadı" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-lg font-medium opacity-80 mb-10 mx-auto", children: "Aradığınız sayfa yayından kaldırılmış, taşınmış veya hiç var olmamış olabilir. Tıpkı sızdırılan bir haber gibi, burası artık boş." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block bg-ink text-paper px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors",
        children: "Ana Sayfaya Dön"
      }
    )
  ] });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Bu sayfa yüklenemedi" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Bizden kaynaklı bir sorun oluştu. Sayfayı yenilemeyi deneyebilir veya ana sayfaya dönebilirsiniz." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Tekrar dene"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Ana sayfaya dön"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: ({ location }) => {
    const canonicalUrl = `https://basin-bulteni.com${location.pathname === "/" ? "" : location.pathname}`;
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
        { name: "twitter:card", content: "summary_large_image" }
      ],
      links: [
        { rel: "canonical", href: canonicalUrl },
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" }
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
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$9 = () => import("./sartlar-D2djjIts.mjs");
const Route$9 = createFileRoute("/sartlar")({
  head: () => ({
    meta: [{
      title: "Kullanım Şartları | Breles"
    }, {
      name: "description",
      content: "Breles Basın Bülteni hizmetlerinin kullanım şartları ve koşulları."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./iletisim-CznhgZaZ.mjs");
const Route$8 = createFileRoute("/iletisim")({
  head: () => ({
    meta: [{
      title: "Bize Ulaşın | Breles"
    }, {
      name: "description",
      content: "Breles ekibiyle iletişime geçin. Destek, satış veya kurumsal talepleriniz için bize yazın."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./hakkimizda-B_1WZqHS.mjs");
const Route$7 = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [{
      title: "Hakkımızda | Breles"
    }, {
      name: "description",
      content: "Breles ekibi: Eski haber merkezi editörleri ve ajans mühendislerinin kurduğu yeni nesil basın dağıtım ağı."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./gizlilik-hhOwbjiM.mjs");
const Route$6 = createFileRoute("/gizlilik")({
  head: () => ({
    meta: [{
      title: "Gizlilik Politikası | Breles"
    }, {
      name: "description",
      content: "Breles platformu gizlilik politikası ve kişisel verilerin korunması beyanı."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./dagitim-agi-DGhBeILF.mjs");
const Route$5 = createFileRoute("/dagitim-agi")({
  head: () => ({
    meta: [{
      title: "Küresel Dağıtım Ağı | Breles"
    }, {
      name: "description",
      content: "Haberlerinizi 4.500'den fazla premium yayına, Bloomberg ve AP News dahil olmak üzere doğrudan iletiyoruz."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./basin-bulteni-paketleri-BrHm27mF.mjs");
const Route$4 = createFileRoute("/basin-bulteni-paketleri")({
  head: () => ({
    meta: [{
      title: "Basın Bülteni Paketleri ve Fiyatları | Breles"
    }, {
      name: "description",
      content: "İhtiyacınıza uygun basın bülteni dağıtım paketleri. Standart, Premium ve Ajans paketlerimizi inceleyin."
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Breles Basın Bülteni Dağıtımı",
        "description": "Premium haber yayın organlarına ve finansal terminallere garantili basın bülteni dağıtım hizmeti.",
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "3",
          "lowPrice": "499",
          "highPrice": "3500",
          "priceCurrency": "USD",
          "offers": [{
            "@type": "Offer",
            "name": "Standart Paket",
            "price": "499",
            "priceCurrency": "USD"
          }, {
            "@type": "Offer",
            "name": "Premium Paket",
            "price": "1250",
            "priceCurrency": "USD"
          }, {
            "@type": "Offer",
            "name": "Ajans Paketi",
            "price": "3500",
            "priceCurrency": "USD"
          }]
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./basari-hikayeleri-DdQOYN1z.mjs");
const Route$3 = createFileRoute("/basari-hikayeleri")({
  head: () => ({
    meta: [{
      title: "Başarı Hikayeleri | Breles"
    }, {
      name: "description",
      content: "Breles ile dağıtılan basın bültenlerinin yarattığı gerçek medya etkisi ve vaka çalışmaları."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-CqDaAS5m.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Breles — Online Basın Bülteni Dağıtımı"
    }, {
      name: "description",
      content: "Breles, basın bülteninizi 4.500'den fazla premium yayın organı, haber ajansı ve birinci sınıf editör masasına dağıtır."
    }, {
      property: "og:title",
      content: "Breles — Online Basın Bülteni Dağıtımı"
    }, {
      property: "og:description",
      content: "Duyurularınızı küresel manşetlere dönüştürün."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-C5oCScGA.mjs");
const Route$1 = createFileRoute("/blog/")({
  head: () => ({
    meta: [{
      title: "Blog ve Kaynaklar | Breles"
    }, {
      name: "description",
      content: "Basın bülteni yazımı, PR stratejileri ve medya ilişkileri hakkında uzman rehberleri, saha notları ve veri analizleri."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const blogPosts = [
  {
    slug: "mukemmel-basin-bulteni-nasil-yazilir",
    title: "Gazetecilerin Gerçekten Açtığı Bir Basın Bülteni Nasıl Yazılır?",
    excerpt: "Gelen kutularında kaybolmamak için gazetecilerin dikkatini ilk saniyede çekecek AP tarzı başlık ve giriş paragrafı teknikleri.",
    content: "### Neden Çoğu Bülten Siliniyor?\n\nBir gazeteci günde ortalama 300 basın bülteni alır. Eğer başlığınız 'Şirketimiz Yeni Bir Ürün Çıkardı' gibi sıkıcıysa, silinme süresi tam olarak 1.2 saniyedir.\n\n### 1. Başlıkta Vaat Verin\nBaşlıkta ne olduğu değil, bunun **neden önemli olduğu** vurgulanmalıdır. Örneğin:\n- *Kötü:* Yeni AI Yazılımı Piyasaya Sürüldü.\n- *İyi:* Yeni AI Yazılımı, Kurumsal Şirketlerin Veri Analiz Süresini %80 Kısaltıyor.\n\n### 2. Ters Piramit Tekniği\nEn önemli bilgiyi (Kim, Ne, Nerede, Ne Zaman, Neden) hemen ilk paragrafa (lead) yerleştirin. Gazeteciler alt satırlara inmek için zaman harcamazlar.\n\n### 3. Jargondan Kaçının\nSektörel karmaşık terimler, inovasyon, sinerji, devrim niteliğinde gibi abartılı sıfatlardan uzak durun. Gerçekleri ve sayıları konuşturun.",
    category: "Rehber",
    author: "Léa Mercier",
    date: "10 Haziran 2026",
    readTime: "4 dk okuma"
  },
  {
    slug: "ambargo-stratejisiyle-hikaye-patlatmak",
    title: "Ambargonun İçi: Bir Seri B Hikayesi Nasıl Patlar?",
    excerpt: "Hyperion Inc.'in 50 milyon dolarlık yatırım haberini küresel çapta eşzamanlı bir medya fırtınasına dönüştüren ambargo taktikleri.",
    content: "### Ambargo Nedir?\nAmbargo, bir haberin gazetecilere önceden verilmesi ancak 'belirli bir tarih ve saate kadar yayımlanmaması' konusunda anlaşılan editoryal bir centilmenlik sözleşmesidir.\n\n### Neden İşe Yarıyor?\nÖzellikle büyük yatırım turlarında veya ürün lansmanlarında, gazetecilere haberi araştırmak ve kaliteli bir makale yazmak için zaman tanımış olursunuz. Haber aynı anda saat 15:00'te 40 farklı prestijli teknoloji dergisinde çıktığında, piyasada devasa bir *yankı* oluşur.\n\n### Breles ile Ambargo Yönetimi\nBreles sisteminde bülteninizi yüklerken, örneğin '14 Haziran 15:00' şeklinde saniyesine kadar bir ambargo ayarlayabilirsiniz. Haber terminallerde tam o an yayına alınır.",
    category: "Saha Notları",
    author: "Daniel Park",
    date: "28 Mayıs 2026",
    readTime: "6 dk okuma"
  },
  {
    slug: "yayinlanma-oranini-artiran-fiiller",
    title: "Yayınlanma Oranınızı Üçe Katlayan 7 Başlık Fiili",
    excerpt: "Geçtiğimiz çeyrekte analiz ettiğimiz 10.000 bülten verisine göre, açılma ve yayınlanma oranını dramatik şekilde artıran o büyülü kelimeler.",
    content: "### Veri Yalan Söylemez\nSistemimiz üzerinden dağıtılan son 10.000 bültenin açık oranlarını analiz ettik. İlginç bir şekilde, edilgen yapıların (örn. 'yapıldı, sunuldu') aktif fiillere göre %45 daha az ilgi gördüğünü saptadık.\n\n### İşte O Fiiller:\n1. **Dönüştürüyor:** İnsanlar değişimi sever.\n2. **Açıklıyor:** Sırrı bozma hissi yaratır.\n3. **Hızlandırıyor:** Zaman kazandıran her şey haberdir.\n4. **Birleştiriyor:** Stratejik ortaklıkları güçlü yansıtır.\n5. **Hedefliyor:** Vizyonu ortaya koyar.\n\nBir dahaki sefere 'Şirketimiz yeni bir özellik yayınladı' yerine 'Şirketimiz e-ticaret altyapılarını hızlandırıyor' demeyi deneyin.",
    category: "Veri",
    author: "Aïsha Bello",
    date: "14 Mayıs 2026",
    readTime: "3 dk okuma"
  }
];
const $$splitComponentImporter = () => import("../_slug-drI9387N.mjs");
const Route = createFileRoute("/blog/$slug")({
  loader: ({
    params: {
      slug
    }
  }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) {
      return {
        meta: [{
          title: "Breles Blog"
        }]
      };
    }
    return {
      meta: [{
        title: `${loaderData.title} | Breles Blog`
      }, {
        name: "description",
        content: loaderData.excerpt
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": loaderData.title,
          "description": loaderData.excerpt,
          "author": {
            "@type": "Person",
            "name": loaderData.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Breles Dağıtım A.Ş.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://basin-bulteni.com/logo.png"
            }
          },
          "datePublished": loaderData.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://basin-bulteni.com/blog/${loaderData.slug}`
          }
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SartlarRoute = Route$9.update({
  id: "/sartlar",
  path: "/sartlar",
  getParentRoute: () => Route$a
});
const IletisimRoute = Route$8.update({
  id: "/iletisim",
  path: "/iletisim",
  getParentRoute: () => Route$a
});
const HakkimizdaRoute = Route$7.update({
  id: "/hakkimizda",
  path: "/hakkimizda",
  getParentRoute: () => Route$a
});
const GizlilikRoute = Route$6.update({
  id: "/gizlilik",
  path: "/gizlilik",
  getParentRoute: () => Route$a
});
const DagitimAgiRoute = Route$5.update({
  id: "/dagitim-agi",
  path: "/dagitim-agi",
  getParentRoute: () => Route$a
});
const BasinBulteniPaketleriRoute = Route$4.update({
  id: "/basin-bulteni-paketleri",
  path: "/basin-bulteni-paketleri",
  getParentRoute: () => Route$a
});
const BasariHikayeleriRoute = Route$3.update({
  id: "/basari-hikayeleri",
  path: "/basari-hikayeleri",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const BlogIndexRoute = Route$1.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$a
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  BasariHikayeleriRoute,
  BasinBulteniPaketleriRoute,
  DagitimAgiRoute,
  GizlilikRoute,
  HakkimizdaRoute,
  IletisimRoute,
  SartlarRoute,
  BlogSlugRoute,
  BlogIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  blogPosts as b,
  router as r
};
