import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as v}from"./button-BWVLwPOL.js";import"./index-DJO9vBfz.js";const d=({imageAlignment:s,splitWidth:t,textAlignment:c,title:o,subTitle:u,image:x,altText:p,hasCTA:f,buttonText:g,buttonLink:h,makeFullBleed:T})=>{const y=t==="1/2"?"md:w-1/2":"md:w-2/3",j=t==="1/2"?"md:w-1/2":"md:w-1/3",r=e.jsx("div",{className:`flex flex-col ${y} my-3`,children:e.jsx("div",{className:"flex flex-col grow md:px-10 bg-white justify-center",children:e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsxs("div",{className:"flex flex-col text-gray-800 max-md:mt-10",children:[e.jsx("h2",{className:`mt-6 text-2xl text-${c} tracking-[5.25px] font-medium`,children:o}),e.jsx("span",{className:"mt-3 text-xl leading-8",dangerouslySetInnerHTML:{__html:u}})]}),f&&e.jsx(v,{variant:"destructive",className:"self-start px-5 py-2.5 mt-2 text-base tracking-[3.15px] max-md:mt-10",asChild:!0,children:e.jsx("a",{href:h,children:g})})]})})}),a=e.jsx("div",{className:`flex flex-col ${j}`,children:e.jsx("div",{className:"flex flex-col justify-center",children:e.jsx("img",{loading:"lazy",src:x,alt:p,className:"object-cover w-full aspect-[0.92] rounded-md"})})});return e.jsx("div",{className:`mb-6 ${T?"w-screen  ml-[calc(50%-50vw)] max-h-full":""}`,children:e.jsx("div",{className:"flex max-md:flex-col align-center",children:s==="left"?e.jsxs(e.Fragment,{children:[a,r]}):e.jsxs(e.Fragment,{children:[r,a]})})})};d.__docgenInfo={description:"",methods:[],displayName:"SplitHero",props:{imageAlignment:{required:!0,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},textAlignment:{required:!0,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:""},splitWidth:{required:!0,tsType:{name:"union",raw:'"1/2" | "1/3"',elements:[{name:"literal",value:'"1/2"'},{name:"literal",value:'"1/3"'}]},description:""},title:{required:!0,tsType:{name:"string"},description:""},subTitle:{required:!0,tsType:{name:"any"},description:""},image:{required:!0,tsType:{name:"string"},description:""},altText:{required:!0,tsType:{name:"string"},description:""},hasCTA:{required:!0,tsType:{name:"boolean"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""},buttonLink:{required:!1,tsType:{name:"any"},description:""},makeFullBleed:{required:!0,tsType:{name:"boolean"},description:""}}};const q={component:d},l={args:{imageAlignment:"left",textAlignment:"left",splitWidth:"1/2",title:"Title",subTitle:"SubTitle",image:"https://somestring",altText:"",hasCTA:!1,makeFullBleed:!1}};var n,i,m;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imageAlignment: "left",
    textAlignment: "left",
    splitWidth: "1/2",
    title: "Title",
    subTitle: "SubTitle",
    image: "https://somestring",
    altText: "",
    hasCTA: false,
    makeFullBleed: false
  }
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const A=["Default"];export{l as Default,A as __namedExportsOrder,q as default};
