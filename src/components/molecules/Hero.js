import React from 'react';
import PropTypes from 'prop-types';
import Container from "components/atoms/Container";

import styled, {css} from 'styled-components';

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  display: inline-block;

   p,
  li {
    font-size: 20px;
    font-weight: 300;
  }
  li {
    padding-left: 0;
    list-style: none;
  }
  li::before {
    content: "\\2319\\0020";
    color: ${props => props.theme.colors.primary.main};
  } 
`;

const Hero = ({ image, children }) => (
    <Root image={image} data-testid="hero">
        <Container>
            <Content>{children}</Content>
        </Container>
    </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
