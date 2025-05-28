'use client';
import { HiOutlineDocumentText, HiOutlineDotsVertical } from 'react-icons/hi';
import type { IconType } from 'react-icons';
import { headers, iconMap } from '@/data/dashboard';
import { FileRow } from '@/types/general';

interface FileTableProps {
  files: FileRow[];
}

export function FileTable({ files }: FileTableProps) {
  const DotVerticalIcon = HiOutlineDotsVertical as IconType | any;
  const getIcon = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    return iconMap[ext] ?? HiOutlineDocumentText;
  };
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            {headers.map(h => (
              <th
                key={h.key}
                className={`
                  px-6 py-3
                  text-${h.align}
                  text-xs font-semibold text-gray-500
                `}
              >
                {h.key === 'select' ? (
                  <input
                    type='checkbox'
                    className='h-4 w-4 text-purple-600 border-gray-300 rounded justify-center align-middle'
                  />
                ) : (
                  h.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {files.map((f, idx) => {
            const Icon = getIcon(f.name);
            return (
              <tr key={idx}>
                <td className='px-6 py-4 whitespace-nowrap align-middle justify-center '>
                  <input
                    type='checkbox'
                    className='h-4 w-4 text-purple-600 border-gray-300 rounded'
                  />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  <div className='flex items-center'>
                    <Icon className='w-5 h-5 text-purple-500' />
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900'>
                        {f.name}
                      </p>
                      <p className='text-xs text-gray-500'>{f.size}</p>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center'>
                  {f.size}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  {f.uploaded}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                  {f.updated}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center'>
                  {f.by}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-gray-400 text-center'>
                  <button className='hover:text-gray-600'>
                    <DotVerticalIcon className='w-5 h-5' />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
