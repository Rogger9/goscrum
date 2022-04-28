import styled from 'styled-components'

const colorList = ['orange', 'blue', 'green', 'yellow', 'red']

export const StyledButton = styled.button`
  width: 6rem;
  height: 2rem;
  background: ${({ color }) => colorList.includes(color) ? `var(${'--' + color})` : 'var(--orange)'};
  color: ${({ color }) => color === 'yellow' ? 'black' : 'var(--white)'};
  padding: .4rem;
  border-radius: .4rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 1px 1px 2px 1px var(--shadow);

  &:active {
    transform: scale(0.96);
    transition: transform .2s ease;
  }

  &:hover {
    filter: brightness(1.1);
    transition: filter .2s ease;
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`
