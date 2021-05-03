import StyledExcel from "./RenderTable.style";
import React, {Dispatch, SetStateAction} from "react";
import {ExcelTable} from "../WizardForm";

interface Props {
    aviExp: ExcelTable;
    compulsoryAssignments: any[];
    setCompulsoryAssignments: Dispatch<SetStateAction<any>>;
    actualAssignment: number | null;
    setActualAssigment: Dispatch<SetStateAction<number|null>>;
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
    const isAssigning = actualAssignment !== null || actualOptionnalAssignment !== null
    const allCompulsoryAreAssigned = compulsoryAssignments.every(col => col.columnIndex !== null);


    const handleHover = (index: number) => {
        setIndexHover(index);
    }

    const handleAssign = (index: number) => {
        const colName = aviExp.cols[index].name;
        if (!allCompulsoryAreAssigned && actualAssignment !== null) {
            let compulsoryAssignmentsTmp = [...[], ...compulsoryAssignments];
            compulsoryAssignmentsTmp[actualAssignment].columnName = colName;
            compulsoryAssignmentsTmp[actualAssignment].columnIndex = index;
            setCompulsoryAssignments(compulsoryAssignmentsTmp);
            const everyCommpulsoryWillBeAssigned = compulsoryAssignmentsTmp.every(col => col.columnIndex !== null);
            if (actualAssignment < compulsoryAssignments.length -1 && !everyCommpulsoryWillBeAssigned) {
                setActualAssigment(actualAssignment + 1)
            } else{
                setActualAssigment(null);
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

    const handleUnassign = (index: number, type: string) => {
        const colName = aviExp.cols[index].name;
        if(type === 'optional'){
            let indexToChange = optionnalAssignments.findIndex(assignment => assignment.columnName === colName);
            let optionnalAssignmentsTmp = [...[], ...optionnalAssignments];
            optionnalAssignmentsTmp[indexToChange].columnName = '';
            optionnalAssignmentsTmp[indexToChange].columnIndex = null;
            setOptionnalAssignments(optionnalAssignmentsTmp);
        } else {
            let indexToChange = compulsoryAssignments.findIndex(assignment => assignment.columnName === colName);
            let compulsoryAssignmentsTmp = [...[], ...compulsoryAssignments];
            compulsoryAssignmentsTmp[indexToChange].columnName = '';
            compulsoryAssignmentsTmp[indexToChange].columnIndex = null;
            setCompulsoryAssignments(compulsoryAssignmentsTmp);
            setActualAssigment(indexToChange);
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
                                       className={isAssigned ? 'assigned' : index === indexHover && isAssigning ? 'hover' : ''}>
                                {isAssigned ?
                                    compulsoryAssignments.filter(item => item.columnName === col.name)[0] ?
                                        <> {compulsoryAssignments.filter(item => item.columnName === col.name)[0].name} <span onClick={()=>handleUnassign(index, 'compulsory')}> X </span></>
                                        : <>{optionnalAssignments.filter(item => item.columnName === col.name)[0].name} <span onClick={()=>handleUnassign(index, 'optional')}> X </span></>
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
                                               className={isAssigned ? 'assigned' : indexHover === index && isAssigning ? 'hover' : ''}>{cell}</td>;
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
