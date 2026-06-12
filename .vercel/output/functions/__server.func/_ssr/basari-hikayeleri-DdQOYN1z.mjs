import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function BasariHikayeleri() {
  const cases = [{
    company: "Velos Labs",
    industry: "Yapay Zeka / SaaS",
    title: "12 Saatte Gizlilikten 3.4 Milyon Okuyucuya",
    metric: "847",
    metricLabel: "Farklı Yayın",
    content: "Seri B yatırım turlarını duyurmak isteyen Velos Labs, geleneksel ajansların 2 haftalık onay süreçleri yerine Breles'i tercih etti. Ambargo özelliği ile Cuma sabahı 09:00'da eşzamanlı yayınlanan haber, Bloomberg ve TechCrunch dahil 847 farklı yayına ulaştı.",
    color: "bg-ink",
    textColor: "text-white"
  }, {
    company: "Northwind E-Commerce",
    industry: "Perakende",
    title: "Aynı Sabah Reuters'ta Ana Haber",
    metric: "%412",
    metricLabel: "Trafik Artışı",
    content: "Yılın en büyük kampanya dönemi öncesinde duyurdukları yeni lojistik merkezleri, Breles üzerinden hedeflenen özel gazeteci grubu (Pitch) sayesinde doğrudan Reuters perakende masasının dikkatini çekti. Organik trafikleri 48 saat içinde dört katına çıktı.",
    color: "bg-accent",
    textColor: "text-white"
  }, {
    company: "Hyperion Inc.",
    industry: "Enerji",
    title: "62 Pazarda Eşzamanlı Yayın",
    metric: "12M",
    metricLabel: "Gösterim",
    content: "Halka arz (IPO) başvurularını küresel finansal terminallere sorunsuz iletmek zorundaydılar. Breles'in doğrudan API'si sayesinde AP ve Yahoo Finance üzerinden yatırımcılara anında ulaştılar. Toplamda 12 milyondan fazla gösterim kaydedildi.",
    color: "bg-paper",
    textColor: "text-ink"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b-2 border-ink px-6 py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6", children: "Ön Sayfalar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tighter mb-8", children: [
        "Başarı",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Hikayeleri"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium opacity-80 max-w-2xl mx-auto", children: "Sadece bülten göndermiyoruz. Şirketleri kendi sektörlerinin en çok konuşulan isimlerine dönüştürüyoruz." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto space-y-16 lg:space-y-32", children: cases.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid lg:grid-cols-[1fr_400px] border-2 border-ink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 lg:p-16 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-ink bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-60 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-ink text-white px-2 py-1", children: c.industry }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.company })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-6xl uppercase leading-[0.9] mb-8 text-pretty", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium opacity-80 leading-relaxed mb-8", children: c.content }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basin-bulteni-paketleri", className: "inline-block font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors", children: "Hemen Başla →" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-10 lg:p-16 flex flex-col justify-center items-center text-center ${c.color} ${c.textColor}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl lg:text-8xl mb-4", children: c.metric }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold uppercase tracking-widest opacity-80", children: c.metricLabel })
      ] })
    ] }, c.company)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-ink text-white px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl uppercase leading-[0.9] mb-8", children: "Sıradaki Başarı Hikayesi Siz Olun" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basin-bulteni-paketleri", className: "inline-block bg-accent text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors", children: "Paketleri İncele" })
    ] })
  ] });
}
export {
  BasariHikayeleri as component
};
