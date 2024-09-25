// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-darkGrey text-lightGrey py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading">SkinVerta</Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/explore">Explore Products</Link>
            </li>
            <li>
              <Link href="/compare">Compare</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search products..."
            className="px-2 py-1 rounded border border-lightGrey"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
