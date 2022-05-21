import styled from 'styled-components'
import { StyledContainerList } from 'components/ListOfCards/style'
import { FormControl } from '@mui/material'
import { StyledForm } from 'styles/StyledForm'

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
  display: flex;
  flex-direction: column;
  background: var(--global-bgSecundary);
  gap: 16px;
  padding: 50px 10px 10px;
  border-radius: 4px;
  box-shadow: 0 4px 4px var(--global-shadow);
  position: relative;

  > h1,h2,h3,h4,h5,h6,p { margin: 0 }

  > h2 {
    position: absolute;
    top: 10px;
  }

  > span {
    flex: 1;
    text-align: center;
  }

  ${StyledForm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > section:last-child {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > ${StyledContainerList}, span {
      width: 100%;
    }

    > span { text-align: center; }
  }

  @media screen and (min-width: 900px) {
    border-radius: var(--global-radius);

    > section:last-child {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1300px) {
    ${StyledForm} {
      flex-direction: row;
    }
  }
`

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  align-items: flex-start;

  > div:first-child {
    flex-wrap: nowrap;

    > * { margin: 0 }

    > label {
      > span:nth-child(2) {
        width: max-content;
      }
    }

    .Mui-checked {
      color: var(--global-orange);
    }
  }
`
