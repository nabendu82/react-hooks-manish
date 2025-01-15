import './App.css'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import RefsDemo from './components/RefsDemo'
// import GrandParent from './components/GrandParent'
// import React from 'react'
// import ParentCOmp from './components/ParentCOmp'

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <>
        <DocTitleOne />
        <DocTitleTwo />
    </>
    // <User
    // Context.Provider value="Nabendu">
    //   <ChannelContext.Provider value="TWD">
    //     <GrandParent /> 
    //   </ChannelContext.Provider>
    // </User>
    // <ParentCOmp />

  )
}

export default App
