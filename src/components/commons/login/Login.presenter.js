import * as Styles from './Login.styles';

export default function LoginPageUI() {
  return (
    <>
      <Styles.Wrapper>
        <img
          style={{ width: '128px', height: '32px;' }}
          src="https://member.op.gg/img_opgglogo.1924961d.svg"
        ></img>

        <Styles.InnerWrapper>
          <Styles.HeaderText>로그인</Styles.HeaderText>
          <Styles.LoginSubText>이메일 주소</Styles.LoginSubText>
          <Styles.LoginInput></Styles.LoginInput>
          <Styles.LoginSubText>비밀번호</Styles.LoginSubText>
          <Styles.LoginInput></Styles.LoginInput>
          <Styles.LoginBtn>제출하기</Styles.LoginBtn>
        </Styles.InnerWrapper>
      </Styles.Wrapper>
    </>
  );
}
