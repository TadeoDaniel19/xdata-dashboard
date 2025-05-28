"use client";

import { IMetricsProps } from "@/types/general";
import { MetricCard } from "../MetricCard/MetricCard";


export default function MetricsSection({ data }: IMetricsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((m) => (
        <MetricCard key={m.title} title={m.title} value={m.value}/>
      ))}
    </div>
  );
}
