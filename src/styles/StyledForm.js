import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  gap: 12px;

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

  input, select, button {
    height: 37px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .error {
    border: 1px solid var(--global-orange);
  }
`
export const StyledErrorMessage = styled.span`
  color: var(--global-orange);
  padding: 0 10px;
`
