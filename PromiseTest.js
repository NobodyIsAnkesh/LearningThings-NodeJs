// function printString(string) {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             () => {
//                 console.log(string)
//                 resolve()
//             }, 5000
//             // Math.floor(Math.random() * 1000) + 1
//         )
//     })
// }

// async function printAll() {
//     // Promise.all([printString("A"), printString("B"), printString("C")])
//     console.log("1")
//     console.log("2")
//     console.log("3")
// }
// printAll()

// let { filters = "abc", page = 10, moviesPerPage = 20 } = { filters = "abc", page = 56, moviesPerPage = 20 };

// console.log(page);

// let val = () => {
//     console.log("B");
//     Promise.resolve("Done")
//         .then((msg) => {
//             console.log(msg);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     console.log("A");
// }

// val();

var x = new Promise((resolve, reject) => {
    reject(Error("gone"));
})

x.catch((err) => { console.log(err.message) });
x.catch((err) => { console.log(err) });