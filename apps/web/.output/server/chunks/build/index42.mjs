import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { createSignal, Show, For } from 'solid-js';
import { m, x, c as c$1, a as n, y, t as t$1 } from '../nitro/nitro.mjs';
import { c } from './button-BIPZjNFL2.mjs';
import { t } from './card-BBkvPB4n2.mjs';
import { l } from './plus-CdiM-nIi.mjs';
import { p } from './eye-S1mCYWRf.mjs';
import { v } from './square-pen-DAEAUSjR.mjs';
import { m as m$1 } from './trash-2-DW59Q125.mjs';
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

var F = ["<h2", ' class="ff-section-title mb-6">Create New Project</h2>'], N = ["<div", ' class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="ff-label mb-2 block">Project Name *</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Target Completion Date</label><!--$-->', '<!--/--></div><div class="md:col-span-2"><label class="ff-label mb-2 block">Description</label><!--$-->', "<!--/--></div></div>"], O = ["<div", ' class="flex gap-4 mt-6"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], B = ["<section", ' class="ff-section">', "</section>"], z = ["<h3", ' class="ff-heading-medium text-card-foreground mb-2">No projects yet</h3>'], E = ["<p", ' class="text-muted-foreground mb-6">Create your first project to get started</p>'], T = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Project Management</h1><p class="ff-page-subtitle">Create and manage all projects in the system</p></div><!--$-->', "<!--/--></div></div><!--$-->", '<!--/--><section class="ff-section"><h2 class="ff-section-title">All Projects (<!--$-->', '<!--/-->)</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-6">', "</div><!--$-->", "<!--/--></section></div>"], q = ["<p", ' class="text-muted-foreground mb-3">', "</p>"], H = ["<div", ' class="flex items-start justify-between mb-4"><div class="flex-1"><h3 class="ff-card-title">', "</h3><!--$-->", "<!--/--></div></div>"], K = ["<span", ' class="flex items-center gap-1"><!--$-->', "<!--/-->Started <!--$-->", "<!--/--></span>"], L = ["<div", ' class="space-y-3 mb-4"><div class="flex items-center gap-3"><!--$-->', "<!--/--><!--$-->", '<!--/--></div><div class="flex items-center gap-4 text-sm text-muted-foreground"><span><!--$-->', "<!--/-->% Complete</span><!--$-->", "<!--/--></div></div>"], M = ["<div", ' class="flex items-center gap-2"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div>"];
const le = () => {
  const i = m.getAllProjects();
  console.log("mockAPI.getAllProjects():", i), console.log("projects length:", i == null ? void 0 : i.length), console.log("First project:", i == null ? void 0 : i[0]);
  const [o, h] = createSignal(i || []), [$, c$2] = createSignal(false), [s, d] = createSignal({ name: "", description: "", currentPhase: "planning", completionPercentage: 0, startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], targetCompletionDate: "" }), x$1 = () => {
    const e = s();
    if (!e.name) return;
    const m = { id: `project-${Date.now()}`, name: e.name, description: e.description || "", currentPhase: e.currentPhase || "planning", completionPercentage: 0, startDate: e.startDate || (/* @__PURE__ */ new Date()).toISOString(), targetCompletionDate: e.targetCompletionDate, createdAt: (/* @__PURE__ */ new Date()).toISOString(), updatedAt: (/* @__PURE__ */ new Date()).toISOString(), clientId: "user-3", status: "active" };
    h([...o(), m]), d({ name: "", description: "", currentPhase: "planning", completionPercentage: 0, startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], targetCompletionDate: "" }), c$2(false);
  }, P = (e) => {
    confirm("Are you sure you want to delete this project?") && h(o().filter((m) => m.id !== e));
  }, y$1 = (e) => {
    switch (e) {
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "on_hold":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, C = (e) => {
    switch (e) {
      case "planning":
        return "bg-purple-100 text-purple-800";
      case "design":
        return "bg-blue-100 text-blue-800";
      case "implementation":
        return "bg-orange-100 text-orange-800";
      case "testing":
        return "bg-yellow-100 text-yellow-800";
      case "deployment":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return ssr(T, ssrHydrationKey(), escape(createComponent(c, { onClick: () => c$2(true), class: "bg-primary text-primary-foreground", get children() {
    return [createComponent(l, { class: "w-4 h-4 mr-2" }), "New Project"];
  } })), escape(createComponent(Show, { get when() {
    return $();
  }, get children() {
    return ssr(B, ssrHydrationKey(), escape(createComponent(t, { class: "p-6 ff-card", get children() {
      return [ssr(F, ssrHydrationKey()), ssr(N, ssrHydrationKey(), escape(createComponent(x, { placeholder: "Enter project name", get value() {
        return s().name || "";
      }, onInput: (e) => d({ ...s(), name: e.target.value }) })), escape(createComponent(x, { type: "date", get value() {
        return s().targetCompletionDate || "";
      }, onInput: (e) => d({ ...s(), targetCompletionDate: e.target.value }) })), escape(createComponent(x, { placeholder: "Enter project description", get value() {
        return s().description || "";
      }, onInput: (e) => d({ ...s(), description: e.target.value }) }))), ssr(O, ssrHydrationKey(), escape(createComponent(c, { onClick: x$1, class: "bg-primary text-primary-foreground", children: "Create Project" })), escape(createComponent(c, { variant: "outline", onClick: () => c$2(false), children: "Cancel" })))];
    } })));
  } })), escape(o().length), escape(createComponent(For, { get each() {
    return o();
  }, children: (e) => createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(H, ssrHydrationKey(), escape(e.name), escape(createComponent(Show, { get when() {
      return e.description;
    }, get children() {
      return ssr(q, ssrHydrationKey(), escape(e.description));
    } }))), ssr(L, ssrHydrationKey(), escape(createComponent(c$1, { get class() {
      return y$1(e.status || "active");
    }, get children() {
      return e.status || "active";
    } })), escape(createComponent(c$1, { get class() {
      return C(e.currentPhase);
    }, get children() {
      return e.currentPhase.replace("_", " ");
    } })), escape(e.completionPercentage), escape(createComponent(Show, { get when() {
      return e.startDate;
    }, get children() {
      return ssr(K, ssrHydrationKey(), escape(createComponent(n, { class: "w-4 h-4" })), escape(new Date(e.startDate).toLocaleDateString()));
    } }))), ssr(M, ssrHydrationKey(), escape(createComponent(y, { get href() {
      return `/projects/${e.id}`;
    }, get children() {
      return createComponent(c, { size: "sm", variant: "outline", get children() {
        return [createComponent(p, { class: "w-4 h-4 mr-1" }), "View"];
      } });
    } })), escape(createComponent(y, { get href() {
      return `/admin/projects/${e.id}`;
    }, get children() {
      return createComponent(c, { size: "sm", variant: "outline", get children() {
        return [createComponent(v, { class: "w-4 h-4 mr-1" }), "Edit"];
      } });
    } })), escape(createComponent(c, { size: "sm", variant: "outline", onClick: () => P(e.id), class: "text-red-600 hover:bg-red-50", get children() {
      return [createComponent(m$1, { class: "w-4 h-4 mr-1" }), "Delete"];
    } })))];
  } }) })), escape(createComponent(Show, { get when() {
    return o().length === 0;
  }, get children() {
    return createComponent(t, { class: "p-12 text-center ff-card", get children() {
      return [createComponent(t$1, { class: "w-16 h-16 text-muted-foreground mx-auto mb-4" }), ssr(z, ssrHydrationKey()), ssr(E, ssrHydrationKey()), createComponent(c, { onClick: () => c$2(true), class: "bg-primary text-primary-foreground", get children() {
        return [createComponent(l, { class: "w-4 h-4 mr-2" }), "Create First Project"];
      } })];
    } });
  } })));
};

export { le as default };
//# sourceMappingURL=index42.mjs.map
