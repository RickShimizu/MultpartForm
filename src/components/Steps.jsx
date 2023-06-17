import './Steps.css'
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
const Steps = ({currentStep}) => {
  return (
    <div className="steps">
        <div className="step">
            <p>Identificação</p>
            <AiOutlineUser/>
        </div>

        <div className={`step ${currentStep >= 1 ? 'active': ''}`}>
            <p>Avaliação</p>
            <AiOutlineStar/>
        </div>

        <div className={`step ${currentStep >= 2 ? 'active': ''}`}>
            <p>Envio</p>
            <FiSend/>
        </div>
    </div>
  )
}

export default Steps