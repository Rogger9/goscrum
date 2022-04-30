import styled from 'styled-components'

export const StyledRegister = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: auto;

  h2 { text-align: center; }

  form {
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
  }

  label {
    display: grid;
    gap: .6rem;
    width: 100%;
    font-weight: bold;
  }

  input {
    height: 2.2rem;
    border-radius: .4rem;
    outline: none;
    border: 1px solid var(--shadow);
    padding: 0 .6rem;

    &:focus {
      box-shadow: 0 0 4px var(--shadow);
    }
  }

  select {
    height: 2.2rem;
    border-radius: .4rem;
    outline: none;
    background: var(--white);
    padding: 0 1rem;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 4px var(--shadow);
    }
  }

  @media screen and (min-width: 640px) {
    padding: 1rem 0;
    border-radius: .2rem;
    box-shadow: 0 0 4px var(--shadow) inset;
  }
`

export const StyledErrorMessage = styled.span`
  color: var(--red);
  padding: 0 1rem;
  text-align: center;
  font-weight: bold;
`
