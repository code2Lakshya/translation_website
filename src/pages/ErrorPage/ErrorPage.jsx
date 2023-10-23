import { useNavigate } from 'react-router-dom';
import './ErrorPage.css'


const ErrorPage = () => {
const navigate=useNavigate();
    return (
        <div className="error-container">
            <p>Error 404</p>
            <p>No Such Page Found</p>
            <button onClick={()=>navigate('/')}>Go Back</button>
        </div>
    );
}
export default ErrorPage;