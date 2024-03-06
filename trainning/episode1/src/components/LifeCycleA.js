import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'


class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'cygner'
      }
      console.log('LifeCycleA constructor')
    }
    
    static getDerivedStateFromProps(props , state){
      console.log('LifecycleA getDerivedStateFromProps')
      return null
    }

    componentDidMount(){
      console.log('LifeCycleA componentDidmount')
    }

    shouldComponentUpdate(){
      console.log('LifeCycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps,propsState){
      console.log('LifeCycleA shouldComponentUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        name:'VendettaCaptures'
      })
    }

  render() {
    console.log('LifeCycleA getDerivedStateFromProps')
    return (
    <div>
      <div>LifeCycle A </div>
      <button onClick={this.changeState}>Change state</button>
    <LifeCycleB />
    </div>
    )
  }
}

export default LifeCycleA
