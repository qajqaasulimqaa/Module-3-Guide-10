// Creating an array of objects
{
const peopleData : person[]= [
    {"id":1,"name":"Jammie Motherwell","birthdate":"8/20/1963","children":1,"country":"Indonesia","can_program":true},
    {"id":2,"name":"Rad Pimmocke","birthdate":"2/21/1956","children":1,"country":"Brazil","can_program":true},
    {"id":3,"name":"Carrissa Sandwich","birthdate":"12/6/1975","children":1,"country":"Egypt","can_program":true},
    {"id":4,"name":"Eldredge O'Feeney","birthdate":"5/5/1989","children":5,"country":"China","can_program":false},
    {"id":5,"name":"Miranda Ruprechter","birthdate":"7/10/1987","children":2,"country":"China","can_program":true},
    {"id":6,"name":"Dimitry Dishman","birthdate":"5/26/1960","children":5,"country":"China","can_program":false},
    {"id":7,"name":"Cross Murrhardt","birthdate":"4/30/2001","children":3,"country":"Poland","can_program":true},
    {"id":8,"name":"Judye Benz","birthdate":"4/13/1971","children":5,"country":"Indonesia","can_program":true},
    {"id":9,"name":"Bria Mingaud","birthdate":"3/7/1990","children":2,"country":"Indonesia","can_program":true},
    {"id":10,"name":"Trude Millier","birthdate":"8/9/1989","children":2,"country":"China","can_program":true}]
//Creating a type for my array
    type person = {
        id: number, 
        name: string, 
        birthdate:  string; 
        children: number, 
        country: string, 
        can_program: boolean,
    }
//
console.log(peopleData[0].children); 
const myDiv = document.getElementById("main"); 
if (myDiv) {
  let content = "";
  for (let i = 0; i < peopleData.length; i++) {
    const birthdayYear = new Date(peopleData[i].birthdate).getFullYear(); 
    const currentYear = new Date().getFullYear(); 
    const HowOldAreThey= currentYear-birthdayYear; 

    const textProgramming = peopleData[i].can_program
      ? "Yes, can program"
      : "No,  can´t program"; 


    const childText = peopleData[i].children === 1  
    ? `${peopleData[i].children} child; `
    : `${peopleData[i].children} children` ; 
    
    content += `
    <div class="card">
      <h1>Name: ${peopleData[i].name} has ${childText}</h1>
      <h1> Age: ${HowOldAreThey}</h1>
      <h1> Country: ${peopleData[i].country}</h1>
      <h1> Can program: ${textProgramming}</h1>
      </div>
    `;
  }
  myDiv.innerHTML = content;
}
}