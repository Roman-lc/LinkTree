import Tree from './components/Tree.jsx'
import Asteroids from './components/Asteroids.jsx'
import './App.css'

import logo from './assets/logo.jpg'

function App() {

  return (
    <>
      
      <div className='h-w' style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <Asteroids />
      </div>

      <img 
        src={logo} 
        alt="Logo" 
        style={{
          display: 'block',
          margin: '2rem auto',
          marginBottom: '0',
          width: 'clamp(80px, 20vw, 150px)',
          height: 'clamp(80px, 20vw, 150px)',
          borderRadius: '50%',
          padding: '3px', // para que se vea el borde degradado
          background: 'conic-gradient(from 0deg, #ff00ff, #00ffff, #ff00ff)', // borde degradado estilo neón
          boxShadow: '0 0 15px #ff00ff, 0 0 30px #00ffff', // sombra de color
          objectFit: 'cover',
          transform: 'rotate(25deg)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'rotate(0deg)';
          e.currentTarget.style.boxShadow = '0 0 25px #ff00ff, 0 0 50px #00ffff';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'rotate(25deg)';
          e.currentTarget.style.boxShadow = '0 0 15px #ff00ff, 0 0 30px #00ffff';
        }}
      />

      <h1 className="text-center mb-0 text-white">Román Lopez Casala</h1>
      <p className="text-center mb-0 text-white shadow-lg">Ya tu sabes, un LinkTree</p>
      <Tree />

    </>
  )
}

export default App
