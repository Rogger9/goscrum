import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0px 4px 4px var(--global-shadow);
`

export const StyledWrapperRight = styled.section`
  display: flex;
  gap: 10px;
  font-size: 14px;

  @media screen and (min-width: 900px) {
    gap: 16px;
    font-size: 16px;
  }
`
