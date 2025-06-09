import { ssrElement, mergeProps, escape, createComponent, Dynamic } from 'solid-js/web';
import { splitProps, For, useContext, createContext, createSignal, createEffect, onCleanup } from 'solid-js';

/**
* @license lucide-solid v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var C = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, n = C, x = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), T = (...r) => r.filter((e, o, s) => !!e && e.trim() !== "" && s.indexOf(e) === o).join(" ").trim(), E = (r) => {
  const [e, o] = splitProps(r, ["color", "size", "strokeWidth", "children", "class", "name", "iconNode", "absoluteStrokeWidth"]);
  return ssrElement("svg", mergeProps(n, { get width() {
    var _a;
    return (_a = e.size) != null ? _a : n.width;
  }, get height() {
    var _a;
    return (_a = e.size) != null ? _a : n.height;
  }, get stroke() {
    var _a;
    return (_a = e.color) != null ? _a : n.stroke;
  }, get "stroke-width"() {
    var _a, _b;
    return e.absoluteStrokeWidth ? Number((_a = e.strokeWidth) != null ? _a : n["stroke-width"]) * 24 / Number(e.size) : Number((_b = e.strokeWidth) != null ? _b : n["stroke-width"]);
  }, get class() {
    return T("lucide", "lucide-icon", e.name != null ? `lucide-${x(e == null ? void 0 : e.name)}` : void 0, e.class != null ? e.class : "");
  } }, o), () => escape(createComponent(For, { get each() {
    return e.iconNode;
  }, children: ([s, t]) => createComponent(Dynamic, mergeProps({ component: s }, t)) })), true);
}, z = E;
const d = createContext();
function W(r) {
  const [e, o] = createSignal("light");
  createEffect(() => {
    const t = localStorage.getItem("ff-theme");
    t && ["light", "dark", "vf", "fibreflow"].includes(t) && o(t);
  }), createEffect(() => {
    const t = e();
    document.documentElement.setAttribute("data-theme", t), localStorage.setItem("ff-theme", t);
  }), createEffect(() => {
    const t = window.matchMedia("(prefers-color-scheme: dark)"), c = (h) => {
      localStorage.getItem("ff-theme") || o(h.matches ? "dark" : "light");
    };
    t.addEventListener("change", c), onCleanup(() => {
      t.removeEventListener("change", c);
    });
  });
  const s = { theme: e, setTheme: (t) => {
    o(t);
  } };
  return createComponent(d.Provider, { value: s, get children() {
    return r.children;
  } });
}
function A() {
  const r = useContext(d);
  if (!r) throw new Error("useTheme must be used within a ThemeProvider");
  return r;
}

export { A, W, z };
//# sourceMappingURL=ThemeProvider-a-TiApaf.mjs.map
