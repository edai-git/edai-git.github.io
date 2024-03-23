(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9213)}])},9213:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return a}});var i=n(5893),t=n(2673),d=n(7913),r=n(14);n(7954);var l=n(2643);let a=[{depth:2,value:"Table of Contents",id:"table-of-contents"}];function h(s){let e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2"},(0,l.a)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Dayjs Business Time Advanced"}),"\n",(0,i.jsxs)(e.p,{children:["What's new? In the latest update, I've added some features and made a few changes to the business process. This is the latest development of ",(0,i.jsx)(e.a,{href:"https://github.com/rankmyapp/dayjs-business-time",children:"dayjs-business-time"})," version 1.0.4 | ",(0,i.jsx)(e.strong,{children:"npm"})," : ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/dayjs-business-time",children:"dayjs-business-time"})]}),"\n",(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.a,{href:"https://github.com/iamkun/dayjs",children:"Day.js"})," plugin that allows you to work with Business Time. | ",(0,i.jsx)(e.strong,{children:"npm"})," : ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/dayjs",children:"dayjs"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Business Days"}),"\n",(0,i.jsx)(e.li,{children:"Business Hours"}),"\n",(0,i.jsx)(e.li,{children:"Business Minutes"}),"\n",(0,i.jsx)(e.li,{children:"Customize business days and hours"}),"\n",(0,i.jsx)(e.li,{children:"Customize Holidays to prevent them to be counted as Business Days"}),"\n",(0,i.jsx)(e.li,{children:"Customize Exceptions for more complex working days and hours."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Setup"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"setup/business-time#setting-business-times",children:"Setting Business Times"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#getting-business-times",children:"Getting Business Times"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"setup/holiday#setting-holidays",children:"Setting Holidays"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#getting-holidays",children:"Getting Holidays"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#setting-exceptions",children:"Setting Exceptions"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#getting-exceptions",children:"Getting Exceptions"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Checking"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#check-if-a-date-is-a-holiday",children:"Check if a date is a Holiday"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#check-if-a-date-is-a-business-day",children:"Check if a date is a Business Day"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#check-if-a-time-is-business-time",children:"Check if a Time is Business Time"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Next and Last"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#get-next-business-day",children:"Get Next Business Day"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#get-last-business-day",children:"Get Last Business Day"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#get-next-business-time",children:"Get Next Business Time"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#get-last-business-time",children:"Get Last Business Time"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Adding Business Time"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#add-business-time",children:"Add Business Time"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#add-business-days",children:"Add Business Days"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#add-business-hours",children:"Add Business Hours"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#add-business-minutes",children:"Add Business Minutes"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Subtracting Business Time"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#subtract-business-time",children:"Subtract Business Time"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#subtract-business-days",children:"Subtract Business Days"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#subtract-business-hours",children:"Subtract Business Hours"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#subtract-business-minutes",children:"Subtract Business Minutes"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Diff"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#business-time-diff",children:"Business Time Diff"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#business-days-diff",children:"Business Days Diff"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#business-hours-diff",children:"Business Hours Diff"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#business-minutes-diff",children:"Business Minutes Diff"})}),"\n"]}),"\n"]}),"\n"]})]})}let c={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.a)(),s.components);return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)},pageOpts:{filePath:"pages/index.mdx",route:"/",timestamp:171100546e4,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"setup",route:"/setup",children:[{kind:"MdxPage",name:"business-time",route:"/setup/business-time"},{kind:"MdxPage",name:"exception",route:"/setup/exception"},{kind:"MdxPage",name:"holiday",route:"/setup/holiday"},{kind:"MdxPage",name:"instalation",route:"/setup/instalation"},{kind:"Meta",data:{instalation:"Instalation","business-time":"Business Time",holiday:"Holiday",exception:"Exception"}}]},{kind:"Meta",data:{index:"Introduction",setup:"Setup",checking:"Checking","next-and-last":"Next and Last","add-business-time":"Add Business Time","sub-business-time":"Sub Business Time","diff-in-business-time":"Diff in Business Time"}}],flexsearch:{codeblocks:!0},title:"Dayjs Business Time Advanced",headings:a},pageNextRoute:"/",nextraLayout:d.ZP,themeConfig:r.Z};e.default=(0,t.j)(c)},14:function(s,e,n){"use strict";var i=n(5893);e.Z={logo:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:600,fontSize:"16pt"},children:"Dayjs Business Time Advanced"})}),project:{link:"https://github.com/shuding/nextra"},search:{placeholder:"Cari dulu"},primaryHue:{dark:120},primarySaturation:80,sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},footer:{component:null},editLink:{component:null},feedback:{content:null},useNextSeoProps:()=>({titleTemplate:"%s"}),head:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"shortcut icon",href:"favicon.png",type:"image/png"})})}},5789:function(){}},function(s){s.O(0,[223,888,774,179],function(){return s(s.s=1464)}),_N_E=s.O()}]);