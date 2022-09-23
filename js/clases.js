import { cars } from "./funciones.js";
import { form } from "./variables.js";

export class UI {
    constructor(sum1, sum2, sum3, sum4, sum5) {
        this.sum1 = sum1;
        this.sum2 = sum2;
        this.sum3 = sum3;
        this.sum4 = sum4;
        this.sum5 = sum5;
        this.arrayRecaudos = [];
        this.higher = 0;
        this.less = 0;
        this.positionMay = 0;
        this.positionMen = 0;
    }

    printAmountBothTotal() {
        //creamos una tabla
        const div = document.createElement('div');
        div.classList.add('form__table');
        const p = document.createElement('p');
        p.textContent = 'Total de vehículos de cada categoria en ambos sentidos y el recaudo en $';

        div.appendChild(p);


        const getDiv = document.querySelector('div.form__table');

        if (getDiv !== null) {
            getDiv.remove();
        }

        const table = document.createElement('table');
        table.className = 'table table-dark table-stripedr';

        table.innerHTML = `
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Total Vehículos</th>
                <th>$Valor</th>
                <th>$ Total recaudo</th>
                <th>Porcentaje %</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>A</td>
                <td>${this.sum1}</td>
                <td>1500</td>
                <td>${this.sum1 * 1500}</td>
                <td>${this.calculatePercentage(this.sum1, cars.length)}%</td>
            </tr>
            <tr>
                <td>B</td>
                <td>${this.sum2}</td>
                <td>2100</td>
                <td>${this.sum2 * 2100}</td>
                <td>${this.calculatePercentage(this.sum2, cars.length)}%</td>
            </tr>
            <tr>
                <td>C</td>
                <td>${this.sum3}</td>
                <td>2700</td>
                <td>${this.sum3 * 2700}</td>
                <td>${this.calculatePercentage(this.sum3, cars.length)}%</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>${this.sum1 + this.sum2 + this.sum3}</td>
                <td></td>
                <td>${this.sum1 * 1500 + this.sum2 * 2100 + this.sum3 * 2700}</td>
                <td>${this.calculatePercentage(this.sum1 + this.sum2 + this.sum3, cars.length)}%</td>
            </tr>
        </tbody>
        `;

        div.appendChild(table);
        div.appendChild(this.printHiguerLess());

        form.appendChild(div);

    }

    printHiguerLess() {
        const div = document.createElement('div');
        div.classList.add('form__fields', 'container__text');
        const p = document.createElement('p');
        p.textContent = `${this.higuerLess()}`;


        const divPrintHigherLess = document.querySelector('.container__text');

        if (divPrintHigherLess !== null) {
            divPrintHigherLess.remove();
        }

        div.appendChild(p);

        return div;

    }

    calculatePercentage(sum, total) {

        if (sum === 0) {
            return 0
        }
        sum = (sum * 100) / total;
        return sum.toFixed(2);
    }

    higuerLess() {

        this.arrayRecaudos = [...this.arrayRecaudos, this.sum1 * 1500,
        this.sum2 * 2100,
        this.sum3 * 2700];

        this.less = Math.max(
            this.sum1 * 1500,
            this.sum2 * 2100,
            this.sum3 * 2700);

        this.arrayRecaudos.forEach((recaudo, index) => {
            //obtenemos el mayor
            if (recaudo > this.higher) {
                this.higher = recaudo;
                this.positionMay = index;
            }

            //obtenemos el menor

            if (recaudo < this.less) {
                this.less = recaudo;
                this.positionMen = index;
            }
        });

        return `Recaudo mayor: $${this.higher} de la categoria ${this.positionMay + 1} y el Recaudo menor: $${this.less} de la categoria ${this.positionMen + 1}`;
    }

}


export class UIcarSense extends UI {
    constructor(sum1, sum2, sum3, sum4, sum5, sum6) {
        super(sum1, sum2, sum3, sum4, sum5);
        this.sum6 = sum6;
     
    }
    printAmountTotal() {
        //creamos una tabla
        const div = document.createElement('div');
        div.classList.add('form__table');
        const p = document.createElement('p');
        p.textContent = 'Total de vehículos de cada categoria en cada sentido';
        div.appendChild(p);


        const getDiv = document.querySelector('div.form__table');

        if (getDiv !== null) {
            getDiv.remove();
        }

        const table = document.createElement('table');
        table.className = 'table table-dark table-stripedr';

        table.innerHTML = `
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Mont a Sinc</th>
                <th>Sinc a Mont</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>${this.sum1}</td>
                <td>${this.sum2}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${this.sum3}</td>
                <td>${this.sum4}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${this.sum5}</td>
                <td>${this.sum6}</td>
            </tr>
       
        </tbody>
        `;

        div.appendChild(table);



        form.appendChild(div);
    }
}
