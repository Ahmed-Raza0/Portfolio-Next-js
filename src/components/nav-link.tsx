import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/About', icon: UserGroupIcon },  // Adjusted path
  { name: 'Contact', href: '/Contact', icon: DocumentDuplicateIcon },  // Adjusted path
];

export default function NavLinks() {
  return (
    <nav className="bg-slate-600 text-white p-4 md:p-5 w-full fixed top-0 z-50 flex justify-end items-center space-x-6">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name} 
            href={link.href}
            className="flex items-center space-x-2 hover:text-gray-300 transition duration-200 ease-in-out"
          >
            <LinkIcon className="w-6 h-6" /> {/* Slightly larger icon for better visibility */}
            <span className="hidden md:block text-sm">{link.name}</span> {/* Text visible only on medium screens and larger */}
          </Link>
        );
      })}
    </nav>
  );
}
