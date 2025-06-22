import React from 'react'
import Logo from '../home/Logo'
import { Button } from '@/components/ui/button'
import { Folder,Users,Settings,Search,Funnel,Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import ProjectCard from './ProjectCard'
const Sidebar = () => {
  return (
    <div className='flex gap-2 w-full'>
        <div className='min-h-screen max-w-[20%] h-full border-r-2 pt-4 sticky top-0'>
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
        <div className='p-6 w-full'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-3xl'>Frontend Team</h1>
                    <p className='text-gray-500'>Collaborative workspace for frontend development projects and experiments</p>
                </div>
                <div>
                    <Button className="flex justify-center gap-2 items-center cursor-pointer">
                        <Settings></Settings>
                        Settings
                    </Button>
                </div>
            </div>
            <div className='flex mt-8 justify-between items-center'>
                <div className='relative' >
                    <Input className='pl-10' placeholder="Search Projects ..."/>
                    <Search height={20} className='absolute top-2 left-2'></Search>
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className='p-2 border rounded-sm cursor-pointer flex gap-1 justify-center items-center'>
                                <Funnel height={20} className='text-white'></Funnel>
                                <p>Sort</p>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Sort by name</DropdownMenuItem>
                            <DropdownMenuItem>Sort by files</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className='mt-4 grid grid-cols-4 gap-4'>
                <Card className="border-2 border-dashed cursor-pointer">
                    <CardHeader>
                        <CardTitle className="flex justify-center">
                            <Plus height={70} width={70} className='bg-gray-400 rounded-full'></Plus>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex justify-center'>
                        <h1 className='font-bold'>Create New Project</h1>
                    </CardContent>
                    <CardFooter>
                        <h2 className='text-center text-gray-500'>Start building something amazing</h2>
                    </CardFooter>
                </Card>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    </div>
  )
}

export default Sidebar