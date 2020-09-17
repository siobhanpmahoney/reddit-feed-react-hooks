import React, {useState} from 'react'
import { exampleTypeError } from './ErrorIndex'

const ErrorContainer = (props) => {

  const [errorPreview, setErrorPreview] = useState(null);

  // useEffect(() => {
  //   console.log("updated");
  // }, [errorPreview]);

  const updateErrorPreview = (message, name) => {
    console.log(`${name}: ${message}`);

    setErrorPreview(`${name}: ${message}`);
  };

  const refError = () => {
    try {
      throw new ReferenceError("Hello");
    } catch (e) {
      console.log(e.message)               // "Hello"
      console.log(e.name)                  // "TypeError"
      updateErrorPreview(e.message, e.name);
    }
  };

  const typeError = () => {
    try {
      throw new TypeError('This is a type error')
    } catch (e) {
      console.log(e.message)               // "Hello"
     console.log(e.name)                  // "TypeError"
      updateErrorPreview(e.message, e.name);
      console.log(e instanceof TypeError)  // true
      console.log(e.message)               // "Hello"
      console.log(e.name)                  // "TypeError"
      console.log(e.fileName)              // "someFile.js"
      console.log(e.lineNumber)            // 10
      console.log(e.columnNumber)          // 0
      console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
    }
  }



  return (
    <div id="errorPage">
      <div id="pagetitlesection">
              <h3>Error Demo</h3>
            </div>

            <div id="content">
              <div id="errorContainer">
                <button onClick={refError}>
                  Create <code>ReferenceError</code>
                </button>

                <button onClick={typeError}>
                  Create <code>TypeError</code>
                </button>
              </div>
              <div id="errorMessageContainer">
                <div id="previewSection">
                  {!!errorPreview ? (
                     `${errorPreview}`
                  ) : (
                    "Select error to preview"
                  )

                    }
                </div>

                <div id="buttonSection">
                  {!!errorPreview && <button onClick={() => setErrorPreview(null)}>Clear</button>}
                </div>
              </div>
            </div>
    </div>
  )
}

export default ErrorContainer
