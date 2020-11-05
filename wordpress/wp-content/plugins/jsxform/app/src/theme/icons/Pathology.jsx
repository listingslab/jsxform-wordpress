import React from "react"

const Pathology = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

  <g id="_100x100Icon" data-name="100x100Icon" transform="translate(25 8.604)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="100" height="100" transform="translate(-25 -8.604)" fill="rgba(255,255,255,0)"/>
    <g id="lab_f" transform="translate(-19 -6.604)">
      <path id="Path_322" data-name="Path 322" d="M31.427,14.854a7.427,7.427,0,1,1,7.427-7.427A7.427,7.427,0,0,1,31.427,14.854Zm0-11.141a3.714,3.714,0,1,0,3.714,3.714A3.714,3.714,0,0,0,31.427,3.714Z" transform="translate(16.279)" fill={c}/>
      <path id="Path_323" data-name="Path 323" d="M28.427,28.854a7.427,7.427,0,1,1,7.427-7.427A7.427,7.427,0,0,1,28.427,28.854Zm0-11.141a3.714,3.714,0,1,0,3.714,3.714A3.714,3.714,0,0,0,28.427,17.714Z" transform="translate(13.708 11.995)" fill={c}/>
      <path id="Path_324" data-name="Path 324" d="M47.565,15.284H17.857A1.857,1.857,0,0,1,16,13.427V7.857A1.857,1.857,0,0,1,17.857,6H47.565a1.857,1.857,0,0,1,1.857,1.857v5.57A1.857,1.857,0,0,1,47.565,15.284Z" transform="translate(9.424 5.141)" fill={c}/>
      <path id="Path_325" data-name="Path 325" d="M62.053,37.648a99.151,99.151,0,0,1-6.92-10.793V12H51.419V26.854c0,1.68,1.857,4.525,7.566,12.888.433.633.882,1.289,1.339,1.961H23.939l1.339-1.961c5.717-8.363,7.574-11.207,7.574-12.888V12H29.138V26.7a86.046,86.046,0,0,1-6.931,10.944C12.8,51.427,5,63.38,5,70.117c0,9.841,10.444,12.44,15.968,12.44H63.3c5.524,0,15.968-2.6,15.968-12.44C79.271,63.38,71.472,51.427,62.053,37.648Zm-29.2,24.485a5.57,5.57,0,1,1,5.57-5.57A5.57,5.57,0,0,1,32.852,62.133ZM53.276,73.273A7.427,7.427,0,1,1,60.7,65.846,7.427,7.427,0,0,1,53.276,73.273Z" transform="translate(0 10.281)" fill={c}/>
    </g>
  </g>
                
            </svg>
        </React.Fragment>
}
export default Pathology
