import React from "react";
import { FaOtter, FaCheck, FaStudiovinari, FaCashRegister } from "react-icons/fa";

import Feature from "./Feature";
import Grid from "components/atoms/Grid";

export default {
  title: "Components/Atoms/Feature",
  component: Feature
}

export const usage = () => (
  <Feature icon={< FaOtter />} title="Meu título">
    <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
  </Feature>
);

export const withGrid = () => (
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
);
