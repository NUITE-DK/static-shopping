(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6150"],{"96da":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("作用域插槽")]),o("List",{attrs:{todos:t.todos},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.todo,l=e.$index;return[o("h1",{style:{color:n.isComplete?"red":"cyan"}},[t._v(t._s(n.text)+"----"+t._s(l))])]}}])})],1)},l=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",t._l(t.todos,(function(e,n){return o("li",{key:e.id},[t._t("default",null,{todo:e,$index:n})],2)})),0)},i=[],r={name:"List",props:{todos:Array}},u=r,d=o("2877"),a=Object(d["a"])(u,s,i,!1,null,null,null),c=a.exports,p={name:"ScopeSlotTest",data:function(){return{todos:[{id:1,text:"AAA",isComplete:!1},{id:2,text:"BBB",isComplete:!0},{id:3,text:"CCC",isComplete:!1},{id:4,text:"DDD",isComplete:!1}]}},components:{List:c}},f=p,_=Object(d["a"])(f,n,l,!1,null,null,null);e["default"]=_.exports}}]);