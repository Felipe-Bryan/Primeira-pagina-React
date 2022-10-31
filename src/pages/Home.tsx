import React from 'react';
import { ContentRow1, ContentRow2 } from '../components/ContentRow';
import Footer from '../components/Footer';
import InfoBox from '../components/InfoBox';
import InfoItem from '../components/InfoItem';

const Home: React.FC = () => {
  return (
    <>
      <InfoBox text="Minha primeira página com React"></InfoBox>
      <div className="infoBar">
        <InfoItem imgUrl="./assets/airplane.svg" alt="airplane" title="Somente para desktop" subtitle="Vamos aprender como utilizar um framework." />
        <InfoItem imgUrl="./assets/bricks.svg" alt="sheets" title="Criado com componentes" subtitle="Utilizamos o Styled Components." />
        <InfoItem imgUrl="./assets/calendar-check.svg" alt="selecionado" title="Fácil aproveitamento" subtitle="Estamos no caminho" />
      </div>
      <ContentRow1
        imgUrl="./assets/bg1.jpg"
        alt="image1"
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto recusandae molestias quod maiores odio numquam corrupti veritatis deserunt autem, tenetur ullam facere amet nam cum dolor? Quis, rerum repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto recusandae molestias quod maiores odio numquam corrupti veritatis deserunt autem, tenetur ullam facere amet nam cum dolor? Quis, rerum repellendus."
      />
      <ContentRow2
        imgUrl="./assets/bg2.jpg"
        alt="image2"
        title="Lorem Ipsum"
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto recusandae molestias quod maiores odio numquam corrupti veritatis deserunt autem, tenetur ullam facere amet nam cum dolor? Quis, rerum repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto recusandae molestias quod maiores odio numquam corrupti veritatis deserunt autem, tenetur ullam facere amet nam cum dolor? Quis, rerum repellendus."'
      />
      <ContentRow1
        imgUrl="./assets/bg3.jpg"
        alt="image1"
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto recusandae molestias quod maiores odio numquam corrupti veritatis deserunt autem, tenetur ullam facere amet nam cum dolor? Quis, rerum repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto recusandae molestias quod maiores odio numquam corrupti veritatis deserunt autem, tenetur ullam facere amet nam cum dolor? Quis, rerum repellendus."
      />
      <InfoBox text="Contato"></InfoBox>
      <Footer />
    </>
  );
};

export default Home;
