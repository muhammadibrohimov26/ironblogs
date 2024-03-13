import ModeToogle from "@/components/shared/mode-toogle"
import { navLink } from "@/constants"
import Link from "next/link"
import GlobalSearch from "./global-search"

const Navbar = () => {
  return (
    <div className='h-[10vh] backdrop:blur-sm border-b fixed z-40 inset-0 bg-background'>
    <div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
       <Link href={'/'}>
        <h1 className='text-4xl font-creteRound'>Ironblogs</h1>
       </Link>
       <div className='gap-2 hidden md:flex'>
       {navLink.map(nav =>(
        <Link key={nav.route} href={nav.route} className='hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors'>
        {nav.name}
      </Link>
       ))}
       </div>
            <div className="flex items-center gap-1">
            
        <GlobalSearch/>
        <ModeToogle/>
            </div>
    </div>

    </div>
  )
}

export default Navbar