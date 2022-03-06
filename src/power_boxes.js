const a = {
  bgColor: "230,230,230",
  classes: "text-black",
  title: "Power Boxes",
  lines: [
    ["<pre>stdout(`rho:io:stdout`)</pre>", "stdout!( any_process)  prints to screen" ],
    ["<pre>sha256Hash(`rho:crypto:sha256Hash`)</pre>", "sha256Hash!( data_byte_array, return)"],
    ["<pre>keccak256Hash(`rho:crypto:keccak256Hash`)</pre>", "keccak256Hash!( data_byte_array, return)"],
    ["<pre>secp256k1Verify(`rho:crypto:secp256k1Verify`)</pre>", "secp256k1Verify!(data_byte_array, signature, public_key, return)"],
    ["<pre>ed25519Verify(`rho:crypto:ed25519Verify`)</pre>", "ed25519Verify!(data_byte_array, signature, public_key, return)"],
  ]
}

export default a;
