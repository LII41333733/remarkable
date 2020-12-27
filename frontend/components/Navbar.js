import Link from "next/link";
import { ForkKnife } from "phosphor-react";

const Navbar = () => {
    return (
        <header className="pt-20 bg-d fixed w-100 ph3 ph4-m ph5-l top-0">
            <nav className="tracked flex f4">
                <ForkKnife className={"color-b"} size={40} />
                <Link href="/">
                    <a className="logo link fw2 dim white dib mr3 f2 ml1 flex-grow-1 mt-5">
                        remarkable</a>
                </Link>
                <Link href="/">
                    <a className="link fw4 navLink f51 dim white dib mr3" href="#" title="Home">Home</a>
                </Link>
                <Link href="/menu">
                    <a className="link fw4 navLink f51 dim white dib mr3" href="#" title="Menu">Menu</a>
                </Link>
                <Link href="/specials">
                    <a className="link fw4 navLink f51 dim white dib mr3" href="#" title="Specials">Specials</a>
                </Link>
                <Link href="/order">
                    <a className="link fw4 navLink f51 dim white dib mr3" href="#" title="Order">Order</a>
                </Link>
                <Link href="/about">
                    <a className="link fw4 navLink f51 dim white dib mr3" href="#" title="About">About</a>
                </Link>
                <Link href="/admin">
                    <a className="link fw4 navLink f51 dim white dib" href="#" title="Admin">Admin</a>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
