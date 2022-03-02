const a = {
  bgColor: "222, 82, 31",
  classes: "spans-black text-black",
  title: "Patterns",
  sections: {
    "A free variable": [
      "<span>x</span> binds with anything, while <span>@x</span> matches to a name and binds <span>x</span> to the quoted process",
    ],
    "Bool Int String Uri ByteArray Type patterns": [
      "<span>@{Bool}</span> matches to both <span>@true</span> and <span>@false</span>",
    ],
    "<span>[ Head ... Tail ] Set( Subset ... Tail ) { Key : Value ... Tail }</span>": [
      "[ 1 , 2 ... x ] matches any list starting with 1, 2 and binds x to the remainder",
    ],
    "<span>ProcessPattern /\ ProcessPattern</span> Logical AND": [
      "<span>@{x /\ 100}</span> matches to <span>@100</span> and binds <span>x</span> to <span>100</span>",
    ],
    "<span>ProcessPattern \/ ProcessPattern</span> Logical OR": [
      "<span>@”age”!(21 \/ 22)</span> matches to both <span>@”age”!(21)</span> and <span>@”age”!(22)</span>, binds nothing"
    ],
    "<span>~ ProcessPattern</span> Logical NOT": [
        "<span>~ Nil</span> matches to any process except <span>Nil</span>"
    ]
  }
}

export default a;