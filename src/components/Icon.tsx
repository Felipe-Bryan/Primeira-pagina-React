import React from 'react';
import styled from 'styled-components';

interface IconProps {
  iconUrl: string;
  alt: string;
}

const IconStyled = styled.div`
  display: flex;
  align-items: center;
  border-radius: 200px;
  padding: 5px;
  background-color: white;
  margin-left: 10px;
  cursor: pointer;
`;

const Icon: React.FC<IconProps> = ({ iconUrl, alt }) => {
  return (
    <IconStyled>
      <img src={iconUrl} alt={alt} />
    </IconStyled>
  );
};

export default Icon;
