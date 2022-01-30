(function(t){function s(s){for(var e,r,o=s[0],c=s[1],l=s[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);m&&m(s);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(e=!1)}e&&(n.splice(s--,1),t=r(r.s=a[0]))}return t}var e={},i={app:0},n=[];function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/scotties-pool/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var m=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"033c":function(t,s,a){},"034f":function(t,s,a){"use strict";a("85ec")},"0575":function(t,s,a){},"251b":function(t,s,a){},2574:function(t,s,a){},"3ae8":function(t,s,a){"use strict";a("251b")},"3f4a":function(t,s,a){"use strict";a("0575")},"56d7":function(t,s,a){"use strict";a.r(s);var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("nav",[a("span",{staticClass:"leaderboard-nav-item",class:"Leaderboard"==t.$route.name?" active ":""},[a("i",{staticClass:"nav-icon fas fa-trophy"}),a("div",{staticClass:"nav-text"},[t._v("Leaderboard")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/"}})],1),a("span",{staticClass:"leaderboard-nav-item",class:"Stats"==t.$route.name?" active ":""},[a("i",{staticClass:"nav-icon fas fa-chart-bar"}),a("div",{staticClass:"nav-text"},[t._v("Stats")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/stats/"}})],1),a("span",{staticClass:"leaderboard-nav-item",class:"Rules"==t.$route.name?" active ":""},[a("i",{staticClass:"nav-icon fas fa-chart-bar"}),a("div",{staticClass:"nav-text"},[t._v("Rules")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/rules/"}})],1)]),a("router-view")],1)},n=[],r=(a("034f"),a("2877")),o={},c=Object(r["a"])(o,i,n,!1,null,null,null),l=c.exports,m=a("8c4f"),p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("Leaderboard",{attrs:{teams:t.teams,users:t.users}})],1)},u=[],d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"leaderboard-container"},[t._m(0),a("ul",t._l(t.leaders,(function(s,e){return a("li",{key:s.teamName},[a("router-link",{staticClass:"link",attrs:{to:"/player/"+s.id}}),a("div",{staticClass:"place",class:t.getLeaderboardClass(e+1)},[t._v(" "+t._s(e+1)+" "),a("span",{staticClass:"ordinal"},[t._v(t._s(t.getLeaderboardPlaceText(e+1)))])]),a("div",{staticClass:"avatar-name"},[a("div",{staticClass:"name"},[t._v(t._s(s.teamName))])]),a("div",{staticClass:"total-points"},[t._v(" "+t._s(Math.round(10*s.totalPoints)/10)),a("span",{staticClass:"pts"},[t._v("pts")])]),a("div",{staticClass:"chevron"},[t._v("›")])],1)})),0)])},v=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"leaderboard"},[a("div",{staticClass:"logo"},[a("div",{staticClass:"top"},[t._v("♡")]),a("div",{staticClass:"right"},[t._v("♡")]),a("div",{staticClass:"bottom"},[t._v("♡")]),a("div",{staticClass:"left"},[t._v("♡")])]),a("div",{staticClass:"text"},[a("span",{staticClass:"scotties"},[t._v("Scotties Pool")]),a("span",{staticClass:"leaderboard-text"},[t._v("Leaderboard")])])])}],g={name:"Leaderboard",props:{teams:Array,users:Array},computed:{leaders(){let t=[];for(let s=0;s<this.users.length;s++){let a=this.getUserPoints(this.users[s],this.teams);t.push(this.users[s]),t[s].totalPoints=a}return t.sort((t,s)=>t.totalPoints<s.totalPoints?1:-1)}},methods:{getUserPoints(t){let s=0;for(let a=0;a<t.picks.length;a++)s+=this.getTeamPoints(t.picks[a]);return s},getTeamPoints(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s].wins*this.teams[s].pointsPerWin},getLeaderboardClass(t){return 1==t?"first shimmer":2==t?"second":3==t?"third":" "},getLeaderboardPlaceText(t){return this.ordinal_suffix_of(t)},ordinal_suffix_of(t){var s=t%10,a=t%100;return 1==s&&11!=a?"st":2==s&&12!=a?"nd":3==s&&13!=a?"rd":"th"}}},C=g,_=(a("3f4a"),Object(r["a"])(C,d,v,!1,null,"7c8c793f",null)),h=_.exports,k={name:"Home",components:{Leaderboard:h},props:{teams:Array,users:Array}},f=k,w=Object(r["a"])(f,p,u,!1,null,null,null),b=w.exports,N=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v(t._s(t.currentUser.teamName))]),a("h3",[a("span",{staticClass:"total-points-header"},[t._v(t._s(Math.round(10*t.getTotalPoints(t.currentUser))/10))]),t._v(" Points ")]),a("h4",[t._v("Picks")]),a("ul",t._l(t.currentUser.picks,(function(s,e){return a("li",{key:e},[a("div",{staticClass:"team-logo"},[a("img",{attrs:{src:t.getTeamFromId(s).image}})]),a("div",{staticClass:"team-name"},[t._v(" "+t._s(t.getTeamFromId(s).name)+" "),a("div",{staticClass:"subname"},[t._v(t._s(t.getTeamFromId(s).subName))]),a("div",{staticClass:"points-per-win"},[t._v(" "+t._s(t.getTeamFromId(s).pointsPerWin)+" "),a("span",{staticClass:"points-per-win-text"},[t._v("Points/Win")])])]),a("div",{staticClass:"points-per-win-total-points"},[a("div",{staticClass:"total-points"},[t._v(" "+t._s(Math.round(t.getTeamFromId(s).pointsPerWin*t.getTeamFromId(s).wins*10)/10)+" "),a("span",{staticClass:"total-points-text"},[t._v("Total Points")])])])])})),0)])},P=[],y={name:"About",props:{teams:Array,users:Array},computed:{currentUser(){return this.users[this.$route.params.id-1]}},methods:{getTeamFromId(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s]},getTotalPoints(t){let s=0;for(let a=0;a<t.picks.length;a++)s+=this.getTeamPoints(t.picks[a]);return s},getTeamPoints(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s].wins*this.teams[s].pointsPerWin}}},T=y,W=(a("3ae8"),Object(r["a"])(T,N,P,!1,null,"bc3195d6",null)),O=W.exports,M=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("Rules")]),a("div",{staticClass:"rules"},[a("p",[t._v(" The rules are simple. Pick 6 teams, and for each win one of your teams get, you get a certain amount of points per win. The amount of points you get per win depends on which teams you pick. Better teams get less points per win and worse teams get more points per win. ")]),a("p",[t._v("Every draw (including tie-breakers and playoffs) will count.")]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[a("strong",[t._v("Province")])]),a("p",{staticClass:"team-name"},[a("strong",[t._v("Team")])]),a("p",{staticClass:"points-per-win"},[a("strong",[t._v("Pts/Win")])])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("WC1")]),a("p",{staticClass:"team-name"},[t._v("Fleury")]),a("p",{staticClass:"points-per-win"},[t._v("1.1")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("WC3")]),a("p",{staticClass:"team-name"},[t._v("Miskew")]),a("p",{staticClass:"points-per-win"},[t._v("1.3")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("WC2")]),a("p",{staticClass:"team-name"},[t._v("Carey")]),a("p",{staticClass:"points-per-win"},[t._v("1.4")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NO")]),a("p",{staticClass:"team-name"},[t._v("McCarville")]),a("p",{staticClass:"points-per-win"},[t._v("1.7")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("SK")]),a("p",{staticClass:"team-name"},[t._v("Barker")]),a("p",{staticClass:"points-per-win"},[t._v("2.8")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("PEI")]),a("p",{staticClass:"team-name"},[t._v("Birt")]),a("p",{staticClass:"points-per-win"},[t._v("3.0")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NB")]),a("p",{staticClass:"team-name"},[t._v("Crawford")]),a("p",{staticClass:"points-per-win"},[t._v("3.0")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NFLD")]),a("p",{staticClass:"team-name"},[t._v("Hill")]),a("p",{staticClass:"points-per-win"},[t._v("5.0")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NU")]),a("p",{staticClass:"team-name"},[t._v("Macphail")]),a("p",{staticClass:"points-per-win"},[t._v("12")])]),a("br"),a("br"),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("CA")]),a("p",{staticClass:"team-name"},[t._v("Einarson")]),a("p",{staticClass:"points-per-win"},[t._v("1")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("AB")]),a("p",{staticClass:"team-name"},[t._v("Walker")]),a("p",{staticClass:"points-per-win"},[t._v("1.2")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("MB")]),a("p",{staticClass:"team-name"},[t._v("Zacharias")]),a("p",{staticClass:"points-per-win"},[t._v("1.8")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("ON")]),a("p",{staticClass:"team-name"},[t._v("Duncan")]),a("p",{staticClass:"points-per-win"},[t._v("1.9")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("QC")]),a("p",{staticClass:"team-name"},[t._v("St. Georges")]),a("p",{staticClass:"points-per-win"},[t._v("2.0")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("BC")]),a("p",{staticClass:"team-name"},[t._v("Arsenault")]),a("p",{staticClass:"points-per-win"},[t._v("3.0")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NWT")]),a("p",{staticClass:"team-name"},[t._v("Galusha")]),a("p",{staticClass:"points-per-win"},[t._v("3.0")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("NS")]),a("p",{staticClass:"team-name"},[t._v("Black")]),a("p",{staticClass:"points-per-win"},[t._v("4.5")])]),a("div",{staticClass:"row"},[a("p",{staticClass:"province"},[t._v("YK")]),a("p",{staticClass:"team-name"},[t._v("Birnie")]),a("p",{staticClass:"points-per-win"},[t._v("11")])])])])}],S={name:"Rules"},B=S,j=(a("b6de"),Object(r["a"])(B,M,x,!1,null,"c2926a2a",null)),A=j.exports,F=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("Stats")]),a("h2",[t._v("Most Popular Teams")]),a("ul",t._l(t.mostPopularTeams,(function(s){return a("li",{key:s.teamId},[a("div",{staticClass:"team-logo"},[a("img",{attrs:{src:s.image}})]),a("div",{staticClass:"team-name"},[t._v(" "+t._s(s.name)+" "),a("div",{staticClass:"subname"},[t._v(t._s(s.subName))])]),a("div",{staticClass:"team-picks"},[a("div",{staticClass:"team-picks-number"},[t._v(t._s(s.totalPicks))]),t._v(" Picks ")]),a("div",{staticClass:"team-percentage"},[a("div",{staticClass:"team-picks-percentage-number"},[t._v(" "+t._s(Math.round(10*s.percentageOfTotalPicks)/10)+"% ")]),t._v(" of all users ")])])})),0),a("h2",[t._v("Best Performing Teams")]),a("ul",t._l(t.bestTeams,(function(s){return a("li",{key:s.teamId},[a("div",{staticClass:"team-logo"},[a("img",{attrs:{src:s.image}})]),a("div",{staticClass:"team-name team-name-performing"},[t._v(" "+t._s(s.name)+" "),a("div",{staticClass:"subname"},[t._v(t._s(s.subName))]),a("div",{staticClass:"team-picks"},[a("div",{staticClass:"team-points-per-win"},[t._v(" "+t._s(s.pointsPerWin)+" Pts/Win ")])])]),a("div",{staticClass:"team-percentage"},[a("div",{staticClass:"team-picks-percentage-number"},[t._v(" "+t._s(Math.round(10*s.totalPoints)/10)+" ")]),t._v(" Total Points ")])])})),0)])},E=[],I={name:"About",props:{teams:Array,users:Array},methods:{getTeamFromId(t){for(let s=0;s<this.teams.length;s++)if(this.teams[s].id==t)return this.teams[s]}},computed:{mostPopularTeams(){let t=[],s={},a=0;for(let e=0;e<this.users.length;e++)for(let t=0;t<this.users[e].picks.length;t++)s[this.users[e].picks[t]]||(s[this.users[e].picks[t]]=0),s[this.users[e].picks[t]]+=1,a+=1;for(const e in s){let i=this.getTeamFromId(e);i.totalPicks=s[e],i.percentageOfTotalPicks=i.totalPicks/a*6*100,t.push(this.getTeamFromId(e))}return t.sort((t,s)=>t.percentageOfTotalPicks<s.percentageOfTotalPicks?1:-1)},bestTeams(){let t=[];for(let s=0;s<this.teams.length;s++)t.push(this.teams[s]),t[s].totalPoints=this.teams[s].pointsPerWin*this.teams[s].wins;return t.sort((t,s)=>t.totalPoints<s.totalPoints?1:-1)}}},$=I,L=(a("7590"),Object(r["a"])($,F,E,!1,null,"a4741894",null)),H=L.exports;e["a"].use(m["a"]);const R=[{name:"Alberta",subName:"Walker",image:"alberta.png",pointsPerWin:1.2,wins:0,id:1},{name:"Saskatchewan",subName:"Barker",image:"saskatchewan.png",pointsPerWin:2.8,wins:0,id:2},{name:"Manitoba",subName:"Zacharias",image:"manitoba.png",pointsPerWin:1.8,wins:1,id:3},{name:"British Columbia",subName:"Arsenault",image:"bc.png",pointsPerWin:3,wins:0,id:4},{name:"Nunavut",subName:"MacPhail",image:"nunavut.png",pointsPerWin:12,wins:0,id:5},{name:"Wild Card 1",subName:"Fleury",image:"wc1.png",pointsPerWin:1.1,wins:0,id:6},{name:"Wild Card 2",subName:"Carey",image:"wc2.png",pointsPerWin:1.4,wins:0,id:7},{name:"Wild Card 3",subName:"Miskew",image:"wc3.png",pointsPerWin:1.3,wins:1,id:8},{name:"NWT",subName:"Galusha",image:"nwt4.jpg",pointsPerWin:3,wins:0,id:9},{name:"Yukon",subName:"Birnie",image:"yukon.png",pointsPerWin:11,wins:0,id:10},{name:"Ontario",subName:"Duncan",image:"ontario.png",pointsPerWin:1.9,wins:0,id:11},{name:"Quebec",subName:"St-Georges",image:"quebec.png",pointsPerWin:2,wins:1,id:12},{name:"New Brunswick",subName:"Crawford",image:"new-brunswick.png",pointsPerWin:3,wins:1,id:13},{name:"Nova Scotia",subName:"Black",image:"nova-scotia.png",pointsPerWin:4.5,wins:1,id:14},{name:"PEI",subName:"Birt",image:"pei.png",pointsPerWin:3,wins:1,id:15},{name:"Northern Ontario",subName:"McCarville",image:"northern-ontario.jpg",pointsPerWin:1.7,wins:1,id:16},{name:"Newfoundland",subName:"Hill",image:"newfoundland.png",pointsPerWin:5,wins:0,id:17},{name:"Canada",subName:"Einarson",image:"canada.png",pointsPerWin:1,wins:1,id:18}],U=[{teamName:"Up Your Arsenault",realName:"",picks:[6,11,16,8,1,14],img:"rock.png",id:1},{teamName:"Wide & Heavy",realName:"",picks:[15,12,3,1,8,6],img:"rock.png",id:2},{teamName:"Cool Rockin' Grandpa",realName:"",picks:[7,3,4,2,1,16],img:"rock.png",id:3},{teamName:"Cool Rockin' Grandma",realName:"",picks:[11,1,13,15,8,6],img:"rock.png",id:4},{teamName:"Ken D.",realName:"",picks:[18,2,7,8,6,3],img:"rock.png",id:5},{teamName:"Manitoba Tuckers",realName:"",picks:[15,6,9,2,12,3],img:"rock.png",id:6},{teamName:"Count 'em up",realName:"",picks:[16,8,6,4,18,1],img:"rock.png",id:7},{teamName:"Manitoba Hearts Sweep Faster",realName:"",picks:[3,6,7,9,15,18],img:"rock.png",id:8},{teamName:"Housekeepers",realName:"",picks:[1,8,3,9,16,18],img:"rock.png",id:9},{teamName:"Sweeping Beauties",realName:"",picks:[6,1,3,9,16,18],img:"rock.png",id:10},{teamName:"TinyTwo",realName:"",picks:[6,1,8,15,16,18],img:"rock.png",id:11},{teamName:"Chance of Fleury",realName:"",picks:[9,12,13,15,16,18],img:"rock.png",id:12},{teamName:"1 against 7",realName:"",picks:[15,6,9,12,11,18],img:"rock.png",id:13},{teamName:"McCarvelous Shot",realName:"",picks:[1,3,6,12,16,18],img:"rock.png",id:14},{teamName:"Sweeping Beauty",realName:"",picks:[3,4,6,8,12,16],img:"rock.png",id:15},{teamName:"Rock Stars",realName:"",picks:[1,6,8,12,16,18],img:"rock.png",id:16},{teamName:"What a Miskew",realName:"",picks:[3,8,12,15,16,17],img:"rock.png",id:17},{teamName:"Curl Power",realName:"",picks:[1,6,11,15,16,18],img:"rock.png",id:18},{teamName:"Rock ‘Em",realName:"",picks:[3,4,7,13,15,18],img:"rock.png",id:19},{teamName:"House of Heys",realName:"",picks:[1,2,3,5,6,18],img:"rock.png",id:20},{teamName:"Rolling Stones",realName:"",picks:[1,3,7,10,14,18],img:"rock.png",id:21},{teamName:"Hazel's Picks",realName:"",picks:[4,18,2,5,13,1],img:"rock.png",id:22},{teamName:"Matt's Mistakes",realName:"",picks:[3,1,17,18,16,15],img:"rock.png",id:23},{teamName:"Sheet Disturbers",realName:"",picks:[16,18,1,3,6,12],img:"rock.png",id:24},{teamName:"Picked based on team pictures",realName:"",picks:[2,8,5,11,4,18],img:"rock.png",id:25},{teamName:"The Kicker",realName:"",picks:[16,15,1,18,6,9],img:"rock.png",id:26},{teamName:"Phil's House",realName:"",picks:[3,11,12,16,2,15],img:"rock.png",id:27},{teamName:"Yellowstone",realName:"",picks:[6,7,18,3,10,14],img:"rock.png",id:28}],G=[{path:"/",name:"Leaderboard",component:b,props:{users:U,teams:R}},{path:"/player/:id",name:"Player",component:O,props:{users:U,teams:R}},{path:"/stats/",name:"Stats",component:H,props:{users:U,teams:R}},{path:"/rules/",name:"Rules",component:A,props:{users:U,teams:R}}],D=new m["a"]({routes:G});var K=D;e["a"].config.productionTip=!1,new e["a"]({router:K,render:function(t){return t(l)}}).$mount("#app")},7590:function(t,s,a){"use strict";a("2574")},"85ec":function(t,s,a){},b6de:function(t,s,a){"use strict";a("033c")}});
//# sourceMappingURL=app.18b0a020.js.map