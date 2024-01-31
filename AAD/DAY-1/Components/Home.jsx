// src/App.js
import './Home.css'
function Home() {
  return (
    <div className="App">
      <header>
        <h1>Your Website</h1>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <section>
        <h2>Welcome to Your Website</h2>
        <p>This is the homepage of your website. You can add more content here.</p>
      </section>
    </div>
  );
}

export default Home;
