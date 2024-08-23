import React from 'react';

function Editor({ markdown, setMarkdown }) {
    return (
        <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Enter Markdown here..."
        />
    );
}

export default Editor;