'use client';
import { IStatsCardProps } from "@/types/general";

export function StatsCard({ stat, hasDivider = false }: IStatsCardProps) {
  return (
    <div
    key={stat.label}
    className={`
      flex-1 flex flex-col items-center justify-center
      ${hasDivider ? "border-b border-gray-200" : ""}
    `}
  >
    <p className="text-xl text-gray-label">{stat.label}</p>
    <p className="text-xl font-bold text-gray-900 mt-1">
      {stat.value}
    </p>
  </div>
  );
}
