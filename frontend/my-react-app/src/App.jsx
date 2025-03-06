import './App.css';
import cloudImage from './assets/images/Cloud.png'; // Make sure the path is correct
import logo from './assets/images/Logo.png'; // Make sure the path is correct
import duyn1 from './assets/images/duyn1.jpg'; // Make sure the path is correct

function App() {
  return (
    <div className="landing-container">
      <div className="header">
        <div className="header-cloud">
          <img src={cloudImage} alt="Cloud"  />
        </div>
        < div className="header-logo">
          <img src={logo} alt="Logo"/>
        </div>
      </div>
      <main className="main-content">
        <section className='section-1'>
          <div className="image-container">
            <img src={duyn1} alt="Duyenxinhgai" />
            <p className="overlay-text">Chúc mừng ngày quốc tế phụ nữ, <br/> bé iu hãy lướt chậm xuống dưới để khám phá tấm thiệp này nhé!!</p>
          </div>
        </section>
        <section className='section-2'>
        </section>
        <section className='section-3'>
        </section>
        <section className='section-4'>
        </section>
        <section className='section-5'>
        </section>
      </main>
    </div>
  )
}

export default App