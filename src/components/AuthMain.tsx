import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { Emoji } from "emoji-picker-react";

import { RootState } from "../modules";
import { Icon } from "../styles/Common";

const Base = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  position: relative;
`;
const Guide = styled.div`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  padding: 0 30px;
`;
const Greeting = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 700;
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  margin-bottom: 50px;
`;
const MandalableMean = styled.div`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  display: flex;
  justify-content: center;
`;
const WordWrapper = styled.div``;
const Word = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.color.primary};
  font-weight: 700;
  background-color: ${(props) => props.theme.color.transWhite};
  padding: 5px 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${(props) => props.theme.color.shadow};
  line-height: 30px;
`;
const Mean = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
`;
const Sign = styled.h3`
  line-height: 50px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 300;
  color: ${(props) => props.theme.color.primary};
  margin: 0 5px;
`;
const Mandalable = styled.h2`
  padding: 5px 20px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  line-height: 30px;
  height: fit-content;
`;
const Desc = styled.p`
  margin: 40px 0;
  margin-bottom: 100px;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.color.fontPrimary};
  b {
    font-weight: 700;
    color: ${(props) => props.theme.color.primary};
  }
`;
const Content = styled.div`
  margin-bottom: 80px;
`;
const ContentTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.color.primary};
  font-weight: 700;
  margin-bottom: 20px;

  & img {
    margin-right: 20px;
  }
`;
const ContentItemWrapper = styled.ul`
  text-align: center;
`;
const ContentItem = styled.li`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 300;
  line-height: 25px;
  margin-bottom: 10px;
  &::before {
    content: "✔";
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSize.md};
    margin-right: 10px;
  }
`;

const CreateMandalartGuideContainer = styled.div`
  position: relative;
`;

const Arrow = styled(Icon)<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.id === "prev" && 0};
  right: ${(props) => props.id === "next" && 0};
  border-radius: 50%;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 30px;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  text-align: center;

  ${(props) =>
    props.disabled
      ? css`
          color: ${props.theme.color.lightGray};
          cursor: default;
        `
      : css`
          color: ${props.theme.color.primary};
          &:hover {
            font-size: ${(props) => props.theme.fontSize.lg};
            transition: all 0.2s ease-in-out;
          }
        `}
`;

const CreateMandalartGuideWrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  flex: none;
  flex-flow: row nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CreateMandalartGuide = styled.div`
  margin: 0 8%;
  overflow: hidden;
  width: 84%;
  flex: none;
  scroll-snap-align: center;
  background-color: ${(props) => props.theme.color.backgroundSecond};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 30px;
  text-align: center;
`;
const Step = styled.h4`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  width: fit-content;
  padding: 5px 20px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const GuideText = styled.p`
  font-weight: 300;
  white-space: pre-wrap;
  word-break: keep-all;
  font-size: ${(props) => props.theme.fontSize.base};

  small {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;
const GuideImg = styled.img`
  width: 60%;
  margin-bottom: 20px;
`;

function AuthMain() {
  const windowSize = useSelector(
    (state: RootState) => state.appReducer.windowSize,
  );

  const guideRef = useRef(null);

  const [offsetWidth, setOffsetWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setOffsetWidth(guideRef.current.offsetWidth);
    setScrollLeft(guideRef.current.scrollLeft);
  }, [windowSize]);

  const onArrowClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.id === "prev") {
      if (scrollLeft > 0) {
        setScrollLeft(scrollLeft - offsetWidth);
        guideRef.current.scroll({
          left: scrollLeft - offsetWidth,
          behavior: "smooth",
        });
      }
    } else {
      if (scrollLeft <= offsetWidth * 2 - 10) {
        setScrollLeft(scrollLeft + offsetWidth);
        guideRef.current.scroll({
          left: scrollLeft + offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <Base>
      <Greeting>Mandalable 에 오신 것을 환영합니다!</Greeting>
      <MandalableMean>
        <WordWrapper>
          <Word>Manda</Word>
          <Mean>본질의 깨달음</Mean>
        </WordWrapper>
        <Sign>+</Sign>
        <WordWrapper>
          <Word>la</Word>
          <Mean>달성 · 성취</Mean>
        </WordWrapper>
        <Sign>+</Sign>
        <WordWrapper>
          <Word>able</Word>
          <Mean>할 수 있는</Mean>
        </WordWrapper>
        <Sign>=</Sign>
        <Mandalable>Mandalable</Mandalable>
      </MandalableMean>
      <Guide>
        <Desc>
          <b>Mandalart</b>는 가장 큰 <b>주제 · 목표</b>를 세우고
          <br />
          이에 대한 해결법, 아이디어, <b>생각들을 확산</b>해 나가는 형태로,
          <br />
          <b>생각을 더욱 쉽게 정리</b> 하고 한눈에 조합하여 확인할 수 있어
          도움이 됩니다!
          <br />
          <br />
          <b>Mandalable</b>은 만다라트로 구체적인 목표와 생성하고
          <br />
          목표들을 작은 <b>Todo</b>로 관리해 <b>목표를 달성할 수 있도록</b> 하는
          서비스입니다!
        </Desc>
        <Content>
          <ContentTitle>
            <Emoji unified="1f44d" size={30} />
            이런 분들께 추천합니다!
          </ContentTitle>
          <ContentItemWrapper>
            <ContentItem>
              지킬 수 있는 계획을 어떻게 세워야 할지 막막하신 분
            </ContentItem>
            <ContentItem>
              매년 거창한 계획은 세우지만 정작 어떻게 실천해야할 지 모르시는 분
            </ContentItem>
            <ContentItem>
              세워둔 계획을 얼마나 실천했는지 관리하고 싶으신 분
            </ContentItem>
          </ContentItemWrapper>
        </Content>
        <Content>
          <ContentTitle>
            <Emoji unified="1f44c" size={30} />
            Mandalable 로 이런 것들을 할 수 있어요!
          </ContentTitle>
          <ContentItemWrapper>
            <ContentItem>
              목표 성공률을 설정하여 만다라트를 생성할 수 있어요,
            </ContentItem>
            <ContentItem>
              생성한 만다라트를 이미지로 저장할 수도 있어요.
            </ContentItem>
            <ContentItem>
              생성한 만다라트의 세부 과제들을 Todo로 체크할 수 있어요.
            </ContentItem>
            <ContentItem>
              만다라트 계획의 성공률을 확인할 수 있어요.
            </ContentItem>
          </ContentItemWrapper>
        </Content>
        <Content>
          <ContentTitle>
            <Emoji unified="1f449" size={30} />
            Mandalart 는 이렇게 만들어요!
          </ContentTitle>
          <CreateMandalartGuideContainer>
            <Arrow
              id="prev"
              className="material-symbols-rounded"
              onClick={(e) => onArrowClick(e)}
              disabled={scrollLeft <= 0}
            >
              arrow_back_ios_new
            </Arrow>
            <CreateMandalartGuideWrapper ref={guideRef}>
              <CreateMandalartGuide>
                <Step>step 1</Step>
                <GuideImg src={process.env.PUBLIC_URL + "/guide1.png"} />
                <GuideText>
                  가장 가운데 목표칸에 이루고자 하는 핵심 목표를 적습니다.
                </GuideText>
              </CreateMandalartGuide>
              <CreateMandalartGuide>
                <Step>step 2</Step>

                <GuideImg src={process.env.PUBLIC_URL + "/guide2.png"} />
                <GuideText>
                  최종 목표를 이루기 위한 주요 목표 8개를 적습니다.
                </GuideText>
              </CreateMandalartGuide>
              <CreateMandalartGuide>
                <Step>step 3</Step>
                <GuideImg src={process.env.PUBLIC_URL + "/guide3.png"} />
                <GuideText>
                  주요 목표과 관련된 세부 실천내용이나 달성방법을 적습니다.
                  <br />
                  <br />
                  <small>
                    SMART 기법은 세부 내용을 작성할 때 참고하면 좋습니다!
                    <br />
                    <br />
                    S(Specific) : 목표는 명확하고 구체적이어야 합니다.
                    <br />
                    M(Measurable) : 목표는 정량화되고 측정 가능해야 합니다.
                    <br />
                    A(Attainable) : 목표는 달성 가능해야 합니다.
                    <br />
                    R(Realistic) : 목표는 현실적이어야 합니다.
                    <br />
                    T(Timely) : 목표는 마감기한이 있어야 합니다.
                  </small>
                </GuideText>
              </CreateMandalartGuide>
            </CreateMandalartGuideWrapper>
            <Arrow
              id="next"
              className="material-symbols-rounded"
              onClick={(e) => onArrowClick(e)}
              disabled={scrollLeft >= offsetWidth * 2 - 10}
            >
              arrow_forward_ios
            </Arrow>
          </CreateMandalartGuideContainer>
        </Content>
      </Guide>
    </Base>
  );
}

export default AuthMain;
