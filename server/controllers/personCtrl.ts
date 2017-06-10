import Person from '../models/person';
import BaseCtrl from './baseCtrl';

export default class PersonCtrl extends BaseCtrl {
  model = Person;

  // Get all
  getPersonAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
     
      res.json(docs);
    });
  }
  // Get by id
  getByPersonId = (req, res) => {
    this.model.findOne({ personId: req.params.personId }, (err, obj) => {
      if (err) { return console.error(err); }
         return res.json(obj);
    });
  }
}