import React from 'react'
import Logo from '../home/Logo'
import { Button } from '@/components/ui/button'
import { Folder,Users,Settings } from 'lucide-react'
const Sidebar = () => {
  return (
    <div className='min-h-screen max-w-[20%] h-full border-r-2 pt-4'>
        <div className='flex items-center gap-2 justify-center'>
            <Logo></Logo>
            <p className='text-xl font-bold'>StackRoom</p>
        </div>
        <div className='h-0.25 bg-zinc-300 mt-4'></div>
        <div className='mt-4'>
            <div className='pl-4 pr-4 space-y-3'>
                <Button variant="secondary" className="w-full justify-start cursor-pointer">
                    <Folder></Folder>
                    <p>Projects</p>
                </Button>
                <Button variant="secondary" className="w-full justify-start cursor-pointer">
                    <Users></Users>
                    <p>Members</p>
                </Button>
                <Button variant="secondary" className="w-full justify-start cursor-pointer">
                    <Settings></Settings>
                    <p>Settings</p>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar