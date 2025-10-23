import instalacaodelavanderia from '../../assets/imgs/logo/instalacaodelavanderia.jpg';
import lavadora from '../../assets/imgs/logo/lavadora.jpg';
import secadora from '../../assets/imgs/logo/secadora.jpg';

export default function Solution() {
  return (
    <section className="py-10 bg-primary text-white">
      <div className="content max-w-3xl mx-auto">
        <div className="flex items-center gap-6 flex-wrap justify-between flex-col md:flex-row">
          <h2 className="font-bold mb-2 flex-1 text-xl">
            Soluções <span className="text-secondary text-base font-normal">(sob medida para o seu negócio)</span>
            
          </h2>
          <p className="text-gray-100 mt-3 leading-relaxed text-sm flex-1">
            Nossos equipamentos e sistemas oferecem automação e controle completos,
            otimizando processos e elevando o desempenho operacional.
            Mais eficiência, qualidade e confiabilidade em cada resultado.
          </p>
        </div>
        <div className="imgs flex items-center justify-center w-full flex-wrap py-10 ">
          <div className="w-[350px] h-[350px] relative ">
            <img className="w-full h-full " src={instalacaodelavanderia} alt="instalação de lavanderia"  />
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="absolute inset-0 px-4 py-6 flex flex-col justify-center ">
              <h2 className='font-bold text-lg'>Instalações para lavanderias</h2>
              <div className="line"></div>
              <p className="text-sm hover:block">
                Planejamento e execução de sistemas completos, com infraestrutura segura e eficiente para o melhor desempenho dos equipamentos.
              </p>
            </div>
            
          </div>

          <div className="w-[350px] h-[350px] relative ">
            <img className="w-full h-full object-cover" src={lavadora} alt="Lavadora"  />
            <div className="absolute inset-0 bg-black/75"></div>
            <div className="absolute inset-0 px-4 py-6 flex flex-col justify-center ">
              <h2 className='font-bold text-lg'>Lavadora</h2>
              <div className="line"></div>
              <p className="text-sm hover:block">
                Equipamentos robustos e econômicos, desenvolvidos para alta produtividade e baixo consumo de água e energia.
              </p>
            </div>
            
          </div>

          <div className="w-[350px] h-[350px] relative ">
            <img className="w-full h-full object-cover " src={secadora} alt="Secadora"  />
            <div className="absolute inset-0 bg-black/75"></div>
            <div className="absolute inset-0 px-4 py-6 flex flex-col justify-center ">
              <h2 className='font-bold text-lg'>Secadora</h2>
              <div className="line"></div>
              <p className="text-sm hover:block">
                 Alta performance e durabilidade, garantindo secagem rápida e uniforme para diferentes tipos de tecidos e volumes.
              </p>
            </div>
            
          </div>
         
        </div>
      </div>
    </section>
  );
}
