import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { AppLoader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const SignupPage = lazy(() => import('../pages/SignupPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
