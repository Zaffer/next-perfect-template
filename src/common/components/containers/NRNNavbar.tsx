import Image from 'next/image';
import Link from 'next/link'

export interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="qrspace.io" width={128} height={77} />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/assets'><a>Asset Listing</a></Link>
        </nav>
    );
}

export default Navbar;