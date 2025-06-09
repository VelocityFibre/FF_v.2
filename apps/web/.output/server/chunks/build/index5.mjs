import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { m } from './mockData-D4l3Y6OF.mjs';
import { createSignal, createEffect, Show, Switch, Match, For } from 'solid-js';
import { c } from './badge-DswBmzwq.mjs';
import { c as c$1 } from './button-BIPZjNFL.mjs';
import { d as d$1 } from './progress-CllnRpSM.mjs';
import { t } from './card-BBkvPB4n.mjs';
import { p } from './user-DuHvLNkd.mjs';
import { p as p$1 } from './users-DmOdNUV-.mjs';
import { n } from './calendar-6DOOgMUY.mjs';
import { n as n$1 } from './clock-CX7dAqcH.mjs';
import { s } from './settings-B7H7OYKR.mjs';
import { v as v$1 } from './square-pen-Dn14tpLZ.mjs';
import { p as p$2 } from './eye-CixO-siI.mjs';
import { d } from './chart-column-0fmmXZyP.mjs';
import { m as m$1 } from './circle-check-big-D3taKIIs.mjs';
import { n as n$2 } from './triangle-alert-B-KKK4Eb.mjs';
import { D as De } from './routing-CDw4d2oX.mjs';
import './ThemeProvider-a-TiApaf.mjs';

