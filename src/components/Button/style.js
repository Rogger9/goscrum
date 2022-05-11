import styled from 'styled-components'

export const StyledButton = styled.button`
  background: var(--global-orange);
  color: white;
  padding: 4px;
  border-radius: var(--global-radius);
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: bold;

  &:active {
    transform: scale(0.96);
    transition: transform .2s ease;
  }

  &:hover {
    background: white;
    color: var(--global-orange);
    border: 1px solid var(--global-orange);
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`
