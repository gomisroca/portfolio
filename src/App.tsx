import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Skills from '@/components/panels/Skills';
import Projects from '@/components/panels/Projects';
import Studies from '@/components/panels/Studies';
import { Provider } from 'jotai';
import themeStore from '@/atoms/theme-store';

function App() {
  return (
    <Provider store={themeStore}>
      <div className="bg-zinc-50 font-body dark:bg-zinc-950">
        <Navbar />
        <div className="flex flex-col gap-y-4">
          <Banner />
          <Skills />
          <Projects />
          <Studies />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
