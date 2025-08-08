import React from 'react';
import { Container, Wrapper } from "./Layout";

const Experiences = () => {
  return (
    <div id="experiences-formations" className="flex bg-white py-[150px]">
      <section className="w-1/2 lg:px-[80px]">
        <Container className="">
          <Wrapper className="">
            <h2 className="text-[3rem] font-bold mb-12">Mes expériences</h2>
            <div className="experience mb-8">
              <div className="list-item-large mb-6">
                <h3 className="text-[1.5rem] font-semibold">IRIS Interactive</h3>
                <span className=''>2020 - 2022</span>
              </div>
              <p className='pb-2'><span className="font-semibold">Développeur front-end</span></p>
              <p className='pb-2'> Sites web sur-mesures dans le secteur du tourisme, sous Wordpress, au Puy-en-Velay (42)</p>
            </div>
            <div className="experience mb-8">
              <div className="list-item-large mb-6">
                <h3 className="text-[1.5rem] font-semibold">N2M Solution</h3>
                <span className=''>2020</span>
              </div>
              <p><b className="font-semibold">Stagiaire développement web</b> à Ambérieu-en-Bugey (01).</p>
            </div>
          </Wrapper>
        </Container>
      </section >
      <section className="w-1/2 lg:px-[80px]">
        <Container className="">
          <Wrapper className="">
            <h2 className="text-[3rem] font-bold mb-12">Mes formations</h2>
            <div className="experience mb-8">
              <div className="list-item-large mb-6">
                <h3 className="text-[1.5rem] font-semibold">LP métiers du numérique</h3>
                <span className=''>2020 - 2021</span>
              </div>
              <p className='pb-2'>Axé sur la <b className="font-semibold">programmation</b> et le <b className="font-semibold">graphisme</b>.</p>
              <p className='pb-2'>Formation en alternance suivie au Puy-en-Velay (42).</p>
            </div>
            <div className="experience mb-8">
              <div className="list-item-large mb-6">
                <h3 className="text-[1.5rem] font-semibold">DUT MMI</h3>
                <span className=''>2018 - 2020</span>
              </div>
              <p className='pb-2'>MMI pour "Métiers du Multimédia et de l'Internet".</p>
              <p className='pb-2'>Formation pluridisciplinaire avec enseignements en <b className="font-semibold">programmation, graphisme, audiovisuel</b> et <b className="font-semibold">communication</b>.</p>
              <p className='pb-2'>Cursus effectué au Bourget-du-Lac (74).</p>
            </div>
          </Wrapper>
        </Container>
      </section >
    </div>

  );
};

export default Experiences;
