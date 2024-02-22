import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { AppLoader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));

const App = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

// export const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Section title="Phonebook">
//         <FormAddContact />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         <ContactList />
//       </Section>
//     </div>
//   );
// };
