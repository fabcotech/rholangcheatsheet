

export default {
  bgColor: "210, 210, 130",
  classes: "spans-white text-black",
  title: "Pattern Matching",
  sections: {
    "The patterns in:": [
      "<pre>for( Pattern <- Name ){ Body }</pre>",
      "<pre>for( Pattern <= Name ){ Body }</pre>",
      "<pre>contract Name(Pattern){ Body }</pre>"
    ],
    "Match against the processes in:": [
      "<pre>Name!(Process)</pre>",
      "<pre>Name!!(Process)</pre>"
    ],
    "Each <span>Pattern_i</span> in:": [
      "<pre>for( Pattern_1 <- Name_1 ; ... ; Pattern_N <- Name_N ){ Body }",
      "<pre>for( Pattern_1 <= Name_1 ; ... ; Pattern_N <= Name_N ){ Body }",
    ],
    "Matches against a <span>Process_i</span> in:": [
      "<pre>Name_1!(Process_1) | ... | Name_N!(Process_N)</pre>",
      "<pre>Name_1!!(Process_1) | ... | Name_N!!(Process_N)</pre>"
    ],
    "Tries to match Process against each <span>Pattern_i</span> until it finds a match (or doesn’t):": [
      "<pre>match Process { Pattern_1 => { Body_1 } ... Pattern_N => { Body_N } }</pre>"
    ]
  }
}