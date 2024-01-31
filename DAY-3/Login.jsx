import './Login.css';
  import {Link} from 'react-router-dom'
const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460"
  },
];

const Login = () => {
  const setTheme = (theme) => {
    document.documentElement.style.setProperty('--background', theme.background);
    document.documentElement.style.setProperty('--color', theme.color);
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
  };
  
  const displayThemeButtons = () => {
    return themes.map((theme, index) => (
      <div
        key={index}
        className="theme-btn"
        style={{ background: theme.background }}
        onClick={() => setTheme(theme)}
      />
    ));
  };

  return (
      <div className="qwer">
    <div className='.klj2'>
      <div className='po'>
      </div>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">LOGIN</h1>
            <form>
              <input type="text" placeholder="USERNAME" required/>
              <input type="password" placeholder="PASSWORD" required/>
              <Link to="/Home"><button className="opacity">SUBMIT</button></Link>
            </form>
            <div className="register-forget">
            <Link to="/File">
              <div className='jack22'><h4>sign up</h4><a href=""></a></div>
              </Link>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container">{displayThemeButtons()}</div>
      </section>
    </div>
    </div>
  );
};

export default Login;
