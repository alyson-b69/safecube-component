import React from "react";
import StyledSelect from './SelectLabelCol.style'

interface Props{
    col: string;
}

const SelectLabelCol: React.FC<Props> = ({col}) => {
    return (
        <StyledSelect name={col} id={col}>
            <option value="">--------</option>
            <option value={'1'}>Shipment n°</option>
            <option value={''}>Container n°</option>
            <option value={''}>POI</option>
            <option value={''}>POA</option>
            <option value={''}>Carrier</option>
        </StyledSelect>
    )
}

export default SelectLabelCol;