import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import AddArticle from './pages/addArticle'
import ArticlePage from './pages/article'
import PageLayout from './components/PageLayout'
import Counter from './components/Counter'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<PageLayout />}>
					<Route index element={<Home />} />
					<Route path="blog" element={<Blog />} />
					<Route path="add" element={<AddArticle />} />
					<Route path="article/:id" element={<ArticlePage />} />
          <Route path='counter' element={<Counter />} />
			</Route>
        

      </Routes>
    </Router>
  </StrictMode>,
)
