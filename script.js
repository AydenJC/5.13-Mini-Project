let button = document.querySelector('button')
let input = document.querySelector('.input1')
let paragraph = document.querySelector('p')

button.onclick =function() {
 let userInput = input.value
  console.log(userInput)
  if (userInput == 'Atlantic'){
    paragraph.innerHTML = 'They Beat Metro 10 to 6 and Central 7 to 5 they are the best'
  }
  else if (userInput == 'Metropolitan'){
    paragraph.innerHTML = 'They lost to the Atlatic 10 to 6 some they are in 4th'
  }
  else if (userInput == 'Central'){
    paragraph.innerHTML = 'They Beat Pacific 6 to 4 but lost to Atlatic 7 to 5 2nd '
  }
  else if (userInput == 'Pacific'){
    paragraph.innerHTML = 'They lose to Central 6 to 4 3rd'
  }
};