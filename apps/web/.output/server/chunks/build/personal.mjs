import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { t } from './card-BBkvPB4n.mjs';
import { h as h$1 } from './square-check-big-CosC2anP.mjs';
import { n } from './clock-CX7dAqcH.mjs';
import { d } from './trending-up-y_SDVuxN.mjs';
import { d as d$1 } from './chart-column-0fmmXZyP.mjs';
import './ThemeProvider-a-TiApaf.mjs';
import 'solid-js';

var c = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Tasks Completed</p><p class="text-2xl font-bold text-foreground">23</p><p class="text-sm text-green-600">\u2197 +15% this week</p></div><!--$-->', "<!--/--></div>"], o = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Hours Tracked</p><p class="text-2xl font-bold text-foreground">32.5</p><p class="text-sm text-muted-foreground">This week</p></div><!--$-->', "<!--/--></div>"], p = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Efficiency Rate</p><p class="text-2xl font-bold text-foreground">94%</p><p class="text-sm text-green-600">Above average</p></div><!--$-->', "<!--/--></div>"], f = ["<div", ' class="flex items-center justify-between"><div><p class="text-sm text-muted-foreground">Projects Active</p><p class="text-2xl font-bold text-foreground">3</p><p class="text-sm text-muted-foreground">Currently assigned</p></div><!--$-->', "<!--/--></div>"], m = ["<h2", ' class="ff-section-title mb-4">Weekly Activity</h2>'], u = ["<div", ' class="h-64 bg-accent/30 rounded-lg flex items-center justify-center"><div class="text-center"><!--$-->', '<!--/--><p class="text-muted-foreground">Activity chart would be rendered here</p><p class="text-sm text-muted-foreground">Shows daily task completion and hours</p></div></div>'], x = ["<h2", ' class="ff-section-title mb-4">Task Breakdown</h2>'], g = ["<div", ' class="space-y-4"><div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg"><span class="font-medium text-blue-800">Installation Tasks</span><span class="text-blue-800 font-bold">15</span></div><div class="flex items-center justify-between p-3 bg-green-50 rounded-lg"><span class="font-medium text-green-800">Testing & QA</span><span class="text-green-800 font-bold">5</span></div><div class="flex items-center justify-between p-3 bg-purple-50 rounded-lg"><span class="font-medium text-purple-800">Site Surveys</span><span class="text-purple-800 font-bold">3</span></div></div>'], v = ["<h2", ' class="ff-section-title mb-4">Time Distribution</h2>'], b = ["<div", ' class="h-64 bg-accent/30 rounded-lg flex items-center justify-center"><div class="text-center"><!--$-->', '<!--/--><p class="text-muted-foreground">Time distribution pie chart</p><p class="text-sm text-muted-foreground">Shows time spent by project/task type</p></div></div>'], h = ["<h2", ' class="ff-section-title mb-4">Performance Trends</h2>'], y = ["<div", ' class="space-y-4"><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">Task Completion Rate</span><span class="font-bold text-green-600">\u2197 +8%</span></div><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">Average Task Duration</span><span class="font-bold text-blue-600">\u2193 -12%</span></div><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">Quality Score</span><span class="font-bold text-green-600">\u2197 +5%</span></div><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">On-Time Delivery</span><span class="font-bold text-green-600">97%</span></div></div>'], $ = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Personal Reports</h1><p class="ff-page-subtitle">Your individual performance and time tracking reports</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div>"];
const R = () => ssr($, ssrHydrationKey(), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return ssr(c, ssrHydrationKey(), escape(createComponent(h$1, { class: "w-8 h-8 text-primary" })));
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return ssr(o, ssrHydrationKey(), escape(createComponent(n, { class: "w-8 h-8 text-primary" })));
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return ssr(p, ssrHydrationKey(), escape(createComponent(d, { class: "w-8 h-8 text-primary" })));
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return ssr(f, ssrHydrationKey(), escape(createComponent(d$1, { class: "w-8 h-8 text-primary" })));
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return [ssr(m, ssrHydrationKey()), ssr(u, ssrHydrationKey(), escape(createComponent(d$1, { class: "w-12 h-12 text-muted-foreground mx-auto mb-2" })))];
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return [ssr(x, ssrHydrationKey()), ssr(g, ssrHydrationKey())];
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return [ssr(v, ssrHydrationKey()), ssr(b, ssrHydrationKey(), escape(createComponent(n, { class: "w-12 h-12 text-muted-foreground mx-auto mb-2" })))];
} })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
  return [ssr(h, ssrHydrationKey()), ssr(y, ssrHydrationKey())];
} })));

export { R as default };
//# sourceMappingURL=personal.mjs.map
