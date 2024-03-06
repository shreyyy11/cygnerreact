import React from 'react'


const heading = {
    fontSize:'70px',
    color: 'red'
}

function Inline() {
  return (
    <div>
      {/* <h1 className={styles.success}>Success</h1> */}

      <h1 className='error'>Error</h1>
      <h3 style={heading}>Inline</h3>
    </div>
  )
}

export default Inline
