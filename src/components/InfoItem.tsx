import React from 'react';
import styled from 'styled-components';

interface InfoItemProps {
  imgUrl: string;
  alt: string;
  title: string;
  subtitle: string;
}

const InfoItemStyled = styled.div`
  margin: 5px;
  background-color: white;
  border-radius: 5px;
  width: 30vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  text-align: center;
`;

const ImgStyled = styled.img`
  background-size: cover;
  height: 30px;
`;

const InfoItem: React.FC<InfoItemProps> = ({ imgUrl, alt, title, subtitle }) => {
  return (
    <InfoItemStyled>
      <ImgStyled src={imgUrl} alt={alt} />
      <h4 style={{ margin: '0px' }}>{title}</h4>
      <p style={{ margin: '0px' }}>{subtitle}</p>
    </InfoItemStyled>
  );
};

export default InfoItem;
