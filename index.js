//QUESTION 1
var book={
    'title':'Harry potter',
    'author':'J.K Rowling',
    'yearPublished':'1997'
}
console.log(book);
console.log(book['author']);
book['yearPublished']='2022';
console.log(book);
book['genre']='Fiction';
console.log(book);
delete book['title'];
console.log(book);
/**title: 'Harry potter', author: 'J.K Rowling', yearPublished: '1997'}author: "J.K Rowling"genre: "Fiction"yearPublished: "2022"[[Prototype]]: Object
index.js:8 J.K Rowling
index.js:10 {title: 'Harry potter', author: 'J.K Rowling', yearPublished: '2022'}
index.js:12 {title: 'Harry potter', author: 'J.K Rowling', yearPublished: '2022', genre: 'Fiction'}
index.js:14 {author: 'J.K Rowling', yearPublished: '2022', genre: 'Fiction'} */

//Question 2
var emp={
    'empName':'John',
    'empAge' :'29',
    'position':'Developer',
    'salary':'700000'
}
console.log(emp);
console.log(emp['position']);
emp['salary']='50000';
console.log(emp);
emp['Department']='HR';
console.log(emp);
delete emp['empAge'];
console.log(emp);
/**{empName: 'John', position: 'Developer', salary: '50000', Department: 'HR'} */

//Question 3
var product={
    'id':'123456',
    'name':'Saree',
    'price':'1000',
    'category':'silk'
}
console.log(product);
console.log(product['price']);
product['category']='Electronics';
console.log(product);
product['inStock']=true;
console.log(product);
delete product['id'];
console.log(product);
/**{name: 'Saree', price: '1000', category: 'Electronics', inStock: true} */

//Question 4
var car={
    'make':'metal',
    'model':'Honda shine',
    'year' :'2009',
    'colour':'red'
}
console.log(car);
console.log(car['make']);
car['color']='black';
console.log(car);
car['engineType']='v6';
console.log(car);
delete car['year'];
console.log(car);
/**{make: 'metal', model: 'Honda shine', colour: 'red', color: 'black', engineType: 'v6'} */

//QUESTION 5
var student={
    'name':'Anuradha',
    'age':'23',
    'Grade':'80',
    'school':'KGBV'
}
console.log(student);
console.log(student['school']);
student['Grade']='90';
console.log(student);
student['Hobbies']=['reading','sports'];
console.log(student);
delete student['age'];
console.log(student);
/**{name: 'Anuradha', Grade: '90', school: 'KGBV', Hobbies: Array(2)} */

//QUESTION 6
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
  console.log(user.profile.address.city);
  user.preferences.theme='light';
  console.log(user);
  user.profile.phone='555-9876';
  console.log(user);
  delete user.profile.address.zip;
  console.log(user);

//QUESTION 7
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };
console.log(company.employees[1].contact.email);
company.employees[0].contact.phone='555-1111';
console.log(company);
company.employees[0].Department='Engineer';
console.log(company);
delete company.location;
console.log(company);
