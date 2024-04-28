export default function returnHowManyArguments(...theArgs) {
    let total = [];
    for (let arg of theArgs) {
        total.push(arg);
    }
    return total.length;
}
