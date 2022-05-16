import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  gap: 4px;
  box-shadow: 0px 4px 4px var(--global-shadow);
`

export const StyledWrapperRight = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  font-size: 12px;

  > button {
    font-size: 12px;
  }

  @media screen and (min-width: 900px) {
    gap: 16px;
    font-size: 16px;
  }
`
