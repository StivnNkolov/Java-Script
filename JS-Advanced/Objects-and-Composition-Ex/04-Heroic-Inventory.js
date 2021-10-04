function inventory(inputArray) {
    const heroInfo = [];

    for (let element of inputArray) {
        let [name, level, rest] = element.split(" / ");
        let items;
        if (rest) {
            items = rest.split(", ");
        } else {
            items = [];
        }
        let source = { name: name, level: Number(level), items: items };
        heroInfo.push(source);
    }
    let json = JSON.stringify(heroInfo);
    return json

}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)

console.log(inventory(['Jake / 1000 / Gauss, HolidayGrenade']))