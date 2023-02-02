for (let i = 1; i <= 100; i++){
    const multiploQuindici = i % 15
    const multiploCinque = i % 5
    const multiploTre = i % 3
    


    if (multiploQuindici === 0){
        let numberElement = document.getElementById('number')
        let iNumber = i + ' FizzBuzz'
        numberElement.innerHTML = iNumber
        console.log (numberElement.innerHTML, 'ciao')
        // console.log ('il console log di iNumber ', iNumber)
        // console.log(i,'FizzBuzz')
        
    }
    else if (multiploCinque === 0){
        let numberElement = document.getElementById('number')
        let iNumber = i + ' Buzz'
        numberElement.innerHTML = iNumber
        console.log (numberElement.innerHTML, 'ciao')
        // console.log ('il console log di iNumber ', iNumber)
        // console.log (i, 'Buzz')
    }
    else if (multiploTre === 0){
        let numberElement = document.getElementById('number')
        let iNumber = i + ' Fizz'
        numberElement.innerHTML = iNumber
        console.log (numberElement.innerHTML, 'ciao')
        // console.log ('il console log di iNumber ', iNumber)
        // console.log(i , 'Fizz')
    }
    else {
        let numberElement = document.getElementById('number')
        let iNumber = i 
        numberElement.innerHTML = iNumber
        console.log (numberElement.innerHTML, 'ciao')
        // console.log ( 'il console log di iNumber ', iNumber)
        // console.log(i)
    }
}
