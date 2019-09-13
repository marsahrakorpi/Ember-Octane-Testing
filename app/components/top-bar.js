
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
export default class AddTaskModal extends Component {
    @tracked showModal = false

    @action
    openAddTaskModal() {
        console.log("open task add modal")
        this.showModal = true
    }

    @action
    taskAdded(){
        console.log("task aded, top bar")
    }
}


