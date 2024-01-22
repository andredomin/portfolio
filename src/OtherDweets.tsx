import type { ReactNode } from 'react'
import Dweets from './Dweets'

const OtherDweets: React.FC = () => {
  const myContent: ReactNode = (
    <>
      <p>Im thrilled to share with you an incredible breakthrough that has emerged at the intersection of technology and healthcare. In a groundbreaking development, <span>Artificial Intelligence (AI) has unveiled a new class of antibiotics</span> by meticulously examining a staggering 12 million compounds.</p>
    </>
  )

  const myContent2: ReactNode = (
    <>
    <p>This remarkable achievement signifies not only a leap forward in scientific discovery but <span>also a testament to the collaborative power of technology and human expertise.</span></p>
    </>
  )

  const myContent3: ReactNode = (
    <>
    <p>Tools Design offers an immense collection of:</p>
    <ul>
        <li>Designs to <span>inspire</span> you</li>
        <li>Icons and <span>illustrations</span></li>
        <li>Tools and <span>mockups</span></li>
        <li>Resources to <span>learn</span></li>
    </ul>
    </>
  )

  const btnprop: ReactNode = (
    <>
    <a href="https://singularityhub.com/2023/12/21/ai-discovers-a-new-class-of-antibiotics-after-scouring-12-million-compounds/" target='_blank' rel='noreferrer'><button className='btn'>Read article</button></a>
    </>
  )

  const btnprop2: ReactNode = (
    <>
    <a href="https://toools.design" target='_blank' rel='noreferrer'><button className='btn'>Check out the resource</button></a>
    </>
  )

  const tagsantibiotic: ReactNode = (
    <>
    <p className="tag">💊 Fascinating!</p>
    <p className="tag">🧪 Science</p>
    </>
  )
  const tagsresource: ReactNode = (
    <>
    <p className="tag">📊 Useful!</p>
    <p className="tag">📐 Design</p>
    </>
  )

  return (
    <>
    <Dweets
      pathImage='../public/img/toools.jpeg'
      pathImage2='../public/img/profile-pic.jpeg'
      date='16 Jan 24'
      dweetTitle='A stunning resource for designers and programmers.'
      tags={tagsresource}
      dweetContent={myContent3}
      btnprop={btnprop2}
    />
    <Dweets
      pathImage="/img/antibiotic.jpeg"
      pathImage2="/img/profile-pic.jpeg"
      date="16 Jan 24"
      dweetTitle="AI discovers new class of antibiotics to kill drug-resistant bacteria"
      tags={tagsantibiotic}
      dweetContent={myContent}
      dweetContent2={myContent2}
      btnprop={btnprop}
    />

    </>
  )
}

export default OtherDweets
