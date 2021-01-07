import React, { useState, useEffect, Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Joke from './components/Joke';
import jokesData from './components/jokesData';
import TodoItem from './components/TodoItem';
import todosData from './components/todosData';
import randomcolor from 'randomcolor';
import Conditional from './components/Conditional';
import Form from './components/Form'
import MemeGenerator from './components/MemeGenerator'
/*
* Advanced React features/topics to learn:
*
* Official React Context API - https://reactjs.org/docs/context.html
* Error Boundaries - https://reactjs.org/docs/error-boundaries.html
* render props - https://reactjs.org/docs/render-props.html
* Higher Order Components - https://reactjs.orj/docs/higher-order-components.html
* React Router - https://reacttraining.com/react-router/core/guides/philosophy
* React Hooks - https://reactjs.org/docs/hooks-intro.html
* React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
*/

/* to do list
function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )

};

export default App;
*/
///////////////////////////////////////////////////////////////////////////////////////
/*class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        let wordDisplay;
        if (this.state.isLoggedIn) {
            wordDisplay = "in";
        }
        else {
            wordDisplay = "out";
        }
        return (
            <div>
                <Header username="vschool" />
                <h1>You are currently logged {wordDisplay}</h1>

            </div>
        )
    }
};
export default App;
*/
//////////////////////////////////////////////////////////////////////////////////////
/*class todolist
class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    };
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    //todo.completed = !todo.completed
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })

    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
            handleChange={this.handleChange}
        />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}
*/
//////////////////////////////////////////////////////////////////////////////////////
/* onclick change number
class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
                // color: randomcolor()
            }
        })
    }

    decrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
                // color: randomcolor()
            }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({ color: newColor })
        }
    }
    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
                <button onClick={this.increment}>Increment!</button>
                <button onClick={this.decrement}>Decrement!</button>
            </div>
        )
    }
}
*/
//////////////////////////////////////////////////////////////////////////////////////
/* lifecycle methods
class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        //GET the data I need to correctly display
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         //do something important here
    //     }
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     //retune true if want to do update
    //     //return false if not

    // }

    // componentWillUnmount() {
    //     //teardown or cleanup your code before your component disppears
    //     //(E.g. remove event listeners)
    // }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}
*/
///////////////////////////////////////////////////////////////////////////
/** React conditional Render part1
class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("http://swapi.dev/api/people/1/")
            .then(response => response.json()
                .then(data => {
                    this.setState({
                        isLoading: false,
                        character: data
                    })
                }))
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false
        //     })
        // }, 1500)
    }
    render() {
        const text = this.state.isLoading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
        // return (
        //     <div>
        //         <Conditional isLoading={this.state.isLoading} />
        //     </div>
        // )
    }
}
*/
////////////////////////////////////////////////////////////////////////
/** React conditional Render part2
class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}
*/

////////////////////////////////////////////////////////////////////////////
/*fetching data from an API with React
class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    componentDidMount() {
        this.setState({ loading: true })
        fetch("http://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })

    }
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                {text}
            </div>
        )
    }
}
*/

////////////////////////////////////////////////////////////////////////////
/*React Forms
class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }
    render() {
        return (
            <main>
                <form>
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />

                    <input
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <br />

                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <br />
                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                        /> Vegan?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> LactoseFree?
                    </label>
                    <br />
                    <button>Submit</button>

                </form>
                <br />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: { }</p>
                <p>
                    Your dietary restrictions: {this.state.destination}
                </p>
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>LactoseFree: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}
*/
/////////////////////////////////////////////////////////////
/* MemeGenerator
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MemeGenerator />
            </div>
        )
    }

}
*/
/////////////////////////////////////////////////////////////////
/** Hooks:useState, useEffect */
function App() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            //setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={increment}>Increment!</button>
            <button onClick={decrement}>Decrement!</button>
        </div>
    )

}
export default App;

/**
 * https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d
 * https://medium.freecodecamp.org/want-to-build-something-fun-feres-a-list-of-sample-web-app-ideas-b991bce0ed9a
 * https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d
 */