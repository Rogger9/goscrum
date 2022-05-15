import styled from 'styled-components'
import { StyledButtonClose } from 'styles/StyledApp'

const bgColors = {
  'IN PROGRESS': 'yellow',
  FINISHED: 'green',
  LOW: 'blue',
  MEDIUM: 'yellow'
}

const fgColors = {
  'IN PROGRESS': 'black',
  MEDIUM: 'black'
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
  background: ${({ color }) => bgColors[color] ? `var(--global-${bgColors[color]})` : 'var(--global-orange)'};
  color: ${({ color }) => fgColors[color] ? `${fgColors[color]}` : 'white'};
  padding: 2px 3px;
  margin: 6px 0;
  border: 1px solid ${({ color }) => bgColors[color] ? `var(--global-${bgColors[color]})` : 'var(--global-orange)'};
  outline: none;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: ${({ shadow }) => shadow && '0 4px 4px var(--global-shadow)'};

  &:hover {
    background: ${({ color }) => fgColors[color] ? `${fgColors[color]}` : 'white'};
    color: ${({ color }) => bgColors[color] ? `var(--global-${bgColors[color]})` : 'var(--global-orange)'}
  }
`
