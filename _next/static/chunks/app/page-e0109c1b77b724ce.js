(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    61: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 7339));
    },
    7339: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => _ });
      var r = a(5155),
        t = a(2115);
      function i() {
        let [e, s] = (0, t.useState)(!0),
          a = (0, t.useRef)(null);
        return ((0, t.useEffect)(() => {
          let e = setTimeout(() => {
            s(!1);
          }, 3e3);
          return (
            a.current &&
              a.current.play().catch((e) => {
                console.error("Error playing video:", e);
              }),
            () => clearTimeout(e)
          );
        }, []),
        e)
          ? (0, r.jsx)("div", {
              className: "loader",
              children: (0, r.jsx)("div", {
                className: "loader__video-wrapper",
                children: (0, r.jsx)("video", {
                  ref: a,
                  className: "loader__video",
                  autoPlay: !0,
                  muted: !0,
                  playsInline: !0,
                  loop: !1,
                  children: (0, r.jsx)("source", {
                    src: "/loader.mp4",
                    type: "video/mp4",
                  }),
                }),
              }),
            })
          : null;
      }
      var l = a(5239);
      function o() {
        let [e, s] = (0, t.useState)(!1),
          [a, i] = (0, t.useState)("idle"),
          o = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(() => {
            let e = o.current;
            if (e) {
              let a = () => {
                e.pause(),
                  (e.currentTime = e.duration - 0.1),
                  s(!0),
                  setTimeout(() => {
                    i("flying-out"),
                      setTimeout(() => {
                        i("flying-in");
                      }, 2e3);
                  }, 1e3);
              };
              return (
                e.addEventListener("ended", a),
                () => {
                  e.removeEventListener("ended", a);
                }
              );
            }
          }, []),
          (0, r.jsxs)("section", {
            className: "hero",
            children: [
              (0, r.jsxs)("div", {
                className: "hero__bg",
                children: [
                  (0, r.jsx)("video", {
                    ref: o,
                    className: "hero__bg-video",
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    loop: !1,
                    preload: "auto",
                    children: (0, r.jsx)("source", {
                      src: "/background.mp4",
                      type: "video/mp4",
                    }),
                  }),
                  (0, r.jsx)("div", { className: "hero__bg-overlay" }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "hero__container",
                children: [
                  (0, r.jsx)("div", {
                    className: "hero__title",
                    children: (0, r.jsx)("img", {
                      className: "hero__title-main",
                      src: "/title.png",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "hero__logo-wrapper",
                    children: (0, r.jsxs)("div", {
                      className: "hero__logo hero__logo--".concat(a),
                      children: [
                        e &&
                          "flying-out" !== a &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "hero__logo-aura hero__logo-aura--outer",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "hero__logo-aura hero__logo-aura--inner",
                              }),
                              (0, r.jsx)("div", {
                                className: "hero__logo-glow",
                              }),
                            ],
                          }),
                        (0, r.jsx)(l.default, {
                          src: "/logo.png",
                          alt: "TOSHIKO Logo",
                          width: 800,
                          height: 700,
                          className: "hero__logo-img ".concat(
                            e && "flying-in" === a
                              ? "hero__logo-img--active"
                              : ""
                          ),
                          unoptimized: !0,
                          priority: !0,
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "hero__footer",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "hero__social",
                        children: [
                          (0, r.jsx)("a", {
                            href: "https://x.com/toshikunbaseX",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hero__social-item",
                            "aria-label": "Twitter/X",
                            children: (0, r.jsx)(l.default, {
                              src: "/twitter.png",
                              alt: "Twitter/X",
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, r.jsx)("a", {
                            href: "https://t.me/toshikunbase",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hero__social-item",
                            "aria-label": "Telegram",
                            children: (0, r.jsx)(l.default, {
                              src: "/telegram.png",
                              alt: "Telegram",
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, r.jsx)("a", {
                            href: "https://dexscreener.com/base/0x334EaCFe79091797d34a4D7E6AfE25d83aB3C3a4",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hero__social-item",
                            "aria-label": "DexScreener",
                            children: (0, r.jsx)(l.default, {
                              src: "/dexscreener.png",
                              alt: "DexScreener",
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, r.jsx)("a", {
                            href: "https://www.dextools.io/app/en/base/pair-explorer/0x334EaCFe79091797d34a4D7E6AfE25d83aB3C3a4",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hero__social-item",
                            "aria-label": "Dextools",
                            children: (0, r.jsx)(l.default, {
                              src: "/dextools.png",
                              alt: "Dextools",
                              width: 24,
                              height: 24,
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "hero__footer-button",
                        children: (0, r.jsx)("a", {
                          href: "#",
                          className: "hero__button hero__button--footer",
                          children: (0, r.jsx)("span", { children: "EXPLORE" }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "hero__divider",
                children: [
                  (0, r.jsx)("div", { className: "hero__divider-line" }),
                  (0, r.jsx)("div", { className: "hero__divider-glow" }),
                ],
              }),
            ],
          })
        );
      }
      function c() {
        return (0, r.jsx)("header", {
          className: "header",
          children: (0, r.jsx)("div", {
            className: "header__container",
            children: (0, r.jsx)("a", {
              href: "https://t.me/toshikunbase",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "header__button",
              children: (0, r.jsx)("span", { children: "JOIN COMMUNITY" }),
            }),
          }),
        });
      }
      function n() {
        let e = (0, t.useRef)([]),
          s = (s) => (a) => {
            e.current[s] = a;
          };
        return (
          (0, t.useEffect)(() => {
            let s = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && e.target.classList.add("_watcher-view");
                });
              },
              { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
            );
            return (
              e.current.forEach((e) => {
                e && s.observe(e);
              }),
              () => {
                e.current.forEach((e) => {
                  e && s.unobserve(e);
                });
              }
            );
          }, []),
          (0, r.jsx)("section", {
            className: "story",
            children: (0, r.jsxs)("div", {
              className: "story__container",
              children: [
                (0, r.jsxs)("div", {
                  className: "story__item",
                  ref: s(0),
                  children: [
                    (0, r.jsxs)("div", {
                      className: "story__content",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "story__title-wrapper",
                          children: [
                            (0, r.jsx)("div", {
                              className: "story__title-line",
                            }),
                            (0, r.jsx)("h2", {
                              className: "story__title",
                              children: "TOSHIKUN AWAKENED",
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className: "story__subtitle",
                          children: "Not Just a Meme. The Final Boss.",
                        }),
                        (0, r.jsx)("p", {
                          className: "story__text",
                          children:
                            "TOSHIKUN rises on #BaseChain—quiet, inevitable. What started as a joke has become the guardian no one expected. The chain summoned its legend. The arena shifts.",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "story__image",
                      children: (0, r.jsx)("div", {
                        className: "story__image-frame",
                        children: (0, r.jsx)(l.default, {
                          src: "/images/img1.jpg",
                          alt: "On-Chain Transparency",
                          fill: !0,
                          className: "story__image-content",
                          unoptimized: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "story__item story__item--reverse",
                  ref: s(1),
                  children: [
                    (0, r.jsxs)("div", {
                      className: "story__content",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "story__title-wrapper",
                          children: [
                            (0, r.jsx)("div", {
                              className: "story__title-line",
                            }),
                            (0, r.jsx)("h2", {
                              className: "story__title",
                              children: "TOSHIKUN TIME",
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className: "story__subtitle",
                          children: "Blue Moon. Charts Obey.",
                        }),
                        (0, r.jsx)("p", {
                          className: "story__text",
                          children:
                            "When the moon turns blue, you know it’s TOSHIKUN time. Charts obey on #BaseChain—no hesitation, no dips, just pure, relentless ascent. The legend speaks. The market listens.",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "story__image",
                      children: (0, r.jsx)("div", {
                        className: "story__image-frame",
                        children: (0, r.jsx)(l.default, {
                          src: "/images/img2.jpg",
                          alt: "Autonomous AI Agents",
                          fill: !0,
                          className: "story__image-content",
                          unoptimized: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "story__item",
                  ref: s(2),
                  children: [
                    (0, r.jsxs)("div", {
                      className: "story__content",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "story__title-wrapper",
                          children: [
                            (0, r.jsx)("div", {
                              className: "story__title-line",
                            }),
                            (0, r.jsx)("h2", {
                              className: "story__title",
                              children: "KINGS BUILD, LEGENDS RULE",
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className: "story__subtitle",
                          children: "Armstrong Opens Base. TOSHIKUN Takes Throne.",
                        }),
                        (0, r.jsx)("p", {
                          className: "story__text",
                          children:
                            "Kings may build chains, but legends rule them—Brian Armstrong opens Base, TOSHIKUN takes the throne on #BaseChain. The builder laid the foundation; the ruler claims dominion. Quiet ascent, absolute reign. The chain bows. The legend rises.",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "story__image",
                      children: (0, r.jsx)("div", {
                        className: "story__image-frame",
                        children: (0, r.jsx)(l.default, {
                          src: "/images/img3.jpg",
                          alt: "Tokenized Power",
                          fill: !0,
                          className: "story__image-content",
                          unoptimized: !0,
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function d() {
        let [e, s] = (0, t.useState)(!1),
          a = "0x334EaCFe79091797d34a4D7E6AfE25d83aB3C3a4",
          i = async () => {
            try {
              await navigator.clipboard.writeText(a),
                s(!0),
                setTimeout(() => s(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy:", e);
            }
          };
        return (0, r.jsx)("section", {
          className: "tokenomics",
          children: (0, r.jsxs)("div", {
            className: "tokenomics__container",
            children: [
              (0, r.jsx)("h2", {
                className: "tokenomics__title",
                children: "TOKENOMICS",
              }),
              (0, r.jsxs)("div", {
                className: "tokenomics__content",
                children: [
                  (0, r.jsx)("div", {
                    className: "tokenomics__illustration",
                    children: (0, r.jsx)("div", {
                      className: "tokenomics__illustration-wrapper",
                      children: (0, r.jsx)(l.default, {
                        src: "/images/tokenomics.jpg",
                        alt: "Isagi Character",
                        fill: !0,
                        className: "tokenomics__illustration-img",
                        unoptimized: !0,
                        priority: !0,
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "tokenomics__cards",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "tokenomics__card",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-label",
                            children: "OWNERSHIP",
                          }),
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-value",
                            children: "RENOUNCED",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "tokenomics__card",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-label",
                            children: "TAX",
                          }),
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-value",
                            children: "0%",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "tokenomics__card",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-label",
                            children: "LIQUIDITY",
                          }),
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-value",
                            children: "LP BURNT",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "tokenomics__card",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-label",
                            children: "MAX SUPPLY",
                          }),
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-value",
                            children: "1,000,000,000",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "tokenomics__card tokenomics__card--address",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tokenomics__card-label",
                            children: "CONTRACT ADDRESS",
                          }),
                          (0, r.jsxs)("div", {
                            className: "tokenomics__card-address-wrapper",
                            children: [
                              (0, r.jsx)("span", {
                                className: "tokenomics__card-address",
                                children: a,
                              }),
                              (0, r.jsx)("button", {
                                className: "tokenomics__card-copy",
                                onClick: i,
                                "aria-label": "Copy contract address",
                                children: (0, r.jsx)("svg", {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, r.jsx)("path", {
                                    d: "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                              e &&
                                (0, r.jsx)("div", {
                                  className: "tokenomics__card-copied",
                                  children: "Copied!",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function m() {
        let [e, s] = (0, t.useState)(0),
          [a, i] = (0, t.useState)(!1),
          [o, c] = (0, t.useState)([]),
          [n, d] = (0, t.useState)(0),
          m = [
            "/images/1.jpg",
            "/images/2.png",
            "/images/3.png",
            "/images/4.jpg",
            "/images/5.jpg",
            "/images/6.jpg"
          ],
          h = (0, t.useCallback)(function (e) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8,
              a = [...m.filter((s) => s !== e)].sort(() => Math.random() - 0.5);
            return a.slice(0, Math.min(s, a.length));
          }, []);
        return (
          (0, t.useEffect)(() => {
            0 === o.length && c(h(m[0], 8));
          }, []),
          (0, r.jsx)("section", {
            className: "art",
            children: (0, r.jsxs)("div", {
              className: "art__container",
              children: [
                (0, r.jsx)("h2", { className: "art__title", children: "ART" }),
                (0, r.jsxs)("div", {
                  className: "art__orbit",
                  children: [
                    (0, r.jsx)("div", {
                      className: "art__center",
                      children: (0, r.jsxs)("div", {
                        className: "art__center-image ".concat(
                          a ? "art__center-image--transitioning" : ""
                        ),
                        children: [
                          (0, r.jsx)("div", { className: "art__particles" }),
                          (0, r.jsx)(l.default, {
                            src: o.length > 0 && o[e] ? o[e] : "/logo.png",
                            alt: "Active Art",
                            fill: !0,
                            className: "art__center-img",
                            unoptimized: !0,
                            priority: !0,
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "art__orbit-ring",
                      children:
                        o.length > 0 &&
                        o.map((t, h) => {
                          let _ = (360 / o.length) * h,
                            g = h === e;
                          return (0, r.jsx)(
                            "div",
                            {
                              className: "art__orbit-item ".concat(
                                g ? "art__orbit-item--active" : ""
                              ),
                              style: {
                                "--angle": "".concat(_, "deg"),
                                "--index": h,
                              },
                              onClick: () => {
                                h === e ||
                                  a ||
                                  0 === o.length ||
                                  (i(!0),
                                  setTimeout(() => {
                                    let e = o[h],
                                      a = [...o],
                                      r = a.filter((e, s) => s !== h),
                                      t = m.filter(
                                        (s) => s !== e && !r.includes(s)
                                      );
                                    if (
                                      (0 === t.length &&
                                        (t = m.filter((s) => s !== e)),
                                      0 === t.length && (t = [...m]),
                                      t.length > 0)
                                    ) {
                                      let e = Math.floor(
                                          Math.random() * t.length
                                        ),
                                        s = t[e];
                                      a[h] = s;
                                    }
                                    s(h), c(a), d((e) => e + 1), i(!1);
                                  }, 300));
                              },
                              onMouseEnter: () => {
                                a || h === e || s(h);
                              },
                              children: (0, r.jsx)("div", {
                                className: "art__orbit-image-wrapper",
                                children: (0, r.jsx)(l.default, {
                                  src: t,
                                  alt: "Art ".concat(h + 1),
                                  fill: !0,
                                  className: "art__orbit-img",
                                  unoptimized: !0,
                                }),
                              }),
                            },
                            "".concat(t, "-").concat(h, "-").concat(n)
                          );
                        }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function h() {
        return (0, r.jsxs)("footer", {
          className: "footer",
          children: [
            (0, r.jsxs)("div", {
              className: "footer__container",
              children: [
                (0, r.jsx)("div", {
                  className: "footer__logo",
                  children: (0, r.jsx)("h2", {
                    className: "footer__logo-text",
                    children: (0, r.jsx)("span", {
                      className: "footer__logo-main",
                      children: "TOSHIKUN",
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "footer__nav",
                  children: (0, r.jsxs)("div", {
                    className: "footer__nav-column",
                    children: [
                      (0, r.jsx)("a", {
                        href: "#",
                        className: "footer__nav-link",
                        children: "HOW TO BUY",
                      }),
                      (0, r.jsx)("a", {
                        href: "#",
                        className: "footer__nav-link",
                        children: "TOKENOMICS",
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "footer__social",
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://x.com/toshikunbaseX",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "footer__social-item",
                      "aria-label": "Twitter/X",
                      children: (0, r.jsx)(l.default, {
                        src: "/twitter.png",
                        alt: "Twitter/X",
                        width: 24,
                        height: 24,
                      }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://t.me/toshikunbase",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "footer__social-item",
                      "aria-label": "Telegram",
                      children: (0, r.jsx)(l.default, {
                        src: "/telegram.png",
                        alt: "Telegram",
                        width: 24,
                        height: 24,
                      }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://dexscreener.com/base/0x334EaCFe79091797d34a4D7E6AfE25d83aB3C3a4",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "footer__social-item",
                      "aria-label": "DexScreener",
                      children: (0, r.jsx)(l.default, {
                        src: "/dexscreener.png",
                        alt: "DexScreener",
                        width: 24,
                        height: 24,
                      }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.dextools.io/app/en/base/pair-explorer/0x334EaCFe79091797d34a4D7E6AfE25d83aB3C3a4",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "footer__social-item",
                      "aria-label": "Dextools",
                      children: (0, r.jsx)(l.default, {
                        src: "/dextools.png",
                        alt: "Dextools",
                        width: 24,
                        height: 24,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "footer__bottom",
              children: [
                (0, r.jsx)("div", { className: "footer__divider" }),
                (0, r.jsxs)("div", {
                  className: "footer__bottom-content",
                  children: [
                    (0, r.jsx)("p", {
                      className: "footer__copyright",
                      children: "2026 \xa9 ALL RIGHTS RESERVED",
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      className: "footer__disclaimer",
                      children: "DISCLAIMER",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function _() {
        return (
          (0, t.useEffect)(() => {
            document.body.classList.add("loaded");
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i, {}),
              (0, r.jsxs)("div", {
                className: "wrapper",
                children: [
                  (0, r.jsx)(c, {}),
                  (0, r.jsxs)("main", {
                    children: [
                      (0, r.jsx)(o, {}),
                      (0, r.jsx)(n, {}),
                      (0, r.jsx)(d, {}),
                      (0, r.jsx)(m, {}),
                    ],
                  }),
                  (0, r.jsx)(h, {}),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  (e) => {
    e.O(0, [239, 441, 255, 358], () => e((e.s = 61))), (_N_E = e.O());
  },
]);
