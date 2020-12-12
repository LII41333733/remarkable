import React from "react";

const Navbar = () => {
    return (
        <header className="bg-white fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l top-0">
            <nav className="f6 fw6 ttu tracked">
                <a className="link dim green dib mr3" href="#" title="Home">
                    Home
        </a>
                <a className="link dim green dib mr3" href="#" title="About">
                    About
        </a>
                <a className="link dim green dib mr3" href="#" title="Store">
                    Store
        </a>
                <a className="link dim green dib" href="#" title="Contact">
                    Contact
        </a>
            </nav>
        </header>
    );
};

export default Navbar;
