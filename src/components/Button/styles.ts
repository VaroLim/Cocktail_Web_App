import styled from "styled-components";

export const Container = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.6rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  background-color: #807337;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  height:auto;
  width: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: #b5a350;
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`
