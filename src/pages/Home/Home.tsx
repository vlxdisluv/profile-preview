import React from 'react';
import styled from 'styled-components';

import avatarPic from '../../assets/img/GrtbVv47Y4c.jpeg';
import japanPic from '../../assets/img/japan.jpg';
import Button from '../../ui/Button';

export const Home = () => {
  return (
    <Root>
      <View>
        <UserName>vlxdisluv</UserName>
        <Avatar src={avatarPic} />

        <Text>Welcome my dear friend 🖤😼</Text>

        <Link
          variant="primary"
          label="Instagram"
          onClick={() => window.open('https://www.instagram.com/vlxdisluv', '_self')}
        />
        <Link
          variant="primary"
          label="YouTube"
          onClick={() => window.open('https://youtube.com/channel/UC5GwZwBwbnazGNAjbOfoX5g', '_self')}
        />

        <Link
          variant="primary"
          label="Music"
          onClick={() =>
            window.open('https://songwhip.com/vlxdiluv/%E7%AB%8B%E3%81%A3%E3%81%A6%E6%AD%A9%E3%81%91%E3%82%88', '_self')
          }
        />
      </View>
    </Root>
  );
};

const UserName = styled.div`
  color: ${({ theme: { colors } }) => colors.color1};
  font-family: Roboto, sans-serif;
  font-weight: bold;

  margin-bottom: 5px;
`;

const Link = styled(Button)`
  margin: 0 10px 10px 10px;
  border-radius: 4px;
`;

const Text = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({ theme: { colors } }) => colors.color6};
  background-color: ${({ theme: { colors } }) => colors.color8};
  padding: 10px 15px;
  align-self: center;
  border-radius: 4px;
`;

const Root = styled.main`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  background-image: url(${japanPic});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const View = styled.div`
  max-width: 1024px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: start;
  align-items: stretch;
  text-align: center;

  padding-top: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.color0};
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

export default Home;
