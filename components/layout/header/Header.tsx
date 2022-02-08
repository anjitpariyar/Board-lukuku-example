import React, { useState } from "react";
import Link from "next/link";

// import style components
import { HeaderStyle, Nav, Li, Button } from "./style/Header.styled";
import { Container } from "../../../styled/Container";

// import components
import Split from "../../common/Split";

const Header = () => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <HeaderStyle>
      <Container>
        <Nav>
          <Li>
            <Link href="/">
              <a
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
              >
                <span>
                  <span>
                    J<Split texts="omor" flag={hoverState} height={28} />
                  </span>
                </span>
                <span style={{ paddingLeft: "26px" }}>
                  D<Split texts="esign" flag={hoverState} height={33} />
                </span>
              </a>
            </Link>
          </Li>
          <Button
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
          >
            M<Split texts="enu" flag={hoverState} height={33} />
          </Button>
        </Nav>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
