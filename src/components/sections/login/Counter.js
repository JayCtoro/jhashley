import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Body21,
  Body22,
  Body23,
  Body41,
  Body42,
  Body43,
} from "../../styles/TextStyles";
import CounterCard from "./CounterCard";

export default function DaysFrom() {
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();

    const difference = +new Date() - +new Date(`08/30/2018`);

    let timeLeft = {
      years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 365),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      daysOnly: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function toggleDay() {
    setToggle(!toggle);
  }

  const countDown = toggle ? (
    <TimeWrapper single={true} onClick={toggleDay}>
      <CounterCard num={timeLeft.daysOnly} word="Days" />
    </TimeWrapper>
  ) : (
    <TimeWrapper single={false} onClick={toggleDay}>
      <CounterCard num={timeLeft.years} word="Years" />
      <CounterCard num={timeLeft.days} word="Days" />
      <CounterCard num={timeLeft.hours} word="Hrs" />
      <CounterCard num={timeLeft.minutes} word="Mins" />
      <CounterCard num={timeLeft.seconds} word="Secs" />
    </TimeWrapper>
  );

  // 1000 refers to how fast the time updates in ms
  return (
    <Wrapper>
      {countDown}
      <Since>Since August 30th, 2020</Since>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;

  gap: 20px;
  justify-content: center;
`;

const TimeWrapper = styled.div`
  cursor: pointer;

  display: grid;
  grid-template-columns: ${(props) =>
    props.single ? "auto" : "repeat(5,1fr)"};
  width: 100%;
  justify-content: center;
  justify-self: center;
  grid-gap: 20px;
`;

const Since = styled(Body23)`
  text-align: center;
  color: #a298ab;
  @media (max-width: 500px) {
    font-size: 14px;
    font-weight: 300;
  }
`;
