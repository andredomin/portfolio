import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPaperclip, faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import Toggler from './Toggler'

const Portfolio: React.FC = () => {
  const profilePath = '/img/profile-pic.jpeg'
  return (
      <>
        <div className="navbar">
          <h1 id='logo'>⚡</h1>
        </div>
        <div className="container main-container">
        <div className="circle"><img className="profile" src={profilePath}/></div>
            <div className="container header-container"><div className="eyes"><div className="eye1"></div><div className="eye2"></div></div></div>
            <h1 className="title title-container">Andres D. ⚡</h1>
            <h3 className="description title-container">Geek of web development 💻, AI 🚀 and cybersecurity 🛡️.</h3>
            <h3 className="description title-container description-second-line">Full-stack Developer.</h3>
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'rgb(236, 207, 40)' }} className="plane" />
            <h3 className="description available">Available   <span id='connected'>•</span></h3>
            <FontAwesomeIcon className='description social' icon={faPaperclip} style={{ color: 'rgb(236, 207, 40)' }} />
            <h3 className="description links">/connect</h3>
            <FontAwesomeIcon className='description birthday' icon={faCakeCandles} style={{ color: 'rgb(236, 207, 40)' }} />
            <h3 className='description birth'>May 24</h3>
            <Toggler />
        </div>
        </>
  )
}
export default Portfolio
