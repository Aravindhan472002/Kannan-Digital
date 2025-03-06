import React from 'react';
import LightButton from '../Navbar/light1.png';
import DarkButton from '../Navbar/dark1.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement; // HTML root element

  React.useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative">
      {theme === 'light' ? (
        <img
          src={LightButton}
          alt="Light Mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow transition-all duration-300"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Dark Mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkMode;
