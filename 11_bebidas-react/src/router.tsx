import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Layout from './layouts/Layout'
import { lazy, Suspense } from 'react'
import GenerateAI from './pages/GenerateAI'


const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<IndexPage />} index/>
                <Route path='/favorites' element={
                  <Suspense fallback="Cargando...">
                    <FavoritesPage />
                  </Suspense>
                }/>
                <Route path='/generate' element={<GenerateAI />} index/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter