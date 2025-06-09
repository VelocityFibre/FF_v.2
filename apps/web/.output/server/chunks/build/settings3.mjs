import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal } from 'solid-js';
import { b as p, x, f, s } from '../nitro/nitro.mjs';
import { c } from './button-BIPZjNFL2.mjs';
import { t } from './card-BBkvPB4n2.mjs';
import { k, p as p$1, s as s$1 } from './shield-DLTUrCcj.mjs';
import { y } from './ThemeSwitcher-xIS9PB6a.mjs';
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

var w = ["<div", ' class="flex items-center gap-3 mb-6"><!--$-->', '<!--/--><h2 class="ff-section-title mb-0">Profile Settings</h2></div>'], T = ["<option", ' value="America/New_York">Eastern Time (ET)</option>'], C = ["<option", ' value="America/Chicago">Central Time (CT)</option>'], A = ["<option", ' value="America/Denver">Mountain Time (MT)</option>'], S = ["<option", ' value="America/Los_Angeles">Pacific Time (PT)</option>'], j = ["<option", ' value="UTC">UTC</option>'], D = ["<option", ' value="en">English</option>'], E = ["<option", ' value="es">Spanish</option>'], P = ["<option", ' value="fr">French</option>'], N = ["<div", ' class="space-y-4"><div><label class="ff-label mb-2 block">Full Name</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Email Address</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Phone Number</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Timezone</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Language</label><!--$-->', "<!--/--></div></div>"], I = ["<div", ' class="flex items-center gap-3 mb-6"><!--$-->', '<!--/--><h2 class="ff-section-title mb-0">Notification Preferences</h2></div>'], M = ["<div", ' class="space-y-4"><div class="flex items-center justify-between"><div><h4 class="font-medium text-card-foreground">Email Notifications</h4><p class="text-sm text-muted-foreground">Receive updates via email</p></div><input type="checkbox"', ' class="w-4 h-4"></div><div class="flex items-center justify-between"><div><h4 class="font-medium text-card-foreground">Push Notifications</h4><p class="text-sm text-muted-foreground">Mobile and web push notifications</p></div><input type="checkbox"', ' class="w-4 h-4"></div><div class="flex items-center justify-between"><div><h4 class="font-medium text-card-foreground">Desktop Notifications</h4><p class="text-sm text-muted-foreground">Show desktop alerts</p></div><input type="checkbox"', ' class="w-4 h-4"></div><hr class="border-border"><div class="flex items-center justify-between"><div><h4 class="font-medium text-card-foreground">Task Updates</h4><p class="text-sm text-muted-foreground">Notifications for task changes</p></div><input type="checkbox"', ' class="w-4 h-4"></div><div class="flex items-center justify-between"><div><h4 class="font-medium text-card-foreground">Project Updates</h4><p class="text-sm text-muted-foreground">Notifications for project changes</p></div><input type="checkbox"', ' class="w-4 h-4"></div><div class="flex items-center justify-between"><div><h4 class="font-medium text-card-foreground">Deadline Reminders</h4><p class="text-sm text-muted-foreground">Alerts for approaching deadlines</p></div><input type="checkbox"', ' class="w-4 h-4"></div></div>'], z = ["<div", ' class="flex items-center gap-3 mb-6"><!--$-->', '<!--/--><h2 class="ff-section-title mb-0">Appearance</h2></div>'], U = ["<option", ' value="compact">Compact</option>'], F = ["<option", ' value="comfortable">Comfortable</option>'], L = ["<option", ' value="spacious">Spacious</option>'], B = ["<option", ' value="collapsed">Collapsed by default</option>'], R = ["<option", ' value="expanded">Expanded by default</option>'], Y = ["<option", ' value="auto">Auto (responsive)</option>'], H = ["<div", ' class="space-y-4"><div><label class="ff-label mb-2 block">Theme</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Display Density</label><!--$-->', '<!--/--></div><div><label class="ff-label mb-2 block">Sidebar</label><!--$-->', "<!--/--></div></div>"], J = ["<div", ' class="flex items-center gap-3 mb-6"><!--$-->', '<!--/--><h2 class="ff-section-title mb-0">Security</h2></div>'], K = ["<div", ' class="space-y-4"><div>', "</div><div>", "</div><div>", "</div><div>", "</div></div>"], V = ["<div", ' class="flex items-center gap-3 mb-6"><!--$-->', '<!--/--><h2 class="ff-section-title mb-0">Data Management</h2></div>'], q = ["<div", ' class="grid grid-cols-1 md:grid-cols-3 gap-4"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div>"], G = ["<div", ' class="ff-page-container"><div class="ff-page-header"><div class="flex items-center justify-between"><div><h1 class="ff-page-title">Settings</h1><p class="ff-page-subtitle">Manage your account preferences and application settings</p></div><!--$-->', '<!--/--></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div><!--$-->", "<!--/--></div>"];
const re = () => {
  const [o, O] = createSignal({ email: true, push: true, desktop: false, tasks: true, projects: true, deadlines: true }), [n, f$1] = createSignal({ name: "John Doe", email: "john.doe@velocityfibre.com", phone: "+1 (555) 123-4567", timezone: "America/New_York", language: "en" }), c$1 = (l, h) => {
    f$1((b) => ({ ...b, [l]: h }));
  }, v = () => {
    alert("Settings saved! (Demo mode - changes are temporary)");
  };
  return ssr(G, ssrHydrationKey(), escape(createComponent(c, { onClick: v, class: "bg-primary text-primary-foreground", children: "Save Changes" })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(w, ssrHydrationKey(), escape(createComponent(p, { class: "w-5 h-5 text-primary" }))), ssr(N, ssrHydrationKey(), escape(createComponent(x, { get value() {
      return n().name;
    }, onInput: (l) => c$1("name", l.target.value), placeholder: "Enter your full name" })), escape(createComponent(x, { type: "email", get value() {
      return n().email;
    }, onInput: (l) => c$1("email", l.target.value), placeholder: "Enter your email" })), escape(createComponent(x, { type: "tel", get value() {
      return n().phone;
    }, onInput: (l) => c$1("phone", l.target.value), placeholder: "Enter your phone number" })), escape(createComponent(f, { get value() {
      return n().timezone;
    }, onChange: (l) => c$1("timezone", l), get children() {
      return [ssr(T, ssrHydrationKey()), ssr(C, ssrHydrationKey()), ssr(A, ssrHydrationKey()), ssr(S, ssrHydrationKey()), ssr(j, ssrHydrationKey())];
    } })), escape(createComponent(f, { get value() {
      return n().language;
    }, onChange: (l) => c$1("language", l), get children() {
      return [ssr(D, ssrHydrationKey()), ssr(E, ssrHydrationKey()), ssr(P, ssrHydrationKey())];
    } })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(I, ssrHydrationKey(), escape(createComponent(s, { class: "w-5 h-5 text-primary" }))), ssr(M, ssrHydrationKey(), ssrAttribute("checked", o().email, true), ssrAttribute("checked", o().push, true), ssrAttribute("checked", o().desktop, true), ssrAttribute("checked", o().tasks, true), ssrAttribute("checked", o().projects, true), ssrAttribute("checked", o().deadlines, true))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(z, ssrHydrationKey(), escape(createComponent(k, { class: "w-5 h-5 text-primary" }))), ssr(H, ssrHydrationKey(), escape(createComponent(y, {})), escape(createComponent(f, { value: "comfortable", get children() {
      return [ssr(U, ssrHydrationKey()), ssr(F, ssrHydrationKey()), ssr(L, ssrHydrationKey())];
    } })), escape(createComponent(f, { value: "expanded", get children() {
      return [ssr(B, ssrHydrationKey()), ssr(R, ssrHydrationKey()), ssr(Y, ssrHydrationKey())];
    } })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card", get children() {
    return [ssr(J, ssrHydrationKey(), escape(createComponent(p$1, { class: "w-5 h-5 text-primary" }))), ssr(K, ssrHydrationKey(), escape(createComponent(c, { variant: "outline", class: "w-full", children: "Change Password" })), escape(createComponent(c, { variant: "outline", class: "w-full", children: "Enable Two-Factor Authentication" })), escape(createComponent(c, { variant: "outline", class: "w-full", children: "View Login Activity" })), escape(createComponent(c, { variant: "outline", class: "w-full", children: "Download Account Data" })))];
  } })), escape(createComponent(t, { class: "p-6 ff-card mt-6", get children() {
    return [ssr(V, ssrHydrationKey(), escape(createComponent(s$1, { class: "w-5 h-5 text-primary" }))), ssr(q, ssrHydrationKey(), escape(createComponent(c, { variant: "outline", children: "Export Projects Data" })), escape(createComponent(c, { variant: "outline", children: "Export Tasks Data" })), escape(createComponent(c, { variant: "outline", class: "text-red-600 hover:bg-red-50", children: "Delete Account" })))];
  } })));
};

export { re as default };
//# sourceMappingURL=settings3.mjs.map
