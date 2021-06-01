import React from "react";

import Accordion from "./Accordion";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Preciso ter algum conhecimento prévio?">
      Laboris velit ullamco velit qui duis eiusmod occaecat cillum laborum magna. Exercitation ipsum id esse minim exercitation deserunt ipsum nulla qui est cillum non sunt ex.
    </Accordion>
    <Accordion title="O acesso é vitalício?">
      Laboris velit ullamco velit qui duis eiusmod occaecat cillum laborum magna. Exercitation ipsum id esse minim exercitation deserunt ipsum nulla qui est cillum non sunt ex.
    </Accordion>
    <Accordion title="As aulas são on-line ou gravadas?">
      Laboris velit ullamco velit qui duis eiusmod occaecat cillum laborum magna. Exercitation ipsum id esse minim exercitation deserunt ipsum nulla qui est cillum non sunt ex.
    </Accordion>
  </>
);
