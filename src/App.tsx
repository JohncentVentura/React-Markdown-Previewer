import { useState } from 'react'
import ReactMarkdown from "react-markdown";
import './App.css'

const markdownValue = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markdownText, setMarkdownText] = useState(markdownValue);

  return (
    <div id="app-container">
      <div className="app-editor">
        <h2 className="app-title">Editor</h2>
        <textarea
          id="editor"
          name="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)} //Change markdownText based on textarea value upon onChange
        ></textarea>
      </div>
      <div className="app-previewer">
        <h2 className="app-title">Previewer</h2>
        <div id="preview"><ReactMarkdown>{markdownText}</ReactMarkdown></div>
      </div>
    </div>
  )
}

export default App