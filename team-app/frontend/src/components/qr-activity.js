import axios from 'axios'

export default function GenerateQR(props){
    const getUrls = props.url
    const pixels = 500
    axios.get(`https://api.qrserver.com/v1/create-qr-code/?data=${getUrls}&size=${pixels}x${pixels}`)
    var urls = `https://api.qrserver.com/v1/create-qr-code/?data=${getUrls}&size=${pixels}x${pixels}`

    return urls;
}

export default function ReadingQR(props){
    const getUrls = props.url
    axios.get(`http(s)://api.qrserver.com/v1/read-qr-code/?fileurl=${getUrls}`)
}