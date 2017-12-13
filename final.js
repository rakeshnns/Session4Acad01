//Namespace Example
var NameSpace1;
(function (NameSpace1) {
    //Function with Export
    function NameSpaceFn(Parameter) {
        console.log("Example With Namesapce, Assignment Name:" + Parameter.name + " \n           and Assignment number:" + Parameter.Assignment + ".");
    }
    NameSpace1.NameSpaceFn = NameSpaceFn;
})(NameSpace1 || (NameSpace1 = {}));
//TS file which invokes Namespace exported elements
//Refrencing to the Namesapce file.
///<reference path="Namespace1.ts"/>
var namespace2var = { name: "Namespace", Assignment: 1 };
NameSpace1.NameSpaceFn(namespace2var);
//to complie :tsc --outfile .\bundle.ts .\Namespace2.ts  --> to a typescript file
/* or
 tsc --outfile final.js Namespace1.ts Namespace2.ts  --> to a .js file*/ 
