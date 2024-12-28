import React from 'react';

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
    return (
        <div className='container mt-5 text-justify'>
            <div className='row d-flex align-items-center'>
                <div className='col-6 p-5'>
                    <h1 className=''>{productName} </h1>
                    <p>{productDescription} </p>

                    <div>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>
                            Learn More {" "}
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                {/* <div className='col-2'></div> */}
                <div className='col-6 '>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;