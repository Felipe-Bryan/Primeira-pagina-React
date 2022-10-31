import React from 'react';
import styled from 'styled-components';

interface InfoBoxProps {
  text?: string;
}

const InfoBoxStyled = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url(./assets/background.jpg);
`;

const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <InfoBoxStyled>
      <h2>{text}</h2>
    </InfoBoxStyled>
  );
};

export default InfoBox;
