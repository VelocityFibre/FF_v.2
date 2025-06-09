import { createComponent, ssr, ssrHydrationKey, isServer, escape, getRequestEvent, delegateEvents, mergeProps } from 'solid-js/web';
import { createSignal, createEffect, Suspense, Show, onCleanup, For, children, createMemo, getOwner, sharedConfig, untrack, on, createRoot } from 'solid-js';
import { R as Rt$1 } from '../nitro/nitro.mjs';
import { W, z, A } from './ThemeProvider-a-TiApaf.mjs';
import { n } from './calendar-6DOOgMUY.mjs';
import { n as n$1 } from './clock-CX7dAqcH.mjs';
import { t } from './folder-open-BDmM4pk8.mjs';
import { f } from './phone-DhZMu1hD.mjs';
import { s } from './settings-B7H7OYKR.mjs';
import { t as t$1 } from './user-plus-BuOm5O4z.mjs';
import { p } from './users-DmOdNUV-.mjs';
import { d } from './chart-column-0fmmXZyP.mjs';
import { h } from './square-check-big-CosC2anP.mjs';
import { M as Me$1, O as Oe$1, z as ze$1, C as Ce, v as ve, U as Ue$1, H as He$1, a as I, e as ee, g as ge, _ as _e, Q, q as qe$1 } from './routing-CDw4d2oX.mjs';
import { c } from './badge-DswBmzwq.mjs';
import { y } from './components-CWgRo50f.mjs';
import { M, s as s$2, i, c as c$1 } from './zap-BiajdHZJ.mjs';
import { s as s$1 } from './bell-Cd_Dsz6z.mjs';
import { p as p$1 } from './user-DuHvLNkd.mjs';
import { m } from './mockData-D4l3Y6OF.mjs';
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

