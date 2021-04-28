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

export const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-right: 10px;
  & h3{
    margin: 0;
    line-height: 2em;
  }
  & div{
    text-align: justify;
    width:80%;
    margin: 0 auto;
    & a {
      color: #7EB279;
      text-decoration: none;
      transition: all ease-in-out 0.4s;
      &:hover{
        font-weight: bold;
      }
    }
  }
  & span {
    display: inline-block;
    color: #f08080;
    font-weight: bold;
    margin-left: 10px;
    transition: all ease-in-out 0.4s;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`

export const StyledUpload = styled.div`
  max-width: 90%;
  margin: 10px;
  text-align: center !important;
  padding: 20px;
  border: 3px dashed ${(props) => getColor(props)};
  background-color: #fafafa;
  color: #bdbdbd;
  cursor: pointer;
  & span {
    font-size: 2.5em;
  }
`;

export default {

    FileContent,
    StyledUpload,

};
