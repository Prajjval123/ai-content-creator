import React from "react";
import { Sidebar } from "./_components/sidebar";
import { AIUsage } from "./_components/ai-usage";

const DashboardLayout = ({
  children,
}:Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="md:w-64 hidden md:flex flex-col fixed h-full">
        <Sidebar />
        <AIUsage />
      </div>
      <div className="md:ml-64 bg-gray-50 h-fit pb-5 flex-grow">{children}</div>
    </div>
  );
};

export default DashboardLayout;
