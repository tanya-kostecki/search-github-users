import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import NotFoundPage from './pages/not-found/NotFoundPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
  )
}

export default AppRoutes