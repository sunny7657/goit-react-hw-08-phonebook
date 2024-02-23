import styled from '@emotion/styled';

const FlippedImage = styled.img`
  position: absolute;
  z-index: -1;
  transform: scaleX(-1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
`;

export const StyledContainer = ({ children }) => {
  return (
    <>
      <FlippedImage
        src="https://images.pexels.com/photos/5797904/pexels-photo-5797904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background"
      />
      {children}
    </>
  );
};
