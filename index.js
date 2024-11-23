//example freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

//possible names
const names = [
  "Aria",
  "Elijah",
  "Olivia",
  "Jackson",
  "Sophia",
  "Liam",
  "Emma",
  "Mason",
  "Isabella",
  "Lucas",
];

//possible occupations
const occupations = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Mechanical Engineer",
  "Graphic Designer",
  "Chef",
  "Marketing Analyst",
  "Electrician",
  "Physician",
  "Data Scientist",
];

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootDiv = document.getElementById("root");


  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum"; //adds text to the h1
  rootDiv.append(heading); //adds the new h1 to the div

  /**
   * 👉 STEP 3:
   *    Create a table to hold our Freelancers in
   */
  const table = document.createElement("table"); //creates a table
  const headerRow = document.createElement("tr") //creates a table row
  const col1 = document.createElement("th"); //creates table headers 
  const col2 = document.createElement("th");
  const col3 = document.createElement("th");

  col1.textContent = "Name"; //adds text to the table header
  col2.textContent = "Price";
  col3.textContent = "Occupation";

  headerRow.append(col1,col2,col3);//adds the table columns to the table row
  table.appendChild(headerRow)//adds the table row to the table

rootDiv.appendChild(table);//adds the new table to the didv



  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
  renderTableRows();

/**
 * 👉 STEP 4:
 *    Create a function to render the Freelancers in our Freelancers array
 */
function renderTableRows(){
  freelancers.forEach(freelancer => {//goes through each freelancer in the array to create a table
    const tableRow = document.createElement("tr");//creates a table row
    const nameCell = document.createElement("td");//contains name data of frrelancer
    const priceCell = document.createElement("td");//contains price data of freelancer
    const occupationCell = document.createElement("td");//contains occ data of freelancer

    nameCell.textContent = freelancer.name; //pulls freelancer name from array and adds it to the name cell
    priceCell.textContent = `$${freelancer.price}`;//pulls freelancer price from array
    occupationCell.textContent = freelancer.occupation;//pulls freelancer occ from array
    tableRow.append(nameCell, priceCell, occupationCell);//adds data from celss to the table row 
    table.appendChild(tableRow);//adds data from the table row to the table
  }); 
}
/**
 * 👉 STEP 6:
 *    Create a function to add a new Freelancer to the Freelancers array
 */
function addNewFreelancers(){
  let newFreelancersInput = prompt("Enter a name, price, occupation seperated by commas.");//prompts user to enter new freelancer 
  let [name, price, occupation] = newFreelancersInput.split(",");//splits users input into an array
  let newFreelancer = {//a new freelancer object
    name: name,
    price: +price, //turns price input from user into a number 
    occupation: occupation,
  }
  freelancers.push(newFreelancer);//pushes new freelancer object created by user to the freelancers array
  renderTableRows();//loads new freelancer array
}
/**
 * 👉 STEP 7:
 *    Add an interval to add a new Freelancer every second
 */
setInterval(() => {
  const randomName = names[Math.floor(Math.random() * names.length)];//gets a random number between 0 and the number of names in array , this number will be the index value for the name that will generate 
  const randomPrice = Math.floor(Math.random() * 100);//gets a random number from 0-100
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];

  const randomFreelancer = {//created object for random freelancer 
    name: randomName,
    price: randomPrice,
    occupation: randomOccupation,
  };

  freelancers.push(randomFreelancer);//pushes random freelancer to the freelancers array
  renderTableRows(); // Update the table 
}, 2000);//sets interval to 2 seconds

//call init function
}init();
