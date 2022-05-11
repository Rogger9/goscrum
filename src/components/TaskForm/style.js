import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  gap: 12px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    width: 100%;
  }

  input, select, textarea {
    width: 100%;
    background: white;
    padding: 0 10px;
    border-radius: var(--global-radius);
    border: 1px solid var(--global-grey);
    outline: none;

    &:focus {
      box-shadow: 0 0 4px var(--global-shadow);
    }
  }

  .error {
    border: 1px solid var(--global-orange);
  }

  input, select {
    height: 37px;
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
    height: 37px;
  }

  @media screen and (min-width: 1300px) {
    > div:first-child {
      flex-direction: row;
    }
  }
`

export const StyledErrorMessage = styled.span`
  color: var(--global-orange);
  padding: 0 1rem;
`
