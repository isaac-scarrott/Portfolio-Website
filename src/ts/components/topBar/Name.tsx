import React from 'react'
import {forenameArray, surenameArray} from '../../constants';

const forename = forenameArray.map((letter) =>
  <span>{`${letter} `}</span>
)

const surename = surenameArray.map((letter) =>
  <span>{`${letter} `}</span>
)

export function Name() {
  return (
    <div id='name' >
      <div id='forename'>
        {forename}
      </div>
      
      <div id='surname'>
        {surename}
      </div>
    </div>
  )
}
