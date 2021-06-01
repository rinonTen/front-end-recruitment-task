import styled from 'styled-components'

export const Section = styled.section`
  max-width: 439px;
  margin-left: auto;
  margin-right: auto;
`
export const ImageContainer = styled.div`
  margin-bottom: 24px;
`
export const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
`
export const JokeContainer = styled.div`
  margin-bottom: 32px;
`
export const JokeText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #34394f;

  @media (min-width: 1114px) {
    font-size: 18px;
  } ;
`
