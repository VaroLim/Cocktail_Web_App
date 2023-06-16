import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { Props } from "./types";


export const CardContainer = styled.div`
  height: auto;
  width: 12rem;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
`;

export const CardContent = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const HeartIcon = styled(FaHeart)`
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ContentButton = styled.div`

`;
export const Title = styled.div`
padding-bottom: 16px;
`;