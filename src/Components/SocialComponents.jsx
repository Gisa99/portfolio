import { FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import '../Styles/components/socialcomponentes.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/giselefranca-devfrontend/"},
    {name: "github", icon: <FaGithub />, link: "https://github.com/Gisa99" },
    {name: "instagram", icon: <FaInstagram />, link: "#"},
]

const SocialComponents = () => {
    return (
        <section id="social-networks">
           {socialNetworks.map((network) => (
                <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
           ))}
        
        </section>
    )
}

export default SocialComponents