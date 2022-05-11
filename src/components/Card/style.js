import styled from 'styled-components'
import { StyledButtonClose } from 'styles/StyledApp'

const colors = {
  now: 'orange',
  inProcess: 'yellow',
  finished: 'green',
  low: 'blue'
}

export const StyledCard = styled.div`
  background: var(--global-bgColor);
  padding: 10px;
  border: 1px solid var(--global-borderColor);
  border-radius: var(--global-radius);
  position: relative;

  overflow: hidden;

  > section {
    display: flex;
    gap: 8px;
  }

  > ${StyledButtonClose} {
    position: absolute;
    top: 15px;
    right: 10px;
  }

  > p {
    font-size: 12px;
    padding: 4px 0 0;
  }

  @media screen and (min-width: 768px) and ( max-width: 899px) {
    padding: 10px 20px;
  }
`
export const StyledButtonCard = styled.button`
  background: ${({ color }) => colors[color] ? `var(--global-${colors[color]})` : 'var(--global-orange)'};
  color: ${({ color }) => color === 'inProcess' ? 'black' : 'white'};
  padding: 2px 3px;
  margin: 6px 0;
  border: none;
  outline: none;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: ${({ shadow }) => shadow && '0 4px 4px var(--global-shadow)'};

  &:hover {
    filter: brightness(1.1);
  }
`
