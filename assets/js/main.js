// 1)

// let a = 8; 
// let b = 12; 
// if (a > b) {
//     console.log("a b-dən böyükdür");
// } 
// else if (a === b) {
//     console.log("beraber");
// } 
// else {
//     console.log("a b-dən kiçikdir");
// }

let students=[

    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
    ];

    // 2)

    // let even_id_students=[];
    // for(let i=0; i<students.length;i+=2){
    //     even_id_students.push(students[i])
    // }
    // console.log(even_id_students);

    // 3)

//    for(let student of students){
//    if(student.id%2!==0){
//     console.log(student.name);
// }}

// 4)

// let students20plus=[];
// for(let student of students){
//     if(student.age>20){
//         students20plus.push(student);
//     }
// }
// console.log(students20plus);

// 5)

// let student90plusEvenid=[];
// for(let student of students){
//     if(student.id%2!==0 && student.grade>90){
//         student90plusEvenid.push(student)
//     }
// }
// console.log(student90plusEvenid);

// 6)

// let students95Or100=[];
// for(let student of students){
//     if(student.grade==95 || student.grade==100){
//         students95Or100.push(student)
//     }
// }
// console.log(students95Or100);