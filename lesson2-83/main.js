const vlad = {
    name: 'Vlad',
    age: 20,
    gender: 'M',
    helloName(name) {
        return `Hello ${name}`
    }
}
console.log(vlad)
console.log(vlad.helloName('vlad'))


const users = [
    {
        name: 'ivan',
        age: 18,
        idAdmin: true
    },
    {
        name: 'vadim',
        age: 20,
        idAdmin: false
    },
    {
        name: 'vlad',
        age: 49,
        idAdmin: false
    },
    {
        name: 'anna',
        age: 25,
        idAdmin: true
    },
    {
        name: 'ivan',
        age: 18,
        idAdmin: true
    },
    {
        name: 'vadim',
        age: 20,
        idAdmin: false
    },
    {
        name: 'vlad',
        age: 49,
        idAdmin: false
    },
    {
        name: 'anna',
        age: 25,
        idAdmin: true
    },
]

let countUsers = 0
for(let i = 0; i < users.length; i++){
    if(users[i].idAdmin != true){
        countUsers++
    }
}
console.log(countUsers)