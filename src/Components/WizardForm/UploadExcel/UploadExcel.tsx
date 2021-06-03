import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import Dropzone from "react-dropzone";
import { FileContent, StyledUpload } from "./UploadExcel.style";
//@ts-ignore
import { ExcelRenderer } from "react-excel-renderer";
import {StyledButton} from '../WizardForm.style'
import { ExcelTable } from "../WizardForm";

export interface Props{
   files: File[];
   setFiles: Dispatch<SetStateAction<File[]>>;
   aviExp: ExcelTable;
   setAviExp: Dispatch<SetStateAction<ExcelTable>>;
   currentStep: number;
   setCurrentStep: Dispatch<SetStateAction<number>>;
}

const UploadExcel: React.FC<Props> = ({files, setFiles, aviExp, setAviExp, currentStep, setCurrentStep}) => {

    React.useEffect(() => {
        files.map((file: File) => {
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
                <FileContent>
                    <h3>Welcome to the Mass Shipment Creation Wizard</h3>
                    <div>
                        <p>
                        With the Safecube solution, you can generate the creation of your shipments in bulk, through an Excel file, which we call AviExp.
                        </p><p>
                        The latter must at least contain the container number and the shipping number, but you can also enter a lot of information, such as the references and quantity of products present in the container, the shipping company, the port of departure, arrival, the bill of lading, the departure warehouse, the departure date etc ...
                    </p><p>
                        You can download a blank AviExp template <a href={"/"} title={"download template"}>here</a>.
                    </p><p>
                        The first step is to import your file below :
                    </p>
                    </div>
            <Dropzone onDrop={handleDrop} accept={".csv, .xls, .xlsx"} maxFiles={1}>
                {({
                      getRootProps,
                      getInputProps,
                      isDragActive,
                      isDragAccept,
                      isDragReject
                  }) => {
                    const fileAccepted = files[0]? true : false
                    return (
                        <StyledUpload
                            {...getRootProps({
                                isDragActive,
                                isDragAccept,
                                isDragReject
                            })}
                            fileAccepted={files[0]? true : false}
                        >
                            <input {...getInputProps()} />
                            <span>{isDragActive ? "📂" : fileAccepted ? "📄" : "📁"}</span>
                            {fileAccepted ?
                                <>
                                    <p className={'success'}>
                                        Your file {files[0].name} upload was successful.
                                    </p>
                                    <em className={'success'}>You can now import it.</em>
                                </>
                                :
                                <>
                                    <p>
                                        Drag 'n' drop your AviExp file here, or click to select a file
                                    </p>
                                    <em>(Only *.csv, *.xls and *.xlsx will be accepted)</em>
                                </>
                            }

                        </StyledUpload>
                    );
                }}
            </Dropzone>
                    <div style={{margin: '10px auto', minHeight: '50px', textAlign: 'center'}}>
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
                    <StyledButton
                        type={'button'}
                        disabled={files[0]? false : true}
                        onClick={() => {setCurrentStep(2)}}
                    >
                        Import AviExp
                    </StyledButton>
                </FileContent>
        </div>
    );
};

export default UploadExcel;
