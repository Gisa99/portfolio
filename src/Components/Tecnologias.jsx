import '../Styles/components/tecnologias.sass'
import { SiTailwindcss } from 'react-icons/si';

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiSass
   
} from 'react-icons/di'



const tecnologias =[
    {id: "html", name: "HTML5", icon: <DiHtml5/>},
    {id: "css", name: "CSS3", icon: <DiCss3/>},
    {id: "js", name: "JavaScript", icon: <DiJsBadge/>},
    {id: "react", name: "React", icon: <DiReact/>},
    {id: "sass", name: "Sass", icon: <DiSass/>},
    {id: "tailwind", name: "Tailwind", icon: <SiTailwindcss style={{ color: '#38b2ac' }}/>}
]

const Tecnologias = () =>{
    return (
        <section id="tecnologias-container">
            <h2>Tecnologias</h2>
            <div className="tecnologias-grid">
                {tecnologias.map((tech) => (
                    <div className="tecnologia-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className='tecnologia-info'>
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Tecnologias