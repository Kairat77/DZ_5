import styles from './simpleForm.module.css'
import { useState } from 'react'
import React from 'react'

// function SimpleForm() {
//     const [name, setName] = useState("")
//     const [age, setAge] = useState(1)
//     const [graduated, setGraduated] = useState(false)
//     console.log(graduated);


//     return (
//         <div className={styles.container}>
//             <form className={styles.studentForm}>
//                 <label> Имя:
//                     <input 
//                         type="text"
//                         name="firstName"
//                         placeholder="Введите имя студента" 
//                         onChange={(e) => setName(e.target.value)}/>
//                 </label>
//                 <label> Возраст:
//                     <input 
//                         type="number"
//                         name="age" min={1} max={120} 
//                         onChange={(e) => setAge(e.target.value)} />
//                 </label>
//                 <label>Закончил(а) курсы: 
//                     <input 
//                         type="checkbox" 
//                         name="grad" 
//                         onChange={(e) => setGraduated(e.target.checked)}/>
//                 </label>
//             </form>
//             <div className="profile">
//                 <div>Имя: {name}</div>
//                 <div>Возраст: {age}</div>
//                 <div>Закончил(а) курсы:{graduated ? 'да' : "нет"}</div>
//             </div>
//         </div>
//     )
// }



class SimpleForm extends React.Component{
    constructor() {
        super()
        this.state = {
            name:'',
            age: 0,
            great: false
        }
        this.changeName = this.changeName.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeGreat = this.changeGreat.bind(this)
    }

    changeName = (e) => {
        this.setState({name: e.target.value})
    }
    changeAge = (e) => {
        this.setState({age: e.target.value})
    }
    changeGreat = (e) => {
        this.setState({great: e.target.checked})
    }
    render(){
        return(
            <div className={styles.container}>
            <form className={styles.studentForm}>
                <label> Имя:
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="Введите имя студента" 
                        onChange={(e) => this.changeName(e)}/>
                </label>
                <label> Возраст:
                    <input 
                        type="number"
                        name="age" min={1} max={120} 
                        onChange={this.changeAge} />
                </label>
                <label>Закончил(а) курсы: 
                    <input 
                        type="checkbox" 
                        name="grad" 
                        onChange={this.changeGreat}/>
                </label>
            </form>
            <div className="profile">
                <div>Имя: {this.state.name}</div>
                <div>Возраст: {this.state.age}</div>
                <div>Закончил(а) курсы:{this.state.great ? "да" : "нет"}</div>
            </div>
        </div>
        )
    }
}
export default SimpleForm;