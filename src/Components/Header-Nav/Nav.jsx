import {useState} from "react"
import {Link } from "react-scroll"
import {FaTimes} from "react-icons/fa" 
import {CiMenuFries} from "react-icons/ci"

const Nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0  bg-slate-900 transition">
        <ul className="text-center  text-xl p-20">
            <Link spy={true} smooth={true}  to="Home">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-400 hover:rounded ">Categorias</li>
            </Link>
            <Link spy={true} smooth={true}  to="About ">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-400 hover:rounded ">Ofertas</li>
            </Link>
            <Link spy={true} smooth={true}  to="Services">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-400 hover:rounded ">Moda</li>
            </Link>
            <Link spy={true} smooth={true}  to="Proyects">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-400 hover:rounded ">Mis compras</li>
            </Link>
            <Link spy={true} smooth={true}  to="Contact">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-400 hover:rounded ">Crea tu cuenta</li>
            </Link>
        </ul>
    </div>
    </>
    return(
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                        <h1 className="text-white  w-12 font-bold text-2xl hover:scale-105 font-sans duration-500 cursor-pointer">Compra<span className=" text-violet-500 rounded-full">Music</span></h1>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px] ">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="hover:text-violet-500 transition border-b-2 border-slate-900 hover:border-slate-900 cursor-pointer ">Categorias</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="hover:text-violet-500 transition border-b-2 border-slate-900 hover:border-slate-900 cursor-pointer">Ofertas</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Services">
                            <li className="hover:text-violet-500 transition border-b-2 border-slate-900 hover:border-slate-900 cursor-pointer">Moda</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Proyects">
                            <li className="hover:text-violet-500 transition border-b-2 border-slate-900 hover:border-slate-900 cursor-pointer">Mis compras</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact">
                            <li className="hover:text-violet-500 transition border-b-2 border-slate-900 hover:border-slate-900 cursor-pointer">Crea tu cuenta</li>
                        </Link>
                    </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}
export default Nav