(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{rWJG:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){},a=t("zl1X"),o=t("Ip0R"),i=function(){function l(){this.copyStatus=new e.m,this._copyContent=""}return Object.defineProperty(l.prototype,"copyContent",{get:function(){return this._copyContent},set:function(l){this._copyContent=l},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"input",{set:function(l){var n=this;if(l){var t=l.nativeElement;t.value=this.copyContent,t.select();try{document.execCommand("copy"),this.copyStatus.emit(!0),setTimeout(function(){n.copyContent=""})}catch(l){console.error(l),this.copyStatus.emit(!1)}}},enumerable:!0,configurable:!0}),l}(),r=e.Ka({encapsulation:0,styles:[["input[_ngcontent-%COMP%]{position:fixed;right:0;bottom:0;background:0 0;border:none;outline:0;width:1px;-webkit-transform:translateX(100%);transform:translateX(100%)}"]],data:{}});function c(l){return e.gb(0,[(l()(),e.Ma(0,0,[[1,0],["inputToCopy",1]],null,0,"input",[["type","text"]],null,null,null,null,null))],null,null)}function s(l){return e.gb(0,[e.cb(671088640,1,{input:0}),(l()(),e.Ea(16777216,null,null,1,null,c)),e.La(2,16384,null,0,o.n,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.copyContent)},null)}var d=function(){function l(){this.cx=24,this.cy=24,this.radius=20,this.viewBox="0 0 "+2*this.cx+" "+2*this.cy,this.copyContent="",this.activeColor="",this._activeIndex=-1,this.copyOnClick=!1}return Object.defineProperty(l.prototype,"scheme",{get:function(){return this._scheme},set:function(l){this._scheme=l,this.donutHoleRadius=this.radius-8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"activeIndex",{get:function(){return this._activeIndex},set:function(l){this.activeColor=this._scheme.schemeColors[l]?this._scheme.schemeColors[l].hex:"",this._activeIndex=l},enumerable:!0,configurable:!0}),l.prototype.getPath=function(l,n){var t,e,u,a,o;return t=-90+l,e=this.cx+n*Math.cos(-90*Math.PI/180),u=this.cy+n*Math.sin(-90*Math.PI/180),a=this.cx+n*Math.cos(Math.PI*t/180),o=this.cy+n*Math.sin(Math.PI*t/180),"M"+this.cx+","+this.cy+" L"+e+","+u+" A"+n+","+n+" 0 0,1 "+a+","+o+" z"},l.prototype.multiRotate=function(l,n){return"rotate("+l*n+" "+this.cx+" "+this.cy+")"},l.prototype.copyNotificationOnClick=function(){var l=this;this.copyOnClick=!0,setTimeout(function(){l.copyOnClick=!1},1e3)},l}(),h=e.Ka({encapsulation:0,styles:[['[_nghost-%COMP%]{display:block;position:relative;width:100%}[_nghost-%COMP%]:before{content:"";display:block;padding-top:100%}svg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}svg[_ngcontent-%COMP%]   path.clickable-segment[_ngcontent-%COMP%]{cursor:pointer}svg[_ngcontent-%COMP%]   path.bg-segment[_ngcontent-%COMP%]{opacity:0;transition:all .2s ease-in-out}svg[_ngcontent-%COMP%]   path.bg-segment.active[_ngcontent-%COMP%]{opacity:1}svg[_ngcontent-%COMP%]   text.hex-color[_ngcontent-%COMP%]{font-weight:500}svg[_ngcontent-%COMP%]   text.copy-text[_ngcontent-%COMP%]{opacity:0;fill:#555;transition:all .2s ease-in-out}svg[_ngcontent-%COMP%]   text.copy-text.notify[_ngcontent-%COMP%]{opacity:1}']],data:{}});function g(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,0,":svg:path",[["class","bg-segment"]],[[1,"d",0],[1,"cx",0],[1,"cy",0],[1,"fill",0],[2,"active",null],[1,"transform",0]],null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,t.getPath(360/t.scheme.schemeColors.length,21),t.cx,t.cy,n.context.$implicit.hex,n.context.index===t.activeIndex,t.multiRotate(n.context.index,360/t.scheme.schemeColors.length))})}function p(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,0,":svg:path",[["class","clickable-segment"]],[[1,"d",0],[1,"cx",0],[1,"cy",0],[1,"fill",0],[1,"transform",0]],[[null,"mouseover"],[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"mouseover"===n&&(e=!1!==(u.activeIndex=l.context.index)&&e),"click"===n&&(u.activeIndex=l.context.index,u.copyContent=l.context.$implicit.hex,e=!1!==u.copyNotificationOnClick()&&e),e},null,null))],null,function(l,n){var t=n.component;l(n,0,0,t.getPath(360/t.scheme.schemeColors.length,20),t.cx,t.cy,n.context.$implicit.hex,t.multiRotate(n.context.index,360/t.scheme.schemeColors.length))})}function x(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,":svg:text",[["class","hex-color"],["dy","0.75"],["font-size","3"],["text-anchor","middle"]],[[1,"x",0],[1,"y",0]],null,null,null,null)),(l()(),e.eb(1,null,[" "," "]))],null,function(l,n){var t=n.component;l(n,0,0,t.cx,t.cy),l(n,1,0,t.activeColor)})}function m(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,"clipboard-input",[],null,null,null,s,r)),e.La(1,49152,null,0,i,[],{copyContent:[0,"copyContent"]},null),(l()(),e.Ma(2,0,null,null,10,":svg:svg",[["class","donut"],["height","100%"],["width","100%"]],[[1,"viewBox",0]],null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,g)),e.La(4,802816,null,0,o.m,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Ma(5,0,null,null,7,":svg:g",[],null,[[null,"mouseleave"]],function(l,n,t){var e=!0;return"mouseleave"===n&&(e=!1!==(l.component.activeIndex=-1)&&e),e},null,null)),(l()(),e.Ea(16777216,null,null,1,null,p)),e.La(7,802816,null,0,o.m,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Ma(8,0,null,null,0,":svg:circle",[["fill","white"]],[[1,"cx",0],[1,"cy",0],[1,"r",0]],null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,x)),e.La(10,16384,null,0,o.n,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.Ma(11,0,null,null,1,":svg:text",[["class","copy-text"],["dy","5.5"],["font-size","2.8"],["text-anchor","middle"]],[[1,"x",0],[1,"y",0],[2,"notify",null]],null,null,null,null)),(l()(),e.eb(-1,null,[" Copied! "]))],function(l,n){var t=n.component;l(n,1,0,t.copyContent),l(n,4,0,t.scheme.schemeColors),l(n,7,0,t.scheme.schemeColors),l(n,10,0,t.activeIndex>-1)},function(l,n){var t=n.component;l(n,2,0,t.viewBox),l(n,8,0,t.cx,t.cy,t.donutHoleRadius),l(n,11,0,t.cx,t.cy,t.copyOnClick)})}var v=t("+Xo0"),C=t("0G9f"),b=t("KZfJ"),f=function(){function l(){this.palettes=[{type:"Red",colors:[{value:"#F52F22",text:"dark",primary:!0},{value:"#A32100",text:"light"},{value:"#C92100",text:"light"},{value:"#E62700",text:"mid",bulleted:!0},{value:"#F52F22",text:"dark"},{value:"#F54F47",text:"dark"},{value:"#F76F6C",text:"dark"},{value:"#F89997",text:"dark"},{value:"#F8B7B6",text:"dark"},{value:"#F5DBD9",text:"dark"},{value:"#FFF0EE",text:"dark"}]},{type:"Pink",colors:[{value:"#F1428A",text:"dark",primary:!0},{value:"#9B0D54",text:"light"},{value:"#B0105B",text:"light"},{value:"#C41261",text:"light"},{value:"#D91468",text:"light"},{value:"#ED186F",text:"dark"},{value:"#F1428A",text:"dark"},{value:"#F46CA5",text:"dark"},{value:"#F897BF",text:"dark"},{value:"#FBC1DA",text:"dark"},{value:"#FFEBF5",text:"dark"}]},{type:"Purple",colors:[{value:"#781DA0",text:"light",primary:!0},{value:"#4D007A",text:"light"},{value:"#660092",text:"light"},{value:"#781DA0",text:"light"},{value:"#8939AD",text:"light"},{value:"#9B56BB",text:"light"},{value:"#AD73C8",text:"dark"},{value:"#BE90D6",text:"dark"},{value:"#D0ACE4",text:"dark"},{value:"#E1C9F1",text:"dark"},{value:"#F3E6FF",text:"dark"}]},{type:"Ultramarine",colors:[{value:"#343DAC",text:"light",primary:!0},{value:"#0F1E82",text:"light"},{value:"#1A23A0",text:"light"},{value:"#343DAC",text:"light"},{value:"#4E56B8",text:"light"},{value:"#6870C4",text:"dark"},{value:"#838ACF",text:"dark"},{value:"#9DA3DB",text:"dark"},{value:"#B7BDE7",text:"dark"},{value:"#D1D6F3",text:"dark"},{value:"#EBF0FF",text:"dark"}]},{type:"Blue",colors:[{value:"#0065AB",text:"light",primary:!0},{value:"#003D79",text:"light"},{value:"#004D8A",text:"light"},{value:"#0065AB",text:"light"},{value:"#007CBB",text:"mid",bulleted:!0},{value:"#0095D3",text:"dark"},{value:"#49AFD9",text:"dark"},{value:"#89CBDF",text:"dark"},{value:"#A6D8E7",text:"dark"},{value:"#C5E5EF",text:"dark"},{value:"#E1F1F6",text:"dark"}]},{type:"Cyan",colors:[{value:"#00B7D6",text:"dark",primary:!0},{value:"#004A70",text:"light"},{value:"#005680",text:"light"},{value:"#006690",text:"light"},{value:"#0081A7",text:"dark"},{value:"#009CBF",text:"dark"},{value:"#00B7D6",text:"dark"},{value:"#36C9E1",text:"dark"},{value:"#6DDBEB",text:"dark"},{value:"#A3EDF6",text:"dark"},{value:"#CCFBFF",text:"dark"}]},{type:"Teal",colors:[{value:"#00968B",text:"dark",primary:!0},{value:"#006668",text:"light"},{value:"#007E7A",text:"light"},{value:"#00968B",text:"dark"},{value:"#00AB9A",text:"dark"},{value:"#00BFA9",text:"dark"},{value:"#00D4B8",text:"dark"},{value:"#38DFC8",text:"dark"},{value:"#6FEAD9",text:"dark"},{value:"#A7F4E9",text:"dark"},{value:"#DEFFF9",text:"dark"}]},{type:"Green",colors:[{value:"#48960C",text:"dark",primary:!0},{value:"#1D5100",text:"light"},{value:"#266900",text:"light"},{value:"#318700",text:"mid",bulleted:!0},{value:"#48960C",text:"dark"},{value:"#62A420",text:"dark"},{value:"#60B515",text:"dark"},{value:"#85C81A",text:"dark"},{value:"#AADB1E",text:"dark"},{value:"#C7E59C",text:"dark"},{value:"#DFF0D0",text:"dark"}]},{type:"Yellow",colors:[{value:"#FFDC0B",text:"dark",primary:!0},{value:"#C47D00",text:"dark"},{value:"#D28F00",text:"dark"},{value:"#DFA100",text:"dark"},{value:"#EDB200",text:"dark"},{value:"#FAC400",text:"dark"},{value:"#FDD006",text:"dark"},{value:"#FFDC0B",text:"dark"},{value:"#FFE860",text:"dark"},{value:"#FEF3B5",text:"dark"},{value:"#FFFCE8",text:"dark"}]},{type:"Orange",colors:[{value:"#F57600",text:"dark",primary:!0},{value:"#AA4500",text:"light"},{value:"#C25400",text:"mid"},{value:"#D36000",text:"dark"},{value:"#E46C00",text:"dark"},{value:"#F57600",text:"dark"},{value:"#FF8400",text:"dark"},{value:"#FF9C32",text:"dark"},{value:"#FFB565",text:"dark"},{value:"#FFCD97",text:"dark"},{value:"#FFE5C9",text:"dark"}]},{type:"Red-orange",colors:[{value:"#EE4A08",text:"dark",primary:!0},{value:"#CD3517",text:"light"},{value:"#DE400F",text:"dark"},{value:"#EE4A08",text:"dark"},{value:"#FF5500",text:"dark"},{value:"#FF681C",text:"dark"},{value:"#FF8142",text:"dark"},{value:"#FF9A69",text:"dark"},{value:"#FFB38F",text:"dark"},{value:"#FFCCB5",text:"dark"},{value:"#FFE5DC",text:"dark"}]},{type:"Warm-grey",colors:[{value:"#80746D",text:"light",primary:!0},{value:"#5B4D47",text:"light"},{value:"#6C5F59",text:"light"},{value:"#80746D",text:"mid"},{value:"#948981",text:"dark"},{value:"#A89E95",text:"dark"},{value:"#BBB3A9",text:"dark"},{value:"#CFC8BD",text:"dark"},{value:"#E3DDD1",text:"dark"},{value:"#F4F1E6",text:"dark"},{value:"#FAF9F5",text:"dark"}]},{type:"Neutral-grey",colors:[{value:"#737373",text:"light",primary:!0},{value:"#313131",text:"light"},{value:"#444444",text:"light"},{value:"#565656",text:"light",bulleted:!0},{value:"#737373",text:"light"},{value:"#9A9A9A",text:"dark"},{value:"#CCCCCC",text:"dark"},{value:"#DDDDDD",text:"dark"},{value:"#EEEEEE",text:"dark"},{value:"#F2F2F2",text:"dark"},{value:"#FAFAFA",text:"dark",bulleted:!0}]},{type:"Cool-grey",colors:[{value:"#61717D",text:"light",primary:!0},{value:"#25333D",text:"light"},{value:"#314351",text:"light"},{value:"#495A67",text:"light"},{value:"#61717D",text:"light"},{value:"#798893",text:"dark"},{value:"#919FA8",text:"dark"},{value:"#A9B6BE",text:"dark"},{value:"#C1CDD4",text:"dark"},{value:"#D9E4EA",text:"dark",bulleted:!0},{value:"#F3F6FA",text:"dark"}]},{type:"Black-white",colors:[{value:"#000000",text:"light"},{value:"#FFFFFF",text:"dark"}]}]}return l.prototype.copyNotificationOnClick=function(l){l.copied=!0,setTimeout(function(){delete l.copied},1e3)},l}(),M=e.Ka({encapsulation:0,styles:[[".card-block[_ngcontent-%COMP%]{padding-bottom:0;overflow:hidden;padding-left:0;padding-right:0}li.card-swatch[_ngcontent-%COMP%]{background:#ccc;color:#000;margin:0;padding:.25rem .5rem;font-size:16px;list-style:none}li.card-swatch.upsize[_ngcontent-%COMP%]{padding-bottom:2rem}li.card-swatch.primary[_ngcontent-%COMP%]{padding-bottom:2rem;margin-bottom:.125rem}li.card-swatch[_ngcontent-%COMP%]   .card-swatch-content[_ngcontent-%COMP%]{display:flex;flex-grow:1;justify-content:flex-start;align-items:center}li.card-swatch[_ngcontent-%COMP%]   .card-swatch-content[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%]{color:currentColor;padding:0;font-size:1.2em}li.card-swatch[_ngcontent-%COMP%]   .card-swatch-content[_ngcontent-%COMP%]   .hex-contrast[_ngcontent-%COMP%]{color:#000}li.card-swatch[_ngcontent-%COMP%]   .card-swatch-content[_ngcontent-%COMP%]   .rgb-value[_ngcontent-%COMP%]{margin-left:auto;font-size:.9em}li.card-swatch[_ngcontent-%COMP%]   .card-swatch-content[_ngcontent-%COMP%]   .rgb-value[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%]{margin:0 3px;opacity:0;transition:all .2s ease-in-out}li.card-swatch[_ngcontent-%COMP%]   .card-swatch-content[_ngcontent-%COMP%]   .rgb-value[_ngcontent-%COMP%]   .copied-indication[_ngcontent-%COMP%]{display:inline-block;-webkit-transform:translateX(-24px);transform:translateX(-24px);opacity:0;transition:all .2s ease-in-out}li.card-swatch[_ngcontent-%COMP%]:not(.dark-text){color:#fff}li.card-swatch[_ngcontent-%COMP%]:not(:first-child){cursor:pointer}li.card-swatch[_ngcontent-%COMP%]:not(:first-child):hover   .card-swatch-content[_ngcontent-%COMP%]   .rgb-value[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%]{opacity:1}li.card-swatch.copied[_ngcontent-%COMP%]   .card-swatch-content[_ngcontent-%COMP%]   .rgb-value[_ngcontent-%COMP%]   .copied-indication[_ngcontent-%COMP%]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.card-swatch-block[_ngcontent-%COMP%]{padding:0;box-shadow:none;border:none}.card-swatch-divider[_ngcontent-%COMP%]{height:.5rem}"]],data:{}});function y(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.eb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.parent.context.$implicit.type)})}function F(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,"span",[["class","bullet"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["\u2022"]))],null,null)}function k(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,"span",[["class","hex-contrast"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["A"]))],null,null)}function D(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,F)),e.La(2,16384,null,0,o.n,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.Ma(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["A"])),(l()(),e.Ea(16777216,null,null,1,null,k)),e.La(6,16384,null,0,o.n,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.parent.context.$implicit.bulleted),l(n,6,0,"mid"===n.parent.context.$implicit.text)},null)}function O(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,12,"li",[["class","card-swatch"]],[[4,"background-color",null],[2,"dark-text",null],[2,"primary",null],[2,"upsize",null],[2,"copied",null]],[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(u.copyNotificationOnClick(l.context.$implicit),e=!1!==(u.copyContent=l.context.$implicit.value)&&e),e},null,null)),(l()(),e.Ma(1,0,null,null,11,"div",[["class","card-swatch-content"]],null,null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,y)),e.La(3,16384,null,0,o.n,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.Ea(16777216,null,null,1,null,D)),e.La(5,16384,null,0,o.n,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.Ma(6,0,null,null,6,"div",[["class","rgb-value"]],null,null,null,null,null)),(l()(),e.Ma(7,0,null,null,1,"span",[["class","copied-indication"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Copied!"])),(l()(),e.Ma(9,0,null,null,1,"clr-icon",[["shape","copy"]],null,null,null,null,null)),e.La(10,16384,null,0,b.Ba,[],null,null),(l()(),e.eb(11,null,[" ",""])),e.ab(12,1)],function(l,n){l(n,3,0,n.context.$implicit.primary),l(n,5,0,!n.context.$implicit.primary)},function(l,n){l(n,0,0,n.context.$implicit.value,"dark"===n.context.$implicit.text,n.context.$implicit.primary,n.context.$implicit.corePalette,n.context.$implicit.copied),l(n,11,0,e.fb(n,11,0,l(n,12,0,e.Wa(n.parent.parent,0),n.context.$implicit.value)))})}function w(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,3,"div",[["class","col-sm-6 col-md-4 col-xs-12"]],null,null,null,null,null)),(l()(),e.Ma(1,0,null,null,2,"ul",[["class","card card-block card-swatch-block"]],null,null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,O)),e.La(3,802816,null,0,o.m,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.context.$implicit.colors)},null)}function A(l){return e.gb(0,[e.Ya(0,o.x,[]),(l()(),e.Ma(1,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(2,0,null,null,1,"clipboard-input",[],null,null,null,s,r)),e.La(3,49152,null,0,i,[],{copyContent:[0,"copyContent"]},null),(l()(),e.Ea(16777216,null,null,1,null,w)),e.La(5,802816,null,0,o.m,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,t.copyContent),l(n,5,0,t.palettes)},null)}var _=t("mrSG"),P=function(l){function n(){var n=l.call(this,"color")||this;return n.monochromeNeutralSchemes=[{schemeColors:[{hex:"#25333D"},{hex:"#A6D8E7"},{hex:"#798893"},{hex:"#49AFD9"},{hex:"#C1CDD4"},{hex:"#0065AB"}]},{schemeColors:[{hex:"#798893"},{hex:"#495A67"},{hex:"#FFCCB5"},{hex:"#C1CDD4"},{hex:"#FF8142"},{hex:"#CD3517"}]},{schemeColors:[{hex:"#61717D"},{hex:"#C7E59C"},{hex:"#318700"},{hex:"#1D5100"},{hex:"#C1CDD4"},{hex:"#85C81A"}]},{schemeColors:[{hex:"#C1CDD4"},{hex:"#4D007A"},{hex:"#AC75C6"},{hex:"#61717D"},{hex:"#D0ACE4"},{hex:"#8939AD"}]},{schemeColors:[{hex:"#00D4B8"},{hex:"#CCCCCC"},{hex:"#007E7A"},{hex:"#9A9A9A"},{hex:"#747474"},{hex:"#6FEAD9"}]},{schemeColors:[{hex:"#CCCCCC"},{hex:"#4E56B8"},{hex:"#B7BDE7"},{hex:"#444444"},{hex:"#838ACF"},{hex:"#0F1E82"}]}],n.multicolorSchemes=[{schemeColors:[{hex:"#314351"},{hex:"#9B56BB"},{hex:"#A3EDF6"},{hex:"#00B7D6"},{hex:"#61717D"},{hex:"#006690"}]},{schemeColors:[{hex:"#FF5500"},{hex:"#0094D3"},{hex:"#0065AB"},{hex:"#FFB38F"},{hex:"#003D79"},{hex:"#A6D8E7"}]},{schemeColors:[{hex:"#919FA8"},{hex:"#85C81A"},{hex:"#0095D3"},{hex:"#C1CDD4"},{hex:"#48960C"},{hex:"#004D8A"}]},{schemeColors:[{hex:"#FF681C"},{hex:"#314351"},{hex:"#00968B"},{hex:"#FFB38F"},{hex:"#C1CDD4"},{hex:"#00BFA9"}]},{schemeColors:[{hex:"#00BFA9"},{hex:"#80746D"},{hex:"#6FEAD9"},{hex:"#BBB3A9"},{hex:"#0F1E82"},{hex:"#6870C4"}]},{schemeColors:[{hex:"#FF5500"},{hex:"#80746D"},{hex:"#FF9A69"},{hex:"#CFC8BD"},{hex:"#0F1E82"},{hex:"#6870C4"}]}],n}return Object(_.b)(n,l),n}(t("N+3j").a),E=e.Ka({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{width:100%;margin:.75rem 0 0}.svg-color-scheme-container[_ngcontent-%COMP%]{width:100%;padding:.75rem}.no-margin[_ngcontent-%COMP%]{margin:0}.top-margin-12[_ngcontent-%COMP%]{margin:.5rem 0 0}.top-margin-18[_ngcontent-%COMP%]{margin:.75rem 0 0}.top-margin-36[_ngcontent-%COMP%]{margin:1.5rem 0 0}.vertical-padding-12[_ngcontent-%COMP%]{padding:.5rem 0}.vertical-padding-18[_ngcontent-%COMP%]{padding:.75rem 0}figure[_ngcontent-%COMP%]{margin:0}figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{border-top:.25rem solid currentColor;padding:.125rem 0}figure[_ngcontent-%COMP%]   figcaption.do[_ngcontent-%COMP%]{color:#318700}figure[_ngcontent-%COMP%]   figcaption.dont[_ngcontent-%COMP%]{color:#e62700}"]],data:{}});function B(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,3,"div",[["class","col-xs-12 col-sm-6 col-md-4"]],null,null,null,null,null)),(l()(),e.Ma(1,0,null,null,2,"div",[["class","svg-color-scheme-container"]],null,null,null,null,null)),(l()(),e.Ma(2,0,null,null,1,"clr-color-scheme",[],null,null,null,m,h)),e.La(3,49152,null,0,d,[],{scheme:[0,"scheme"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},null)}function U(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,3,"div",[["class","col-xs-12 col-sm-6 col-md-4"]],null,null,null,null,null)),(l()(),e.Ma(1,0,null,null,2,"div",[["class","svg-color-scheme-container"]],null,null,null,null,null)),(l()(),e.Ma(2,0,null,null,1,"clr-color-scheme",[],null,null,null,m,h)),e.La(3,49152,null,0,d,[],{scheme:[0,"scheme"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},null)}function L(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,132,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,v.b,v.a)),e.La(1,49152,null,0,C.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.Ma(2,0,null,0,130,"article",[],null,null,null,null,null)),(l()(),e.Ma(3,0,null,null,1,"h5",[["class","component-summary"],["id","the-clarity-color-palette-is-primarily-based-on-alignment-with-color-use-in-web-applications-and-support-for-accessibility"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" The Clarity color palette is a full spectrum of bold hues and neutrals to meet all your design needs. "])),(l()(),e.Ma(5,0,null,null,127,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.Ma(6,0,null,null,1,"h3",[["id","color-palette"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["The Clarity Color Palette"])),(l()(),e.Ma(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["The Clarity color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for Clarity. Text colors displayed in light or dark tints represent Clarity's recommended accessible pairing with the color."])),(l()(),e.Ma(10,0,null,null,1,"h4",[["class","top-margin-36"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Base, Primary and Secondary Colors"])),(l()(),e.Ma(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["The bulleted color swatches indicate colors that are part of the Clarity base color palette. You will find these colors in use throughout Clarity's components and design recommendations."])),(l()(),e.Ma(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["The large color swatches represent Clarity primary colors, recommended for use as the main color for your design. The remaining colors are considered secondary. They may be used for charts, graphs, illustrations and other areas that call for color accent."])),(l()(),e.Ma(16,0,null,null,1,"clr-color-palette",[],null,null,null,A,M)),e.La(17,49152,null,0,f,[],null,null),(l()(),e.Ma(18,0,null,null,1,"h3",[["id","guidelines"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Color Usage"])),(l()(),e.Ma(20,0,null,null,1,"h4",[["class","top-margin-36"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Base Colors"])),(l()(),e.Ma(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Colors used in Clarity's components and design recommendations."])),(l()(),e.Ma(24,0,null,null,6,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.Ma(25,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Neutral colors are for text and backgrounds."])),(l()(),e.Ma(27,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Action colors are for clickable items, such as buttons and links. Action Blue is reserved for buttons and links. "])),(l()(),e.Ma(29,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Stoplight colors are for indicating error conditions, warnings, and successes. Significant colors include: Stoplight Green for positive actions; Stoplight Red for warnings and errors. "])),(l()(),e.Ma(31,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Choosing Colors"])),(l()(),e.Ma(33,0,null,null,1,"h4",[["class","top-margin-36"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Text Contrast"])),(l()(),e.Ma(35,0,null,null,1,"p",[["class","top-margin-18"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Each color swatch in the palette is labeled with a black or white letter A to indicate its accessibility on the background color. Other text colors should be tested for contrast using an online contrast checker to make sure it passes the WCAG AA requirement for accessibility."])),(l()(),e.Ma(37,0,null,null,1,"h4",[["class","top-margin-36"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Charting Colors"])),(l()(),e.Ma(39,0,null,null,1,"p",[["class","top-margin-18"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["The large secondary palette allows for distinguishable markers in charts and graphs. With charts, it\u2019s important to choose colors that have clear contrast for easy readability. The more colors that are used, the harder it is to distinguish each marker. For this reason, we recommend a maximum of six colors per chart."])),(l()(),e.Ma(41,0,null,null,1,"h4",[["class","top-margin-36"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Colorblind Accessibility"])),(l()(),e.Ma(43,0,null,null,1,"p",[["class","top-margin-18"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["It\u2019s a good idea to test the color scheme you plan to use with a colorblind simulation app, such as Color Oracle. Alternatively, Adobe Photoshop and Illustrator come with a colorblind proofing view. You can use the simulation to adjust your color combinations to be accessible. In the example below, the image on right simulates how a person with colorblindness (Deuteranopia) would see the image on the left."])),(l()(),e.Ma(45,0,null,null,5,"section",[["class","vertical-padding-12"]],null,null,null,null,null)),(l()(),e.Ma(46,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(47,0,null,null,1,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e.Ma(48,0,null,null,0,"img",[["alt","Normal vision"],["src","assets/images/documentation/color/normal_vision_donut.png"]],null,null,null,null,null)),(l()(),e.Ma(49,0,null,null,1,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e.Ma(50,0,null,null,0,"img",[["alt","Colorblind simulation"],["src","assets/images/documentation/color/colorblind_simulation_donut.png"]],null,null,null,null,null)),(l()(),e.Ma(51,0,null,null,6,"section",[["class","vertical-padding-12"]],null,null,null,null,null)),(l()(),e.Ma(52,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(53,0,null,null,2,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(54,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Some examples of color pairs that are difficult to distinguish for those with colorblindness: "])),(l()(),e.Ma(56,0,null,null,1,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(57,0,null,null,0,"img",[["alt","difficult color pairs for colorblindness"],["src","assets/images/documentation/color/difficult_color_pairs_for_colorblindness.png"]],null,null,null,null,null)),(l()(),e.Ma(58,0,null,null,13,"section",[["class","vertical-padding-18"]],null,null,null,null,null)),(l()(),e.Ma(59,0,null,null,1,"p",[["class","top-margin-12"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["If these combinations can\u2019t be avoided, leverage use of light and dark values. For instance, Red and green both appear as brown to someone with red-green colorblindness. But a light green paired with a dark red would be distinguishable in value."])),(l()(),e.Ma(61,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(62,0,null,null,4,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e.Ma(63,0,null,null,3,"figure",[],null,null,null,null,null)),(l()(),e.Ma(64,0,null,null,0,"img",[["alt","Do"],["src","assets/images/documentation/color/red_green_do.png"]],null,null,null,null,null)),(l()(),e.Ma(65,0,null,null,1,"figcaption",[["class","do"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Do"])),(l()(),e.Ma(67,0,null,null,4,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e.Ma(68,0,null,null,3,"figure",[],null,null,null,null,null)),(l()(),e.Ma(69,0,null,null,0,"img",[["alt","Don't"],["src","assets/images/documentation/color/red_green_dont.png"]],null,null,null,null,null)),(l()(),e.Ma(70,0,null,null,1,"figcaption",[["class","dont"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Don't"])),(l()(),e.Ma(72,0,null,null,20,"section",[["class","vertical-padding-18"]],null,null,null,null,null)),(l()(),e.Ma(73,0,null,null,1,"p",[["class","top-margin-12"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Using light and dark values also helps in showing a clear division between fields. Follow a pattern of alternating placement of light and dark colors. A simple way to ensure sufficient contrast is to use a palette that is monochromatic."])),(l()(),e.Ma(75,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(76,0,null,null,4,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e.Ma(77,0,null,null,3,"figure",[],null,null,null,null,null)),(l()(),e.Ma(78,0,null,null,0,"img",[["alt","Do"],["src","assets/images/documentation/color/light_dark_do.png"]],null,null,null,null,null)),(l()(),e.Ma(79,0,null,null,1,"figcaption",[["class","do"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Do"])),(l()(),e.Ma(81,0,null,null,4,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e.Ma(82,0,null,null,3,"figure",[],null,null,null,null,null)),(l()(),e.Ma(83,0,null,null,0,"img",[["alt","Don't"],["src","assets/images/documentation/color/light_light_dont.png"]],null,null,null,null,null)),(l()(),e.Ma(84,0,null,null,1,"figcaption",[["class","dont"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Don't"])),(l()(),e.Ma(86,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(87,0,null,null,2,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(88,0,null,null,1,"p",[["class","p1 no-margin"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Create contrast by using a range of light and dark values."])),(l()(),e.Ma(90,0,null,null,2,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(91,0,null,null,1,"p",[["class","p1 no-margin"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Use a palette with colors of similar values and saturation levels."])),(l()(),e.Ma(93,0,null,null,1,"h4",[["class","top-margin-36"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Basic Tips"])),(l()(),e.Ma(95,0,null,null,1,"p",[["class","vertical-padding-12 no-margin"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Avoid the temptation to use color as decoration. Colors should be used meaningfully to support the purpose of the chart."])),(l()(),e.Ma(97,0,null,null,14,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.Ma(98,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["A monochromatic palette is a great place to start. It ensures contrast in values and doesn\u2019t distract the user with a clashing color combination. If more colors are needed add a neutral or almost neutral scale. "])),(l()(),e.Ma(100,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["When using multiple colors, select one as a main color, then choose some supporting colors-complementaries, analogous or neutrals. "])),(l()(),e.Ma(102,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Complementary combinations such as blue and orange or yellow and purple work well together aesthetically. Analogous colors - colors next to each other on the color wheel - such as blue and green also look nice. "])),(l()(),e.Ma(104,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Test your colors for accessibility with a colorblind simulator."])),(l()(),e.Ma(106,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Test your text and background color for accessibility with an online contrast checker."])),(l()(),e.Ma(108,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Avoid using your project\u2019s primary color or Clarity base colors in charts or graphics, e.g., the blue bars in your bar chart should not be the same blue as the primary buttons. "])),(l()(),e.Ma(110,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Optional: Choose a palette from the color scheme examples."])),(l()(),e.Ma(112,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Color Scheme Examples for Charts"])),(l()(),e.Ma(114,0,null,null,1,"p",[["class","top-margin-18"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["These color schemes are designed to address contrast and colorblind accessibility. Feel free to use them just as they are or as a starting point for a customized palette."])),(l()(),e.Ma(116,0,null,null,1,"h4",[["class","top-margin-12 vertical-padding-18"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Click color to display hex number"])),(l()(),e.Ma(118,0,null,null,1,"h5",[["class","no-margin vertical-padding-12"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Monochrome + neutral"])),(l()(),e.Ma(120,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,B)),e.La(122,802816,null,0,o.m,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Ma(123,0,null,null,1,"h5",[["class","no-margin vertical-padding-12"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Multicolor"])),(l()(),e.Ma(125,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,U)),e.La(127,802816,null,0,o.m,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Ma(128,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Charting Example"])),(l()(),e.Ma(130,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(131,0,null,null,1,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e.Ma(132,0,null,null,0,"img",[["alt","Charting Example"],["src","assets/images/documentation/color/charting_example.png"]],null,null,null,null,null))],function(l,n){var t=n.component;l(n,1,0,t.title,t.newLayout,t.ui,t.ng),l(n,122,0,t.monochromeNeutralSchemes),l(n,127,0,t.multicolorSchemes)},function(l,n){l(n,0,0,!0)})}var I=e.Ia("clr-color-demo",P,function(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,"clr-color-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,L,E)),e.La(1,49152,null,0,P,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),T=t("gIcY"),$=t("ZYCi"),j=t("XPsC"),S=t("JsA7");t.d(n,"ColorDemoModuleNgFactory",function(){return N});var N=e.Ja(u,[],function(l){return e.Ta([e.Ua(512,e.j,e.Z,[[8,[a.yb,a.b,a.xb,I]],[3,e.j],e.v]),e.Ua(4608,o.p,o.o,[e.s,[2,o.G]]),e.Ua(4608,b.Ub,b.Ub,[]),e.Ua(4608,T.z,T.z,[]),e.Ua(5120,b.Vc,b.Wc,[[3,b.Vc]]),e.Ua(1073742336,o.b,o.b,[]),e.Ua(1073742336,b.Ca,b.Ca,[]),e.Ua(1073742336,b.Vb,b.Vb,[]),e.Ua(1073742336,b.ud,b.ud,[]),e.Ua(1073742336,b.U,b.U,[]),e.Ua(1073742336,b.d,b.d,[]),e.Ua(1073742336,b.W,b.W,[]),e.Ua(1073742336,b.n,b.n,[]),e.Ua(1073742336,b.Cd,b.Cd,[]),e.Ua(1073742336,b.Ed,b.Ed,[]),e.Ua(1073742336,b.N,b.N,[]),e.Ua(1073742336,b.Y,b.Y,[]),e.Ua(1073742336,T.w,T.w,[]),e.Ua(1073742336,T.j,T.j,[]),e.Ua(1073742336,b.La,b.La,[]),e.Ua(1073742336,b.cc,b.cc,[]),e.Ua(1073742336,b.Mc,b.Mc,[]),e.Ua(1073742336,b.F,b.F,[]),e.Ua(1073742336,b.hb,b.hb,[]),e.Ua(1073742336,b.xb,b.xb,[]),e.Ua(1073742336,b.u,b.u,[]),e.Ua(1073742336,b.Qa,b.Qa,[]),e.Ua(1073742336,b.Ka,b.Ka,[]),e.Ua(1073742336,b.i,b.i,[]),e.Ua(1073742336,b.j,b.j,[]),e.Ua(1073742336,b.ib,b.ib,[]),e.Ua(1073742336,b.q,b.q,[]),e.Ua(1073742336,b.Oa,b.Oa,[]),e.Ua(1073742336,b.Ta,b.Ta,[]),e.Ua(1073742336,b.Xc,b.Xc,[]),e.Ua(1073742336,b.ob,b.ob,[]),e.Ua(1073742336,b.Db,b.Db,[]),e.Ua(1073742336,b.Ha,b.Ha,[]),e.Ua(1073742336,b.Za,b.Za,[]),e.Ua(1073742336,b.ub,b.ub,[]),e.Ua(1073742336,b.Ua,b.Ua,[]),e.Ua(1073742336,b.Ib,b.Ib,[]),e.Ua(1073742336,b.a,b.a,[]),e.Ua(1073742336,$.o,$.o,[[2,$.t],[2,$.l]]),e.Ua(1073742336,j.a,j.a,[]),e.Ua(1073742336,S.a,S.a,[]),e.Ua(1073742336,u,u,[]),e.Ua(1024,$.j,function(){return[[{path:"",component:P}]]},[])])})}}]);