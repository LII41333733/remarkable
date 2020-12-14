import Link from "next/link";
import { ForkKnife } from "phosphor-react";


const Navbar = () => {
    return (
        <header className="bg-d fixed w-100 ph3 ph4-m ph5-l top-0">
            <nav className="tracked flex f4">
                <ForkKnife className={"brandIcon"} size={10} />
                <Link href="/">
                    <a className="link fw2 dim white dib mr5 f3 ml1 flex-grow-1 mt-4">
                        remarkable.</a>
                </Link>
                <Link href="/">
                    <a className="link fw4 f51 dim white dib mr5" href="#" title="Home">Home</a>
                </Link>
                <Link href="/menu">
                    <a className="link fw4 f51 dim white dib mr5" href="#" title="Menu">Menu</a>
                </Link>
                <Link href="/specials">
                    <a className="link fw4 f51 dim white dib mr5" href="#" title="Specials">Specials</a>
                </Link>
                <Link href="/order">
                    <a className="link fw4 f51 dim white dib mr5" href="#" title="Order">Order</a>
                </Link>
                <Link href="/about">
                    <a className="link fw4 f51 dim white dib mr5" href="#" title="About">About</a>
                </Link>
                <Link href="/admin">
                    <a className="link fw4 f51 dim white dib" href="#" title="Admin">Admin</a>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
