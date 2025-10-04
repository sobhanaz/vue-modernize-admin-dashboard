/*Product Preview Slider*/
const curoselSettings = {
    snapAlign: 'start',
    itemsToShow: 1,
    autoplay: false,
    
};

/*Testimonials Slider*/
const userReviewSettings = {
    snapAlign: 'start',
    itemsToShow: 1,
    autoplay: false,
};
const userReviewBreakpoints = {
    300: { itemsToShow: 1 },
    600: { itemsToShow: 1 },
    767: { itemsToShow: 1 },
    991: { itemsToShow: 1 },
    1500: { itemsToShow: 1 },
    1800: { itemsToShow: 1 }
};

// OurLeaders
const ourLeadersSettings = {
    snapAlign: 'start',
    itemsToShow: 4,
    itemsToScroll: 1,
    autoplay: false
};
const ourLeadersBreakpoints = {
    300: { itemsToShow: 1 },
    600: { itemsToShow: 1 },
    767: { itemsToShow: 2 },
    991: { itemsToShow: 3 },
    1500: { itemsToShow: 4 },
    1800: { itemsToShow: 4 }
};

// OurLeaders
const OurTemplateSettings = {

    itemsToShow: 3.5,
    itemsToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
    pauseOnHover: true, // Pause autoplay on hover
    infinite: true, // Infinite scrolling
    wrapAround: true
};
const OurTemplateBreakpoints = {
    300: { itemsToShow: 1 },
    600: { itemsToShow: 1 },
    767: { itemsToShow: 2 },
    991: { itemsToShow: 3.5 },
    1500: { itemsToShow: 3.5 },
    1800: { itemsToShow: 3.5 }
};

export {
    curoselSettings,
    userReviewSettings,
    userReviewBreakpoints,
    ourLeadersSettings,
    ourLeadersBreakpoints,
    OurTemplateSettings,
    OurTemplateBreakpoints
};
