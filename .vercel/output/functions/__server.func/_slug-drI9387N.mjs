import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { R as Route } from "./_ssr/router-Dagx6-m-.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
function BlogPostPage() {
  const post = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b-2 border-ink px-6 py-24 bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-accent transition-colors mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "←" }),
        " Geri Dön"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-70 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-ink text-paper px-2 py-1", children: post.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-ink rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.readTime })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter mb-8 text-pretty", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl lg:text-2xl font-medium opacity-80 leading-snug", children: post.excerpt })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-16 grid lg:grid-cols-[1fr_300px] gap-16 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-a:text-accent font-medium opacity-90 max-w-none", children: post.content.split("\n").map((paragraph, index) => {
        if (paragraph.startsWith("### ")) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl mt-12 mb-6", children: paragraph.replace("### ", "") }, index);
        }
        if (paragraph.startsWith("- ")) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4 mb-2", children: paragraph.replace("- ", "").replace(/\*(.*?)\*/g, "<strong>$1</strong>") }, index);
        }
        if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ") || paragraph.startsWith("4. ") || paragraph.startsWith("5. ")) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4 mb-2 font-bold", children: paragraph.replace(/\*(.*?)\*/g, "$1") }, index);
        }
        if (paragraph.trim() === "") return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: paragraph.replace(/\*(.*?)\*/g, "<strong>$1</strong>") }, index);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-ink p-6 bg-paper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-50 mb-6", children: "Yazar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border-2 border-ink bg-white flex items-center justify-center font-display text-3xl uppercase", children: post.author[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold uppercase text-lg", children: post.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-60 uppercase tracking-widest", children: "Breles Editörü" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-ink p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-50 mb-6", children: "Paylaş" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 border-2 border-ink py-2 font-bold text-sm uppercase hover:bg-accent hover:border-accent hover:text-white transition-colors", children: "X" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 border-2 border-ink py-2 font-bold text-sm uppercase hover:bg-accent hover:border-accent hover:text-white transition-colors", children: "In" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  BlogPostPage as component
};
