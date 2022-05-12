// function solve() {
//     function fight() {
//         this.stamina -= 1;
//         console.log(`${this.name} slashes at the foe!`);
//     };

//     function cast(spell) {
//         this.mana -= 1;
//         console.log(`${this.name} cast ${spell}`);
//     };

//     function fighter(name) {
//         return {
//             fight,
//             name,
//             health: 100,
//             stamina: 100,

//         }
//     };

//     function mage(name) {
//         return {
//             cast,
//             name,
//             health: 100,
//             mana: 100
//         }
//     };

//     return {fighter, mage}

// }


// let create = solve();
// console.log(create);
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);

function solve() {
    return returnObject = {
        mage,
        fighter,
    }

    function mage(name) {
        let mageObject = {
            name: name,
            health: 100,
            mana: 100,
            cast(name) {
                this.mana -= 1;
                console.log(`${this.name} cast ${name}`)
            }
        }
        return mageObject;
    }

    function fighter(name) {
        let fighterObject = {
            name: name,
            health: 100,
            stamina: 100,
            fight() {
                this.stamina -= 1;
                console.log(`${this.name} slashes at the foe!`)
            }
        }
        return fighterObject;
    }

}

let create = solve();
// console.log(create)
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);