//1. feladat
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand,model,year,color] = car;

console.log(brand);
console.log(model);
console.log(year);
console.log(color);

console.log("----2. feladat----")
//2. feladat
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };

let{ author: bookAuthor, title: bookTitle, publicationYear:bookPublicationYear,language:bookLanguage} = book;

console.log(bookTitle);
console.log(bookAuthor);
console.log(bookPublicationYear);
console.log(bookLanguage);

console.log("----3. feladat----")
//3. feladat
function printStudentInfo(object){
    let {name:studentName, age:studentAge,grade,subjects:studentSubjects} = object;
    console.log(studentName);
    console.log(studentAge);
    console.log(grade);
    console.log(studentSubjects);
    /*studentSubjects.forEach(subject => {
        console.log(subject);
    });*/
    
}

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

printStudentInfo(student);