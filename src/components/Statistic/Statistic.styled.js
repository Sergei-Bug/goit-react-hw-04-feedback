import styled from '@emotion/styled';

export const Wrapper = styled.section`
  padding: 20px;
`;
export const Title = styled.h2`
  font-size: 24px;
  &:hover {
  }
`;
export const Button = styled.button`
  padding: 10px 33px;
  margin-right: 15px;
  font-size: 18px;
  background-color: #afd3ff;
  cursor: pointer;
  border-radius: 7px;
  border: transparent;
  transition: background-color 250ms linear, color 250ms linear;

  &:hover {
    background-color: #9291b4;
    color: #ffffff;
  }
`;

export const Text = styled.p`
  font-size: 16px;
`;
