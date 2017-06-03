import * as express from 'express';

import PersonCtrl from './controllers/personCtrl';
import Person from './models/person';



export default function setRoutes(app) {

    const personCtrl = new PersonCtrl();
  
    // Persons
    app.route('/api/persons').get(personCtrl.getAll);
  

}