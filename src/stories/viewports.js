const widths = {};
for (let i = 200; i <= 2500; i += 100) {
    const key = `width${i}`;
    widths[key] = {
        name: `Width ${i}`,
        styles: {
        width: `${i}px`,
        height: "100%",
        },
    };
}
export const widths100 = widths;

function generateHeights (width, minHeight, maxHeight, step) {
    let h = minHeight - step;
    let heights = {}
    while(h <= maxHeight){
        h = h + step;
        let heightObj = {
            name: `${width}W X ${h}H`, 
            styles: { width: `${width}px`, height: `${h}px` }
        };
        const key = `${width}Wx${h}H`
        heights[key] = heightObj;
        h + step
    }
    return heights;
}

export const heights1000 = generateHeights (1000, 1000, 2400, 200)

export const customViewports = {
    width200: {name: "Width 200", styles: { width: "200px", height: "100%"}},
    width300: {name: "Width 300", styles: { width: "300px", height: "100%"}},
    width320: {name: "Width 320", styles: { width: "320px", height: "100%"}},
    width360: {name: "Width 360", styles: { width: "360px", height: "100%"}},
    width375: {name: "Width 375", styles: { width: "375px", height: "100%"}},
    width384: {name: "Width 384", styles: { width: "384px", height: "100%"}},
    width393: {name: "Width 393", styles: { width: "393px", height: "100%"}},
    width400: {name: "Width 400", styles: { width: "400px", height: "100%"}},
    width412: {name: "Width 412", styles: { width: "412px", height: "100%"}},
    width414: {name: "Width 414", styles: { width: "414px", height: "100%"}},
    width428: {name: "Width 428", styles: { width: "428px", height: "100%"}},
    width500: {name: "Width 500", styles: { width: "500px", height: "100%"}},
    width568: {name: "Width 568", styles: { width: "568px", height: "100%"}},
    width600: {name: "Width 600", styles: { width: "600px", height: "100%"}},
    width640: {name: "Width 640", styles: { width: "640px", height: "100%"}},
    width667: {name: "Width 667", styles: { width: "667px", height: "100%"}},
    width700: {name: "Width 700", styles: { width: "700px", height: "100%"}},
    width720: {name: "Width 720", styles: { width: "720px", height: "100%"}},
    width736: {name: "Width 736", styles: { width: "736px", height: "100%"}},
    width740: {name: "Width 740", styles: { width: "740px", height: "100%"}},
    width760: {name: "Width 760", styles: { width: "760px", height: "100%"}},
    width768: {name: "Width 768", styles: { width: "768px", height: "100%"}},
    width780: {name: "Width 780", styles: { width: "780px", height: "100%"}},
    width800: {name: "Width 800", styles: { width: "800px", height: "100%"}},
    width812: {name: "Width 812", styles: { width: "812px", height: "100%"}},
    width844: {name: "Width 844", styles: { width: "844px", height: "100%"}},
    width846: {name: "Width 846", styles: { width: "846px", height: "100%"}},
    width851: {name: "Width 851", styles: { width: "851px", height: "100%"}},
    width854: {name: "Width 854", styles: { width: "854px", height: "100%"}},
    width869: {name: "Width 869", styles: { width: "869px", height: "100%"}},
    width873: {name: "Width 873", styles: { width: "873px", height: "100%"}},
    width896: {name: "Width 896", styles: { width: "896px", height: "100%"}},
    width900: {name: "Width 900", styles: { width: "900px", height: "100%"}},
    width915: {name: "Width 915", styles: { width: "915px", height: "100%"}},
    width915: {name: "Width 926", styles: { width: "926px", height: "100%"}},
    width1000: {name: "Width 1000", styles: { width: "1000px", height: "100%"}},
    width1080: {name: "Width 1080", styles: { width: "1080px", height: "100%"}},
    width1100: {name: "Width 1100", styles: { width: "1100px", height: "100%"}},
    width1112: {name: "Width 1112", styles: { width: "1112px", height: "100%"}},
    width1200: {name: "Width 1200", styles: { width: "1200px", height: "100%"}},
    width1280: {name: "Width 1280", styles: { width: "1280px", height: "100%"}},
    width1300: {name: "Width 1300", styles: { width: "1300px", height: "100%"}},
    width1400: {name: "Width 1400", styles: { width: "1400px", height: "100%"}},
    width1500: {name: "Width 1500", styles: { width: "1500px", height: "100%"}},
    width1600: {name: "Width 1600", styles: { width: "1600px", height: "100%"}},
    width1700: {name: "Width 1700", styles: { width: "1700px", height: "100%"}},
    width1800: {name: "Width 1800", styles: { width: "1800px", height: "100%"}},
    width1900: {name: "Width 1900", styles: { width: "1900px", height: "100%"}},
    width1920: {name: "Width 1920", styles: { width: "1920px", height: "100%"}},
    width2000: {name: "Width 2000", styles: { width: "2000px", height: "100%"}},
    width2250: {name: "Width 2250", styles: { width: "2250px", height: "100%"}},
    width2500: {name: "Width 2500", styles: { width: "2500px", height: "100%"}},
    width3000: {name: "Width 3000", styles: { width: "3000px", height: "100%"}},

    mobileView0: {name: "Mobile 384x854 ", styles: { width: "384px", height: "854px"}},
    mobileView1: {name: "Mobile 360x740 ", styles: { width: "360px", height: "740px"}},
    mobileView2: {name: "Motorola 30 Edge", styles: { width: "1080px", height: "2400px"}},
    mobileView3: {name: "Samsung A32", styles: { width: "720px", height: "1600px"}},
    mobileView4: {name: "Samsung J5", styles: { width: "720px", height: "1280px"}},
    mobileView5: {name: "Samsung J7", styles: { width: "720px", height: "1280px"}},
    mobileView6: {name: "iPhone 13", styles: { width: "1170px", height: "2532px"}},
    mobileView7: {name: "iPhone 7", styles: { width: "750px", height: "1334px"}},
    mobileView8: {name: "Mobile view 8 ", styles: { width: "412px", height: "892px"}},
    mobileView9: {name: "Mobile view 9 ", styles: { width: "393px", height: "873px"}},
    mobileView10: {name: "Mobile view 10 ", styles: { width: "393px", height: "851px"}},
    mobileView11: {name: "Mobile view 11 ", styles: { width: "375px", height: "812px"}},
    mobileView12: {name: "Mobile view 12 ", styles: { width: "375px", height: "667px"}},
    mobileView13: {name: "Mobile view 13", styles: { width: "412px", height: "846px"}},
}