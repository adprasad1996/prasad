import React, {useContext} from 'react';
import { userContext } from './userContex';

function Child() {
      const data = useContext(userContext)
      console.log(data)
  return (
    <div>Child</div>
  )
}

export default Child