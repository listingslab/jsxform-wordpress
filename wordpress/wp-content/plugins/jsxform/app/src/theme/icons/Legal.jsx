import React from "react"

const Legal = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        
        
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Legal">
            <rect id="bg" fillOpacity="0.01" fill="#FFFFFF" x="0" y="0" width="100" height="100"></rect>
            <g transform="translate(3.000000, 4.000000)" fill={c} fillRule="nonzero">
                <path d="M65,83 L29,83 C25.68,83 23,86.015 23,89.75 L23,92 L71,92 L71,89.75 C71,86.015 68.32,83 65,83 Z" id="Path"></path>
                <path d="M42,4.05 C42,1.8225 44.025,0 46.5,0 C48.975,0 51,1.8225 51,4.05 L51,81 L42,81 L42,4.05 Z" id="Path"></path>
                <path d="M41.9931314,15 C41.6285281,15 41.2639248,14.9053175 40.9195773,14.7159524 C40.2511379,14.3182858 39.5624428,13.9016827 38.853492,13.4661431 C36.0987116,11.7807941 32.9793279,9.86820706 29.7789213,9.16755637 C26.5785147,8.46690567 22.8717146,8.90244529 19.6105407,9.2811754 C16.653203,9.62203249 13.8579111,9.94395308 11.5690127,9.45160394 C10.4752028,9.20542938 9.80676347,8.20179459 10.0498323,7.17922331 C10.3131569,6.15665202 11.386711,5.53174735 12.4805209,5.75898541 C14.0604685,6.09984251 16.5114128,5.81579493 19.1041473,5.51281084 C22.7096687,5.09620772 26.781072,4.62279509 30.6904295,5.47493783 C34.599787,6.32708057 38.0432625,8.42903266 41.0613675,10.2848102 C41.7500626,10.7203498 42.4185019,11.1180164 43.0464298,11.4967465 C43.9984495,12.0459052 44.2820298,13.2199685 43.6946134,14.1099843 C43.3300101,14.6780794 42.6615708,15 41.9931314,15 Z" id="Path"></path>
                <path d="M79.9749197,23 C79.8120339,23 79.6695089,22.9800027 79.5066232,22.9400081 C77.2465834,22.4200778 74.9051007,21.0602604 72.4007324,19.6004563 C69.6113139,17.9806738 66.4757632,16.1409207 63.1976875,15.4010201 C59.980694,14.6611194 56.2546825,15.1210577 52.9766067,15.521004 C52.019653,15.6409879 51.1237813,15.7409744 50.2279097,15.8209637 C49.1080702,15.9209503 48.110395,15.1210577 48.0085914,14.0212053 C47.9067878,12.9213529 48.7212165,11.9414845 49.8410561,11.8414979 C50.6758455,11.7615086 51.5513564,11.6615221 52.4675888,11.5415382 C56.0917967,11.1015972 60.1843012,10.6016643 64.1139199,11.5015435 C68.0028171,12.3814254 71.4437786,14.4011543 74.4775257,16.1609181 C76.696844,17.4607436 78.7736373,18.6805798 80.4228555,19.0405315 C81.5223343,19.3004966 82.194238,20.3603543 81.9499094,21.4402094 C81.7463022,22.3800832 80.9115128,23 79.9749197,23 Z" id="Path"></path>
                <path d="M76.5,71 C65.7382426,71 61.460396,60.044089 61.2877475,59.5774483 L61,58.8064768 L76.5,19 L92,58.8064768 L91.7122525,59.5774483 C91.539604,60.044089 87.2617574,71 76.5,71 Z M65.2272727,58.4481945 C66.2381941,60.5948104 69.6905861,66.6666667 76.5,66.6666667 C83.3094139,66.6666667 86.7618059,60.5743664 87.7727273,58.4481945 L76.5,29.1111111 L65.2272727,58.4481945 Z" id="Shape"></path>
                <path d="M62,57 C62,57 66.1428571,67 76.5,67 C86.8571429,67 91,57 91,57 L62,57 Z" id="Path"></path>
                <path d="M17,56 C5.19678218,56 0.504950495,45.044089 0.315594059,44.5774483 L0,43.8064768 L17,4 L34,43.8064768 L33.6844059,44.5774483 C33.4950495,45.044089 28.8032178,56 17,56 Z M4.43478261,43.4481945 C5.56161259,45.5743664 9.4098433,51.6666667 17,51.6666667 C24.5901567,51.6666667 28.4383874,45.5743664 29.5652174,43.4481945 L17,14.1111111 L4.43478261,43.4481945 Z" id="Shape"></path>
                <path d="M3,45 C3,45 6.85714286,55 16.5,55 C26.1428571,55 30,45 30,45 L3,45 Z" id="Path"></path>
            </g>
        </g>
    </g>              
            </svg>
        </React.Fragment>
}
export default Legal