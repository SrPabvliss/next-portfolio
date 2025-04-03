import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <div className="rounded-lg">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}; 