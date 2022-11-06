import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomeAllBdContainer, HomeAllBdItem, HomeAllBdItemContainer, HomeAllBdNavContainer, HomeAllBdNavMainContainer, HomeAllBdSideBarMainContainer, HomeAllBdSideBarNav, HomeAllBdSideBarNavItem, HomeAllBdSideBarNavReadMoreButton, HomeLeadYourAreaContainer, HomeLeadYourAreaItem } from "./HomePage.Styled";
import banner3 from "../../public/assets/images/baner2.webp"
import banner4 from "../../public/assets/images/newsbanner.png"
import banner5 from "../../public/assets/images/bannerkoholi.webp"

const HomeAllBd = () => {
    const responsive = {
        Desktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };


    return (
        <>
                <Container>
                    <Row>
                        <Col xs={12} lg={9}>
                            <HomeAllBdContainer>
                                <HomeAllBdNavMainContainer>
                                    <span className="BdHeading">সারাবাংলা</span>
                                    <HomeAllBdNavContainer>
                                        <Carousel 
                                            showDots={false}
                                            responsive={responsive}
                                            ssr={true}
                                            arrows={false}
                                            infinite={true}
                                            autoPlay={true}
                                            autoPlaySpeed={5000} itemClass="center"
                                            >
                                            
                                            <span>ঢাকা</span>
                                            <span>চট্টগ্রাম</span>
                                            <span>বরিশাল</span>
                                            <span>খুলনা</span>
                                            <span>সিলেট</span>
                                            <span>রাজশাহী</span>
                                            <span>রংপুর</span>
                                            <span>ময়মনসিংহ</span>
                                        </Carousel>
                                    </HomeAllBdNavContainer>
                                </HomeAllBdNavMainContainer>
                                <HomeAllBdItemContainer>
                                    <HomeAllBdItem>
                                        <Image src={banner5} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                    </HomeAllBdItem>
                                    <HomeAllBdItem>
                                        <Image src={banner4} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                    </HomeAllBdItem>
                                    <HomeAllBdItem>
                                        <Image src={banner3} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                    </HomeAllBdItem>
                                    <HomeAllBdItem>
                                        <Image src={banner4} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                    </HomeAllBdItem>
                                    <HomeAllBdItem>
                                        <Image src={banner3} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                    </HomeAllBdItem>
                                    <HomeAllBdItem>
                                        <Image src={banner5} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                    </HomeAllBdItem>
                                </HomeAllBdItemContainer>
                            </HomeAllBdContainer>
                        </Col>
                        <Col xs={12} lg={3}>
                            <HomeAllBdSideBarMainContainer>
                                <HomeAllBdSideBarNav>
                                    <HomeAllBdSideBarNavItem active="active">সর্বশেষ</HomeAllBdSideBarNavItem>
                                    <HomeAllBdSideBarNavItem>সর্বাধিক পঠিত</HomeAllBdSideBarNavItem>
                                </HomeAllBdSideBarNav>
                                <HomeLeadYourAreaContainer>
                                    <HomeLeadYourAreaItem>
                                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                    </HomeLeadYourAreaItem>
                                    <HomeLeadYourAreaItem>
                                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                    </HomeLeadYourAreaItem>
                                    <HomeLeadYourAreaItem>
                                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                    </HomeLeadYourAreaItem>
                                    <HomeLeadYourAreaItem>
                                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                    </HomeLeadYourAreaItem>
                                    <HomeLeadYourAreaItem>
                                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                    </HomeLeadYourAreaItem>
                                    <HomeLeadYourAreaItem>
                                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                    </HomeLeadYourAreaItem>
                                    <HomeLeadYourAreaItem>
                                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                    </HomeLeadYourAreaItem>
                                    <HomeAllBdSideBarNavReadMoreButton>
                                        আরও পড়ুন
                                    </HomeAllBdSideBarNavReadMoreButton>
                                </HomeLeadYourAreaContainer>
                            </HomeAllBdSideBarMainContainer>
                        </Col>
                    </Row>
                </Container>
        </>
    );
}

export default HomeAllBd;