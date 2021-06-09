import React from "react";
// import Proptypes from "prop-types";
import { FaOtter, FaCheck, FaStudiovinari, FaCashRegister } from "react-icons/fa";
import {Link} from "react-router-dom";


import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/dino-01.jpg";
import HeroVideo from "assets/dinosaur.mp4";
import ProductImage1 from "assets/dino-vet.png";
import ProductImage2 from "assets/dino-vet2.png";
import ProductImage3 from "assets/dino-vet3.png";
import ProductImage4 from "assets/dino-vet4.png";
import ProductImage5 from "assets/dino-vet5.png";
import ProductImage6 from "assets/dino-vet6.png";


const products = [
  {id:0, title:"Ipsum non Velit", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage1},
  {id:1, title:"Excepteur ullamco mollit", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage2},
  {id:2, title:"Adipisicing aliquip", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage3},
  {id:3, title:"Culpa ipsum non", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage4},
  {id:4, title:"Ullamco mollit eu culpa", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage5},
  {id:5, title:"Non velit adipisicing", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage6}, 
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Venha conhecer tudo sobre <strong>renderização 3D</strong>
          <br />  
          com dinossauros
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
      </ul>
      <Button color="primary" variant="outlined" >Matricule-se Agora</Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={< FaOtter />} title="Conheça todas as tecnologias">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaCheck />} title="Do zero ao avançado">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaStudiovinari />} title="Aprenda as melhores técnicas">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaCashRegister />} title="Acessível">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>3Dino Academy</h2>
          </Heading>        
          <p>
            loVeniam enim anim dolor cupidatat irure dolore et. 
            Duis aliquip consectetur excepteur amet non nostrud ad non sunt. Nostrud do commodo ea dolore est fugiat amet Lorem reprehenderit elit aliqua. Ullamco mollit non incididunt deserunt laboris duis sint laboris.
          </p>
          <div>
            <Button as={Link} to="/about" color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={HeroVideo} width="100%" autoPlay playsInline loop muted />
        </div>
      </Grid>      
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas frequentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Preciso ter algum conhecimento prévio?">
          Laboris velit ullamco velit qui duis eiusmod occaecat cillum laborum magna. Exercitation ipsum id esse minim exercitation deserunt ipsum nulla qui est cillum non sunt ex.
        </Accordion>
        <Accordion title="O acesso é vitalício?">
          Laboris velit ullamco velit qui duis eiusmod occaecat cillum laborum magna. Exercitation ipsum id esse minim exercitation deserunt ipsum nulla qui est cillum non sunt ex.
        </Accordion>
        <Accordion title="O curso possui suporte aos alunos?">
          Laboris velit ullamco velit qui duis eiusmod occaecat cillum laborum magna. Exercitation ipsum id esse minim exercitation deserunt ipsum nulla qui est cillum non sunt ex.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
