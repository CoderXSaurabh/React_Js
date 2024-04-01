import React from 'react'

const Memo1 = ({name1,count1}) => {
    console.log("*****Memo Component*****");
  return (
    <>
        <h1>My name is {name1}</h1>
        <h1>Count is {count1}</h1>
    </>
  )
}

export default React.memo(Memo1);