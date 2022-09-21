import React, { useState } from "react";
import styled from "styled-components";
import { authService, firebaseInstance } from "../firebase";

const AuthWrapper = styled.div``;
const AuthForm = styled.form``;
const NicknameInput = styled.input``;
const EmailInput = styled.input``;
const PasswordInput = styled.input``;
const ErrorText = styled.p``;
const SignupButton = styled.button``;
const SignupWithGoogle = styled.button``;
export default function AuthContainer() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupMode, setSignupMode] = useState(true);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "nickname") {
      setNickname(value);
    }
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signupMode) {
      await authService
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          authService.currentUser.updateProfile({
            displayName: nickname,
          });
          alert("회원가입 완료");
        })
        .catch((error) => setError(error.message));
    } else {
      await authService
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("로그인 완료");
        })
        .catch((error) => setError(error.message));
    }
  };
  const onGoogleSignupClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    if (signupMode) {
      await authService
        .signInWithPopup(provider)
        .then(() => {
          alert("회원가입 완료");
        })
        .catch((error) => setError(error.message));
    } else {
      await authService
        .signInWithPopup(provider)
        .then(() => {
          alert("로그인 완료");
        })
        .catch((error) => setError(error.message));
    }
  };
  const onLoginClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setSignupMode(!signupMode);
  };
  return (
    <AuthWrapper>
      <AuthForm onSubmit={onSubmit}>
        {signupMode && (
          <NicknameInput
            name="nickname"
            type="text"
            placeholder="닉네임"
            required
            value={nickname}
            onChange={onChange}
          />
        )}
        <EmailInput
          name="email"
          type="text"
          placeholder="이메일"
          required
          value={email}
          onChange={onChange}
        />
        <PasswordInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={onChange}
        />
        <ErrorText>{error}</ErrorText>
        <SignupButton type="submit">
          {signupMode ? "가입하기" : "로그인"}
        </SignupButton>
      </AuthForm>
      <SignupWithGoogle onClick={onGoogleSignupClick}>
        {signupMode ? "Google 계정으로 가입하기" : "Google 계정으로 로그인"}
      </SignupWithGoogle>
      <hr />
      <p>
        {signupMode
          ? "이미 Mandalable에 가입하셨나요?"
          : "Mandalable 계정이 없으신가요?"}
      </p>
      <button onClick={onLoginClick}>
        {signupMode ? "로그인" : "가입하기"}
      </button>
    </AuthWrapper>
  );
}
