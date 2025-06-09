import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { y } from './components-CWgRo50f.mjs';
import { t } from './card-BBkvPB4n.mjs';
import { t as t$1 } from './folder-open-BDmM4pk8.mjs';
import { n as n$1 } from './clock-CX7dAqcH.mjs';
import { h as h$1 } from './square-check-big-CosC2anP.mjs';
import { n } from './triangle-alert-B-KKK4Eb.mjs';
import { p as p$1 } from './users-DmOdNUV-.mjs';
import 'solid-js';
import './routing-CDw4d2oX.mjs';
import './ThemeProvider-a-TiApaf.mjs';

var m = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Active Projects</p><p class="text-2xl font-bold text-foreground">8</p></div><!--$-->', "<!--/--></div>"], p = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">My Tasks</p><p class="text-2xl font-bold text-foreground">24</p></div><!--$-->', "<!--/--></div>"], f = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Team Members</p><p class="text-2xl font-bold text-foreground">12</p></div><!--$-->', "<!--/--></div>"], u = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Overdue Tasks</p><p class="text-2xl font-bold text-destructive">3</p></div><!--$-->', "<!--/--></div>"], x = ["<h2", ' class="ff-section-title mb-4">Recent Projects</h2>'], v = ["<div", ' class="space-y-4"><div class="flex items-center justify-between p-4 bg-accent/50 rounded-lg"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">', '</div><div><h3 class="font-medium text-foreground">Network Upgrade</h3><p class="text-sm text-muted-foreground">85% Complete</p></div></div><div class="text-right"><p class="text-sm font-medium text-foreground">Due: Jun 30</p><p class="text-xs text-muted-foreground">3 days left</p></div></div><div class="flex items-center justify-between p-4 bg-accent/50 rounded-lg"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">', '</div><div><h3 class="font-medium text-foreground">Campus Installation</h3><p class="text-sm text-muted-foreground">45% Complete</p></div></div><div class="text-right"><p class="text-sm font-medium text-foreground">Due: Aug 15</p><p class="text-xs text-muted-foreground">47 days left</p></div></div><div class="flex items-center justify-between p-4 bg-accent/50 rounded-lg"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">', '</div><div><h3 class="font-medium text-foreground">Fiber Repair</h3><p class="text-sm text-muted-foreground">12% Complete</p></div></div><div class="text-right"><p class="text-sm font-medium text-foreground">Due: Jun 12</p><p class="text-xs text-destructive">Overdue</p></div></div></div>'], g = ["<h2", ' class="ff-section-title mb-4">Urgent Tasks</h2>'], h = ["<div", ' class="space-y-4"><div class="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg"><!--$-->', '<!--/--><div class="flex-1"><h3 class="font-medium text-foreground">Site Survey Overdue</h3><p class="text-sm text-muted-foreground">Network Upgrade Project</p></div><div class="text-right"><p class="text-sm font-medium text-destructive">2 days overdue</p></div></div><div class="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"><!--$-->', '<!--/--><div class="flex-1"><h3 class="font-medium text-foreground">Permit Submission</h3><p class="text-sm text-muted-foreground">Campus Installation</p></div><div class="text-right"><p class="text-sm font-medium text-yellow-600">Due today</p></div></div><div class="flex items-center gap-3 p-4 bg-accent/50 rounded-lg"><!--$-->', '<!--/--><div class="flex-1"><h3 class="font-medium text-foreground">Equipment Testing</h3><p class="text-sm text-muted-foreground">Fiber Repair Project</p></div><div class="text-right"><p class="text-sm font-medium text-foreground">Due tomorrow</p></div></div></div>'], w = ["<div", ` class="ff-page-container"><div class="ff-page-header"><h1 class="ff-page-title">Dashboard</h1><p class="ff-page-subtitle">Welcome back! Here's what's happening with your projects.</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"><!--$-->`, "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"];
const R = () => ssr(w, ssrHydrationKey(), escape(createComponent(y, { href: "/admin/projects", get children() {
  return createComponent(t, { class: "p-6 ff-card cursor-pointer hover:shadow-md transition-shadow", get children() {
    return ssr(m, ssrHydrationKey(), escape(createComponent(t$1, { class: "w-8 h-8 text-primary" })));
  } });
} })), escape(createComponent(y, { href: "/tasks/my-tasks", get children() {
  return createComponent(t, { class: "p-6 ff-card cursor-pointer hover:shadow-md transition-shadow", get children() {
    return ssr(p, ssrHydrationKey(), escape(createComponent(h$1, { class: "w-8 h-8 text-primary" })));
  } });
} })), escape(createComponent(y, { href: "/admin/users", get children() {
  return createComponent(t, { class: "p-6 ff-card cursor-pointer hover:shadow-md transition-shadow", get children() {
    return ssr(f, ssrHydrationKey(), escape(createComponent(p$1, { class: "w-8 h-8 text-primary" })));
  } });
} })), escape(createComponent(y, { href: "/tasks/my-tasks", get children() {
  return createComponent(t, { class: "p-6 ff-card cursor-pointer hover:shadow-md transition-shadow", get children() {
    return ssr(u, ssrHydrationKey(), escape(createComponent(n, { class: "w-8 h-8 text-destructive" })));
  } });
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return [ssr(x, ssrHydrationKey()), ssr(v, ssrHydrationKey(), escape(createComponent(t$1, { class: "w-5 h-5 text-primary-foreground" })), escape(createComponent(t$1, { class: "w-5 h-5 text-primary-foreground" })), escape(createComponent(t$1, { class: "w-5 h-5 text-primary-foreground" })))];
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return [ssr(g, ssrHydrationKey()), ssr(h, ssrHydrationKey(), escape(createComponent(n, { class: "w-5 h-5 text-destructive flex-shrink-0" })), escape(createComponent(n$1, { class: "w-5 h-5 text-yellow-600 flex-shrink-0" })), escape(createComponent(h$1, { class: "w-5 h-5 text-primary flex-shrink-0" })))];
} })));

export { R as default };
//# sourceMappingURL=dashboard.mjs.map
