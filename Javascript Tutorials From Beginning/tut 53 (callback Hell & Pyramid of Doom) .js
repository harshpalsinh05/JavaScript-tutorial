console.log("tut 53 callback Hell & Pyramid of Doom ")


// Callback Hell & Pyramid of Doom Problem
// when we have callback inside callback, the code gets difficult to manage
// loadscript(()){
//     loadscript(()){
//         loadscript(()){
//             loadscript(()){
//             }
//         }
//     }
// }

/* A call become more nested, the code becomes deeper and increasingly more difficult to manage,
the pyramid of these calls grows towards the right with every asyn action. soon it spirals out of controls  */

// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src)
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert('Hello World!' + src);
}

function goodmorning(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
        if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                if (error) {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                            })
                        })
                    })
                })
            })
        })
    })
})
