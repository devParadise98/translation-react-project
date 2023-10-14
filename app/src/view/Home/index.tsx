import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';
import { ButtonAgora } from '../styled';
import {
  ButtonWrapper,
  FlagsWrapper,
  HomeWrapper,
  TextWrapper
} from './styled';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirectRegister = () => navigate("/register");
  return (
    <HomeWrapper>
      <div className="b-home-image">
        <Skeleton.Image active />
      </div>
      <TextWrapper>
        <h2>{t("t-welcome-home")}</h2>
        <span>{t("t-welcome-title")}</span>
        <span>{t("t-welcome-description")}</span>
      </TextWrapper>
      <FlagsWrapper>
        <Skeleton.Avatar size={48} active />
        <Skeleton.Avatar size={48} active />
        <Skeleton.Avatar size={48} active />
        <Skeleton.Avatar size={48} active />
        <Skeleton.Avatar size={48} active />
      </FlagsWrapper>
      <ButtonWrapper>
        <ButtonAgora onClick={redirectRegister} type="primary" shape="round">
          Continuar
        </ButtonAgora>
      </ButtonWrapper>
    </HomeWrapper>
  )
};

export default Home;