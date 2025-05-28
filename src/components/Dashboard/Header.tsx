'use client';
import { HiOutlineSearch, HiOutlineBell } from 'react-icons/hi';
import { Avatar } from '../Avatar/Avatar';

export default function Header() {
  const SearchIcon = HiOutlineSearch as any;
  const BellIcon = HiOutlineBell as any;
  return (
    <header className='hidden md:flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
      <h1 className='text-lg font-semibold text-gray-900'>Overview</h1>
      <div className='flex items-center space-x-4'>
        <button className='text-gray-500 hover:text-gray-700'>
          <SearchIcon className='w-5 h-5' />
        </button>
        <button className='text-gray-500 hover:text-gray-700'>
          <BellIcon className='w-5 h-5' />
        </button>
        <div className='h-6 border-l border-gray-300' />
        <span className='text-sm text-gray-700'>Jones Ferdinand</span>
        <Avatar src='/avatar.png' />
      </div>
    </header>
  );
}
