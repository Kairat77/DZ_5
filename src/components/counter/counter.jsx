import styles from './counter.module.css'

import React from 'react'

// function Counter() {
//     const [count, setCount]= useState(0)
    // const decr =(e) => {
    //     setCount(count - 1)
    // }
    // const incr = (e) => {
    //     setCount(count + 1)
    // }
//     return (
        // <div className={styles.container}>
        //     <button onClick={decr}>-</button>
        //     <div className={styles.counter}>{count}</div>
        //     <button onClick={incr}>+</button>
        // </div>
//     )
// }

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.decr = this.decr.bind(this)
        this.incr = this.incr.bind(this)
    }
     decr =(e) => {
       this.setState((state)=> {
        return {count: state.count -1}
       })
    }
     incr = (e) => {
        this.setState((state)=> {
            return {count: state.count +1}
           })
    }
    render(){
        return(
            <div className={styles.container}>
            <button onClick={this.decr}>-</button>
            <div className={styles.counter}>{this.state.count}</div>
            <button onClick={this.incr}>+</button>
        </div>
        );
    }
}

export default Counter;