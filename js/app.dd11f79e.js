(function(t){function s(s){for(var e,r,o=s[0],c=s[1],l=s[2],m=0,u=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);p&&p(s);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(e=!1)}e&&(n.splice(s--,1),t=r(r.s=a[0]))}return t}var e={},i={app:0},n=[];function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/scotties-pool/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";a("85ec")},"1bb2":function(t,s,a){},2806:function(t,s,a){},"2d64":function(t,s,a){},"2f57":function(t,s,a){"use strict";a("b36f")},"56d7":function(t,s,a){"use strict";a.r(s);var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("nav",[a("span",{staticClass:"leaderboard-nav-item",class:"Leaderboard"==t.$route.name?" active ":""},[a("i",{staticClass:"nav-icon fas fa-trophy"}),a("div",{staticClass:"nav-text"},[t._v("Leaderboard")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/"}})],1),a("span",{staticClass:"leaderboard-nav-item",class:"Stats"==t.$route.name?" active ":""},[a("i",{staticClass:"nav-icon fas fa-chart-bar"}),a("div",{staticClass:"nav-text"},[t._v("Stats")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/stats/"}})],1),a("span",{staticClass:"leaderboard-nav-item",class:"Rules"==t.$route.name?" active ":""},[a("i",{staticClass:"nav-icon fas fa-chart-bar"}),a("div",{staticClass:"nav-text"},[t._v("Rules")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/rules/"}})],1)]),a("router-view")],1)},n=[],r=(a("034f"),a("2877")),o={},c=Object(r["a"])(o,i,n,!1,null,null,null),l=c.exports,p=a("8c4f"),m=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("Leaderboard",{attrs:{teams:t.teams,users:t.users}})],1)},u=[],v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"leaderboard-container"},[t._m(0),t._m(1),a("ul",t._l(t.leaders,(function(s,e){return a("li",{key:s.teamName},[a("router-link",{staticClass:"link",attrs:{to:"/player/"+s.id}}),a("div",{staticClass:"place"},[t._v(t._s(e+1))]),a("div",{staticClass:"avatar-name"},[a("div",{staticClass:"name"},[t._v(t._s(s.teamName))])]),a("div",{staticClass:"total-points"},[t._v(" "+t._s(Math.round(10*s.totalPoints)/10)+" ")])],1)})),0)])},d=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"leaderboard"},[a("div",{staticClass:"logo"},[a("div",{staticClass:"top"},[t._v("♡")]),a("div",{staticClass:"right"},[t._v("♡")]),a("div",{staticClass:"bottom"},[t._v("♡")]),a("div",{staticClass:"left"},[t._v("♡")])]),a("div",{staticClass:"text"},[a("span",{staticClass:"scotties"},[t._v("Scotties")]),a("span",{staticClass:"leaderboard-text"},[t._v("Leaderboard")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("div",{staticClass:"place-header"},[t._v("Place")]),a("div",{staticClass:"team-name-header"},[t._v("Team Name")]),a("div",{staticClass:"points-header"},[t._v("Points")])])}],C={name:"Leaderboard",props:{teams:Array,users:Array},computed:{leaders(){let t=[];for(let s=0;s<this.users.length;s++){let a=this.getUserPoints(this.users[s],this.teams);t.push(this.users[s]),t[s].totalPoints=a}return t.sort((t,s)=>t.totalPoints<s.totalPoints?1:-1)}},methods:{getUserPoints(t){let s=0;for(let a=0;a<t.picks.length;a++)s+=this.getTeamPoints(t.picks[a]);return s},getTeamPoints(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s].wins*this.teams[s].pointsPerWin}}},_=C,f=(a("aeea"),Object(r["a"])(_,v,d,!1,null,"091d1748",null)),h=f.exports,g={name:"Home",components:{Leaderboard:h},props:{teams:Array,users:Array}},w=g,b=(a("cccb"),Object(r["a"])(w,m,u,!1,null,null,null)),P=b.exports,k=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v(t._s(t.currentUser.teamName))]),a("h3",[a("span",{staticClass:"total-points-header"},[t._v(t._s(t.getTotalPoints(t.currentUser)))]),t._v(" Points ")]),a("h4",[t._v("Picks")]),a("ul",t._l(t.currentUser.picks,(function(s,e){return a("li",{key:e},[a("div",{staticClass:"team-logo"},[a("img",{attrs:{src:t.getTeamFromId(s).image}})]),a("div",{staticClass:"team-name"},[t._v(" "+t._s(t.getTeamFromId(s).name)+" "),a("div",{staticClass:"subname"},[t._v(t._s(t.getTeamFromId(s).subName))]),a("div",{staticClass:"points-per-win"},[t._v(" "+t._s(t.getTeamFromId(s).pointsPerWin)+" "),a("span",{staticClass:"points-per-win-text"},[t._v("Points/Win")])])]),a("div",{staticClass:"points-per-win-total-points"},[a("div",{staticClass:"total-points"},[t._v(" "+t._s(Math.round(t.getTeamFromId(s).pointsPerWin*t.getTeamFromId(s).wins*10)/10)+" "),a("span",{staticClass:"total-points-text"},[t._v("Total Points")])])])])})),0)])},y=[],N={name:"About",props:{teams:Array,users:Array},computed:{currentUser(){return this.users[this.$route.params.id-1]}},methods:{getTeamFromId(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s]},getTotalPoints(t){let s=0;for(let a=0;a<t.picks.length;a++)s+=this.getTeamPoints(t.picks[a]);return s},getTeamPoints(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s].wins*this.teams[s].pointsPerWin}}},W=N,T=(a("8103"),Object(r["a"])(W,k,y,!1,null,"7a4fc9ce",null)),O=T.exports,x=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("Rules")]),a("div",{staticClass:"rules"},[a("p",[t._v(" The rules are simple. Pick 6 teams, and for each win one of your teams get, you get a certain amount of points per win. The amount of points you get per win depends on which teams you pick. Better teams get less points per win and worse teams get more points per win. ")]),a("p",[t._v("Every draw (including tie-breakers and playoffs) will count.")]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[a("strong",[t._v("Province")])]),a("p",{staticClass:"team-name"},[a("strong",[t._v("Team")])]),a("p",{staticClass:"points-per-win"},[a("strong",[t._v("Pts/Win")])])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NB")]),a("p",{staticClass:"team-name"},[t._v("Crawford")]),a("p",{staticClass:"points-per-win"},[t._v("2.7")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NFLD")]),a("p",{staticClass:"team-name"},[t._v("Hill")]),a("p",{staticClass:"points-per-win"},[t._v("5.5")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NO")]),a("p",{staticClass:"team-name"},[t._v("McCarville")]),a("p",{staticClass:"points-per-win"},[t._v("1.7")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NU")]),a("p",{staticClass:"team-name"},[t._v("Macphail")]),a("p",{staticClass:"points-per-win"},[t._v("12")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("PEI")]),a("p",{staticClass:"team-name"},[t._v("Birt")]),a("p",{staticClass:"points-per-win"},[t._v("2.1")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("SK")]),a("p",{staticClass:"team-name"},[t._v("Barker")]),a("p",{staticClass:"points-per-win"},[t._v("2.7")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("WC1")]),a("p",{staticClass:"team-name"},[t._v("Fleury")]),a("p",{staticClass:"points-per-win"},[t._v("1.1")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("WC2")]),a("p",{staticClass:"team-name"},[t._v("Carey")]),a("p",{staticClass:"points-per-win"},[t._v("1.4")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("WC3")]),a("p",{staticClass:"team-name"},[t._v("Miskew")]),a("p",{staticClass:"points-per-win"},[t._v("1.3")])]),a("br"),a("br"),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("AB")]),a("p",{staticClass:"team-name"},[t._v("Walker")]),a("p",{staticClass:"points-per-win"},[t._v("1.2")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("BC")]),a("p",{staticClass:"team-name"},[t._v("Arsenault")]),a("p",{staticClass:"points-per-win"},[t._v("2.8")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("CA")]),a("p",{staticClass:"team-name"},[t._v("Einarson")]),a("p",{staticClass:"points-per-win"},[t._v("1")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("MB")]),a("p",{staticClass:"team-name"},[t._v("Zacharias")]),a("p",{staticClass:"points-per-win"},[t._v("1.8")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NWT")]),a("p",{staticClass:"team-name"},[t._v("Galusha")]),a("p",{staticClass:"points-per-win"},[t._v("3.1")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NS")]),a("p",{staticClass:"team-name"},[t._v("Black")]),a("p",{staticClass:"points-per-win"},[t._v("4.5")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("ON")]),a("p",{staticClass:"team-name"},[t._v("Duncan")]),a("p",{staticClass:"points-per-win"},[t._v("1.9")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("QC")]),a("p",{staticClass:"team-name"},[t._v("St. Georges")]),a("p",{staticClass:"points-per-win"},[t._v("1.7")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("YK")]),a("p",{staticClass:"team-name"},[t._v("Birnie")]),a("p",{staticClass:"points-per-win"},[t._v("11")])])])])}],j={name:"Rules"},M=j,A=(a("93fd"),Object(r["a"])(M,x,S,!1,null,"5857a1d4",null)),B=A.exports,E=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("Stats")]),a("h2",[t._v("Most Popular Teams")]),a("ul",t._l(t.mostPopularTeams,(function(s){return a("li",{key:s.teamId},[a("div",{staticClass:"team-logo"},[a("img",{attrs:{src:s.image}})]),a("div",{staticClass:"team-name"},[t._v(" "+t._s(s.name)+" "),a("div",{staticClass:"subname"},[t._v(t._s(s.subName))])]),a("div",{staticClass:"team-picks"},[a("div",{staticClass:"team-picks-number"},[t._v(t._s(s.totalPicks))]),t._v(" Picks ")]),a("div",{staticClass:"team-percentage"},[a("div",{staticClass:"team-picks-percentage-number"},[t._v(" "+t._s(Math.round(10*s.percentageOfTotalPicks)/10)+"% ")]),t._v(" of all users ")])])})),0)])},$=[],F={name:"About",props:{teams:Array,users:Array},methods:{getTeamFromId(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s]}},computed:{mostPopularTeams(){let t=[],s={},a=0;for(let e=0;e<this.users.length;e++)for(let t=0;t<this.users[e].picks.length;t++)s[this.users[e].picks[t]]||(s[this.users[e].picks[t]]=0),s[this.users[e].picks[t]]+=1,a+=1;for(const e in s){let i=this.getTeamFromId(e);i.totalPicks=s[e],i.percentageOfTotalPicks=i.totalPicks/a*100,t.push(this.getTeamFromId(e))}return t}}},I=F,L=(a("2f57"),Object(r["a"])(I,E,$,!1,null,"95debc3a",null)),U=L.exports;e["a"].use(p["a"]);const R=[{name:"Alberta",subName:"Walker",image:"alberta.png",pointsPerWin:1.2,wins:0,id:1},{name:"Saskatchewan",subName:"Barker",image:"saskatchewan.png",pointsPerWin:2.7,wins:0,id:2},{name:"Manitoba",subName:"Zacharias",image:"manitoba.png",pointsPerWin:1.8,wins:0,id:3},{name:"British Columbia",subName:"Arsenault",image:"bc.png",pointsPerWin:2.8,wins:0,id:4},{name:"Nunavut",subName:"MacPhail",image:"nunavut.png",pointsPerWin:12,wins:0,id:5},{name:"Wild Card 1",subName:"Fleury",image:"wc1.png",pointsPerWin:1.1,wins:0,id:6},{name:"Wild Card 2",subName:"Carey",image:"wc2.png",pointsPerWin:1.4,wins:0,id:7},{name:"Wild Card 3",subName:"Miskew",image:"wc3.png",pointsPerWin:1.3,wins:0,id:8},{name:"NWT",subName:"Galusha",image:"nwt.png",pointsPerWin:3.1,wins:0,id:9},{name:"Yukon",subName:"Birnie",image:"yukon.png",pointsPerWin:11,wins:0,id:10},{name:"Ontario",subName:"Duncan",image:"ontario.png",pointsPerWin:1.9,wins:0,id:11},{name:"Quebec",subName:"St-Georges",image:"quebec.png",pointsPerWin:1.7,wins:0,id:12},{name:"New Brunswick",subName:"Crawford",image:"new-brunswick.png",pointsPerWin:2.7,wins:0,id:13},{name:"Nova Scotia",subName:"Black",image:"nova-scotia.png",pointsPerWin:4.5,wins:0,id:14},{name:"PEI",subName:"Birt",image:"pei.png",pointsPerWin:2.1,wins:0,id:15},{name:"Northern Ontario",subName:"McCarville",image:"northern-ontario.jpg",pointsPerWin:1.7,wins:0,id:16},{name:"Newfoundland",subName:"Hill",image:"newfoundland.png",pointsPerWin:5.5,wins:0,id:17},{name:"Canada",subName:"Einarson",image:"canada.png",pointsPerWin:1,wins:0,id:18}],G=[{teamName:"The Sheetheads",realName:"",picks:[1,2,3,4],img:"rock.png",id:1}],D=[{path:"/",name:"Leaderboard",component:P,props:{users:G,teams:R}},{path:"/player/:id",name:"Player",component:O,props:{users:G,teams:R}},{path:"/stats/",name:"Stats",component:U,props:{users:G,teams:R}},{path:"/rules/",name:"Rules",component:B,props:{users:G,teams:R}}],H=new p["a"]({routes:D});var J=H;e["a"].config.productionTip=!1,new e["a"]({router:J,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,s,a){},8103:function(t,s,a){"use strict";a("1bb2")},"85ec":function(t,s,a){},"93fd":function(t,s,a){"use strict";a("2d64")},aeea:function(t,s,a){"use strict";a("2806")},b36f:function(t,s,a){},cccb:function(t,s,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.dd11f79e.js.map