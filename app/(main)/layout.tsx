import MainHeader from "@/components/MainHeader";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full w-full">
      <MainHeader />
      <div className="container">{children}</div>
    </section>
  );
};

export default MainLayout;
