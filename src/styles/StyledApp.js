import styled from 'styled-components'

export const StyledButtonClose = styled.button`
  background: transparent;
  color: ${({ header }) => header ? 'var(--global-orange)' : 'black'};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
`
