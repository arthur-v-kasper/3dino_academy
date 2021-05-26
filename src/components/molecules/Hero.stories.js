import React from "react";
import { text } from "@storybook/addon-knobs";

import Dino1 from "stories/assets/dino-01.jpg";
import Dino2 from "stories/assets/dino-02.jpg";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Hero from "./Hero";

export default {
  title: "Components/Molecules/Hero",
  componet: Hero,
};

export const withList = () => (
  <Hero image={Dino1}>
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
);

export const usage = () => (
  <Hero image={Dino2}>
    <h1>{text("Title","Venha conhecer tudo sobre Dinossauros no nosso Dino-Curso")}</h1>
    <p>{text("Text","Melhor dino-curso ever!")}</p>
  </Hero>
);
