import React from "react";
import Files from "react-files";

const FileUpload = () => {
  const onFilesChange = files => {
    var reader = new FileReader();
    console.log(files[0]);
    reader.onload = function(event) {
      // The file's text will be printed here
      console.log(event.target.result);
    };
    reader.readAsText(files[0]);
  };

  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };
  return (
    <div className="files">
      <Files
        className="files"
        onChange={onFilesChange}
        onError={onFilesError}
        accepts={[".kml", ".kmz", ".txt"]}
        multiple
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        Drop files here or click to upload
      </Files>
    </div>
  );
};

export default FileUpload;
