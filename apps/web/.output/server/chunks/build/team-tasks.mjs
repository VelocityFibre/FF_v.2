import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, For, Show } from 'solid-js';
import { x, f } from './index-D6nAbMgh.mjs';
import { m } from './mockData-D4l3Y6OF.mjs';
import { c } from './button-BIPZjNFL.mjs';
import { t } from './card-BBkvPB4n.mjs';
import { c as c$1 } from './badge-DswBmzwq.mjs';
import { n } from './filter-fsf6GWl9.mjs';
import { p } from './user-DuHvLNkd.mjs';
import { p as p$1 } from './users-DmOdNUV-.mjs';
import './ThemeProvider-a-TiApaf.mjs';

var z = ["<option", ' value="all">All Team Members</option>'], L = ["<option", ' value="unassigned">Unassigned</option>'], E = ["<option", ' value="all">All Statuses</option>'], M = ["<option", ' value="not_started">Not Started</option>'], H = ["<option", ' value="in_progress">In Progress</option>'], K = ["<option", ' value="completed">Completed</option>'], O = ["<option", ' value="blocked">Blocked</option>'], R = ["<h3", ' class="ff-heading-medium text-card-foreground mb-2">No team tasks found</h3>'], V = ["<p", ' class="text-muted-foreground mb-6">', "</p>"], q = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Team Tasks</h1><p class="ff-page-subtitle">View tasks organized by team member assignments</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><section class="ff-section"><h2 class="ff-section-title">Team Tasks (<!--$-->', '<!--/-->)</h2><div class="space-y-8">', "</div><!--$-->", "<!--/--></section></div>"], D = ["<option", ">", "</option>"], G = ["<div", '><div class="flex items-center gap-3 mb-4"><!--$-->', '<!--/--><h3 class="ff-heading-medium text-card-foreground"><!--$-->', "<!--/--> (<!--$-->", '<!--/-->)</h3></div><div class="space-y-3">', "</div></div>"], J = ["<p", ' class="text-muted-foreground text-sm mb-2">', "</p>"], Q = ["<div", ' class="flex items-start justify-between"><div class="flex-1"><div class="flex items-center gap-3 mb-2"><h4 class="font-semibold text-card-foreground">', "</h4><!--$-->", "<!--/--><!--$-->", "<!--/--></div><!--$-->", '<!--/--><div class="flex items-center gap-4 text-xs text-muted-foreground"><span>Project: <!--$-->', "<!--/--></span><span>Phase: <!--$-->", "<!--/--></span><span>Progress: <!--$-->", '<!--/-->%</span></div></div><div class="flex gap-2"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"];
const ie = () => {
  const [y] = createSignal(m.getAllTasks() || []), [u, w] = createSignal(""), [l, T] = createSignal("all"), [c$2, k] = createSignal("all"), h = m.getAllUsers(), j = m.getAllProjects(), g = () => {
    let e = y();
    l() !== "all" && (e = e.filter((r) => r.assigneeId === l())), c$2() !== "all" && (e = e.filter((r) => r.status === c$2()));
    const o = u().toLowerCase();
    return o && (e = e.filter((r) => {
      var _a;
      return r.taskName.toLowerCase().includes(o) || ((_a = r.description) == null ? void 0 : _a.toLowerCase().includes(o));
    })), e;
  }, C = (e) => {
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
  }, S = (e) => {
    var _a;
    return ((_a = h.find((r) => r.id === e)) == null ? void 0 : _a.name) || "Unassigned";
  }, N = (e) => {
    var _a;
    return ((_a = j.find((r) => r.id === e)) == null ? void 0 : _a.name) || "Unknown Project";
  }, v = () => {
    const e = {};
    return g().forEach((o) => {
      const r = o.assigneeId || "unassigned";
      e[r] || (e[r] = []), e[r].push(o);
    }), e;
  };
  return ssr(q, ssrHydrationKey(), escape(createComponent(x, { placeholder: "Search tasks...", get value() {
    return u();
  }, onInput: (e) => w(e.target.value) })), escape(createComponent(f, { get value() {
    return l();
  }, onChange: T, get children() {
    return [ssr(z, ssrHydrationKey()), createComponent(For, { each: h, children: (e) => ssr(D, ssrHydrationKey() + ssrAttribute("value", escape(e.id, true), false), escape(e.name)) }), ssr(L, ssrHydrationKey())];
  } })), escape(createComponent(f, { get value() {
    return c$2();
  }, onChange: k, get children() {
    return [ssr(E, ssrHydrationKey()), ssr(M, ssrHydrationKey()), ssr(H, ssrHydrationKey()), ssr(K, ssrHydrationKey()), ssr(O, ssrHydrationKey())];
  } })), escape(createComponent(c, { variant: "outline", class: "flex items-center gap-2", get children() {
    return [createComponent(n, { class: "w-4 h-4" }), "More Filters"];
  } })), escape(g().length), escape(createComponent(For, { get each() {
    return Object.keys(v());
  }, children: (e) => {
    const o = v()[e], r = e === "unassigned" ? "Unassigned Tasks" : S(e);
    return ssr(G, ssrHydrationKey(), escape(createComponent(p, { class: "w-5 h-5 text-muted-foreground" })), escape(r), escape(o.length), escape(createComponent(For, { each: o, children: (i) => createComponent(t, { class: "p-4 ff-card", get children() {
      return ssr(Q, ssrHydrationKey(), escape(i.taskName), escape(createComponent(c$1, { get class() {
        return C(i.status);
      }, get children() {
        return i.status.replace("_", " ");
      } })), escape(createComponent(c$1, { get class() {
        return P(i.priority);
      }, get children() {
        return i.priority;
      } })), escape(createComponent(Show, { get when() {
        return i.description;
      }, get children() {
        return ssr(J, ssrHydrationKey(), escape(i.description));
      } })), escape(N(i.projectId)), escape(i.phaseId), escape(i.completionPercentage), escape(createComponent(c, { size: "sm", variant: "outline", children: "Edit" })), escape(createComponent(c, { size: "sm", variant: "outline", children: "Reassign" })));
    } }) })));
  } })), escape(createComponent(Show, { get when() {
    return g().length === 0;
  }, get children() {
    return createComponent(t, { class: "p-12 text-center ff-card", get children() {
      return [createComponent(p$1, { class: "w-16 h-16 text-muted-foreground mx-auto mb-4" }), ssr(R, ssrHydrationKey()), ssr(V, ssrHydrationKey(), u() || l() !== "all" || c$2() !== "all" ? "No tasks match your current filters" : "No tasks have been assigned to team members yet")];
    } });
  } })));
};

export { ie as default };
//# sourceMappingURL=team-tasks.mjs.map
