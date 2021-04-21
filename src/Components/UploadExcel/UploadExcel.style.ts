import styled from "styled-components";

const getColor = (props: any) => {
    if (props.isDragAccept) {
        return "#107c10";
    }
    if (props.isDragReject) {
        return "#d83b01";
    }
    if (props.isDragActive) {
        return "#2196f3";
    }
    return "#eeeeee";
};

export const StyledUpload = styled.div`
  max-width: 90%;
  margin: 10px;
  text-align: center;
  padding: 20px;
  border: 3px dashed ${(props) => getColor(props)};
  background-color: #fafafa;
  color: #bdbdbd;
  cursor: pointer;
  & span {
    font-size: 2.5em;
  }
`;

export const StyledRender = styled.div`

`;

export const UploadContainer = styled.div`
  max-width: 90%;
  margin: 0 auto 20px auto;
  text-align: center;
  padding: 10px;
  border: 3px dashed ${(props) => getColor(props)};
  background-color: #fafafa;
  color: #bdbdbd;
  cursor: pointer;
  & span {
    font-size: 2.5em;
  }
`;

export const Header = styled.div`
display: flex;
`

export const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  border-radius: 5px;
  margin-right: 10px;
  & h3{
    margin: 0;
    background: #7EB279;
    line-height: 2em;
  }
  & span {
    display: inline-block;
    color: #f08080;
    font-weight: bold;
    margin-left: 10px;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`

export const StyledColToAffect = styled.div`
  border-radius: 5px;
  border: solid 1px gray;
  width: 100%;
  padding: 10px;
`

export default {
    StyledUpload,
    StyledRender,
    Header,
    FileContent,
};
