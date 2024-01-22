import React, { useState } from 'react'
import Dweet from './Dweet'
import OtherDweets from './OtherDweets'
import ThatsAll from './ThatsAll'
import Work from './Work'

interface TabProps {
  tabNumber: number
  children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({ children }) => (
  <div>{children}</div>
)

const TabsExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1)

  const handleTabChange = (tabNumber: number): void => {
    setActiveTab(tabNumber)
  }

  return (
    <div>
      <div className='tab-container'>
        <a onClick={() => { handleTabChange(1) }} className={`tab feed ${activeTab === 1 ? 'active' : ''}`}>
          Feed
        </a>
        <a onClick={() => { handleTabChange(2) }} className={`tab work ${activeTab === 2 ? 'active' : ''}`}>
          Work
        </a>
        <a onClick={() => { handleTabChange(3) }} className={`tab about ${activeTab === 3 ? 'active' : ''}`}>
          About
        </a>
        <a onClick={() => { handleTabChange(4) }} className={`tab labs ${activeTab === 4 ? 'active' : ''}`}>
          Labs
        </a>
      </div>

      <Tab tabNumber={1}>
        {activeTab === 1 && <div className='contenido-tab'><Dweet /><br /><OtherDweets /><br /><ThatsAll /></div>}
      </Tab>

      <Tab tabNumber={2}>
        {activeTab === 2 && <div className='contenido-tab'><Work /></div>}
      </Tab>

      <Tab tabNumber={3}>
        {activeTab === 3 && <p className='contenido-tab'></p>}
      </Tab>

      <Tab tabNumber={4}>
        {activeTab === 4 && <p className='contenido-tab'>Contenido de la Pestaña 4</p>}
      </Tab>
    </div>
  )
}

export default TabsExample
