// Browser storage can be unavailable or contain data from an older app version.
export function readChoice(key, choices, fallback) {
  try { const value = localStorage.getItem(key); return choices.includes(value) ? value : fallback; }
  catch { return fallback; }
}
export function readJSON(key, fallback, validate) {
  try { const value = JSON.parse(localStorage.getItem(key)); return validate(value) ? value : fallback; }
  catch { return fallback; }
}
export function writeStorage(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Keep the app usable without persistence. */ }
}
