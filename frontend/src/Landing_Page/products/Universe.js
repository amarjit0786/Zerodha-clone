import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms.
                </p>

                {/* First Row of Logos */}
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 p-3 logoContainer">
                        <img src="media/images/zerodhaFundhouse.png" className="logo" />
                        <p className="text-small text-muted">
                            Our asset management venture that is creating simple and transparent index funds.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-3 logoContainer">
                        <img src="media/images/sensibullLogo.svg" className="logo" />
                        <p className="text-small text-muted">
                            Options trading platform that lets you create strategies, analyze positions, and more.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-3 logoContainer">
                        <img src="media/images/tijori.svg" className="logo" />
                        <p className="text-small text-muted">
                            Investment research platform that offers detailed insights on stocks, sectors, and more.
                        </p>
                    </div>
                </div>

                {/* Second Row of Logos */}
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 p-3 logoContainer">
                        <img src="media/images/streakLogo.png" className="logo" />
                        <p className="text-small text-muted">
                            Systematic trading platform that allows you to create and backtest strategies without coding.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-3 logoContainer">
                        <img src="media/images/smallcaseLogo.png" className="logo" />
                        <p className="text-small text-muted">
                            Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-3 logoContainer">
                        <img src="media/images/dittoLogo.png" className="logo" />
                        <p className="text-small text-muted">
                            Personalized advice on life and health insurance.
                        </p>
                    </div>
                </div>

                {/* Signup Button */}
                <button className="btn btn-primary p-2 fs-5 mb-5 mx-auto d-block" style={{ width: "20%" }}>
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;
