import { ssr, ssrElement, ssrHydrationKey, escape, mergeProps, ssrAttribute } from 'solid-js/web';

var i = ["<div", ' class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"><div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">', "</div></div>"], c = ["<div", ' class="mb-4">', "</div>"], d = ["<h2", ' class="text-lg font-semibold">', "</h2>"], a = ["<p", ' class="text-gray-600">', "</p>"], u = ["<div", ' class="flex justify-end gap-2 mt-6">', "</div>"], m = ["<select", ' class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"><option>', "</option><!--$-->", "<!--/--></select>"], p = ["<option", ">", "</option>"];
const v = { Content: (e) => ssr(i, ssrHydrationKey(), escape(e.children)), Header: (e) => ssr(c, ssrHydrationKey(), escape(e.children)), Title: (e) => ssr(d, ssrHydrationKey(), escape(e.children)), Description: (e) => ssr(a, ssrHydrationKey(), escape(e.children)), Footer: (e) => ssr(u, ssrHydrationKey(), escape(e.children)) }, f = (e) => ssr(m, ssrHydrationKey(), escape(e.placeholder), escape(e.children));
f.Item = (e) => ssr(p, ssrHydrationKey() + ssrAttribute("value", escape(e.value, true), false), escape(e.children));
const x = (e) => ssrElement("input", mergeProps(e, { get class() {
  return `w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${e.class || ""}`;
} }), void 0, true), y = (e) => ssrElement("textarea", mergeProps(e, { get class() {
  return `w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${e.class || ""}`;
} }), void 0, true);

export { f, v, x, y };
//# sourceMappingURL=index-D6nAbMgh.mjs.map
