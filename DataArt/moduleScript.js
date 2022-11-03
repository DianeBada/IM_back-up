import define from "./dataIndex.js";
    import {Runtime, Library, Inspector} from "./runtime.js";
    
    const runtime = new Runtime();
    const main = runtime.module(define, Inspector.into(document.body));

y