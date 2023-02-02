for (let i = 1; i <= 100; i++){
    const multiploQuindici = i % 15
    const multiploCinque = i % 5
    const multiploTre = i % 3
    


    if (multiploQuindici === 0){
        let numberElement = document.getElementById("number")
        let iNumber = i + ' FizzBuzz'
        numberElement.innerHTML = iNumber
        console.log (iNumber)
        console.log(i,'FizzBuzz')
        
    }
    else if (multiploCinque === 0){
        console.log (i, 'Buzz')
        // let numberElement = document.getElementById("number")
        // numberElement.innerHTML = i + 'Buzz'
    }
    else if (multiploTre === 0){
        console.log(i , 'Fizz')
        // let numberElement = document.getElementById("number")
        // numberElement.innerHTML = i + 'Fizz'
    }
    else {
        console.log(i)
        // let numberElement = document.getElementById("number")
        // numberElement.innerHTML = i 
    }
}
