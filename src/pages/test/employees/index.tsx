import * as React from 'react'
import { Minus, Plus } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import { Button } from '@/components/ui/button'
import { Suspense } from "react";

import { Toaster } from "@/components/ui/sonner";

import { use } from "./lib/use-promise";
import { getUsers } from "./lib/api";
import { UsersTable } from "./components/users-table";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { tempchartdata } from '../data/temp-chart-data'

function UsersTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-10 w-full bg-muted rounded-md" />
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    </div>
  );
}

function UsersTableContainer() {
  const users = use(getUsers());
  return <UsersTable users={users} />;
}


export default function EmployeeManagement() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
  return (
    <>
      <div className='mb-2 flex items-center justify-between space-y-2'>
        <h1 className='font-bold text-2xl tracking-tight'>
          Employee Management
        </h1>
        <div className='flex items-center space-x-2'>
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Add a Employee</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className='mx-auto w-full max-w-lg'>
                <DrawerHeader>
                  <DrawerTitle>Add a Employee</DrawerTitle>
                  <DrawerDescription>
                    Add a employee of your organization. Please keep in mind
                    that a employees email must contain a validated domain url
                    in the mailaddress
                  </DrawerDescription>
                </DrawerHeader>
                <div className='p-4 pb-0'>
                  <div className='flex items-center justify-center space-x-2'>
                    <Button
                      variant='outline'
                      size='icon'
                      className='h-8 w-8 shrink-0 rounded-full'
                      onClick={() => onClick(-10)}
                      disabled={goal <= 200}
                    >
                      <Minus className='h-4 w-4' />
                      <span className='sr-only'>Decrease</span>
                    </Button>
                    <div className='flex-1 text-center'>
                      <div className='font-bold text-7xl tracking-tighter'>
                        {goal}
                      </div>
                      <div className='text-[0.70rem] uppercase text-muted-foreground'>
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant='outline'
                      size='icon'
                      className='h-8 w-8 shrink-0 rounded-full'
                      onClick={() => onClick(10)}
                      disabled={goal >= 400}
                    >
                      <Plus className='h-4 w-4' />
                      <span className='sr-only'>Increase</span>
                    </Button>
                  </div>
                  <div className='mt-3 h-[120px]'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <BarChart data={tempchartdata}>
                        <Bar
                          dataKey='goal'
                          style={
                            {
                              fill: 'hsl(var(--chart-5))',
                              opacity: 0.9,
                            } as React.CSSProperties
                          }
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant='outline'>Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Team Directory</h1>
        <p className="text-muted-foreground mt-2">
          Browse and manage team members across all departments.
        </p>
      </div>
      
        <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTableContainer />
      </Suspense>
      <Toaster />
    </div>
    </>
  )
}
