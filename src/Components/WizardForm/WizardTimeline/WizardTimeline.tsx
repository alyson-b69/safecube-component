import FillingEffect from '../AnimationsEffect/FillingEffect';
import {TimelineContainer, TimelineBubble, TimelineBar, TimelineBarFill, TimelineTitle, ValidatedIcon} from './WizardTimeline.style'

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
                    return <TimelineBubble key={index} isActive={isCurrentStep} isDone={stepIsDone}>{displayValidatedIcon ? <ValidatedIcon/> : step.id}
                    <TimelineTitle isActive={isCurrentStep}>{step.name}</TimelineTitle>
                    </TimelineBubble>
                } else {
                    return(
                    <TimelineBubble key={index} isActive={isCurrentStep} isDone={stepIsDone}>{displayValidatedIcon ? <ValidatedIcon/>  : step.id}
                        <TimelineBar><FillingEffect isDone={stepIsDone}/></TimelineBar>
                        <TimelineTitle isActive={isCurrentStep}>{step.name}</TimelineTitle>
                    </TimelineBubble>
                    )
                }
            })}
        </TimelineContainer>
    )
};

export default WizardTimeline;