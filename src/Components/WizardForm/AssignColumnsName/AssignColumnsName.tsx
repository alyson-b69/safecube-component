import React from "react";
import RenderTable from "../RenderTable/RenderTable";
import {ExcelTable} from "../WizardForm";
import { StyledButton } from "../WizardForm.style";
import {AssignContainer, SessionAssignment, Bloc, ThingToDo} from './AssignColumnsName.style';

interface Props {
    aviExp: ExcelTable;
}

const AssignColumnsName: React.FC<Props> = ({aviExp}) => {
    const [compulsoryAssignments, setCompulsoryAssignments] = React.useState([{
        id: 1,
        name: 'Shipments n°',
        columnName: null,
        columnIndex: null
    }, {id: 2, name: 'Container n°', columnName: null, columnIndex: null}, {
        id: 3,
        name: 'End customers',
        columnName: null,
        columnIndex: null
    }]);
    const [actualCompulsoryAssignment, setActualCompulsoryAssignment] = React.useState<number|null>(0)
    const [optionnalAssignments, setOptionnalAssignments] = React.useState([{
        id: 1,
        name: 'Carrier',
        columnName: null,
        columnIndex: null
    }, {id: 2, name: 'Bill of lading', columnName: null, columnIndex: null}, {
        id: 3,
        name: 'Departure port',
        columnName: null,
        columnIndex: null
    }, {id: 4, name: 'Arrival port', columnName: null, columnIndex: null}, {
        id: 5,
        name: 'Departure warehouse',
        columnName: null,
        columnIndex: null
    }, {id: 6, name: 'Departure date', columnName: null, columnIndex: null}, {
        id: 7,
        name: 'Products References',
        columnName: null,
        columnIndex: null
    },{id: 8, name: 'Products quantities', columnName: null, columnIndex: null}, {
        id: 9,
        name: 'Products categories',
        columnName: null,
        columnIndex: null
    },{
        id: 10,
        name: 'Products subcategories',
        columnName: null,
        columnIndex: null
    }]);
    const [actualOptionnalAssignment, setActualOptionnalAssignment] = React.useState<number|null>(null)

    return (
        <AssignContainer>
            <h3>Assign the name of columns</h3>
            <p>Web need to know what each columns corresponds to in order to process the masse creation of your
                shipments.</p>
            <SessionAssignment>
                <h4>Compulsory assignments</h4>
                <p>To be abble to send your aviExp, you must at least assign the following columns : </p>
                <div>
                    {compulsoryAssignments.map((colToAssign, index) => {
                        const isAssigned = colToAssign.columnName ? true : false;
                        const isSelected = actualCompulsoryAssignment === index;
                        return <Bloc key={index} disabled={false} status={isSelected ? 'selected' : isAssigned ? 'assigned' : ''}>
                            <h4>{colToAssign.name}</h4> <p
                            className={isAssigned ? '' : 'not-assigned'}>{isAssigned ? `Column ${colToAssign.columnName}` : 'No column specified '}</p>
                        </Bloc>
                    })}
                </div>
            </SessionAssignment>

            <SessionAssignment>
                <h4>Optionnal assignments</h4>
                <p>Pour avoir plus de renseignements : </p>
                <div>
                    {optionnalAssignments.map((colToAssign, index) => {
                        const isAssigned = colToAssign.columnName ? true : false;
                        const isSelected = actualOptionnalAssignment === index;
                        return <Bloc key={index}
                            disabled={!compulsoryAssignments.every(col => col.columnIndex !== null)}
                            status={isSelected ? 'selected' : isAssigned ? 'assigned' : ''}
                                     onClick={() => setActualOptionnalAssignment(index)}><h4>{colToAssign.name}</h4> <p
                            className={isAssigned ? '' : 'not-assigned'}>{isAssigned ? `Column ${colToAssign.columnName}` : 'No column specified '}</p>
                        </Bloc>
                    })}
                </div>
            </SessionAssignment>

            <ThingToDo>
                {actualCompulsoryAssignment !== null
                    ? <h3>Click on the <strong>{compulsoryAssignments[actualCompulsoryAssignment].name}</strong> column <span>↓</span></h3>
                    : actualOptionnalAssignment !== null
                        ? <h3>Click on the <strong>{optionnalAssignments[actualOptionnalAssignment].name}</strong> column <span>↓</span></h3>
                        : <h3>Choose a <strong>block</strong> to assign <span>↑</span></h3>
                }

            </ThingToDo>

            <RenderTable aviExp={aviExp}
                         compulsoryAssignments={compulsoryAssignments}
                         setCompulsoryAssignments={setCompulsoryAssignments}
                         actualAssignment={actualCompulsoryAssignment}
                         setActualAssigment={setActualCompulsoryAssignment}
                         optionnalAssignments={optionnalAssignments}
                         setOptionnalAssignments={setOptionnalAssignments}
                         actualOptionnalAssignment={actualOptionnalAssignment}
                         setActualOptionnalAssignment={setActualOptionnalAssignment}
            />
            <StyledButton disabled={!compulsoryAssignments.every(col => col.columnIndex !== null)}>Upload AviExp</StyledButton>
        </AssignContainer>
    )
}

export default AssignColumnsName;