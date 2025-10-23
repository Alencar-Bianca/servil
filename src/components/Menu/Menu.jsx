import { CiInstagram, CiMapPin } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import logo from '../../assets/imgs/logo/logopng.png';
import bannerDesktop from '../../assets/imgs/logo/banner-desktop.png';


export default function Menu() { 
  return (
    <header>
      <div className="bg-primary py-2">
        <div className="content flex justify-between items-center">
          <p className="text-xs text-secondary opacity-90 flex gap-1 items-center"><CiMapPin /> Atendimento em todo o Brasil</p>
          <ul className="flex justify-end items-center gap-3 pr-4">
            <li>
              <a href="#" target='_blank'>
                <CiInstagram size={25} className="text-secondary hover:text-green-700 transition" />
              </a>
            </li>
            <li>
              <button className='cursor-pointer btn'>
                Entre em contato
              </button>
            </li>
          </ul>
        </div>

      </div>
      <nav className="  bg-[#dfdfdf]">
        <div className=' content flex items-center gap-3 pr-4'>
          <Link to={'/'} className='w-[90px]'>
          <img className='w-full' src={logo} alt="Logo Servil" />
          </Link>
          <ul className="flex gap-6 text-lg  justify-center w-full font-thin">
            <li className='hover:text-accent'><Link to={'/'}>Home</Link></li>
            <li className='hover:text-accent'><Link to={'/'}>Sobre</Link></li>
            <li className='hover:text-accent'><Link to={'/'}>Contato</Link></li>
          </ul>
          </div>
      </nav>
      <figure>
        <img src={bannerDesktop} alt="" />
      </figure>
    </header>
  );
}
