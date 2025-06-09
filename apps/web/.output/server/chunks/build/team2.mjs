import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { createSignal, For, Show } from 'solid-js';
import { m, x, p, b as p$1, c } from '../nitro/nitro.mjs';
import { t } from './card-BBkvPB4n2.mjs';
import { p as p$2 } from './mail-BgrPjqx6.mjs';
import { c as c$1 } from './button-BIPZjNFL2.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'seroval';
import 'seroval-plugins/web';
import 'solid-js/web/storage';

var T = ["<h3", ' class="ff-heading-medium text-card-foreground mb-2">No team members found</h3>'], U = ["<p", ' class="text-muted-foreground mb-6">', "</p>"], B = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Team Members</h1><p class="ff-page-subtitle">View and manage team members across all projects</p></div></div></div><div class="mb-6">', '</div><section class="ff-section"><h2 class="ff-section-title">All Team Members (<!--$-->', '<!--/-->)</h2><div class="space-y-8">', "</div><!--$-->", "<!--/--></section></div>"], I = ["<div", '><div class="flex items-center gap-3 mb-4"><!--$-->', '<!--/--><h3 class="ff-heading-medium text-card-foreground"><!--$-->', "<!--/--> (<!--$-->", '<!--/-->)</h3></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">', "</div></div>"], L = ["<div", ' class="flex items-start justify-between mb-3"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-muted rounded-full flex items-center justify-center">', '</div><div><h4 class="font-semibold text-card-foreground">', '</h4><p class="text-sm text-muted-foreground flex items-center gap-1"><!--$-->', "<!--/--><!--$-->", "<!--/--></p></div></div></div>"], S = ["<div", ' class="flex items-center justify-between"><!--$-->', '<!--/--><div class="flex gap-1"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"];
const K = () => {
  const [c$2] = createSignal(m.getAllUsers() || []), [n, v] = createSignal(""), o = () => {
    const e = n().toLowerCase();
    return e ? c$2().filter((r) => r.name.toLowerCase().includes(e) || r.email.toLowerCase().includes(e) || r.role.toLowerCase().includes(e)) : c$2();
  }, b = (e) => {
    switch (e) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "project_manager":
        return "bg-purple-100 text-purple-800";
      case "team_lead":
        return "bg-blue-100 text-blue-800";
      case "design_engineer":
        return "bg-green-100 text-green-800";
      case "field_technician":
        return "bg-orange-100 text-orange-800";
      case "client":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, d = (e) => e.replace("_", " ").replace(/\b\w/g, (r) => r.toUpperCase()), m$1 = () => {
    const e = {};
    return o().forEach((r) => {
      e[r.role] || (e[r.role] = []), e[r.role].push(r);
    }), e;
  }, x$1 = ["admin", "project_manager", "team_lead", "design_engineer", "field_technician", "client"];
  return ssr(B, ssrHydrationKey(), escape(createComponent(x, { placeholder: "Search team members...", get value() {
    return n();
  }, onInput: (e) => v(e.target.value), class: "max-w-md" })), escape(o().length), escape(createComponent(For, { get each() {
    return x$1.filter((e) => {
      var _a;
      return ((_a = m$1()[e]) == null ? void 0 : _a.length) > 0;
    });
  }, children: (e) => {
    const r = m$1()[e];
    return ssr(I, ssrHydrationKey(), escape(createComponent(p, { class: "w-5 h-5 text-muted-foreground" })), escape(d(e)), escape(r.length), escape(createComponent(For, { each: r, children: (i) => createComponent(t, { class: "p-4 ff-card", get children() {
      return [ssr(L, ssrHydrationKey(), escape(createComponent(p$1, { class: "w-5 h-5 text-muted-foreground" })), escape(i.name), escape(createComponent(p$2, { class: "w-3 h-3" })), escape(i.email)), ssr(S, ssrHydrationKey(), escape(createComponent(c, { get class() {
        return b(i.role);
      }, get children() {
        return d(i.role);
      } })), escape(createComponent(c$1, { size: "sm", variant: "outline", children: "Contact" })), escape(createComponent(c$1, { size: "sm", variant: "outline", children: "View" })))];
    } }) })));
  } })), escape(createComponent(Show, { get when() {
    return o().length === 0;
  }, get children() {
    return createComponent(t, { class: "p-12 text-center ff-card", get children() {
      return [createComponent(p, { class: "w-16 h-16 text-muted-foreground mx-auto mb-4" }), ssr(T, ssrHydrationKey()), ssr(U, ssrHydrationKey(), n() ? `No team members match "${escape(n())}"` : "No team members available")];
    } });
  } })));
};

export { K as default };
//# sourceMappingURL=team2.mjs.map
