const jsonString = `{
    "departments":[
                [{"name":"Senthil", "role":"HR Manager"},
                 {"name":"Santosh","role":"HR"}],
                [{"name":"Sowmya", "role":"Project Manager"},
                 {"name":"Muthu","role":"Software Intern"}]
]
}`;

const companyData = JSON.parse(jsonString);
console.log(companyData.departments);
console.log()
console.log(companyData.departments[0])
console.log(companyData.departments[1])

console.log("Extracting only one information from HR Department")
console.log(companyData.departments[0][0])
console.log("Extracting individual fields from HR Department")
console.log(`Name of the employee : ${companyData.departments[0][1].name}`)
console.log(`Role of the employee : ${companyData.departments[0][1].role}`)


console.log("Extracting only one information from HR Department")
console.log(companyData.departments[1][0])
console.log("Extracting individual fields from HR Department")
console.log(`Name of the employee : ${companyData.departments[1][1].name}`)
console.log(`Role of the employee : ${companyData.departments[1][1].role}`)