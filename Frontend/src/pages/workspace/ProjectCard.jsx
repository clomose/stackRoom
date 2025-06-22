import React from 'react'
import {Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Folder,File } from 'lucide-react'
import { EllipsisVertical } from 'lucide-react'
import { Users } from 'lucide-react'
import { Clock } from 'lucide-react'

const ProjectCard = () => {
  return (
    <Card className="w-full max-w-sm cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
            <div className='flex justify-between mb-2 items-center'>
                <div className='font-bold'>Ecommerce Frontend</div>
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
            <CardDescription className='text-gray-500'>React-based shopping platform with modern UI</CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <File height={18} className="text-slate-500"/>
                    <p className='text-sm text-slate-600'>12 Files</p>
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

export default ProjectCard