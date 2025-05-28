'use client';
import Image from 'next/image';
import React from 'react';
import { IAvatarProps } from '@/types/general';

export function Avatar({
  src,
  alt = 'Avatar',
  size = 32,
  className = '',
}: IAvatarProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className='object-cover'
      />
    </div>
  );
}
