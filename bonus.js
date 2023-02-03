for (let i = 1; i <= 100; i++){
    const multiploQuindici = i % 15
    const multiploCinque = i % 5
    const multiploTre = i % 3
    
    let numberElement = document.getElementById('numberelement')

    if (multiploQuindici == 0){
        let iNumber = '<h1>'+'FizzBuzz'+ '</h1>'
        numberElement.innerHTML += iNumber
        // console.log(i, 'FizzBuzz')
    }
    else if (multiploCinque === 0){
        let iNumber = '<h1>'+'Buzz'+ '</h1>' 
        numberElement.innerHTML += iNumber
        // console.log(i, 'Buzz')
    }else if (multiploTre === 0){
        let iNumber = '<h1>'+'Fizz'+ '</h1>'
        numberElement.innerHTML += iNumber
        // console.log(i, 'Fizz')
     }else {
        let iNumber =  '<h1>'+ i + '</h1>'
        numberElement.innerHTML += iNumber
        // console.log(i)
    }
}
