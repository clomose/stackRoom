import React from 'react'
import {Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Folder } from 'lucide-react'
import { EllipsisVertical } from 'lucide-react'
import { Users } from 'lucide-react'
import { Clock } from 'lucide-react'

const WorkspaceCard = () => {
  return (
    <Card className="w-full max-w-sm cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
            <div className='flex justify-between mb-2 items-center'>
                <div className='w-3 h-3 bg-green-600 rounded-full'/>
                <DropdownMenu>
                    <DropdownMenuTrigger asClid>
                        <div className='p-1 rounded-xl hover:bg-slate-50 hover:cursor-pointer'>
                            <EllipsisVertical width={15} height={15}/>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <CardTitle>Frontend Team</CardTitle>
            <CardDescription>React and Next.js Project</CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <Folder height={18} className="text-slate-500"/>
                    <p className='text-sm text-slate-600'>12 projects</p>
                </div>
                <div className='flex items-center gap-1'>
                    <Users height={18} className="text-slate-500"/>
                    <p className='text-sm text-slate-600'>8</p>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <div className='flex items-center gap-1'>
                <Clock height={18} className="text-slate-500"/>
                <p className='text-sm text-slate-600'>Updated 2 hours ago</p>
            </div>
        </CardFooter>
    </Card>
  )
}

export default WorkspaceCard