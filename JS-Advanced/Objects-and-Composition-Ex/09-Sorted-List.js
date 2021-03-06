// function createSortedList() {
//     let arr = [];

//     return {
//         add(element) {
//             arr.push(element);
//             this.size += 1;
//             arr.sort((a, b) => a - b);
//         },
//         remove(index) {
//             if (index < 0 || index >= arr.length) {
//                 throw new RangeError("Invalid index")
//             }
//             arr.splice(index, 1);
//             this.size -= 1;
//         },
//         get(index) {
//             if (index < 0 || index >= arr.length) {
//                 throw new RangeError("Invalid index")
//             }
//             return arr[index];
//         },
//         size: 0
//     }
// };

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// // console.log(list.sortedList);
// console.log(list.get(1));
// list.remove(1);
// // console.log(list.sortedList);
// console.log(list.get(1));

function createSortedList() {
    nums = []
    let resultObject = {
        size: 0,
        add(element) {
            nums.push(element);
            this.size += 1;
            nums.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < nums.length) {
                nums.splice(index, 1);
                this.size -= 1;
            }else {
                throw new RangeError('Invalid index')
            }
        },
        get(index) {
            if (index >= 0 && index < nums.length) {
                return nums[index];
            }else {
                throw new RangeError('Invalid index')
            }
        },


    }
    return resultObject
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(8));
list.remove(1);
console.log(list.get(1));




