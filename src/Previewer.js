import React from 'react';
import ReactMarkdown from 'react-markdown';

import {marked} from "https://esm.sh/marked";

function Previewer({ markdown }) {

    const html = marked(markdown);

    return (
        <div>
            <h2>Preview</h2>
            <div className="preview" dangerouslySetInnerHTML={{__html: html}}>
            </div>
        </div>
    );
}

export default Previewer;