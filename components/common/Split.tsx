import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// importing style components
import { Reveal } from "../common/style/Split.styled";

type Props = {
  texts: string;
  flag: boolean;
  height: number;
};

const Split = ({ texts, flag, height }: Props) => {
  let txtRef = useRef(null);
  const revealAnim = async () => {
    let t1 = gsap.timeline({});

    if (flag) {
      t1.to([...txtRef?.current?.children], {
        y: 0,
        x: 0,
        z: 0,
        duration: 0.2,
        ease: "Power1.out",
        stagger: 0.1,
        force3D: true,
      });
    } else {
      t1.to([...txtRef?.current?.children], {
        y: height,
        x: 0,
        z: 0,
        duration: 0.2,
        ease: "Power1.out",
        stagger: 0.1,
        force3D: true,
      });
    }
  };

  useEffect(() => {
    if (txtRef) {
      revealAnim();
    }
    return () => {};
  }, [txtRef, flag]);

  return (
    <span ref={txtRef}>
      {texts?.split("").map((text, index) => {
        return (
          <Reveal key={index} bottom={height}>
            {text}
          </Reveal>
        );
      })}
    </span>
  );
};

export default Split;
