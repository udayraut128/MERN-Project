 import { useEffect, useRef, memo } from "react";
 import PropTypes from "prop-types";
 import SyntaxHighlighter from "react-syntax-highlighter";
 import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
 import { MdContentCopy } from "react-icons/md";
 import { IoMdCheckmark } from "react-icons/io";
 import Clipboard from "clipboard";
//  kdfd

 const CodeBlock = memo(function CodeBlock({
   code,
   language,
   codeKey,
   copied,
   setCopied,
 }) {
   const copyButtonRef = useRef(null);

   useEffect(() => {
     const clipboard = new Clipboard(copyButtonRef.current, {
       text: () => code,
     });

     clipboard.on("success", () => {
       setCopied(codeKey);
       setTimeout(() => {
         setCopied(null);
       }, 1500);
     });

     clipboard.on("error", (err) => {
       console.error("Failed to copy text: ", err);
     });

     return () => clipboard.destroy();
   }, [code, codeKey, setCopied]);

   return (
     <div className="relative mb-4 ">
       
         <div className="absolute top-2 right-3 text-white ">
           {copied === codeKey ? (
             <p className="flex">
               <IoMdCheckmark />
               <span className="text-sm">Copied!</span>
             </p>
           ) : (
             <button ref={copyButtonRef} style={{ cursor: "pointer" }}>
               <MdContentCopy />
             </button>
           )}
         
       </div>
       <SyntaxHighlighter
         className="rounded-md text-sm md:text-base"
         language={language}
         style={atomOneDark}
       >
         {code}
       </SyntaxHighlighter>
     </div>
   );
 });

 CodeBlock.propTypes = {
   code: PropTypes.string.isRequired,
   language: PropTypes.string.isRequired,
   codeKey: PropTypes.string.isRequired,
   copied: PropTypes.string,
   setCopied: PropTypes.func.isRequired,
 };

 export default CodeBlock;