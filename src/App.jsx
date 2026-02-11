import { RouterProvider } from 'react-router-dom';
import router from './router/index.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
import useAOS from "./hooks/useAOS.js";

export default function App() {
  useAOS();
  return <RouterProvider router={router} />;
}
