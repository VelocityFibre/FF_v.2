import { ssr, ssrHydrationKey, escape, createComponent, mergeProps } from 'solid-js/web';
import { createSignal, Show, For } from 'solid-js';
import { f as f$1, x, n, a as n$1, j as A$1 } from '../nitro/nitro.mjs';
import { t } from './card-BBkvPB4n2.mjs';
import { c } from './button-BIPZjNFL2.mjs';
import { l } from './play-BEHlmGHE.mjs';
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

var E = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]], q = (i) => createComponent(A$1, mergeProps(i, { name: "Square", iconNode: E })), R = q, z = [["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }], ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }], ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]], A = (i) => createComponent(A$1, mergeProps(i, { name: "Timer", iconNode: z })), f = A, D = ["<h2", ' class="ff-section-title mb-4">Current Timer</h2>'], H = ["<option", " value>Select project</option>"], M = ["<option", ' value="project-1">Business Park Installation</option>'], W = ["<option", ' value="project-2">Residential Complex Network</option>'], F = ["<option", ' value="project-3">Office Building Upgrade</option>'], K = ["<div", ' class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"><div><label class="ff-label mb-2 block">Project</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Task</label><!--$-->', '<!--/--></div><div class="flex items-end"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"], O = ["<div", ' class="bg-blue-50 p-4 rounded-lg"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><!--$-->', '<!--/--><span class="font-medium text-blue-900">Currently tracking: <!--$-->', '<!--/--></span></div><div class="text-2xl font-mono font-bold text-blue-900">', "</div></div></div>"], U = ["<h3", ' class="ff-heading-medium text-card-foreground mb-2">No time entries yet</h3>'], G = ["<p", ' class="text-muted-foreground mb-6">Start tracking time to see your entries here</p>'], J = ["<h2", ' class="ff-section-title mb-4">This Week Summary</h2>'], L = ["<div", ' class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="text-center"><div class="text-2xl font-bold text-card-foreground">32.5h</div><div class="text-sm text-muted-foreground">Total Hours</div></div><div class="text-center"><div class="text-2xl font-bold text-card-foreground">8</div><div class="text-sm text-muted-foreground">Tasks Completed</div></div><div class="text-center"><div class="text-2xl font-bold text-card-foreground">3</div><div class="text-sm text-muted-foreground">Projects Worked</div></div><div class="text-center"><div class="text-2xl font-bold text-card-foreground">4.1h</div><div class="text-sm text-muted-foreground">Avg Per Day</div></div></div>'], Q = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Time Tracking</h1><p class="ff-page-subtitle">Track time spent on tasks and projects</p></div></div></div><!--$-->', '<!--/--><section class="ff-section"><h2 class="ff-section-title">Recent Time Entries</h2><div class="space-y-4">', "</div><!--$-->", "<!--/--></section><!--$-->", "<!--/--></div>"], V = ["<div", ' class="flex items-center justify-between"><div class="flex-1"><div class="flex items-center gap-3 mb-2"><!--$-->', '<!--/--><h4 class="font-semibold text-card-foreground">', '</h4></div><p class="text-sm text-muted-foreground mb-2">', '</p><div class="flex items-center gap-4 text-sm text-muted-foreground"><span class="flex items-center gap-1"><!--$-->', "<!--/--><!--$-->", "<!--/--></span><span><!--$-->", "<!--/--> - <!--$-->", '<!--/--></span><span class="font-medium text-card-foreground">', '</span></div></div><div class="flex gap-2"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"];
const le = () => {
  const [i, m] = createSignal(false), [c$1, g] = createSignal(""), [x$1, h] = createSignal(0), [b, k] = createSignal(""), u = [{ id: "1", taskName: "Install fiber cables in Building A", projectName: "Business Park Installation", startTime: "09:00", endTime: "12:30", duration: "3h 30m", date: "2025-06-09", status: "completed" }, { id: "2", taskName: "Site survey for Building B", projectName: "Business Park Installation", startTime: "13:30", endTime: "16:15", duration: "2h 45m", date: "2025-06-09", status: "completed" }, { id: "3", taskName: "Equipment testing and calibration", projectName: "Residential Complex Network", startTime: "08:15", endTime: "11:00", duration: "2h 45m", date: "2025-06-08", status: "completed" }], T = (a) => {
    const y = Math.floor(a / 3600), S = Math.floor(a % 3600 / 60), _ = a % 60;
    return `${y.toString().padStart(2, "0")}:${S.toString().padStart(2, "0")}:${_.toString().padStart(2, "0")}`;
  }, $ = () => {
    if (!c$1()) {
      alert("Please select a task first");
      return;
    }
    m(true);
  }, w = () => {
    m(false), h(0), alert("Time entry saved!");
  };
  return ssr(Q, ssrHydrationKey(), escape(createComponent(t, { class: "p-6 ff-card mb-6", get children() {
    return [ssr(D, ssrHydrationKey()), ssr(K, ssrHydrationKey(), escape(createComponent(f$1, { get value() {
      return b();
    }, onChange: k, get children() {
      return [ssr(H, ssrHydrationKey()), ssr(M, ssrHydrationKey()), ssr(W, ssrHydrationKey()), ssr(F, ssrHydrationKey())];
    } })), escape(createComponent(x, { placeholder: "Enter task description", get value() {
      return c$1();
    }, onInput: (a) => g(a.target.value) })), escape(createComponent(Show, { get when() {
      return !i();
    }, get children() {
      return createComponent(c, { onClick: $, class: "bg-green-600 text-white", get children() {
        return [createComponent(l, { class: "w-4 h-4 mr-2" }), "Start Timer"];
      } });
    } })), escape(createComponent(Show, { get when() {
      return i();
    }, get children() {
      return createComponent(c, { onClick: w, class: "bg-red-600 text-white", get children() {
        return [createComponent(R, { class: "w-4 h-4 mr-2" }), "Stop Timer"];
      } });
    } }))), createComponent(Show, { get when() {
      return i();
    }, get children() {
      return ssr(O, ssrHydrationKey(), escape(createComponent(f, { class: "w-5 h-5 text-blue-600" })), escape(c$1()), escape(T(x$1())));
    } })];
  } })), escape(createComponent(For, { each: u, children: (a) => createComponent(t, { class: "p-4 ff-card", get children() {
    return ssr(V, ssrHydrationKey(), escape(createComponent(n, { class: "w-4 h-4 text-muted-foreground" })), escape(a.taskName), escape(a.projectName), escape(createComponent(n$1, { class: "w-3 h-3" })), escape(a.date), escape(a.startTime), escape(a.endTime), escape(a.duration), escape(createComponent(c, { size: "sm", variant: "outline", children: "Edit" })), escape(createComponent(c, { size: "sm", variant: "outline", class: "text-red-600 hover:bg-red-50", children: "Delete" })));
  } }) })), escape(createComponent(Show, { get when() {
    return u.length === 0;
  }, get children() {
    return createComponent(t, { class: "p-12 text-center ff-card", get children() {
      return [createComponent(f, { class: "w-16 h-16 text-muted-foreground mx-auto mb-4" }), ssr(U, ssrHydrationKey()), ssr(G, ssrHydrationKey())];
    } });
  } })), escape(createComponent(t, { class: "p-6 ff-card mt-6", get children() {
    return [ssr(J, ssrHydrationKey()), ssr(L, ssrHydrationKey())];
  } })));
};

export { le as default };
//# sourceMappingURL=time-tracking2.mjs.map
