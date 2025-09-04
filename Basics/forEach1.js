
// const coding = ["ruby","java","javascript","python","cpp"]

//  const values = coding.forEach( (item) => {
//     console.log(item) 
//     return item
// } )

// console.log(values);

const myNumber = [1 ,2 ,3 ,4 ,5,6,7,1,8,9,10]

// const newNumber = myNumber.filter( (num) => {
//     return num > 4
// } )


const newNumber = []

myNumber.forEach( (num) => {
    if(num > 4){
        newNumber.push(num)
    }
})

// console.log(newNumber);

const books = [

    { title: 'Book one', genre: 'fiction' , publish: 1982, edition: 2004},

    { title: 'Book two', genre: 'non fiction', publish: 1991, edition: 2005},

    { title: 'Book three', genre: 'history', publish: 1984, edition: 2010},

    { title: 'Book four', genre: 'Scirnce', publish: 1996, edition: 2016},

    { title: 'Book five', genre: 'fiction', publish: 1990, edition: 2015}
];



let userBooks = books.filter( (bk) => bk.genre ==='history' )

userBooks = books.filter( (bk) => {
     return bk.edition <= 2010 && bk.genre ==='history'
    })

console.log(userBooks);