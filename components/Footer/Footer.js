import Image from "next/image";
import { Container } from "react-bootstrap";
import { FooterCopyright, FooterCopyrightPublisher, FooterDevelopmentCopyright, FooterFirstSection, FooterFirstSectionContact, FooterNavContainer } from "./Styled.Footer";

function Footer() {
    return (
        <>
            <Container fluid style={{ borderTop: "1px solid lightgrey", marginTop: "20px" }}>
                <Container>
                    <FooterFirstSection>
                       
                        <div className="imgContainer">
                            <Image src="/assets/images/pallibartalogo-english.png" alt="pallibarta" layout="fill" objectFit="contain" />
                        </div>
                        <FooterFirstSectionContact>
                            <span>১১/১৩ রোড-০৯, নিকুঞ্জ-০২</span>
                            <span>ঢাকা-১২২৯, বাংলাদেশ</span>
                            <span>০১৭০০৫৮৮১১৮</span>
                        </FooterFirstSectionContact>
                    </FooterFirstSection>
                </Container>
            </Container>
            <Container fluid style={{ borderTop: "1px solid lightgrey"}}>
                <Container>
                    <FooterNavContainer>
                        
                        <span>পল্লীবার্তা</span>
                        <span>মন্তব্যের নীতিমালা</span>
                        <span>গোপনীয়তা নীতি</span>
                    </FooterNavContainer>
                </Container>
            </Container>
            <Container fluid style={{ borderTop: "1px solid lightgrey" }}>
                <Container>
                    <FooterCopyright>
                        <span>স্বত্ব © ২০২২ পল্লীবার্তা | সম্পাদক: আয়াতুল্লাহ মোঃ ফয়েজ</span>
                        
                    </FooterCopyright>
                    <FooterCopyrightPublisher>
                        <span>প্রকাশকঃ অহিদুর রহমান প্রিন্স</span>
                    </FooterCopyrightPublisher>
                    <FooterDevelopmentCopyright>
                        Developed by Ziaul Hoque
                    </FooterDevelopmentCopyright>
                </Container>
            </Container>
        </>
    );
}

export default Footer;