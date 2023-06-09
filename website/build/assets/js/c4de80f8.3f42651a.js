"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [943],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return d;
        },
      });
      const o = n(7294);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function s(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (e == null) return {};
        let n,
          o,
          r = (function (e, t) {
            if (e == null) return {};
            let n,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          const a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var p = o.createContext({}),
        l = function (e) {
          let t = o.useContext(p),
            n = t;
          return e && (n = typeof e === "function" ? e(t) : s(s({}, t), e)), n;
        },
        c = function (e) {
          const t = l(e.components);
          return o.createElement(p.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            const t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        m = o.forwardRef(function (e, t) {
          const n = e.components,
            r = e.mdxType,
            a = e.originalType,
            p = e.parentName,
            c = i(e, ["components", "mdxType", "originalType", "parentName"]),
            m = l(n),
            d = r,
            y = m["".concat(p, ".").concat(d)] || m[d] || u[d] || a;
          return n
            ? o.createElement(y, s(s({ ref: t }, c), {}, { components: n }))
            : o.createElement(y, s({ ref: t }, c));
        });
      function d(e, t) {
        const n = arguments,
          r = t && t.mdxType;
        if (typeof e === "string" || r) {
          const a = n.length,
            s = new Array(a);
          s[0] = m;
          const i = {};
          for (const p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
          (i.originalType = e),
            (i.mdxType = typeof e === "string" ? e : r),
            (s[1] = i);
          for (let l = 2; l < a; l++) s[l] = n[l];
          return o.createElement.apply(null, s);
        }
        return o.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    7520: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return c;
          },
          contentTitle: function () {
            return p;
          },
          default: function () {
            return d;
          },
          frontMatter: function () {
            return i;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return u;
          },
        });
      var o = n(7462),
        r = n(3366),
        a = (n(7294), n(3905)),
        s = ["components"],
        i = { id: "install", title: "Installation" },
        p = void 0,
        l = {
          unversionedId: "install",
          id: "install",
          title: "Installation",
          description:
            "This assumes you have a nestjs project to work with. If you don't I recommend that you use nestjs cli to jump start an example to project to get started using nestjs-typegoose.",
          source: "@site/docs/install.md",
          sourceDirName: ".",
          slug: "/install",
          permalink: "/nestjs-typegoose/docs/install",
          draft: !1,
          editUrl:
            "https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/install.md",
          tags: [],
          version: "current",
          frontMatter: { id: "install", title: "Installation" },
          sidebar: "someSidebar",
          next: {
            title: "Basic Usage",
            permalink: "/nestjs-typegoose/docs/usage",
          },
        },
        c = {},
        u = [{ value: "Peer Dependencies", id: "peer-dependencies", level: 2 }],
        m = { toc: u };
      function d(e) {
        const t = e.components,
          n = (0, r.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "admonition",
            { type: "note" },
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "This assumes you have a nestjs project to work with. If you don't I recommend that you use ",
              (0, a.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://docs.nestjs.com/cli/overview",
                },
                "nestjs cli"
              ),
              " to jump start an example to project to get started using ",
              (0, a.kt)("inlineCode", { parentName: "p" }, "nestjs-typegoose"),
              "."
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "npm"),
            ":"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "npm install --save @m8a/nestjs-typegoose"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "yarn"),
            ":"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "yarn add @m8a/nestjs-typegoose"
            )
          ),
          (0, a.kt)("h2", { id: "peer-dependencies" }, "Peer Dependencies"),
          (0, a.kt)(
            "p",
            null,
            "nestjs-typegoose requires a few peer dependencies to be install for things to work. You need to install the following:"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "@typegoose/typegoose"
              ),
              " +9.13.0-beta.1+"
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("inlineCode", { parentName: "li" }, "@nestjs/common"),
              " +9.0.0"
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("inlineCode", { parentName: "li" }, "@nestjs/core"),
              " +9.0.0"
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("inlineCode", { parentName: "li" }, "mongoose"),
              " +6.7.0"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "npm"),
            ":"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "npm install --save @typegoose/typegoose @nestjs/common @nestjs/core mongoose"
            ),
            " ",
            (0, a.kt)("strong", { parentName: "p" }, "and"),
            " ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "npm install --save-dev @types/mongoose"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "yarn"),
            ":"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "yarn add @typegoose/typegoose @nestjs/common @nestjs/core mongoose"
            ),
            " ",
            (0, a.kt)("strong", { parentName: "p" }, "and"),
            " ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "yarn add --dev @types/mongoose"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Now you are ready to get ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/nestjs-typegoose/docs/usage" },
              "ready to start"
            ),
            " using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "nestjs-typegoose"),
            "!"
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
