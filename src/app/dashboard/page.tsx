'use client';

import Header from '@/components/dashboard/Header';
import MetricsSection from '@/components/dashboard/MetricsSection';
import ChartStatsSection from '@/components/dashboard/ChartSection';
import FilesSection from '@/components/dashboard/FilesSection';
import SideNav from '@/components/Dashboard/SideNav';
import { files, metrics, stats } from '@/data/dashboard';

export default function DashboardPage() {
  return (
    <div className='flex h-screen bg-background'>
      <SideNav />
      <div className='flex-1 flex flex-col overflow-hidden pt-16 md:pt-0'>
        <Header />
        <main className='flex-1 overflow-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6'>
          <MetricsSection data={metrics} />
          <ChartStatsSection stats={stats} />
          <FilesSection files={files} />
        </main>
      </div>
    </div>
  );
}
