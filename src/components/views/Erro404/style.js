import styled from 'styled-components'

export const StyledError404 = styled.div`
  margin: auto;
  text-align: center;

  img {
    object-fit: contain;
  }

  span {
    font-size: 1.4rem;

    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--global-orange);
    }
  }

  @media screen and (min-width: 640px) {
    max-width: 40rem;
    padding: 4rem;
    border-radius: .2rem;
    box-shadow:
      0 1px 3px var(--global-shadow),
      0 1px 2px var(--global-shadow)
    ;
  }
`
