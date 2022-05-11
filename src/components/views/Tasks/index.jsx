import AnimatedPage from 'components/AnimatedPage'
import Header from 'components/Header'
import { TaskForm } from 'components/TaskForm'
import { StyledMain } from './style'
import { WrapperList } from './WrapperList'

const Tasks = () => (
  <AnimatedPage>
    <>
      <Header />
      <StyledMain>
        <TaskForm />
        <WrapperList />
      </StyledMain>
    </>
  </AnimatedPage>
)

export default Tasks
