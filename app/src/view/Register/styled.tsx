import styled from 'styled-components';
import { RESPONSIVE } from '../../ui/variables';

export const RegisterWrapper = styled.div`
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
  @media (max-width: ${() => RESPONSIVE.TABLE}) {
    height: 100vh;
    width: 100%;
  }
`;
export const MainForm = styled.div`

`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;
