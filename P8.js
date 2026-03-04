//create an array to store companies = "bloomberg","microsoft","uber","google","ibm","netflix"
// remove the first company from array
//remove uber and add ola in its place
//add amazon at the end
let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
//1st
companies.shift();
//2nd
companies.splice(2,1,"ola");
//3rd
companies.push("amazon");