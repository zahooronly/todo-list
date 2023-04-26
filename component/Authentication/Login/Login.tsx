import { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const formClass = darkMode ? "form form--dark" : "form";

  return (
    <div className="login">
      <h1>Login</h1>
      <form className={formClass} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="input"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="input"
        />

        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <div className="toggle">
        <input
          type="checkbox"
          id="darkMode"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
        <label htmlFor="darkMode">Dark Mode</label>
      </div>
      <style jsx>{`
        .login {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: ${darkMode ? "#111827" : "#F3F4F6"};
          color: ${darkMode ? "#F3F4F6" : "#111827"};
        }
        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: ${darkMode ? "#1F2937" : "#F9FAFB"};
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
        .form--dark {
          border: 2px solid #f3f4f6;
        }
        .input {
          padding: 0.5rem;
          border: none;
          border-radius: 0.25rem;
          margin-bottom: 1rem;
          background-color: ${darkMode ? "#374151" : "#E5E7EB"};
          color: ${darkMode ? "#F3F4F6" : "#111827"};
        }
        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          background-color: ${darkMode ? "#2563EB" : "#4B5563"};
          color: ${darkMode ? "#F3F4F6" : "#F9FAFB"};
          cursor: pointer;
        }
        .toggle {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Login;
