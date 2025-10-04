/*Product Preview Slider*/
const curoselSettings = {
    snapAlign: "start",
    itemsToShow: 1,
    autoplay: false,
  };
  
  /*Testimonials Slider*/
  const testimonialSettings = {
    snapAlign: "start",
    itemsToShow: 3,
    autoplay: false,
  };
  const testimonialBreakpoints = {
    300: { itemsToShow: 1 },  
    600: { itemsToShow: 1 },
    767: { itemsToShow: 2 },
    991: { itemsToShow: 3 },
    1500: { itemsToShow: 3 },
    1800: { itemsToShow: 3 },
  };
  
  export{curoselSettings,testimonialSettings,testimonialBreakpoints}