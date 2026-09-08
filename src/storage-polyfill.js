// Polyfills the window.storage API that the component was built against
// (originally backed by Claude's artifact storage), using the browser's
// localStorage instead. Same method names and shapes, so App.jsx needs
// no changes.
//
// Note: this makes storage per-browser, not synced across devices. If you
// later want the same data on your phone and a laptop, swap this file's
// internals for calls to a real backend (Supabase, Firebase, etc.) while
// keeping the same get/set/delete/list method signatures.

function fullKey(key, shared) {
  return `ppp:${shared ? "shared" : "personal"}:${key}`;
}

window.storage = {
  async get(key, shared = false) {
    const raw = localStorage.getItem(fullKey(key, shared));
    if (raw === null) return null;
    return { key, value: raw, shared };
  },

  async set(key, value, shared = false) {
    localStorage.setItem(fullKey(key, shared), value);
    return { key, value, shared };
  },

  async delete(key, shared = false) {
    const k = fullKey(key, shared);
    const existed = localStorage.getItem(k) !== null;
    localStorage.removeItem(k);
    return { key, deleted: existed, shared };
  },

  async list(prefix = "", shared = false) {
    const scanPrefix = fullKey(prefix, shared);
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(scanPrefix)) {
        keys.push(k.slice(fullKey("", shared).length));
      }
    }
    return { keys, prefix, shared };
  },
};
