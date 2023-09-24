import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashbord from './components/pages/Dashbord/Dashbord';
import Team from './components/pages/Team/Team';
import Contact from './components/pages/Contact/Contact';
import Invoices from './components/Invoicess/Invoices';
import Form from './components/pages/Form/Form';
import Calender from './components/pages/Calender/Calender';
import Faq from './components/pages/FAQ/Faq';
import Pie from './components/pages/BieChart/Pie';
import BarChart from './components/pages/BarChart/BarChart';
import Line from './components/pages/Line/Line';
import Geography from './components/pages/Geography/Geography';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
     <Route index element={<Dashbord />} />
     <Route path='team' element={<Team />} />
     <Route path='contact' element={<Contact />} />
     <Route path='invoices' element={<Invoices />} />
     <Route path='form' element={<Form />} />
     <Route path='calender' element={<Calender />} />
     <Route path='faq' element={<Faq />} />
     <Route path='pie' element={<Pie />} />
     <Route path='bar' element={<BarChart />} />
     <Route path='Line' element={<Line />} />
     <Route path='geographu' element={<Geography />} />
    
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

