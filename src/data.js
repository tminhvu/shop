export const sliderItems = [
    {
        id: 1,
        img: "https://i.ibb.co/cXFnLLV/3.png",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: "https://i.ibb.co/DG69bQ4/2.png",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "https://i.ibb.co/cXFnLLV/3.png",
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fbf0f4",
    },
];

export const categories = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "SHIRT STYLE!",
        category: "shirt"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "LOUNGEWEAR LOVE",
        category: "cap"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "LIGHT JACKETS",
        category: "jacket"
    },
];

export const popularProducts = [
    //  title: { type: String, required: true, unique: true },
    //    desc: { type: String, required: true },
    //    img: { type: String, required: true },
    //    categories: { type: Array },
    //    size: { type: String },
    //    color: { type: String },
    //    price: { type: Number, required: true },
    {
        _id: "1",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
        title: "tshirt crusher",
        desc: "a tshirt",
        categories: ['shirt', 'man'],
        size: ["m", "l", "xl"],
        color: ["white", "black"],
        price: 20,
        createdAt: "1/12/2022"
    },
    {
        _id: "2",
        img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        title: "jacket woman",
        desc: "a jacket",
        categories: ['jacket', 'woman'],
        size: ["m", "l", "xl"],
        color: ["brown", "green"],
        price: 40,
        createdAt: "3/1/2022"
    },
    {
        _id: "3",
        img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
        title: "shirt color",
        desc: "a colorful shirt",
        categories: ['shirt', 'man'],
        size: ["m", "l", "xl"],
        color: ["red", "green"],
        price: 20,
        createdAt: "12/1/2022"
    },
    {
        _id: "4",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        title: "cap dog",
        desc: "a cap with dog",
        categories: ['cap', 'man'],
        size: ["m", "l", "xl"],
        color: ["gray", "red"],
        price: 10,
        createdAt: "12/12/2022"
    },
    {
        _id: "5",
        img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
        title: "tote bag",
        desc: "a tote bag",
        categories: ['bag', 'man'],
        size: ["m", "l", "xl"],
        color: ["gray", "yellow"],
        price: 30,
        createdAt: "2/12/2022"
    },
    {
        _id: "6",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        title: "cap dog 2",
        desc: "a cap with dog",
        categories: ['cap', 'man'],
        size: ["m", "l", "xl"],
        color: ["gray", "yellow"],
        price: 10,
        createdAt: "6/12/2022"
    },
    {
        _id: "8",
        img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
        title: "shirt color 2",
        desc: "a colorful shirt",
        categories: ['shirt', 'man'],
        size: ["m", "l", "xl"],
        color: ["green", "blue"],
        price: 20,
        createdAt: "7/12/2022"
    },
    {
        _id: "9",
        img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        title: "jacket woman 2",
        desc: "a jacket",
        categories: ['jacket', 'woman'],
        size: ["m", "l", "xl"],
        color: ["brown", "red"],
        price: 40,
        createdAt: "8/12/2022"
    },
    {
        _id: "10",
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
        title: "Shoe",
        desc: "a shoe",
        categories: ['shoe', 'man'],
        size: ["l"],
        color: ["black"],
        price: 30,
        createdAt: "9/12/2022"
    },
    {
        _id: "11",
        img: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
        title: "t-shirt",
        desc: "a t shirt",
        price: 20,
        color: ["gray"],
        size: ["l"],
        categories: ['shirt', 'man'],
        createdAt: "9/2/2022"
    }
]

export const paymentImage = "https://i.ibb.co/Qfvn4z6/payment.png"
