import React from "react";

import Callout, {CalloutBody,CalloutActions, CalloutMedia} from "./Callout";
import Button from "./Button";

import SigninImagem from "draws/Sign";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: {CalloutBody, CalloutActions, CalloutMedia}
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matricula agora mesmo.</h6>
      <p>
        Ipsum Lorem nisi consequat non commodo labore tempor. Ut aute eiusmod sint aute magna officia aute anim mollit labore dolore anim aliquip sit. Ipsum sunt magna ipsum irure in pariatur adipisicing labore. Anim non deserunt irure nulla dolore fugiat. Do dolore sit aliquip mollit sunt adipisicing labore ea sit proident ipsum. Ipsum Lorem laboris mollit tempor in fugiat exercitation enim. Reprehenderit duis duis Lorem ex id do.
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SigninImagem />
    </CalloutMedia>
  </Callout>
);
