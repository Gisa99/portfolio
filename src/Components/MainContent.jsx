import '../Styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import Projetos from './Projetos'
import Tecnologias from './Tecnologias'

const MainContent = () =>{
    return(
        <main id="main-content">
            <AboutContainer />
            <Tecnologias />
            <Projetos />
        </main>
    )
}

export default MainContent