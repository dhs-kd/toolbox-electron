


const cardDiv = document.getElementById("card-container");


class Card {
    constructor(title, desc, url) {
        this.title = title;
        this.desc = desc;
        this.url = url;
    }

}


var cardlist = [
    new Card("Rectangular To Polar Coordinates", "تحويل الاحداثيات الكارتيزينية الى احداثيات قطبية", 'rectToPolar'),
    new Card('Polar to Rectangular Coordinates', 'تحويل الاحداثيات القطبية الى احداثيات كارتيزينية', 'polarToRect'),
    new Card('Circular Motion Simulation by Ang.V', 'محاكاة واقعية للحركة الدائرية من خلال السرعة الزاوية', 'circularMotion'),
    new Card('Solar System', 'محاكاة واقعية لحركة الكواكب في المجموعة الشمسية', 'solar')
];

let row = document.createElement('div')
row.className = 'row'
cardDiv.appendChild(row)
let i = 0
for (let card of cardlist) {
    row.innerHTML+= `
    <div class="col-md">
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.desc}</p>
                <a href="./tools/${card.url}.html" class="btn btn-primary">الدخول</a>
            </div>
        </div>
    </div>
    `
    i+=1
    if (i == 3) {
        i = 0
        row = document.createElement('div')
        row.classList[0] = 'row'
        cardDiv.appendChild(row)
    }
}
