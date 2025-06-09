import { createComponent } from 'solid-js/web';
import { A } from '../nitro/nitro.mjs';
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
import 'solid-js';
import 'solid-js/web/storage';

const p = () => createComponent(A, { href: "/dashboard" });

export { p as default };
//# sourceMappingURL=index6.mjs.map
