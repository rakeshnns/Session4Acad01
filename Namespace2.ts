//TS file which invokes Namespace exported elements

//Refrencing to the Namesapce file.
///<reference path="Namespace1.ts"/>

let  namespace2var:NameSpace1.NameSpaceInter = {name:"Namespace",Assignment:1};
NameSpace1.NameSpaceFn(namespace2var);

//to complie :tsc --outfile .\bundle.ts .\Namespace2.ts  --> to a typescript file
/* or
 tsc --outfile final.js Namespace1.ts Namespace2.ts  --> to a .js file*/