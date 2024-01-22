import styled from "styled-components";
import { isValidColor } from "../utils/exec";

const HouseItem = ({ house }) => (
  <HouseItemStyled key={house.id}>
    <HouseHeader>
      <h2>{house.name}</h2>
      <span>{house.animal}</span>
    </HouseHeader>
    <HouseGradient
      colors={
        house.houseColours
          ? house.houseColours.split(" and ")
          : ["invalid", "invalid"]
      }
    />
    <FounderName>
      Founder: <strong>{house.founder}</strong>
    </FounderName>
  </HouseItemStyled>
);

const HouseItemStyled = styled.div`
  margin: 25px;
  border-radius: 8px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  background: white;
  overflow: hidden; // To ensure the border-radius applies to children
`;

const HouseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const HouseGradient = styled.div`
  background: ${(props) => {
    const colors = props.colors.map(isValidColor);
    return colors.every((color) => color)
      ? `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`
      : "linear-gradient(to right, white, black)";
  }};
  padding: 10px;
  border-radius: 8px;
  width: 90%;
  margin: 0 auto;
`;

const FounderName = styled.p`
  padding: 10px 20px;
  text-align: left;
`;

export default HouseItem;
