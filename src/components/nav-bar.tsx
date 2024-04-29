import React from "react"

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <header className="sticky top-0 h-[60px] flex items-center justify-between">
      <div className="navbar-left">左</div>
      <div className="navbar-center">中</div>
      <div className="navbar-right">右</div>
    </header>
  )
}

export default NavBar