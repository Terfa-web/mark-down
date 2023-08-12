import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'


const defualtMarkdown = `

![image](https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_1280.png)
  # Welcome
  ## This is it
  ### and here is it

  some code \`<div></div>\`

  \`\`\`
  //this is multi

  function anotherExample(first,last) {
    if(param) {
      return params
    }
  }
  \`\`\`

  you cna also make text **bold**

  or _italic_

  links [links](https://www.freecodecamp.com) and 

  > bold quote

  and lists items 
  - some are bullted.
    - with indentations
     -like this one

  others are ordered
  1. first list
  2. second list 
  3 and third
`

function App() {
  const [markdownText, setMarkdownText] = useState(defualtMarkdown)

  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}}>Markdown previewer</h1>
        <div className='boxes-container'>
          <textarea name='editor'
          id='editor'
          value={markdownText}
          onChange={ (e) => setMarkdownText(e.target.value)}></textarea>
          <div  id='preview'>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
