import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TaskList extends Component {
    @tracked tasks = null;
    @tracked showModal = false;

    get tasksForDay(){
        return localStorage.getItem('tasks').filter(task => task.date === this.selected)
    }

    constructor(){
        super(...arguments)
        this.tasks = localStorage.getItem('tasks')
    }
   
}
