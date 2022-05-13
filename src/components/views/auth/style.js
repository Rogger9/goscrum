import styled from 'styled-components'

export const StyledAuth = styled.div`
  max-width: 450px;
  display: grid;
  gap: 10px;
  padding: 20px;
  margin: auto;

  > h2 { margin: 0 }

  @media screen and (min-width: 450px) {
    border: 1px solid var(--global-grey);
    border-radius: var(--global-radius);
  }
`
