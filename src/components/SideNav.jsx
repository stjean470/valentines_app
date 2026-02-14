import React from 'react'
import { Drawer, DrawerHeader, DrawerItems, Sidebar, SidebarItems, SidebarItemGroup, SidebarItem, Button, TextInput } from 'flowbite-react'
import { HiChartPie, HiShoppingBag, HiUsers, HiLogin, HiPencil, HiClipboard, HiCollection, HiInformationCircle, HiSearch } from 'react-icons/hi'
import { useMadeContext } from '../AppProvider'
const SideNav = () => {
    const {isOpen, setIsOpen, toggleNavbar} = useMadeContext();
  return (
    <>
      <Drawer className='bg-pink-200 dark:bg-pink-200' open={isOpen} onClose={toggleNavbar}>
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem href="/will-you" icon={HiChartPie}>
                      Will You...?
                    </SidebarItem>
                    <SidebarItem href="/presentation" icon={HiShoppingBag}>
                      Presentation
                    </SidebarItem>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  )
}

export default SideNav