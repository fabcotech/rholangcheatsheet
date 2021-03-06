const a = {
  bgColor: "131,255,222",
  classes: "text-black",
  title: "Sends and Receives",
  lines: [
    ["<pre>x!(P)</pre>", "Send process P on name x"],
    ["<pre>x!!(P)</pre>", "Persistent send"],
    ["<pre>for (y <- chan){ P }</pre>", "Receive name y on chan"],
    ["<pre>for (@Q <- chan){ P }</pre>", "Receive Process Q (see pattern matching)"],
    ["<pre>for (x <- chan1; y <- chan2){ P }</pre>", "Receive x and y simultaneously"],
    ["<pre>for (y <= chan){ P }</pre>", "Persistent receive"],
    ["<pre>contract chan(y) = { P }</pre>", "Alternate persistent receive"],
    ["<pre>for (y <<- chan) { P }</pre>", "Peek at y on chan"],
  ]
}

export default a;