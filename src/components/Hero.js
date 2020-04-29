import React from "react";
import "./Hero.css";
import styled from "styled-components";

const Rectangle = styled.div`
  position: relative;
  width: auto;
  height: 320px;
  margin: 100px 130px 50px;
  background: #ffffff;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const RectangleTitle = styled.h1`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  background: linear-gradient(to bottom, #7b1617 0%, #e32526 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RectangleText = styled.h4`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
`;

const RectangleLink = styled.a`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  /* line-height: 64px; */
  color: #e32526;
  align-self: center;

  img {
    padding: 0 15px;
  }
`;

const Section = styled.div`
  margin: 20px;
  display: grid;
  grid-template-rows: 240px auto;
`;

const SectionText = styled.div``;

const SectionLink = styled.div`
  display: grid;
  grid-template-columns: 90px auto;

  img {
    align-self: center;
  }
`;

const Hero = () => (
  <div className="Hero">
    <div className="HeroText">
      <div className="HeroRectangle" />
      <h3>ENRICHING</h3>
      <h1>LIVES</h1>
      <p>
        Have a taste of goodness enriched with nutrients and strength of growth.
      </p>
    </div>
    <Rectangle>
      <Section>
        <SectionText>
          <RectangleTitle>NOTICE OF 2020 AGM</RectangleTitle>
          <RectangleText>
            More information about our 2020 annual general meeting. The company
            currently operates on a total installed capacity of 2,610 metric
            tons per day.
          </RectangleText>
        </SectionText>
        <SectionLink>
          <RectangleLink>Read More</RectangleLink>
          <img src={require("../images/readmore.png")} alt="rm" width="22px" />
        </SectionLink>
      </Section>

      <Section>
        <SectionText>
          <RectangleTitle>UNCLAIMED DIVIDENDS</RectangleTitle>
          <RectangleText>
            Honeywell Flour Mills is committed to keeping our investors well
            informed with our performances, company strategy and projections.
          </RectangleText>
        </SectionText>
        <SectionLink>
          <RectangleLink>Read More</RectangleLink>
          <img src={require("../images/readmore.png")} alt="rm" width="22px" />
        </SectionLink>
      </Section>

      <Section>
        <SectionText>
          <RectangleTitle>IT ALL MATTERS</RectangleTitle>
          <RectangleText>
            From farm to fork, we believe that every one and everything matters.
          </RectangleText>
        </SectionText>
        <SectionLink>
          <RectangleLink>Read More</RectangleLink>
          <img src={require("../images/readmore.png")} alt="rm" width="22px" />
        </SectionLink>
      </Section>
    </Rectangle>
  </div>
);

export default Hero;
