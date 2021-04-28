import React from "react";
import WizardTimeline from './WizardTimeline/WizardTimeline';
import UploadExcel from './UploadExcel/UploadExcel';
import {WizardFormCard} from './WizardForm.style'
import RenderTable from "./RenderTable/RenderTable";
import AssignColumnsName from './AssignColumnsName/AssignColumnsName'

interface Col {
    name: string,
    key: number,
}

export interface ExcelTable {
    cols: Col[];
    rows: any[];
}

const WizardForm = () => {
    const [files, setFiles] = React.useState([]);
    const [aviExp, setAviExp] = React.useState<ExcelTable>({cols: [], rows: []});
    const [cols, setCols] = React.useState([]);
    const [steps, setSteps] = React.useState([{id: 1, name: 'import aviExp'}, {id: 2, name: 'assign columns'}, {
        id: 3,
        name: 'end'
    }])
    const [currentStep, setCurrentStep] = React.useState<number>(1);

    const renderSwitch = (step: number) => {
        switch (step) {
            case 1:
                return <UploadExcel files={files} setFiles={setFiles} aviExp={aviExp} setAviExp={setAviExp}
                                    setCurrentStep={setCurrentStep} currentStep={currentStep}/>;
            case 2:
                return <AssignColumnsName aviExp={aviExp}/>;
            case 2.1 :
                return <div>2.1</div>
            default:
                return <UploadExcel files={files} setFiles={setFiles} aviExp={aviExp} setAviExp={setAviExp}
                                    setCurrentStep={setCurrentStep} currentStep={currentStep} />;
        }
    }

     return (
        <WizardFormCard>
            <WizardTimeline currentStep={currentStep} steps={steps} />
            {renderSwitch(currentStep)}
        </WizardFormCard>
    )
};

export default WizardForm;