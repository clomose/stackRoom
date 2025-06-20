import React from 'react'
import Logo from './Logo'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-3 shadow-sm bg-white">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-2xl font-bold tracking-tight text-gray-800">
            StackRoom
          </span>
        </div>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-medium">Alok Sehgal</span>
                <span className="text-sm text-muted-foreground">alok@gmail.com</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* bottom border */}
      <div className="h-[1px] bg-slate-200"></div>
    </>
  )
}

export default Navbar
