import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { createSignal, For } from 'solid-js';
import { m, d as d$1, h, p as p$1, a as n$1, c as c$1 } from '../nitro/nitro.mjs';
import { c } from './button-BIPZjNFL2.mjs';
import { t } from './card-BBkvPB4n2.mjs';
import { n } from './filter-JNKdUQdZ.mjs';
import { p } from './download-DRt50r1n.mjs';
import { d } from './trending-up-BtArBG29.mjs';
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

var A = ["<div", ' class="flex items-center justify-between"><div><p class="ff-secondary-text">Total Projects</p><p class="text-3xl font-light text-foreground">', '</p><p class="text-sm text-success mt-1"><!--$-->', "<!--/--><!--$-->", "<!--/--> active</p></div><!--$-->", "<!--/--></div>"], B = ["<div", ' class="flex items-center justify-between"><div><p class="ff-secondary-text">Total Tasks</p><p class="text-3xl font-light text-foreground">', '</p><p class="text-sm text-success mt-1"><!--$-->', "<!--/--><!--$-->", "<!--/--> completed</p></div><!--$-->", "<!--/--></div>"], C = ["<div", ' class="flex items-center justify-between"><div><p class="ff-secondary-text">Team Members</p><p class="text-3xl font-light text-foreground">', '</p><p class="text-sm text-muted-foreground mt-1"><!--$-->', "<!--/-->Across all roles</p></div><!--$-->", "<!--/--></div>"], R = ["<div", ' class="flex items-center justify-between"><div><p class="ff-secondary-text">Overdue Tasks</p><p class="text-3xl font-light text-foreground">', '</p><p class="text-sm text-destructive mt-1"><!--$-->', "<!--/-->Require attention</p></div><!--$-->", "<!--/--></div>"], z = ["<h3", ' class="ff-heading-medium mb-6">Projects by Status</h3>'], u = ["<div", ' class="space-y-4">', "</div>"], O = ["<h3", ' class="ff-heading-medium mb-6">Tasks by Status</h3>'], D = ["<h3", ' class="ff-heading-medium mb-6">Team Distribution by Role</h3>'], E = ["<div", ' class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">', "</div>"], F = ["<h3", ' class="ff-heading-medium mb-6">Project Performance</h3>'], I = ["<div", ' class="flex items-start gap-3"><!--$-->', '<!--/--><div><h3 class="font-semibold text-blue-900 mb-2">Demo Analytics</h3><p class="text-blue-800 mb-4">This dashboard shows analytics based on the mock data. In a production environment, these reports would be generated from real project data and include time-series charts, trend analysis, and exportable reports.</p><div class="space-y-2 text-sm text-blue-700"><p><strong>Available in Production:</strong></p><ul class="list-disc list-inside space-y-1 ml-4"><li>Interactive charts and graphs</li><li>Custom date range filtering</li><li>Exportable reports (PDF, Excel)</li><li>Real-time performance metrics</li><li>Trend analysis and forecasting</li></ul></div></div></div>'], U = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Reports & Analytics</h1><p class="ff-page-subtitle">System overview and performance metrics</p></div><div class="flex gap-2"><!--$-->', "<!--/--><!--$-->", '<!--/--></div></div></div><section class="ff-section"><h2 class="ff-section-title">Key Metrics</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div></section><section class="ff-section"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><!--$-->', "<!--/--><!--$-->", '<!--/--></div></section><section class="ff-section">', '</section><section class="ff-section">', '</section><section class="ff-section">', "</section></div>"], y = ["<div", ' class="flex items-center justify-between"><div class="flex items-center gap-3"><!--$-->', '<!--/--><span class="text-card-foreground capitalize">', '</span></div><span class="font-semibold text-card-foreground">', "</span></div>"], q = ["<div", ' class="text-center p-4 bg-accent rounded-lg"><p class="text-2xl font-light text-foreground">', '</p><p class="text-sm text-muted-foreground capitalize">', "</p></div>"], K = ["<div", ' class="flex items-center justify-between p-4 bg-accent rounded-lg"><div class="flex-1"><h4 class="font-semibold text-card-foreground">', '</h4><div class="flex items-center gap-4 mt-2"><!--$-->', '<!--/--><span class="text-sm text-muted-foreground capitalize"><!--$-->', '<!--/--> phase</span></div></div><div class="text-right"><div class="text-2xl font-light text-foreground"><!--$-->', '<!--/-->%</div><div class="text-sm text-muted-foreground">Complete</div></div></div>'];
const ae = () => {
  const [M, H] = createSignal("last_30_days"), c$2 = m.getSystemStats(), i = m.getAllProjects(), n$2 = m.getAllTasks(), d$2 = m.getAllUsers();
  i.filter((e) => e.status === "active"), i.filter((e) => e.status === "completed"), n$2.filter((e) => e.urgencyStatus === "overdue"), n$2.filter((e) => e.status === "completed");
  const $ = { active: i.filter((e) => e.status === "active").length, completed: i.filter((e) => e.status === "completed").length, on_hold: i.filter((e) => e.status === "on_hold").length, cancelled: i.filter((e) => e.status === "cancelled").length }, w = { not_started: n$2.filter((e) => e.status === "not_started").length, in_progress: n$2.filter((e) => e.status === "in_progress").length, completed: n$2.filter((e) => e.status === "completed").length, blocked: n$2.filter((e) => e.status === "blocked").length }, j = { admin: d$2.filter((e) => e.role === "admin").length, project_manager: d$2.filter((e) => e.role === "project_manager").length, team_lead: d$2.filter((e) => e.role === "team_lead").length, design_engineer: d$2.filter((e) => e.role === "design_engineer").length, field_technician: d$2.filter((e) => e.role === "field_technician").length, client: d$2.filter((e) => e.role === "client").length }, p$2 = (e) => {
    switch (e) {
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "on_hold":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      case "not_started":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return ssr(U, ssrHydrationKey(), escape(createComponent(c, { variant: "outline", size: "sm", get children() {
    return [createComponent(n, { class: "w-4 h-4 mr-2" }), "Filter"];
  } })), escape(createComponent(c, { variant: "outline", size: "sm", get children() {
    return [createComponent(p, { class: "w-4 h-4 mr-2" }), "Export"];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(A, ssrHydrationKey(), escape(c$2.totalProjects), escape(createComponent(d, { class: "w-4 h-4 inline mr-1" })), escape(c$2.activeProjects), escape(createComponent(d$1, { class: "w-8 h-8 text-primary" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(B, ssrHydrationKey(), escape(c$2.totalTasks), escape(createComponent(h, { class: "w-4 h-4 inline mr-1" })), escape(c$2.completedTasks), escape(createComponent(h, { class: "w-8 h-8 text-primary" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(C, ssrHydrationKey(), escape(c$2.totalUsers), escape(createComponent(p$1, { class: "w-4 h-4 inline mr-1" })), escape(createComponent(p$1, { class: "w-8 h-8 text-primary" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(R, ssrHydrationKey(), escape(c$2.overdueTasks), escape(createComponent(n$1, { class: "w-4 h-4 inline mr-1" })), escape(createComponent(n$1, { class: "w-8 h-8 text-destructive" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(z, ssrHydrationKey()), ssr(u, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return Object.entries($);
    }, children: ([e, o]) => ssr(y, ssrHydrationKey(), escape(createComponent(c$1, { get class() {
      return p$2(e);
    }, get children() {
      return e.replace("_", " ");
    } })), escape(e.replace("_", " ")), escape(o)) })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(O, ssrHydrationKey()), ssr(u, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return Object.entries(w);
    }, children: ([e, o]) => ssr(y, ssrHydrationKey(), escape(createComponent(c$1, { get class() {
      return p$2(e);
    }, get children() {
      return e.replace("_", " ");
    } })), escape(e.replace("_", " ")), escape(o)) })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(D, ssrHydrationKey()), ssr(E, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return Object.entries(j);
    }, children: ([e, o]) => ssr(q, ssrHydrationKey(), escape(o), escape(e.replace("_", " "))) })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(F, ssrHydrationKey()), ssr(u, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return i.slice(0, 5);
    }, children: (e) => ssr(K, ssrHydrationKey(), escape(e.name), escape(createComponent(c$1, { get class() {
      return p$2(e.status || "active");
    }, get children() {
      return e.status || "active";
    } })), escape(e.currentPhase.replace("_", " ")), escape(e.completionPercentage)) })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card border-blue-200 bg-blue-50", get children() {
    return ssr(I, ssrHydrationKey(), escape(createComponent(d$1, { class: "w-6 h-6 text-blue-600 mt-1" })));
  } })));
};

export { ae as default };
//# sourceMappingURL=reports22.mjs.map
