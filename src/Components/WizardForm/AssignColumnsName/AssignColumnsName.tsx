import React from "react";
import RenderTable from "../RenderTable/RenderTable";
import {ExcelTable} from "../WizardForm";

interface Props {
    aviExp: ExcelTable;
}

const AssignColumnsName:React.FC<Props> = ({ aviExp }) => {
    return (
        <div>
            <h3>Assign the name of columns</h3>
            <p>Web need to know what each columns corresponds to in order to process the masse creation of your shipments.</p>
            <div>
                <h4>Compulsory assignments</h4>
                <p>To be abble to send your aviExp, you must at least assign the following columns : </p>
                <div>

                </div>
            </div>

            <RenderTable aviExp={aviExp} />
        </div>
    )
}

export default AssignColumnsName;