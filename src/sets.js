

export default {
  bgColor: "222,90,255",
  classes: "text-black",
  title: "Sets",
  lines: [
    ["<pre>Set(1, 2, Nil, “Hi”)</pre>", "output"],
    ["<pre>set.union(Set(1, 4))</pre>", "Set(1, 2, 4, Nil, “Hi”)"],
    ["<pre>set.delete(2)</pre>", "Set(1, Nil, “Hi”)"],
    ["<pre>set.contains(5)</pre>", "false"],
    ["<pre>set.size()</pre>", "4"],
    ["<pre>*Sets have no order or duplicates</pre>", ""],
  ]
}