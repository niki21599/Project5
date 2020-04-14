/* Global Variables */
const regeneratorRuntime = require("regenerator-runtime");

// Create a new date instance dynamically with JS
let countryCodes = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
}


const convertSpaces = (city, to) => {
    let newCity = city.replace(" ", to)
    return newCity
}

const daysLeft = (futureDate) => {
    let todaysDate = new Date()

    let futDate = new Date(futureDate)

    let oneDay = 1000*60*60*24

    let left = Math.ceil((futDate.getTime()-todaysDate.getTime())/(oneDay))
    return left
}


const getLocationData = async (cityName) => {
    const baseURL = "http://api.geonames.org/postalCodeSearchJSON?"
    const apiKey = "&username=niki99"
    let convertedCity = convertSpaces(cityName, "-")
    const placename = `placename=${convertedCity}`
    let res = await fetch(baseURL+placename+apiKey);

    try {
        let weatherData = await res.json();
        let firstEntry = weatherData.postalCodes[0]
        return {
            lat: firstEntry.lat,
            lng: firstEntry.lng,
            countryCode: firstEntry.countryCode,
            city: firstEntry.placeName
       }


    } catch (error) {
       console.log(error);
    }

}

const getWeather = async (lat, lng, days) => {

        let baseUrl = "http://api.weatherbit.io/v2.0/forecast/daily?"
        let Api_key = "key=a6e04421d1b24404aa7b9b4dfb9c98f9"
        // hier Koordinaten von vorher
        let coordinates = `&lat=${lat}&lon=${lng}`
        // Berechnen wie viele Tage noch
        let daysLeft = `&days=${days}`


        let res = await fetch(baseUrl + Api_key + coordinates + daysLeft)
        try {
            let weatherDataForecast = await res.json()
            let weatherData = weatherDataForecast.data[weatherDataForecast.data.length - 1]



            return {
                maxTemp: weatherData.max_temp,
                minTemp: weatherData.min_temp,
                description: weatherData.weather.description,

            }


        } catch (error) {
            console.log(error);
        }

}

const getPictureUrl = async (locationData) => {
    let baseUrl = "https://pixabay.com/api/?"
    let apiKey = "key=16001000-b62f6473557f76aea91471883&"
    let convCity = convertSpaces(locationData.city, "+")
    let input = `q=${convCity}&image_type=photo`

    let res = await fetch (baseUrl + apiKey + input)
    try {
        const pictures = await res.json()
        const pic = pictures.hits
        if (pic.length < 1) {

            let country = countryCodes[locationData.countryCode]
            let picUrl = getPic(country)
            console.log(picUrl);
            return picUrl
        }else{
            return pic[0].largeImageURL
        }
    } catch (error) {
        console.log(error);
    }
}

const getPic = async (country) => {

    let baseUrl = "https://pixabay.com/api/?"
    let apiKey = "key=16001000-b62f6473557f76aea91471883&"
    let convCountry = convertSpaces(country, "+")
    let input = `q=${convCountry}&image_type=photo`

    let res = await fetch (baseUrl + apiKey + input)
    try {
        const pictures = await res.json()
        const pic = pictures.hits
        if (pic.length < 1) {
            return "https://cdn.pixabay.com/photo/2020/04/06/12/38/daisy-5009533_1280.jpg"
        }else{
            return pic[0].largeImageURL
        }
    } catch (error) {
        console.log(error);
    }


}

const saveCard = async (url = "", data = {}) => {

    const res = await fetch (url, {
        method: "Post",
        credentials: "same-origin",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

}

const updateUi = (card) => {

    const cards = document.getElementById("travelcards")

    const cardEl = document.createElement("div")
    cardEl.classList.add("travelcard")


    const weather = document.createElement("div")
    const w1 = document.createElement("div")
    w1.innerText = "Expected Weather: "
    const w2 = document.createElement("div")
    w2.innerText = `high - ${card.weatherData.maxTemp}, low - ${card.weatherData.minTemp}`

    const w3 = document.createElement("div")
    w3.innerText = `${card.weatherData.description} throughout the Day`
    const w4 = document.createElement("div")

    w4.appendChild(w1)
    w4.appendChild(w2)
    w4.appendChild(w3)

    w4.classList.add("weatherTemp")
    weather.appendChild(w4)

    weather.classList.add("weatherInfo")


    const img = document.createElement("img")
    img.src = card.picUrl
    img.classList.add("pic")

    const tripInfo = document.createElement("div")

    const dat = document.createElement("div")
    const date1 = document.createElement("div")
    dat.innerText = `Departing:`
    date1.innerText = `${card.date}`

    const ci = document.createElement("div")
    const cit = document.createElement("div")
    ci.innerText = `My Trip to:`
    cit.innerText = `${card.locationData.city}`


    tripInfo.appendChild(ci)
    tripInfo.appendChild(cit)

    tripInfo.appendChild(dat)
    tripInfo.appendChild(date1)
    tripInfo.classList.add("tripInfo")

    const togo = document.createElement("div")
    const days = document.createElement("div")
    days.classList.add("days")
    const text = document.createElement("div")
    text.classList.add("togo")
    days.innerText = `${daysLeft(card.date)}`
    text.innerText = "Days to go"
    togo.appendChild(days)
    togo.appendChild(text)
    togo.classList.add("daysLeft")

    const x = document.createElement("input")
    x.type = "button"
    x.value = "Remove this Card"
    x.onclick = () => {
        x.parentElement.remove()
    }


    x.classList.add("remove")

    cardEl.appendChild(x)
    cardEl.appendChild(weather)
    cardEl.appendChild(img)
    cardEl.appendChild(tripInfo)
    cardEl.appendChild(togo)



    cards.prepend(cardEl)

}

const updateData = () =>{

    let date = document.getElementById("startDate")
    let city = document.getElementById("zip")
    getLocationData(city.value)
    .then(function(locationData){
        getWeather(locationData.lat, locationData.lng, daysLeft(date.value))
        .then(function (weatherData) {
            getPictureUrl(locationData)
            .then(function (picUrl) {

                let card = {
                    weatherData: weatherData,
                    picUrl: picUrl,
                    locationData: locationData,
                    date: date.value
                }
                saveCard("/addCard", card)
                updateUi(card)
                city.value = ""
                date.value = ""

            })

        }
        )
    })

}

document.addEventListener('DOMContentLoaded', function () {
    let date = document.querySelector("#startDate")
date.value = ""
let city = document.querySelector("#zip").value = ""


document.getElementById("generate").addEventListener("click", updateData);
})



export {updateUi, getLocationData, updateData, daysLeft}
