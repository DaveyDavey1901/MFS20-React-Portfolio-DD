import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(7, 27, 69, 0.9);
  border: 1px solid #ffdd19;
  border-radius: 12px;
  padding: 2rem;
  margin: auto;
  max-width: 100rem;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: -1000;
`;
