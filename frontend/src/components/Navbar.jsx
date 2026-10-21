import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-medium py-5">
      <img src={assets.logo} className="w-36" alt="Logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <span>HOME</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <span>COLLECTION</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <span>ABOUT</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <span>CONTACT</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
