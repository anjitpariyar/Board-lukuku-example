import React from "react";
import Image from "next/image";

// importing styled
import { Level1 } from "./style/Screen.styled";
import { Section, Hide, Icon } from "./style/ScreenPhotos.styled";

import { InnerContainer, Container } from "styled/Container";
import { Title } from "styled/Common.styled";

// importing icon
import DownArrow from "./icon/DownArrow";

const ScreenPhotos = () => {
  return (
    <Section>
      <Container>
        <InnerContainer>
          <Title>
            <Level1 marginLeft={"8rem"}>
              <Image
                src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1644339435/upwork/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500_zhkzut.jpg"
                alt="Picture of the author"
                width={220}
                height={125}
              />
              <Hide>
                <i>High</i>
              </Hide>
            </Level1>

            <Level1 marginLeft={"4rem"}>
              <Hide>
                <i>End</i>
              </Hide>
              <Image
                src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1644339435/upwork/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500_zhkzut.jpg"
                alt="Picture of the author"
                width={220}
                height={125}
              />
            </Level1>
            <Level1>
              <Image
                src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1644339435/upwork/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500_zhkzut.jpg"
                alt="Picture of the author"
                width={220}
                height={125}
              />
              <Hide>Digital</Hide>
              <Image
                src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1644339435/upwork/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500_zhkzut.jpg"
                alt="Picture of the author"
                width={220}
                height={125}
              />
            </Level1>
            <Level1>
              <Hide>Experiences</Hide>
              <Icon>
                <DownArrow />
              </Icon>
            </Level1>
          </Title>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default ScreenPhotos;
