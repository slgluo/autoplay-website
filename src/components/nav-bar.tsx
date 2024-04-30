import React from "react"
import Link from "next/link";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <header className="sticky top-0 h-[60px] flex items-center justify-between">
      <div className="navbar-left">左</div>
      <div className="navbar-center flex items-center gap-8">
        <Link href={'/'}>首页</Link>
        <Link href={'/guide'}>使用说明</Link>
        <Link href={'/song-list'}>谱曲</Link>
        <Link href={'/about'}>关于</Link>
      </div>
      <div className="navbar-right">右</div>
    </header>
  )
}

export default NavBar