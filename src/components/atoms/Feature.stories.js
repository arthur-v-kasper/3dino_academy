import React from "react";
import { FaOtter } from "react-icons/fa"

import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature
}

export const usage = () => (
  <Feature icon={< FaOtter />} title="Meu título">Meu conteúdo</Feature>
);
