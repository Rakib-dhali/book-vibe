import Nav from './components/Nav'
import { Outlet } from 'react-router'
import { BookProvider } from './context/BookProvider'

const App = () => {
  return (
    <BookProvider>
      <div className='w-full max-w-292.5 mx-auto'>
        <Nav />
        <Outlet />
      </div>
    </BookProvider>
  )
}

export default App