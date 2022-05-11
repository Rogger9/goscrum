import styled from 'styled-components'

export const StyledLoader = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  border: 3px solid var(--global-shadow);
  border-radius: 50%;
  border-top-color: var(--global-orange);
  animation: spin 1s ease-in-out infinite;
  margin: auto;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`
