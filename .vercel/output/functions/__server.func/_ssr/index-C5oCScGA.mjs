import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as blogPosts } from "./router-Dagx6-m-.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function BlogIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b-2 border-ink px-6 py-24 bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6", children: "Masadan Notlar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tighter mb-6", children: [
          "PR",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Araştırmaları"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium opacity-80 max-w-lg", children: "Eski haber merkezi editörlerimizden ve ajans uzmanlarımızdan basın bülteni stratejileri, vaka çalışmaları ve sektör verileri." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-4", children: ["Tümü", "Rehber", "Saha Notları", "Veri"].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-ink hover:text-white transition-colors", children: cat }, cat)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-b-2 border-ink grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-ink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-70 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: blogPosts[0].category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-ink rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: blogPosts[0].date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-6xl uppercase leading-[0.95] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${blogPosts[0].slug}`, className: "hover:text-accent transition-colors", children: blogPosts[0].title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium opacity-80 mb-10 max-w-xl", children: blogPosts[0].excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full border-2 border-ink bg-paper flex items-center justify-center font-display text-xl uppercase", children: blogPosts[0].author[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold uppercase text-sm", children: blogPosts[0].author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-60 uppercase tracking-widest", children: blogPosts[0].readTime })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink flex items-center justify-center p-12 overflow-hidden relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[12rem] lg:text-[18rem] text-paper opacity-5 leading-none absolute -right-12 -bottom-12 select-none group-hover:scale-110 transition-transform duration-700", children: "PR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${blogPosts[0].slug}`, className: "inline-block border-2 border-paper text-paper px-8 py-4 font-bold uppercase tracking-widest hover:bg-paper hover:text-ink transition-colors", children: "Makaleyi Oku →" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-16", children: blogPosts.slice(1).map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col h-full border-2 border-transparent hover:border-ink p-8 transition-colors -m-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-70 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-ink rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase leading-[0.95] mb-4 group-hover:text-accent transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${post.slug}`, children: post.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium opacity-80 mb-8 flex-grow", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 pt-6 border-t-2 border-ink group-hover:border-paper/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold uppercase text-sm flex-grow", children: post.author }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/blog/${post.slug}`, className: "text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-accent", children: [
          "Oku ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "→" })
        ] })
      ] })
    ] }, post.slug)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t-2 border-ink bg-paper px-6 py-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block border-2 border-ink px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 bg-white", children: "Breles Bülteni" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl uppercase leading-[0.95] mb-8", children: "PR zekasını doğrudan gelen kutunuza alın." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col sm:flex-row gap-0 border-2 border-ink max-w-xl mx-auto bg-white", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "siz@sirketiniz.com", className: "flex-1 bg-transparent px-6 py-4 placeholder:text-ink/40 focus:outline-none font-medium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-ink text-paper px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors", children: "Abone Ol" })
      ] })
    ] }) })
  ] });
}
export {
  BlogIndex as component
};
