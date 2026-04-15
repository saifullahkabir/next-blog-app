import Link from "next/link";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 mt-8 ml-20">
        <div className="text-lg font-medium">
          <Link href="/development">Development</Link>
        </div>
        <div className="text-lg font-medium">
          <Link href="/testing">Testing</Link>
        </div>
        <div className="text-lg font-medium">
          <Link href="/marketing">Marketing</Link>
        </div>
        <div className="text-lg font-medium">
          <Link href="/marketing/setting">Setting</Link>
        </div>
        <div className="text-lg font-medium">
          <Link href="/sales">Sales</Link>
        </div>
      </nav>
      <div className="mt-12 mx-20">
        <div className="flex gap-4">
          {marketingSlot}
          {salesSlot}
        </div>
        {children}
      </div>
    </div>
  );
}
