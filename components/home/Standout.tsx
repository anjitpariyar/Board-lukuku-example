import React from "react";
// import style
import { Section, Level1 } from "./style/Standout.styled";
import { Container, InnerContainer } from "styled/Container";
import { Title } from "styled/Common.styled";

const Standout = () => {
  return (
    <Section>
      <Container>
        <InnerContainer>
          <Title>
            <Level1 marginLeft={"2rem"}>
              <span>We’ll</span>
            </Level1>
            <Level1 marginLeft={"8rem"}>
              <i>help you</i>
            </Level1>

            <Level1>
              <span>Stand out</span>
            </Level1>
          </Title>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Standout;
