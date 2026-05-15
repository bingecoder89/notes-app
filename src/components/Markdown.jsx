import "@mdxeditor/editor/style.css";
import {
  MDXEditor,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
} from "@mdxeditor/editor";

function Markdown({ editText, setEditText }) {
  return (
    <MDXEditor
      className="w-11/12 h-6/12 pt-8"
      markdown={editText}
      onChange={(value) => setEditText(value)}
      plugins={[
        toolbarPlugin({
          toolbarClassName: "my-classname",
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
            </>
          ),
        }),
      ]}
    />
  );
}

export default Markdown;
