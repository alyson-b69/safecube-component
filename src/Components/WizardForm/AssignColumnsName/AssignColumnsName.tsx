import React from "react";
import RenderTable from "../RenderTable/RenderTable";
import {ExcelTable} from "../WizardForm";
import {StyledButton} from "../WizardForm.style";
import {AssignContainer, WrapperSessionAssignment, SessionAssignment, Bloc, ThingToDo} from './AssignColumnsName.style';
import WrittenEffect from '../AnimationsEffect/WrittenEffect';

interface Props {
    aviExp: ExcelTable;
    files: File[];
}

export interface Assignments {
    id: string;
    label: string;
    columnName: string | null;
    columnIndex: number | null;
}

const AssignColumnsName: React.FC<Props> = ({aviExp, files}) => {
    const [compulsoryAssignments, setCompulsoryAssignments] = React.useState<Assignments[]>([{
        id: 'container_id',
        label: 'Container n°',
        columnName: null,
        columnIndex: null
    }, {
        id: 'shipment_number',
        label: 'Shipment n°',
        columnName: null,
        columnIndex: null
    }, {
        id: 'end_customer',
        label: 'End customers',
        columnName: null,
        columnIndex: null
    }]);
    const [actualCompulsoryAssignment, setActualCompulsoryAssignment] = React.useState<number | null>(0)
    const [optionnalAssignments, setOptionnalAssignments] = React.useState<Assignments[]>([{
        id: 'carrier_id',
        label: 'Carrier',
        columnName: null,
        columnIndex: null
    }, {
        id: 'bill_of_lading',
        label: 'Bill of lading',
        columnName: null,
        columnIndex: null
    },
        {
            id: 'departure_port',
            label: 'Departure port',
            columnName: null,
            columnIndex: null
        }, {id: 'arrival_port', label: 'Arrival port', columnName: null, columnIndex: null}, {
            id: 'departure_warehouse',
            label: 'Departure warehouse',
            columnName: null,
            columnIndex: null
        }, {id: 'departure_date', label: 'Departure date', columnName: null, columnIndex: null}, {
            id: 'product_reference',
            label: 'Products References',
            columnName: null,
            columnIndex: null
        }, {id: 'product_quantity', label: 'Products quantities', columnName: null, columnIndex: null}, {
            id: 'product_category',
            label: 'Products categories',
            columnName: null,
            columnIndex: null
        }, {
            id: 'product_subcategory',
            label: 'Products subcategories',
            columnName: null,
            columnIndex: null
        }]);
    const [actualOptionnalAssignment, setActualOptionnalAssignment] = React.useState<number | null>(null);
    const [startingRow, setStartingRow] = React.useState<number>(0)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("file", files[0]);
        formData.append('config', JSON.stringify({
            'start_at_row': startingRow,
            'columns' :
                [...compulsoryAssignments,...optionnalAssignments].filter(item => item.columnIndex !== null).map(item => {
                    if(item.columnIndex){
                        return {
                           'id': item.id,
                            'column_number': item.columnIndex
                        }
                    }
                })
        }))

        fetch('', {method:'POST', body: formData}).then(response => {
            console.log(response)
        })
    }

    return (
        <AssignContainer onSubmit={(event)=>handleSubmit(event)}>
            <h3>Assign the name of columns</h3>
            <p>We need to know what each columns corresponds to in order to process the masse creation of your
                shipments.</p>
            <WrapperSessionAssignment>
                <SessionAssignment disabled={false}>
                    <h4>Compulsory assignments</h4>
                    <p>To be abble to send your aviExp, you must at least assign the following columns : </p>
                    <div>
                        {compulsoryAssignments.map((colToAssign, index) => {
                            const isAssigned = colToAssign.columnName ? true : false;
                            const isSelected = actualCompulsoryAssignment === index;
                            return <Bloc key={index} disabled={false}
                                         status={isSelected ? 'selected' : isAssigned ? 'assigned' : ''}
                                         onClick={() => {
                                             !isSelected && !isAssigned && setActualCompulsoryAssignment(index)
                                         }}>
                                <h4>{colToAssign.label}</h4> <p
                                className={isAssigned ? '' : 'not-assigned'}>{isAssigned ? `Column ${colToAssign.columnName}` : 'No column specified '}</p>
                            </Bloc>
                        })}
                    </div>
                </SessionAssignment>

                <SessionAssignment disabled={!compulsoryAssignments.every(col => col.columnIndex !== null)}>
                    <h4>Optionnal assignments</h4>
                    <p>Pour avoir plus de renseignements : </p>
                    <div>
                        {optionnalAssignments.map((colToAssign, index) => {
                            const isAssigned = colToAssign.columnName ? true : false;
                            const isSelected = actualOptionnalAssignment === index;
                            const isDisabled = !compulsoryAssignments.every(col => col.columnIndex !== null)
                            return <Bloc key={index}
                                         disabled={isDisabled}
                                         status={isSelected ? 'selected' : isAssigned ? 'assigned' : ''}
                                         onClick={() => !isDisabled && setActualOptionnalAssignment(isSelected ? null : index)}>
                                <h4>{colToAssign.label}</h4> <p
                                className={isAssigned ? '' : 'not-assigned'}>{isAssigned ? `Column ${colToAssign.columnName}` : 'No column specified '}</p>
                            </Bloc>
                        })}
                    </div>
                </SessionAssignment>
            </WrapperSessionAssignment>
            <ThingToDo>
                {actualCompulsoryAssignment !== null
                    ? <h3><WrittenEffect string={'Click on the'}
                                         strong={compulsoryAssignments[actualCompulsoryAssignment].label}
                                         end={'column'}/> <span>↓</span></h3>
                    : actualOptionnalAssignment !== null
                        ? <h3><WrittenEffect string={'Click on the'}
                                             strong={optionnalAssignments[actualOptionnalAssignment].label}
                                             end={'column'}/> <span>↓</span></h3>
                        :
                        <h3><WrittenEffect string={'Choose a'} strong={'block'} end={'to assign'}/> <span>↑</span></h3>
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
                         startingRow={startingRow}
                         setStartingRow={setStartingRow}
            />

            <StyledButton disabled={!compulsoryAssignments.every(col => col.columnIndex !== null)}>Upload
                AviExp</StyledButton>
        </AssignContainer>
    )
}

export default AssignColumnsName;