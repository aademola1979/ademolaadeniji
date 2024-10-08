import { delay } from "framer-motion";

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: .2,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
export const hoverVariant = () => (
  {
    hover:{
      scale:1.1,
      color:"#f8e112",
    },
    transition:{
         
    }
})


export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: i * 0.1,
    },
  }),
};





export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
export const homeWelcomeVaraints ={
  hidden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      duration:0.55,
      ease:'easeInOut'
    }
  }
}
export const planetVariants = (direction, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-220%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: duration,
      delay: delay,
      viewport:{once:false }
    },
    
  },
  
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
});

export const zoomOut = (delay, duration) => ({
  hidden:{
    scale:1.1,
    opacity:0,
  },
  show:{
    scale:1,
    opacity:1,
    transition:{
      type:'tween',
      delay,
      duration,
      ease:'easeInOut'
    }
  }
})

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};


export const slidingVariants = {
  hidden:{
    
    opacity:0
  },
  show:{
   
    opacity:1,
  
    transition:{
      duration:1.1
    }  
  },

  exit:{
    opacity:0,
    transition:{
      duration:1.1,
      ease:'easeOut'
    }
  }

 
}



export const sidebarVaraints = (direction, type, delay, duration)=>(
  {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
    exit:{
      x:'-100vw',
      transition:{
        duration:0.8,
        ease:'easeOut'}
    }

  }
)




export const slidingVariants2 = (direction, type, delay, duration)=>(
  {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
    exit:{
      x:'-100vw',
      transition:{
      duration: 1,
        ease:'easeOut'}
    }

  }
)
