"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [836],
  {
    3905: function (e, t, r) {
      r.d(t, {
        Zo: function () {
          return l;
        },
        kt: function () {
          return d;
        },
      });
      const n = r(7294);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (let t = 1; t < arguments.length; t++) {
          var r = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (e == null) return {};
        let r,
          n,
          o = (function (e, t) {
            if (e == null) return {};
            let r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          const i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var s = n.createContext({}),
        u = function (e) {
          let t = n.useContext(s),
            r = t;
          return e && (r = typeof e === "function" ? e(t) : c(c({}, t), e)), r;
        },
        l = function (e) {
          const t = u(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        f = {
          inlineCode: "code",
          wrapper: function (e) {
            const t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        p = n.forwardRef(function (e, t) {
          const r = e.components,
            o = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            l = a(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(r),
            d = o,
            y = p["".concat(s, ".").concat(d)] || p[d] || f[d] || i;
          return r
            ? n.createElement(y, c(c({ ref: t }, l), {}, { components: r }))
            : n.createElement(y, c({ ref: t }, l));
        });
      function d(e, t) {
        const r = arguments,
          o = t && t.mdxType;
        if (typeof e === "string" || o) {
          const i = r.length,
            c = new Array(i);
          c[0] = p;
          const a = {};
          for (const s in t) hasOwnProperty.call(t, s) && (a[s] = t[s]);
          (a.originalType = e),
            (a.mdxType = typeof e === "string" ? e : o),
            (c[1] = a);
          for (let u = 2; u < i; u++) c[u] = r[u];
          return n.createElement.apply(null, c);
        }
        return n.createElement.apply(null, r);
      }
      p.displayName = "MDXCreateElement";
    },
    3584: function (e, t, r) {
      r.r(t),
        r.d(t, {
          assets: function () {
            return l;
          },
          contentTitle: function () {
            return s;
          },
          default: function () {
            return d;
          },
          frontMatter: function () {
            return a;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return f;
          },
        });
      var n = r(7462),
        o = r(3366),
        i = (r(7294), r(3905)),
        c = ["components"],
        a = { id: "faq", title: "FAQ" },
        s = void 0,
        u = {
          unversionedId: "faq",
          id: "faq",
          title: "FAQ",
          description: "No FAQs currently",
          source: "@site/docs/faq.md",
          sourceDirName: ".",
          slug: "/faq",
          permalink: "/nestjs-typegoose/docs/faq",
          draft: !1,
          editUrl:
            "https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/faq.md",
          tags: [],
          version: "current",
          frontMatter: { id: "faq", title: "FAQ" },
          sidebar: "someSidebar",
          previous: {
            title: "Testing",
            permalink: "/nestjs-typegoose/docs/testing",
          },
          next: {
            title: "Mongoose Discriminators",
            permalink: "/nestjs-typegoose/docs/discriminators",
          },
        },
        l = {},
        f = [{ value: "No FAQs currently", id: "no-faqs-currently", level: 2 }],
        p = { toc: f };
      function d(e) {
        const t = e.components,
          r = (0, o.Z)(e, c);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h2", { id: "no-faqs-currently" }, "No FAQs currently")
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
