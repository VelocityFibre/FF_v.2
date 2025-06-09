import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, For } from 'solid-js';
import { f, m, t as t$1, h, p as p$1, d as d$1, n as n$2, a as n$3 } from '../nitro/nitro.mjs';
import { c } from './button-BIPZjNFL2.mjs';
import { p } from './download-DRt50r1n.mjs';
import { n } from './filter-JNKdUQdZ.mjs';
import { d as d$2 } from './trending-up-BtArBG29.mjs';
import { n as n$1 } from './triangle-alert-BDdWNDdU.mjs';
import { t } from './card-BBkvPB4n2.mjs';
import { d } from './progress-CllnRpSM2.mjs';
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

var U = ["<option", ' value="this_week">This Week</option>'], H = ["<option", ' value="this_month">This Month</option>'], K = ["<option", ' value="this_quarter">This Quarter</option>'], N = ["<option", ' value="this_year">This Year</option>'], Q = ["<option", ' value="all_time">All Time</option>'], V = ["<option", ' value="all">All Projects</option>'], W = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Total Projects</p><p class="text-2xl font-bold text-foreground">', '</p><p class="text-sm text-green-600">\u2197 <!--$-->', "<!--/--> active</p></div><!--$-->", "<!--/--></div>"], Y = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Task Completion</p><p class="text-2xl font-bold text-foreground"><!--$-->', '<!--/-->%</p><p class="text-sm text-muted-foreground"><!--$-->', "<!--/-->/<!--$-->", "<!--/--> tasks</p></div><!--$-->", "<!--/--></div>"], G = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Team Members</p><p class="text-2xl font-bold text-foreground">', '</p><p class="text-sm text-muted-foreground"><!--$-->', "<!--/--> active</p></div><!--$-->", "<!--/--></div>"], J = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Overdue Tasks</p><p class="text-2xl font-bold text-destructive">', '</p><p class="text-sm text-muted-foreground">Need attention</p></div><!--$-->', "<!--/--></div>"], L = ["<h2", ' class="ff-section-title mb-4">Project Progress</h2>'], y = ["<div", ' class="space-y-4">', "</div>"], X = ["<h2", ' class="ff-section-title mb-4">Team Productivity</h2>'], Z = ["<h2", ' class="ff-section-title mb-4">Project Timeline</h2>'], ee = ["<div", ' class="h-64 bg-accent/30 rounded-lg flex items-center justify-center"><div class="text-center"><!--$-->', '<!--/--><p class="text-muted-foreground">Timeline chart would be rendered here</p><p class="text-sm text-muted-foreground">Integration with charting library needed</p></div></div>'], te = ["<h2", ' class="ff-section-title mb-4">Performance Metrics</h2>'], se = ["<div", ' class="space-y-4"><div class="flex items-center justify-between p-3 bg-green-50 rounded-lg"><div class="flex items-center gap-2"><!--$-->', '<!--/--><span class="font-medium text-green-800">On-Time Delivery</span></div><span class="text-green-800 font-bold">87%</span></div><div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg"><div class="flex items-center gap-2"><!--$-->', '<!--/--><span class="font-medium text-blue-800">Average Task Duration</span></div><span class="text-blue-800 font-bold">3.2 days</span></div><div class="flex items-center justify-between p-3 bg-purple-50 rounded-lg"><div class="flex items-center gap-2"><!--$-->', '<!--/--><span class="font-medium text-purple-800">Team Utilization</span></div><span class="text-purple-800 font-bold">94%</span></div><div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg"><div class="flex items-center gap-2"><!--$-->', '<!--/--><span class="font-medium text-orange-800">Project Velocity</span></div><span class="text-orange-800 font-bold">12 tasks/week</span></div></div>'], re = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Reports & Analytics</h1><p class="ff-page-subtitle">Track project progress and team performance</p></div><div class="flex gap-2"><!--$-->', "<!--/--><!--$-->", '<!--/--></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div>"], ae = ["<option", ">", "</option>"], le = ["<div", ' class="space-y-2"><div class="flex items-center justify-between"><h4 class="font-medium text-card-foreground">', '</h4><span class="text-sm text-muted-foreground"><!--$-->', "<!--/-->/<!--$-->", "<!--/--> tasks</span></div><!--$-->", '<!--/--><div class="flex items-center justify-between text-sm text-muted-foreground"><span>Phase: <!--$-->', "<!--/--></span><span><!--$-->", "<!--/-->% complete</span></div></div>"], oe = ["<div", ' class="flex items-center justify-between p-4 bg-accent/50 rounded-lg"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">', '</div><div><h4 class="font-medium text-card-foreground">', '</h4><p class="text-sm text-muted-foreground capitalize">', '</p></div></div><div class="text-right"><p class="text-sm font-medium text-foreground"><!--$-->', '<!--/-->% completion</p><p class="text-xs text-muted-foreground"><!--$-->', "<!--/-->/<!--$-->", "<!--/--> tasks (<!--$-->", "<!--/--> in progress)</p></div></div>"];
const we = () => {
  const [w, P] = createSignal("this_month"), [j, C] = createSignal("all"), m$1 = m.getAllProjects(), u = m.getAllTasks(), x = m.getAllUsers(), p$2 = () => {
    const t = m$1.length, l = m$1.filter((d) => d.status === "active").length, i = m$1.filter((d) => d.status === "completed").length, c = u.length, o = u.filter((d) => d.status === "completed").length, A = u.filter((d) => d.status === "blocked").length;
    return { totalProjects: t, activeProjects: l, completedProjects: i, totalTasks: c, completedTasks: o, overdueTasks: A, projectCompletionRate: t > 0 ? Math.round(i / t * 100) : 0, taskCompletionRate: c > 0 ? Math.round(o / c * 100) : 0 };
  }, R = () => m$1.map((t) => {
    const l = u.filter((o) => o.projectId === t.id), i = l.filter((o) => o.status === "completed").length, c = l.length > 0 ? Math.round(i / l.length * 100) : 0;
    return { ...t, totalTasks: l.length, completedTasks: i, taskCompletionRate: c };
  }), $ = () => x.map((t) => {
    const l = u.filter((o) => o.assigneeId === t.id), i = l.filter((o) => o.status === "completed").length, c = l.filter((o) => o.status === "in_progress").length;
    return { ...t, totalTasks: l.length, completedTasks: i, inProgressTasks: c, completionRate: l.length > 0 ? Math.round(i / l.length * 100) : 0 };
  }).filter((t) => t.totalTasks > 0), _ = (t) => {
    alert(`Exporting ${t} report... (Demo mode)`);
  };
  return ssr(re, ssrHydrationKey(), escape(createComponent(c, { variant: "outline", onClick: () => _("summary"), get children() {
    return [createComponent(p, { class: "w-4 h-4 mr-2" }), "Export PDF"];
  } })), escape(createComponent(c, { variant: "outline", onClick: () => _("detailed"), get children() {
    return [createComponent(p, { class: "w-4 h-4 mr-2" }), "Export Excel"];
  } })), escape(createComponent(f, { get value() {
    return w();
  }, onChange: P, get children() {
    return [ssr(U, ssrHydrationKey()), ssr(H, ssrHydrationKey()), ssr(K, ssrHydrationKey()), ssr(N, ssrHydrationKey()), ssr(Q, ssrHydrationKey())];
  } })), escape(createComponent(f, { get value() {
    return j();
  }, onChange: C, get children() {
    return [ssr(V, ssrHydrationKey()), createComponent(For, { each: m$1, children: (t) => ssr(ae, ssrHydrationKey() + ssrAttribute("value", escape(t.id, true), false), escape(t.name)) })];
  } })), escape(createComponent(c, { variant: "outline", class: "flex items-center gap-2", get children() {
    return [createComponent(n, { class: "w-4 h-4" }), "More Filters"];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(W, ssrHydrationKey(), escape(p$2().totalProjects), escape(p$2().activeProjects), escape(createComponent(t$1, { class: "w-8 h-8 text-primary" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(Y, ssrHydrationKey(), escape(p$2().taskCompletionRate), escape(p$2().completedTasks), escape(p$2().totalTasks), escape(createComponent(h, { class: "w-8 h-8 text-primary" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(G, ssrHydrationKey(), escape(x.length), escape($().length), escape(createComponent(p$1, { class: "w-8 h-8 text-primary" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return ssr(J, ssrHydrationKey(), escape(p$2().overdueTasks), escape(createComponent(n$1, { class: "w-8 h-8 text-destructive" })));
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(L, ssrHydrationKey()), ssr(y, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return R();
    }, children: (t) => ssr(le, ssrHydrationKey(), escape(t.name), escape(t.completedTasks), escape(t.totalTasks), escape(createComponent(d, { get value() {
      return t.taskCompletionRate;
    }, max: 100, class: "h-2" })), escape(t.currentPhase), escape(t.taskCompletionRate)) })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(X, ssrHydrationKey()), ssr(y, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return $();
    }, children: (t) => ssr(oe, ssrHydrationKey(), escape(createComponent(p$1, { class: "w-5 h-5 text-primary-foreground" })), escape(t.name), escape(t.role.replace("_", " ")), escape(t.completionRate), escape(t.completedTasks), escape(t.totalTasks), escape(t.inProgressTasks)) })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(Z, ssrHydrationKey()), ssr(ee, ssrHydrationKey(), escape(createComponent(d$1, { class: "w-12 h-12 text-muted-foreground mx-auto mb-2" })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(te, ssrHydrationKey()), ssr(se, ssrHydrationKey(), escape(createComponent(d$2, { class: "w-4 h-4 text-green-600" })), escape(createComponent(n$2, { class: "w-4 h-4 text-blue-600" })), escape(createComponent(p$1, { class: "w-4 h-4 text-purple-600" })), escape(createComponent(n$3, { class: "w-4 h-4 text-orange-600" })))];
  } })));
};

export { we as default };
//# sourceMappingURL=reports3.mjs.map
