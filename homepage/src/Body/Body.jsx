import React from "react";
import "./Body.css";
import Logo from "../img/logo.webp"
import Video from "../img/body1.mp4";
import M1 from "../img/m-1.png";
import M2 from "../img/m-2.png";
import M3 from "../img/m-3.png";
import M4 from "../img/m-4.png";
import M5 from "../img/m-5.webp";
import M6 from "../img/m-6.png";
import M7 from "../img/m-7.png";
import M8 from "../img/m-8.png";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "react-bootstrap";

export default function Body() {
    return (
        <div className="body-container">
            <div className="div-l">
                <video src={Video} autoPlay muted type="video/mp4" loop></video>
                <div className="content">
                    <div className="f-line">
                        <h3>experiance it on roblox</h3>
                    </div>
                    <div className="s-line-f">
                        <h1>lamborghini</h1>
                    </div>
                    <div className="s-line-s">
                        <h1>lanzador lab</h1>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className="card">
                <div className="part-1">
                    <Card className="card-m">
                        <img alt="Sample" src={M1} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini Aventador S </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 5.01 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>See More</Button>
                        </CardBody>
                    </Card>

                    <Card className="card-m">
                        <img alt="Sample" src={M2} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini Huracán </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 5.00 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>See More</Button>
                        </CardBody>
                    </Card>

                    <Card className="card-m">
                        <img alt="Sample" src={M3} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini Revuelto </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 8.3 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>Button</Button>
                        </CardBody>
                    </Card>

                    <Card className="card-m">
                        <img alt="Sample" src={M4} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini Urus </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 3.5 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>See More</Button>
                        </CardBody>
                    </Card>
                </div>

                <div className="part-2">

                    <Card className="card-m">
                        <img alt="Sample" src={M5} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini STO </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 7.1 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>See More</Button>
                        </CardBody>
                    </Card>

                    <Card className="card-m">
                        <img alt="Sample" src={M6} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini URUS </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 6.6 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>See More</Button>
                        </CardBody>
                    </Card>

                    <Card className="card-m">
                        <img alt="Sample" src={M7} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini SIÁN </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 12 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>See More</Button>
                        </CardBody>
                    </Card>

                    <Card className="card-m">
                        <img alt="Sample" src={M8} style={{ height: "10rem", width: "100%" }} />
                        <CardBody>
                            <CardTitle tag="h5">Lamborghini TERZO </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{ fontFamily: "La Macchina" }}>
                                Lamborghini <img src={Logo} alt="" className="sub-logo" style={{ height: '2.5rem', width: "2.5rem" }} />
                            </CardSubtitle>
                            <CardText>
                                Lamborghini Gallardo, lamborghini, blue, roadster, performance Car.

                                <h5>₹ 51 Crore</h5>
                            </CardText>
                            <Button className="w-100" style={{ backgroundColor: '#C68D10', border: 'none' }}>See More</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
