import StyledExcel from "./RenderTable.style";
import React, {Dispatch, SetStateAction} from "react";
import {ExcelTable} from "../WizardForm";
import SelectLabelCol from "./SelectLabelCol/SelectLabelCol";

interface Props {
    aviExp: ExcelTable;
    compulsoryAssignments: any[];
    setCompulsoryAssignments: Dispatch<SetStateAction<any>>;
    actualAssignment: number;
    setActualAssigment: Dispatch<SetStateAction<number>>;
    optionnalAssignments: any[];
    setOptionnalAssignments: Dispatch<SetStateAction<any>>;
    actualOptionnalAssignment: number | null;
    setActualOptionnalAssignment: Dispatch<SetStateAction<number | null>>;
}

const RenderTable: React.FC<Props> = ({
                                          aviExp,
                                          compulsoryAssignments,
                                          setCompulsoryAssignments,
                                          actualAssignment,
                                          setActualAssigment,
                                          optionnalAssignments,
                                          setOptionnalAssignments,
                                          actualOptionnalAssignment,
                                          setActualOptionnalAssignment
                                      }) => {

    const [indexHover, setIndexHover] = React.useState<number | null>(null);
    const [isAssignmentAction, setisAssignmentAction] = React.useState<boolean>(true)


    const handleHover = (index: number) => {
        setIndexHover(index);
    }

    const handleAssign = (index: number) => {
        const colName = aviExp.cols[index].name;
        if (!compulsoryAssignments.every(col => col.columnIndex !== null)) {
            let compulsoryAssignmentsTmp = [...[], ...compulsoryAssignments];
            compulsoryAssignmentsTmp[actualAssignment].columnName = colName;
            compulsoryAssignmentsTmp[actualAssignment].columnIndex = index;
            setCompulsoryAssignments(compulsoryAssignmentsTmp);
            if (actualAssignment < compulsoryAssignments.length) {
                setActualAssigment(actualAssignment + 1)
            }
        } else {
            if (actualOptionnalAssignment !==null) {
                let optionalAssignmentsTmp = [...[], ...optionnalAssignments];
                optionalAssignmentsTmp[actualOptionnalAssignment].columnName = colName;
                optionalAssignmentsTmp[actualOptionnalAssignment].columnIndex = index;
                setOptionnalAssignments(optionalAssignmentsTmp);
                setActualOptionnalAssignment(null)
            }
        }
    }

    return (
        <StyledExcel>
            <table>
                {aviExp.cols && (
                    <thead>
                    <tr>
                        <th>x</th>
                        {aviExp.cols.map((col, index) => {
                            const isAssigned = compulsoryAssignments.map(item => item.columnName).includes(col.name) || optionnalAssignments.map(item => item.columnName).includes(col.name);
                            return <th key={col.key} onMouseEnter={() => {
                                handleHover(index)
                            }} onMouseLeave={() => setIndexHover(null)} onClick={() => {
                                handleAssign(index)
                            }}
                                       className={isAssigned ? 'assigned' : index === indexHover && isAssignmentAction ? 'hover' : ''}>
                                {isAssigned ?
                                    compulsoryAssignments.filter(item => item.columnName === col.name)[0] ?
                                        compulsoryAssignments.filter(item => item.columnName === col.name)[0].name
                                        : optionnalAssignments.filter(item => item.columnName === col.name)[0].name
                                    : col.name}
                            </th>;
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
                                {row.map((cell: any, index: number) => {
                                    const isAssigned = compulsoryAssignments.map(item => item.columnIndex).includes(index) || optionnalAssignments.map(item => item.columnIndex).includes(index);
                                    return <td key={index} onMouseEnter={() => {
                                        handleHover(index)
                                    }} onMouseLeave={() => setIndexHover(null)}
                                               onClick={()=> handleAssign(index)}
                                               className={isAssigned ? 'assigned' : indexHover === index && isAssignmentAction ? 'hover' : ''}>{cell}</td>;
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
