import React,{ useState, useEffect } from 'react';
import { OnboardingStyled, 
         OneStyled, 
         TwoStyled, 
         ThreeStyled,
         DotStyled
        } from './onboarding.styles';
import { useLocation } from 'wouter';

const Onboarding = () => {
    const [, pushLocation ] = useLocation();
    const [state, setState] = useState(0);
    const onboarding = ['Con “CloseCase” podrás administrar bien tus casos.',
                        'Con “CloseCase” podrás tener más orden.',
                        'Con “CloseCase” podrás digitalizar todos tus expedientes..'];  
    


    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            setState(count)
            if(count < 2){
                count++;
            } else {
                count = 0;
            }
        }, 1500);
        return () => clearInterval(interval);
      }, []);

    return (
        <OnboardingStyled>
            <OneStyled>
                <button onClick={()=>pushLocation('/home')}>
                    OMITIR
                </button>
            </OneStyled>
            <TwoStyled>
                <p>{onboarding[state]}</p>
            </TwoStyled>
            <ThreeStyled>
                <DotStyled color={ state === 0 }/>
                <DotStyled color={ state === 1 }/>
                <DotStyled color={ state === 2 }/>
            </ThreeStyled>
        </OnboardingStyled>
    )
}

export default Onboarding;
