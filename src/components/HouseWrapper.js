import React from "react";
import styled from "styled-components";
import HouseItem from "./HouseItem";

const HousesWrapper = ({ houses }) => {
  return (
    <Wrapper>
      {houses &&
        houses.map((house) => <HouseItem key={house.id} house={house} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  width: 50%;
  margin: 0 auto;
  max-width: 800px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default HousesWrapper;
