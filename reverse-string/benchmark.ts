import * as Benchmark from "benchmark"
import ReverseString from "./reverse-string"

const suite = new Benchmark.Suite()

suite
    .add("split-join", function() {
        ReverseString.reverse1("abcdefghijkllmnopqrstuvwxyz")
    })
    .add("append", function() {
        ReverseString.reverse2("abcdefghijkllmnopqrstuvwxyz")
    })
    // add listeners
    .on("cycle", function(event: { target: any }) {
        console.log(String(event.target))
    })
    .on("complete", function() {
        console.log("Fastest is " + suite.filter("fastest"))
    })
    // run async
    .run({ async: true })

export default 12
