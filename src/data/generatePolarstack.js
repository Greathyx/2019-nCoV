// 极坐标堆叠图
import polarstackConfig from './polarstackConfig'
import data from './data.json'
import {getCode} from './name'

export default function genPolarstack(places) {
    const confirmed = []
    const cured=[]
    const death=[]

    // generate date of today
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan is 0
    const yyyy = today.getFullYear();
    const today_date = yyyy + '-' + mm + '-' + dd;

    let psData = {
        ps: null
    };

    for (var place of places){
        var code = getCode(place)
        var temp=data.filter(e=>e.countryCode===code&&!e.province&&e.date===today_date)
        cured.push(temp[0].cured)
        death.push(temp[0].dead)
        var t=temp[0].confirmed-cured.slice(-1)-death.slice(-1)
        confirmed.push(t) // 因为是剩下的 confirmed
    }

    console.log(cured)
    console.log(death)
    console.log(confirmed)
    psData.ps = polarstackConfig(places, confirmed, cured, death);
    return psData.ps
}
