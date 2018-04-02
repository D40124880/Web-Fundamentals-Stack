var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]
console.log("1", students[0].first_name, students[0].last_name, students[0].first_name.length + students[0].last_name.length);

console.log("2", students[1].first_name, students[1].last_name, students[1].first_name.length + students[1].last_name.length);

console.log("3", students[2].first_name, students[2].last_name, students[2].first_name.length + students[2].last_name.length);

console.log("4", students[3].first_name, students[3].last_name, students[3].first_name.length + students[3].last_name.length);

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }
   
console.log("2 -", users.Students[1].first_name, users.Students[1].last_name, users.Students[1].first_name.length + users.Students[1].last_name.length);   