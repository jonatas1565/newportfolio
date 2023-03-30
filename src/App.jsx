import './App.css'
import image from './assets/profile-pic.png'
import { AiOutlineEye} from "react-icons/ai";
import { AiOutlineUser} from "react-icons/ai";


    function App() {
      return (
        <div className="App">
          {/* cabeçalho */}
          <header>
            <h1>Jônatas Ferreira</h1>
            <nav>
              <li className="navbar">Home</li>
              <li className="navbar">Sobre mim</li>
              <li className="navbar">Projetos</li>
              <li className="navbar">Contatos</li>
            </nav>
          </header>

          <main className="main">
            {/* sobre */}
            <div className="sobreT">
              <div className='sobre'>
              <h2>Olá, Sou o <span>Jônatas I. Ferreira</span></h2>
              <p>Sou programador frontend apaixonado por tecnologia</p>
              <div className='buttons'>
              <button>Sobre mim <AiOutlineUser/></button>
              <button>Projetos <AiOutlineEye/></button>
              </div>
              </div>
             
               <div className='imagem'>
                <div className="elipse"></div>
                <img src={image} alt="" className='imagem' />
                </div>
            </div>
            <div className="sobremim">
              <h2>Sobre mim</h2>
              <p>Meu nome é Jonatas e sou um programador frontend apaixonado por tecnologia. Com mais de 1 ano de experiência em desenvolvimento web, eu possuo um amplo conhecimento em HTML, CSS e JavaScript, além de frameworks e bibliotecas populares como React.</p>
              <p>1+ Anos de experiência em tecnologias Frontend</p>
            </div>
    {/* minhas tecnologias */}
            <div className="tecnologias">

              <div className="tecs">
                <i></i>
                <h3>html</h3>
                <p>HTML é a linguagem de marcação usada para criar páginas web.</p>
              </div>

              <div className="tecs">
              <i></i>
                <h3>html</h3>
                <p>HTML é a linguagem de marcação usada para criar páginas web.</p>
              </div>

              <div className="tecs">
              <i></i>
                <h3>html</h3>
                <p>HTML é a linguagem de marcação usada para criar páginas web.</p>
              </div>

              <div className="tecs">
              <i></i>
                <h3>html</h3>
                <p>HTML é a linguagem de marcação usada para criar páginas web.</p>
              </div>

              <div className="tecs">
              <i></i>
                <h3>html</h3>
                <p>HTML é a linguagem de marcação usada para criar páginas web.</p>
              </div>

              <div className="tecs">
              <i></i>
                <h3>html</h3>
                <p>HTML é a linguagem de marcação usada para criar páginas web.</p>
              </div>

            </div>
            <div className='projetos'>
            <h3>Projetos</h3>
            <p>Esses são alguns dos meus projetos</p>
            <div className="projetos">
              <h3>Maratona discovery</h3>
            </div>
            <div className="projetos">
              <h3>CEP</h3>
            </div>
            <div className="projetos">
              <h3>RocketShoes</h3>
            </div>
            <div className="projetos">
                <h3>RocketPay</h3>
            </div>
            </div>
          </main>
        </div>
      );
    }
    
   
 

export default App
