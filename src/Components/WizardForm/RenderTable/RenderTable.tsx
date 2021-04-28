import StyledExcel from "./RenderTable.style";
import React from "react";
import {ExcelTable} from "../WizardForm";
import SelectLabelCol from "./SelectLabelCol/SelectLabelCol";

interface Props {
    aviExp: ExcelTable;
}

const RenderTable: React.FC<Props> = ({ aviExp }) => {

    return (
        <StyledExcel>
            <h3>TABLEAU</h3>
            <table>
                {aviExp.cols && (
                    <thead>
                    <tr>
                        <th>x</th>
                        {aviExp.cols.map((col) => {
                            return <th key={col.key}>{col.name}</th>;
                        })}
                    </tr>
                    </thead>
                )}

                {aviExp.rows && (
                    <tbody>
                    {aviExp.rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                <th>{index}</th>
                                {row.map((cell:any, index:number) => {
                                    return <td key={index}>{cell}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                )}
            </table>
        </StyledExcel>
    );
};

export default RenderTable;
