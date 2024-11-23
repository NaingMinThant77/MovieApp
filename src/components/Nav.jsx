import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between bg-black text-white px-10 py-4">
            <h1 className="text-2xl font-bold font-mono">MovieApp</h1>
            <div className="flex items-center space-x-3">
                <NavLink to={"/"} className="text-xl font-medium">Popular</NavLink>
                <NavLink to={"/upcoming"} className="text-xl font-medium">Upcoming</NavLink>
            </div>
            <form className="flex items-center justify-center">
                <input type="text" className="text-xl bg-transparent border-b border-b-slate-300 focus:outline-none" />
                <MagnifyingGlassIcon className="w-8 h-8" />
            </form>
        </nav>
    )
}

export default Nav