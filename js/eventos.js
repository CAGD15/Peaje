import {getPrint, validateEntry } from './funciones.js';
import { form, selectPrint } from './variables.js';

eventListeners();
function eventListeners() {


    form.addEventListener('submit', validateEntry);

    selectPrint.addEventListener('change', (e) => {
        getPrint(e.target.value);
    });


}