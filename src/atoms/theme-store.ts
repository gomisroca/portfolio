import { createStore } from 'jotai';
import themeAtom from './theme-atom';

const themeStore = createStore();

themeStore.set(themeAtom, localStorage.getItem('portfolio-ui-theme') || 'system');

export default themeStore;
