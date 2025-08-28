
// ExtraMachines - versão reduzida (somente aquecedores e variantes)

// E-Heater
elements.e_heater = {
    desc: "Works like the heater but needs power to work",
    hardness: 0.5,
    state: "solid",
    behavior: behaviors.WALL,
    conduct: 1,
    category: "machines",
    color: "#881111",
    behaviorOn: [
        "XX|HT:4|XX",
        "HT:4|XX|HT:4",
        "XX|HT:4|XX",
    ],
    name: "Eletrônico - Aquecedor",
};

// E-SuperHeater
elements.e_SuperHeater = {
    desc: "Works like the Super Heater but needs power to work",
    hardness: 0.5,
    state: "solid",
    conduct: 1,
    category: "machines",
    color: "#aa0000",
    behaviorOn: [
        "XX|HT:12|XX",
        "HT:12|XX|HT:12",
        "XX|HT:12|XX",
    ],
    name: "Eletrônico - SuperAquecedor",
};

// Ajustable-E-Heater
let setTemp = 100;
elements.ajustableHeater = {
    desc: "Heater that can be set to a specific temperature and needs power to work",
    color: "#666666",
    category: "machines",
    density: 1080,
    state: "solid",
    conduct: 1,
    movable: false,
    name: "Eletrônico - Aquecedor Ajustável",
    onSelect: function(pixel){
        let t = parseInt(prompt("Enter the temperature you want it set to.", (setTemp || undefined)));
        if (!isNaN(t)) { setTemp = t; }
    },
    tick: function(pixel) {
        for (var i = 0; i < adjacentCoords.length; i++) {
            var coords = adjacentCoords[i];
            var x = pixel.x + coords[0];
            var y = pixel.y + coords[1];
            if (!isEmpty(x,y,true)) {
                var sensed = pixelMap[x][y];
                if (sensed && pixel.charge > 0) {
                    sensed.temp += setTemp/6;
                    break;
                }
            }
        }
        doDefaults(pixel);
    },
    insulate:true
};

// E-Cooler
elements.e_cooler = {
    desc: "Works like the cooler but needs power to work",
    hardness: 0.5,
    state: "solid",
    behavior: behaviors.WALL,
    conduct: 1,
    category: "machines",
    color: "#116688",
    behaviorOn: [
        "XX|CL:4|XX",
        "CL:4|XX|CL:4",
        "XX|CL:4|XX",
    ],
    name: "Eletrônico - Resfriador",
};

// E-Freezer
elements.e_freezer = {
    desc: "Freezes nearby elements but needs power to work",
    hardness: 0.5,
    state: "solid",
    behavior: behaviors.WALL,
    conduct: 1,
    category: "machines",
    color: "#00aaff",
    behaviorOn: [
        "XX|CL:12|XX",
        "CL:12|XX|CL:12",
        "XX|CL:12|XX",
    ],
    name: "Eletrônico - Congelador",
};
