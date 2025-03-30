import Input from "./components/Input";
import CodeBlock from "./components/CodeBlock";
import { useState } from "react";
import "./index.css"; 
import "./tailwind.css"
function App() {
  const [copied, setCopied] = useState(null);
  const cppCodes={
    dataTypes:"hello",
  }
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);

  return (
     <>
      <div className="text-3xl p-6  ">
        Hello
         <CodeBlock
            code={cppCodes.dataTypes}
            language="cpp"
            codeKey="dataTypes"
            copied={copied}
            setCopied={setCopied}
            // setDisabled={setDisabled}
            // disabled={disabled}
          />

        <form>

        <Input
          value={email}
          onChange={({target}) => setEmail(target.value)}
          label="email"
          placeholder="email"
          type='text'
          />
            <Input
          value={password}
          onChange={({target}) => setPassword(target.value)}
          label="Password"
          placeholder="password"
          type="password"
          />
        </form>
      </div>
     </>
  );
}

export default App;
