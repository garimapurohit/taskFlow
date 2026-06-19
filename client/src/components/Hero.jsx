import './Hero.css';

function Hero() {
  const stats = [
    { icon: "📘", label: "DSA Problems Solved", value: "245", sub: "Keep it up! ", color: "purple" },
    { icon: "📅", label: "Applications Tracked", value: "18", sub: "Stay consistent! ", color: "green" },
    { icon: "🔥", label: "Current Streak", value: "12 Days", sub: "Don't break it! ", color: "orange" },
    { icon: "🎯", label: "Daily Goals Completed", value: "8 / 10", sub: "Almost there. ", color: "blue" },
  ];

  return (
    <div className="hero">
      {/* Left */}
      <div className="hero-left">
        <span className="eyebrow">Your Placement Journey, Simplified</span>
        <h1>
          Everything You Need to Crack Your{" "}
          <span className="highlight">Dream Internship 🚀</span>
        </h1>
        <p className="tagline">
          InternFlow brings your DSA progress, job applications, interview
          deadlines, and daily goals into one place—so you can focus on
          preparation instead of searching through emails, checking multiple
          calendars, or wondering if you're staying consistent.
        </p>
        <div className="btns">
          <button className="btn-primary">Get Started →</button>
          <button className="btn-secondary">Learn More →</button>
        </div>
      </div>

      {/* Right */}
      <div className="hero-right">
        <div className="dashboard-card">
          <div className="dashboard-top">
            <div>
              <p className="welcome">Welcome back, Garima! 👋</p>
              <p className="welcome-sub">Here's your progress for today.</p>
            </div>
            <span className="calendar-icon">📆</span>
          </div>

          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-header">
                  <span className={`stat-icon-box ${s.color}`}>{s.icon}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
                <span className={`stat-value ${s.color}`}>{s.value}</span>
                <span className="stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>

          <div className="motivation-row">
            <span className="star-icon">⭐</span>
            <div>
              <p className="mot-main">Small steps every day lead to big results.</p>
              <p className="mot-sub">Stay focused, stay consistent!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;