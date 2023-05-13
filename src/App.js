import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ScrollToTop} from './components';
import {Home, AboutUs} from './pages';
import { PAGES } from './utils/constants';
const App = props => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${PAGES.HOME}`} element={<Home />} />
        <Route path={`/${PAGES.ABOUT_US}`} element={<AboutUs/>} />
      </Routes>
    </Router>
  )
}

export default App;