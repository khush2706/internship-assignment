import { NavWrapper, TabWrapper } from '../styles/Containers'

const Navbar = ({ activeTab, setActiveTab, Tabs }) => {
  return (
    <NavWrapper>
      <h1>Summer referral competition</h1>
      <TabWrapper boxShadow="true">
        {activeTab &&
          Tabs.map((tab, index) => {
            return (
              <button
                className={tab.id === activeTab.id ? 'active' : ''}
                key={index}
                onClick={() => setActiveTab(tab)}>
                {tab.name}
              </button>
            )
          })}
      </TabWrapper>
    </NavWrapper>
  )
}

export default Navbar
