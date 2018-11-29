import styled, { css } from "styled-components";
import polished from "polished";

export default styled.button`
  border-radius: 5px;
  padding: 1rem;
  background-color: rgba(200, 200, 200, 0.5);

  &:hover {
    background-color: rgba(200, 200, 200, 1);
  }

  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;
  }

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;

      &:hover {
        background-color: rgba(255, 0, 0, 1);
      }
    `}
`;
