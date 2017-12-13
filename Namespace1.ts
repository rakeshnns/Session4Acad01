//Namespace Example

namespace NameSpace1{
    //Interface with Export
    export interface NameSpaceInter{
        name: string;
        Assignment: number;
    }
    //Function with Export
    export function NameSpaceFn(Parameter: NameSpaceInter){
           console.log(`Example With Namesapce, Assignment Name:${Parameter.name} 
           and Assignment number:${Parameter.Assignment}.`);
    }

}