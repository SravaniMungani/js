//object destructuring for object
let emp = {
    name: "Ravi",
    email: "Ravi@tcs.com",
    salary: 60000,
    loc: "Bangalore",
  };
  
  console.log(emp.loc);
  let { name, salary } = emp;
  console.log(name);
  console.log(salary);
  
  
  