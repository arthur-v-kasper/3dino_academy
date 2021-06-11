import React from "react";

import Error from "./Error";
import OopsImage from "draws/Oops";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error 
  image={<OopsImage />}
  title="Página não encontrada =("
  description="Ué... parece que essa página não existe."
  />
);
