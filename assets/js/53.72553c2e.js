(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{428:function(a,t,s){"use strict";s.r(t);var e=s(5),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"wasm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wasm"}},[a._v("#")]),a._v(" WASM")]),a._v(" "),s("h2",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" Query")]),a._v(" "),s("h3",{attrs:{id:"bytecode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bytecode"}},[a._v("#")]),a._v(" Bytecode")]),a._v(" "),s("p",[a._v("You can get the contract's WASM bytecode by referencing its ID:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli query wasm bytecode "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("code-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"code-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-info"}},[a._v("#")]),a._v(" Code Info")]),a._v(" "),s("p",[a._v("You can get information about a piece of uploaded code by referencing its ID:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli query wasm code "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("code-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"contract-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-info"}},[a._v("#")]),a._v(" Contract Info")]),a._v(" "),s("p",[a._v("You can get the metadata information about an instantiated contract:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli query wasm contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("contract-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"query-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-contract"}},[a._v("#")]),a._v(" Query Contract")]),a._v(" "),s("p",[a._v("You can send a QueryMsg that that will be run against the contract.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli query wasm contract-store "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("contract-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("query-msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[s("code",[a._v("<query-msg>")]),a._v(" will be a JSON string that encodes the QueryMsg. For instance:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli query wasm contract-store terra1plju286nnfj3z54wgcggd4enwaa9fgf5kgrgzl "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{\"config\":{}}'")]),a._v("\n")])])]),s("h3",{attrs:{id:"access-contract-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-contract-store"}},[a._v("#")]),a._v(" Access Contract Store")]),a._v(" "),s("p",[a._v("If you know the key (and subkey) of the information stored in the contract, you can get the information by issuing:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli query wasm raw-store "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("contract-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("subkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("If the data uses a "),s("code",[a._v("Singleton")]),a._v(", it has only a key, and no subkey. If the data uses a prefixed data store such as "),s("code",[a._v("PrefixedStorage")]),a._v(" or "),s("code",[a._v("Bucket")]),a._v(", it might also use a subkey.")]),a._v(" "),s("h2",{attrs:{id:"transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[a._v("#")]),a._v(" Transaction")]),a._v(" "),s("h3",{attrs:{id:"upload-contract-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-contract-code"}},[a._v("#")]),a._v(" Upload Contract Code")]),a._v(" "),s("p",[a._v("You can upload new contract code to the blockchain:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx wasm store "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("wasm-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("The argument "),s("code",[a._v("<wasm-file>")]),a._v(" is the path of a file that is the compiled binary of the smart contract code that you wish to upload.")]),a._v(" "),s("h3",{attrs:{id:"creating-a-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-contract"}},[a._v("#")]),a._v(" Creating a Contract")]),a._v(" "),s("p",[a._v("You can create (instantiate) a new contract by referencing a code ID of a contract that has been uploaded.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx wasm "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("code-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("init-msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("coins"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("The argument "),s("code",[a._v("<init-msg>")]),a._v(" is a JSON string containing the InitMsg to initialize your contract's state. "),s("code",[a._v("<coins>")]),a._v(" is the optional amount of Coins (in a comma-separated list) that you want to send to the new contract account.")]),a._v(" "),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli instantiate "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"arbiter": "terra~~"}\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1000000uluna"')]),a._v("\n")])])]),s("h3",{attrs:{id:"execute-a-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-a-contract"}},[a._v("#")]),a._v(" Execute a Contract")]),a._v(" "),s("p",[a._v("You can invoke processing functions on the smart contract:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx wasm execute "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("contract-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("handle-msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("coins"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("The argument "),s("code",[a._v("<handle-msg>")]),a._v(" is a raw JSON string containing the HandleMsg that will be parsed and routed to the correct message handling logic in the contract. "),s("code",[a._v("<coins>")]),a._v(" is the optional amount of Coins (in a comma-separated list) that you want to send alongside your message, in case the logic requires some fees.")])])}),[],!1,null,null,null);t.default=r.exports}}]);