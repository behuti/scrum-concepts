import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="header-brand">
          <h1>Scrum<span className="accent-dot">.</span></h1>
          <span className="header-sub">Reference Guide</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
