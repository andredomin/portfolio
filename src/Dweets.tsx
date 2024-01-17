import React, { type ReactNode } from 'react'
interface DweetProps {
  pathImage: string
  pathImage2: string
  date: string
  dweetTitle: ReactNode
  tags: ReactNode
  dweetContent: ReactNode
  dweetContent2?: ReactNode
  btnprop?: ReactNode
}
const Dweets: React.FC<DweetProps> = ({
  pathImage,
  pathImage2,
  date,
  dweetTitle,
  tags,
  dweetContent,
  dweetContent2,
  btnprop
}) => {
  return (
    <div className='dweet'>
      <img className="mini-profile" src={pathImage2} alt="profile-mini" />
      <h4 className="user-profile">
        Andres D. ⚡ <span className="date-profile">• {date}</span>
      </h4>
      <h2 className="dweet-title">{dweetTitle}</h2>
      <div className="dweetp-container">
        <div className="tags">{tags}</div>
        <p className="dweetp">{dweetContent}</p>
      </div>
      <img className="dwimg" src={pathImage} alt="dweet-photo" />
      <div className="dweet-foot">{dweetContent2}</div>
      <>{btnprop}</>
    </div>
  )
}
export default Dweets
