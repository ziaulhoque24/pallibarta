import SectionHeading2 from "../SectionHeading/SectionHeading2";
import { Hero1Container, Hero1Item, Hero1ItemChildren, HomeItem1Heading } from "./Styled.Hero";

function Hero1({ headingText }) {
    return (
        <>
            <SectionHeading2 headingText={headingText}></SectionHeading2>
            <Hero1Container>
                <Hero1Item className="item1 item">
                    <Hero1ItemChildren url="/assets/images/newsbanner.png">
                    </Hero1ItemChildren>
                    <HomeItem1Heading className="HomeItem1Heading">
                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                    </HomeItem1Heading>
                </Hero1Item>
                <Hero1Item className="item2 item">
                    <Hero1ItemChildren url="/assets/images/newsbanner.png">
                    </Hero1ItemChildren>
                    <HomeItem1Heading className="HomeItem1Heading">
                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                    </HomeItem1Heading>
                </Hero1Item>

                <Hero1Item className="item3 item">
                    <Hero1ItemChildren url="/assets/images/newsbanner.png">
                    </Hero1ItemChildren>
                    <HomeItem1Heading className="HomeItem1Heading">
                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                    </HomeItem1Heading>
                </Hero1Item>

                <Hero1Item className="item4 item">
                    <Hero1ItemChildren url="/assets/images/newsbanner.png">
                    </Hero1ItemChildren>
                    <HomeItem1Heading className="HomeItem1Heading">
                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                    </HomeItem1Heading>
                </Hero1Item>
                <Hero1Item className="item5 item">
                    <Hero1ItemChildren url="/assets/images/newsbanner.png">
                    </Hero1ItemChildren>
                    <HomeItem1Heading className="HomeItem1Heading">
                        বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার
                    </HomeItem1Heading>
                </Hero1Item>
            </Hero1Container>
        </>
    );
}

export default Hero1;