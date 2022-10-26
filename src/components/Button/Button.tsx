import React from "react";
import { colors } from "../../styles/theme";
import styled from "styled-components";

export interface TButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...res }: TButtonProps) => {
  return <PaycruxButton {...res}>{children}</PaycruxButton>;
};

export default Button;

export const PaycruxButton = styled.button`
  outline: none;
  border: none;
  background-color: ${colors.touchB_purple};
  color: ${colors.touchB_white1};
`;
