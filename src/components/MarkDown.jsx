import React from 'react'
// import ReactMarkdown from 'https://esm.sh/react-markdown@7'

import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

// ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)

function MarkDown({value}) {
  console.log(value)
  return (
    <>
       <section className="text_div">
       
       <ReactMarkdown>{value}</ReactMarkdown>
     </section>
  
    </>
  )
}

export default MarkDown


