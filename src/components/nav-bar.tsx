import React from "react"
import Link from "next/link";
import Image from "next/image";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <header className="sticky top-0 h-[60px] flex items-center justify-between">
      <div className="navbar-left flex items-center gap-2 px-4">
        <Image className='w-[60px] h-[37px]' src={'/logo.png'} alt="logo" width={0} height={0} sizes="100vw" priority />
        <h1 className="text-xl">演奏助手</h1>
      </div>
      <div className="navbar-center flex items-center gap-8">
        <Link href={'/'}>首页</Link>
        <Link href={'/guide'}>使用说明</Link>
        <Link href={'/song-list'}>谱曲</Link>
        <Link href={'/changelog'}>更新日志</Link>
        <Link href={'/about'}>关于</Link>
      </div>
      <div className="navbar-right">右</div>
    </header>
  )
}

export default NavBar
