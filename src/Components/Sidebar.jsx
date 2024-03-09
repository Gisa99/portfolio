import Avatar from '../img/profile.png'
import '../Styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialComponents from './SocialComponents'
import Curriculo from '../../public/curriculo.pdf'

const Sidebar = () =>{
    return(
        <aside id="sidebar">
            <img src={Avatar} alt='Gisele França' />
            <p className="title">Desenvolvedora Front-End Jr</p>
            <SocialComponents />
            <InformationContainer />
            <a href={Curriculo} className="btn" target="iframe_download">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar