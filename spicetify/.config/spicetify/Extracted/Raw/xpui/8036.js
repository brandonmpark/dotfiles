"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8036],{8036:(e,a,t)=>{t.d(a,{DsaModal:()=>ee});var s=t(96651),i=t(4564),n=t(8004),d=t(45531),l=t(76008),r=t(28524),o=t(12100),c=t(4732),m=t(20356),g=t(57800),u=(t(73952),t(41260),t(91372),t(4072)),E=t(29996),N=t(36773),h=t(19424),x=t(37324);let f=function(e){return e[e.UNKNOWN=0]="UNKNOWN",e[e.AGE=1]="AGE",e[e.GEO=2]="GEO",e[e.GENDER=3]="GENDER",e[e.INTEREST=4]="INTEREST",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED",e}({});const _={fromJSON:e=>({targetingTypes:globalThis.Array.isArray(e?.targetingTypes)?e.targetingTypes.map((e=>function(e){switch(e){case 0:case"UNKNOWN":return f.UNKNOWN;case 1:case"AGE":return f.AGE;case 2:case"GEO":return f.GEO;case 3:case"GENDER":return f.GENDER;case 4:case"INTEREST":return f.INTEREST;default:return f.UNRECOGNIZED}}(e))):[],legalEntityName:T(e.legalEntityName)?globalThis.String(e.legalEntityName):"",showTailoredAdsSection:T(e.showTailoredAdsSection)?Boolean(e.showTailoredAdsSection):void 0}),toJSON(e){const a={};return e.targetingTypes?.length&&(a.targetingTypes=e.targetingTypes.map((e=>function(e){switch(e){case f.UNKNOWN:return"UNKNOWN";case f.AGE:return"AGE";case f.GEO:return"GEO";case f.GENDER:return"GENDER";case f.INTEREST:return"INTEREST";case f.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e)))),""!==e.legalEntityName&&(a.legalEntityName=e.legalEntityName),void 0!==e.showTailoredAdsSection&&(a.showTailoredAdsSection=e.showTailoredAdsSection),a},create:e=>_.fromPartial(e??{}),fromPartial(e){const a={targetingTypes:[],legalEntityName:"",showTailoredAdsSection:void 0};return a.targetingTypes=e.targetingTypes?.map((e=>e))||[],a.legalEntityName=e.legalEntityName??"",a.showTailoredAdsSection=e.showTailoredAdsSection??void 0,a}};function T(e){return null!=e}var v=t(59148),y=t(60016),b=t(27892);const j="khENZvA4G9EjpLQiINss",p="Fu87PEr0tL6oDjmw_X2H";var A=t(2488);const w=({title:e,showTitle:a,children:t})=>(0,A.jsxs)("section",{className:j,children:[a&&(0,A.jsx)(n.a,{className:p,variant:"bodyMediumBold",as:"h3","aria-label":e,children:e}),t]});var G=t(87523);const S="P9gpV_sgryfUERYOdfor",O=({text:e,icon:a})=>(0,A.jsxs)(G.e,{className:S,condensed:!0,children:[a,(0,A.jsx)(n.a,{variant:"bodyMedium","aria-label":e,as:"h4",children:e})]}),R="FB2PxTNhkGbwFwYI2ufG",I="gZYgXNWbFSAAjLzGhOI9",C="eYxzC4s3Nw68RcbK7xzl",k="QrelMvam4WOTMVaO28Rl",D="_EaBFRLKy0nZJXkiRwlx",B="N77hKGzNc_lKQ5OG1EBN",K="JceC3xibcl3MHVULIK0b",U="Uk72m6OFBBdTZ3RJb0K_",M="IFqCps3krPbH25azco3F";const W=({activeTargetingTypes:e,item:a})=>{const t=(0,g.mg)(),{openURLWithSessionTransfer:s}=(0,b.W)();return[f.AGE,f.GENDER].some((a=>e.includes(a)))?(0,A.jsxs)(w,{title:o._s.get("ad-formats.dsa.modal.profileInfo"),showTitle:!0,children:[(0,A.jsx)(N.S,{className:M,condensedAll:!0,style:{marginBlockEnd:h.gm},children:e.map((e=>{const a=function(e){switch(e){case f.AGE:return{icon:(0,A.jsx)(u.O,{}),text:o._s.get("ad-formats.dsa.modal.targeting.age")};case f.GENDER:return{icon:(0,A.jsx)(E.O,{}),text:o._s.get("ad-formats.dsa.modal.targeting.gender")};default:return null}}(e);return a?(0,A.jsx)(O,{icon:a.icon,text:a.text},e):null}))}),(0,A.jsx)(n.a,{variant:"bodyMedium",semanticColor:"textSubdued","aria-label":o._s.get("ad-formats.dsa.modal.adRelevancyAction"),children:o._s.get("ad-formats.dsa.modal.adRelevancyAction")}),(0,A.jsxs)(x.c,{component:"button","aria-label":"Edit your Spotify profile, link",className:B,semanticColor:"textBrightAccent",onClick:()=>{s(y.e6),t.send((0,r.K)({ad_id:a.adId,lineitem_id:a.metadata?.lineitem_id,creative_id:a.metadata?.creative_id,slot:a.slot,event:"event_clicked",reason:"edit_profile",surface:"ad_dsa_view"}))},standalone:!0,children:[(0,A.jsx)(n.a,{variant:"bodyMediumBold",as:"h2",children:o._s.get("ad-formats.dsa.modal.editProfile")}),(0,A.jsx)(v.K,{semanticColor:"textBrightAccent"})]})]}):null};var F=t(66648),z=t(67628);const Z=({activeTargetingTypes:e})=>{const a=[f.GEO,f.INTEREST].some((a=>e.includes(a)));if(!a)return null;const t=a&&e.some((e=>e===f.AGE||e===f.GENDER));return(0,A.jsx)(w,{title:o._s.get("ad-formats.dsa.modal.otherInfo"),showTitle:t,children:(0,A.jsx)(N.S,{className:M,condensedAll:!0,children:e.map((e=>{const a=function(e){switch(e){case f.GEO:return{icon:(0,A.jsx)(F.c,{}),text:o._s.get("ad-formats.dsa.modal.targeting.location")};case f.INTEREST:return{icon:(0,A.jsx)(z.a,{}),text:o._s.get("ad-formats.dsa.modal.targeting.interests")};default:return null}}(e);return a?(0,A.jsx)(O,{icon:a.icon,text:a.text},e):null}))})})},L=({item:e})=>{const a=(0,g.mg)(),{openURLWithSessionTransfer:t}=(0,b.W)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("hr",{className:K}),(0,A.jsx)(n.a,{className:U,variant:"titleSmall","aria-label":o._s.get("ad-formats.dsa.modal.aboutTailoredAds"),as:"h2",children:o._s.get("ad-formats.dsa.modal.aboutTailoredAds")}),(0,A.jsx)(n.a,{variant:"bodyMedium",semanticColor:"textSubdued","aria-label":o._s.get("ad-formats.dsa.modal.tailoredAds"),children:o._s.get("ad-formats.dsa.modal.tailoredAds")}),(0,A.jsxs)(x.c,{component:"button","aria-label":"Visit your privacy settings, link",className:B,semanticColor:"textBrightAccent",onClick:()=>{t(`${y.y8}/#tailored-ads`),a.send((0,r.K)({ad_id:e.adId,creative_id:e.metadata?.creative_id,event:"event_clicked",lineitem_id:e.metadata?.lineitem_id,reason:"change_preferences",request_id:e.requestId,slot:e.slot,surface:"ad_dsa_view"}))},standalone:!0,children:[(0,A.jsx)(n.a,{variant:"bodyMediumBold",as:"h2",children:o._s.get("ad-formats.dsa.modal.privacySetting")}),(0,A.jsx)(v.K,{semanticColor:"textBrightAccent"})]})]})};var J=t(23616),P=t(1072),q=t(16928),Y=t(19872);const Q="vkMQw77rXE4cp8xsAdzl",V="emw6kR941D2wReukhCAJ",X=({advertiser:e,legalEntityName:a})=>{const{item:t}=(0,J.z)()||{item:null},s=t&&(0,q.UZ)(t)?t?.images:void 0,i=(0,Y.u)(s);return(0,A.jsxs)("div",{className:Q,children:[i&&(0,A.jsx)(P.WC,{className:V,src:i,loading:"lazy"}),(0,A.jsx)(n.a,{variant:"bodyMediumBold","aria-label":e,children:e}),a&&(0,A.jsx)(n.a,{variant:"bodySmall",semanticColor:"textSubdued","aria-label":a,children:a})]})};var H=t(30260);const $=e=>{const[a,t]=(0,s.useState)(null),[i,n]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{e?.metadata?.lineitem_id&&e.adId&&(async e=>{try{n(!0);const a=await H.getDsaAdMetadata(e);t(_.fromJSON(a)),n(!1)}catch(e){n(!1)}})({lineitemId:e.metadata.lineitem_id,adId:e.adId})}),[e]),{data:a,loading:i}},ee=({item:e})=>{const a=(0,g.mg)(),t=(0,i.OY)(),{isOpen:u}=(0,i.w1)((e=>e.ui.dsaDialog)),{data:E,loading:N}=$(e);return(0,s.useEffect)((()=>{a.send((0,r.K)({ad_id:e.adId,creative_id:e.metadata?.creative_id,event:"event_viewed",lineitem_id:e.metadata?.lineitem_id,reason:"ad_dsa_view",request_id:e.requestId,slot:e.slot,surface:"ad_dsa_view"}))}),[]),(0,A.jsxs)(m.c,{className:R,isOpen:u,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,contentLabel:o._s.get("ad-formats.dsa.aboutThisAd"),children:[(0,A.jsx)("div",{className:C,children:(0,A.jsx)(n.a,{"aria-label":o._s.get("ad-formats.dsa.aboutThisAd"),variant:"titleMedium",as:"h1",children:o._s.get("ad-formats.dsa.aboutThisAd")})}),(0,A.jsx)("hr",{className:K}),(0,A.jsx)("div",{className:I,children:N?(0,A.jsx)("div",{className:k,"data-testid":"loading-indicator",children:(0,A.jsx)(d.y,{size:"large"})}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(X,{advertiser:e.metadata.advertiser,legalEntityName:E?.legalEntityName}),E?.targetingTypes.length?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.a,{className:U,variant:"titleSmall",as:"h2","aria-label":o._s.get("ad-formats.dsa.modal.adBasedInfoExplanation"),children:o._s.get("ad-formats.dsa.modal.adBasedInfoExplanation")}),(0,A.jsx)(W,{item:e,activeTargetingTypes:E?.targetingTypes}),(0,A.jsx)(Z,{item:e,activeTargetingTypes:E?.targetingTypes})]}):(0,A.jsx)(n.a,{className:U,as:"h2","aria-label":o._s.get("ad-formats.dsa.modal.targeting.unknown"),tabIndex:0,children:o._s.get("ad-formats.dsa.modal.targeting.unknown")}),E?.showTailoredAdsSection&&(0,A.jsx)(L,{item:e})]})}),(0,A.jsx)("button",{"aria-label":o._s.get("close_button_action"),className:D,onClick:()=>{t((0,c.wL)())},children:(0,A.jsx)(l.K,{size:"medium",semanticColor:"textBase"})})]})}}}]);
//# sourceMappingURL=8036.js.map