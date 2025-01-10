import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount(){
        document.title = `Count - ${this.state.count}`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `Count - ${this.state.count}`
        }
    }

    render() {
        return (
            <>
                <h1>Count - {this.state.count}</h1>
                <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

export default ClassCounter
