import '../Styles/components/projeto.sass'
import Pomodoro from '../img/pomodoro.png'
import AluraGeek from '../img/alurageek.png'
import Organo from '../img/organo.png'
import Game from '../img/acerte-o-numero.png'
import Book from '../img/Coffe&Book.png'

const Projetos = () =>{
    return (
        <section>
            <h2>Projetos</h2>
            <div id="projetos-cards">
                <div className="card">
                    <img src={Pomodoro} alt="Capa projeto pomodoro" />
                    <h4>Pomodoro</h4>
                    <p>Foque em seus estudos utilizando o método <strong>Pomodoro.</strong></p>
                    <a href="https://gisa99.github.io/Pomodore/" target='_blank' className="btn-card"> Ver Projeto</a>
                    
                </div>
                <div className="card">
                    <img src={AluraGeek} alt="Capa projeto alurageek" />
                    <h4>AluraGeek</h4>
                    <p>Faça login na loja e gerencie seus produtos cadastrados.</p>
                    <a href="https://gisa99.github.io/Alura__Geek-/index.html" target='_blank' className="btn-card"> Ver Projeto </a>
                </div>
                <div className="card">
                    <img src={Organo} alt="capa projeto organo" />
                    <h4>Organo</h4>
                    <p>Classifique suas séries pendentes, "dropadas" ou concluídas.</p>
                    <a href="https://organo-animes-series.vercel.app/" target='_blank' className="btn-card"> Ver Projeto </a>
                </div>
                <div className="card">
                    <img src={Book} alt="capa do projeto Coffe&Book" />
                    <h4>Coffee & Book </h4>
                    <p>Projeto biblioteca First Mobil: testanto responsividade.</p>
                    <a href="https://gisa99.github.io/biblioteca/" target='_blank' className="btn-card"> Ver Projeto </a>
                </div>

            </div>

            <a href="https://github.com/Gisa99" target='_blank' className="btn"> Ver Portfólio </a>
            
        </section>
    )
}

export default Projetos