function solution() {
    let robotObject = {
        restock,
        prepare,
        report,
        stock: {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0,
        },
        recipes: {
            apple: {
                carbohydrate: 1,
                flavour: 2,
            },
            lemonade: {
                carbohydrate: 10,
                flavour: 20,
            },
            burger: {
                carbohydrate: 5,
                fat: 7,
                flavour: 3,
            },
            eggs: {
                protein: 5,
                fat: 1,
                flavour: 1,
            },
            turkey: {
                protein: 10,
                carbohydrate: 10,
                fat: 10,
                flavour: 10,
            }
        }
    }

    function robotKitchen(commandData) {
        let [command, name, quantity] = commandData.split(' ');
        return robotObject[command](name, quantity);
    }

    function restock(microelement, quantity) {
        this.stock[microelement] += Number(quantity);
        return 'Success';
    }

    function prepare(recipeName, quantity) {
        let neededRecipe = this.recipes[recipeName];

        let neededRecipeKeys = Object.keys(neededRecipe);

        let missingIngredient = neededRecipeKeys
            .filter((v) => {
                if (this.stock[v] < (neededRecipe[v] * quantity)) {
                    return v;
                }
            })[0]
        if (missingIngredient) {
            return `Error: not enough ${missingIngredient} in stock`
        } else {
            for (const ingredient of neededRecipeKeys) {
                this.stock[ingredient] -= neededRecipe[ingredient] * quantity
            }
            return 'Success';
        }

    }

    function report() {
        return Object.keys(this.stock).map(v => `${v}=${this.stock[v]}`).join(' ');
    }

    return robotKitchen;
}

let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
