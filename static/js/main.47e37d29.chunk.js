(this.webpackJsonpnight=this.webpackJsonpnight||[]).push([[0],{17:function(e,a,s){},32:function(e,a,s){},38:function(e,a,s){},39:function(e,a,s){},40:function(e,a,s){},41:function(e,a,s){},42:function(e,a,s){},43:function(e,a,s){},44:function(e,a,s){},45:function(e,a,s){},46:function(e,a,s){},53:function(e,a,s){},54:function(e,a,s){},55:function(e,a,s){"use strict";s.r(a);var i=s(0),t=s(1),c=s.n(t),o=s(11),n=s.n(o),r=s(4),l=s(2),d=(s(17),s(8));s(32);var m=function(){var e=Object(t.useState)(!1),a=Object(d.a)(e,2),s=a[0],c=a[1],o=Object(t.useState)(!0),n=Object(d.a)(o,2),l=n[0],m=n[1],u=function(){return c(!1)},j=function(){window.innerWidth<=960?m(!1):m(!0)};return Object(t.useEffect)((function(){j()}),[]),window.addEventListener("resize",j),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"navbar-container",children:[Object(i.jsx)("div",{className:"menu-icon",onClick:function(){return c(!s)},children:Object(i.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(i.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/",className:"nav-links",onClick:u,children:"Inicio"})}),l?Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"dropbtn",children:"Informacion"}),Object(i.jsxs)("div",{className:"dropdown-content",children:[Object(i.jsx)(r.b,{to:"/Night",children:"Night"}),Object(i.jsx)(r.b,{to:"/Oceano",children:"Oceano"}),Object(i.jsx)(r.b,{to:"/Life",children:"Life"}),Object(i.jsx)(r.b,{to:"/Bosses",children:"Bosses"})]})]})}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-links",href:"/Night-BDO/#cards",onClick:u,children:"Informacion"})})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/",className:"nav-links",onClick:u,children:"Black Market"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"https://discord.gg/2aWDvV5",className:"nav-links",id:"discord",onClick:u,children:"Discord"})})]})]})})})};function u(){var e=Object(l.f)().pathname;return Object(t.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}s(38);var j=function(e){return Object(i.jsx)("li",{className:"cards_item",children:e.show?Object(i.jsx)(r.b,{to:e.path,children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{className:"card_background",src:e.src,alt:e.alt}),e.logo?Object(i.jsx)("img",{className:"lifeskill_logo",src:e.srclogo,alt:e.altlogo}):Object(i.jsx)(i.Fragment,{}),Object(i.jsxs)("div",{className:"card_content",children:[Object(i.jsx)("h1",{className:"card_title",children:e.title}),Object(i.jsx)("p",{className:"card_text",children:e.text})]})]})}):Object(i.jsx)(r.b,{to:e.path,onClick:function(e){return e.preventDefault()},children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h2",{className:"title_prox",children:"PROXIMAMENTE"}),Object(i.jsx)("img",{className:"card_background",src:e.src,alt:e.alt,style:{filter:"grayscale(100%) blur(4px)"}}),Object(i.jsxs)("div",{className:"card_content",style:{display:"none"},children:[Object(i.jsx)("h1",{className:"card_title",children:e.title}),Object(i.jsx)("p",{className:"card_text",children:e.text})]})]})})},e.id)};var b=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"background-cards",children:[Object(i.jsx)("img",{className:"backgroundcards",src:"images/cards/background.jpg",alt:"Background"}),Object(i.jsxs)("div",{className:"titles-container",children:[Object(i.jsx)("h1",{className:"title",children:"Informacion"}),Object(i.jsx)("div",{className:"fade_line"}),Object(i.jsx)("p",{className:"text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),Object(i.jsx)("div",{className:"cards-container",id:"cards",children:Object(i.jsx)("ul",{className:"cards",children:[{id:1,show:!0,path:"/Oceano",src:"images/cards/oceano.png",alt:"Card",title:"Oceano",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:2,show:!0,path:"/Night",src:"images/cards/night.jfif",alt:"Card",title:"Night",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:3,show:!0,path:"/Life",src:"images/cards/life.jpg",alt:"Card",title:"Life",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:4,show:!0,path:"/Bosses",src:"images/bosses/karanda.jpg",alt:"Card",title:"Bosses",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:5,show:!1,path:"/",src:"images/night/2020-06-29_1644308039.png",alt:"Card",title:"Black Market",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}].map((function(e){return Object(i.jsx)(j,{show:e.show,path:e.path,src:e.src,alt:e.alt,title:e.title,text:e.text},e.id)}))})})]})})};s(39);var g=function(){return Object(i.jsxs)("div",{className:"container",id:"inicio",children:[Object(i.jsx)("div",{className:"hero-cont",children:Object(i.jsx)("img",{className:"background",src:"images/hero/background.jpg",alt:"Background"})}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("div",{className:"items",children:[Object(i.jsxs)("div",{className:"animation-wrapper",children:[Object(i.jsx)("div",{className:"particle particle-1"}),Object(i.jsx)("div",{className:"particle particle-2"}),Object(i.jsx)("div",{className:"particle particle-3"}),Object(i.jsx)("div",{className:"particle particle-4"})]}),Object(i.jsx)("h1",{children:"Night"}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("p",{children:"Black Desert Online"})]})})]})};var p=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(b,{})]})};s(40);var h=function(){return Object(i.jsx)("div",{className:"fade_line_oc",children:Object(i.jsx)("img",{className:"line-oc",src:"images/logo_line.png",alt:"Line"})})};var x=function(e){return"oceano"===e.effect?Object(i.jsx)("h1",{className:"title_card",children:e.title}):"night"===e.effect?Object(i.jsx)("h1",{className:"title_card_2",children:e.title}):Object(i.jsx)("h1",{className:"title_card_3",children:e.title})};var O=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"background-cards",children:[Object(i.jsx)("img",{className:"backgroundcards",src:"images/oceano/worldmap.jpg",alt:"Background"}),Object(i.jsxs)("div",{className:"container_card",children:[Object(i.jsx)(x,{effect:"oceano",title:"Oceano"}),Object(i.jsx)(h,{}),Object(i.jsx)("div",{className:"cards-container-oc",id:"cards",children:Object(i.jsx)("ul",{className:"cards",children:[{id:1,show:!0,path:"/Oceano/Khan",src:"images/oceano/khan.png",alt:"Card",title:"Khan",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:2,show:!0,path:"/Oceano/Intercambio",src:"images/oceano/bartering.jpg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_riqueza.png",altlogo:"Badget",title:"Intercambio",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:3,show:!0,path:"/E404",src:"images/oceano/vell.jpg",alt:"Card",title:"Vell",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:4,show:!0,path:"/Oceano/Navegacion",src:"images/oceano/navegacion.jpg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_navegacion.png",altlogo:"Badget",title:"Navegacion",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}].map((function(e){return Object(i.jsx)(j,{show:e.show,path:e.path,src:e.src,alt:e.alt,logo:e.logo,srclogo:e.srclogo,altlogo:e.altlogo,title:e.title,text:e.text},e.id)}))})}),Object(i.jsx)(h,{})]})]})})};s(41);var v=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container_card",children:[Object(i.jsx)(x,{effect:"night",title:"Night"}),Object(i.jsx)(h,{}),Object(i.jsx)("div",{className:"cards-container-oc",id:"cards",children:Object(i.jsx)("ul",{className:"cards",children:[{id:1,show:!0,path:"/E404",src:"images/night/2020-06-29_1644308039.png",alt:"Card",title:"Night",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}].map((function(e){return Object(i.jsx)(j,{show:e.show,path:e.path,src:e.src,alt:e.alt,title:e.title,text:e.text},e.id)}))})}),Object(i.jsx)(h,{})]})})};s(42);var N=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"background-cards",children:[Object(i.jsx)("img",{className:"backgroundcards",src:"images/life/background.png",alt:"Background"}),Object(i.jsxs)("div",{className:"container_card",children:[Object(i.jsx)(x,{effect:"life",title:"Life"}),Object(i.jsx)(h,{}),Object(i.jsx)("div",{className:"cards-container-oc",id:"cards",children:Object(i.jsx)("ul",{className:"cards",children:[{id:1,show:!0,path:"/Life",src:"images/life/alquimia.jpeg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_alquimia.png",altlogo:"Badget",title:"Alquimia",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:2,show:!0,path:"/Life",src:"images/life/caza.jpg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_caza.png",altlogo:"Badget",title:"Caza",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:3,show:!0,path:"/Life",src:"images/life/cocina.png",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_cocina.png",altlogo:"Badget",title:"Cocina",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:4,show:!0,path:"/Life",src:"images/life/comercio.jpg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_comercio.png",altlogo:"Badget",title:"Comercio",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:5,show:!0,path:"/Life",src:"images/life/entrenar.jpg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_entrenar.png",altlogo:"Badget",title:"Entrenar",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:6,show:!0,path:"/Life",src:"images/life/pesca.jpg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_pesca.png",altlogo:"Badget",title:"Pesca",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:7,show:!0,path:"/Life",src:"images/life/procesar.jpg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_procesar.png",altlogo:"Badget",title:"Procesar",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{id:8,show:!0,path:"/Life",src:"images/life/recoleccion.jpeg",alt:"Card",logo:!0,srclogo:"images/life/iconos/lifeskill_recoleccion.png",altlogo:"Badget",title:"Recoleccion",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}].map((function(e){return Object(i.jsx)(j,{show:e.show,path:e.path,src:e.src,alt:e.alt,logo:e.logo,srclogo:e.srclogo,altlogo:e.altlogo,title:e.title,text:e.text},e.id)}))})}),Object(i.jsx)(h,{})]})]})})};s(43);var _=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container_khan",id:"iniciokhan",children:[Object(i.jsxs)("div",{className:"container_khan_info",children:[Object(i.jsx)("h1",{className:"titulo_khan",children:"KHAN - Boss de GREMIO"}),Object(i.jsx)("p",{className:"texto_khan",children:"KHAN es un boss de gremio, que se encuentra en la isla de Okilua, para pelear contra \xe9l se necesita usar ca\xf1ones y muchas personas, tenemos una alianza de gremios donde nos ayudamos a hacer este boss todos los dias, si estas buscando hacer el barco Tier 3 es una buena oportunidad para sacarlo mas rapido (ya que da alguno de los materiales necesarios para hacer el Tier 3) o si tenes mucha suerte te puede dar el corazon."}),Object(i.jsx)("h2",{className:"subtitulo_khan",children:"\xbfPorque hay que ir a KHAN? Por esto!"}),Object(i.jsx)("img",{className:"img_drop",src:"../images/oceano/khan/drop.png",alt:"Drop"})]}),Object(i.jsx)("img",{className:"arrow",src:"../images/oceano/khan/arrow.png",alt:"Arrow"}),Object(i.jsx)("h2",{className:"subtitulo_video",children:"Guia KHAN"}),Object(i.jsx)("video",{className:"video_khan",controls:!0,children:Object(i.jsx)("source",{src:"../videos/video_test.mp4",type:"video/mp4"})})]})})},f=(s(44),s(12));s(19);var k=function(){var e=Object(t.useState)(!1),a=Object(d.a)(e,2),s=a[0],c=a[1],o=function(){return c(!1)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container_navegacion",id:"inicionavegacion",children:[Object(i.jsxs)("div",{className:"container_block_right",children:[Object(i.jsx)("img",{className:"img_navegacion_info",src:"../images/oceano/navegacion/fragata.jpg",alt:"Fragata"}),Object(i.jsxs)("div",{className:"container_text",children:[Object(i.jsxs)("h2",{className:"subtitulo_navegacion",children:["Navegacion:",Object(i.jsx)("br",{}),"\xbfComo empezar?"]}),Object(i.jsx)("p",{className:"texto_navegacion",children:"Este es un documento de todo lo que se necesita saber del mar, en este se encuentra informaci\xf3n sobre los barcos, sus upgrades, los materiales necesarios y los trades requeridos para ello. Tambi\xe9n abajo hay una planilla para anotar los materiales que faltan para el T3"}),Object(i.jsx)("a",{className:"link_navegacion",href:"https://docs.google.com/document/d/1dqPqliFPOJR9NaQqGPOacntd5VOTOYZ1Dm3aI-QrmR0/edit",children:"ERA DE NAVEGACI\xd3N"})]})]}),Object(i.jsxs)("div",{className:"container_block_left",children:[Object(i.jsx)("img",{className:"img_navegacion_info",src:"../images/oceano/navegacion/fragata_2.jpg",alt:"Fragata_2"}),Object(i.jsxs)("div",{className:"container_text",children:[Object(i.jsx)("h2",{className:"subtitulo_navegacion",children:"Misiones diarias de navegaci\xf3n, Velia y Epheria:"}),Object(i.jsx)("p",{className:"texto_navegacion",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}),Object(i.jsx)("a",{className:"link_navegacion",href:"https://www.youtube.com/watch?v=t3VGdxFJiwI&ab_channel=TheJuanmaSeries",children:"MISIONES DIARIAS DE NAVEGACI\xd3N VELIA Y EPHERIA"})]})]}),Object(i.jsxs)("div",{className:"container_block_right",children:[Object(i.jsx)("img",{className:"img_navegacion_info",src:"../images/oceano/navegacion/marineros.jpg",alt:"Marineros"}),Object(i.jsxs)("div",{className:"container_text",children:[Object(i.jsx)("h2",{className:"subtitulo_navegacion",children:"Gu\xeda de marineros (En ingl\xe9s):"}),Object(i.jsx)("p",{className:"texto_navegacion",children:"Los marineros BDO son personajes NPC que aumentan las estad\xedsticas de navegaci\xf3n de tu barco (velocidad, aceleraci\xf3n, giro, frenado y otras ventajas de navegaci\xf3n \xfatiles). Tambi\xe9n exploran y encuentran suministros en las islas de intercambios"}),Object(i.jsx)("a",{className:"link_navegacion",href:"https://grumpygreen.cricket/bdo-sailors-guide/",children:"BDO SAILORS GUIDE"})]})]}),Object(i.jsxs)("div",{className:"container_block_left",children:[Object(i.jsx)("img",{className:"img_navegacion_info",src:"../images/oceano/navegacion/carrack.jpg",alt:"Carrack"}),Object(i.jsxs)("div",{className:"container_text",children:[Object(i.jsx)("h2",{className:"subtitulo_navegacion",children:"Carrack - Barco Tier 3"}),Object(i.jsxs)("p",{className:"texto_navegacion",children:["Documento para saber todos los materiales que se necesitan para fabricar el barco TIER 3, tambien se puede ver en el documento de ",Object(i.jsx)("a",{className:"alink",href:"https://docs.google.com/document/d/1dqPqliFPOJR9NaQqGPOacntd5VOTOYZ1Dm3aI-QrmR0/edit",children:"ERA DE NAVEGACION"})]}),Object(i.jsx)("a",{className:"link_navegacion",href:"https://docs.google.com/spreadsheets/d/1v2FIBE8cuvJ3kmEx6wenRz4pHCcqb_R2/edit#gid=534137859",children:"MATERIALES PARA EL T3"}),Object(i.jsx)("button",{type:"button",className:"link_navegacion",id:"popup_button",onClick:function(){return c((function(e){return!e}))},children:"BARCOS T3 GUERRA"}),Object(i.jsx)(f.a,{open:s,closeOnDocumentClick:!0,onClose:o,children:Object(i.jsxs)("div",{className:"container_popup",children:[Object(i.jsx)("div",{className:"close",onClick:o,children:"\xd7"}),Object(i.jsx)("img",{className:"img_barcos",src:"../images/oceano/navegacion/guerra1.png",alt:"Guerra1"}),Object(i.jsx)("img",{className:"img_barcos",src:"../images/oceano/navegacion/guerra2.png",alt:"Guerra2"})]})}),Object(i.jsx)("button",{type:"button",className:"link_navegacion",id:"popup_button",onClick:function(){return c((function(e){return!e}))},children:"BARCOS T3 COMERCIO"}),Object(i.jsx)(f.a,{open:s,closeOnDocumentClick:!0,onClose:o,children:Object(i.jsxs)("div",{className:"container_popup",children:[Object(i.jsx)("div",{className:"close",onClick:o,children:"\xd7"}),Object(i.jsx)("img",{className:"img_barcos",src:"../images/oceano/navegacion/comercio1.png",alt:"Comercio1"}),Object(i.jsx)("img",{className:"img_barcos",src:"../images/oceano/navegacion/comercio2.png",alt:"Comercio2"})]})})]})]})]})})};s(45);var q=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container_navegacion",id:"inicionavegacion",children:[Object(i.jsxs)("div",{className:"container_block_right",children:[Object(i.jsx)("img",{className:"img_navegacion_info",src:"../images/oceano/intercambio/barco.jpg",alt:"Intercambio_1"}),Object(i.jsxs)("div",{className:"container_text",children:[Object(i.jsxs)("h2",{className:"subtitulo_navegacion",children:["\xbfComo ganar plata facil?",Object(i.jsx)("br",{}),"Intercambios maritimos!"]}),Object(i.jsx)("p",{className:"texto_navegacion",children:"Este documento te ayudara a saber todo sobre los intercambios maritimos, es una lifeskill que se puede hacer semi-afk, y dependiendo de cuantos intercambios hagas podes llegar a hacer hasta 300 millones por dia. Entre mas hagas mas plata ganas!"}),Object(i.jsx)("a",{className:"link_navegacion",href:"https://grumpygreen.cricket/bdo-barter-sailing/",children:"INTERCAMBIOS MARITIMOS"})]})]}),Object(i.jsxs)("div",{className:"container_block_left",children:[Object(i.jsx)("img",{className:"img_navegacion_info",src:"../images/oceano/intercambio/barco_2.jpg",alt:"Intercambio_2"}),Object(i.jsxs)("div",{className:"container_text",children:[Object(i.jsx)("h2",{className:"subtitulo_navegacion",children:"Recomendacion:"}),Object(i.jsx)("p",{className:"texto_navegacion",children:"Para hacer trades maritimos vas a necesitar un barco, y talvez necesites mejorar el que tengas. Por eso recomiendo ver la seccion de NAVEGACION, donde vas a poder ver como mejorar tu barco"}),Object(i.jsx)(r.b,{className:"link_navegacion",to:"/oceano/Navegacion",children:"NAVEGACION"})]})]})]})})},w=(s(46),s(47),s(26));var E=function(e){return Object(i.jsx)(f.a,{className:"popup_boss_info",trigger:Object(i.jsx)("area",{target:"",alt:e.area_alt,title:e.area_title,coords:e.area_coords,shape:"circle"}),modal:!0,children:Object(i.jsxs)("div",{className:"boss_info",children:[Object(i.jsx)("img",{src:e.src,alt:e.alt}),Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("p",{children:e.text}),Object(i.jsxs)("h3",{children:["Horarios: ",e.time]})]})})};var L=function(){var e=Object(t.useState)(0),a=Object(d.a)(e,2),s=a[0],c=a[1];return Object(t.useEffect)((function(){var e=setInterval((function(){c((new Date).toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(w.Carousel,{showThumbs:!1,useKeyboardArrows:!0,children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"main-bosses",children:[Object(i.jsx)("img",{className:"background-boss",src:"images/bosses/bosses_background.jpg",alt:"Bosses"}),Object(i.jsxs)("div",{className:"section-bosses",children:[Object(i.jsxs)("div",{className:"content-bosses",children:[Object(i.jsx)("div",{className:"fade_line_oc-bosses",children:Object(i.jsx)("img",{className:"line-oc-bosses",src:"images/logo_line_white.png",alt:"Line"})}),Object(i.jsx)("div",{className:"items-bosses",children:Object(i.jsx)("h1",{children:"BOSSES"})}),Object(i.jsx)("div",{className:"fade_line_oc-bosses-2",children:Object(i.jsx)("img",{className:"line-oc-bosses-2",src:"images/logo_line_white.png",alt:"Line"})})]}),Object(i.jsxs)("div",{className:"section-timer",children:[Object(i.jsx)("h1",{children:"SIGUIENTE BOSS EN:"}),Object(i.jsx)("h1",{children:s})]}),Object(i.jsx)("div",{className:"container_bosses_info",children:Object(i.jsxs)("div",{className:"container_block_bosses",children:[Object(i.jsx)("h2",{className:"boss_left",children:"Garmoth"}),Object(i.jsx)("img",{className:"img_boss",src:"images/bosses/garmoth.webp",alt:"Boss"}),Object(i.jsx)("h2",{className:"boss_right",children:"Karanda"}),Object(i.jsx)("img",{className:"img_boss",src:"images/bosses/karanda.webp",alt:"Boss"})]})})]})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"main-bosses",children:[Object(i.jsx)("img",{className:"background-boss",src:"images/bosses/bosses_background_3.webp",alt:"Bosses"}),Object(i.jsxs)("div",{className:"section-bosses",children:[Object(i.jsxs)("div",{className:"content-bosses",children:[Object(i.jsx)("div",{className:"fade_line_oc-bosses",children:Object(i.jsx)("img",{className:"line-oc-bosses",src:"images/logo_line_white.png",alt:"Line"})}),Object(i.jsx)("div",{className:"items-bosses",children:Object(i.jsx)("h1",{children:"BOSSES"})}),Object(i.jsx)("div",{className:"fade_line_oc-bosses-2",children:Object(i.jsx)("img",{className:"line-oc-bosses-2",src:"images/logo_line_white.png",alt:"Line"})})]}),Object(i.jsxs)("div",{className:"section-timer",children:[Object(i.jsx)("h1",{children:"DESPUES:"}),Object(i.jsx)("h1",{children:s})]}),Object(i.jsx)("div",{className:"container_bosses_info",children:Object(i.jsxs)("div",{className:"container_block_bosses",children:[Object(i.jsx)("h2",{className:"boss_left",children:"Kzarka"}),Object(i.jsx)("img",{className:"img_boss",src:"images/bosses/kzarka.webp",alt:"Boss"}),Object(i.jsx)("h2",{className:"boss_right",children:"Nouver"}),Object(i.jsx)("img",{className:"img_boss",src:"images/bosses/nouver.webp",alt:"Boss"})]})})]})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"main-bosses",children:[Object(i.jsx)("img",{className:"background-boss",src:"images/bosses/bosses_background_4.webp",alt:"Bosses"}),Object(i.jsx)("div",{className:"section-bosses",children:Object(i.jsx)("img",{className:"schedule",style:{width:"80%",zIndex:"1"},src:"images/bosses/schedule.webp",alt:"Schedule"})})]})})]}),Object(i.jsxs)("div",{className:"main-bosses",children:[Object(i.jsx)("img",{className:"background-boss",src:"images/bosses/bosses_background_2.webp",alt:"Bosses"}),Object(i.jsxs)("div",{className:"section-bosses-2",children:[Object(i.jsx)("div",{className:"line_drops",children:Object(i.jsx)("img",{className:"line_drops_bosses",src:"images/logo_line_white.png",alt:"Line"})}),Object(i.jsx)("h1",{className:"title_map",children:"MAPA DE BOSSES"}),Object(i.jsx)("div",{className:"line_drops",children:Object(i.jsx)("img",{className:"line_drops_bosses",src:"images/logo_line_white.png",alt:"Line"})}),Object(i.jsx)("map",{name:"image-map",id:"image-map",children:[{id:1,area_alt:"Muraka",area_title:"Muraka",area_coords:"394,592,39",src:"images/bosses/muraka.jfif",alt:"BOSS_INFO",title:"Muraka",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Jueves 2:00"},{id:2,area_alt:"Offin",area_title:"Offin",area_coords:"405,748,43",src:"images/bosses/offin.jpg",alt:"BOSS_INFO",title:"Offin",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Jueves 2:00 | Martes 21:00"},{id:3,area_alt:"Garmoth",area_title:"Garmoth",area_coords:"759,765,45",src:"images/bosses/garmoth.jpg",alt:"BOSS_INFO",title:"Garmoth",text:"Un Drag\xf3n Escarlata que luch\xf3 en la Gran Victoria contra los sherekan y otras tribus de Drieghan bajo las \xf3rdenes de Makthanan, el Drag\xf3n Negro. Fue gravemente herido en la batalla y se vio obligado a retirarse a la Cubil Escarlata donde pudo recuperar sus fuerzas bajo los cuidados de los lobos.",time:"Martes 21:00"},{id:4,area_alt:"Quint",area_title:"Quint",area_coords:"469,485,42",src:"images/bosses/quint.jfif",alt:"BOSS_INFO",title:"Quint",text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Miercoles 06:00"},{id:5,area_alt:"Karanda",area_title:"Karanda",area_coords:"630,463,39",src:"images/bosses/karanda.jpg",alt:"BOSS_INFO",title:"Karanda",text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Miercoles 08:00"},{id:6,area_alt:"Dim Tree Spirit",area_title:"Dim Tree Spirit",area_coords:"713,485,40",src:"images/bosses/dim_tree_spirit.jpg",alt:"BOSS_INFO",title:"Dim Tree Spirit",text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Desconocido"},{id:7,area_alt:"Kzarka",area_title:"Kzarka",area_coords:"808,643,39",src:"images/bosses/kzarka.png",alt:"BOSS_INFO",title:"Kzarka",text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Lunes 16:00 | Martes 21:00"},{id:8,area_alt:"Kutum",area_title:"Kutum",area_coords:"1178,409,44",src:"images/bosses/kutum.jpg",alt:"BOSS_INFO",title:"Kutum",text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Lunes 16:00 | Viernes 02:00"},{id:9,area_alt:"Nouver",area_title:"Nouver",area_coords:"1326,473,45",src:"images/bosses/nouver.jpg",alt:"BOSS_INFO",title:"Nouver",text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Lunes 16:00"},{id:10,area_alt:"Vell",area_title:"Vell",area_coords:"681,44,42",src:"images/bosses/vell.jpg",alt:"BOSS_INFO",title:"Vell",text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",time:"Viernes 04:00 | Domingo 18:00"}].map((function(e){return Object(i.jsx)(E,{area_alt:e.area_alt,area_title:e.area_title,area_coords:e.area_coords,src:e.src,alt:e.alt,title:e.title,text:e.text,time:e.time},e.id)}))}),Object(i.jsx)("img",{className:"mapa",src:"images/bosses/mapa.webp",useMap:"#image-map",alt:"Mapa",draggable:"false"})]})]}),Object(i.jsx)("div",{className:"pc_only",children:Object(i.jsxs)("div",{className:"main-bosses",children:[Object(i.jsx)("img",{className:"background-boss",src:"images/bosses/bosses_background.jpg",alt:"Bosses"}),Object(i.jsx)("div",{className:"section-bosses",children:Object(i.jsxs)("div",{className:"content-bosses",children:[Object(i.jsx)("div",{className:"fade_line_oc-bosses",children:Object(i.jsx)("img",{className:"line-oc-bosses",src:"images/logo_line_white.png",alt:"Line"})}),Object(i.jsx)("div",{className:"items-bosses",children:Object(i.jsx)("h1",{children:"BOSSES"})}),Object(i.jsx)("div",{className:"fade_line_oc-bosses-2",children:Object(i.jsx)("img",{className:"line-oc-bosses-2",src:"images/logo_line_white.png",alt:"Line"})}),Object(i.jsx)("h3",{style:{padding:"1em"},children:"SOLO PARA PC"}),Object(i.jsx)("p",{children:"Descargar APP - PROXIMAMENTE"})]})})]})})]})};s(53);var S=function(){return Object(i.jsx)(i.Fragment,{})};s(54);var B=function(){return Object(i.jsxs)("div",{className:"container_404",children:[Object(i.jsx)("h1",{className:"text_404",children:"En construccion..."}),Object(i.jsx)("img",{className:"img_drop",src:"images/error404/black_spirit.png",alt:"Drop",width:"300",height:"400"})]})};var C=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{basename:".",children:[Object(i.jsx)(u,{}),Object(i.jsx)(m,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,component:p}),Object(i.jsx)(l.a,{path:"/Oceano",exact:!0,component:O}),Object(i.jsx)(l.a,{path:"/Oceano/Khan",exact:!0,component:_}),Object(i.jsx)(l.a,{path:"/Oceano/Navegacion",exact:!0,component:k}),Object(i.jsx)(l.a,{path:"/Oceano/Intercambio",exact:!0,component:q}),Object(i.jsx)(l.a,{path:"/Night",exact:!0,component:v}),Object(i.jsx)(l.a,{path:"/Life",exact:!0,component:N}),Object(i.jsx)(l.a,{path:"/Bosses",exact:!0,component:L}),Object(i.jsx)(l.a,{path:"/E404",exact:!0,component:B}),Object(i.jsx)(l.a,{path:"/Panel",exact:!0,component:S}),Object(i.jsx)(l.a,{path:"*",exact:!0,component:B})]})]})})};n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.47e37d29.chunk.js.map