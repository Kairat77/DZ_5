import styles from './toggles.module.css'
import {useState} from 'react'
import React from 'react'

// function Toggles() {
//     const [selected, setSelected] = useState('yes')
//     const [showText, setShowText] = useState(true)

//     return (
//         <div className={styles.container}>
//             <button onClick={(e) => setShowText(!showText)}>Скрыть текст</button>
//             {showText ? 
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p>
//             : null
//         }

//             <div className={styles.question}>
//                 <span>Вы уверены что хотите закончить курсы?</span>
//                 <input
//                     type="radio"
//                     id="yes"
//                     name="choose"
//                     value="yes"
//                     checked={selected === 'yes'}
//                 />
//                 <label htmlFor="yes">Yes</label>

//                 <input
//                     type="radio"
//                     id="no"
//                     name="choose"
//                     value="no"
//                     checked={selected === 'no'}
//                 />
//                 <label htmlFor="no">No</label>

//                 <input
//                     type="radio"
//                     id="maybe"
//                     name="choose"
//                     value="maybe"
//                     checked={selected === 'maybe'}
//                 />
//                 <label htmlFor="maybe">Maybe</label>
//             </div>
//         </div>
//     )
// }

class Toggles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: 'yes',
        showText: true
      };
      this.handleShowText = this.handleShowText.bind(this)
    }
  
    handleShowText = () => {
      this.setState(prevState => ({ showText: !prevState.showText }));
    }
  
    render() {
      const { selected, showText } = this.state;
  
      return (
        <div className={styles.container}>
          <button onClick={this.handleShowText}>Скрыть текст</button>
          {showText ? 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p>
            : null
          }
  
          <div className={styles.question}>
            <span>Вы уверены что хотите закончить курсы?</span>
            <input
              type="radio"
              id="yes"
              name="choose"
              value="yes"
              checked={selected === 'yes'}
            />
            <label htmlFor="yes">Yes</label>
  
            <input
              type="radio"
              id="no"
              name="choose"
              value="no"
              checked={selected === 'no'}
            />
            <label htmlFor="no">No</label>
  
            <input
              type="radio"
              id="maybe"
              name="choose"
              value="maybe"
              checked={selected === 'maybe'}
            />
            <label htmlFor="maybe">Maybe</label>
          </div>
        </div>
      );
    }
  }
  

export default Toggles;