// Creating an array
{
    var peopleData = [
        { "id": 1, "name": "Jammie Motherwell", "birthdate": "8/20/1963", "children": 1, "country": "Indonesia", "can_program": true },
        { "id": 2, "name": "Rad Pimmocke", "birthdate": "2/21/1956", "children": 1, "country": "Brazil", "can_program": true },
        { "id": 3, "name": "Carrissa Sandwich", "birthdate": "12/6/1975", "children": 1, "country": "Egypt", "can_program": true },
        { "id": 4, "name": "Eldredge O'Feeney", "birthdate": "5/5/1989", "children": 5, "country": "China", "can_program": false },
        { "id": 5, "name": "Miranda Ruprechter", "birthdate": "7/10/1987", "children": 2, "country": "China", "can_program": true },
        { "id": 6, "name": "Dimitry Dishman", "birthdate": "5/26/1960", "children": 5, "country": "China", "can_program": false },
        { "id": 7, "name": "Cross Murrhardt", "birthdate": "4/30/2001", "children": 3, "country": "Poland", "can_program": true },
        { "id": 8, "name": "Judye Benz", "birthdate": "4/13/1971", "children": 5, "country": "Indonesia", "can_program": true },
        { "id": 9, "name": "Bria Mingaud", "birthdate": "3/7/1990", "children": 2, "country": "Indonesia", "can_program": true },
        { "id": 10, "name": "Trude Millier", "birthdate": "8/9/1989", "children": 2, "country": "China", "can_program": true }
    ];

    //Printing one line in console to check if it works
    console.log(peopleData[0].children);
    //Connecting HTML to JS/TS
    var myDiv = document.getElementById("main");
    if (myDiv) {
        var content = "";
        for (var i = 0; i < peopleData.length; i++) {
            var birthdayYear = new Date(peopleData[i].birthdate).getFullYear();
            var currentYear = new Date().getFullYear();
            var HowOldAreThey = currentYear - birthdayYear;
            var textProgramming = peopleData[i].can_program
                ? "Yes, can program"
                : "No,  can´t program";
            var childText = peopleData[i].children === 1
                ? "".concat(peopleData[i].children, " child; ")
                : "".concat(peopleData[i].children, " children");
            content += "\n    <div class=\"card\">\n      <h1>Name: ".concat(peopleData[i].name, " has ").concat(childText, "</h1>\n      <h1> Age: ").concat(HowOldAreThey, "</h1>\n      <h1> Country: ").concat(peopleData[i].country, "</h1>\n      <h1> Can program: ").concat(textProgramming, "</h1>\n      </div>\n    ");
        }
        myDiv.innerHTML = content;
    }
}
