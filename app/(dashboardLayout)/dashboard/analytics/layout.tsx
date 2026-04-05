"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentValue = pathname.includes("monthly") ? "monthly" : "weekly";
  return (
    <div>
      <ToggleGroup variant="outline" type="single" defaultValue={currentValue}>
        <ToggleGroupItem value="weekly" asChild>
          <Link href="/dashboard/analytics/weekly">Weekly</Link>
        </ToggleGroupItem>
        <ToggleGroupItem value="monthly" asChild>
          <Link href="/dashboard/analytics/monthly">Monthly</Link>
        </ToggleGroupItem>
      </ToggleGroup>

      {children}
    </div>
  );
}
