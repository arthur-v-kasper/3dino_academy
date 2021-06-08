import React from "react";
// import PropTypes from "prop-types";
import styled from 'styled-components';

import {useScrollToTop} from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Herading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, {CardMedia, CardMediaDescription} from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/dino-01.jpg";
import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/charlene.png";
import InstImage2 from "assets/instructors/dino-silva-sauro.png";
import InstImage3 from "assets/instructors/fran-da-silva.png";
import InstImage4 from "assets/instructors/robbie-sinclair.png";
import InstImage5 from "assets/instructors/bradley.png";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${props => props.theme.colors.primary.main}
  }
`;

const Instructors = [
  {id: 1, name:"Charlene Sinclair", avatar: InstImage1},
  {id: 2, name:"Dino da Silva", avatar: InstImage2},
  {id: 3, name:"Fran da Silva", avatar: InstImage3},
  {id: 4, name:"Robbie Sinclair", avatar: InstImage4},
  {id: 5, name:"Bradley Sauro", avatar: InstImage5}
]




const About = () => {
  useScrollToTop();

  return (
    <>
      <Hero image={HeroImage}>
        <Herading>
        <h1>3Dino Academy</h1> 
        </Herading>
        <BreadCrumb items={[{label: "Inicio", link: "/"},{label: "Sobre"}]} />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              Mollit enim veniam dolor dolor sit. Ullamco ad quis sint Lorem laboris tempor dolor excepteur do tempor veniam in quis elit. Consectetur non labore veniam amet nostrud tempor nulla aute sint cupidatat ex duis irure esse. Elit laboris id laboris cillum nostrud nulla commodo sint ullamco aute. Officia in consequat Lorem est in. Aliquip laborum veniam exercitation labore est.
            </p>
            <p>
              Est aliqua adipisicing irure consequat eiusmod. Nostrud magna irure incididunt non qui veniam dolore voluptate ut proident id sint anim. Labore duis fugiat anim tempor nulla exercitation. Elit exercitation aliquip elit enim duis ullamco aliqua nisi magna nulla irure. Duis id cupidatat pariatur dolor minim velit nostrud sint. Nisi adipisicing enim id aliquip pariatur ipsum. Laborum sit anim nostrud anim esse aliqua.
            </p>
            <p>
              Nostrud adipisicing sit nulla ea voluptate velit quis laborum aliquip dolore. Pariatur sit dolore occaecat sunt ex. Anim dolor ullamco cillum aliquip ut ad do. Proident labore in pariatur culpa voluptate tempor laborum proident. Laboris esse et eiusmod exercitation ad reprehenderit id.
            </p>
            <ul>
              <li>Nostrud adipisicing sit nulla ea voluptate velit</li>
              <li>Est aliqua adipisicing irure consequat eiusmod.</li>
              <li>Mollit enim veniam dolor dolor sit.</li>
              <li>Aliquip laborum veniam exercitation labore est.</li>
              <li>Officia in consequat Lorem est in. </li>
            </ul>
          </div>
          <div>
            <p>Reprehenderit deserunt do dolore aute. Eiusmod eiusmod ea veniam incididunt aute laborum sit minim enim. Laboris esse occaecat incididunt qui aliquip laborum laborum. Magna magna occaecat non minim mollit officia irure qui veniam ullamco magna. Eu irure cillum laboris nulla reprehenderit labore id esse cupidatat qui mollit ad excepteur.</p>
            <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
            </center>
          </div>        
        </Grid>
      </Section>
      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Missão</h4>
            <p>Proident velit in occaecat id consectetur. Irure qui culpa amet ipsum qui Lorem est est ipsum proident ut. Eiusmod officia qui nisi adipisicing enim Lorem deserunt nulla id culpa irure labore adipisicing aliquip.</p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>Incididunt nostrud anim do officia ipsum ipsum nostrud. Officia aute esse sint sunt aliquip consectetur veniam commodo dolor. Ipsum amet magna do et esse magna excepteur. Culpa esse ut mollit commodo irure.</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Herading>
          <h2>Conheça nossos professores</h2>
        </Herading>  
        <Grid sm={2} md={3} lg={4}>
          {Instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>{instructor.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>      
      </Section>
    <Footer />
    </>
  );
}

// About.defaultProps = {
  
// };

// About.propTypes = {
  
// };

export default About;
