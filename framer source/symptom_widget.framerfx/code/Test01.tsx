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
        value: data.percent,
        onValueChange: (value: number) => {
            data.percent = value
        },
    }
}
