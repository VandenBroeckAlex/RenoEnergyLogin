import './App.css'
import RegistrationForm from './Form'
import Caroussel from './caroussel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
function App() {


  return (
    <>
      <div className='global'>
        <div className='contentContainer'>
          <div className='left'> 
            <div className='left_text'>
              <h1>Manage your Money Anywhere</h1>
              <p>View all the analytics and grow your buisness from anywhere</p>
            </div>
            <Caroussel/>
          </div>
          <div className='right_form'>
          
              <RegistrationForm/>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
