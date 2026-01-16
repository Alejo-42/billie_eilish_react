import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import Albums from './components/Albums';
import AlbumDetail from './components/AlbumDetail';
import ScrollToTop from './components/ScrollToTap';

export default function App() {

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/albums' element={<Albums/>}/>
          <Route path='/albums/:id' element={<AlbumDetail/>}/>
          <Route path='/*' element={<Navigate to={'/'}/>}/>
        </Routes>
      </Router>
    </>
  )
}
