import "./Hero.css";

function Hero() {
  const stats = [
    { icon: "📘", label: "DSA Problems Solved", value: "245", sub: "Keep it up!", color: "purple" },
    { icon: "📅", label: "Applications Tracked", value: "18", sub: "Stay consistent!", color: "green" },
    { icon: "🔥", label: "Current Streak", value: "12 Days", sub: "Don't break it!", color: "orange" },
    { icon: "🎯", label: "Daily Goals Completed", value: "8 / 10", sub: "Almost there!", color: "blue" },
  ];

  return (
    <section className="container py-5">

      <div className="row align-items-center">

        {/* Left */}

        <div className="col-lg-6">

          <span className="badge bg-primary fs-6 mb-3">
            Your Placement Journey, Simplified
          </span>

          <h1 className="display-4 fw-bold">
            Everything You Need to Crack Your{" "}
            <span className="text-primary">
              Dream Internship 🚀
            </span>
          </h1>

          <p className="lead text-secondary mt-4">
            InternFlow brings your DSA progress, job applications,
            interview deadlines, and daily goals into one place so
            you can focus on preparation instead of searching
            through emails or checking multiple calendars.
          </p>

          <div className="mt-4">

            <button className="btn btn-primary btn-lg me-3">
              Get Started
            </button>

            <button className="btn btn-outline-secondary btn-lg">
              Learn More
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="col-lg-6 mt-5 mt-lg-0">

          <div className="card shadow-lg border-0 rounded-4 p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <div>

                <h5 className="fw-bold">
                  Welcome back, Garima 👋
                </h5>

                <small className="text-muted">
                  Here's your progress for today.
                </small>

              </div>

              <span className="fs-3">
                📆
              </span>

            </div>

            <div className="row g-3">

              {stats.map((s) => (

                <div className="col-6" key={s.label}>

                  <div className="card p-3 h-100">

                    <small>{s.icon} {s.label}</small>

                    <h3 className="fw-bold mt-2">
                      {s.value}
                    </h3>

                    <small className="text-muted">
                      {s.sub}
                    </small>

                  </div>

                </div>

              ))}

            </div>

            <div className="alert alert-primary mt-4 mb-0">

              ⭐ Small steps every day lead to big results.
              <br />
              Stay focused, stay consistent!

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;