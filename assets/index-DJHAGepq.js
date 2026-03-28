import{O as $,c as D,i as R,a as T,g as S,m as G,b as z,d as A,f as P,s as x,h as B,j as X,H as L,I as Y,l as q,n as I,z as U,A as J,B as K}from"./index-CzteL_kS.js";import{X as Q,a as Z,c as tt,r as at,D as y}from"./index-yU_r69CV.js";import{r as et}from"./path-BYvMW87q.js";import{d as rt,i as st,j as ot,n as it,k as nt,w,o as ct,z as lt,c as dt,r as ut}from"./DialogTitle.vue_vue_type_script_setup_true_lang-BO6eI9T0.js";const ht=Object.assign(Object.assign({},Q),{color:void 0,groupMaxWidth:void 0,groupWidth:void 0,dataStep:void 0,groupPadding:.05,barPadding:0,roundedCorners:2,barMinHeight:2,cursor:null,orientation:$.Vertical}),O=D`
  label: grouped-bar-component;
`,gt=R`
  :root {
    --vis-grouped-bar-cursor: default;
    --vis-grouped-bar-fill-color: var(--vis-color-main);
    --vis-grouped-bar-stroke-color: none;
    --vis-grouped-bar-stroke-width: 0px;
    --vis-grouped-bar-hover-stroke-width: 1px;
    --vis-grouped-bar-hover-stroke-color: none;


    /* Dark Theme */
    --vis-dark-grouped-bar-stroke-color: none;
  }

  body.theme-dark ${`.${O}`} {
    --vis-grouped-bar-stroke-color: var(--vis-dark-grouped-bar-stroke-color);
  }
`,V=D`
  label: bar;
  fill: var(--vis-grouped-bar-fill-color);
  stroke: var(--vis-grouped-bar-stroke-color);
  stroke-width: var(--vis-grouped-bar-stroke-width);
  cursor: var(--vis-grouped-bar-cursor);

  &:hover {
    stroke-width: var(--vis-grouped-bar-hover-stroke-width);
    stroke: var(--vis-grouped-bar-hover-stroke-color);
  }
`,M=D`
  label: barGroup;
`,j=D`
  label: barGroupExit;
`,pt=Object.freeze(Object.defineProperty({__proto__:null,bar:V,barGroup:M,barGroupExit:j,globalStyles:gt,root:O},Symbol.toStringTag,{value:"Module"}));class F extends Z{constructor(a){super(),this._defaultConfig=ht,this.config=this._defaultConfig,this.getAccessors=()=>T(this.config.y)?this.config.y:[this.config.y],this.events={},this._barData=[],a&&this.setConfig(a)}get bleed(){if(this._barData=this._getVisibleData(),this._barData.length===0)return{top:0,bottom:0,left:0,right:0};const a=!this.isVertical()&&this.dataScale.range()[0]>this.dataScale.range()[1],t=this.dataScale.domain(),e=this._getGroupWidth()/2,r=this._barData.map((b,v)=>S(b,this.config.x,v)),i=G(r),s=z(r),o=this.dataScale(i),d=this.dataScale(s),u=this.dataScale.invert(o+(a?e:-e)),h=this.dataScale.invert(d+(a?-e:e)),c=u<=t[0]?this.dataScale(t[0])-this.dataScale(u):0,g=h>t[1]?this.dataScale(h)-this.dataScale(t[1]):0;return{top:this.isVertical()?0:a?-g:c,bottom:this.isVertical()?0:a?-c:g,left:this.isVertical()?c:0,right:this.isVertical()?g:0}}get dataScale(){return this.isVertical()?this.xScale:this.yScale}get valueScale(){return this.isVertical()?this.yScale:this.xScale}isVertical(){return this.config.orientation===$.Vertical}_render(a){const{config:t}=this,e=A(a)?a:t.duration,r=this._getGroupWidth(),i=this.getAccessors(),s=[-r/2,r/2],o=tt().domain(at(i.length)).range(s).paddingInner(t.barPadding).paddingOuter(t.barPadding),d=this.g.selectAll(`.${M}`).data(this._barData,(l,n)=>{var p;return`${(p=P(l,t.id,n))!==null&&p!==void 0?p:n}`}),u=(l,n)=>{const p=this.dataScale(S(l,t.x,n)),f=this.isVertical()?p:0,m=this.isVertical()?0:p;return`translate(${f},${m})`},c=d.enter().append("g").attr("class",M).attr("transform",u).style("opacity",1).merge(d);x(c,e).attr("transform",u).style("opacity",1);const g=d.exit().attr("class",j);x(g,e).style("opacity",0).remove(),x(g.selectAll(`.${V}`),e).attr("transform",(l,n,p)=>this.isVertical()?`translate(0,${this.yScale(0)}) scale(1,0)`:`translate(${this.xScale(0)},0) scale(0,1)`);const b=o.bandwidth(),v=c.selectAll(`.${V}`).data(l=>i.map(()=>l)),_=this._getValueAxisDirection(),H=v.enter().append("path").attr("class",V).attr("d",(l,n)=>{const p=o(n),f=this.valueScale(0),m=b;return this._getBarPath(p,f,m,0,!1,_)}).style("fill",(l,n)=>B(l,t.color,n)).merge(v);x(H,e).attr("d",(l,n)=>{const p=o(n),f=b,m=S(l,i[n]),k=m<0;let C=k?this.valueScale(0):this.valueScale(m||0),E=Math.abs(this.valueScale(0)-this.valueScale(m))||0;if(E<t.barMinHeight){const N=_===y.North?-1:1;C=this.valueScale(0)+N*t.barMinHeight,E=t.barMinHeight}return this._getBarPath(p,C,f,E,k,_)}).style("fill",(l,n)=>B(l,t.color,n)).style("cursor",(l,n)=>P(l,t.cursor,n)),x(v.exit(),e).remove()}_getValueAxisDirection(){return this.valueScale.range()[0]>this.valueScale.range()[1]?y.North:y.South}_getVisibleData(){const{config:a,datamodel:{data:t}}=this,e=this._getGroupWidth(),r=t.length<2?0:e/2,i=this.dataScale,s=Math.abs(i.invert(r)-i.invert(0));return t?.filter((d,u)=>{const h=S(d,a.x,u),c=i.domain(),g=+c[0],b=+c[1];return h>=g-s&&h<=b+s})}_getBarPath(a,t,e,r,i,s){const{config:o}=this,d=o.roundedCorners?A(o.roundedCorners)?+o.roundedCorners:e/2:0,u=I(d,0,Math.min(r,e)/2),h=s===y.North,c=this.isVertical()&&i!==h,g=this.isVertical()&&i===h,b=!this.isVertical()&&i,v=!this.isVertical()&&!i;return et({x:this.isVertical()?a:t+(h?0:-r),y:this.isVertical()?t+(h?0:-r):a,w:this.isVertical()?e:r,h:this.isVertical()?r:e,tl:c||b,tr:c||v,bl:g||b,br:g||v,r:u})}_getGroupWidth(){const{config:a,datamodel:{data:t}}=this;if(X(t))return 0;if(a.groupWidth)return G([a.groupWidth,a.groupMaxWidth]);const e=this.dataScale.bandwidth,r=this.dataScale.domain?this.dataScale.domain():[];let s=1+(e?r.length:r[1]-r[0])/a.dataStep||!e&&t.filter((u,h)=>{const c=S(u,a.x,h);return c>=r[0]&&c<=r[1]}).length||t.length;!e&&s>=2&&(s+=1);const d=(s<2?1:1-a.groupPadding)*(this.isVertical()?this._width:this._height)/s;return G([d,a.groupMaxWidth])}getValueScaleExtent(a){const{datamodel:t}=this,e=this.getAccessors(),r=a?this._getVisibleData():t.data,i=L(r,...e),s=Y(r,...e);return[i>0?0:i,s<0?0:s]}getDataScaleExtent(){const{config:a,datamodel:t}=this;return q(t.data,a.x)}getYDataExtent(a){return this.isVertical()?this.getValueScaleExtent(a):this.getDataScaleExtent()}getXDataExtent(){return this.isVertical()?this.getDataScaleExtent():this.getValueScaleExtent(!1)}}F.selectors=pt;const bt={"data-vis-component":""},yt=rt({__name:"index",props:{color:{type:[Function,String,Array,null]},groupWidth:{},groupMaxWidth:{},dataStep:{},groupPadding:{},barPadding:{},roundedCorners:{type:[Number,Boolean]},barMinHeight:{},cursor:{type:[Function,String,null]},orientation:{},x:{type:[Function,Number,null]},y:{type:[Function,Number,null,Array]},id:{type:Function},xScale:{type:[Object,Function]},yScale:{type:[Object,Function]},excludeFromDomainCalculation:{type:Boolean},duration:{},events:{},attributes:{},data:{}},setup(W,{expose:a}){const t=st(U),e=W,r=dt(()=>t.data.value??e.data),i=J(e),s=ut();return ot(()=>{it(()=>{var o;s.value=new F(i.value),(o=s.value)==null||o.setData(r.value),t.update(s.value)})}),nt(()=>{var o;(o=s.value)==null||o.destroy(),t.destroy()}),w(i,(o,d)=>{var u;K(o,d)||(u=s.value)==null||u.setConfig(i.value)}),w(r,()=>{var o;(o=s.value)==null||o.setData(r.value)}),a({component:s}),(o,d)=>(ct(),lt("div",bt))}});export{yt as A};
