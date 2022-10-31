import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import RouteLink from './RouteLink';

const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LinkBarStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterBox2 = styled.div`
  display: flex;
  align-items: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterBox1>
        <LinkBarStyled>
          <RouteLink route="/About" title="About "></RouteLink>
          <RouteLink route="/Contact" title="| Contact"></RouteLink>
          <RouteLink route="/Terms-of-Use" title="| Terms of Use"></RouteLink>
          <RouteLink route="/Privacy-Policy" title="| Privacy Policy"></RouteLink>
        </LinkBarStyled>
        <div>Your Website 2020.All Rights Reserved</div>
      </FooterBox1>
      <FooterBox2>
        <Icon iconUrl="./assets/facebook.svg" alt="facebook" />
        <Icon iconUrl="./assets/twitter.svg" alt="twitter" />
        <Icon iconUrl="./assets/instagram.svg" alt="instagram" />
      </FooterBox2>
    </FooterStyled>
  );
};

export default Footer;
