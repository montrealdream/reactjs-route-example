import './App.css';
import { LayoutDefault } from './layouts/LayoutDefault';
import { AboutHistory } from './pages/AboutPage/AboutHistory';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { AboutPageGeneral } from './pages/AboutPage/AboutPageGeneral';
import { AboutUs } from './pages/AboutPage/AboutUs';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { BlogSkill } from './pages/BlogPage/BlogSkill';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { HomePage } from './pages/Homepage/HomePage';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ProductDetail } from './pages/ProductPage/ProductDetail';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ProfilePage } from './pages/Profile/ProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault/>} className="container">
            {/* HomePage */}
            <Route path='/' element={<HomePage/>}/>

            {/* Blog Page */}
            <Route path='blog' >
              <Route index element={<BlogPage/>}/>
              <Route path='skill' element={<BlogSkill/>}/>
            </Route>

            {/* About Page */}
            <Route path='about' element={<AboutPage/>}>
              <Route index element={<AboutPageGeneral/>}/>
              <Route path='history' element={<AboutHistory/>}/>
              <Route path='us' element={<AboutUs/>}/>
            </Route>

            {/* Product Page */}
            <Route path='product'>
              <Route index element={<ProductPage/>}/>
              <Route path=":productId" element={<ProductDetail/>}/>
            </Route>

            {/* Protected Route */}
            <Route path='profile' element={
              <ProtectedRoute>
                <ProfilePage/>
              </ProtectedRoute>
            }
            />

            {/* 404 */}
            <Route path='*' element={<ErrorPage/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
