import dayjs from "dayjs";
import { BatteryFull, Signal, Wifi } from "lucide-react";
import { dockApps, locations } from "#constants";
import MobileAppView from "#components/MobileAppView";
import { useState } from "react";

const mobileApps = [
  ...dockApps.filter(({ canOpen }) => canOpen),
  {
    id: "resume",
    name: locations.resume.name,
    icon: "pdf.png",
    canOpen: true,
  },
  {
    id: "about",
    name: locations.about.name,
    icon: locations.about.icon,
    canOpen: true,
  },
];

const mobileDockApps = mobileApps.slice(0, 4);

const MobileShell = () => {
  const [mobileView, setMobileView] = useState(null);
  const [viewPhase, setViewPhase] = useState("is-entering");

  const openApp = (appId) => {
    setViewPhase("is-entering");
    setMobileView(appId);
  };

  const closeApp = () => {
    setViewPhase("is-exiting");
    window.setTimeout(() => setMobileView(null), 240);
  };

  return (
    <section className="mobile-shell" aria-label="Mobile portfolio">
      <header className="mobile-status-bar">
        <time>{dayjs().format("h:mm")}</time>
        <div className="mobile-status-icons" aria-label="Device status">
          <Signal size={15} strokeWidth={2.5} />
          <Wifi size={15} strokeWidth={2.5} />
          <BatteryFull size={18} strokeWidth={2.5} />
        </div>
      </header>

      <div className={`mobile-content ${mobileView ? "is-covered" : ""}`}>
        <div className="mobile-home-brand">
          <img src="/images/logo.svg" alt="" />
          <p>Muhammad Ubaid Portfolio</p>
        </div>

        <div className="mobile-app-grid" aria-label="Portfolio apps">
          {mobileApps.map(({ id, name, icon }) => (
            <button key={id} type="button" onClick={() => openApp(id)}>
              <img src={icon.startsWith("/") ? icon : `/images/${icon}`} alt="" />
              <span>{name}</span>
            </button>
          ))}
        </div>

        <div className="mobile-dock" aria-label="Favorite apps">
          {mobileDockApps.map(({ id, name, icon }) => (
            <button key={id} type="button" aria-label={name} onClick={() => openApp(id)}>
              <img src={`/images/${icon}`} alt="" />
            </button>
          ))}
        </div>
      </div>

      <MobileAppView appId={mobileView} phase={viewPhase} onBack={closeApp} />
    </section>
  );
};

export default MobileShell;
