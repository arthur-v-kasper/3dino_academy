import React from "react";

import Error from "components/pages/Error";

import OopsImage from "draws/Oops";

const error404 = () => (
  <Error 
  image={<OopsImage />}
  title="Página não encontrada =("
  description="Ué... parece que essa página não existe."
  />
);

export default error404;
