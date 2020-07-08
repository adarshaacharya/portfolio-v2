import { useLogo } from '@hooks/use-logo';
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'
// import Switch from 'react-switch'
import ToggleSwitch from '@portfolio-ui/ToggleSwitch';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import { HeaderWrapper } from './Header.style';


const Header = () => {
  const logo = useLogo();

  return (
    <>
      <HeaderWrapper>
        <div className="nav-container">
          <Link to="/" className="logo">
            {/* <Image fixed={logo} alt="Aadarsha" className="nav-image" /> */}
            adarsha
          </Link>

          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/projects/" activeClassName="current-page">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog/" activeClassName="current-page">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/" activeClassName="current-page">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <ToggleSwitch />
              {/* <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <div id="theme-toggler">
                    <Switch
                      onChange={e =>
                        toggleTheme(theme === 'light' ? 'dark' : 'light')
                      }
                      checked={theme === 'dark'}
                      onColor="#4487F4"
                      offColor="#222"
                      checkedIcon={
                        <img src={moonIcon} alt="moon icon" height="22" />
                      }
                      uncheckedIcon={
                        <img src={sunIcon} alt="sun icon" height="22" />
                      }
                      boxShadow="0 0 2px 3px #5d83e8"
                      activeBoxShadow="0 0 2px 3px #5d83e8"
                      height={20}
                      width={40}
                    />
                  </div>
                )}
              </ThemeToggler> */}
            </li>
          </ul>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
