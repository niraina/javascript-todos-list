import { TodoList } from "./components/TodoList.js";
import { fecthJson } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
    const todos = await fecthJson('https://jsonplaceholder.typicode.com/todos?_limit=10')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
    console.log(todos);
} catch (e) {
    const alertElement = createElement('div',{
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = "Impossible d'avoir l'element"
    document.body.prepend(alertElement)
    console.error(e)
}