import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const ImageContainer = styled.div`
  text-align: right;  
  svg {
    width: 100%;
    height: auto;
    max-height: 100%;    
    margin-top: -60px;
    color: ${props => props.theme.colors.primary.main}
  }
`;

const ErrorMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const Error = ({image, title, description}) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
         <h1>{title}</h1>
        </Heading>
        <ErrorMessage>
          {description}
        </ErrorMessage>
        <div>
          <Button as={Link} to="/" color="primary">
            Voltar para a pagina inicial
          </Button>
        </div>
      </div>
      <div>
        <ImageContainer>
          {image}
        </ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
