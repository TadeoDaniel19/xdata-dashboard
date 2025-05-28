'use client';
import Image from 'next/image';
import { IChartProps } from '../../types/general';
import { StatsCard } from '../StatsCard/StatsCard';

export default function ChartStatsSection({ stats }: IChartProps) {
  return (
    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-7 items-stretch'>
        <div className='col-span-1 md:col-span-5 p-6'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6'>
            <div className='space-y-1'>
              <h2 className='text-xl font-bold text-black'>Today’s trends</h2>
              <p className='text-lg text-gray-500'>
                as of 25 May 2019, 09:41 PM
              </p>
            </div>
            <div className='mt-4 lg:mt-0 flex items-center space-x-6'>
              <div className='flex items-center space-x-1'>
                <span className='block w-6 h-[4px] bg-primary-blue rounded-full' />
                <span className='text-lg text-gray-500'>Today</span>
              </div>
              <div className='flex items-center space-x-1'>
                <span className='block w-6 h-[4px] bg-gray-300 rounded-full' />
                <span className='text-lg text-gray-500'>Yesterday</span>
              </div>
            </div>
          </div>

          <div className='overflow-hidden rounded-lg'>
            <Image
              src='/dashboard.png'
              alt='Trends chart'
              width={700}
              height={300}
              className='w-full h-auto'
            />
          </div>
        </div>
        <div
          className='hidden md:flex flex-col justify-between
            col-span-1 md:col-span-2
            border-t border-gray-200
            md:border-t-0 md:border-l
            p-6'
        >
          {stats.map((stat, idx) => (
            <StatsCard
              stat={stat}
              hasDivider={idx < stats.length - 1}
              key={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
