import React from 'react'
import { Button } from '@/components/ui/button'
import WorkspaceCard from './WorkspaceCard'
import { Input } from '@/components/ui/input';
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Search } from 'lucide-react'
import { Funnel } from 'lucide-react';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='m-6'>
      <div className='space-y-2'>
        <div className='text-3xl font-bold'>
          Welcome back Alok!  
        </div>
        <p className='text-zinc-500 text-xl'>Ready to build something amazing today?</p>
      </div>
      <div className='mt-6 flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Button className='cursor-pointer'>+ New Workspace</Button>
          {false ? (<Button>+ New Project</Button>) : (<Button variant="secondary" className="cursor-pointer">+ New Project</Button>)}
        </div>
        
      </div>
      <div className='flex items-center justify-between mt-6'>
        <div className='flex items-center gap-2'>
          <Button>Workspaces</Button>
          <Button variant='secondary'>Projects</Button>
        </div>
        <div className='flex items-center relative gap-2'>
          <Input className="pl-8" placeholder="Search Workspaces"></Input>
          <Search height={20} className='absolute left-1 text-gray-500'></Search>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='p-2 border rounded-sm cursor-pointer'>
                <Funnel height={20} className='text-gray-800'></Funnel>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Sort by name</DropdownMenuItem>
              <DropdownMenuItem>Sort by recent</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='mt-6 grid grid-cols-4 gap-4'>
        <WorkspaceCard></WorkspaceCard>
        <WorkspaceCard></WorkspaceCard>
        <WorkspaceCard></WorkspaceCard>
        <WorkspaceCard></WorkspaceCard>
      </div>
      <hr className='mt-10'></hr>
      <Footer></Footer>
    </div>
  )
}

export default Home