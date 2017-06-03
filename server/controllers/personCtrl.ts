import Person from '../models/person';
import BaseCtrl from './baseCtrl';

export default class PersonCtrl extends BaseCtrl {
  model = Person;
}