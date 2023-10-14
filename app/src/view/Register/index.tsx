import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonAgora } from '../styled';
import {
  ButtonWrapper,
  RegisterWrapper,
  MainForm,
} from './styled';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const redirectRegister = () => navigate("/register");
  return (
    <RegisterWrapper>
      
     <MainForm>

     </MainForm>
      <ButtonWrapper>
        <ButtonAgora onClick={redirectRegister} type="primary" shape="round">
          Gracias
        </ButtonAgora>
      </ButtonWrapper>
    </RegisterWrapper>
  )
};

export default Register;