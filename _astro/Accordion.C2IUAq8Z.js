import { j as t } from "./jsx-runtime.D_zvdyIk.js";
import { r as n } from "./index.RH_Wq4ov.js";
const g = ({ title: c, children: i, className: l }) => {
  const [s, h] = n.useState(!1),
    [u, o] = n.useState(0),
    e = n.useRef(null);
  return (
    n.useEffect(() => {
      const a = () => {
        if (e.current) {
          const r = e.current.style.maxHeight;
          e.current.style.maxHeight = "none";
          const d = e.current.scrollHeight;
          o(d), (e.current.style.maxHeight = r);
        }
      };
      return (
        window.addEventListener("resize", a),
        () => window.removeEventListener("resize", a)
      );
    }, []),
    n.useEffect(() => {
      if (e.current) {
        const a = e.current.style.maxHeight;
        e.current.style.maxHeight = "none";
        const r = e.current.scrollHeight;
        o(r), (e.current.style.maxHeight = a);
      }
    }, [i]),
    t.jsxs("div", {
      className: `accordion ${s ? "active" : ""} ${l}`,
      children: [
        t.jsxs("button", {
          className: "accordion-header",
          onClick: () => h(!s),
          children: [
            t.jsx("span", { className: "text-left", children: c }),
            t.jsxs("div", {
              className: "accordion-icon w-[.8em] h-[.8em] relative",
              children: [
                t.jsx("div", {
                  className:
                    "w-[2px] h-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white opacity-100 accordion-icon-active",
                }),
                t.jsx("div", {
                  className:
                    "w-[2px] h-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rotate-90",
                }),
              ],
            }),
          ],
        }),
        t.jsx("div", {
          ref: e,
          className: "accordion-content",
          style: {
            maxHeight: s ? `${u + 100}px` : "0px",
            opacity: s ? 1 : 0,
            overflow: s ? "visible" : "hidden",
            padding: s ? "1.5rem" : "0 1.5rem",
            transition:
              "max-height 0.5s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out",
          },
          children: i,
        }),
      ],
    })
  );
};
export { g as default };
