import { AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../Styles/components/informationContainer.sass'

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(48) 99205-7022</p>
                </div>

            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>rgisele644@gmail.com</p>
                </div>

            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>Assis-SP</p>
                </div>

            </div>
       
        
        </section>
    )
}

export default InformationContainer