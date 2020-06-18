import React from "react"


const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                My name is <span className="header__surname">Marek Choiński</span>
            </h1>
            <nav className="navbar">
                <ul className="navbar__links">
                    <li className="navbar__item">
                        <a className="navbar__link" href="#projects">
                            projects
                        </a>
                    </li>
                    {/* <li className="navbar__item">
                        <a className="navbar__link" href="#blog">
                            blog
                        </a>
                    </li> */}
                    <li className="navbar__item">
                        <a className="navbar__link" target="_blank" href="https://drive.google.com/file/d/1vq5BvRoZtTjgWqn1voBft27JbUgQaO11oqoLBGb7vaA/view">
                            resume
                        </a>
                    </li>
                </ul>
                <ul className="navbar__links">
                    <li className="navbar__item">
                        <a className="navbar__link" href="https://github.com/marekchoinski">
                            github
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="https://pl.linkedin.com/in/marek-choi%C5%84ski-506ab5180">
                            linkedin
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;