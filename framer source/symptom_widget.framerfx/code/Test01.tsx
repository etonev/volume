import { Data, Override } from "framer"

export const data = Data({
    percent: 0,
})

export const Image: Override = props => {
    return {
        percent: data.percent,
    }
}

export const Slider: Override = props => {
    return {
        onValueChange: (value: number) => {
            console.log("DATA: " + value)

            let res = value * 50
            data.percent = res
        },
    }
}
