import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Iletisim() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-paper p-12 lg:p-24 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block self-start bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6", children: "Biz Buradayız" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tighter mb-8", children: [
        "Bize",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Ulaşın"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium opacity-80 mb-16 max-w-md", children: "Özel paketler, ajans çözümleri veya mevcut dağıtımınız hakkında sorularınız için mesaj bırakın. En geç 2 saat içerisinde dönüş yapıyoruz." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-50 mb-2", children: "Kurumsal Ofis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-lg", children: [
            "Maslak Mah. Büyükdere Cad. No: 255",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Nurol Plaza, Kat: 12",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Sarıyer, İstanbul, Türkiye"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-50 mb-2", children: "İletişim Kanalları" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@basin-bulteni.com", className: "hover:text-accent transition-colors block mb-1", children: "hello@basin-bulteni.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+902120000000", className: "hover:text-accent transition-colors", children: "+90 (212) 000 00 00" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 lg:p-24 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "max-w-lg w-full space-y-6", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-xs font-bold uppercase tracking-widest mb-2", children: "Ad Soyad" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", id: "name", placeholder: "Örn: Ali Yılmaz", className: "w-full border-2 border-ink p-4 font-medium placeholder:opacity-40 focus:outline-none focus:border-accent transition-colors", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-xs font-bold uppercase tracking-widest mb-2", children: "İş E-postası" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", id: "email", placeholder: "ali@sirketiniz.com", className: "w-full border-2 border-ink p-4 font-medium placeholder:opacity-40 focus:outline-none focus:border-accent transition-colors", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "subject", className: "block text-xs font-bold uppercase tracking-widest mb-2", children: "Konu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "subject", className: "w-full border-2 border-ink p-4 font-medium focus:outline-none focus:border-accent transition-colors bg-transparent appearance-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Satış ve Özel Paketler" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Teknik Destek" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Editoryal Destek" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Diğer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-xs font-bold uppercase tracking-widest mb-2", children: "Mesajınız" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", rows: 5, placeholder: "Size nasıl yardımcı olabiliriz?", className: "w-full border-2 border-ink p-4 font-medium placeholder:opacity-40 focus:outline-none focus:border-accent transition-colors resize-none", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full bg-ink text-paper py-5 font-bold uppercase tracking-widest hover:bg-accent transition-colors mt-4", children: "Mesajı Gönder" })
    ] }) })
  ] }) });
}
export {
  Iletisim as component
};
