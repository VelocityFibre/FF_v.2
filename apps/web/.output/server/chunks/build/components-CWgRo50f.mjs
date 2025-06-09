import { ssrElement, mergeProps as mergeProps$1 } from 'solid-js/web';
import { mergeProps, splitProps, createMemo } from 'solid-js';
import { W as We, $ as $e, M as Me, E, I as Ie } from './routing-CDw4d2oX.mjs';

function y(t) {
  t = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, t);
  const [, e] = splitProps(t, ["href", "state", "class", "activeClass", "inactiveClass", "end"]), n = We(() => t.href), s = $e(n), o = Me(), a = createMemo(() => {
    const c = n();
    if (c === void 0) return [false, false];
    const r = E(c.split(/[?#]/, 1)[0]).toLowerCase(), i = decodeURI(E(o.pathname).toLowerCase());
    return [t.end ? r === i : i.startsWith(r + "/") || i === r, r === i];
  });
  return ssrElement("a", mergeProps$1(e, { get href() {
    return s() || t.href;
  }, get state() {
    return JSON.stringify(t.state);
  }, get classList() {
    return { ...t.class && { [t.class]: true }, [t.inactiveClass]: !a()[0], [t.activeClass]: a()[0], ...e.classList };
  }, link: true, get "aria-current"() {
    return a()[1] ? "page" : void 0;
  } }), void 0, true);
}
function A(t) {
  const e = Ie(), n = Me(), { href: s, state: o } = t, a = typeof s == "function" ? s({ navigate: e, location: n }) : s;
  return e(a, { replace: true, state: o }), null;
}

export { A, y };
//# sourceMappingURL=components-CWgRo50f.mjs.map
