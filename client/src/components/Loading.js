import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = ({ className }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  top: 1rem;
  right: 1rem;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 50%;
`;
