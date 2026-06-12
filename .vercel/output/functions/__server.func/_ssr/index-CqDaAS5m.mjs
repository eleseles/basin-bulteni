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
const networkMap = "/assets/network-map-O3yC393c.jpg";
const outlets = ["Bloomberg", "The Verge", "TechCrunch", "Reuters", "Forbes", "Wired", "AP News", "WSJ"];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative border-b-2 border-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_440px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-12 lg:border-r-2 border-ink flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block self-start bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 animate-ink", children: "Doğrudan Dağıtım Motoru" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] uppercase tracking-tighter animate-ink [animation-delay:100ms]", children: [
          "Basın",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Yoluyla",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Etki"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-xl font-medium leading-tight text-pretty animate-ink [animation-delay:200ms]", children: "Breles, şirket duyurularınızı küresel manşetlere dönüştürür. Sadece e-posta göndermiyoruz — 4.500'den fazla premium yayında dikkatleri üzerinize çekiyoruz." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink text-paper p-6 lg:p-12 flex flex-col justify-between gap-12 overflow-hidden animate-ink [animation-delay:300ms]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-50", children: "Canlı Dağıtım Haritası" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: networkMap, alt: "Küresel basın dağıtım ağı", width: 800, height: 800, className: "w-full aspect-square object-cover outline-1 outline-white/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-display uppercase leading-none", children: [
          "4.8M",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xl font-sans tracking-normal opacity-50 mt-2", children: "Günlük Görüntülenme" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink py-10 overflow-hidden bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex whitespace-nowrap animate-marquee w-max", children: [...outlets, ...outlets].map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl opacity-20 uppercase px-12", children: o }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink grid grid-cols-2 md:grid-cols-4 bg-paper", children: [{
      n: "4,500+",
      l: "Premium Yayın Organı"
    }, {
      n: "92%",
      l: "Yayınlanma Oranı"
    }, {
      n: "24s",
      l: "Ort. Dağıtım Süresi"
    }, {
      n: "180",
      l: "Ulaşılan Ülke"
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-8 lg:p-10 ${i < 3 ? "border-r-2" : ""} ${i < 2 ? "border-b-2 md:border-b-0" : ""} border-ink`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl lg:text-6xl leading-none", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs font-bold uppercase tracking-widest opacity-70", children: s.l })
    ] }, s.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "distribution", className: "grid md:grid-cols-3 border-b-2 border-ink", children: [{
      n: "01",
      t: "Oluştur",
      d: "Bülteninizi yükleyin. Yapay zeka destekli editör masamız, başlığınızın birinci sınıf gazeteciler için yeterince ilgi çekici olmasını sağlar."
    }, {
      n: "02",
      t: "Hedefle",
      d: "Sektörünüzü seçin. Haberlerinizi yüksek otoriteli ajans kanalları ve doğrudan editör gelen kutuları aracılığıyla yönlendiriyoruz."
    }, {
      n: "03",
      t: "Dağıt",
      d: "Yayınlanmaları izleyin. Gerçek zamanlı olarak oluşturulan her yayın, görüntülenme ve backlink'in canlı takibi."
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-12 border-b-2 md:border-b-0 ${i < 2 ? "md:border-r-2" : ""} border-ink group hover:bg-ink hover:text-paper transition-colors duration-300`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-8xl leading-none mb-8 text-accent", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-display uppercase mb-4", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium opacity-80", children: s.d })
    ] }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink px-6 py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-6xl lg:text-7xl uppercase max-w-2xl leading-[0.9]", children: "Ciddi haber merkezleri için tasarlandı" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium max-w-md opacity-80", children: "Bir bülten göndermek, erişimini izlemek ve yönetim kuruluna ROI'yi kanıtlamak için ihtiyacınız olan her araç." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 border-2 border-ink", children: [{
        t: "Yapay Zeka Başlık Stüdyosu",
        d: "İlk okumada editoryal filtrelerden geçen AP tarzı başlıklar oluşturun."
      }, {
        t: "Ambargo Planlayıcı",
        d: "Küresel ambargoları zaman dilimleri arasında saniyesine kadar koordine edin."
      }, {
        t: "Multimedya Yayını",
        d: "Her gönderiye yayına hazır video, yüksek çözünürlüklü görseller ve PDF'ler ekleyin."
      }, {
        t: "Gazeteci CRM'i",
        d: "Alan, coğrafya ve etkileşime göre bölümlere ayrılmış 47.000+ doğrulanmış muhabir."
      }, {
        t: "Canlı Kapsam Akışı",
        d: "Haber akışındaki yayınlanmaları gerçek zamanlı olarak izleyin."
      }, {
        t: "Duygu Analiz Motoru",
        d: "Bülten sonrası tonu, ses payını ve rakip bahsetmelerini takip edin."
      }].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-8 border-ink ${i % 3 !== 2 ? "lg:border-r-2" : ""} ${i % 2 === 0 ? "md:border-r-2 lg:border-r-2" : "md:border-r-0"} ${i < 4 ? "border-b-2" : i < 5 ? "md:border-b-2 lg:border-b-0" : ""} hover:bg-accent hover:text-white transition-colors group`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xs uppercase tracking-widest opacity-60 mb-6", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase mb-3 leading-tight", children: f.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium opacity-80 group-hover:opacity-100", children: f.d })
      ] }, f.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-paper px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest mb-3", children: "Basın Günü Zaman Çizelgesi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl uppercase mb-16 leading-[0.95]", children: "Bir lansmanın anatomisi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "border-l-2 border-ink ml-2", children: [{
        t: "T-72s",
        h: "Editoryal inceleme",
        d: "Masamız taslağınızı keskinleştirir ve başlıkları hedef alanlarla hizalar."
      }, {
        t: "T-24s",
        h: "Ambargo brifingleri",
        d: "Derinlemesine kapsam için ambargo altında birinci sınıf muhabirlere önceden sunulur."
      }, {
        t: "T-0",
        h: "Bülten gönderimi",
        d: "4.500'den fazla yayın ve finansal terminal üzerinden eşzamanlı yayın."
      }, {
        t: "T+1s",
        h: "İlk yerleştirmeler",
        d: "Kapsam akışı bir saat içinde ilk 100+ yayınla aydınlanır."
      }, {
        t: "T+24s",
        h: "Erişim raporu",
        d: "Görüntülenmeler, duygu analizi ve ROI ile yönetim kuruluna hazır bir PDF gelen kutunuza düşer."
      }].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-10 pb-12 last:pb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[11px] top-1 w-5 h-5 bg-accent border-2 border-ink" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-accent mb-1", children: step.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl uppercase mb-2", children: step.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-base font-medium opacity-80", children: step.d })
      ] }, step.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-white px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest mb-3", children: "Karşılaştırma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl uppercase mb-12 leading-[0.95]", children: "Breles vs. geleneksel ajanslar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-2 border-ink overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b-2 border-ink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-5 font-display uppercase text-sm tracking-widest", children: "Özellik" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-5 font-display uppercase text-sm tracking-widest bg-accent text-white", children: "Breles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-5 font-display uppercase text-sm tracking-widest opacity-60", children: "Geleneksel Ajans" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "text-sm font-semibold", children: [["Yayınlanma süresi", "60 dk altında", "24–48 saat"], ["Doğrudan gazeteci hedefleme", "47.000 doğrulanmış", "Liste kiralama"], ["Canlı yerleştirme takibi", "Gerçek zamanlı", "Haftalık PDF"], ["Duygu analizi", "Dahil", "Eklenti"], ["Ambargo hassasiyeti", "Saniye bazında", "Aynı gün"], ["Fiyatlandırma şeffaflığı", "Sabit paketler", "Sadece teklif"]].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i < 5 ? "border-b-2 border-ink" : "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-5", children: row[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-5 bg-paper/50", children: [
            "— ",
            row[1]
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-5 opacity-60", children: [
            "— ",
            row[2]
          ] })
        ] }, row[0])) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-paper px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest mb-4", children: "Hizmet Verdiğimiz Sektörler" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl lg:text-6xl uppercase mb-12 max-w-3xl leading-[0.95]", children: [
        "Uzman masalar. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Uzmanlaşmış etki." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ["Fintech", "Kripto & Web3", "SaaS", "Biyoteknoloji", "İklim", "Tüketici", "Donanım", "Yapay Zeka / ML", "Sağlık", "Gayrimenkul", "Oyun", "Medya & Eğlence"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-2 border-ink px-5 py-3 font-bold uppercase tracking-widest text-sm hover:bg-ink hover:text-paper transition-colors cursor-default", children: tag }, tag)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink px-6 py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-6xl lg:text-7xl uppercase", children: "Ön Sayfalar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/basari-hikayeleri", className: "hidden md:inline-block text-sm font-bold uppercase tracking-widest hover:text-accent", children: "Tüm başarı hikayeleri →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 border-2 border-ink", children: [{
        tag: "Seri B",
        co: "Velos Labs",
        h: "12 saatte gizlilikten 3,4 milyon okuyucuya",
        m: "847 yayın"
      }, {
        tag: "Ürün Lansmanı",
        co: "Northwind",
        h: "Aynı sabah Bloomberg'de ana haber",
        m: "1.204 yayın"
      }, {
        tag: "Halka Arz Başvurusu",
        co: "Hyperion Inc.",
        h: "62 pazarda eşzamanlı yayın",
        m: "12M gösterim"
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `p-8 lg:p-10 ${i < 2 ? "md:border-r-2 border-b-2 md:border-b-0" : ""} border-ink group hover:bg-ink hover:text-paper transition-colors`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-bold uppercase tracking-widest mb-6 opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.co })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase leading-tight mb-8", children: c.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-6 border-t-2 border-ink group-hover:border-paper/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-accent", children: c.m }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest", children: "Oku →" })
        ] })
      ] }, c.co)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-b-2 border-ink grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 bg-accent text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl lg:text-8xl leading-tight uppercase", children: '"Ön sayfaya çıktılar."' }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl lg:text-3xl font-semibold leading-tight text-pretty mb-8", children: '"Breles bir haber ajansı değil, bir megafon. Son fonlama duyurumuz gönderildikten sonraki 12 saat içinde 3,4 milyon tekil okuyucuya ulaştı."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-ink/10 border-2 border-ink" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold uppercase", children: "Marcus Thorne" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-60 uppercase tracking-widest", children: "İletişim Başkanı, Velos Labs" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-white px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_2fr] gap-12 items-end mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl uppercase leading-[0.95]", children: "Sistemlerinize entegre olur" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium opacity-80 max-w-xl", children: "İletişim ekibinizin halihazırda kullandığı araçlardan doğrudan bülten gönderin. İki yönlü senkronizasyon, webhook'lar ve tam bir REST API." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-2 border-ink", children: ["Slack", "Notion", "HubSpot", "Salesforce", "Zapier", "Webflow", "Linear", "Airtable", "Google Drive", "Asana", "Figma", "GitHub"].map((tool, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square flex items-center justify-center border-ink ${(i + 1) % 6 !== 0 ? "lg:border-r-2" : ""} ${(i + 1) % 4 !== 0 ? "md:border-r-2" : ""} ${i % 2 === 0 ? "border-r-2" : ""} ${i < 6 ? "border-b-2 lg:border-b-2" : ""} ${i < 8 ? "md:border-b-2" : ""} font-display text-xl uppercase tracking-tighter hover:bg-accent hover:text-white transition-colors`, children: tool }, tool)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "bg-paper py-24 px-6 border-b-2 border-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-7xl uppercase", children: "Net Fiyatlar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium mt-2", children: "Gizli ücret yok. Sadece saf dağıtım gücü." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 border-2 border-ink bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase font-bold tracking-widest text-xs mb-2", children: "Standart" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-6xl mb-8", children: [
            "$499",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "/bülten" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 mb-12 flex-grow font-semibold text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— 400+ Haber Kaynağı" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Google Haberler Kapsamı" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Standart Analitik" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full border-2 border-ink py-4 font-bold uppercase tracking-tighter hover:bg-ink hover:text-white transition-all", children: "Buradan Başlayın" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink bg-ink text-paper flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase font-bold tracking-widest text-xs mb-2 text-accent", children: "En Popüler" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-6xl mb-8 text-white", children: [
            "$1,250",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl opacity-50", children: "/bülten" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 mb-12 flex-grow font-semibold text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— 1.200+ Haber Kaynağı" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Finansal Akış Dağıtımı" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Garantili AP/Reuters Senkronizasyonu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Gelişmiş Multimedya Desteği" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-accent text-white py-4 font-bold uppercase tracking-tighter hover:bg-white hover:text-ink transition-all", children: "Premium'a Geç" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase font-bold tracking-widest text-xs mb-2", children: "Ajans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-6xl mb-8", children: [
            "$3,500",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "/aylık" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 mb-12 flex-grow font-semibold text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Sınırsız Bülten" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Özel Müşteri Temsilcisi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— White-label Raporlama" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full border-2 border-ink py-4 font-bold uppercase tracking-tighter hover:bg-ink hover:text-white transition-all", children: "Satışla İletişime Geç" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-white px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl uppercase leading-[0.95]", children: "Masa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium opacity-80 max-w-md", children: "Eski haber merkezi editörleri ve ajans mühendisleri, her zaman istediğimiz basın altyapısını inşa ediyor." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink", children: [{
        n: "Léa Mercier",
        r: "Genel Yayın Yönetmeni",
        b: "Reuters"
      }, {
        n: "Daniel Park",
        r: "Ajans Başkanı",
        b: "Bloomberg"
      }, {
        n: "Aïsha Bello",
        r: "Haber Merkezi İlişkileri",
        b: "AP News"
      }, {
        n: "Tomáš Novák",
        r: "Mühendislik Lideri",
        b: "Stripe"
      }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 ${i < 3 ? "lg:border-r-2 border-b-2 lg:border-b-0" : ""} ${i === 0 || i === 2 ? "sm:border-r-2" : ""} ${i < 2 ? "sm:border-b-2 lg:border-b-0" : ""} border-ink group`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-paper border-2 border-ink mb-4 grid place-items-center font-display text-5xl uppercase group-hover:bg-accent group-hover:text-white transition-colors", children: p.n.split(" ").map((w) => w[0]).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl uppercase leading-tight", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-70 mt-1", children: p.r }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium uppercase tracking-widest text-accent mt-2", children: [
          "eski–",
          p.b
        ] })
      ] }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-paper px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest", children: "Görüldüğü Yerler" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-6 items-center", children: ["★ FAST CO.", "★ ADWEEK", "★ PRWEEK", "★ WIRED", "★ THE DRUM"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl uppercase tracking-tight opacity-70 hover:opacity-100 hover:text-accent transition-all", children: p }, p)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "border-b-2 border-ink px-6 py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid lg:grid-cols-[300px_1fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest mb-3", children: "SSS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl uppercase leading-[0.95]", children: "Brifing Odası" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t-2 border-ink", children: [{
        q: "Bir bülten ne kadar hızlı yayına girer?",
        a: "Bültenlerin çoğu onaylandıktan sonra 60 dakika içinde ajansa düşer. Ambargolu bültenler saniyesine kadar planlanır."
      }, {
        q: "Yayınlanmayı garanti ediyor musunuz?",
        a: "Premium ve Ajans paketleri AP, Reuters ve Bloomberg terminallerinde garantili sendikasyon içerir."
      }, {
        q: "Bölgeye göre hedefleme yapabilir miyim?",
        a: "Evet — ülkeye, şehre, dile, alana veya bireysel gazeteciye göre dilimleyin. 180 ülkeyi destekliyoruz."
      }, {
        q: "Nasıl bir raporlama alıyorum?",
        a: "Yerleştirmeler, gösterimler, geri bağlantılar, duygu durumu ve tek tıkla yönetim kuruluna hazır PDF içeren canlı bir gösterge paneli."
      }, {
        q: "Bülteni siz mi yazıyorsunuz?",
        a: "Editoryal masamız metninizi ek bir hizmet olarak tasarlayabilir, keskinleştirebilir veya inceleyebilir, varsayılan olarak AP tarzında."
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group border-b-2 border-ink py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center justify-between cursor-pointer list-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl uppercase tracking-tight pr-6", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-accent group-open:rotate-45 transition-transform", children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base font-medium opacity-80 max-w-2xl", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-paper px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl uppercase", children: "Masadan Notlar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hidden md:inline-block text-sm font-bold uppercase tracking-widest hover:text-accent", children: "Tüm makaleler →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-0 border-2 border-ink bg-white", children: [{
        tag: "Rehber",
        date: "10 Haz",
        h: "Gazetecilerin gerçekten açtığı bir bülten yazmak",
        slug: "mukemmel-basin-bulteni-nasil-yazilir"
      }, {
        tag: "Saha Notları",
        date: "28 May",
        h: "Ambargonun içi: Bir Seri B hikayesi nasıl patlar",
        slug: "ambargo-stratejisiyle-hikaye-patlatmak"
      }, {
        tag: "Veri",
        date: "14 May",
        h: "Yayınlanma oranınızı üçe katlayan 7 fiil",
        slug: "yayinlanma-oranini-artiran-fiiller"
      }].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/blog/${a.slug}`, className: `p-8 ${i < 2 ? "md:border-r-2 border-b-2 md:border-b-0" : ""} border-ink hover:bg-ink hover:text-paper transition-colors group flex flex-col`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-bold uppercase tracking-widest opacity-70 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase leading-tight mb-12", children: a.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest mt-auto", children: "Makaleyi oku →" })
      ] }, a.h)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b-2 border-ink bg-ink text-paper px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-accent mb-4", children: "Breles Brifingi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl lg:text-6xl uppercase leading-[0.95]", children: [
          "PR rehberiniz,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "her hafta gelen kutunuzda."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col sm:flex-row gap-0 border-2 border-paper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "siz@sirketiniz.com", className: "flex-1 bg-transparent px-6 py-5 placeholder:text-paper/40 focus:outline-none font-medium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-accent text-white px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-paper hover:text-ink transition-colors", children: "Abone Ol" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
