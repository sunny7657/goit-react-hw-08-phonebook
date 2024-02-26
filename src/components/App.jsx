import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { AppLoader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const SignupPage = lazy(() => import('../pages/SignupPage.jsx'));

const App = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
