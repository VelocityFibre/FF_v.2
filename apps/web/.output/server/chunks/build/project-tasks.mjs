import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, For, Show } from 'solid-js';
import { x, f } from './index-D6nAbMgh.mjs';
import { m } from './mockData-D4l3Y6OF.mjs';
import { c } from './button-BIPZjNFL.mjs';
import { t } from './card-BBkvPB4n.mjs';
import { c as c$1 } from './badge-DswBmzwq.mjs';
import { n } from './filter-fsf6GWl9.mjs';
import { t as t$1 } from './folder-open-BDmM4pk8.mjs';
import { p } from './user-DuHvLNkd.mjs';
import { h } from './square-check-big-CosC2anP.mjs';
import './ThemeProvider-a-TiApaf.mjs';

var B = ["<option", ' value="all">All Projects</option>'], F = ["<option", ' value="all">All Statuses</option>'], L = ["<option", ' value="not_started">Not Started</option>'], q = ["<option", ' value="in_progress">In Progress</option>'], z = ["<option", ' value="completed">Completed</option>'], E = ["<option", ' value="blocked">Blocked</option>'], H = ["<h3", ' class="ff-heading-medium text-card-foreground mb-2">No tasks found</h3>'], K = ["<p", ' class="text-muted-foreground mb-6">', "</p>"], M = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Project Tasks</h1><p class="ff-page-subtitle">View and manage tasks across all projects</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><section class="ff-section"><h2 class="ff-section-title">All Tasks (<!--$-->', '<!--/-->)</h2><div class="space-y-4">', "</div><!--$-->", "<!--/--></section></div>"], U = ["<option", ">", "</option>"], V = ["<p", ' class="text-muted-foreground text-sm mb-2">', "</p>"], D = ["<span", ' class="flex items-center gap-1"><!--$-->', "<!--/-->Assigned to: <!--$-->", "<!--/--></span>"], G = ["<div", ' class="flex items-start justify-between"><div class="flex-1"><div class="flex items-center gap-3 mb-2"><h4 class="font-semibold text-card-foreground">', "</h4><!--$-->", "<!--/--><!--$-->", "<!--/--></div><!--$-->", '<!--/--><div class="flex items-center gap-4 text-xs text-muted-foreground"><span class="flex items-center gap-1"><!--$-->', "<!--/--><!--$-->", "<!--/--></span><span>Phase: <!--$-->", "<!--/--></span><span>Progress: <!--$-->", "<!--/-->%</span><!--$-->", "<!--/--></div></div><!--$-->", "<!--/--></div>"];
const ae = () => {
  const [b] = createSignal(m.getAllTasks() || []), [d, _] = createSignal(""), [l, w] = createSignal("all"), [n$1, y] = createSignal("all"), g = m.getAllProjects(), p$1 = () => {
    let e = b();
    l() !== "all" && (e = e.filter((o) => o.projectId === l())), n$1() !== "all" && (e = e.filter((o) => o.status === n$1()));
    const i = d().toLowerCase();
    return i && (e = e.filter((o) => {
      var _a;
      return o.taskName.toLowerCase().includes(i) || ((_a = o.description) == null ? void 0 : _a.toLowerCase().includes(i));
    })), e;
  }, j = (e) => {
    switch (e) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      case "not_started":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, P = (e) => {
    switch (e) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, C = (e) => {
    var _a;
    return ((_a = g.find((o) => o.id === e)) == null ? void 0 : _a.name) || "Unknown Project";
  };
  return ssr(M, ssrHydrationKey(), escape(createComponent(x, { placeholder: "Search tasks...", get value() {
    return d();
  }, onInput: (e) => _(e.target.value) })), escape(createComponent(f, { get value() {
    return l();
  }, onChange: w, get children() {
    return [ssr(B, ssrHydrationKey()), createComponent(For, { each: g, children: (e) => ssr(U, ssrHydrationKey() + ssrAttribute("value", escape(e.id, true), false), escape(e.name)) })];
  } })), escape(createComponent(f, { get value() {
    return n$1();
  }, onChange: y, get children() {
    return [ssr(F, ssrHydrationKey()), ssr(L, ssrHydrationKey()), ssr(q, ssrHydrationKey()), ssr(z, ssrHydrationKey()), ssr(E, ssrHydrationKey())];
  } })), escape(createComponent(c, { variant: "outline", class: "flex items-center gap-2", get children() {
    return [createComponent(n, { class: "w-4 h-4" }), "More Filters"];
  } })), escape(p$1().length), escape(createComponent(For, { get each() {
    return p$1();
  }, children: (e) => createComponent(t, { class: "p-4 ff-card", get children() {
    return ssr(G, ssrHydrationKey(), escape(e.taskName), escape(createComponent(c$1, { get class() {
      return j(e.status);
    }, get children() {
      return e.status.replace("_", " ");
    } })), escape(createComponent(c$1, { get class() {
      return P(e.priority);
    }, get children() {
      return e.priority;
    } })), escape(createComponent(Show, { get when() {
      return e.description;
    }, get children() {
      return ssr(V, ssrHydrationKey(), escape(e.description));
    } })), escape(createComponent(t$1, { class: "w-3 h-3" })), escape(C(e.projectId)), escape(e.phaseId), escape(e.completionPercentage), escape(createComponent(Show, { get when() {
      return e.assigneeId;
    }, get children() {
      return ssr(D, ssrHydrationKey(), escape(createComponent(p, { class: "w-3 h-3" })), escape(e.assigneeId));
    } })), escape(createComponent(c, { size: "sm", variant: "outline", children: "Edit" })));
  } }) })), escape(createComponent(Show, { get when() {
    return p$1().length === 0;
  }, get children() {
    return createComponent(t, { class: "p-12 text-center ff-card", get children() {
      return [createComponent(h, { class: "w-16 h-16 text-muted-foreground mx-auto mb-4" }), ssr(H, ssrHydrationKey()), ssr(K, ssrHydrationKey(), d() || l() !== "all" || n$1() !== "all" ? "No tasks match your current filters" : "No tasks have been created yet")];
    } });
  } })));
};

export { ae as default };
//# sourceMappingURL=project-tasks.mjs.map
