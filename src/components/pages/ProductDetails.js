import React from "react";
// import PropTypes from "prop-types";
import styled from 'styled-components';
import {FaIdCard, FaHome, FaScroll} from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Herading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {CalloutBody,CalloutActions, CalloutMedia} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";

import SigninImagem from "draws/Sign";
import HeroImage from "assets/dino-01.jpg";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItens = styled.li`
  display: inline-block; 
  border : 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetails = () => (
    <>
      <Hero image={HeroImage}>
        <Herading>
          <h1>Nome do serviço</h1>
        </Herading>
        <BreadCrumb 
          items={[
            {label: "Início", link:"/"},
            {label: "Serviços"},
            {label: "Nome do serviço"},
          ]}
        />
      </Hero>
      <Section>
        <p>
          Quis commodo velit ipsum excepteur laborum laboris magna laborum adipisicing culpa est amet eiusmod Lorem. Ullamco velit voluptate sint in irure occaecat enim eiusmod. Labore laboris duis proident ea mollit aliquip tempor laborum.
        </p>
        <p>
          Occaecat commodo duis eiusmod do laborum pariatur ut tempor Lorem duis qui Lorem ea incididunt. Est ut et ex excepteur sint dolore qui mollit reprehenderit cupidatat reprehenderit elit. Est labore mollit occaecat in aute et deserunt nisi enim nisi ipsum labore.
        </p>
        <p>
          Nulla Lorem exercitation elit minim dolore adipisicing cillum qui laborum culpa incididunt. Veniam ipsum voluptate laboris dolore anim enim adipisicing reprehenderit. Ut nulla sunt sunt nulla cillum cillum exercitation id id reprehenderit Lorem laboris. Consequat velit eiusmod ad anim eiusmod aliqua excepteur labore aliquip exercitation aute.
        </p>
        <h5>Documentos necessários</h5>
        <PinnedList>
          <PinnedItens>
            <FaIdCard />
            RG
          </PinnedItens>
          <PinnedItens>
            <FaIdCard />
            CPF
          </PinnedItens>
          <PinnedItens>
            <FaScroll />
            Certidão nascimento
          </PinnedItens>
          <PinnedItens>
            <FaHome />
            Comprovante de residencia
          </PinnedItens>
        </PinnedList>
      </Section>
      <Section inverse>
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
      </Section>
      <Footer />
    </>
);

// ProductDetails.defaultProps = {

// };

// ProductDetails.propTypes = {

// };

export default ProductDetails;
