import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const placeholder = `# Welcome to my React Markdown Previewer!

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
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

var marked = require("marked");

marked.setOptions({
  breaks: true
});

const EditorWindow = ({ handleChange, value }) => (
  <textarea id="editor" value={value} onChange={handleChange}></textarea>
);

const PreviewWindow = ({ input }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(input)
    }}
  />
);

const Header = ({ onClick, title }) => (
  <nav className="navbar navbar-dark bg-dark">
    <span className="badge text-light"> {title} </span>
    <button className="navbar-toggler bg-primary" onClick={onClick}>
      <span className="badge text-light"> Fullscreen </span>
    </button>
  </nav>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      editorFullScreen: false,
      previewFullScreen: false
    };
  }

  componentDidMount() {
    this.setState({ input: placeholder });
  }

  handleEditorUpdate = event => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  };

  hanleEditorFullScreen = () => {
    this.setState({
      editorFullScreen: !this.state.editorFullScreen,
      previewFullScreen: false
    });
  };

  hanlePreivewFullScreen = () => {
    this.setState({
      editorFullScreen: false,
      previewFullScreen: !this.state.previewFullScreen
    });
  };

  renderEditor() {
    if (this.state.previewFullScreen) {
      return;
    } else {
      const classes = this.state.editorFullScreen
        ? "editorFullScreen card shadow"
        : "editorWrap card shadow";
      return (
        <div className={classes}>
          <Header onClick={this.hanleEditorFullScreen} title={"Editor"} />
          <EditorWindow
            handleChange={this.handleEditorUpdate}
            value={this.state.input}
          />
        </div>
      );
    }
  }

  renderPreview() {
    if (this.state.editorFullScreen) {
      return;
    } else {
      const classes = this.state.previewFullScreen
        ? "preivewFullScreen card shadow"
        : "previewWrap card shadow";
      return (
        <div className={classes}>
          <Header onClick={this.hanlePreivewFullScreen} title={"Preivewer"} />
          <PreviewWindow input={this.state.input} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Markdown">
        {this.renderEditor()}
        {this.renderPreview()}
      </div>
    );
  }
}

export default App;
