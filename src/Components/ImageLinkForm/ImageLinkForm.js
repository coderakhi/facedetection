import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'><strong>{"This Magic Brain will detect faces in your pictures. Give it a try. "}</strong></p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type={"text"} className="f4 pa2 ml2 br2 w-60 center " placeholder='enter url here'></input>
                    <button className='pointer w-40 grow mr4 br2 f4 link ph3 pv2 dib white bg-light-purple '>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm