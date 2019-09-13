import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class AddTaskModal extends Component {
    @tracked taskDate = null
    @tracked taskName = null
    @tracked showModal = false
    @action
    setTaskDate(date){
        this.taskDate = moment(date).format('YYYY-MM-DD')
    }
    @action
    addTask(){

    }
    @action 
    close(){
        this.showModal = false
    }
    @action
    submit(){
        let o = {date:this.taskDate, name:this.taskName}
        let tasks = JSON.parse(localStorage.getItem('tasks')) || []
        tasks.push(o)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log(this.taskAdded)
        console.log(this.taskAdded())
        this.showModal=false
        this.taskAdded()
    }
}
