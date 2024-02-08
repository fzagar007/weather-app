export type currentWeatherType = {
    a: string
    name: string
    main: {
        temp: number
        humidity: number
    }
    weather: [
        {
            icon: string
            description: string
        }
    ]
    wind: {
        speed: number
    }
};

export type optionType = {
    lat: number
    lon: number

};

export type fiveDaysType = {
    list: [
        {
            main: {
                temp: number
                humidity: number
            }
            weather: [
                {
                    description: string
                    icon: string
                }
            ]
            wind: {
                speed: number
            }
        }
    ]
};

export type placesType = {
    features: [{
        properties: {
            dist: number
            name: string
        }
    }]
};



