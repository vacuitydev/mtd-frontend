import { MDXEditor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { listsPlugin } from "@mdxeditor/editor/plugins/lists";
import { quotePlugin } from "@mdxeditor/editor/plugins/quote";
import { thematicBreakPlugin } from "@mdxeditor/editor/plugins/thematic-break";
import { DiffSourceToggleWrapper, diffSourcePlugin } from "@mdxeditor/editor";
// importing the editor and the plugin from their full paths
import { headingsPlugin } from "@mdxeditor/editor/plugins/headings";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { BlockTypeSelect, ListsToggle } from "@mdxeditor/editor";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsSelector, updateDetails } from "./context/documentSlice";
export function Editor() {
  const mdxRef = useRef(null);
  const details = useSelector(detailsSelector);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Name</h1>
      <MDXEditor
        ref={mdxRef}
        onChange={(t) => {
          dispatch(
            updateDetails({
              ...details,
              name: t,
            })
          );
        }}
        markdown={""}
        plugins={[
          diffSourcePlugin({}),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <ListsToggle /> <BlockTypeSelect />
                </DiffSourceToggleWrapper>
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
      />

      <h1>Experience</h1>
      <MDXEditor
        ref={mdxRef}
        onChange={(t) => {
          dispatch(
            updateDetails({
              ...details,
              experience: t,
            })
          );
        }}
        markdown={""}
        plugins={[
          diffSourcePlugin({}),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <ListsToggle /> <BlockTypeSelect />
                </DiffSourceToggleWrapper>
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
      />
      <h1>Education</h1>
      <MDXEditor
        ref={mdxRef}
        onChange={(t) => {
          dispatch(
            updateDetails({
              ...details,
              education: t,
            })
          );
        }}
        markdown={""}
        plugins={[
          diffSourcePlugin({}),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                 <DiffSourceToggleWrapper> 
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle /> <BlockTypeSelect />
                 </DiffSourceToggleWrapper> 
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
      />
      <h1>Skills</h1>
      <MDXEditor
        ref={mdxRef}
        onChange={(t) => {
          dispatch(
            updateDetails({
              ...details,
              skills: t,
            })
          );
        }}
        markdown={""}
        plugins={[
          diffSourcePlugin({}),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle /> <BlockTypeSelect />
                </DiffSourceToggleWrapper>
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
      />
      <h1>Projects</h1>
      <MDXEditor
        ref={mdxRef}
        onChange={(t) => {
          dispatch(
            updateDetails({
              ...details,
              projects: t,
            })
          );
        }}
        markdown={""}
        plugins={[
          diffSourcePlugin({}),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle /> <BlockTypeSelect />
                </DiffSourceToggleWrapper>
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
      />
      <h1>Languages</h1>
      <MDXEditor
        ref={mdxRef}
        onChange={(t) => {
          dispatch(
            updateDetails({
              ...details,
              languages: t,
            })
          );
        }}
        markdown={""}
        plugins={[
          diffSourcePlugin({}),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle /> <BlockTypeSelect />
                </DiffSourceToggleWrapper>
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
      />
    </>
  );
}
