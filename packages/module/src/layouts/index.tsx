import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg prose-blue dark:prose-invert">
      {children}
    </div>
  );
}
