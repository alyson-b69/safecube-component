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
  margin: 0 auto 20px auto;
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
`;

export default {
    StyledUpload,
    StyledRender
};
