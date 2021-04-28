import {TimelineContainer, TimelineBubble, TimelineBar, ValidatedIcon} from './WizardTimeline.style'

interface Props{
    currentStep: number;
    steps: any[];
}

const WizardTimeline: React.FC<Props> = ({currentStep, steps}) => {
    
    return (
        <TimelineContainer>
            {steps.map((step, index)=> {
                const isCurrentStep: boolean = step.id === Math.floor(currentStep);
                const stepIsDone: boolean = Math.floor(currentStep) > step.id;
                const displayValidatedIcon: boolean = stepIsDone && !isCurrentStep;
                if(index === steps.length - 1){
                    return <TimelineBubble isActive={isCurrentStep} isDone={stepIsDone}>{displayValidatedIcon ? <ValidatedIcon/> : step.id}</TimelineBubble>
                } else {
                    return(
                    <TimelineBubble isActive={isCurrentStep} isDone={stepIsDone}>{displayValidatedIcon ? <ValidatedIcon/>  : step.id}
                        <TimelineBar isDone={stepIsDone} />
                    </TimelineBubble>
                    )
                }
            })}
        </TimelineContainer>
    )
}

export default WizardTimeline;