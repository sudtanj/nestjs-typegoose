"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [432],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return f;
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
      function i(e) {
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
      function s(e, t) {
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
      var c = o.createContext({}),
        u = function (e) {
          let t = o.useContext(c),
            n = t;
          return e && (n = typeof e === "function" ? e(t) : i(i({}, t), e)), n;
        },
        p = function (e) {
          const t = u(e.components);
          return o.createElement(c.Provider, { value: t }, e.children);
        },
        l = {
          inlineCode: "code",
          wrapper: function (e) {
            const t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        d = o.forwardRef(function (e, t) {
          const n = e.components,
            r = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            p = s(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(n),
            f = r,
            m = d["".concat(c, ".").concat(f)] || d[f] || l[f] || a;
          return n
            ? o.createElement(m, i(i({ ref: t }, p), {}, { components: n }))
            : o.createElement(m, i({ ref: t }, p));
        });
      function f(e, t) {
        const n = arguments,
          r = t && t.mdxType;
        if (typeof e === "string" || r) {
          const a = n.length,
            i = new Array(a);
          i[0] = d;
          const s = {};
          for (const c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s.mdxType = typeof e === "string" ? e : r),
            (i[1] = s);
          for (let u = 2; u < a; u++) i[u] = n[u];
          return o.createElement.apply(null, i);
        }
        return o.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    4534: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return p;
          },
          contentTitle: function () {
            return c;
          },
          default: function () {
            return f;
          },
          frontMatter: function () {
            return s;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return l;
          },
        });
      var o = n(7462),
        r = n(3366),
        a = (n(7294), n(3905)),
        i = ["components"],
        s = { id: "testing", title: "Testing" },
        c = void 0,
        u = {
          unversionedId: "testing",
          id: "testing",
          title: "Testing",
          description:
            "Like @nestjs/mongoose (see the testing section) nestjs-typegoose's forFeature and forRoot rely on a database connection to work. To unit test your CatService without connecting to a mongo database you need to create a fake model using a custom provider.",
          source: "@site/docs/testing.md",
          sourceDirName: ".",
          slug: "/testing",
          permalink: "/nestjs-typegoose/docs/testing",
          draft: !1,
          editUrl:
            "https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/testing.md",
          tags: [],
          version: "current",
          frontMatter: { id: "testing", title: "Testing" },
          sidebar: "someSidebar",
          previous: {
            title: "Basic Usage",
            permalink: "/nestjs-typegoose/docs/usage",
          },
          next: { title: "FAQ", permalink: "/nestjs-typegoose/docs/faq" },
        },
        p = {},
        l = [],
        d = { toc: l };
      function f(e) {
        const t = e.components,
          n = (0, r.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "p",
            null,
            "Like ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://docs.nestjs.com/v5/techniques/mongodb",
              },
              "@nestjs/mongoose"
            ),
            " (see the testing section) nestjs-typegoose's ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "forFeature"),
            " and ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "forRoot"),
            " rely on a database connection to work. To unit test your ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "CatService"),
            " without connecting to a mongo database you need to create a fake model using a ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://docs.nestjs.com/fundamentals/custom-providers",
              },
              "custom provider"
            ),
            "."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              "import { getModelToken } from \"@m8a/nestjs-typegoose\";\n\n@Module({\n  ProductService,\n  {\n    provide: getModelToken('Product'),\n    useValue: fakeProductModel\n  }\n})\n"
            )
          ),
          (0, a.kt)("p", null, "In a spec file this would look like:"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '\nconst fakeProductModel = jest.fn();\n\nconst module: TestingModule = await Test.createTestingModule({\n  providers: [\n    {\n      provide: getModelToken("Product"),\n      useValue: fakeProductModel\n    },\n    ProductService\n  ]\n}).compile();\n'
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "The string given to ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "getModelToken"),
            " function should be the class name of the typegoose model that you are testing."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
