import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { lazy, Suspense } from 'react';
import {RestrictedRoute} from './RestrictedRoute/RestrictedRoute'

const Register = lazy(() => import('./Register/Register'))
const SharedLayout = lazy(()=> import('./SharedLayout/SharedLayout'))
const HomePage = lazy(() => import('./HomePage/HomePage'))
const ContactsPage = lazy(()=> import('./pages/ContactsPage'))
const Login = lazy(() => import('./Login/Login'))
const UserMenu = lazy(() => import('./UserMenu/UserMenu'))
export const App = () => {
  return (
    <>
    <div>
     <Suspense fallback={<div>Loading...</div>}> 
      <Routes>
        <Route path='/' element={<> <SharedLayout /> <HomePage /></>}></Route>
        <Route
          path="/register"
          // element={<Register />}
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route path='/login' element={
          <RestrictedRoute redirectTo="/contacts" component={<Login />} />
        }></Route>
        <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<><UserMenu /> <ContactsPage /></>} />} />
        {/* <Route path='/contacts' element={<><Header /> <ContactsPage /></>}></Route> */}
      </Routes>
      </Suspense>
    </div>
    {/* </Router> */}
    </>
  );
};

// <Suspense fallback={<div>Loading...</div>}>
  // <Router>
  //   <Routes>
  //     <Route path='/' element={<header><h1>Header</h1></header>}>
  //       <Route index element={<h1>HomePage</h1>} />
  //       <Route path='register' element={<Register />} />
  //     </Route>
  //   </Routes>
  // </Router>
// </Suspense>