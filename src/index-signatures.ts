//Index signatures

interface TransactionObj {
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza) // -10
console.log(todaysTransactions['Pizza']); // -10

// let prop: string = 'Pizza'
// console.log(todaysTransactions[prop]) // dynamically accessing this property ts will throw an error

// const todaysNet = (transactions: TransactionObj):number => {
//     let total = 0
//     for (const transaction in transactions){
//         total += transactions[transaction] //this will also throw error becaue
//     }
//     return total

// ----------------------------------------------------------------

//so we will update our transactionObj with index signatures

interface NewTransactionObj {
    [index: string]: number
    //what this states is that all of the keys in this will be a string and value will be number   
    // we could also make the value union type
}

const todaysTransactionsNew: NewTransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

let prop: string = 'Pizza'
console.log(todaysTransactionsNew[prop]) // now it doesnt throw any error

const todaysNet = (transactions: NewTransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction] //this is also fine 
    }
    return total
}

// one of the drawback of this is

console.log(todaysTransactionsNew['Dave']) // this will return undefined
//because typescript cant see into the future
// it also doesnt know what key name we would give to the keys 
// because in our interface we have only mentioned that it will be [string: number]


// we can also update our old interfac like this

interface updatedTransactionInterface {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

// this would allow other propertiees to be added to the interface
// however it would also require the pizza,books and job 