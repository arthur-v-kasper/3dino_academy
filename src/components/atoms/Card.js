import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#region Cardbody

const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({children}) => (
  <StyledBody>
    {children}
  </StyledBody>
);

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region CardMedia
export const StyledMedia = styled.div`
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  min-height: 270px;
`;
export const CardMedia = ({ image }) => <StyledMedia image={image}/>;

CardMedia.defaultProps = {
  children: undefined,
};

CardMedia.propTypes = {
  children: PropTypes.string,
};
//#endregion

//#region Card
const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  overflow:hidden; //corrige arredondamento na de cards com imagem, mais detalhes aula 135
`;

const Card = ({children}) => (
  <StyledCard>
    {children}
  </StyledCard>
);

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

//#endregion
export default Card;
