
//将数字转换为字符串，如果数字只有一位，会在第一位置添加一个0
const appendZero = n=>n.toLocaleString({},{minimumIntegerDigits:2});
export default function (t = 0) {
    const msec = appendZero(t % 100),
        sec  = appendZero(Number.parseInt((t/100)%60)),
        min = appendZero((parseInt(t/6000)%60)),
        hour = appendZero(parseInt(t/360000));
    return `${hour}:${min}:${sec}.${msec}`;
}


