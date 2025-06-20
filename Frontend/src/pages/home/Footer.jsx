import React from 'react'

import { Sparkles } from 'lucide-react'
import { Zap,MessageCircle,TestTube } from 'lucide-react'
import {Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col items-center pt-8 gap-1'>
            <div className='flex gap-1 items-center'>
                <Sparkles height={18}></Sparkles>
                <p>Powered By StackRoom</p>
            </div>
            <div>
                <p>Everything you need for collaborative coding</p>
            </div>
        </div>
        <div className='flex justify-around mt-5'>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-primary">
                    <Zap className="w-8 h-8" />
                </CardHeader>
                <CardContent className="text-center text-lg font-semibold">
                    Real-time Sync
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground justify-center">
                    Instant collaboration
                </CardFooter>
            </Card>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-primary">
                    <MessageCircle className="w-8 h-8" />
                </CardHeader>
                <CardContent className="text-center text-lg font-semibold">
                    Team Chat
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground justify-center">
                    Built-in communication
                </CardFooter>
            </Card>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-primary">
                    <TestTube className="w-8 h-8" />
                </CardHeader>
                <CardContent className="text-center text-lg font-semibold">
                    Code Execution
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground justify-center">
                    Run code instantly
                </CardFooter>
            </Card>
        </div>
        
    </div>
  )
}

export default Footer