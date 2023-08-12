import"./ViewTransitions.astro_astro_type_script_index_0_lang.ed88c87d.js";const o=["00","11","22","33","44","55","66","77","88","99","AA","BB","CC","DD","EE","FF"],e=()=>Math.floor(Math.random()*o.length),c=()=>{document.querySelectorAll(".text_change").forEach(n=>{const t=o[e()]+o[e()]+o[e()];n.setAttribute("style",`
		  color: #${t}AA;
		  text-shadow: 0 0 10px #${t}55, 0 0 20px #${t}55, 0 0 30px #${t}55;
		  `)})};c();setInterval(()=>{c()},5e3);
