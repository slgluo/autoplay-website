import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "演奏助手",
  description: "演奏助手，一款用于天刀端游、天刀手游PC版、一梦江湖和原神的21键自动弹奏的PC端软件。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
