import heroImg from './assets/hero.png'
import './App.css'

const wardrobeStats = [
  { value: '8k+', label: 'designer pieces' },
  { value: '48h', label: 'doorstep delivery' },
  { value: '4.9', label: 'average rating' },
]

const styleTags = ['Wedding guest', 'Date night', 'Work edit', 'Vacation']

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')

    alert(`Welcome back${email ? `, ${email}` : ''}!`)
  }

  return (
    <main className="page-shell">
      <section className="brand-panel" aria-labelledby="page-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#page-title">
            <span className="brand-mark">RF</span>
            RentFashion
          </a>
          <a className="nav-link" href="#login">
            Sign in
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Premium outfit rental</p>
            <h1 id="page-title">Wear the moment, return the rest.</h1>
            <p className="hero-text">
              Book designer looks for weddings, parties, shoots, and weekends.
              Freshly cleaned, size-checked, and delivered before your plans.
            </p>

            <div className="actions">
              <a className="primary-action" href="#login">
                Start renting
              </a>
              <a className="secondary-action" href="#collections">
                Browse looks
              </a>
            </div>
          </div>

          <aside className="showcase" aria-label="Featured rental plan">
            <div className="showcase-card">
              <p className="showcase-kicker">Tonight's pick</p>
              <img src={heroImg} alt="" className="showcase-image" />
              <div>
                <h2>Velvet Noir Set</h2>
                <p>Luxury edit from Rs. 899/day</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="stats" aria-label="RentFashion highlights">
          {wardrobeStats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="login-panel" id="login" aria-label="Account sign in">
        <div className="login-card">
          <div className="card-heading">
            <p className="eyebrow">Member access</p>
            <h2>Welcome back</h2>
            <p>Sign in to manage orders, saved sizes, and upcoming returns.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </label>

            <div className="form-row">
              <label className="remember">
                <input type="checkbox" name="remember" />
                Remember me
              </label>
              <a href="#login">Forgot password?</a>
            </div>

            <button type="submit">Sign in</button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">
            <button type="button">Google</button>
            <button type="button">Apple</button>
          </div>

          <p className="signup-note">
            New to RentFashion? <a href="#login">Create an account</a>
          </p>
        </div>

        <div className="collection-strip" id="collections" aria-label="Popular collections">
          {styleTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
