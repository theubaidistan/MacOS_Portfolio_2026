import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, MobileShell, Navbar, Welcome } from "#components";
import {
  Contact,
  Finder,
  Image,
  Photos,
  Resume,
  Safari,
  Terminal,
  Text,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <div className="desktop-shell">
        <Navbar />
        <Welcome />
        <Dock />
        <Home />
      </div>

      <MobileShell />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
    </main>
  );
};

export default App;
