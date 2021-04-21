import React from "react";
import Dropzone from "react-dropzone";
import { Header, FileContent, StyledColToAffect, StyledUpload, StyledRender } from "./UploadExcel.style";
//@ts-ignore
import { ExcelRenderer } from "react-excel-renderer";
import RenderTable from "./RenderTable/RenderTable";
import ColsToAffect from "./ColsToAffect/ColsToAffect";

interface Col{
    name: string,
    key: number,
}

export interface ExcelTable{
    cols: Col[];
    rows: any[];
}

const UploadExcel: React.FC = () => {
    const [files, setFiles] = React.useState([]);
    const [aviExp, setAviExp] = React.useState<ExcelTable>({cols:[], rows:[]});
    const [cols, setCols] = React.useState([])

    React.useEffect(() => {
        files.map((file: any) => {
            //@ts-ignore
            ExcelRenderer(file, (err, resp:ExcelTable) => {
                if (err) {
                    console.log(err);
                } else {
                    const newRows = resp.rows.map((row:any[]) => {
                        let newRow = []
                        for (let i=0; i < resp.cols.length; i++ ){
                            if(row[i]){
                                newRow.push(row[i]);
                            }else {
                                newRow.push('')
                            }
                        }
                        return newRow
                    })
                    setAviExp({cols: resp.cols, rows: newRows} );
                }
            });
        });
    }, [files]);

    const handleDrop = (acceptedFiles: any) =>
        setFiles(
            acceptedFiles.map((file: any) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        );

    return (
        <div>
            <Header >
                <FileContent>
                    <h3>1. Import your file</h3>
            <Dropzone onDrop={handleDrop} accept={".csv, .xls, .xlsx"} maxFiles={1}>
                {({
                      getRootProps,
                      getInputProps,
                      isDragActive,
                      isDragAccept,
                      isDragReject
                  }) => {
                    return (
                        <StyledUpload
                            {...getRootProps({
                                isDragActive,
                                isDragAccept,
                                isDragReject
                            })}
                        >
                            <input {...getInputProps()} />
                            <span>{isDragActive ? "📂" : "📁"}</span>
                            <p>
                                Drag 'n' drop your AviExp file here, or click to select a file
                            </p>
                            <em>(Only *.csv, *.xls and *.xlsx will be accepted)</em>
                        </StyledUpload>
                    );
                }}
            </Dropzone>
                    <div style={{margin: '5px', minHeight: '70px'}}>
                        <strong>File : </strong>
                        {files[0] && aviExp && (
                            <>
                            {/*@ts-ignore*/}
                            {files[0].name}{" "}
                            <span
                                onClick={() => {
                                    setFiles([]);
                                }}
                            >
              X
            </span>
                            </>)}
                    </div>
                </FileContent>
                <StyledColToAffect>
                    <h3>2. Assign the name of the columns</h3>
                </StyledColToAffect>
            </Header>
            <StyledRender>
                         {files[0] && aviExp && (
                        <RenderTable aviExp={aviExp} />
                )}

            </StyledRender>
        </div>
    );
};

export default UploadExcel;
