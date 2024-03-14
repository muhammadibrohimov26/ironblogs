'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User2 } from "lucide-react"
import { useState } from "react"

const Footer = () => {
    const [active, setActive] = useState(false)
  return (
    <footer className='flex-center py-24 flex-col container max-w-2xl space-y-12'>
      <h1 className="text-5xl font-creteRound text-center max-md:text-3xl">
      Get leastest posts dilivered right to your  inbox
      </h1>
      <div className="grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full">
        <Input type="text" className="w-full col-span-2" placeholder="Your email address"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        <Button variant={active ? 'default' : 'outline'} className='max-md:mt-2'>
          <User2 className="me-2 w-4 h-4"/>
          Join today
        </Button>
      </div>
    </footer>
  )
}

export default Footer