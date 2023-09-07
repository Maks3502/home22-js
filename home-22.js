// // завдання1
// const Account =  function(login, email)  {
//   this.login = login;
//   this.email = email;
// }


// Account.prototype.getInfo =  function (){
//     return `login: ${this.login} email: ${this.email}`
// }

// console.log(Account.prototype.getInfo); // function


// const mango = new Account({
// login: 'Mangozedog',
// email: 'mango@dog.woof',
// });


// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// const poly = new Account({
// login: 'Poly',
// email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// завдання 2
// const User = function(name, age, followers){
//     this.name = name;
//     this.age = age;
//     this.followers = followers;

//     this.getInfo = function() {
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//     });
//     mango.getInfo(); // User Mango is 2 years old and has 20 followers

//     const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//     });
//     poly.getInfo(); // User Poly is 3 years old and has 17 followers



    // завдання 3
// const Storage = function(itamsTest){

//     this.items = itamsTest;

//     this.getItems = function(){
//         return this.items;
//     };

//     this.addItem = function(item) {
//         return this.items.push(item);
//     };
//     this.removeItem = function(item) {
       
//     }
// };

// Storage.prototype.table = function(){
//     return this.itamsTest;
// }


// Storage.prototype.addItem = function(){
//     return this.itamsTest;
// }

// Storage.prototype.getItems = function(){
//     return this.itamsTest;
// }


    const storage = new Storage([
        'Нанітоіди',
        'Пролонгер',
        'Залізні жупи',
        'Антигравітатор',
        ]);
        const items = storage.getItems();
        console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
        storage.addItem('Дроїд');
        console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
        storage.removeItem('Пролонгер');
        console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]