var Pe = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Te = (e) => createComponent(z, mergeProps(e, { name: "ChevronDown", iconNode: Pe })), G = Te, Ue = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ae = (e) => createComponent(z, mergeProps(e, { name: "ChevronRight", iconNode: Ue })), Ne = Ae, Me = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]], Oe = (e) => createComponent(z, mergeProps(e, { name: "CirclePlus", iconNode: Me })), Ee = Oe, Fe = [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], Ie = (e) => createComponent(z, mergeProps(e, { name: "FileText", iconNode: Fe })), ze = Ie, De = [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "1d0kgt" }]], qe = (e) => createComponent(z, mergeProps(e, { name: "House", iconNode: De })), L = qe, He = [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]], Be = (e) => createComponent(z, mergeProps(e, { name: "LogOut", iconNode: He })), Ve = Be, Ke = [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]], We = (e) => createComponent(z, mergeProps(e, { name: "Menu", iconNode: Ke })), X = We, Ge = [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]], Xe = (e) => createComponent(z, mergeProps(e, { name: "Search", iconNode: Ge })), Je = Xe, Ze = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], Qe = (e) => createComponent(z, mergeProps(e, { name: "X", iconNode: Ze })), Ye = Qe;
const J = (e) => (r) => {
  const { base: s } = r, n = children(() => r.children), t = createMemo(() => Oe$1(n(), r.base || ""));
  let l;
  const c = ze$1(e, t, () => l, { base: s, singleFlight: r.singleFlight, transformUrl: r.transformUrl });
  return e.create && e.create(c), createComponent(Ce.Provider, { value: c, get children() {
    return createComponent(et, { routerState: c, get root() {
      return r.root;
    }, get preload() {
      return r.rootPreload || r.rootLoad;
    }, get children() {
      return [(l = getOwner()) && null, createComponent(tt, { routerState: c, get branches() {
        return t();
      } })];
    } });
  } });
};
function et(e) {
  const r = e.routerState.location, s = e.routerState.params, n = createMemo(() => e.preload && untrack(() => {
    e.preload({ params: s, location: r, intent: Ue$1() || "initial" });
  }));
  return createComponent(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (t) => createComponent(t, { params: s, location: r, get data() {
    return n();
  }, get children() {
    return e.children;
  } }) });
}
function tt(e) {
  if (isServer) {
    const t = getRequestEvent();
    if (t && t.router && t.router.dataOnly) {
      rt(t, e.routerState, e.branches);
      return;
    }
    t && ((t.router || (t.router = {})).matches || (t.router.matches = e.routerState.matches().map(({ route: l, path: c, params: i }) => ({ path: l.originalPath, pattern: l.pattern, match: c, params: i, info: l.info }))));
  }
  const r = [];
  let s;
  const n = createMemo(on(e.routerState.matches, (t, l, c) => {
    let i = l && t.length === l.length;
    const h = [];
    for (let f = 0, k = t.length; f < k; f++) {
      const j = l && l[f], $ = t[f];
      c && j && $.route.key === j.route.key ? h[f] = c[f] : (i = false, r[f] && r[f](), createRoot((P) => {
        r[f] = P, h[f] = He$1(e.routerState, h[f - 1] || e.routerState.base, H(() => n()[f + 1]), () => e.routerState.matches()[f]);
      }));
    }
    return r.splice(t.length).forEach((f) => f()), c && i ? c : (s = h[0], h);
  }));
  return H(() => n() && s)();
}
const H = (e) => () => createComponent(Show, { get when() {
  return e();
}, keyed: true, children: (r) => createComponent(ee.Provider, { value: r, get children() {
  return r.outlet();
} }) });
function rt(e, r, s) {
  const n = new URL(e.request.url), t = I(s, new URL(e.router.previousUrl || e.request.url).pathname), l = I(s, n.pathname);
  for (let c = 0; c < l.length; c++) {
    (!t[c] || l[c].route !== t[c].route) && (e.router.dataOnly = true);
    const { route: i, params: h } = l[c];
    i.preload && i.preload({ params: h, location: r.location, intent: "preload" });
  }
}
function at([e, r], s, n) {
  return [e, n ? (t) => r(n(t)) : r];
}
function nt(e) {
  let r = false;
  const s = (t) => typeof t == "string" ? { value: t } : t, n = at(createSignal(s(e.get()), { equals: (t, l) => t.value === l.value && t.state === l.state }), void 0, (t) => (!r && e.set(t), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), t));
  return e.init && onCleanup(e.init((t = e.get()) => {
    r = true, n[1](s(t)), r = false;
  })), J({ signal: n, create: e.create, utils: e.utils });
}
function ot(e, r, s) {
  return e.addEventListener(r, s), () => e.removeEventListener(r, s);
}
function st(e, r) {
  const s = e && document.getElementById(e);
  s ? s.scrollIntoView() : r && window.scrollTo(0, 0);
}
function it(e) {
  const r = new URL(e);
  return r.pathname + r.search;
}
function lt(e) {
  let r;
  const s = { value: e.url || (r = getRequestEvent()) && it(r.request.url) || "" };
  return J({ signal: [() => s, (n) => Object.assign(s, n)] })(e);
}
const ct = /* @__PURE__ */ new Map();
function dt(e = true, r = false, s = "/_server", n) {
  return (t) => {
    const l = t.base.path(), c = t.navigatorFactory(t.base);
    let i, h;
    function f(d) {
      return d.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function k(d) {
      if (d.defaultPrevented || d.button !== 0 || d.metaKey || d.altKey || d.ctrlKey || d.shiftKey) return;
      const u = d.composedPath().find((F) => F instanceof Node && F.nodeName.toUpperCase() === "A");
      if (!u || r && !u.hasAttribute("link")) return;
      const b = f(u), m = b ? u.href.baseVal : u.href;
      if ((b ? u.target.baseVal : u.target) || !m && !u.hasAttribute("state")) return;
      const R = (u.getAttribute("rel") || "").split(/\s+/);
      if (u.hasAttribute("download") || R && R.includes("external")) return;
      const T = b ? new URL(m, document.baseURI) : new URL(m);
      if (!(T.origin !== window.location.origin || l && T.pathname && !T.pathname.toLowerCase().startsWith(l.toLowerCase()))) return [u, T];
    }
    function j(d) {
      const u = k(d);
      if (!u) return;
      const [b, m] = u, E = t.parsePath(m.pathname + m.search + m.hash), R = b.getAttribute("state");
      d.preventDefault(), c(E, { resolve: false, replace: b.hasAttribute("replace"), scroll: !b.hasAttribute("noscroll"), state: R ? JSON.parse(R) : void 0 });
    }
    function $(d) {
      const u = k(d);
      if (!u) return;
      const [b, m] = u;
      n && (m.pathname = n(m.pathname)), t.preloadRoute(m, b.getAttribute("preload") !== "false");
    }
    function P(d) {
      clearTimeout(i);
      const u = k(d);
      if (!u) return h = null;
      const [b, m] = u;
      h !== b && (n && (m.pathname = n(m.pathname)), i = setTimeout(() => {
        t.preloadRoute(m, b.getAttribute("preload") !== "false"), h = b;
      }, 20));
    }
    function O(d) {
      if (d.defaultPrevented) return;
      let u = d.submitter && d.submitter.hasAttribute("formaction") ? d.submitter.getAttribute("formaction") : d.target.getAttribute("action");
      if (!u) return;
      if (!u.startsWith("https://action/")) {
        const m = new URL(u, ve);
        if (u = t.parsePath(m.pathname + m.search), !u.startsWith(s)) return;
      }
      if (d.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const b = ct.get(u);
      if (b) {
        d.preventDefault();
        const m = new FormData(d.target, d.submitter);
        b.call({ r: t, f: d.target }, d.target.enctype === "multipart/form-data" ? m : new URLSearchParams(m));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", j), e && (document.addEventListener("mousemove", P, { passive: true }), document.addEventListener("focusin", $, { passive: true }), document.addEventListener("touchstart", $, { passive: true })), document.addEventListener("submit", O), onCleanup(() => {
      document.removeEventListener("click", j), e && (document.removeEventListener("mousemove", P), document.removeEventListener("focusin", $), document.removeEventListener("touchstart", $)), document.removeEventListener("submit", O);
    });
  };
}
function ut(e) {
  if (isServer) return lt(e);
  const r = () => {
    const n = window.location.pathname.replace(/^\/+/, "/") + window.location.search, t = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: n + window.location.hash, state: t };
  }, s = ge();
  return nt({ get: r, set({ value: n, replace: t, scroll: l, state: c }) {
    t ? window.history.replaceState(_e(c), "", n) : window.history.pushState(c, "", n), st(decodeURIComponent(window.location.hash.slice(1)), l), Q();
  }, init: (n) => ot(window, "popstate", qe$1(n, (t) => {
    if (t && t < 0) return !s.confirm(t);
    {
      const l = r();
      return !s.confirm(l.value, { state: l.state });
    }
  })), create: dt(e.preload, e.explicitLinks, e.actionBase, e.transformUrl), utils: { go: (n) => window.history.go(n), beforeLeave: s } })(e);
}
const ht = { admin: [{ id: "dashboard", label: "Dashboard", href: "/dashboard", icon: L }, { id: "projects", label: "Projects", href: "/admin/projects", icon: t, children: [{ id: "all-projects", label: "All Projects", href: "/admin/projects", icon: t }, { id: "create-project", label: "Create Project", href: "/admin/projects/new", icon: Ee }] }, { id: "tasks", label: "Tasks", href: "/admin/tasks", icon: h, children: [{ id: "all-tasks", label: "All Tasks", href: "/admin/tasks", icon: h }, { id: "my-tasks", label: "My Tasks", href: "/tasks/my-tasks", icon: h }, { id: "overdue-tasks", label: "Overdue Tasks", href: "/admin/tasks?filter=overdue", icon: n$1 }] }, { id: "users", label: "Users", href: "/admin/users", icon: p, children: [{ id: "all-users", label: "All Users", href: "/admin/users", icon: p }, { id: "add-user", label: "Add User", href: "/admin/users/new", icon: t$1 }] }, { id: "reports", label: "Reports", href: "/admin/reports", icon: d }, { id: "settings", label: "Settings", href: "/admin/settings", icon: s }, { id: "role-switcher", label: "Role Switcher", href: "/admin/role-switcher", icon: p }], project_manager: [{ id: "dashboard", label: "Dashboard", href: "/dashboard", icon: L }, { id: "projects", label: "My Projects", href: "/projects", icon: t }, { id: "tasks", label: "Tasks", href: "/tasks/my-tasks", icon: h, children: [{ id: "project-tasks", label: "Project Tasks", href: "/tasks/project-tasks", icon: h }, { id: "my-tasks", label: "My Tasks", href: "/tasks/my-tasks", icon: h }, { id: "team-tasks", label: "Team Tasks", href: "/tasks/team-tasks", icon: p }] }, { id: "team", label: "Team", href: "/team", icon: p }, { id: "reports", label: "Reports", href: "/reports", icon: d }, { id: "settings", label: "Settings", href: "/settings", icon: s }], field_technician: [{ id: "dashboard", label: "Dashboard", href: "/dashboard", icon: L }, { id: "tasks", label: "My Tasks", href: "/tasks/my-tasks", icon: h, badge: "3" }, { id: "projects", label: "My Projects", href: "/projects", icon: t }, { id: "timetracking", label: "Time Tracking", href: "/time-tracking", icon: n$1 }, { id: "reports", label: "Reports", href: "/reports/personal", icon: ze }], design_engineer: [{ id: "dashboard", label: "Dashboard", href: "/dashboard", icon: L }, { id: "tasks", label: "My Tasks", href: "/tasks/my-tasks", icon: h }, { id: "projects", label: "Projects", href: "/projects", icon: t }, { id: "calendar", label: "Calendar", href: "/calendar", icon: n }, { id: "reports", label: "Reports", href: "/reports", icon: d }], client: [{ id: "dashboard", label: "Dashboard", href: "/dashboard", icon: L }, { id: "projects", label: "My Projects", href: "/projects", icon: t }, { id: "reports", label: "Progress Reports", href: "/reports", icon: d }, { id: "support", label: "Support", href: "/support", icon: f }] }, ft = (e) => ht[e] || [];
var mt = ["<span", ' class="truncate">', "</span>"], gt = ["<button", ' class="', '">', "</button>"], pt = ["<div", ' class="mt-1 space-y-1">', "</div>"], bt = ["<div", ' class="ff-nav-item"><div class="flex items-center"><!--$-->', "<!--/--><!--$-->", "<!--/--></div><!--$-->", "<!--/--></div>"], vt = ["<div", ' class="flex items-center gap-3"><div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"><span class="text-primary-foreground font-bold text-sm">FF</span></div><div><h1 class="font-semibold text-foreground">FibreFlow</h1><p class="text-xs text-muted-foreground capitalize">', "</p></div></div>"], wt = ["<div", ' class="border-t border-border p-4"><div class="flex items-center gap-3"><div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center"><span class="text-sm font-medium text-accent-foreground">', '</span></div><div class="flex-1 min-w-0"><p class="text-sm font-medium text-foreground truncate">', '</p><p class="text-xs text-muted-foreground truncate">', "</p></div></div></div>"], xt = ["<div", ' class="ff-sidebar flex flex-col h-full bg-card border-r border-border"><div class="flex items-center justify-between p-4 border-b border-border"><!--$-->', '<!--/--><button class="lg:hidden p-1 rounded hover:bg-accent text-muted-foreground">', '</button><button class="hidden lg:block p-1 rounded hover:bg-accent text-muted-foreground">', '</button></div><nav class="flex-1 overflow-y-auto p-4 space-y-2">', "</nav><!--$-->", "<!--/--></div>"], yt = ["<div", ' class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"><span class="text-primary-foreground font-bold text-sm">FF</span></div>'];
const kt = (e) => {
  const r = Me$1(), [s, n] = createSignal(/* @__PURE__ */ new Set()), t = () => ft(e.currentUser.role), l = (i) => r.pathname === i || r.pathname.startsWith(i + "/"), c$1 = ({ item: i, depth: h = 0 }) => {
    const f = i.children && i.children.length > 0, k = () => s().has(i.id), j = () => l(i.href);
    return ssr(bt, ssrHydrationKey(), escape(createComponent(y, { get href() {
      return i.href;
    }, get class() {
      return `
              flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              transition-colors duration-200 flex-1
              ${j() ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}
              ${e.collapsed && h === 0 ? "justify-center px-2" : ""}
              ${h > 0 ? "ml-6 pl-6 border-l border-border" : ""}
            `;
    }, onClick: () => e.onClose(), get children() {
      return [createComponent(i.icon, { get class() {
        return `flex-shrink-0 ${e.collapsed && h === 0 ? "w-5 h-5" : "w-4 h-4"}`;
      } }), createComponent(Show, { get when() {
        return !e.collapsed || h > 0;
      }, get children() {
        return [ssr(mt, ssrHydrationKey(), escape(i.label)), createComponent(Show, { get when() {
          return i.badge;
        }, get children() {
          return createComponent(c, { variant: "secondary", class: "ml-auto text-xs", get children() {
            return i.badge;
          } });
        } })];
      } })];
    } })), escape(createComponent(Show, { get when() {
      return f && (!e.collapsed || h > 0);
    }, get children() {
      return ssr(gt, ssrHydrationKey(), `
                p-1 rounded hover:bg-accent text-muted-foreground 
                transition-colors duration-200 ml-1
              `, k() ? escape(createComponent(G, { class: "w-4 h-4" })) : escape(createComponent(Ne, { class: "w-4 h-4" })));
    } })), escape(createComponent(Show, { get when() {
      return f && k() && (!e.collapsed || h > 0);
    }, get children() {
      return ssr(pt, ssrHydrationKey(), escape(createComponent(For, { get each() {
        return i.children;
      }, children: ($) => createComponent(c$1, { item: $, depth: h + 1 }) })));
    } })));
  };
  return ssr(xt, ssrHydrationKey(), escape(createComponent(Show, { get when() {
    return !e.collapsed;
  }, get fallback() {
    return ssr(yt, ssrHydrationKey());
  }, get children() {
    return ssr(vt, ssrHydrationKey(), escape(e.currentUser.role.replace("_", " ")));
  } })), escape(createComponent(Ye, { class: "w-5 h-5" })), escape(createComponent(X, { class: "w-4 h-4" })), escape(createComponent(For, { get each() {
    return t();
  }, children: (i) => createComponent(c$1, { item: i }) })), escape(createComponent(Show, { get when() {
    return !e.collapsed;
  }, get children() {
    return ssr(wt, ssrHydrationKey(), escape(e.currentUser.name.split(" ").map((i) => i[0]).join("")), escape(e.currentUser.name), escape(e.currentUser.email));
  } })));
};
var $t = ["<div", ' class="relative"><button class="p-2 rounded-lg bg-card border border-border hover:bg-accent transition-colors duration-200 shadow-sm" title="Switch theme">', "</button><!--$-->", "<!--/--></div>"], _t = ["<div", ' class="fixed inset-0 z-40"></div>'], jt = ["<div", ' class="absolute right-0 top-full mt-2 z-50 bg-card border border-border rounded-lg shadow-lg p-1 min-w-[120px]">', "</div>"], St = ["<button", ' class="', '"><!--$-->', "<!--/--><span>", "</span></button>"];
function Rt() {
  const { theme: e, setTheme: r } = A(), [s, n] = createSignal(false), t = [{ value: "light", icon: M, label: "Light" }, { value: "dark", icon: s$2, label: "Dark" }, { value: "vf", icon: i, label: "VF" }, { value: "fibreflow", icon: c$1, label: "Flow" }], l = () => t.find((i) => i.value === e()), c = () => {
    var _a;
    return ((_a = l()) == null ? void 0 : _a.icon) || M;
  };
  return ssr($t, ssrHydrationKey(), escape(createComponent(c, { class: "w-4 h-4 text-foreground" })), s() && escape([ssr(_t, ssrHydrationKey()), ssr(jt, ssrHydrationKey(), escape(t.map((i) => {
    const h = i.icon, f = e() === i.value;
    return ssr(St, ssrHydrationKey(), `
                    w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-200
                    ${f ? "bg-accent text-accent-foreground font-medium" : "text-foreground hover:bg-accent/50"}
                  `, escape(createComponent(h, { class: "w-4 h-4" })), escape(i.label));
  })))]));
}
var Ct = ["<div", ' class="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50"><div class="p-3"><p class="text-sm text-muted-foreground">Start typing to search...</p></div></div>'], Lt = ["<div", ' class="absolute top-full right-0 mt-1 w-80 bg-card border border-border rounded-lg shadow-lg z-50"><div class="p-4 border-b border-border"><h3 class="font-semibold text-foreground">Notifications</h3></div><div class="p-3"><p class="text-sm text-muted-foreground">No new notifications</p></div></div>'], Pt = ["<div", ' class="hidden md:block text-left"><p class="text-sm font-medium text-foreground">', '</p><p class="text-xs text-muted-foreground capitalize">', "</p></div>"], Tt = ["<div", ' class="absolute top-full right-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg z-50"><div class="p-2"><a href="/profile" class="flex items-center gap-2 px-3 py-2 text-sm rounded hover:bg-accent transition-colors"><!--$-->', '<!--/-->Profile</a><a href="/settings" class="flex items-center gap-2 px-3 py-2 text-sm rounded hover:bg-accent transition-colors"><!--$-->', '<!--/-->Settings</a><hr class="my-1 border-border"><button class="flex items-center gap-2 px-3 py-2 text-sm rounded hover:bg-accent transition-colors w-full text-left text-destructive"><!--$-->', "<!--/-->Logout</button></div></div>"], Ut = ["<header", ' class="ff-topbar flex items-center justify-between h-16 px-4 bg-card border-b border-border"><div class="flex items-center gap-4"><button class="lg:hidden p-2 rounded-lg hover:bg-accent text-muted-foreground">', '</button><div class="', '"><div class="relative"><!--$-->', '<!--/--><input type="text" placeholder="Search projects, tasks, users..." class="', '"></div><!--$-->', '<!--/--></div></div><div class="flex items-center gap-2"><!--$-->', '<!--/--><div class="relative"><button class="relative p-2 rounded-lg hover:bg-accent text-muted-foreground transition-colors"><!--$-->', "<!--/--><!--$-->", "<!--/--></button><!--$-->", '<!--/--></div><div class="relative"><button class="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"><div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center"><span class="text-primary-foreground text-sm font-medium">', "</span></div><!--$-->", "<!--/--><!--$-->", "<!--/--></button><!--$-->", "<!--/--></div></div></header>"];
const At = (e) => {
  const [r, s$2] = createSignal(false), [n, t] = createSignal(false), [l, c$1] = createSignal(false), i = 3;
  return ssr(Ut, ssrHydrationKey(), escape(createComponent(X, { class: "w-5 h-5" })), `
          relative transition-all duration-200
          ${r() ? "w-80" : "w-64"}
          hidden sm:block
        `, escape(createComponent(Je, { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" })), `
                w-full pl-10 pr-4 py-2 bg-accent/50 border border-border rounded-lg
                text-sm placeholder:text-muted-foreground
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                transition-all duration-200
              `, escape(createComponent(Show, { get when() {
    return r();
  }, get children() {
    return ssr(Ct, ssrHydrationKey());
  } })), escape(createComponent(Rt, {})), escape(createComponent(s$1, { class: "w-5 h-5" })), escape(createComponent(Show, { when: i > 0, get children() {
    return createComponent(c, { variant: "destructive", class: "absolute -top-1 -right-1 min-w-[18px] h-[18px] text-xs flex items-center justify-center p-0", children: i });
  } })), escape(createComponent(Show, { get when() {
    return l();
  }, get children() {
    return ssr(Lt, ssrHydrationKey());
  } })), escape(e.currentUser.name.split(" ").map((h) => h[0]).join("")), escape(createComponent(Show, { get when() {
    return !e.sidebarCollapsed;
  }, get children() {
    return ssr(Pt, ssrHydrationKey(), escape(e.currentUser.name), escape(e.currentUser.role.replace("_", " ")));
  } })), escape(createComponent(G, { class: "w-4 h-4 text-muted-foreground" })), escape(createComponent(Show, { get when() {
    return n();
  }, get children() {
    return ssr(Tt, ssrHydrationKey(), escape(createComponent(p$1, { class: "w-4 h-4" })), escape(createComponent(s, { class: "w-4 h-4" })), escape(createComponent(Ve, { class: "w-4 h-4" })));
  } })));
};
var Nt = ["<div", ' class="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>'], Mt = ["<div", ' class="ff-app-layout flex h-screen bg-background"><!--$-->', '<!--/--><div class="', '">', '</div><div class="flex-1 flex flex-col overflow-hidden"><!--$-->', '<!--/--><main class="flex-1 overflow-y-auto bg-gray-50"><div class="h-full">', "</div></main></div></div>"];
const Ot = (e) => {
  const [r, s] = createSignal(false), [n, t] = createSignal(false), l = () => s(!r()), c = () => t(!n());
  return ssr(Mt, ssrHydrationKey(), escape(createComponent(Show, { get when() {
    return r();
  }, get children() {
    return ssr(Nt, ssrHydrationKey());
  } })), `
        fixed lg:relative inset-y-0 left-0 z-50 lg:z-0
        transition-transform duration-300 ease-in-out
        w-[280px]
        ${n() ? "lg:w-16" : "lg:w-[280px]"}
        ${r() ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `, escape(createComponent(kt, { get currentUser() {
    return e.currentUser;
  }, get collapsed() {
    return n();
  }, onToggleCollapse: c, onClose: () => s(false) })), escape(createComponent(At, { get currentUser() {
    return e.currentUser;
  }, onToggleSidebar: l, get sidebarCollapsed() {
    return n();
  } })), escape(e.children));
};
var Et = ["<div", ' class="flex items-center justify-center min-h-screen">Loading...</div>'];
function hr() {
  const [e, r] = createSignal("admin");
  createEffect(() => {
  });
  const s = () => m.getCurrentUser(e());
  return createComponent(W, { get children() {
    return createComponent(ut, { root: (n) => createComponent(Ot, { get currentUser() {
      return s();
    }, get children() {
      return createComponent(Suspense, { get fallback() {
        return ssr(Et, ssrHydrationKey());
      }, get children() {
        return n.children;
      } });
    } }), get children() {
      return createComponent(Rt$1, {});
    } });
  } });
}

export { hr as default };
//# sourceMappingURL=app-DrxKUH8-.mjs.map
