




for (let i = 1; i <= 100; i++){
    const multiploQuindici = i % 15
    const multiploCinque = i % 5
    const multiploTre = i % 3
    if (multiploQuindici === 0){
        console.log(i,'FizzBuzz')
    }
    else if (multiploCinque === 0){
        console.log (i, 'Buzz')
    }
    else if (multiploTre === 0){
        console.log(i , 'Fizz')
    }
    else {
        console.log(i)
    }

}
