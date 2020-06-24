import React, { Component } from 'react';
import { render } from '@testing-library/react';

//4. Time to convert your functional component into a class-based component. Without changing any actual content, comment out your functional App component and create a new class-based App component that renders the same props as the functional one did.
//5. initialize state, and define a new property called "text" with some string as the value
//6. Your new component should display both values from props and state.  
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'eat my shorts',
            message: '',
            hasLoaded: false,
        }
    }
//10. write a new method with the name componentDidMount, which will set the state property "hasLoaded" to true 
    componentDidMount() {
        this.setState({ hasLoaded: true })

    }
//8. Add a button beneath that input. When clicked, the button should invoke a method defined on the class to toggle a "hasLoaded" state property, which has a default value of false 
    loaded(e) {
        this.setState({
            hasLoaded: true,
        })
    }
//7. Add an input element to your App. Use the component's state to define its placeholder attribute. Add an "onChange" event to the input, and then handle the event to set a new property on the App's state that will be tied to the input's value attribute
    handleMessageChange(e) {
        this.setState({
            message: e.target.value
        })
    }

//1. create a functional component named "App", and define a simple JSX element inside of that component. Then, return that element from the App component.
//3. create a property of your choosing on App in index.js. The value for that property should be a string. Pass in your props to App and replace your original <h1> text with the property value you just passed in to the component. 
//4. Without changing any actual content, comment out your functional App component and create a new class-based App component that renders the same props as the functional one did.

// const App = (props) => {
//     return (
//         <>
//             <h1>Hello {props.name}! Welcome to {props.city}. </h1>
//         </>
//     );
// }
    render() {
//9. Before you return your elements to be rendered, check whether or not the hasLoaded property is true. If it is, return the elements that you have already defined; otherwise, return a new heading with the text "Loading..." and a button beneath it that is identical to the one you created in step 8. 
        if (!this.state.hasLoaded) {
            return (
                //Replace any "wrapping" divs with the <React.Fragment> tag
                <>
                    <h1>{this.state.message} Loading...</h1>
                    <button onClick={(e) => this.loaded(e)} > Click to Reload</button>
                </>
            )
        } else {
            return (
                <>
                    <h1> Hello {this.props.name}! Welcome to {this.props.city}. Hey {this.state.text} man.</h1>
                    <input type="text" value={this.state.message} onChange={(e) => this.handleMessageChange(e)} />
                    <button onClick={(e) => this.loaded(e)} > Click to Load</button>
                    <h1>{this.state.message} </h1>
                </>
            );
        }




    }
}

export default App;