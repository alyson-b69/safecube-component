import moment from "moment";

const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

export const getData = (nbValues: number) => {

    interface DataItem {
        x: string | number;
        y: number;
    }

    interface Result {
        id: string;
        data: DataItem[];
    }[]

    let result: Result[] = [
        {
            id : "min-temp",
            data: [],
        },
        {
            id : "average-temp",
            data: [],
        },
        {
            id : "max-temp",
            data: [],
        },
        {
            id : 'max',
            data: [],
        },
        {
            id : 'min',
            data: [],
        },
    ]



    for(let i = nbValues; i >= 0; i--){
        let time = moment().subtract(i, 'days').format("DD/MM - hh:mm")
        let minValue = getRandomArbitrary(-20, 20)
        let maxValue = getRandomArbitrary(20, 40)
        let averageValue = (minValue + maxValue) /2

        const minTempData = {x: time, y: minValue}
        const averageTempData = {x: time, y: averageValue}
        const maxTempData = {x: time, y: maxValue}
        const minData = {x: time, y: -2}
        const maxData = {x: time, y: 30}

        result[0].data.push(minTempData)
        result[1].data.push(averageTempData)
        result[2].data.push(maxTempData)
        result[3].data.push(maxData)
        result[4].data.push(minData)
    }

    return result
}