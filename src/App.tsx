import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Skills from './components/panels/Skills';
import Projects from './components/panels/Projects';
import Studies from './components/panels/Studies';
import { Provider } from 'jotai';
import themeStore from './atoms/theme-store';

function App() {
  return (
    <Provider store={themeStore}>
      <div
        style={{ backgroundImage: "url('bg.jpg')" }}
        className="bg-cover bg-scroll bg-center bg-no-repeat md:bg-fixed">
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-950 dark:to-neutral-900/70">
          <Navbar />
          <div className="flex flex-col gap-y-4">
            <Banner />
            <Skills />
            <Projects />
            <Studies />
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
