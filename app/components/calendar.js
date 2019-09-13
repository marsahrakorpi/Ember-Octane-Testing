import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Calendar extends Component {
  @tracked selectedDay = this.selected;

  constructor(){
    super(...arguments)
    let d = new Date();
    this.center = new Date(d.getFullYear(), d.getMonth()+1, d.getDay()); 
    this.selected = this.center
  }

}