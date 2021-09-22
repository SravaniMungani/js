//spread opertor for Objects
let user={Name:"Sravs",
          id:'101',
         }
let address={Area:"Marathahalli",
             city:"banglore",
             State:"KA"
     }
console.log(user.Name="sravani");//override the Name
let user_address={...user,...address}
console.log(user_address);




