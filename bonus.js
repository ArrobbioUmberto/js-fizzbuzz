for (let i = 1; i <= 100; i++){
    const multiploQuindici = i % 15
    const multiploCinque = i % 5
    const multiploTre = i % 3
    
    if (multiploQuindici === 0){
        console.log(i, 'FizzBuzz')
        let iNumber = '<h1>'+ i + 'Fizzbuzz' + '</h1>'
        document.write( iNumber)
    }else if (multiploCinque === 0){
        console.log (i, 'Buzz')
        let iNumber = '<h1>' + i + ' Buzz' + '</h1>'
        document.write( iNumber)
    }else if (multiploTre === 0){
        console.log (i, 'Fizz')
        let iNumber = '<h1>' + i + ' Fizz' + '</h1>'
        document.write( iNumber)
     }else {
        console.log (i)
        let iNumber = '<h1>' + i  + '</h1>'
        document.write( iNumber)
    }
}
