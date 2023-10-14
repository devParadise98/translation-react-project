import styled from 'styled-components';
import { RESPONSIVE } from '../../ui/variables';

export const HomeWrapper = styled.div`
  align-items: center;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  margin: auto;
  padding-bottom: 1rem;
  text-align: center;
  width: 70%;
  .b-home-image {
    width: 300px;
  }
  & div {
    margin: 1rem 0;
  }
  @media (max-width: ${() => RESPONSIVE.TABLE}) {
    height: 100vh;
    width: 100%;
    & div:first-child {
      & img {
        width: 80%;
      }
    }
  }
`;

export const FlagsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  @media (max-width: ${() => RESPONSIVE.TABLE}) {
    width: 85%;
    
  }
  & img:hover {
    transform: scale(1.1);
    transition:all 0.5s;
    -webkit-transition:all 0.5s;
    -o-transition:all 0.5s;
    -moz-transition:all 0.5s;
  }
`;

export const TextWrapper = styled.div`
  color: #4B4D53;
  display: flex;
  flex-direction: column;
  & h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
  }
  & span {
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;
