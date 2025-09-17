import gsap from "gsap";

/**
 * Animates the page-in banners by sliding them down, revealing the content.
 * This is typically called when a new page loads or the app initializes.
 */
export const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();
        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0, // Banners start covering the screen (from previous page-out)
            clearProps: "all" // Clear any previous GSAP properties
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100, // Slide down out of view to reveal the content
            stagger: 0.2,
        });
    }
};

/**
 * Animates the page-out banners by sliding them up, covering the current content.
 * This is typically called before navigating to a new page.
 * @param {function} onCompleteCallback - A callback function to execute after the animation completes,
 * typically used to perform the actual navigation.
 */
export const animatePageOut = (onCompleteCallback: () => void) => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();
        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour],{
            yPercent:-100,
        })
        tl.to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0, // Slide UP into view to cover the screen
            stagger: 0.2,
            onComplete: () => {
                if (onCompleteCallback) {
                    onCompleteCallback();
                }
            }
        });
    }
};
