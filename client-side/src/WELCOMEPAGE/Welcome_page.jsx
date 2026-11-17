import {Link} from "react-router-dom";
function Welcome_page() {
 return (
    <div className="welcome">

      <nav className="welcome-nav">
        <h2>NEX<span>PIXEL</span></h2>

        <div>
          <Link to="/login" className="nav-login">
            Login
          </Link>
          <Link to="/register" className="nav-register">
            Sign Up
          </Link>
        </div>
      </nav>

      <section className="welcome-hero">

        <div className="hero-content">

          <span className="hero-tag">
            ✨ YOUR CREATIVE WORLD
          </span>

          <h1>
            Discover The World
            <br />
            Of <span>Creative Graphics.</span>
          </h1>

          <p>
            Explore a beautiful collection of creative graphics,
            illustrations, posters and digital assets.
            Find inspiration and bring your imagination to life
            with Graphix.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="get-started">
              Explore our work →
            </Link>

            <Link to="/register" className="explore-btn">
              Create Account
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>1000+</h3>
              <span>Creative Designs</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Categories</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Access</span>
            </div>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://elements-resized.envatousercontent.com/elements-cover-images/4efbb03b-580b-45b0-a2ae-4953864875b0?w=433&cf_fit=scale-down&q=85&format=auto&s=a00941bd29cce6d243f0f8b865d562eba193b68b3d603c20b865dae1e19532f0"
            alt="Creative graphic design"
          />
        </div>

      </section>

    </div>
  );
}

export default Welcome_page
