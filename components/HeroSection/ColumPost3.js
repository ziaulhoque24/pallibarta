import Image from "next/image";
import SectionHeading3 from "../SectionHeading/SectionHeading3";
import { ColumPost3FirstItem, ColumPost3Item, ColumPost3MainContainer } from "./Styled.Hero";
import banner from "../../public/assets/images/bannerkoholi.webp"

function ColumPost3({ headingText }) {
    return (
        <>
            <ColumPost3MainContainer>
                <SectionHeading3 headingText={headingText} colorKey={"red"}></SectionHeading3>
                <ColumPost3FirstItem>
                    <Image src={banner} alt=""></Image>
                    <h2>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h2>
                </ColumPost3FirstItem>

                <ColumPost3Item className="ColumPost3Item">
                    <h2>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h2>
                </ColumPost3Item>

                <ColumPost3Item className="ColumPost3Item">
                    <h2>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h2>
                </ColumPost3Item>

                <ColumPost3Item className="ColumPost3Item">
                    <h2>বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী গ্রেফতার</h2>
                </ColumPost3Item>
            </ColumPost3MainContainer>
        </>
    );
}

export default ColumPost3;