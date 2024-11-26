import { createStore } from 'jotai';
import themeAtom from '@/atoms/theme-atom';

const themeStore = createStore();

themeStore.get(themeAtom);
themeStore.set(themeAtom, localStorage.getItem('portfolio-ui-theme') || 'system');

export default themeStore;
