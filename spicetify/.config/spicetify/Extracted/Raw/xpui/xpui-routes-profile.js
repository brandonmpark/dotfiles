"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7968],{38780:(e,a,t)=>{t.d(a,{B:()=>c});var i=t(6812),r=t(32223),s=t(1072),o=t(38904),l=t(1044);const n="profile-editImage-imageContainer",u="profile-editImage-editImageButtonContainer";var d=t(2488);const c=function({onClick:e,name:a,images:t,canEdit:c,placeholderType:m,shape:g=l.OU.SQUARE,dragUri:p=""}){const[h,f]=(0,r.i)(t),v=(0,s.C_)(h,f)===s.Q$.loaded,b=(0,i.C)({itemUris:[p],dragLabelText:a});return(0,d.jsxs)("div",{className:n,"data-testid":`${m}-image`,draggable:!!p,onDragStart:b,children:[(0,d.jsx)(l.iI,{loading:"eager",name:a,images:t,placeholderType:m,shape:g}),c&&(0,d.jsx)("div",{className:u,children:(0,d.jsx)(o.a,{overlay:v,onClick:e,rounded:g===l.OU.CIRCLE})})]})}},19408:(e,a,t)=>{t.d(a,{I:()=>l});var i=t(10124),r=t.n(i),s=t(33062),o=t(2488);const l=({children:e})=>(0,o.jsx)("div",{className:r()(s.c.imageContainer,s.c.imageContainerNew),children:e})},78232:(e,a,t)=>{t.d(a,{a:()=>o});var i=t(8004),r=t(33062),s=t(2488);const o=({children:e})=>(0,s.jsx)(i.a,{variant:"bodySmall",className:r.c.pretitle,children:e})},92052:(e,a,t)=>{t.r(a),t.d(a,{default:()=>$a});var i=t(96651),r=t(33220),s=t(31024),o=t(14788),l=t(10124),n=t.n(l),u=t(12100),d=t(94032),c=t(92376),m=t(29384),g=t(40176),p=t(800);const h="profile-userOverview-container",f="profile-userOverview-section",v="profile-userOverview-subPage",b="profile-userOverview-topTrackSubPage",x="profile-userOverview-title",_="profile-userOverview-header";var k=t(2488);const y=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,p.Q)(g.aw,[a]),s=t?.profiles;return i?(0,k.jsx)(c.K,{hasError:null!==r,errorMessage:u._s.get("error.not_found.title.page")}):(0,k.jsx)(m.y,{className:n()("contentSpacing",v),title:u._s.get("followers"),total:s?.length,showAll:!0,children:s?.map(((e,a)=>(0,k.jsx)(d.o,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},I=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,p.Q)(g.Ep,[a]),s=t?.profiles;return i?(0,k.jsx)(c.K,{hasError:null!==r,errorMessage:u._s.get("error.not_found.title.page")}):(0,k.jsx)(m.y,{className:n()("contentSpacing",v),title:u._s.get("following"),total:s?.length,showAll:!0,children:s?.map(((e,a)=>(0,k.jsx)(d.o,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};t(41260);var j=t(12924),w=t(4564),N=t(76288),T=t(49232),A=t(26844),C=t(43168),P=t(73108),S=t(7300),R=t(46003),O=t(12980),U=t(38780),E=t(1044),M=t(62688),D=t(73372),L=t(8004),F=t(76008),W=t(45531),H=t(8340),B=t(60056),K=t(32223),J=t(1072);const Q="profile-userEditDetails-image",G="valcBm4lLe9qFBcg0sFY",V="tAIzXn8C9KriGwGuBfWg",z="PsrXxenHUFXYM1ub1xWw",X="U_VWfeeLWnDPhUTxCmrQ",Y=function({onClickEdit:e,onClickRemove:a,name:t,images:i,canEdit:r}){const[s,o]=(0,K.i)(i),l=(0,J.C_)(s,o)===J.Q$.loaded;return(0,k.jsxs)("div",{className:Q,children:[(0,k.jsx)(E.iI,{loading:"eager",name:t,images:i,placeholderType:"user",shape:E.OU.CIRCLE}),r&&(0,k.jsxs)("div",{className:n()(G,{[z]:l}),children:[(0,k.jsx)("button",{className:V,"aria-haspopup":"true",onClick:e,type:"button",children:(0,k.jsx)(L.a,{variant:"bodyMedium",children:u._s.get("user.edit-details.choose-photo")})}),(0,k.jsx)("div",{className:n()(X,"icon"),children:(0,k.jsx)(B.G,{size:"xlarge","aria-hidden":!0})}),(0,k.jsx)("button",{className:V,onClick:a,type:"button",children:(0,k.jsx)(L.a,{variant:"bodyMedium",children:u._s.get("user.edit-details.remove-photo")})})]})]})};var q=t(76404),$=t(42444),Z=t(78200);const ee={paths:""},ae={encode(e,a=Z.Writer.create()){for(const t of e.paths)a.uint32(10).string(t);return a},decode(e,a){const t=e instanceof Uint8Array?new Z.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...ee};for(r.paths=[];t.pos<i;){const e=t.uint32();if(e>>>3==1)r.paths.push(t.string());else t.skipType(7&e)}return r},fromJSON(e){const a={...ee};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const t of e.paths)a.paths.push(String(t));return a},fromPartial(e){const a={...ee};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const t of e.paths)a.paths.push(t);return a},toJSON(e){const a={};return e.paths?a.paths=e.paths.map((e=>e)):a.paths=[],a}};t(37144);var te=t(62924),ie=t(87597).Sn;const re={value:0},se={value:!1},oe={value:""};const le={encode:(e,a=Z.Writer.create())=>(a.uint32(8).int32(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new Z.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...re};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.int32();else t.skipType(7&e)}return r},fromJSON(e){const a={...re};return void 0!==e.value&&null!==e.value?a.value=Number(e.value):a.value=0,a},fromPartial(e){const a={...re};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=0,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},ne={encode:(e,a=Z.Writer.create())=>(a.uint32(8).bool(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new Z.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...se};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.bool();else t.skipType(7&e)}return r},fromJSON(e){const a={...se};return void 0!==e.value&&null!==e.value?a.value=Boolean(e.value):a.value=!1,a},fromPartial(e){const a={...se};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=!1,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},ue={encode:(e,a=Z.Writer.create())=>(a.uint32(10).string(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new Z.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...oe};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.string();else t.skipType(7&e)}return r},fromJSON(e){const a={...oe};return void 0!==e.value&&null!==e.value?a.value=String(e.value):a.value="",a},fromPartial(e){const a={...oe};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value="",a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}};Z.util.Long!==te.c&&(Z.util.Long=te.c,(0,Z.configure)());const de=globalThis;de.atob,de.btoa;const ce={maxWidth:0,maxHeight:0,url:""},me={},ge={},pe={encode:(e,a=Z.Writer.create())=>(a.uint32(8).int32(e.maxWidth),a.uint32(16).int32(e.maxHeight),a.uint32(26).string(e.url),a),decode(e,a){const t=e instanceof Uint8Array?new Z.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...ce};for(;t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.maxWidth=t.int32();break;case 2:r.maxHeight=t.int32();break;case 3:r.url=t.string();break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={...ce};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=Number(e.maxWidth):a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=Number(e.maxHeight):a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=String(e.url):a.url="",a},fromPartial(e){const a={...ce};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=e.maxWidth:a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=e.maxHeight:a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=e.url:a.url="",a},toJSON(e){const a={};return void 0!==e.maxWidth&&(a.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(a.maxHeight=e.maxHeight),void 0!==e.url&&(a.url=e.url),a}},he={encode(e,a=Z.Writer.create()){void 0!==e.username&&void 0!==e.username&&ue.encode({value:e.username},a.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&ue.encode({value:e.name},a.uint32(18).fork()).ldelim();for(const t of e.images)pe.encode(t,a.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&ne.encode({value:e.verified},a.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&ne.encode({value:e.editProfileDisabled},a.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&ne.encode({value:e.reportAbuseDisabled},a.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&ne.encode({value:e.abuseReportedName},a.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&ne.encode({value:e.abuseReportedImage},a.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&ne.encode({value:e.hasSpotifyName},a.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&ne.encode({value:e.hasSpotifyImage},a.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&le.encode({value:e.color},a.uint32(90).fork()).ldelim(),a},decode(e,a){const t=e instanceof Uint8Array?new Z.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...me};for(r.images=[];t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.username=ue.decode(t,t.uint32()).value;break;case 2:r.name=ue.decode(t,t.uint32()).value;break;case 3:r.images.push(pe.decode(t,t.uint32()));break;case 4:r.verified=ne.decode(t,t.uint32()).value;break;case 5:r.editProfileDisabled=ne.decode(t,t.uint32()).value;break;case 6:r.reportAbuseDisabled=ne.decode(t,t.uint32()).value;break;case 7:r.abuseReportedName=ne.decode(t,t.uint32()).value;break;case 8:r.abuseReportedImage=ne.decode(t,t.uint32()).value;break;case 9:r.hasSpotifyName=ne.decode(t,t.uint32()).value;break;case 10:r.hasSpotifyImage=ne.decode(t,t.uint32()).value;break;case 11:r.color=le.decode(t,t.uint32()).value;break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={...me};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=String(e.username):a.username=void 0,void 0!==e.name&&null!==e.name?a.name=String(e.name):a.name=void 0,void 0!==e.images&&null!==e.images)for(const t of e.images)a.images.push(pe.fromJSON(t));return void 0!==e.verified&&null!==e.verified?a.verified=Boolean(e.verified):a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=Boolean(e.editProfileDisabled):a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=Boolean(e.abuseReportedName):a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=Boolean(e.abuseReportedImage):a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=Boolean(e.hasSpotifyName):a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=Boolean(e.hasSpotifyImage):a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=Number(e.color):a.color=void 0,a},fromPartial(e){const a={...me};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=e.username:a.username=void 0,void 0!==e.name&&null!==e.name?a.name=e.name:a.name=void 0,void 0!==e.images&&null!==e.images)for(const t of e.images)a.images.push(pe.fromPartial(t));return void 0!==e.verified&&null!==e.verified?a.verified=e.verified:a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=e.editProfileDisabled:a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=e.reportAbuseDisabled:a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=e.abuseReportedName:a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=e.abuseReportedImage:a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=e.hasSpotifyName:a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=e.hasSpotifyImage:a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=e.color:a.color=void 0,a},toJSON(e){const a={};return void 0!==e.username&&(a.username=e.username),void 0!==e.name&&(a.name=e.name),e.images?a.images=e.images.map((e=>e?pe.toJSON(e):void 0)):a.images=[],void 0!==e.verified&&(a.verified=e.verified),void 0!==e.editProfileDisabled&&(a.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(a.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(a.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(a.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(a.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(a.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(a.color=e.color),a}},fe={encode:(e,a=Z.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&ae.encode(e.mask,a.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&he.encode(e.userProfile,a.uint32(18).fork()).ldelim(),a),decode(e,a){const t=e instanceof Uint8Array?new Z.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...ge};for(;t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.mask=ae.decode(t,t.uint32());break;case 2:r.userProfile=he.decode(t,t.uint32());break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={...ge};return void 0!==e.mask&&null!==e.mask?a.mask=ae.fromJSON(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=he.fromJSON(e.userProfile):a.userProfile=void 0,a},fromPartial(e){const a={...ge};return void 0!==e.mask&&null!==e.mask?a.mask=ae.fromPartial(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=he.fromPartial(e.userProfile):a.userProfile=void 0,a},toJSON(e){const a={};return void 0!==e.mask&&(a.mask=e.mask?ae.toJSON(e.mask):void 0),void 0!==e.userProfile&&(a.userProfile=e.userProfile?he.toJSON(e.userProfile):void 0),a}},ve=`${q.Su}/identity`;async function be(e,a,{name:t,imageUploadToken:i}){void 0!==t&&await async function(e,a,t){const i=fe.encode(fe.fromPartial({mask:{paths:["name"]},userProfile:null!==t?{name:t}:{}}));await e.build().withHost(ve).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,$.w)(a))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(i.finish()).withoutMarket().send()}(e,a,t),void 0!==i&&(null!==i?await async function(e,a,t){await e.build().withHost(ve).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,$.w)(a))}/${t}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,a,i):await async function(e,a){await e.build().withHost(ve).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,$.w)(a))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,a))}var xe=t(84264);const _e={type:"error",get message(){return u._s.get("user.edit-details.error.file-size-exceeded",10)}},ke={type:"error",get message(){return u._s.get("user.edit-details.error.too-small",300,300)}},ye={type:"error",get message(){return u._s.get("user.edit-details.error.missing-name")}},Ie={type:"error",get message(){return u._s.get("user.edit-details.error.failed-to-save")}},je={type:"error",get message(){return u._s.get("user.edit-details.error.file-upload-failed")}};function we(e){return{type:"setLoading",loading:e}}function Ne(e){return{type:"setMessage",message:e}}function Te(e,a){switch(a.type){case"setName":return{...e,name:a.name};case"setMessage":return{...e,message:a.message,loading:!1};case"setLoading":return{...e,loading:a.loading,message:null};case"setImageData":return{...e,imageData:a.data,removeImage:!1};case"setImageToken":return{...e,imageToken:a.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}var Ae=t(20356),Ce=t(86412),Pe=t(17480);const Se="profile-userEditDetails-container",Re="profile-userEditDetails-content",Oe="profile-userEditDetails-header",Ue="profile-userEditDetails-closeButton",Ee="vAeyAmeLkDEDKdL9Hou0",Me="dnmzO6yYKkxUV8jl7O1Z",De="profile-userEditDetails-nameInput",Le="profile-userEditDetails-name",Fe="profile-userEditDetails-label",We="profile-userEditDetails-labelText",He="dMhJaxli87_22jb_3d9x",Be="profile-userEditDetails-saveButton",Ke="profile-userEditDetails-disclaimer",Je=i.memo((function({uri:e,name:a,image:t,onClose:r,shouldOpenImagePicker:s,userCapabilities:o}){const[l,d]=(0,Ce.ER)(),[c,m]=function({name:e,image:a}){return(0,i.useReducer)(Te,{loading:!1,message:null,name:e,image:a})}({name:a,image:t}),g=(0,i.useMemo)((()=>{const e=c.imageData||c.image;return e?[{url:e,width:300,height:300}]:[]}),[c.image,c.imageData]);(0,i.useEffect)((()=>{s&&d()}),[d,s]);const p=(0,i.useCallback)((e=>{e===Ce.S4.FILE_TOO_BIG?m(Ne(_e)):e===Ce.S4.IMAGE_TOO_SMALL&&m(Ne(ke))}),[m]),h=(0,i.useCallback)((()=>{m({type:"removeImage"})}),[m]),f=(0,i.useCallback)((async a=>{a.preventDefault();if(0!==c.name.trim().length){m(we(!0));try{const a=c.removeImage?null:c.imageToken;await async function(e,{name:a,imageUploadToken:t}){await be(xe.W.getInstance(),e,{name:a,imageUploadToken:t})}(e,{name:c.name,imageUploadToken:a}),r({name:c.name,image:c.imageData||c.image})}catch(e){m(Ne(Ie))}}else m(Ne(ye))}),[m,r,c.image,c.imageData,c.imageToken,c.name,c.removeImage,e]);return(0,k.jsx)(Ae.c,{isOpen:!0,contentLabel:u._s.get("user.edit-details.title"),onRequestClose:()=>r(),children:(0,k.jsxs)("div",{className:Se,children:[(0,k.jsxs)("div",{className:Oe,children:[(0,k.jsx)(L.a,{as:"h1",variant:"titleSmall",children:u._s.get("user.edit-details.title")}),(0,k.jsx)("button",{className:Ue,onClick:()=>r(),"aria-label":u._s.get("close"),children:(0,k.jsx)(F.K,{size:"small"})})]}),c.message&&(0,k.jsx)(Pe.O,{isErrorMessage:"error"===c.message.type,message:c.message.message}),(0,k.jsxs)("form",{className:Re,onSubmit:f,children:[o.edit_image&&(0,k.jsx)(Ce.mQ,{isOpen:l,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:a,imageDataUrl:t}=e;if(m(Ne(null)),m({type:"setImageData",data:t}),a)try{m(we(!0));const e=await async function(e){const a=await xe.W.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!a.body)throw new Error("No upload token recieved");return a.body.uploadToken}(a);m({type:"setImageToken",token:e}),m(we(!1))}catch{m(Ne(je))}},onError:p}),(0,k.jsxs)("div",{className:Ee,children:[(0,k.jsx)(Y,{name:a,images:g,onClickEdit:d,onClickRemove:h,canEdit:o.edit_image}),c.loading&&(0,k.jsx)("div",{className:Me,children:(0,k.jsx)(W.y,{})})]}),(0,k.jsxs)("div",{className:Le,children:[(0,k.jsx)("label",{htmlFor:"user-edit-name",className:Fe,children:(0,k.jsx)(L.a,{variant:"marginalBold",className:We,children:u._s.get("user.edit-details.name-label")})}),(0,k.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:n()(De,He),onChange:e=>{m(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:u._s.get("user.edit-details.name-placeholder"),maxLength:32,value:c.name,disabled:!o.edit_name})]}),(0,k.jsx)("div",{className:Be,children:(0,k.jsx)(H.g,{colorSet:"invertedLight",onClick:f,disabled:c.loading,children:u._s.get("save")})}),(0,k.jsx)(L.a,{as:"p",variant:"marginalBold",className:Ke,children:u._s.get("image-upload.legal-disclaimer")})]})]})})}));var Qe=t(92280),Ge=t(72232),Ve=t(68964),ze=t(54420),Xe=t(51528),Ye=t(30140),qe=t(40636),$e=t(40068),Ze=t(68592),ea=t(48856),aa=t(31720),ta=t(76736),ia=t(82988),ra=t(7296),sa=t(13932),oa=t(45876),la=t(72144),na=t(26681),ua=t(75480);const da=i.memo((function({openModal:e,spec:a,logger:t,name:r,backgroundColor:s,isCurrentUser:o,uri:l}){const[n,d]=(0,oa.u)(l),c=(0,ra.w)(),m=!(0,sa.O)(),g=(0,i.useCallback)((()=>{c({targetUri:l,intent:n?"unfollow":"follow",type:"click"});const e=a.actionBarFactory().followButtonFactory();n?(d(!1),t.logInteraction(e.hitUnfollow({itemToBeUnfollowed:l}))):(d(!0),t.logInteraction(e.hitFollow({itemToBeFollowed:l})))}),[n,t,c,d,a,l]),p=(0,i.useCallback)((()=>{const e=a.actionBarFactory().contextMenuButtonFactory().hitUiReveal();t.logInteraction(e)}),[t,a]),h=(0,ua.u)();return(0,k.jsx)(la.g,{backgroundColor:s,children:(0,k.jsxs)(na.i,{children:[!o&&(0,k.jsx)(ta.m,{children:(0,k.jsx)(ia.W,{isFollowing:Boolean(n),onClick:g,disabled:m})}),(0,k.jsx)(aa.p,{menu:(0,k.jsx)(R.Y,{uri:l,onEditProfileCallback:e}),children:(0,k.jsx)(ea.g,{label:u._s.get("more.label.context",r),onClick:p,size:h})})]})})}));var ca=t(33584),ma=t(33912),ga=t(63928),pa=t(45208),ha=t(39188),fa=t(81604),va=t(52588),ba=t(84340),xa=t(43619);const _a=i.memo((function({tracks:e,hasHeaderRow:a=!1,nrTracksVisible:t,uri:r}){const s=(0,$.w)(r),l=(0,o.I7)(s,"tracks").toURI(),n=(0,i.useMemo)((()=>t?e.slice(0,t):e),[t,e]),{usePlayContextItem:d}=(0,va.I)({uri:l,pages:[{items:e.map((e=>({type:xa.s.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),c=(0,i.useCallback)(((e,a)=>{const t=(0,$e.C)(e?.albumOfTrack?.coverArt?.sources,{desiredSize:40});return(0,k.jsx)(ga.iQ,{index:a,uri:(0,ha.a)(e),duration_ms:e.duration.totalMilliseconds,name:e.name,artists:e.artists.items.map((({uri:e,profile:{name:a}})=>({uri:e,name:a}))),album:e.albumOfTrack,isPlayable:!0,isExplicit:e.contentRating?.label===ba.A7.Explicit,isMOGEFRestricted:e.contentRating?.label===ba.A7.NineteenPlus,imgUrl:t?.url||"",contextUri:l,usePlayContextItem:d},a+e.uri)}),[l,d]),m=(0,i.useMemo)((()=>[ma.yw.INDEX,ma.yw.TITLE_AND_ARTIST,ma.yw.ALBUM,ma.yw.DURATION]),[]),g=(0,i.useCallback)((e=>({uri:e.uri})),[]),p=(0,pa.u)()?0:void 0;return(0,k.jsx)(fa.oL,{value:"user-top-tracks-tracklist",children:(0,k.jsx)(ma.aE,{ariaLabel:u._s.get("top_tracks_this_month"),renderRow:c,nrTracks:n.length,tracks:n,resolveItem:g,headerTop:p,hasHeaderRow:a,columns:m,columnPersistenceKey:"user-top-tracks-tracklist"})})}),((e,a)=>e.tracks===a.tracks)),ka=i.memo((function({tracks:e,title:a,tagline:t,seeAllUri:r,className:s,uri:o,spec:l}){const n=(0,qe.Mk)(),u=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]),d=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]);if(!e||0===e.totalCount||0===e.items.length)return null;const c=e.totalCount>4;return(0,k.jsxs)("section",{className:s,children:[(0,k.jsx)(ca.q,{title:a,tagline:t,seeAllUri:r,hasMoreElements:c,onClickTitle:u,onClickSeeAll:d}),(0,k.jsx)(qe.Ud,{spec:l,children:(0,k.jsx)(_a,{tracks:e.items,uri:o,nrTracksVisible:4})})]})}),((e,a)=>e.tracks===a.tracks));function ya(e,a){switch(a.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}var Ia=t(19408),ja=t(78232),wa=t(17988),Na=t(90496),Ta=t(25972),Aa=t(5736),Ca=t(15040),Pa=(t(73952),t(97296),t(88272)),Sa=t(99972);const Ra=new Pa.a("userTopContent","query","feb6d55177e2cbce2ac59214f9493f1ef2e4368eec01b3d4c3468fa1b97336e2",null);function Oa(e){return"Artist"===e.__typename}function Ua(e){if("ArtistPageV2"!==e?.topArtists?.__typename)return null;const a=e.topArtists.items.map((e=>e.data)).filter(Oa);return 0===a.length?null:{totalCount:e.topArtists.totalCount,items:a}}function Ea(e){return"Track"===e.__typename}function Ma(e){if("TrackPageV2"!==e?.topTracks?.__typename)return null;const a=e.topTracks.items.map((e=>e.data)).filter(Ea).filter((e=>null!==e.albumOfTrack));return 0===a.length?null:{totalCount:e.topTracks.totalCount,items:a}}const Da=ba.eW.Affinity,La=ba.Q5.ShortTerm;function Fa({includeTopArtists:e,includeTopTracks:a,topArtistsLimit:t,topTracksLimit:i}){const{data:r,loading:s,error:o}=(l={includeTopArtists:e,topArtistsInput:{offset:0,limit:t,sortBy:Da,timeRange:La},includeTopTracks:a,topTracksInput:{offset:0,limit:i,sortBy:Da,timeRange:La}},n={enabled:e||a,gcTime:18e5,staleTime:3e5},(0,Sa.U)(Ra,l,n));var l,n;return null!==o?{topTracks:null,topArtists:null,loading:s,error:new Error("Failed loading user top content!")}:{topTracks:Ma(r?.me?.profile??null),topArtists:Ua(r?.me?.profile??null),loading:s,error:null}}const Wa=18e5,Ha=3e5,Ba=(0,N.M3)(Ve.q2,(e=>e?.images||[])),Ka=({uri:e,isCurrentUser:a})=>{const t=(0,w.w1)(Ve.q2)?.uri,r=(0,w.w1)(Ve.YP),s=(0,w.w1)(Ba),l=(0,w.OY)(),m=(0,j.q$)(),v=(0,T.IP)(Ca.WQf,{loadingValue:!0}),b=(0,i.useMemo)((()=>(0,$e.C)(s)),[s]),[{isModalOpen:x,modalVariant:_,shouldOpenImagePicker:y},I]=function(){const[e,a]=(0,i.useReducer)(ya,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,a]}(),{data:N,loading:L,queryKey:F}=(0,p.Q)(g.u_,[{uri:e,playlists:10,artists:10,episodes:10}],{gcTime:Wa,staleTime:Ha}),W=(0,Qe.A)();(0,Aa.s)(Ta.gz.OPERATION_COMPLETE,(()=>{m.invalidateQueries({queryKey:F})})),(0,Ye.l)(Xe.Wg.OPERATION_COMPLETE,(()=>{m.invalidateQueries({queryKey:F})}));const H=N?.public_playlists,B=N?.is_verified,K=N?.recently_played_artists,J=a?b?.url||"":N?.image_url||"",Q=(0,$.w)(e),G=(a?r:N?.name)||"",V=(0,Ge.O)(N?.image_url||null),{spec:z,logger:X}=(0,qe.gp)(A.G,{data:{uri:e}}),Y=(0,i.useMemo)((()=>z.sectionTopTracksFactory()),[z]),q=!W&&(!1!==N?.show_follows||a),Z=a&&v,{data:ee,loading:ae}=(0,p.Q)(g.Ep,[e],{enabled:q,gcTime:Wa,staleTime:Ha}),te=ee?.profiles,{data:ie,loading:re}=(0,p.Q)(g.aw,[e],{enabled:q,gcTime:Wa,staleTime:Ha}),se=ie?.profiles,oe=te?.some((e=>e.uri===t)),{topArtists:le,topTracks:ne,loading:ue}=Fa({includeTopArtists:Z,includeTopTracks:Z,topArtistsLimit:10,topTracksLimit:4}),de=(0,i.useCallback)((e=>{I({type:"CLOSE_MODAL"}),e&&(l((0,ze.sV)(e.name)),l((0,ze.M$)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[I,l]),ce=(0,i.useCallback)((()=>{I({type:"OPEN_MODAL"});const e=z.headerFactory().usernameFactory().hitUiReveal();X.logInteraction(e)}),[X,I,z]),me=(0,i.useCallback)((()=>{I({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=z.headerFactory().profileImageFactory().hitUiReveal();X.logInteraction(e)}),[X,I,z]),ge=(0,i.useMemo)((()=>[{url:J}]),[J]),pe=(0,i.useCallback)((()=>{const e=z.headerFactory().usernameFactory().hitUiReveal();X.logInteraction(e)}),[X,z]),he=(0,i.useCallback)(((e,a)=>{if(!a)return;const t=z.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});X.logInteraction(t)}),[X,z]),fe=(0,i.useCallback)(((e,a)=>{if(!a)return;const t=z.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});X.logInteraction(t)}),[X,z]);if(!N||L||ae||re||ue)return(0,k.jsx)(c.K,{hasError:!1,errorMessage:u._s.get("error.not_found.title.page")});const ve=n()("contentSpacing",f),be=q&&!!se?.length,xe=q&&!!te?.length;return(0,k.jsxs)("div",{className:h,children:[(0,k.jsx)(O.Q,{children:G}),(0,k.jsxs)(E.I1,{backgroundColor:V,children:[(0,k.jsx)(M.E,{children:(0,k.jsx)(D.e,{text:G})}),(0,k.jsx)(S.U,{menu:(0,k.jsx)(R.Y,{uri:N.uri}),children:(0,k.jsx)(Ia.I,{children:(0,k.jsx)(U.B,{canEdit:a&&!N.edit_image_disabled,name:G,images:ge,onClick:me,placeholderType:"user",shape:E.OU.CIRCLE})})}),(0,k.jsxs)(E.a8,{children:[(0,k.jsx)(ja.a,{children:B?(0,k.jsx)(wa.c,{text:u._s.get("card.tag.profile")}):u._s.get("card.tag.profile")}),(0,k.jsx)(S.U,{menu:(0,k.jsx)(R.Y,{uri:N.uri}),children:(0,k.jsx)(E.on,{canEdit:a&&!N.edit_name_disabled,editTitle:u._s.get("playlist.edit-details.title"),onClick:ce,children:G})}),(0,k.jsx)(E.E1,{totalFollowers:N.followers_count,totalFollowing:N.following_count,publicPlaylists:N.total_public_playlists_count,userUri:e,onCreatorClick:pe,onTotalFollowersClick:he,onTotalFollowingClick:fe,theyFollowUs:oe})]})]}),(0,k.jsx)(da,{openModal:ce,spec:z,logger:X,name:G,backgroundColor:V,isCurrentUser:a,uri:e}),(0,k.jsxs)(qe.Ud,{spec:z,children:[a&&(0,k.jsxs)(k.Fragment,{children:[null!==le&&(0,k.jsx)(Na.c,{className:ve,total:le.totalCount,title:u._s.get("top_artists_this_month"),tagline:u._s.get("only_visible_to_you"),seeAllUri:(0,o.oh)(Q,["top","artists"]).toURI(),id:"top-artists",index:0,children:le.items.map(((e,a)=>(0,k.jsx)(C.M,{index:a,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))}),(0,k.jsx)(ka,{className:ve,title:u._s.get("top_tracks_this_month"),tagline:u._s.get("only_visible_to_you"),seeAllUri:(0,o.oh)(Q,["top","tracks"]).toURI(),uri:e,tracks:ne,spec:Y})]}),(0,k.jsx)(Na.c,{className:ve,total:N.total_public_playlists_count,title:u._s.get("public_playlists"),seeAllUri:(0,o.oh)(Q,["playlists"]).toURI(),id:"playlists",index:1,children:H?.map(((e,a)=>(0,k.jsx)(P.I,{index:a,uri:e.uri,name:e.name,images:[{url:(0,Ze.o)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?u._s.get("user.followers",e.followers_count):""},e.uri)))}),K?.length?(0,k.jsx)(Na.c,{className:ve,total:K?.length,title:u._s.get("recently_played_artists"),seeAllUri:(0,o.oh)(Q,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:2,children:K?.map(((e,a)=>(0,k.jsx)(C.M,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,be?(0,k.jsx)(Na.c,{className:ve,title:u._s.get("followers"),total:se?.length,seeAllUri:(0,o.oh)(Q,["followers"]).toURI(),id:"followers",index:3,children:se?.map(((e,a)=>(0,k.jsx)(d.o,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,xe?(0,k.jsx)(Na.c,{className:ve,title:u._s.get("following"),total:te?.length,seeAllUri:(0,o.oh)(Q,["following"]).toURI(),id:"following",index:4,children:te?.map(((e,a)=>(0,k.jsx)(d.o,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,a&&x&&("editProfile"===_?(0,k.jsx)(Je,{uri:e,name:G,image:J,onClose:de,shouldOpenImagePicker:y,userCapabilities:{edit_image:!N?.edit_image_disabled,edit_name:!N?.edit_name_disabled}}):null)]})]})},Ja=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,p.Q)(g.a_,[{uri:a}]),{public_playlists:s,total_public_playlists_count:o=0}=t||{};return i?(0,k.jsx)(c.K,{hasError:null!==r,errorMessage:u._s.get("error.not_found.title.page")}):(0,k.jsx)(m.y,{className:n()("contentSpacing",v),total:o,title:u._s.get("public_playlists"),showAll:!0,children:s?.map(((e,a)=>(0,k.jsx)(P.I,{index:a,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?u._s.get("user.followers",e.followers_count):"",images:[{url:(0,Ze.o)({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Qa=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,p.Q)(g.U1,[{uri:a,limit:50}]),s=t?.artists;return i?(0,k.jsx)(c.K,{hasError:null!==r,errorMessage:u._s.get("error.not_found.title.page")}):(0,k.jsx)(m.y,{className:n()("contentSpacing",v),total:s?.length,title:u._s.get("recently_played_artists"),showAll:!0,children:s?.map(((e,a)=>(0,k.jsx)(C.M,{index:a,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Ga=()=>{const{topArtists:e,loading:a,error:t}=Fa({includeTopArtists:!0,includeTopTracks:!1,topArtistsLimit:100,topTracksLimit:0});return a?(0,k.jsx)(c.K,{hasError:null!==t,errorMessage:u._s.get("error.not_found.title.page")}):null===e?null:(0,k.jsx)(m.y,{className:n()("contentSpacing",v),total:e.items.length,title:u._s.get("top_artists_this_month"),tagline:u._s.get("only_visible_to_you"),showAll:!0,children:e.items.map(((e,a)=>(0,k.jsx)(C.M,{index:a,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))})},Va=({isCurrentUser:e})=>e?(0,k.jsx)(Ga,{}):(0,k.jsx)(c.K,{hasError:!0,errorMessage:u._s.get("error.not_found.title.page")}),za=({uri:e})=>{const{topTracks:a,loading:t,error:i}=Fa({includeTopArtists:!1,includeTopTracks:!0,topArtistsLimit:0,topTracksLimit:100});return t?(0,k.jsx)(c.K,{hasError:null!==i,errorMessage:u._s.get("error.not_found.title.page")}):null===a?null:(0,k.jsxs)("div",{className:n()("contentSpacing",v,b),children:[(0,k.jsxs)("div",{className:x,children:[(0,k.jsx)(L.a,{as:"h1",variant:"titleSmall",className:_,children:u._s.get("top_tracks_this_month")}),(0,k.jsx)(L.a,{as:"p",variant:"bodySmall",children:u._s.get("only_visible_to_you")})]}),(0,k.jsx)(_a,{tracks:a.items,uri:e,hasHeaderRow:!0})]})},Xa=({uri:e,isCurrentUser:a})=>a?(0,k.jsx)(za,{uri:e}):(0,k.jsx)(c.K,{hasError:!0,errorMessage:u._s.get("error.not_found.title.page")});var Ya=t(5692);var qa=t(8802);const $a=(0,i.memo)((function(){const{userId:e=""}=(0,r.W4)(),a=decodeURIComponent(e),t=(0,o.oh)(a).toURI(),i=(e=>{const a=(0,Qe.A)(),t=(0,Ya.U)()?.username;return!a&&t===e})(a);return(0,k.jsx)("section",{children:(0,k.jsxs)(r.c5,{children:[(0,k.jsx)(r.kX,{path:"playlists",element:(0,k.jsx)(qa.I,{pageId:s.eA.PROFILE_PLAYLISTS,children:(0,k.jsx)(Ja,{uri:t})})}),(0,k.jsx)(r.kX,{path:"top/tracks",element:(0,k.jsx)(qa.I,{pageId:s.eA.PROFILE_TOP_TRACKS,children:(0,k.jsx)(Xa,{uri:t,isCurrentUser:i})})}),(0,k.jsx)(r.kX,{path:"top/artists",element:(0,k.jsx)(qa.I,{pageId:s.eA.PROFILE_TOP_ARTISTS,children:(0,k.jsx)(Va,{isCurrentUser:i})})}),(0,k.jsx)(r.kX,{path:"recently-played-artists",element:(0,k.jsx)(qa.I,{pageId:s.eA.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,k.jsx)(Qa,{uri:t})})}),(0,k.jsx)(r.kX,{path:"following",element:(0,k.jsx)(qa.I,{pageId:s.eA.PROFILE_FOLLOWING,children:(0,k.jsx)(I,{uri:t})})}),(0,k.jsx)(r.kX,{path:"followers",element:(0,k.jsx)(qa.I,{pageId:s.eA.PROFILE_FOLLOWERS,children:(0,k.jsx)(y,{uri:t})})}),(0,k.jsx)(r.kX,{path:"/",element:(0,k.jsx)(qa.I,{pageId:s.eA.PROFILE,children:(0,k.jsx)(Ka,{uri:t,isCurrentUser:i})})})]})})}))},5692:(e,a,t)=>{t.d(a,{U:()=>s});t(41260);var i=t(4564),r=t(43619);const s=()=>{const e=(0,i.w1)((e=>e.session?.user));return e?{type:r.s.USER,uri:e.uri,username:e.id,displayName:e.display_name??null,images:e.images.map((({url:e,width:a,height:t})=>({url:e,width:a||void 0,height:t||void 0})))}:null}},39188:(e,a,t)=>{t.d(a,{a:()=>i});const i=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-profile.js.map