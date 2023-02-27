import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/simple-test-page" element={<TestPage />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
