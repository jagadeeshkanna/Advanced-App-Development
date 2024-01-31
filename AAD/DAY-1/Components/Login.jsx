// // Login.jsx

// import { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement your login logic here
//     console.log('Logging in with:', { username, password });
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// LoginForm.jsx
import './Login.css';

const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460"
  },
  // Add other themes as needed
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
    <body>
      <div className="qwer">
  
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
              <input type="text" placeholder="USERNAME" />
              <input type="password" placeholder="PASSWORD" />
              <button className="opacity">SUBMIT</button>
            </form>
            <div className="register-forget opacity">
              <a href="">REGISTER</a>
              <a href="">FORGOT PASSWORD</a>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container">{displayThemeButtons()}</div>
      </section>
    </body>
  );
};

export default Login;
