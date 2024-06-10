import MainContent from './Components/MainContent'
import Sidebar from './Components/Sidebar'
import './Styles/components/app.sass'


function App() {
  

  return (
    <>
      <div id="portfolio">  
          <h1>Gisele França</h1>
          <div className='portfolio-content'>
            <Sidebar />
            <MainContent />
         </div>
      </div>
      
    </>
  )
}

export default App
