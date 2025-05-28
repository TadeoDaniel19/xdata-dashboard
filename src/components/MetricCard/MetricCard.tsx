import { IMetricCardProps } from '../../types/general';

export function MetricCard({ title, value }: IMetricCardProps) {
  return (
    <div className='p-4 rounded-lg border text-center bg-white border-gray-200  hover:border-primary-blue hover:text-primary-blue hover:cursor-pointer'>
      <p className='text-lg text-gray-label font-semibold'>{title}</p>
      <p className='text-2xl font-bold'>{value}</p>
    </div>
  );
}
