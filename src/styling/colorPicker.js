
import Colors from "./colors.json"
const pickColors = () => {
    let choices = Object.entries(Colors);

    const randomNum = Math.floor(Math.random() * (choices.length));
    return choices[randomNum];

}

export default pickColors;
