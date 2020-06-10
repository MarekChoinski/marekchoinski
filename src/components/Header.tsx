import React from "react"


const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                My name <span>is Marek Choiński</span>
            </h1>
            <nav className="navbar">
                <ul className="navbar__links">
                    <li className="navbar__item">
                        <a className="navbar__link" href="#projects">
                            projects
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#blog">
                            blog
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">
                            resume
                        </a>
                    </li>
                </ul>
                <ul className="navbar__links">
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">
                            github
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">
                            linkedin
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;