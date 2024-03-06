// import logo from './logo.svg';
import React, { Component, PureComponent } from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Visitor from './components/visitor';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Namelist from './components/Namelist';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css' 
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

class App extends Component {
render() {
  return (
    <div className="App">
      <RefsDemo />
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
    {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline />  */}
      {/* <Stylesheets primary={true} /> */}
      {/* <Namelist /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Visitor/> */}
      {/* <Greet name="Dell" heroName="Laptop">  */}
      {/* <p>This is children props</p> */}
      {/* </Greet> */}
      {/* <Greet name="Acer" heroName="Laptop"> */}
        {/* <button>action</button> */}
      {/* </Greet>  */}
      {/* <Greet name="Lenovo" heroName='Laptop' /> */}
      {/* <Welcome name="Dell" heroName="Laptop" />  */}
      {/* <Welcome name="Acer" heroName="Laptop" />  */}
      {/* <Welcome name="Lenovo" heroName="Laptop" /> */}
      {/* <Hello/>   */}
    </div>
  )
}
}
export default App


