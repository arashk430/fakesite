export default defineEventHandler((ev) => {
    let path = ev.path
    let splitPath = path.split('/')
    let request = splitPath[splitPath.length - 1]
    const mice = [
        {
            name: "Logitech G Pro X",
            color: "14, 151, 210",
            dpi: 16000,
            buttons: 8,
            weight: "63g",
            wireless: true,
            price: 149.99,
            description: "Logitech G Pro X",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/1.png",
        },
        {
            name: "Razer DeathAdder V2",
            color: "12, 146, 47",
            dpi: 20000,
            buttons: 8,
            weight: "82g",
            wireless: false,
            price: 69.99,
            description: "Razer DeathAdder V2",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png",
        },
        {
            name: "Corsair Dark Core RGB",
            color: "107, 187, 226",
            dpi: 18000,
            buttons: 9,
            weight: "133g",
            wireless: true,
            price: 89.99,
            description: "Corsair Dark Core RGB",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png",
        },
        {
            name: "SteelSeries Rival 3",
            color: "228, 196, 69",
            dpi: 8500,
            buttons: 6,
            weight: "77g",
            wireless: false,
            price: 29.99,
            description: "SteelSeries Rival 3",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png",
        },
        {
            name: "HyperX Pulsefire FPS Pro",
            color: "156, 82, 251",
            dpi: 16000,
            buttons: 6,
            weight: "95g",
            wireless: false,
            price: 44.99,
            description: "HyperX Pulsefire FPS Pro",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/5.png",
        },
        {
            name: "Zowie EC2",
            color: "166, 39, 222",
            dpi: 3200,
            buttons: 5,
            weight: "90g",
            wireless: false,
            price: 69.99,
            description: "Zowie EC2",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/6.png",
        },
        {
            name: "Roccat Kone AIMO",
            color: "131, 9, 10",
            dpi: 16000,
            buttons: 10,
            weight: "130g",
            wireless: false,
            price: 79.99,
            description: "Roccat Kone AIMO",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/7.png",
        },
        {
            name: "Logitech G903",
            color: "232, 94, 102",
            dpi: 12000,
            buttons: 11,
            weight: "110g",
            wireless: true,
            price: 129.99,
            description: "Logitech G903",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/8.png",
        },
        {
            name: "Cooler Master MM711",
            color: "58, 192, 239",
            dpi: 16000,
            buttons: 6,
            weight: "60g",
            wireless: false,
            price: 49.99,
            description: "Cooler Master MM711",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/9.png",
        },
        {
            name: "Glorious Model O",
            color: "161, 252, 250",
            dpi: 12000,
            buttons: 6,
            weight: "67g",
            wireless: false,
            price: 49.99,
            description: "Glorious Model O",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/10.png",
        },
        {
            name: "HP Omen Photon",
            color: "201, 1, 2",
            dpi: 16000,
            buttons: 11,
            weight: "128g",
            wireless: true,
            price: 99.99,
            description: "HP Omen Photon",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/11.png",
        },
        {
            name: "Asus ROG Chakram",
            color: "10, 181, 19",
            dpi: 16000,
            buttons: 9,
            weight: "121g",
            wireless: true,
            price: 159.99,
            description: "Asus ROG Chakram",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/12.png",
        },
        {
            name: "Razer Naga X",
            color: "100, 101, 102",
            dpi: 16000,
            buttons: 16,
            weight: "85g",
            wireless: false,
            price: 79.99,
            description: "Razer Naga X",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/13.png",
        },
        {
            name: "Mad Catz R.A.T. 8+",
            color: "136, 241, 242",
            dpi: 16000,
            buttons: 11,
            weight: "145g",
            wireless: false,
            price: 99.99,
            description: "Mad Catz R.A.T. 8+",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/14.png",
        },
        {
            name: "Alienware 610M",
            color: "109, 110, 114",
            dpi: 16000,
            buttons: 7,
            weight: "120g",
            wireless: true,
            price: 99.99,
            description: "Alienware 610M",
            src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/15.png",
        },
        {
            altsrc: "https://picsum.photos/500/300?image=",
        },
        {
            reviews: [
                {
                    rating: 2,
                    comment: "Very unhappy with my purchase!",
                    date: "2024-05-23T08:56:21.618Z",
                    reviewerName: "John Doe",
                    reviewerEmail: "john.doe@x.dummyjson.com"
                },
                {
                    rating: 2,
                    comment: "Not as described!",
                    date: "2024-05-23T08:56:21.618Z",
                    reviewerName: "Nolan Gonzalez",
                    reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
                },
                {
                    rating: 5,
                    comment: "Very satisfied!",
                    date: "2024-05-23T08:56:21.618Z",
                    reviewerName: "Scarlett Wright",
                    reviewerEmail: "scarlett.wright@x.dummyjson.com"
                }]
            
        }
    ]
    switch (request) {
        case 'getProducts':
            const products = [
                {
                    title: "عینک مخصوص کامپیوتر و گوشی",
                    sub: [
                        {
                            title: "بر اساس شکل فریم",
                            items: [
                                "مربعی",
                                "مستطیلی",
                                "دایره ای",
                                "پروانه ای",
                                "کلاب مستر",
                                "نیم فریم",
                                "خلبانی",
                            ],
                        },
                        {
                            title: "جنسیت",
                            items: ["مردانه", "زنانه", "بچه گانه"],
                        },
                        {
                            title: "بر اساس شکل صورت",
                            items: ["همه موارد", "مستطیلی", "بیضی", "مربعی", "قلبی"],
                        },
                    ],
                },
                {
                    title: "عینک شب",
                    sub: [
                        {
                            title: "بر اساس شکل فریم",
                            items: [
                                "مربعی",
                                "مستطیلی",
                                "دایره ای",
                                "پروانه ای",
                                "کلاب مستر",
                                "نیم فریم",
                                "خلبانی",
                            ],
                        },
                        {
                            title: "جنسیت",
                            items: ["مردانه", "زنانه", "بچه گانه"],
                        },
                        {
                            title: "بر اساس شکل صورت",
                            items: ["همه موارد", "مستطیلی", "بیضی", "مربعی", "قلبی"],
                        },
                    ],
                },
                {
                    title: "عینک طبی",
                    sub: [
                        {
                            title: "بر اساس شکل فریم",
                            items: [
                                "مربعی",
                                "مستطیلی",
                                "دایره ای",
                                "پروانه ای",
                                "کلاب مستر",
                                "نیم فریم",
                                "خلبانی",
                            ],
                        },
                        {
                            title: "جنسیت",
                            items: ["مردانه", "زنانه", "بچه گانه"],
                        },
                        {
                            title: "بر اساس شکل صورت",
                            items: ["همه موارد", "مستطیلی", "بیضی", "مربعی", "قلبی"],
                        },
                    ],
                },
                {
                    title: "عینک شب",
                    sub: [
                        {
                            title: "بر اساس شکل فریم",
                            items: [
                                "مربعی",
                                "مستطیلی",
                                "دایره ای",
                                "پروانه ای",
                                "کلاب مستر",
                                "نیم فریم",
                                "خلبانی",
                            ],
                        },
                        {
                            title: "جنسیت",
                            items: ["مردانه", "زنانه", "بچه گانه"],
                        },
                        {
                            title: "بر اساس شکل صورت",
                            items: ["همه موارد", "مستطیلی", "بیضی", "مربعی", "قلبی"],
                        },
                    ],
                },
                {
                    title: "عدسی عینک",
                },
                {
                    title: "لنز چشم",
                    sub: [
                        {
                            title: "بر اساس دسته بندی",
                            items: ["لنز طبی", "لنز طبی و رنگی", "لنز رنگی"],
                        },
                        {
                            title: "بر اساس  زمان استفاده",
                            items: ["روزانه", "ماهانه", "فصلی", "شش ماهه", "سالانه"],
                        },
                        {
                            title: "بر اساس دیامتر",
                            items: ["14", "14/2", "14/5"],
                        },
                        {
                            title: "بر اساس لوازم جانبی",
                            items: ["محلول لنز"],
                        },
                    ],
                },
                {
                    title: "عینک آفتابی",
                    sub: [
                        {
                            title: "بر اساس شکل فریم",
                            items: [
                                "مربعی",
                                "مستطیلی",
                                "دایره ای",
                                "پروانه ای",
                                "کلاب مستر",
                                "نیم فریم",
                                "خلبانی",
                            ],
                        },
                        {
                            title: "جنسیت",
                            items: ["مردانه", "زنانه", "بچه گانه"],
                        },
                        {
                            title: "بر اساس شکل صورت",
                            items: ["همه موارد", "مستطیلی", "بیضی", "مربعی", "قلبی"],
                        },
                    ],
                },
            ];
            return products
            break;
        case 'getAvatars':
            let avatars = [
                {
                    title: 'عینک کامپیوتر',
                    image: 'computer_glass.png'
                },
                {
                    title: 'عینک طبی',
                    image: 'tebi_glass.png'
                },
                {
                    title: 'عینک آفتابی',
                    image: 'sun_glass.png'
                },
                {
                    title: 'لنز چشم',
                    image: 'lenz.png'
                },
                {
                    title: 'عدسی عینک',
                    image: 'adasi_glass.png'
                },
                {
                    title: 'عینک شب',
                    image: 'night_glass.png'
                },
            ]
            return avatars
            break;
        case 'getBestSeller':
            const bestSellers = [
                {
                    code: '13',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح رویال',
                    image: 'code_13.jpg',
                    price: '340000'
                },
                {
                    code: '14',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح اطلس',
                    image: 'code_14.jpg',
                    price: '243000'
                },
                {
                    code: '15',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح مارلون',
                    image: 'code_15.jpg',
                    price: '261000'
                },
                {
                    code: '16',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح نیکا',
                    image: 'code_16.jpg',
                    price: '261000'
                },
                {
                    code: '17',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح آراز',
                    image: 'code_17.jpg',
                    price: '261000'
                },
                {
                    code: '13',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح رویال',
                    image: 'code_13.jpg',
                    price: '340000'
                },
                {
                    code: '14',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح اطلس',
                    image: 'code_14.jpg',
                    price: '243000'
                },
                {
                    code: '15',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح مارلون',
                    image: 'code_15.jpg',
                    price: '261000'
                },
                {
                    code: '16',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح نیکا',
                    image: 'code_16.jpg',
                    price: '261000'
                },
                {
                    code: '17',
                    title: 'عینک موبایل و کامپیوتر بلو کنترل طرح آراز',
                    image: 'code_17.jpg',
                    price: '261000'
                },
            ]
            return bestSellers
            break;
        case 'getmice':
            return mice
            break;
        // case 'getroute':

        case 'productInfo':
            const info = `
            <div class="row product-attributes widget"><ul><li>جنس فریم :<strong>فلزی</strong></li><li>فرم فریم :<strong>مستطیل-نیم فرم</strong></li><li>مناسب برای صورت :<strong>گرد و بیضی</strong></li><li>وزن فریم :<strong>21.2 گرم </strong></li><li>رنگ فریم :<strong>4 رنگ</strong></li><li>طول هر عدسی :<strong>55 میلیمتر </strong></li><li>ارتفاع هر عدسی :<strong>33 میلیمتر </strong></li><li>عرض پل وسط :<strong>18 میلیمتر </strong></li><li>طول هر دسته :<strong>140 میلیمتر</strong></li></ul></div>
            `
            return info
        default:
            break;
    }
})