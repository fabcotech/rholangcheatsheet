const a = {
  bgColor: "222,90,255",
  classes: "text-black",
  title: "Strings",
  lines: [
    ["<pre>“Hello “ ++ “World”</pre>", "concatenation"],
    ["<pre>“${greeting} World” %% {“greeting”: “Hello”}</pre>", "interpolation"],
    ["<pre>“Hello World”.slice(2, 8)”</pre>", "“llo Wo”"],
    ["<pre>“A402B6”.hexToBytes( )</pre>", "interpret hex string"],
  ]
}

export default a;