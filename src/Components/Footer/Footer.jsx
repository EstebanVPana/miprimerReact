import { TbHelp } from "react-icons/tb";
export default function Footer(){
    return(
        <div className="bg-slate-900 ">
            <footer className=" justify-between w-[92%] mx-auto">
            <div>
                <ul className="flex py-2 md:gap-[4vw] place-content-center text-center">
                    <li>
                        <a className="hover:text-violet-500 text-white font-sans  " href="https://www.mercadolibre.cl/">Trabaja con nosotros</a>
                    </li>
                    <li>
                        <a className="hover:text-violet-500 text-white font-sans" href="">Términos y condiciones</a> 
                    </li>
                    <li>
                        <a className="hover:text-violet-500 text-white font-sans" href="">Promociones</a>
                    </li>
                    <li>
                        <a className="hover:text-violet-500 text-white font-sans" href="">Cómo cuidamos tu privacidad</a>
                    </li>
                    <li>
                        <a className="hover:text-violet-500 text-white font-sans" href="">Accesibilidad</a>
                    </li>
                    <li>
                        <a className="hover:text-violet-500 text-white font-sans flex " href="w">Ayuda <TbHelp /></a>
                    </li>
                </ul>
            </div>
            <div className="px-4 py-1 text-xs text-slate-300">
                <p>Copyright © 1999-2024 MercadoLibre Chile Ltda.</p>
            </div>
            <div className="px-4 py-3 text-xs text-slate-300">
                <p>Av. Apoquindo 4800, Torre 2, piso 21, Las Condes, Santiago - Chile.</p>    
            </div>    
            </footer>
            
        </div>
        
    )
}