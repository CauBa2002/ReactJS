import {
    TYPE_LOG,
} from "./constants.js";

function getName(Name, type = TYPE_LOG){
    console[type](Name);
}

export default getName;