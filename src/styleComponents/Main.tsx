import styled from 'styled-components'
import { gray1, white } from './colors'

export const Main = styled.main`
  max-width: 555px;
  border-radius: 20px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  background-color: ${white};
  margin: 16px;
  margin-top: 32px;
  padding: 32px;

  @media (min-width: 1114px) {
    padding: 0;
    padding-top: 48px;
    padding-bottom: 72px;
    margin: 98px auto;
  }
`

export const ContentContainer = styled.div`
  max-width: 100%;
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LoadingText = styled.h2`
  font-size: 18px;
  color: ${gray1};

  @media (min-width: 1114px) {
    font-size: 32px;
  }
`
