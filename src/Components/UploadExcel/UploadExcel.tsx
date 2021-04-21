import React from "react";
import Dropzone from "react-dropzone";
import { StyledUpload, StyledRender } from "./UploadExcel.style";
//@ts-ignore
import { ExcelRenderer } from "react-excel-renderer";
import RenderTable from "./RenderTable/RenderTable";

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

    React.useEffect(() => {
        files.map((file: any) => {
            //@ts-ignore
            ExcelRenderer(file, (err, resp:ExcelTable) => {
                if (err) {
                    console.log(err);
                } else {
                    setAviExp(resp);
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
            <StyledRender>
                <strong>File: </strong>{" "}
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
                        <RenderTable aviExp={aviExp} />
                    </>
                )}
            </StyledRender>
        </div>
    );
};

export default UploadExcel;
