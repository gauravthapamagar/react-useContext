//this is the place where the context api is used so it is written useContext
// this is the place where the created and initialized the createContext variable is called

import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'
const ChildB = () => {
    const user = useContext(userContext);
  return (
    <div>
        ChildB --- {user}
    </div>
  )
}

export default ChildB
