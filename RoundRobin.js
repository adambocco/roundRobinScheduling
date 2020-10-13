
function schedule(A, q, cs) {
    time = 0
    returnArr =[]
    done = false
    while (!done) {
        for (i of A) {
            if (i == null) {
                continue
            }
            if (time >= i.a) {
                if (i.b <= q) {
                    if (!i.started) {
                        i.started = true;
                        i.wait = time - i.a
                    }
                    time += i.b
                    i.finish = time
                    i.turn = time - i.a
                    o = A.indexOf(i)
                    A[o] = false
                    returnArr.push(i)
                }
                else {
                    if (!i.started) {
                        i.started = true;
                        i.wait = time - i.a
                    }
                    time += (q)
                    i.b -= q
                }
                console.log("P"+i.p, "  " , time + "\n")
                time += cs
            }
        }
        done = true
        for (f of A) {
            if (f) {
                done = false
            }
        }
    }
    return returnArr
}






quantum = 100
contextSwitch = 10
procArray = []
arrivalTimes = [0,0,20,40,60,80,100,110,130,150]
burstTimes = [100,300,450,50,400,350,250,150,200,500]
for (let i=0; i<10; i++) {
    x = Object()
    x.p = i+1
    x.a = arrivalTimes[i]
    x.b = burstTimes[i]
    x.started = false
    procArray.push(x)
}

let y = schedule(procArray, quantum, contextSwitch)

y.sort((a,b) => (a.p > b.p) ? 1 : -1)
console.log(y)