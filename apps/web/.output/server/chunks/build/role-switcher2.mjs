import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute, mergeProps } from 'solid-js/web';
import { createSignal } from 'solid-js';
import { p, f, j as A } from '../nitro/nitro.mjs';
import { t } from './card-BBkvPB4n2.mjs';
import { c } from './button-BIPZjNFL2.mjs';
import { p as p$1 } from './eye-S1mCYWRf.mjs';
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

var $ = [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]], _ = (i) => createComponent(A, mergeProps(i, { name: "RefreshCw", iconNode: $ })), R = _, k = ["<h2", ' class="ff-section-title mb-4">Switch User Role</h2>'], C = ["<p", ' class="text-muted-foreground mb-6">Select a role to see how the application appears for different user types. This will reload the page with the selected role perspective.</p>'], j = ["<div", ' class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="ff-label mb-2 block">Select Role</label><!--$-->', '<!--/--><p class="text-sm text-muted-foreground mt-2">', '</p></div><div class="flex items-end">', "</div></div>"], S = ["<h3", ' class="font-semibold text-card-foreground mb-3">How to Use</h3>'], P = ["<ol", ` class="space-y-2 text-sm text-muted-foreground"><li class="flex items-start gap-2"><span class="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">1</span>Select a role from the dropdown above</li><li class="flex items-start gap-2"><span class="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">2</span>Click "Switch to [Role]" button to reload with that role's perspective</li><li class="flex items-start gap-2"><span class="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">3</span>Observe the sidebar navigation changes and available menu items</li><li class="flex items-start gap-2"><span class="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">4</span>Test different pages to see role-based content filtering</li><li class="flex items-start gap-2"><span class="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">5</span>Return to admin role to access this role switcher again</li></ol>`], T = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Role Switcher</h1><p class="ff-page-subtitle">Test different user role perspectives and navigation</p></div><div class="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-lg"><!--$-->', '<!--/--><span class="text-sm font-medium text-blue-800">Current: <!--$-->', "<!--/--></span></div></div></div><!--$-->", `<!--/--><section class="ff-section"><h2 class="ff-section-title">Role Navigation Preview</h2><p class="text-muted-foreground mb-6">Here's what each role sees in their sidebar navigation:</p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`, "</div></section><!--$-->", "<!--/--></div>"], M = ["<option", ">", "</option>"], D = ["<div", ' class="flex items-center gap-3 mb-4"><!--$-->', '<!--/--><div><h3 class="font-semibold text-card-foreground">', "</h3><!--$-->", "<!--/--></div></div>"], U = ["<p", ' class="text-sm text-muted-foreground mb-4">', "</p>"], N = ["<div", ' class="space-y-2"><h4 class="text-sm font-medium text-card-foreground">Navigation Items:</h4><ul class="space-y-1">', "</ul></div>"], H = ["<div", ' class="mt-4">', "</div>"], u = ["<span", ' class="text-xs text-primary font-medium">CURRENT ROLE</span>'], L = ["<li", ' class="text-sm text-muted-foreground flex items-center gap-2"><div class="w-1 h-1 bg-muted-foreground rounded-full"></div><!--$-->', "<!--/--></li>"];
const K = () => {
  const [i, c$1] = createSignal("admin"), n = [{ value: "admin", label: "Administrator", description: "Full system access - can manage all projects, users, and settings" }, { value: "project_manager", label: "Project Manager", description: "Can manage assigned projects, tasks, and team members" }, { value: "field_technician", label: "Field Technician", description: "Can view assigned tasks only, update task progress" }, { value: "design_engineer", label: "Design Engineer", description: "Can view projects, manage design tasks, create technical documentation" }, { value: "client", label: "Client", description: "Can view project progress, reports, and communicate with team" }], d = () => {
    const e = `${window.location.origin}?role=${i()}`;
    window.location.href = e;
  }, l = () => new URLSearchParams(window.location.search).get("role") || "admin", g = (e) => ({ admin: ["Dashboard", "Projects", "Tasks", "Users", "Reports", "Settings"], project_manager: ["Dashboard", "My Projects", "Tasks", "Team", "Reports", "Settings"], field_technician: ["Dashboard", "My Tasks", "My Projects", "Time Tracking", "Reports"], design_engineer: ["Dashboard", "My Tasks", "Projects", "Calendar", "Reports"], client: ["Dashboard", "My Projects", "Progress Reports", "Support"] })[e] || [];
  return ssr(T, ssrHydrationKey(), escape(createComponent(p, { class: "w-4 h-4 text-blue-600" })), escape(l()), escape(createComponent(t, { class: "p-6 ff-card mb-6", get children() {
    var _a;
    return [ssr(k, ssrHydrationKey()), ssr(C, ssrHydrationKey()), ssr(j, ssrHydrationKey(), escape(createComponent(f, { get value() {
      return i();
    }, onChange: (e) => c$1(e), get children() {
      return n.map((e) => ssr(M, ssrHydrationKey() + ssrAttribute("value", escape(e.value, true), false), escape(e.label)));
    } })), escape((_a = n.find((e) => e.value === i())) == null ? void 0 : _a.description), escape(createComponent(c, { onClick: d, class: "bg-primary text-primary-foreground", get children() {
      var _a2;
      return [createComponent(R, { class: "w-4 h-4 mr-2" }), "Switch to ", (_a2 = n.find((e) => e.value === i())) == null ? void 0 : _a2.label];
    } })))];
  } })), escape(n.map((e) => createComponent(t, { get class() {
    return `p-6 ff-card ${l() === e.value ? "ring-2 ring-primary bg-primary/5" : ""}`;
  }, get children() {
    return [ssr(D, ssrHydrationKey(), escape(createComponent(p, { class: "w-5 h-5 text-primary" })), escape(e.label), l() === e.value && u[0] + ssrHydrationKey() + u[1]), ssr(U, ssrHydrationKey(), escape(e.description)), ssr(N, ssrHydrationKey(), escape(g(e.value).map((p) => ssr(L, ssrHydrationKey(), escape(p))))), ssr(H, ssrHydrationKey(), escape(createComponent(c, { size: "sm", variant: "outline", class: "w-full", onClick: () => {
      c$1(e.value), d();
    }, get disabled() {
      return l() === e.value;
    }, get children() {
      return [createComponent(p$1, { class: "w-3 h-3 mr-2" }), l() === e.value ? "Current Role" : `View as ${e.label}`];
    } })))];
  } }))), escape(createComponent(t, { class: "p-6 ff-card mt-6", get children() {
    return [ssr(S, ssrHydrationKey()), ssr(P, ssrHydrationKey())];
  } })));
};

export { K as default };
//# sourceMappingURL=role-switcher2.mjs.map
