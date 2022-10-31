import React from 'react';
import styled from 'styled-components';

interface ContentRowProps {
  imgUrl: string;
  alt: string;
  title: string;
  text: string;
}

const ContentRowStyled = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ContentBoxStyled = styled.div`
  width: 50%;
  height: 40vh;
`;

const ImgStyled = styled.img`
  height: 100%;
  width: 100%;
`;

const ContentRow1: React.FC<ContentRowProps> = ({ imgUrl, alt, title, text }) => {
  return (
    <ContentRowStyled>
      <ContentBoxStyled>
        <h4 style={{ padding: '5px' }}>{title}</h4>
        <p style={{ padding: '5px' }}>{text}</p>
      </ContentBoxStyled>
      <ContentBoxStyled>
        <ImgStyled src={imgUrl} alt={alt} />
      </ContentBoxStyled>
    </ContentRowStyled>
  );
};

const ContentRow2: React.FC<ContentRowProps> = ({ imgUrl, alt, title, text }) => {
  return (
    <ContentRowStyled>
      <ContentBoxStyled>
        <ImgStyled src={imgUrl} alt={alt} />
      </ContentBoxStyled>
      <ContentBoxStyled>
        <h4 style={{ padding: '5px' }}>{title}</h4>
        <p style={{ padding: '5px' }}>{text}</p>
      </ContentBoxStyled>
    </ContentRowStyled>
  );
};

export { ContentRow1, ContentRow2 };
