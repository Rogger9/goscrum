import styled from 'styled-components'

export const StyledButtonClose = styled.button`
  background: transparent;
  color: ${({ header }) => header ? 'var(--global-orange)' : 'black'};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
`

export const StyledPage = styled.div`
  margin: auto;
  display: grid;
  place-items: center;
`
