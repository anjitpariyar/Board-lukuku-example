import React from "react";
// importing styled
import { Section, Level1, Empty } from "./style/Screen.styled";
import { InnerContainer, Container } from "styled/Container";
import { Title } from "styled/Common.styled";

const Screen = () => {
  return (
    <Section>
      <Container>
        <InnerContainer>
          <Title color="white">
            <Level1 marginLeft={"8rem"}>
              <Empty></Empty> <i>High</i>
            </Level1>
            <Level1 marginLeft={"4rem"}>
              <i>End</i>
              <Empty></Empty>
            </Level1>
            <Level1>
              <Empty></Empty>
              <span>Digital</span>
              <Empty></Empty>
            </Level1>
            <Level1>
              <span>Experiences</span>
            </Level1>
          </Title>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Screen;
