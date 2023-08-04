import React from "react";
export const metadata = {
  title: "JEP Dashboard",
  description: "Displays operation data for the JEP",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main lang="en">{children}</main>;
}
