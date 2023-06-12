import Image from "next/image";
import bannner from "../../public/assets/images/baner2.webp";
import SectionHeading from "./../SectionHeading/SectionHeading";
import { ColumPostContainer, ColumPostItem } from "./Styled.Hero";

function ColumPost({ headingText }) {
  return (
    <>
      <SectionHeading headingText={headingText}></SectionHeading>
      <ColumPostContainer>
        <ColumPostItem>
          <Image src={bannner} alt='' />
          <h2>
            বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী
            গ্রেফতার
          </h2>
        </ColumPostItem>
        <ColumPostItem>
          <Image src={bannner} alt='' />
          <h2>
            বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী
            গ্রেফতার
          </h2>
        </ColumPostItem>
      </ColumPostContainer>
    </>
  );
}

export default ColumPost;
