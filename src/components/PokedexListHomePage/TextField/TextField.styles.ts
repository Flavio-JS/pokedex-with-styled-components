import { theme } from "@/styles/theme";
import styled from "styled-components";

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 200px;
  padding: 8px 16px 8px 12px;
  border-radius: 16px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
  gap: 8px;
  background-color: ${theme.colors.grayscale.white};

  button {
    all: unset;
    display: flex;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  }
`;

export const TextFieldInput = styled.input`
  all: unset;
  max-width: 120px;

  :focus-visible {
    outline: none;
  }
`;
