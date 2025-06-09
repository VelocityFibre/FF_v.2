import { ssr, ssrHydrationKey, escape, ssrAttribute, createComponent } from 'solid-js/web';
import { W, M, e as s, i, g as c } from '../nitro/nitro.mjs';

var f = ["<div", ' class="ff-card p-6"><h3 class="ff-heading-medium mb-4">Theme</h3><div class="grid grid-cols-2 md:grid-cols-4 gap-3">', "</div></div>"], h = ["<button", ' class="', '"', "><!--$-->", '<!--/--><span class="text-sm font-medium">', "</span></button>"];
function y() {
  const { theme: s$1, setTheme: g } = W(), o = [{ value: "light", icon: M, label: "Light", description: "Clean Apple-inspired white theme" }, { value: "dark", icon: s, label: "Dark", description: "Elegant dark theme" }, { value: "vf", icon: i, label: "VelocityFibre", description: "VelocityFibre blue brand theme" }, { value: "fibreflow", icon: c, label: "FibreFlow", description: "Custom FibreFlow brand theme" }];
  return ssr(f, ssrHydrationKey(), escape(o.map((e) => {
    const i = e.icon, l = s$1() === e.value;
    return ssr(h, ssrHydrationKey(), `
                p-4 rounded-xl border-2 transition-all duration-200 
                flex flex-col items-center gap-2 text-center
                ${l ? "border-primary bg-accent text-accent-foreground shadow-md" : "border-border bg-background hover:border-primary/50 hover:bg-accent/50"}
              `, ssrAttribute("title", escape(e.description, true), false), escape(createComponent(i, { class: "w-5 h-5" })), escape(e.label));
  })));
}

export { y };
//# sourceMappingURL=ThemeSwitcher-xIS9PB6a.mjs.map
