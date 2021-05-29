import React from "react";
// import Proptypes from "prop-types";
import { FaOtter, FaCheck, FaStudiovinari, FaCashRegister } from "react-icons/fa";


import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";

import HeroImage from "assets/dino-01.jpg";

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Venha conhecer tudo sobre <strong>Dinossauros</strong>
          <br />  
          no nosso Dino-Curso
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
        <Feature icon={< FaOtter />} title="Conheça todas as eras">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaCheck />} title="Aprenda tudo sobre os tipos">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaStudiovinari />} title="Se torne um paleontólogo">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaCashRegister />} title="Acessível">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
      </Grid>
    </Section>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
