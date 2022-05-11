import styled from 'styled-components'

export const StyledMain = styled.main`
  min-height: calc(100vh - 50px);
  display: grid;
  padding: 10px 4px;
  gap: 10px;

  > section:first-child {
    h2 { margin: 0; }
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 33% auto;
    padding: 10px;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StyledWrapperList = styled.section`
  background: var(--global-bgSecundary);
  padding: 50px 10px 10px;
  border-radius: 4px;
  box-shadow: 0 4px 4px var(--global-shadow);
  position: relative;

  > h1,h2,h3,h4,h5,h6,p { margin: 0 }

  > h2 {
    position: absolute;
    top: 10px;
  }

  @media screen and (min-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    border-radius: var(--global-radius);
  }
`
