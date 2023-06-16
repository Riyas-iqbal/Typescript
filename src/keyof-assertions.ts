// key of assertions
// used when dynamically referring keys in object

interface Student {
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test) // undefined 

for (const key in student) {
    // console.log(`${key}: ${student[key]}`) [error]
    console.log(`${key}: ${student[key as keyof Student]}`)

    // now we are asserting the type from Student interface with the keyof Student
    // which will be a union of all the type in Interface Student
}


// another way

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
    //get the type from student element and assert it
})



//record

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus:100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}