const v = { admin: { viewTasks: "all", modifyWorkflow: true, editProjects: true, manageUsers: true }, project_manager: { viewTasks: "project_tasks", modifyWorkflow: true, editProjects: true, manageUsers: false }, field_technician: { viewTasks: "assigned_only", modifyWorkflow: false, editProjects: false, manageUsers: false }, design_engineer: { viewTasks: "team_and_assigned", modifyWorkflow: false, editProjects: false, manageUsers: false }, client: { viewTasks: "assigned_only", modifyWorkflow: false, editProjects: false, manageUsers: false } };
var V = ["<div", ' class="space-y-6">', "</div>"], B = ["<div", ' class="text-center py-8">Loading project overview...</div>'], L = ["<p", ' class="text-gray-300 mb-4">', "</p>"], R = ["<div", ' class="flex items-center gap-4 text-sm"><span class="flex items-center gap-2"><!--$-->', "<!--/-->Project Manager: John Doe</span></div>"], H = ["<span", ' class="flex items-center gap-2"><!--$-->', "<!--/--><!--$-->", "<!--/--> Team Members</span>"], z = ["<span", ' class="flex items-center gap-2"><!--$-->', "<!--/-->Started <!--$-->", "<!--/--></span>"], q = ["<span", ' class="flex items-center gap-2"><!--$-->', "<!--/-->Due <!--$-->", "<!--/--></span>"], F = ["<div", ' class="flex items-center gap-6 text-sm"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div>"], f = ["<a", ' href="', '">', "</a>"], G = ["<div", ' class="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg p-6"><div class="flex items-start justify-between"><div class="flex-1"><h1 class="text-3xl font-bold mb-2">', '</h1><div class="flex items-center gap-4 mb-4"><!--$-->', '<!--/--><span class="text-gray-300"><!--$-->', "<!--/-->% Complete</span></div><!--$-->", "<!--/--><!--$-->", '<!--/--></div><div class="flex items-center gap-2">', '</div></div><div class="mt-6 space-y-2"><div class="flex items-center justify-between"><span class="text-gray-300">Overall Progress</span><span class="font-bold text-xl"><!--$-->', "<!--/-->%</span></div><!--$-->", "<!--/--></div></div>"], J = ["<h2", ' class="text-xl font-semibold mb-6">Phase Progress</h2>'], K = ["<div", ' class="grid grid-cols-1 md:grid-cols-5 gap-4">', "</div>"], Q = ["<h2", ' class="text-xl font-semibold mb-6">', "</h2>"], X = ["<div", ' class="text-center pt-4"><a href="', '">', "</a></div>"], Y = ["<div", ' class="space-y-3"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], Z = ["<h2", ' class="text-xl font-semibold mb-6">Team Members</h2>'], ee = ["<div", ' class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">', "</div>"], te = ["<h2", ' class="text-xl font-semibold mb-6">Recent Activity</h2>'], re = ["<div", ' class="space-y-4">', "</div>"], se = ["<h2", ` class="text-xl font-semibold text-blue-900 mb-4">What's Happening Next</h2>`], ne = ["<div", ' class="flex items-start gap-3"><!--$-->', '<!--/--><div><h4 class="font-medium text-blue-900">', '</h4><p class="text-blue-800">', '</p><p class="text-sm text-blue-600">Expected: <!--$-->', "<!--/--></p></div></div>"], ae = ["<div", ' class="space-y-3">', "</div>"], le = ["<div", ' class="text-xs text-gray-500"><!--$-->', "<!--/-->/<!--$-->", "<!--/--> tasks</div>"], ie = ["<div", ' class="text-center p-4 rounded-lg border"><h3 class="font-medium text-gray-900 mb-2">', '</h3><div class="space-y-3"><!--$-->', '<!--/--><div class="space-y-1"><div class="text-sm text-gray-600"><!--$-->', "<!--/-->%</div><!--$-->", "<!--/--></div><!--$-->", "<!--/--></div></div>"], ce = ["<span", ">\u2022 Assigned to User <!--$-->", "<!--/--></span>"], oe = ["<span", ">\u2022 Due <!--$-->", "<!--/--></span>"], de = ["<div", ' class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"><div class="flex items-center gap-3"><!--$-->', '<!--/--><div><h4 class="font-medium text-gray-900">', '</h4><div class="flex items-center gap-2 text-sm text-gray-600"><span class="capitalize">', "</span><!--$-->", "<!--/--><!--$-->", '<!--/--></div></div></div><div class="flex items-center gap-3"><!--$-->', '<!--/--><div class="text-right"><div class="text-sm font-medium"><!--$-->', "<!--/-->%</div><!--$-->", "<!--/--></div></div></div>"], ge = ["<div", ' class="flex items-center gap-3 p-4 border rounded-lg"><!--$-->', '<!--/--><div><h4 class="font-medium text-gray-900">', '</h4><p class="text-sm text-gray-600 capitalize">', "</p></div></div>"], me = ["<div", ' class="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-blue-50"><!--$-->', '<!--/--><div><p class="text-gray-900">', '</p><p class="text-sm text-gray-600"><!--$-->', "<!--/--> \u2022 <!--$-->", "<!--/--></p></div></div>"];
const ue = (l) => {
  const [m$2, D] = createSignal(null);
  createEffect(() => {
    const r = m.getProjectOverview(l.projectId);
    D(r);
  });
  const b = () => {
    const r = v[l.currentUser.role];
    return ["all", "project_tasks"].includes(r.viewTasks);
  }, x = () => v[l.currentUser.role].modifyWorkflow, w = () => {
    const r = v[l.currentUser.role];
    return ["all", "project_tasks", "team_and_assigned"].includes(r.viewTasks);
  }, u = () => {
    const r = m$2();
    if (!r) return [];
    switch (v[l.currentUser.role].viewTasks) {
      case "all":
      case "project_tasks":
        return r.allTasks || [];
      case "team_and_assigned":
        return r.teamTasks || [];
      case "assigned_only":
        return r.myTasks || [];
      default:
        return [];
    }
  }, o = (r) => new Date(r).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }), j = (r) => ({ planning: "Planning & Permits", design: "Network Design", implementation: "Installation", testing: "Testing & Activation", deployment: "Go-Live & Handover" })[r] || r;
  return ssr(V, ssrHydrationKey(), escape(createComponent(Show, { get when() {
    return m$2();
  }, get fallback() {
    return ssr(B, ssrHydrationKey());
  }, children: (r) => [ssr(G, ssrHydrationKey(), escape(r().project.name), escape(createComponent(c, { variant: "secondary", class: "bg-white/20 text-white", get children() {
    return j(r().project.currentPhase);
  } })), escape(r().progress.overallProgress), escape(createComponent(Show, { get when() {
    return r().project.description;
  }, get children() {
    return ssr(L, ssrHydrationKey(), escape(r().project.description));
  } })), escape(createComponent(Switch, { get children() {
    return [createComponent(Match, { get when() {
      return l.currentUser.role === "client";
    }, get children() {
      return ssr(R, ssrHydrationKey(), escape(createComponent(p, { class: "w-4 h-4" })));
    } }), createComponent(Match, { get when() {
      return w();
    }, get children() {
      return ssr(F, ssrHydrationKey(), escape(createComponent(Show, { get when() {
        return r().teamMembers;
      }, get children() {
        return ssr(H, ssrHydrationKey(), escape(createComponent(p$1, { class: "w-4 h-4" })), escape(r().teamMembers.length));
      } })), escape(createComponent(Show, { get when() {
        return r().project.startDate;
      }, get children() {
        return ssr(z, ssrHydrationKey(), escape(createComponent(n, { class: "w-4 h-4" })), escape(o(r().project.startDate)));
      } })), escape(createComponent(Show, { get when() {
        return r().project.targetCompletionDate;
      }, get children() {
        return ssr(q, ssrHydrationKey(), escape(createComponent(n$1, { class: "w-4 h-4" })), escape(o(r().project.targetCompletionDate)));
      } })));
    } })];
  } })), escape(createComponent(Switch, { get children() {
    return [createComponent(Match, { get when() {
      return x();
    }, get children() {
      return [ssr(f, ssrHydrationKey(), `/projects/${escape(l.projectId, true)}/workflow`, escape(createComponent(c$1, { variant: "secondary", get children() {
        return [createComponent(s, { class: "w-4 h-4 mr-2" }), "Manage Workflow"];
      } }))), ssr(f, ssrHydrationKey(), `/admin/projects/${escape(l.projectId, true)}`, escape(createComponent(c$1, { variant: "secondary", get children() {
        return [createComponent(v$1, { class: "w-4 h-4 mr-2" }), "Edit Project"];
      } })))];
    } }), createComponent(Match, { get when() {
      return l.currentUser.role === "client";
    }, get children() {
      return ssr(f, ssrHydrationKey(), `/projects/${escape(l.projectId, true)}/client-portal`, escape(createComponent(c$1, { variant: "secondary", get children() {
        return [createComponent(p$2, { class: "w-4 h-4 mr-2" }), "View Progress"];
      } })));
    } }), createComponent(Match, { when: true, get children() {
      return ssr(f, ssrHydrationKey(), `/projects/${escape(l.projectId, true)}/timeline`, escape(createComponent(c$1, { variant: "secondary", get children() {
        return [createComponent(d, { class: "w-4 h-4 mr-2" }), "View Reports"];
      } })));
    } })];
  } })), escape(r().progress.overallProgress), escape(createComponent(d$1, { get value() {
    return r().progress.overallProgress;
  }, max: 100, class: "h-3 bg-gray-600" }))), createComponent(t, { class: "p-6", get children() {
    return [ssr(J, ssrHydrationKey()), ssr(K, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return r().progress.phases;
    }, children: (a) => ssr(ie, ssrHydrationKey(), escape(j(a.phase.phaseName)), escape(createComponent(c, { variant: "outline", get class() {
      return a.status === "completed" ? "bg-green-50 text-green-700" : a.status === "active" ? "bg-blue-50 text-blue-700" : "bg-gray-50 text-gray-500";
    }, get children() {
      return a.status;
    } })), escape(a.progress), escape(createComponent(d$1, { get value() {
      return a.progress;
    }, max: 100, class: "h-2" })), escape(createComponent(Show, { get when() {
      return b();
    }, get children() {
      return ssr(le, ssrHydrationKey(), escape(a.tasksCompleted), escape(a.tasksTotal));
    } }))) })))];
  } }), createComponent(Show, { get when() {
    return u().length > 0;
  }, get children() {
    return createComponent(t, { class: "p-6", get children() {
      return [ssr(Q, ssrHydrationKey(), escape(createComponent(Switch, { get children() {
        return [createComponent(Match, { get when() {
          return l.currentUser.role === "field_technician";
        }, children: "My Assigned Tasks" }), createComponent(Match, { get when() {
          return b();
        }, children: "All Project Tasks" }), createComponent(Match, { get when() {
          return w();
        }, children: "Team Tasks" })];
      } }))), ssr(Y, ssrHydrationKey(), escape(createComponent(For, { get each() {
        return u().slice(0, 5);
      }, children: (a) => ssr(de, ssrHydrationKey(), escape(createComponent(Switch, { get children() {
        return [createComponent(Match, { get when() {
          return a.status === "completed";
        }, get children() {
          return createComponent(m$1, { class: "w-5 h-5 text-green-600" });
        } }), createComponent(Match, { get when() {
          return a.urgencyStatus === "overdue";
        }, get children() {
          return createComponent(n$2, { class: "w-5 h-5 text-red-600" });
        } }), createComponent(Match, { when: true, get children() {
          return createComponent(n$1, { class: "w-5 h-5 text-gray-400" });
        } })];
      } })), escape(a.taskName), escape(a.phaseName), escape(createComponent(Show, { get when() {
        return w() && a.assigneeId;
      }, get children() {
        return ssr(ce, ssrHydrationKey(), escape(a.assigneeId));
      } })), escape(createComponent(Show, { get when() {
        return a.dueDate;
      }, get children() {
        return ssr(oe, ssrHydrationKey(), escape(o(a.dueDate)));
      } })), escape(createComponent(c, { variant: "outline", get class() {
        return a.urgencyStatus === "overdue" ? "text-red-600 border-red-200" : a.urgencyStatus === "due_today" ? "text-yellow-600 border-yellow-200" : "text-gray-600";
      }, get children() {
        return a.urgencyStatus.replace("_", " ");
      } })), escape(a.completionPercentage), escape(createComponent(d$1, { get value() {
        return a.completionPercentage;
      }, max: 100, class: "h-1 w-16" }))) })), escape(createComponent(Show, { get when() {
        return u().length > 5;
      }, get children() {
        return ssr(X, ssrHydrationKey(), `/tasks/my-tasks?project=${escape(l.projectId, true)}`, escape(createComponent(c$1, { variant: "outline", get children() {
          return ["View All ", u().length, " Tasks"];
        } })));
      } })))];
    } });
  } }), createComponent(Show, { get when() {
    return x() && r().teamMembers;
  }, get children() {
    return createComponent(t, { class: "p-6", get children() {
      return [ssr(Z, ssrHydrationKey()), ssr(ee, ssrHydrationKey(), escape(createComponent(For, { get each() {
        return r().teamMembers;
      }, children: (a) => ssr(ge, ssrHydrationKey(), escape(createComponent(p, { class: "w-10 h-10 text-gray-400" })), escape(a.name), escape(a.role.replace("_", " "))) })))];
    } });
  } }), createComponent(Show, { get when() {
    return x() && r().recentActivity;
  }, get children() {
    return createComponent(t, { class: "p-6", get children() {
      return [ssr(te, ssrHydrationKey()), ssr(re, ssrHydrationKey(), escape(createComponent(For, { get each() {
        var _a;
        return (_a = r().recentActivity) == null ? void 0 : _a.slice(0, 5);
      }, children: (a) => ssr(me, ssrHydrationKey(), escape(createComponent(n$1, { class: "w-5 h-5 text-blue-600 mt-0.5" })), escape(a.description), escape(a.user), escape(o(a.timestamp))) })))];
    } });
  } }), createComponent(Show, { get when() {
    return l.currentUser.role === "client";
  }, get children() {
    return createComponent(t, { class: "p-6 bg-blue-50 border-blue-200", get children() {
      return [ssr(se, ssrHydrationKey()), ssr(ae, ssrHydrationKey(), escape(createComponent(Show, { get when() {
        return r().progress.nextMilestone;
      }, get children() {
        return ssr(ne, ssrHydrationKey(), escape(createComponent(n, { class: "w-5 h-5 text-blue-600 mt-0.5" })), escape(r().progress.nextMilestone.name), escape(r().progress.nextMilestone.description), escape(o(r().progress.nextMilestone.estimatedDate)));
      } })))];
    } });
  } })] })));
};
var pe = ["<div", ' class="ff-page-container">', "</div>"];
const Ce = () => {
  const l = De(), m$1 = m.getCurrentUser("project_manager");
  return ssr(pe, ssrHydrationKey(), escape(createComponent(ue, { get projectId() {
    return l.id;
  }, currentUser: m$1 })));
};

export { Ce as default };
//# sourceMappingURL=index5.mjs.map
