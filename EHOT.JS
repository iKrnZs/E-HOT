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
    name: "E-Heater",
};

elements.e_SuperHeater = {
    desc: "Works like the Super Heater but needs power to work",
    hardness: 0.5,
    state: "solid",
    category: "machines",
    conduct: 1,
    color: "#595656",
    behaviorOn: [
        "XX|HT:12|XX",
        "HT:12|XX|HT:12",
        "XX|HT:12|XX",
    ],
    name: "E-SuperHeater",
};

let setTemp = "";
elements.ajustableHeater = {
    desc: "Heater with adjustable temperature (needs power)",
    color: "#a1ada5",
    category: "machines",
    density: 1080,
    state: "solid",
    conduct: 1,
    movable: false,
    name: "Ajustable-E-Heater",
    onSelect: function(pixel){
        setTemp = parseInt(prompt("Enter the temperature you want it set to.", (setTemp || undefined)));
    },
    tick: function(pixel) {
        for (var i = 0; i < adjacentCoords.length; i++) {
            var coords = adjacentCoords[i];
            var x = pixel.x + coords[0];
            var y = pixel.y + coords[1];
            if (!isEmpty(x,y,true)) {
                var sensed = pixelMap[x][y];
                if (sensed.con || elements[sensed.element].movable && pixel.charge > 0) {
                    sensed.temp += setTemp/6;
                    break;
                }
            }
        }
        doDefaults(pixel);
    },
    insulate: true
};

elements.e_cooler = {
    desc: "Works like the cooler but needs power to work",
    hardness: 0.5,
    state: "solid",
    behavior: behaviors.WALL,
    conduct: 1,
    category: "machines",
    color: "#118888",
    behaviorOn: [
        "XX|COOL:4|XX",
        "COOL:4|XX|COOL:4",
        "XX|COOL:4|XX",
    ],
    name: "E-Cooler",
};

elements.e_freezer = {
    desc: "Works like the freezer but needs power to work",
    hardness: 0.5,
    state: "solid",
    behavior: behaviors.WALL,
    conduct: 1,
    category: "machines",
    color: "#116688",
    behaviorOn: [
        "XX|COOL:12|XX",
        "COOL:12|XX|COOL:12",
        "XX|COOL:12|XX",
    ],
    name: "E-Freezer",
};
