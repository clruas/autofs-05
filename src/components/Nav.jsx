import { FiArrowLeft } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

function Nav(){
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className="md:hidden">
            { location.pathname !== "/" && <FiArrowLeft size={30} onClick={() => navigate(-1)} /> }
        </div>
    )
}
export default Nav