'use client'
import { Transition, TransitionStatus } from 'react-transition-group';
import { useState, useRef, CSSProperties, TransitionEvent } from 'react';
import { TransitionKeys } from '@mui/material/transitions';


export default function TransitionPage() {


    const boxes = []
    const num_boxes = 100;
    for (let i = 0; i < num_boxes; i++) {
        let bg = i % 2 == 0 ? "bg-cyan-100" : "bg-cyan-300"
        boxes.push(<div className={bg + " w-100 h-100"}>{i}</div>)
    }
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    const duration = 3000
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
      }
      
    //   const transitionStyles: Map<TransitionStatus, CSSProperties> = {
    //     entering: { opacity: 1 },
    //     entered:  { opacity: 1 },
    //     exiting:  { opacity: 0 },
    //     exited:  { opacity: 0 },
    //   };

      const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
      };

    return (
        <div className="flex flex-col">
        <Transition nodeRef={nodeRef} timeout={duration} >
        {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
        ...transitionStyles[state] 
        }}>
          <div className='text-color-black'>I'm a fade Transition!</div>
        </div>
      )}
            </Transition>

            <div className="flex-none bg-red-200">My app bar</div>
            <div className="grid grid-cols-4 gap-4 p-4 items-center">
                <div> 
                    <button onClick={() => setInProp(true)}>
                        Click to Enter
                    </button>
                </div>
                {boxes}
            </div>
        </div>
    )
}