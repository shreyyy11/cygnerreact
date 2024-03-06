import React, { Component } from 'react'


class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'cygner'
      }
      console.log('LifeCycleB constructor')
    }
    
    static getDerivedStateFromProps(props , state){
      console.log('LifecycleB getDerivedStateFromProps')
      return null
    }

    componentDidMount(){
      console.log('LifeCycleB componentDidmount')
    }

    shouldComponentUpdate(){
      console.log('LifeCycleB shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps,propsState){
      console.log('LifeCycleB shouldComponentUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifeCycleB componentDidUpdate')
    }

  render() {
    console.log('LifeCycleB getDerivedStateFromProps')
    return (
    <div>LifeCycle B </div>
    )
  }
}

export default LifeCycleA
