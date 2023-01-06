import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" className="hlink">
                <h1>
                    Blogs
                </h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="post">
                            Write Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;