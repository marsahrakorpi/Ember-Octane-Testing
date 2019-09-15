import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Calendar extends Component {
  @tracked selected;
  @tracked selectedTasks = [];

  constructor(){
    super(...arguments)
    let d = new Date();
    this.center = new Date(d.getFullYear(), d.getMonth()+1, d.getDay()); 
    this.selected = this.center
  }

  @action
  setSelection(selection){
    this.selected = selection.date
    this.setTasksForDate(selection.id)
  }
  setTasksForDate(date){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    
    tasks = tasks.filter(task => { return task.date === date})
    this.selectedTasks = tasks;
  }
}