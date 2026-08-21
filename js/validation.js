/**
 * validation.js
 * Frontend-only input checks. This is a practice app (not high-stakes),
 * so validation exists to catch typos and keep Results readable — not
 * as a security boundary.
 */

var Validation = (function () {
  function isNonEmptyName(name) {
    return String(name || '').trim().length >= 2;
  }

  function isNonEmptyClass(studentClass) {
    return String(studentClass || '').trim().length >= 1;
  }

  return { isNonEmptyName: isNonEmptyName, isNonEmptyClass: isNonEmptyClass };
})();
