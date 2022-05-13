import styled from 'styled-components'
import { StyledForm } from 'styles/StyledForm'

export const StyledFormTask = styled(StyledForm)`
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  textarea {
    padding: 10px;
    height: 120px;
    max-height: 250px;
    resize: vertical;
    font-family: inherit;
  }

  > button {
    width: 100px;
  }

  @media screen and (min-width: 1300px) {
    > div:first-child {
      flex-direction: row;
    }
  }
`
