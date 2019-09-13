import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Calendar extends Component {

    @tracked selected = null;
}