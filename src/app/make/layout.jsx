import FunctionalNav from "@/components/Admin/FunctionalNav";
import React from "react";

export default function WorkLayout({ children }) {
  return (
    <>
      <FunctionalNav />
      <>{children}</>
    </>
  );
}
