// const mongo = require('mongodb')
// const mongoClient = mongo.MongoClient
// const url = "mongodb://127.0.0.1:27018"
// const dbname = "101098"

// mongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
//     if (error)  console.log("error", err)
//     const db = client.db(dbname);
//     //dodanie kolekcji i jednego dokumentu jako obiekt, nie JSON
//     // db.collection("students").insertMany([
//     //     {
//     //     name: "Marcin",
//     //     age: 31
//     //     },
//     //     {
//     //     name: "Daniel",
//     //     age: 31
//     //     }], (error, result) => {
//     //         if (error) { console.log("error when inserting", error) }
//     //         console.log(result)
//     // })

//     // db.collection("students").find({}).toArray((error, result) => {
//     //     console.log(result)
//     // })

//     // db.collection("students").find({
//     //     age: { $gt: 40 }
//     //     }).toArray((error, result) => {
//     //     console.log(result)
//     // });

//     // db.collection("students").updateOne(
//     //     { age: 32 },
//     //     { $set: { name: "cokolwiek" } }
//     //     )
//     //     db.collection("students").find({}).toArray((error, result) => {
//     //     console.log(result)
//     // });

//     db.collection("students").deleteOne(
//         { age: 32 },
//         (error, result) => {
//         console.log(result)
//         }
//     )

//     console.log("połączenie udane")
// })

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27018/101098"
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Student = mongoose.model("Student", {
    name: { type: String },
    age: { type: Number }
})

//Promise
const student = new Student({ name: "Przemyslaw Nowak", age: 22 })
student.save().then(() => {
console.log(student)
}).catch(error => {
console.log(error)
})

// const createstudent = async (data) => {
//     try{
//         const student = new Student(data)
//         await student.save()
//         console.log(student)
//     }
//         catch (error) {
//         console.log(error)
//     }
//     }
// createstudent({ name: "Miłosz" })

const findStudent = async () => {
try {
        const students = await Student.find({
            age: 32
        })
        console.log(students)
    }
    catch (error) {
        console.log(error)
    }
}
findStudent();