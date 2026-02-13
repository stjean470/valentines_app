import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useMadeContext } from '../AppProvider';
const Nav = () => {
    const { isOpen, toggleNavbar} = useMadeContext();
  return (
    <Navbar fluid rounded className='bg-red-500'>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Its a Treat for you!</span>
      </NavbarBrand>
      <NavbarToggle className='md:block' onClick={toggleNavbar} />
    </Navbar>
  )
}

export default Nav