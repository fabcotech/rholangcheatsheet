const a = {
  bgColor: "232,100,255",
  classes: "text-black",
  title: "Maps",
  lines: [
    ["<pre>{“a”: 1, “b”: 2}</pre>", "output"],
    ["<pre>map.union({“c”: 3})</pre>", "{“a”: 1, “b”: 2, “c”: 3}"],
    ["<pre>map.delete(“b”)</pre>", "{“a”: 1}"],
    ["<pre>map.contains(“c”)</pre>", "false"],
    ["<pre>map.get(“b”)</pre>", "2"],
    ["<pre>map.getOrElse(“d”, “fail”)</pre>", "fail"],
    ["<pre>map.set(“b”, 4)</pre>", "{“a”: 1, “b”: 4}"],
    ["<pre>map.keys()</pre>", "Set(“a”, “b”)"],
    ["<pre>map.size()</pre>", "2"],
  ]
}

export default a;