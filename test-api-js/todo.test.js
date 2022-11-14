

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("add_todo", () => {
        todo_1={
            "title": "New_Test_1",
            "description": "New_Description_1",
            "done": false
        }
        todo_service.add_todo(todo_1);
        expect(todo_service.get_todos().length).toEqual(4);
    });


    test("update_todo", () => {
        todo_service.update_todo("New_Test_1","Modified_Test_1");
       expect(todo_service.get_todos().filter(new_update=>new_update.title==="Modified_Test_1").length).toEqual(1);
       
    });

    test("update_todo", () => {
        todo_service.update_todo("T1","Test_1");
       expect(todo_service.get_todos().filter(old_update=>old_update.title==="Test_1").length).toEqual(3);
    });

    test("delete_todo", () => {
        todo_service.delete_todo("Test_1");
        expect(todo_service.get_todos().length).toEqual(1);
    });

    

    // Write all your test cases here that corresponds to software requirements


});