import { CiInstagram } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import './menu.css';
import logo from '../../assets/imgs/logo/logopng.png';


export default function Menu() { 
  return (
    <header>
      <div className="bg-primary py-2">
        <ul className="content flex justify-end items-center gap-3 pr-4">
          <li>
            <a href="#" target='_blank'>
              <CiInstagram size={25} className="text-secondary hover:text-green-700 transition" />
            </a>
          </li>
          <li>
            <button className='cursor-pointer btn '>
              Entre em contato
            </button>
          </li>
        </ul>
      </div>
      <nav className="content flex  items-center gap-3 pr-4">
        <Link to={'/'}>
        <img className='w-[160px]' src={logo} alt="Logo Servil" />
        </Link>
        <ul className="flex gap-6 text-lg font-medium justify-center w-full">
          <li className='hover:text-accent'><Link to={'/'}>Home</Link></li>
          <li className='hover:text-accent'><Link to={'/'}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
