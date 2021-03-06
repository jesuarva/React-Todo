import React from "react"; 

class AddToList extends React.Component {
    render(){
        return (
        <button onClick={this.props.onClick} >
            AddToList
        </button>
    )
    }
}

class Input extends React.Component {
    constructor(props) {
        // console.log('props.parent',props.parent);
        // console.log('props.currentInput',props.currentInput);
        super(props);
        // this.state = {
        //     currentInput: props.currentInput
        // }
        // this.parent = props.parent;
    }
    render(){
        return (
            <input type='text' name="input" placeholder="Input-Component" value={this.props.value}  />
        )
    }
}

class ListItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render(props){
        return (
            <li key={this.props.key}> {this.props.todo} </li>
        )
    }

}

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['tst-todo-1','tst-todo-2','tst-todo-3','tst-todo-4','tst-todo-5','tst-todo-6','tst-todo-7','tst-todo-8','tst-todo-9','tst-todo-10'],
            currentInput: '',
            // getCurrentInput: this.getCurrentInput.bind(this)
        }
    }
    onInputChange = (e) => {
        console.log('hello form getCurrentInput')
        console.log(e.target.value);
        this.setState( {currentInput: e.target.value} )
    }
    onClick(e) {
        console.log(e.target.tagName);
        if (e.target.tagName === 'BUTTON' && this.state.currentInput !== '') {
            e.preventDefault();
            console.log(e.target.tagName);
            // if (this.state.currentInput !== '') {
                let newTodos = this.state.todos;
                // newTodos.push(this.state.currentInput);
                console.log('newTodos',newTodos);
                // this.setState( {currentInput: ''} ); DO NOT WORKS
                // this.setState( {todos: newTodos.push(this.state.currentInput), currentInput: ''} );
                // this.setState( {todos: newTodos.push(this.state.currentInput), currentInput: ''} ); DO NOT WORK
                // this.setState( {[this.state.todos]: newTodos, currentInput: ''} ); WORKS
                this.setState( {[this.state.todos]: this.state.todos.push(this.state.currentInput), currentInput: ''} ); // WORKS

            // }            
        }
    }
    render(){
        // console.log(this);
        // const parent = this;
        // console.log(parent);
        return (
            <div onChange={this.onInputChange} onClick={this.onClick.bind(this)} >
                <div  >
                    Todo-List-Component
                    <ol>
                        <li>ListItem-Components</li>
                        {/* <ListItem /> */}
                        {this.state.todos.map( (todo, indx) => <ListItem key={indx} todo={todo} /> )}
                    </ol>
                    <Input value={this.state.currentInput} />
                    <AddToList  />
                </div>
            </div>
        )
    }
}

export default TodoList;