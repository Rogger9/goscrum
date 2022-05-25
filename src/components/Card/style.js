import styled from 'styled-components'
import { StyledButtonClose } from 'styles/StyledApp'

const colors = {
  'IN PROGRESS': {
    bg: 'yellow',
    fg: 'black'
  },
  FINISHED: {
    bg: 'green',
    fg: 'white'
  },
  LOW: {
    bg: 'blue',
    fg: 'white'
  },
  MEDIUM: {
    bg: 'yellow',
    fg: 'black'
  }
}

export const StyledCard = styled.div`
  background: var(--global-bgColor);
  padding: 10px;
  border: 1px solid var(--global-borderColor);
  border-radius: var(--global-radius);
  position: relative;

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
`
export const StyledButtonCard = styled.button`
  background: ${({ color }) => colors[color] ? `var(--global-${colors[color].bg})` : 'var(--global-orange)'};
  color: ${({ color }) => colors[color] ? `${colors[color].fg}` : 'white'};
  padding: 2px 3px;
  margin: 6px 0;
  border: 1px solid ${({ color }) => colors[color] ? `var(--global-${colors[color].bg})` : 'var(--global-orange)'};
  outline: none;
  border-radius: 3px;
  font-weight: bold;
  cursor: ${({ pointer }) => pointer && 'pointer'};
  box-shadow: ${({ shadow }) => shadow && '0 4px 4px var(--global-shadow)'};

  &:hover {
    background: ${({ color }) => colors[color] && `${colors[color].fg}`};
    color: ${({ color }) => colors[color] && `var(--global-${colors[color].bg})`}
  }
`
