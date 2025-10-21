import './menu.css';
import { CiInstagram } from 'react-icons/ci';

export default function Menu() { 
  return (
    <nav className="bg-yellow-500 py-2">
      <div className="content flex justify-end items-center gap-3 pr-4">
        <a href="#" target='_blank'>
          <CiInstagram size={25} className="text-blue-900 hover:text-green-700 transition" />
        </a>
        <button className='cursor-pointer btn'>
          Entre em contato
        </button>
      </div>
    </nav>
  );
}
