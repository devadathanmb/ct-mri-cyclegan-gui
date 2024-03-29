import HomePage from './pages/home/HomePage'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import GeneraScanWizard from './pages/generateScan/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'generate-scan',
    element: <GeneraScanWizard />
  }
])

const App: React.FC = () => {
  return (
    <div>
      <ToastContainer position="top-center" theme="colored" />
      <RouterProvider router={router} />
    </div>
  )
}
export default App
