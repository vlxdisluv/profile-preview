import React from 'react';
import styled from 'styled-components';

import avatarPic from '../../assets/img/GrtbVv47Y4c.jpeg';
import narutoMakiPic from '../../assets/img/naruto-maki.jpeg';
import Button from '../../ui/Button';
import CopyIcon from '../../ui/icons/CopyIcon';

export const Home = () => {
  return (
    <Root>
      <View>
        {/* <UserName>vlxdisluv</UserName> */}
        <Avatar src={avatarPic} />

        <Text>Welcome my dear friend 🖤😼</Text>

        <Link
          imageUrl="https://res.cloudinary.com/cjs/image/upload/v1633365677/michael23.jd%40gmail.com/9717702b84671920ea7d5681e6fc5fb2129460a5b6ca3bdcdb0f48b0859586d887fde1e7baf178a32436625477d3e8a54ff8e7febd48ffe6a2a9f00c708f44bf.png"
          variant="primary"
          label="VLXDI$LUV - X6"
          onClick={() => window.open('https://li.sten.to/D3AlZ1E', '_self')}
        />

        <Link
          imageUrl="https://res.cloudinary.com/cjs/image/upload/v1620470620/artwork/8b07de363ac530b54bc0f716719a326186a4da470a0b68cad2070d21edaddb84a613848cc70ab61cfc77047dd76471df5a281b79ba56b50a33726845f1593550.jpg"
          variant="primary"
          label="VLXDI$LUV x kurosuki - 立 っ て 歩 け よ"
          onClick={() => window.open('https://li.sten.to/wIMUZIo', '_self')}
        />

        {/* <Link
          disabled
          variant="primary"
          label="На корм коту - 4279 3806 2397 2884"
          onClick={() => navigator.clipboard.writeText('4279 3806 2397 2884')}
        /> */}

        {/* <Link
          variant="primary"
          label="Instagram"
          onClick={() => window.open('https://www.instagram.com/vlxdisluv', '_self')}
        /> */}
        <Link
          variant="primary"
          label="YouTube"
          imageUrl="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg"
          onClick={() => window.open('https://youtube.com/channel/UC5GwZwBwbnazGNAjbOfoX5g', '_self')}
        />
        <Link
          variant="primary"
          label="PayPal"
          imageUrl="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/paypal.svg"
          onClick={() => window.open('https://www.paypal.com/paypalme/vlxdisluv', '_self')}
        />
        <Link
          variant="primary"
          label="Telegram"
          imageUrl="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/telegram.svg"
          onClick={() => window.open('https://telegram.me/vlxdisluv', '_self')}
        />
        {/* <SubText>
          4279 3806 2397 2884
          <WrapCopyIcon onClick={() => navigator.clipboard.writeText('4279 3806 2397 2884')}>
            <CopyIcon />
          </WrapCopyIcon>
        </SubText>*/}
      </View>
    </Root>
  );
};

const UserName = styled.div`
  color: ${({ theme: { colors } }) => colors.color6};
  font-family: Roboto, sans-serif;
  font-weight: bold;

  margin-bottom: 15px;
`;

const Link = styled(Button)`
  margin: 0 10px 10px 10px;
  border-radius: 4px;
`;

const WrapCopyIcon = styled.div`
  width: 16px;
  height: 16px;
  padding: 8px 8px 10px 8px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const SubText = styled.div`
  align-self: stretch;
  margin: 0 10px 10px 10px;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.color1};

  cursor: default;

  min-height: 54px;
  justify-content: center;
  display: flex;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.color6};
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
  background: url(${narutoMakiPic}) top left repeat;
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
`;

export default Home;
