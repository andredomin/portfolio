import Change from './Change.tsx'
import './welcome.css'
const Intro: React.FC = () => {
  const label = (
  <h2><span>Go to</span> Portfolio</h2>

  )
  return (
    <>
      <div className='body'></div>
      <div className="portfolio"><Change to="/portfolio" label={label} /></div>
    </>
  )
}

export default Intro
