import{c as $,i as I,d as V,a as F,g as E,e as q,h as C,s as w,f as Y,q as X,p as U,G as J,k as K,z as Q,A as Z,B as ee}from"./index-CV_7niqZ.js";import{c as te,x as ne,y as ae,l as z,a as re,b as B,i as O}from"./index-BKjHvTZf.js";import{X as se,a as ie,D as L}from"./index-XoSH4Vwo.js";import{w as oe,b as g,d as le}from"./array-BNpUzgbK.js";import{d as ce,i as ue,j as de,n as he,k as ye,w as R,o as fe,z as ve,c as pe,r as ge}from"./DialogTitle.vue_vue_type_script_setup_true_lang-qm1obxa6.js";function me(f,n,e){var s=null,o=g(!0),l=null,c=te,i=null,m=oe(a);f=typeof f=="function"?f:f===void 0?ne:g(+f),n=typeof n=="function"?n:n===void 0?g(0):g(+n),e=typeof e=="function"?e:e===void 0?ae:g(+e);function a(t){var d,b,h,y=(t=le(t)).length,r,u=!1,p,v=new Array(y),x=new Array(y);for(l==null&&(i=c(p=m())),d=0;d<=y;++d){if(!(d<y&&o(r=t[d],d,t))===u)if(u=!u)b=d,i.areaStart(),i.lineStart();else{for(i.lineEnd(),i.lineStart(),h=d-1;h>=b;--h)i.point(v[h],x[h]);i.lineEnd(),i.areaEnd()}u&&(v[d]=+f(r,d,t),x[d]=+n(r,d,t),i.point(s?+s(r,d,t):v[d],e?+e(r,d,t):x[d]))}if(p)return i=null,p+""||null}function k(){return z().defined(o).curve(c).context(l)}return a.x=function(t){return arguments.length?(f=typeof t=="function"?t:g(+t),s=null,a):f},a.x0=function(t){return arguments.length?(f=typeof t=="function"?t:g(+t),a):f},a.x1=function(t){return arguments.length?(s=t==null?null:typeof t=="function"?t:g(+t),a):s},a.y=function(t){return arguments.length?(n=typeof t=="function"?t:g(+t),e=null,a):n},a.y0=function(t){return arguments.length?(n=typeof t=="function"?t:g(+t),a):n},a.y1=function(t){return arguments.length?(e=t==null?null:typeof t=="function"?t:g(+t),a):e},a.lineX0=a.lineY0=function(){return k().x(f).y(n)},a.lineY1=function(){return k().x(f).y(e)},a.lineX1=function(){return k().x(s).y(n)},a.defined=function(t){return arguments.length?(o=typeof t=="function"?t:g(!!t),a):o},a.curve=function(t){return arguments.length?(c=t,l!=null&&(i=c(l)),a):c},a.context=function(t){return arguments.length?(t==null?l=i=null:i=c(l=t),a):l},a}const ke=Object.assign(Object.assign({},se),{color:void 0,curveType:re.MonotoneX,baseline:()=>0,opacity:1,cursor:null,line:!1,lineColor:void 0,lineWidth:2,lineDashArray:void 0,minHeight1Px:!1,minHeight:void 0,stackMinHeight:!1}),W=$`
  label: area-component;
`,xe=I`
  :root {
    --vis-area-cursor: default;
    --vis-area-fill-opacity: 1;
    --vis-area-stroke-color: none;
    --vis-area-stroke-width: 0px;
    --vis-area-stroke-dasharray: none;
    --vis-area-stroke-opacity: 1;
    --vis-area-hover-fill-opacity: none;
    --vis-area-hover-stroke-width: none;

    /* Dark Theme */
    --vis-dark-area-stroke-color: none;
  }

  body.theme-dark ${`.${W}`} {
    --vis-area-stroke-color: var(--vis-dark-area-stroke-color);
  }

`,_=$`
  label: area;
  cursor: var(--vis-area-cursor);
  fill-opacity: var(--vis-area-fill-opacity);
  stroke-width: var(--vis-area-stroke-width);
  stroke-dasharray: var(--vis-area-stroke-dasharray);
  stroke: var(--vis-area-stroke-color);
  stroke-opacity: var(--vis-area-stroke-opacity);

  &:hover {
    fill-opacity: var(--vis-area-hover-fill-opacity);
    stroke-width: var(--vis-area-hover-stroke-width);
  }
`,N=$`
  label: areaLinePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`,be=Object.freeze(Object.defineProperty({__proto__:null,area:_,areaLinePath:N,globalStyles:xe,root:W},Symbol.toStringTag,{value:"Module"}));class P extends ie{constructor(n){super(),this._defaultConfig=ke,this.config=this._defaultConfig,this.stacked=!0,this.events={[P.selectors.area]:{}},n&&this.setConfig(n),this.stacked=Array.isArray(this.config.y)}get bleed(){const{config:{line:n,lineWidth:e}}=this;if(!n)return{top:0,bottom:0,left:0,right:0};const s=this.yScale.domain(),l=(this.yScale.range()[0]>this.yScale.range()[1]?L.North:L.South)===L.South,c=e>3,i=e>=10;return{top:!i&&(!l&&s[1]===0||l&&s[0]===0)?0:e/2,bottom:!i&&(!l&&s[0]===0||l&&s[1]===0)?0:e/2,left:c?e/2:0,right:c?e/2:0}}_render(n){super._render(n);const{config:e,datamodel:{data:s}}=this,o=V(n)?n:e.duration,l=B[e.curveType];this._areaGen=me().x(r=>r.x).y0(r=>r.y0).y1(r=>r.y1).curve(l);const c=F(e.y)?e.y:[e.y],i=s.map((r,u)=>this.xScale(E(r,e.x,u))),m=q(s,e.baseline,c,this._prevNegative);this._prevNegative=m.map(r=>!!r.isMostlyNegative);const a=[],k=m.map(r=>r.map((u,p)=>{var v,x;const T=i[p],M=this.yScale(u[0]),j=this.yScale(u[1]),G=j>M,S=e.stackMinHeight&&a[p]||0,H=G?M+S:M-S,D=G?j+S:j-S;let A=0;return(e.minHeight||e.minHeight1Px)&&Math.abs(D-H)<((v=e.minHeight)!==null&&v!==void 0?v:1)&&(A=((x=e.minHeight)!==null&&x!==void 0?x:1)-Math.abs(D-H),e.stackMinHeight&&(a[p]=S+A)),{x:T,y0:H,y1:G?D+A:D-A}})),t=k.length-1,d=[...k].reverse(),b=this.g.selectAll(`.${_}`).data(d),h=b.enter().append("path").attr("class",_).attr("d",r=>this._areaGen(r)||this._emptyPath()).style("opacity",0).style("fill",(r,u)=>C(s,e.color,t-u)),y=w(h.merge(b),o).style("opacity",(r,u)=>r.some(v=>v.y0-v.y1!==0)?E(s,e.opacity,t-u):0).style("fill",(r,u)=>C(s,e.color,t-u)).style("cursor",(r,u)=>Y(s,e.cursor,t-u));o?y.attrTween("d",(u,p,v)=>{const x=X(v[p]).attr("d"),T=this._areaGen(u)||this._emptyPath();return O(x,T)}):y.attr("d",r=>this._areaGen(r)||this._emptyPath()),w(b.exit(),o).style("opacity",0).remove(),e.line&&this._renderLines(o,k)}_renderLines(n,e){var s;const{config:o,datamodel:{data:l}}=this,c=e.length-1,i=[...e].reverse(),m=(s=o.lineColor)!==null&&s!==void 0?s:o.color,a=this.g.selectAll(`.${N}`).data(i),k=this.g.selectAll(`.${_}`).nodes(),t=a.enter().insert("path",(h,y)=>k[y+1]).attr("class",N).attr("stroke",(h,y)=>C(l,m,c-y)).attr("stroke-width",o.lineWidth).attr("stroke-opacity",0),d=w(t.merge(a),n).attr("stroke",(h,y)=>C(l,m,c-y)).attr("stroke-width",o.lineWidth).attr("stroke-opacity",1).attr("cursor",(h,y)=>Y(l,o.cursor,c-y)).style("stroke-dasharray",(h,y)=>{var r,u;return(u=(r=U(l,o.lineDashArray,y))===null||r===void 0?void 0:r.join(" "))!==null&&u!==void 0?u:null}),b=B[o.curveType];this._lineGen=z().x(h=>h.x).y(h=>h.y1).curve(b),n?d.attrTween("d",(y,r,u)=>{const p=X(u[r]).attr("d")||this._emptyLinePath(),v=this._lineGen(y)||this._emptyLinePath();return O(p,v)}):d.attr("d",h=>this._lineGen(h)||this._emptyLinePath()),w(a.exit(),n).style("opacity",0).remove()}getYDataExtent(n){const{config:e,datamodel:s}=this,o=F(e.y)?e.y:[e.y],l=this.xScale.domain(),c=n?J(s.data,l,e.x,!0):s.data;return K(c,e.baseline,...o)}_emptyPath(){const n=this.xScale.range(),e=this.yScale.domain(),s=this.yScale((e[0]+e[1])/2),o=s;return this._areaGen([{y0:s,y1:o,x:n[0]},{y0:s,y1:o,x:n[1]}])}_emptyLinePath(){const n=this.xScale.range(),e=this.yScale.range();return`M${n[0]},${e[0]} L${n[1]},${e[0]}`}}P.selectors=be;const Se={"data-vis-component":""},Pe=ce({__name:"index",props:{color:{type:[Function,String,Array,null]},curveType:{},baseline:{type:[Function,Number,null]},opacity:{type:[Function,Number,null]},cursor:{type:[Function,String,null]},minHeight1Px:{type:Boolean},minHeight:{},x:{type:[Function,Number,null]},y:{type:[Function,Number,null,Array]},id:{type:Function},xScale:{type:[Object,Function]},yScale:{type:[Object,Function]},excludeFromDomainCalculation:{type:Boolean},duration:{},events:{},attributes:{},data:{}},setup(f,{expose:n}){const e=ue(Q),s=f,o=pe(()=>e.data.value??s.data),l=Z(s),c=ge();return de(()=>{he(()=>{var i;c.value=new P(l.value),(i=c.value)==null||i.setData(o.value),e.update(c.value)})}),ye(()=>{var i;(i=c.value)==null||i.destroy(),e.destroy()}),R(l,(i,m)=>{var a;ee(i,m)||(a=c.value)==null||a.setConfig(l.value)}),R(o,()=>{var i;(i=c.value)==null||i.setData(o.value)}),n({component:c}),(i,m)=>(fe(),ve("div",Se))}});export{Pe as C};
