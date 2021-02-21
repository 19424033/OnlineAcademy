import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "video-react/dist/video-react.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import React, { useState, useEffect } from "react";

import UserService from "../../../services/user.service";
import { parseAccessToken,localparseJson } from "../../../utils/utils";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState, ContentState } from "draft-js";
import { Player, PosterImage } from "video-react";

const ManagetUser = () => {
  const [content, setContent] = useState();
  const tokenString = localStorage.getItem("AcademyOnline_Token");
  const accessToken = localparseJson(tokenString).accessToken;
  const user = parseAccessToken(tokenString);

  const [editorState, seteditorState] = useState();
  const [editorStateDraft, seteditorStateDraft] = useState();

  // lấy trường accessToken đi mã hoá và lấy ID
  useEffect(() => {
   
  }, []);
  const onEditorStateChange = (editorState) => {
    seteditorState(editorState);
    const contentBlock = htmlToDraft(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      seteditorStateDraft(editorState);
    }
  };
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
        <textarea
          disabled
          style={{ width: "100%" }}
          value={
            editorState &&
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          }
        />
        <Editor
          editorState={editorStateDraft}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />

        <Player
          poster="http://res.cloudinary.com/dzyfkhpce/video/upload/v1613474027/Illustrator_CC_2018_Fundamentals_For_Beginners/01._Introduction_ixunyw.jpg"
          src="http://res.cloudinary.com/dzyfkhpce/video/upload/v1613474027/Illustrator_CC_2018_Fundamentals_For_Beginners/01._Introduction_ixunyw.mp4"
        />
      </header>
    </div>
  );
};

export default ManagetUser;
