export const pageAnimation={
    hidden:{
        opacity:0,
        y:200,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
        duration:0.5,
    }
    },
    exit:{
        opacity:0,
        y:200,
        transition:{
        duration:0.5
        }
    }
};

export const photoAnim={
    hidden:{scale:1.5,opacity:0},
    show:{scale:1,opacity:1, transition:{
        ease:'easeOut',
        duration:0.75,
        delay:2,
    }}
};

export const titleAnim={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{duration:0.5, ease:"easeOut",delay:0.75}
    }
};

export const titleAnim1={
    hidden:{opacity:0},
    show:{opacity:1,
    transition:{
    duration:0.5,ease:"easeOut"
    }}
};

export const titleAnimation={
    hidden:{opacity:0},
    show:{opacity:1,
    transition:{
    duration:0.5,ease:"easeOut",
    delay:0.5
    }}
};

export const fade={
    hidden:{opacity:0},
    show:{opacity:1,transition:{ease:'easeOut',duration:0.75,delay:1,
}},
    
};

export const fade1={
    hidden:{opacity:0},
    show:{opacity:1,transition:{ease:'easeOut',duration:0.75,delay:1.25}},
};

export const fade2={
    hidden:{opacity:0},
    show:{opacity:1,transition:{ease:'easeOut',duration:0.75,delay:0.75,
}}};

export const navAnim={
    hidden:{
        opacity:0,
        y:-200,
        
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:1, ease:'easeIn', delay:1
        }
    }
}
    