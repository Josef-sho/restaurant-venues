// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Venue Manager</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/venues">Venues</Link>
        </li>
        <li>
          <Link href="/addvenues">Add Venues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
