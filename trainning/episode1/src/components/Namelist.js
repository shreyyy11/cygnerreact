import React from 'react'
import Person from './Person'

function Namelist() {
    const names = ['Cygner','Techno','Lab','Cygner']
    const persons = [
    // {
    //     id:1,
    //     name: 'Cygner',
    //     age:30,
    //     skill:'React',
    // },
    // {
    //     id:2,
    //     name:'Techno',
    //     age:15,
    //     skill:'Backspace ',
    // },
    // {
    //     id:3,
    //     name:'Lab',
    //     age:35,
    //     skill:'Vue',
    // }
]
    const namesList= names.map((name, index) => <h2 key={index}>{index} {name}</h2> )
    return <div>{namesList}</div>
}

export default Namelist

