import { Col, Container, Row } from 'react-bootstrap';
import { HomeLeadAds2, HomeLeadNewsContainer, HomeLeadNewsItemContainer, HomeLeadProbseHeading, HomeLeadProbseItem, HomeLeadSideBarButtonContainer, HomeLeadSideBarButtonItem, HomeLeadYourAreaContainer, HomeLeadYourAreaItem, LeadSideBarDayBannerContainer } from './HomePage.Styled';
import { GiOfficeChair, GiVillage } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';
import { FaMosque } from 'react-icons/fa';
import mujib from "../../public/assets/images/Mujib-Barsho-300x167.jpg";
import newsbanner from "../../public/assets/images/newsbanner.png"
import banner2 from "../../public/assets/images/baner2.webp"
import Image from 'next/image';
import banner5 from "../../public/assets/images/bannerkoholi.webp"
import SectionHeading from '../SectionHeading/Sectionheading';

const HomeLeadSection = () => {
    return (
        
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={9} className="" >
                        <Row>
                            <Col xs={12} md={3}>
                                <HomeLeadYourAreaContainer>
                                    <SectionHeading headingText={"বরিশাল জেলা"}/>
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
                                    <HomeLeadAds2></HomeLeadAds2>
                                </HomeLeadYourAreaContainer>
                            </Col>
                            <Col xs={12} md={6} className="">
                                <HomeLeadNewsContainer>

                                    <HomeLeadNewsItemContainer className='BBC'>
                                        <Image src={newsbanner} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                        <p>আজ রোববার বিকেলে নারায়ণগঞ্জের জ্যেষ্ঠ জুডিশিয়াল ম্যাজিস্ট্রেট ইমরান হোসেনের আদালত মামলাটি খারিজ করে দেন। আজ রোববার বিকেলে নারায়ণগঞ্জের জ্যেষ্ঠ জুডিশিয়াল ম্যাজিস্ট্রেট ইমরান হোসেনের আদালত মামলাটি খারিজ করে দেন।</p>
                                    </HomeLeadNewsItemContainer>

                                    <HomeLeadNewsItemContainer className='BBC'>
                                        <Image src={banner2} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                        
                                    </HomeLeadNewsItemContainer>

                                    <HomeLeadNewsItemContainer className='BBC'>
                                        <Image src={banner5} alt="" />
                                        <h1>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h1>
                                    </HomeLeadNewsItemContainer>

                                </HomeLeadNewsContainer>
                            </Col>
                            <Col xs={12} md={3} className="">
                                <HomeLeadYourAreaContainer>
                                    <SectionHeading headingText={"প্রবাসে বাংলাদেশ"}/>
                                    <HomeLeadProbseItem>
                                        <Image src={banner2} alt="" />
                                        <HomeLeadProbseHeading>
                                            বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                        </HomeLeadProbseHeading>
                                    </HomeLeadProbseItem>
                                    <HomeLeadProbseItem>
                                        <Image src={newsbanner} alt="" />
                                        <HomeLeadProbseHeading>
                                            বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                        </HomeLeadProbseHeading>
                                    </HomeLeadProbseItem>
                                    <HomeLeadProbseItem>
                                        <Image src={banner2} alt="" />
                                        <HomeLeadProbseHeading>
                                            বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                                        </HomeLeadProbseHeading>
                                    </HomeLeadProbseItem>
                                </HomeLeadYourAreaContainer>
                    
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={3} className="">
                        <LeadSideBarDayBannerContainer>
                            <Image src={mujib} alt="" />
                            
                        </LeadSideBarDayBannerContainer>
                        <HomeLeadAds2></HomeLeadAds2>
                        <HomeLeadSideBarButtonContainer>
                            <HomeLeadSideBarButtonItem>
                                <GiOfficeChair/> চাকরি
                            </HomeLeadSideBarButtonItem>
                            <HomeLeadSideBarButtonItem className='islam'>
                                <GrTechnology/> আইটি বিশ্ব
                            </HomeLeadSideBarButtonItem>
                            <HomeLeadSideBarButtonItem className='islam'>
                                <FaMosque/>ধর্ম ও জীবন
                            </HomeLeadSideBarButtonItem>
                            <HomeLeadSideBarButtonItem className='islam'>
                                <GiVillage/> পল্লী নিউজ
                            </HomeLeadSideBarButtonItem>
                        </HomeLeadSideBarButtonContainer>
                        <iframe width="100%" height="200px" src="https://www.youtube.com/embed/LIB7bJ02HPY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Col>
                </Row>
            </Container>
      
    );
};

export default HomeLeadSection;