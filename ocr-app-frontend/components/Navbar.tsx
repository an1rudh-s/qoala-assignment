'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex justify-between items-center px-4">
        <div className="flex space-x-4">
          <li>
            <Link href="/">
              <p
                className={`${
                  pathname === '/' ? 'font-bold text-blue-900' : 'text-white hover:text-blue-100 transition'
                }`}
              >
                Upload
              </p>
            </Link>
          </li>
          <li>
            <Link href="/update">
              <p
                className={`${
                  pathname === '/update' ? 'font-bold text-blue-900' : 'text-white hover:text-blue-100 transition'
                }`}
              >
                Update
              </p>
            </Link>
          </li>
          <li>
            <Link href="/retrieve">
              <p
                className={`${
                  pathname === '/retrieve' ? 'font-bold text-blue-900' : 'text-white hover:text-blue-100 transition'
                }`}
              >
                Retrieve
              </p>
            </Link>
          </li>
          <li>
            <Link href="/delete">
              <p
                className={`${
                  pathname === '/delete' ? 'font-bold text-blue-900' : 'text-white hover:text-blue-100 transition'
                }`}
              >
                Delete
              </p>
            </Link>
          </li>
        </div>
        <li>
          <Link href="/about">
            <p
              className={`${
                pathname === '/about' ? 'font-bold text-blue-900' : 'text-white hover:text-blue-100 transition'
              }`}
            >
              About The Project
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
