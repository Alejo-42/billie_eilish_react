import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import { HomeScreen } from "./pages/HomeScreen"
import { DiscographyScreen } from "./pages/DiscographyScreen"
import { BiographyScreen } from "./pages/BiographyScreen"
import { SongsScreen } from './pages/SongsScreen'
import './index.css'

export const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<HomeScreen />} />
                <Route path="/discography" element={<DiscographyScreen />} />
                <Route path="/biography" element={<BiographyScreen />} />
                <Route path="/album/:id" element={<SongsScreen />} />
            </Route>
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    </>
  )
}