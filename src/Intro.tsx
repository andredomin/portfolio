import Change from './Change.tsx'
import './welcome.css'
const Intro: React.FC = () => {
  
  const label = (
  <h2>Go to Portfolio</h2>

  )
  return (
    <>
      <div className="line-1"><h1>Hi, I`m Andrés, FullStack Developer based in Spain.</h1></div>
      <div className="line-2"><h1>FullStack Developer</h1></div>
      <div className="line-3"><h1>based in Spain.</h1></div>
      <div className="charizard-container"><img className='charizard' src="/img/charizard2.gif" alt="charizard" /></div>
      <div className='gifcontainer'><img className='gif' src="/img/pika.gif" alt="pikachu" /></div>
      
      <div className="portfolio"><Change to="/portfolio" label={label} /></div>
    </>
  )
}

export default Intro
