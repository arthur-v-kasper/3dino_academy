import React from "react";
import styled from "styled-components";
import { FaPhone, FaBuilding, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";


const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
 color: ${props => props.theme.colors.primary.main};
 text-decoration: none;

 &:hover {
   color: ${props => props.theme.colors.primary.dark};;
 }
`;

const Footer = () => (
   <Root>
     <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>3Dino Academy</h6>
          </Heading>
          <p>
            Excepteur elit in anim aute labore. Laboris eu esse aliquip cupidatat proident voluptate. Cillum Lorem commodo ipsum fugiat consectetur ex laborum amet.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (44) 1234-5678
          </p>
          <p>
          <IconContainer>
            <FaBuilding />
          </IconContainer>
            Excepteur elit in anim aute labore. Laboris eu esse aliquip cupidatat proident voluptate.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLink
              target="_blank"
              href="https://www.facebook.com/arthur.kasper/"
            >
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
                Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink
              target="_blank"
              href="https://www.linkedin.com/in/arthur-kasper/"
            >
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
                Linkedin
            </FooterLink>
          </p>
          <p>
            <FooterLink
              target="_blank"
              href="https://www.instagram.com/arthurkasper/"
            >
              <IconContainer>
                <FaInstagram />
              </IconContainer>
                Instagram
            </FooterLink>
          </p>
        </div>
      </Grid>
     </Container>
   </Root>
);

export default Footer;
