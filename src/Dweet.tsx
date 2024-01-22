/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
const Dweet: React.FC = () => {
  const pathImage = '/img/dweet.jpeg'
  const pathImage2 = '/img/profile-pic.jpeg'
  return (
    <div className="dweet dweet-spinned">
        <img className="mini-profile" src={pathImage2} alt="profile-mini" />
        <h4 className="user-profile">Andres D. ⚡ <span className="date-profile">•   16 Jan 2024</span></h4>
        <div className="spinned"><FontAwesomeIcon className='chincheta' icon={faMapPin} style={{ color: 'rgb(236, 206, 40)' }} /><p><span>Spinned</span></p></div>
        <h2 className="dweet-title">🚀 Welcome to my Full Stack Development Portfolio!</h2>
        <div className="dweetp-container"><div className="tags"><p className="tag">✈️
Let's go!</p><p className="tag">🙌
Excited</p></div><p className="dweetp">Hello there! 👋 I'm Andres, a dynamic <span>full-stack developer</span> with an unquenchable thirst for innovation and a love for turning ideas into digital realities.<br /><br />Exciting things are in the pipeline! 🌟 <span>Follow my coding adventures as a full-stack developer</span>, and stay tuned for a blend of creativity, innovation, and tech magic. 🚀✨</p></div>
        <img className="dwimg" src={pathImage} alt="dweet-photo" />
    </div>
  )
}

export default Dweet
