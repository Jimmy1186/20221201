import { Machine, State, assign, createMachine, interpret } from "xstate";



export const amrMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgEMBbAJ3xAActYBLAFxqw3IA9EBaATgAZ0BPDgGZuyNCGIkAdAFkA8gDUAouSq0GTVogBMANk6SA7IIAsggwFZ+iAIw6do9BMkBJACIAZZUkrV6jZt5sCGaGJmaWIAII5gaS5g7ipJIAygASAKoAKq6yAOoAciq+6gGgQezGWlYIWgZaoqJAA */

  /** @xstate-layout N4IgpgJg5mDOIC5QEMC2AnAdASQCIBkBRAYkIDcwA7AFwAIBGAbQAYBdRUABwHtYBLan26UOIAB6J6ANgDMmAOwyALDPkBWADQgAnojUAOBWoC+xrWiwBZAPIA1EuSp0mbUT36DhoiQgBM83wVlVU0dRF9fQxNTLUpuCDhRCzdeASERJHFEAFoATmYtXQRsmWYYkAtMG3sUj3TvcKlcoJV1QskpKXLKvCJatK9Mn1UWkPaENXlMaPMMTABlAAkAVQAVXGsAdQA5fs8M0B9spV9x-19TUyA */

  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgEEAhAeQCUAVAfQFkBJAZTZaoDkBtABgC6iUAAcA9rFwAXXOPwiQAD0QAmAMwBGAHQAOfgBYAbLoDsAVgA0IAJ6JNqgL6PraLHkJFtDWHlEAFdAAbILBpBhIIeTBtAgA3cQBrGLccAmJvX1wA4NDwhHjxTHRZeQFBcsUJKVKFJGU1Ux0ATlVNMytbRHUNbWbzLVVzZxcQfHEIOEVUj2IqyRk5OtAVBABaTWs7BGaDPoGHYdGZ9K8fP0CQsIZ5mqXFVYNTLbVm5u0DA6HnVww0z286AAZtIwAAnOjoWCJGgAV3wN3q1UW8geiFMpm06ma-CMQxeCHaqg+XyOv3cp28qFwsCk8jIACNxGDwrcUcsGghTEYsap+INOttVAZ+PsBT8QCcAQwgQRgoixAtamiEE89rpVLpDgSesT+uKRkA */
  createMachine(
    {
      initial: "_shipPallet_",
      predictableActionArguments: true,
      context:{
        senserData:undefined as | string | undefined
      },
      states: {
        _shipPallet_: {
          states:{},
          invoke:{
            src:'senserMachine',
            onDone:{
                target:'_final_',
                actions:assign({
                    senserData:(ctx:any,e)=>{
                        return ctx.data.cachesTime
                    }
                })
            }
          },
          entry:'alertGreen',
          always:[
            {target:'_final_',cond:'abortNow'}
          ]
        },
       _afterTaskRun_ :{},
       _missionAbort_:{},
       _final_:{
        type:"final",
        
       }

      },
      
      on: {
        ABORT_MISSION: {
          actions: 'setAbortFlag',
        },
      },
     
    }
  );



  function executeMachine(emitMessage:string){
    return amrMachine.withConfig({
    actions: {
      alertGreen: (ctx,e) => {
        return console.log('green');
      },
      sendCommand:(ctx,e)=>{
        console.log(emitMessage)
      }
    },
    guards: {
      abortNow:(ctx,e)=>{
          return ctx.senserData.includes("stop")
      }
    },
  });


  }



 export const senserMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5SzAOxQJwMQA9YBcBDfMAOkIDMSMAKAVgAYmBKLFdMDAbQYF1FQABwD2sAJb4xw1AJA5EAFgBMAGhABPRAA4AzKQDsdAL5G17TKQD6EMEQDGJCJaxjYAMWEBXVBB78kICLiktKy8ggAjFp0pFoKOoZqmpEAnDomZmgWlt429o7OqML4Hrl+skESUjIB4Ur1SYg6OgwZIOacVrm2hA6QznhEJORUnDQRTCxsWZ05Pj19TuUBlSE1oOE6dHSNCAC0+kompiBFNvABHRgVolWhtYh7KaoajxF0KaTGJ1dWeb0FG7BaphR4KBS7JQMABsX10zQRiJ0ETavzm-0WliBd3WciaCi0sXiiVekToEVIDHhSMRKJ+MwwVkkAFswABVQRYla3NagyLRIkJHakrQU74mIA */
createMachine({
    id:'senser',
    predictableActionArguments: true,
    initial:"_undetacted_",
    context:{
        cachesTime:'4200'
    },
    after:{
        
        50000:{
            target:'_timeUp_'
    }},
    states:{
        _detacted_:{
            on:{
                isFound:{
                    target:'_timeUp_'
                }
            }
        },
        _undetacted_:{
            after:{
                10000:{
                    target:'_timeUp_'
                }
            },
            on:{
                notFound:{
                    target:'_detacted_'
                }
            }
        },
        _timeUp_:{
            type:"final",
            data:(ctx,e)=>({
                cachesTime:ctx.cachesTime
            })
        }
    }
  })



export const executor =(amrid:string)=>(source$:string)=>{
  const fsm = interpret(executeMachine(amrid)).start()

  return fsm
}







