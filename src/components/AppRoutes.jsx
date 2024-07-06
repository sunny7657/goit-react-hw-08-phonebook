import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLoader } from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const Layout = lazy(() => import('../components/Layout/Layout'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default AppRoutes;
