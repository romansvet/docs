(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{415:function(e,a,t){"use strict";t.r(a);var r=t(5),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"market"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#market"}},[e._v("#")]),e._v(" Market")]),e._v(" "),t("h2",{attrs:{id:"swap-currencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swap-currencies"}},[e._v("#")]),e._v(" Swap Currencies")]),e._v(" "),t("p",[e._v("All currencies in the Terra ecosystem can be directly swapped into another at the effective oracle exchange rate. To swap one currency for another, run:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli tx market swap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("offer_coin"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ask_denom"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --from mykey "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n")])])]),t("p",[e._v("Where "),t("code",[e._v("offer_coin")]),e._v(" is the coin looking to be traded and "),t("code",[e._v("ask_denom")]),e._v(" the denomination of the coin to be swapped into.")]),e._v(" "),t("p",[e._v("For Terra<>Luna swaps, Constant-Product spread pricing model is enforced to limit consensus-related attack vectors. Terra<>Terra swaps have a constant Tobin Tax (0.3%).")]),e._v(" "),t("h2",{attrs:{id:"query-swap-currencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-swap-currencies"}},[e._v("#")]),e._v(" Query Swap Currencies")]),e._v(" "),t("p",[e._v("The Market module also allows you determine the result from a swap operation without actually executing the swap. To simulate a swap operation, run:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli query market swap "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("offer_coin"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ask_denom"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Where "),t("code",[e._v("offer_coin")]),e._v(" is the coin to be traded and "),t("code",[e._v("ask_denom")]),e._v(" the denomination to be swapped into.")])])}),[],!1,null,null,null);a.default=s.exports}}]);