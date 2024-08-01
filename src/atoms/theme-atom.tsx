import { atom } from 'jotai';

const setRootTheme = (newTheme: string) => {
  localStorage.setItem('portfolio-ui-theme', newTheme)
  const root = window.document.documentElement
  root.classList.remove('light', 'dark')
  if (newTheme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    root.classList.add(systemTheme)
    return
  }
  root.classList.add(newTheme)
}

const themeAtom = atom(localStorage.getItem('portfolio-ui-theme') ?? 'system')

const themeAtomWithPersistence = atom(
  (get) => get(themeAtom),
  (_get, set, newTheme: string) => {
    set(themeAtom, newTheme)
    setRootTheme(newTheme)
  },
)
export default themeAtomWithPersistence