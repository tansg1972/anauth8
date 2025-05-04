import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

export function Nav({children}:{children:ReactNode}){
    return(
        <nav className="bg-slate-400 gap-5 flex flex-row justify-center text-lg">
            {children}
        </nav>
    )
}

export function NavLink(navprop:ComponentProps<typeof Link>){
    return(
        <Link {...navprop} className="p-1 bg-slate-200 hover:bg-slate-300 active:bg-slate-500 cursor-pointer">
    </Link>
    )

}