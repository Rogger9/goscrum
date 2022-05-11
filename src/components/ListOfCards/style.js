import styled from 'styled-components'

export const StyledContainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0;

  @media screen and (min-width: 900px) {
    width: 100%;
    height: fit-content;
    background: var(--global-bgColor);
    padding: 8px;
    border-radius: var(--global-radius);
    box-shadow: 0 4px 4px var(--global-shadow);
  }
`
