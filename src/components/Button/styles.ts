import styled from "styled-components";

export const Container = styled.button`

&:hover {
  background-color: gray;
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}
&:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`
