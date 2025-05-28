'use client';
import { NavItem } from '@/types/general';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiOutlineBell,
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineUserCircle,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineCreditCard,
} from 'react-icons/hi';

const menu: NavItem[] = [
  { icon: HiOutlineHome, label: 'Overview', href: '/dashboard' },
  { icon: HiOutlineTicket, label: 'Tickets', href: '#' },
  { icon: HiOutlineLightBulb, label: 'Ideas', href: '#' },
  { icon: HiOutlineUserGroup, label: 'Contacts', href: '#' },
  { icon: HiOutlineUserCircle, label: 'Agents', href: '#' },
  { icon: HiOutlineDocumentText, label: 'Articles', href: '#' },
  { icon: HiOutlineCog, label: 'Settings', href: '#' },
  { icon: HiOutlineCreditCard, label: 'Subscription', href: '#' },
];

export default function SideNav() {
  const pathname = usePathname();
  const IconBell = HiOutlineBell as any;
  return (
    <>
      <div
        className='
          fixed top-0 left-0 right-0 z-20
          md:hidden
          flex items-center justify-between
          bg-gray-800 text-gray-200 h-16 px-4
        '
      >
        <Link href='/dashboard'>
          <Image src='/logo.svg' alt='Logo' width={36} height={36} />
        </Link>
        <button>
          <IconBell className='w-6 h-6 text-gray-200' />
        </button>
      </div>
      <aside
        className='
          hidden md:flex lg:hidden
          flex-col bg-gray-800 text-gray-200
          w-20 h-screen pt-6
        '
      >
        <Link
          href='/dashboard'
          className='flex items-center justify-center mb-8'
        >
          <Image src='/logo.svg' alt='Logo' width={28} height={28} />
        </Link>
        <nav className='flex-1 flex flex-col space-y-1'>
          {menu.map(({ icon: Icon, label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`
                  relative flex items-center justify-center
                  h-12
                  ${active ? 'bg-gray-700' : ''}
                  hover:bg-gray-700
                  transition-colors
                `}
              >
                {active && (
                  <span className='absolute left-0 w-1 h-full bg-blue-500 rounded-r' />
                )}
                <Icon className='w-6 h-6' />
              </Link>
            );
          })}
        </nav>
      </aside>
      <aside
        className='
          hidden lg:flex
          flex-col bg-gray-800 text-gray-200
          w-64 h-screen
        '
      >
        <div className='h-16 flex items-center px-6'>
          <Image src='/logo.svg' alt='Logo' width={36} height={36} />
          <span className='ml-3 text-lg font-semibold'>Dashboard Kit</span>
        </div>
        <nav className='flex-1 px-4 mt-4 space-y-2'>
          {menu.map(({ icon: Icon, label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`
                  flex items-center px-3 py-3 rounded-md
                  ${active ? 'bg-gray-700' : 'hover:bg-gray-700'}
                  transition-colors
                `}
              >
                <Icon className='w-6 h-6' />
                <span className='ml-4'>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
