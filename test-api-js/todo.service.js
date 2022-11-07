class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        //const addRecord = new todoservice(todo);
        //const arr=this.todos;
        //console(arr.push(addRecord));
        //const addRecord = new todoservice(this.todos);
        //const arr = Array.from(addRecord);
        //arr.push(todo);
        this.todos=this.todos.todo.concat(todo);
        console.log(this.todos);
        // Your code here
    }


    delete_todo(id){
        this.todos = this.todos.filter(todo => todo.title !== id)
        console.log(this.todos);
        // Your code here
    }
    
    update_todo(id, todo){

        this.todos.map(todo_update => {
            if (todo_update.title === id) {
                todo_update.title = todo;
                todo_update.description=todo
            }
            //return todo
        })
        console.log(this.todos);
        // Your code here
    }

    
}


module.exports= todoservice;