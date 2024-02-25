import styled from '@emotion/styled';

export const StyledHomeSection = styled.section`
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
        rgb(196 245 186 / 50%),
        rgb(241 240 201 / 25%)
      ),
      url('https://cdn.pixabay.com/photo/2023/07/30/11/39/girl-8158685_1280.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
  }
`;

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 72px;
`;
