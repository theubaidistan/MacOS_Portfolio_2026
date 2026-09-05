import {
  ArrowLeft,
  Download,
  ExternalLink,
  Mail,
  MoveRight,
} from "lucide-react";
import { blogPosts, gallery, locations, socials, techStack } from "#constants";

const projectItems = locations.work.children;
const aboutText = locations.about.children.find((item) => item.fileType === "txt");

const MobileProjects = () => (
  <div className="mobile-view-body">
    <p className="mobile-view-kicker">Work</p>
    <h2>Selected projects</h2>
    <div className="mobile-project-list">
      {projectItems.map((project) => {
        const details = project.children.find((item) => item.description);
        const link = project.children.find((item) => item.href);

        return (
          <article className="mobile-project-card" key={project.id}>
            <img src={project.icon} alt="" />
            <div>
              <h3>{project.name}</h3>
              <p>{details?.description?.[0]}</p>
              {link ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  Open project <ExternalLink size={14} />
                </a>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  </div>
);

const MobileAbout = () => (
  <div className="mobile-view-body">
    <p className="mobile-view-kicker">About</p>
    <h2>{aboutText.subtitle}</h2>
    <img className="mobile-about-image" src={aboutText.image} alt="Muhammad Ubaid" />
    <div className="mobile-copy">
      {aboutText.description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </div>
);

const MobileSkills = () => (
  <div className="mobile-view-body">
    <p className="mobile-view-kicker">Skills</p>
    <h2>Tech stack</h2>
    <div className="mobile-skill-list">
      {techStack.map(({ category, items }) => (
        <section key={category}>
          <h3>{category}</h3>
          <p>{items.join(" · ")}</p>
        </section>
      ))}
    </div>
  </div>
);

const MobileGallery = () => (
  <div className="mobile-view-body">
    <p className="mobile-view-kicker">Gallery</p>
    <h2>Photos</h2>
    <div className="mobile-gallery-grid">
      {gallery.map(({ id, img }) => (
        <img key={id} src={img} alt={`Gallery image ${id}`} />
      ))}
    </div>
  </div>
);

const MobileResume = () => (
  <div className="mobile-view-body mobile-resume-body">
    <p className="mobile-view-kicker">Resume</p>
    <h2>{locations.resume.name}</h2>
    <a className="mobile-download" href="/files/resume.pdf" download>
      <Download size={17} /> Download PDF
    </a>
    <iframe title="Resume preview" src="/files/resume.pdf" />
  </div>
);

const MobileContact = () => (
  <div className="mobile-view-body">
    <p className="mobile-view-kicker">Contact</p>
    <h2>Let&apos;s connect</h2>
    <img className="mobile-contact-image" src="/images/ubaid-1.jpg" alt="Muhammad Ubaid" />
    <p>Got an idea, a bug to squash, or just want to talk tech?</p>
    <a className="mobile-email" href="mailto:ubaidazrab50@gmail.com">
      <Mail size={17} /> ubaidazrab50@gmail.com
    </a>
    <div className="mobile-social-list">
      {socials.map(({ id, bg, icon, link, text }) => (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: bg }}>
          <img src={icon} alt="" />
          <span>{text}</span>
          <MoveRight size={16} />
        </a>
      ))}
    </div>
  </div>
);

const MobileArticles = () => (
  <div className="mobile-view-body">
    <p className="mobile-view-kicker">Articles</p>
    <h2>Developer blog</h2>
    <div className="mobile-article-list">
      {blogPosts.map(({ id, date, image, link, title }) => (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="" />
          <span>
            <small>{date}</small>
            <strong>{title}</strong>
          </span>
        </a>
      ))}
    </div>
  </div>
);

const MOBILE_VIEWS = {
  finder: { title: "Projects", component: MobileProjects },
  safari: { title: "Articles", component: MobileArticles },
  photos: { title: "Gallery", component: MobileGallery },
  about: { title: "About Me", component: MobileAbout },
  terminal: { title: "Skills", component: MobileSkills },
  resume: { title: "Resume", component: MobileResume },
  contact: { title: "Contact", component: MobileContact },
};

const MobileAppView = ({ appId, phase, onBack }) => {
  const view = MOBILE_VIEWS[appId];
  if (!view) return null;

  const View = view.component;

  return (
    <section className={`mobile-view-shell ${phase}`} aria-label={`${view.title} app`}>
      <header className="mobile-view-header">
        <button type="button" onClick={onBack} aria-label="Back to home screen">
          <ArrowLeft size={20} />
        </button>
        <h1>{view.title}</h1>
        <span aria-hidden="true" />
      </header>
      <View />
    </section>
  );
};

export default MobileAppView;
