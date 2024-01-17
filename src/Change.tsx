import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ChangeProps {
  to: string
  label: ReactNode
}

const linkStyle: React.CSSProperties = {
  textDecoration: 'none'

}

const Change: React.FC<ChangeProps> = ({ to, label }) => {
  return (
    <Link to={to} style={linkStyle}>
      <h2>{label}</h2>
    </Link>
  )
}

export default Change
