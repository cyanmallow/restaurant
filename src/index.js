//import background, h1 and para
import { pageLoad } from './pageLoad.js';

pageLoad();

import { menuModule } from './menuModule.js';
import { aboutModule } from './aboutModule.js';

//tab switching logic
document.getElementById("home").addEventListener('click', function(){
    // runs homeModule, aka pageLoad
    pageLoad();
})

document.getElementById("menu").addEventListener('click', function(){
    // runs menuModule

    menuModule();
})

document.getElementById("about").addEventListener('click', function(){
    // runs aboutModule
    aboutModule();
})



