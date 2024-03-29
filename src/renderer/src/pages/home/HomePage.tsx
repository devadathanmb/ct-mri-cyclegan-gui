import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

async function handleViewScansClick(): Promise<void> {
  //@ts-ignore fix later
  const error = await window.api.viewGeneratedScans()
  if (error) {
    toast.error(error)
  }
}

const HomePage: React.FC = () => {
  return (
    <div className="background-container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="mb-4">Welcome to CT-MRI Converter</h1>
        {/* <Link to="/view-scans"> */}
        <Button variant="primary" size="lg" onClick={handleViewScansClick} className="mx-2">
          View Scans
        </Button>
        {/* </Link> */}
        <Link to="/generate-scan">
          <Button variant="success" size="lg" className="mx-2">
            Generate Scan
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default HomePage
