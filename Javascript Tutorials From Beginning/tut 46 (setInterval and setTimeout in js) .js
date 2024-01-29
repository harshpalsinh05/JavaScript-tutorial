 console.log ("tut 46 setInterval and setTimeout in js") 


        //SetTimeout allows us to run a function once after the interval of time, syntax = 
        // let timerID(it returns a timerid) = setTimeout(function, <delay>(time is in ms), <arg 1>, <arg 2>)
        let a = setTimeout(function () {
            alert("hello Are You here ?")
        }, 5000) // time is in ms so, 5000ms = 5s


        let b = prompt("Do You want to run it again ?")
        if ("n" == b) {
            clearTimeout(a)
        }
        console.log(a)

        // let timerID(it returns a timerid) = setTimeout(function, <delay>(time is in ms), <arg 1>, <arg 2>)
        let sum = (a, b) => {
            alert(`Sum of these ${a} + ${b} nunbers is ` + (a + b))
            a + b
        }
        setTimeout(sum, 3000, 4, 8)

        // clear timout is used to cancel the execution
        // clearTimeout(sum)


        // setInterval method has a similar syntax as setTimeout
        // But unlike setTimeout, it runs the funtion not only once, but regularly after the given interval of time.
        let c = setInterval(function () {
            alert("It is gona run at intervals")
        }, 5000)
        
        // To stop futher calls, we can use clearInterval 
        clearInterval(c)

