import React from 'react'
import styled from 'styled-components';
import AuthContainer from '../components/AuthContainer';

const Base = styled.main``;
const Greeting = styled.h1``;


export default function Auth() {
  return (
    <Base>
      <Greeting>안녕하세요! Mandalable 에 오신 걸 환영합니다!</Greeting>
      <AuthContainer />
    </Base>
  )
}