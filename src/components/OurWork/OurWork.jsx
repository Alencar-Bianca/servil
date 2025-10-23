import hospsp from '../../assets/imgs/clients/hospsp.jpg';
import maltec from '../../assets/imgs/clients/maltec.jpg';
import paci from '../../assets/imgs/clients/paci.jpg';
import vilagale from '../../assets/imgs/clients/vilagale.jpg';

export default function OurWork() {
  return (
    <section className="py-5">
      <div className="content ">
        <h2 className="font-bold text-3xl inline">Clientes </h2><span className="text-gray-500 text-base">(trabalhamos com)</span>
        <div className="clients flex">
          <figure className="w-full flex justify-center items-center mt-5 flex-wrap gap-10">
            <img className="w-64" src={hospsp} alt="Hospital São Paulo" />
            <img className="w-64" src={maltec} alt="Maltec" />
            <img className="w-64" src={paci} alt="Paci" />
            <img className="w-64"  src={vilagale} alt="Vila Gále" />
          </figure>
        </div>

      </div>
      
    </section>
  );
}