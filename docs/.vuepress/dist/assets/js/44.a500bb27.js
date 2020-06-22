(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{420:function(e,a,r){"use strict";r.r(a);var t=r(5),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"treasury"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#treasury"}},[e._v("#")]),e._v(" Treasury")]),e._v(" "),r("h2",{attrs:{id:"query-tax-rate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-tax-rate"}},[e._v("#")]),e._v(" Query Tax Rate")]),e._v(" "),r("p",[e._v("Terra transactions charge a % fee on each outbound transaction from the sender's wallet. To get the effective stability fee rate, run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("terracli query treasury tax-rate\n")])])]),r("h2",{attrs:{id:"query-tax-cap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-tax-cap"}},[e._v("#")]),e._v(" Query Tax Cap")]),e._v(" "),r("p",[e._v("Stability fees are capped at some fixed amount of SDT to avoid penalizing large transactions. To get the current tax cap denominated in a given denomination (micro-units), run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("terracli query treasury tax-cap "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("denom"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("h2",{attrs:{id:"query-tax-proceeds"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-tax-proceeds"}},[e._v("#")]),e._v(" Query Tax Proceeds")]),e._v(" "),r("p",[e._v("To query the cumulative tax proceeds, run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("terracli query treasury tax-proceeds\n")])])]),r("h2",{attrs:{id:"query-reward-weight"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-reward-weight"}},[e._v("#")]),e._v(" Query Reward Weight")]),e._v(" "),r("p",[e._v("The Reward Weight is the portion of seigniorage that is designated as ballot rewards for the winners of exchange rate oracle. To query the Reward Weight, run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("terracli query treasury reward-weight\n")])])]),r("h2",{attrs:{id:"query-seigniorage-proceeds"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-seigniorage-proceeds"}},[e._v("#")]),e._v(" Query Seigniorage Proceeds")]),e._v(" "),r("p",[e._v("The treasury measures the amount of Terra seigniorage accumulated over epochs, denominated in units of "),r("code",[e._v("uluna")]),e._v(". To query the seigniorage proceeds, run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("terracli query treasury seigniorage-proceeds\n")])])]),r("h2",{attrs:{id:"query-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query Parameters")]),e._v(" "),r("p",[e._v("Parameters define high-level settings for the Treasury, described "),r("RouterLink",{attrs:{to:"/terracli/spec-treasury.html#parameters"}},[e._v("here")]),e._v(". You can get the current values by using:")],1),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("terracli query treasury params\n")])])]),r("p",[e._v("With the above command you will get the values for:")]),e._v(" "),r("ul",[r("li",[e._v("Tax Rate update policy")]),e._v(" "),r("li",[e._v("Reward Weight update policy")]),e._v(" "),r("li",[e._v("Seigniorage Burden Target")]),e._v(" "),r("li",[e._v("Mining Increment")]),e._v(" "),r("li",[r("code",[e._v("WindowShort")]),e._v(" (update parameter)")]),e._v(" "),r("li",[r("code",[e._v("WindowLong")]),e._v(" (update parameter)")]),e._v(" "),r("li",[r("code",[e._v("WindowProbation")]),e._v(" (update parameter)")])])])}),[],!1,null,null,null);a.default=s.exports}}]);