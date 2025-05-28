import { FileRow, Metric, Stat } from '@/types/general';
import {
  HiOutlineDocumentText,
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
} from 'react-icons/hi';
import type { IconType } from 'react-icons';

export const metrics: Metric[] = [
  { title: 'Unresolved', value: 60 },
  { title: 'Overdue', value: 16, active: true },
  { title: 'Open', value: 43 },
  { title: 'On hold', value: 64 },
];

export const stats: Stat[] = [
  { label: 'Resolved', value: '449' },
  { label: 'Received', value: '426' },
  { label: 'Average first response', value: '33m' },
  { label: 'Average response', value: '3h 8m' },
  { label: 'Resolution within SLA', value: '94%' },
];

export const files: FileRow[] = [
  {
    name: 'Tech requirements.pdf',
    size: '200 KB',
    uploaded: 'Jan 4, 2022',
    updated: 'Jan 4, 2022',
    by: 'Olivia Rhye',
  },
  {
    name: 'Dashboard screenshot.jpg',
    size: '720 KB',
    uploaded: 'Jan 4, 2022',
    updated: 'Jan 4, 2022',
    by: 'Phoenix Baker',
  },
  {
    name: 'Dashboard prototype.mp4',
    size: '16 MB',
    uploaded: 'Jan 2, 2022',
    updated: 'Jan 2, 2022',
    by: 'Lana Steiner',
  },
];

export const iconMap: Record<string, IconType | any> = {
  pdf: HiOutlineDocumentText,
  jpg: HiOutlinePhotograph,
  jpeg: HiOutlinePhotograph,
  png: HiOutlinePhotograph,
  mp4: HiOutlineVideoCamera,
};

export const headers = [
  { key: 'select', label: '', align: 'center' },
  { key: 'name', label: 'File name', align: 'center' },
  { key: 'size', label: 'File size', align: 'center' },
  { key: 'uploaded', label: 'Date uploaded', align: 'center' },
  { key: 'updated', label: 'Last updated', align: 'center' },
  { key: 'by', label: 'Uploaded by', align: 'center' },
  { key: 'actions', label: '', align: 'center' },
] as const;
