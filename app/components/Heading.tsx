import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-secondary font-extrabold text-2xl md:text-4xl text-center my-20">
      {children}
    </div>
  );
}
