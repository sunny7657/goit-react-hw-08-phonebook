import styled from '@emotion/styled';

export const StyledSignupSection = styled.section`
  padding-top: 40px;
  padding-bottom: 16px;
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgb(196 245 186 / 74%),
        rgb(241 240 201 / 60%)
      ),
      url('https://cdn.pixabay.com/photo/2017/07/26/06/34/art-2540641_1280.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
  }
`;

export const StyledSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
