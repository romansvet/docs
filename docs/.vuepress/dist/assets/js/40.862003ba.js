(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{416:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"multisig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multisig"}},[t._v("#")]),t._v(" Multisig")]),t._v(" "),a("p",[t._v("Multisig transactions require signatures of multiple private keys. Thus, generating and signing a transaction from a multisig account involve cooperation among the parties involved. A multisig transaction can be initiated by any of the key holders, and at least one of them would need to import other parties' public keys into their Keybase and generate a multisig public key in order to finalize and broadcast the transaction.")]),t._v(" "),a("p",[t._v("For example, given a multisig key comprising the keys "),a("code",[t._v("p1")]),t._v(", "),a("code",[t._v("p2")]),t._v(", and "),a("code",[t._v("p3")]),t._v(", each of which is held by a distinct party, the user holding "),a("code",[t._v("p1")]),t._v(" would require to import both "),a("code",[t._v("p2")]),t._v(" and "),a("code",[t._v("p3")]),t._v(" in order to generate the multisig account public key:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("terracli keys add \\\n    p2 \\\n    --pubkey=terrapub1addwnpepqtd28uwa0yxtwal5223qqr5aqf5y57tc7kk7z8qd4zplrdlk5ez5kdnlrj4\n\nterracli keys add \\\n    p3 \\\n    --pubkey=terrapub1addwnpepqgj04jpm9wrdml5qnss9kjxkmxzywuklnkj0g3a3f8l5wx9z4ennz84ym5t\n\nterracli keys add \\\n    p1p2p3 \\\n    --multisig-threshold=2 \\\n    --multisig=p1,p2,p3\n")])])]),a("p",[t._v("A new multisig public key "),a("code",[t._v("p1p2p3")]),t._v(" has been stored, and its address will be used as signer of multisig transactions:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli keys show --address p1p2p3\n")])])]),a("p",[t._v("You may also view multisig threshold, pubkey constituents and respective weights by viewing the JSON output of the key or passing the "),a("code",[t._v("--show-multisig")]),t._v(" flag:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli keys show p1p2p3 -o json\nterracli keys show p1p2p3 --show-multisig\n")])])]),a("p",[t._v("The first step to create a multisig transaction is to initiate it on behalf of the multisig address created above:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx send terra1570v2fq3twt0f0x02vhxpuzc9jc4yl30q2qned 10uluna "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("multisig_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --generate-only "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" unsignedTx.json\n")])])]),a("p",[t._v("The file "),a("code",[t._v("unsignedTx.json")]),t._v(" contains the unsigned transaction encoded in JSON. "),a("code",[t._v("p1")]),t._v(" can now sign the transaction with its own private key:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx sign "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    unsignedTx.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --multisig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("multisig_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("p1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --output-document"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("p1signature.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Once the signature is generated, "),a("code",[t._v("p1")]),t._v(" transmits both "),a("code",[t._v("unsignedTx.json")]),t._v(" and "),a("code",[t._v("p1signature.json")]),t._v(" to "),a("code",[t._v("p2")]),t._v(" or "),a("code",[t._v("p3")]),t._v(", which in turn will generate their respective signature:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx sign "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    unsignedTx.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --multisig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("multisig_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("p2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --output-document"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("p2signature.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("code",[t._v("p1p2p3")]),t._v(" is a 2-of-3 multisig key, therefore one additional signature is sufficient. Any the key holders can now generate the multisig transaction by combining the required signature files:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx multisign "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    unsignedTx.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    p1p2p3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    p1signature.json p2signature.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --output-document"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("signedTx.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("The transaction can now be sent to the node:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx broadcast signedTx.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);