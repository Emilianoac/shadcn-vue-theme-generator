import{d as r}from"./CoppyButton.vue_vue_type_script_setup_true_lang-z5jP3Qrf.js";import{d as c,o as l,z as p,A as o,a5 as a,D as d,c as i}from"./highlight-CeYIOz-i.js";function m(t){let e=t.replace(/["']data-component-x-ray(-trigger)?["']\s*:\s*["'][^"']*["'],?/g,"").replace(/\s*data-component-x-ray(-trigger)?="[^"]*"/g,"").replace(/\s*data-component-x-ray\s*/g," ").replace(/,\s*,/g,",").replace(/,\s*}/g,"}").replace(/,\s*]/g,"]");for(;e.includes(`


`);)e=e.replace(/\n\n\n/g,`

`);return e.trim()}const u={class:"space-y-2 h-full flex flex-col"},_={class:"flex justify-between items-center"},f={class:"block text-sm text-muted-foreground"},x={class:"border border-dashed p-6 flex-1"},C=c({__name:"ExampleCard",props:{rawComponent:{}},setup(t){const e=t,n=i(()=>m(e.rawComponent));return(s,g)=>(l(),p("div",u,[o("div",_,[o("span",f,[a(s.$slots,"title")]),d(r,{"show-text":!1,"show-tooltip":!0,textToCopy:n.value},null,8,["textToCopy"])]),o("div",x,[a(s.$slots,"example")])]))}});export{C as _};
