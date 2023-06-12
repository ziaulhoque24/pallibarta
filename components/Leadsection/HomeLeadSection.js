import Image from "next/image";
import { FaMosque } from "react-icons/fa";
import { GiOfficeChair, GiVillage } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import mujib from "../../public/assets/images/Mujib-Barsho-300x167.jpg";
import banner2 from "../../public/assets/images/baner2.webp";
import banner5 from "../../public/assets/images/bannerkoholi.webp";
import newsbanner from "../../public/assets/images/newsbanner.png";
import {
  HomeLeadAds2,
  HomeLeadNewsContainer,
  HomeLeadNewsItemContainer,
  HomeLeadProbseHeading,
  HomeLeadProbseItem,
  HomeLeadSideBarButtonContainer,
  HomeLeadSideBarButtonItem,
  HomeLeadYourAreaContainer,
  LeadSideBarDayBannerContainer,
} from "../HomePage/HomePage.Styled";
import SectionHeading from "../SectionHeading/SectionHeading";

const HomeLeadSection = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        {/* first item */}
        <div className='col-span-3'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            {/* item */}
            <div className='col-span-1 row-start-2 lg:row-start-1'>
              <div className='flex flex-col'>
                <SectionHeading headingText={"বরিশাল জেলা"} />
                <div className='yourAreaItem'>
                  বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী
                  গ্রেফতার
                </div>
                <div className='yourAreaItem'>
                  বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী
                  গ্রেফতার
                </div>
                <div className='yourAreaItem'>
                  বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী
                  গ্রেফতার
                </div>
                <div className='yourAreaItem'>
                  বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী
                  গ্রেফতার
                </div>
                <div className='yourAreaItem'>
                  বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক ব্যবসায়ী
                  গ্রেফতার
                </div>
                <div className='w-full h-[190px] bg-cyan-500'></div>
              </div>
            </div>
            {/* item */}
            <div className='col-span-2 row-start-1 lg:row-start-1'>
              <HomeLeadNewsContainer>
                <HomeLeadNewsItemContainer className='BBC'>
                  <Image src={newsbanner} alt='' />
                  <h1>
                    বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক
                    ব্যবসায়ী গ্রেফতার
                  </h1>
                  <p>
                    আজ রোববার বিকেলে নারায়ণগঞ্জের জ্যেষ্ঠ জুডিশিয়াল
                    ম্যাজিস্ট্রেট ইমরান হোসেনের আদালত মামলাটি খারিজ করে দেন। আজ
                    রোববার বিকেলে নারায়ণগঞ্জের জ্যেষ্ঠ জুডিশিয়াল ম্যাজিস্ট্রেট
                    ইমরান হোসেনের আদালত মামলাটি খারিজ করে দেন।
                  </p>
                </HomeLeadNewsItemContainer>

                <HomeLeadNewsItemContainer className='BBC'>
                  <Image src={banner2} alt='' />
                  <h1>
                    বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক
                    ব্যবসায়ী গ্রেফতার
                  </h1>
                </HomeLeadNewsItemContainer>

                <HomeLeadNewsItemContainer className='BBC'>
                  <Image src={banner5} alt='' />
                  <h1>
                    বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক
                    ব্যবসায়ী গ্রেফতার
                  </h1>
                </HomeLeadNewsItemContainer>
              </HomeLeadNewsContainer>
            </div>
            {/* item */}
            <div className='col-span-1 row-start-3 lg:row-start-1'>
              <HomeLeadYourAreaContainer>
                <SectionHeading headingText={"প্রবাসে বাংলাদেশ"} />
                <HomeLeadProbseItem>
                  <Image src={banner2} alt='' />
                  <HomeLeadProbseHeading>
                    বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক
                    ব্যবসায়ী গ্রেফতার
                  </HomeLeadProbseHeading>
                </HomeLeadProbseItem>
                <HomeLeadProbseItem>
                  <Image src={newsbanner} alt='' />
                  <HomeLeadProbseHeading>
                    বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক
                    ব্যবসায়ী গ্রেফতার
                  </HomeLeadProbseHeading>
                </HomeLeadProbseItem>
                <HomeLeadProbseItem>
                  <Image src={banner2} alt='' />
                  <HomeLeadProbseHeading>
                    বাবুগঞ্জ থানা পুলিশের অভিযানে ৭৫০ পিস ইয়াবাসহ মাদক
                    ব্যবসায়ী গ্রেফতার
                  </HomeLeadProbseHeading>
                </HomeLeadProbseItem>
              </HomeLeadYourAreaContainer>
            </div>
          </div>
        </div>

        {/* second items */}
        <div className='col-span-1'>
          <LeadSideBarDayBannerContainer>
            <Image src={mujib} alt='' />
          </LeadSideBarDayBannerContainer>
          <HomeLeadAds2></HomeLeadAds2>
          <HomeLeadSideBarButtonContainer>
            <HomeLeadSideBarButtonItem>
              <GiOfficeChair /> চাকরি
            </HomeLeadSideBarButtonItem>
            <HomeLeadSideBarButtonItem className='islam'>
              <GrTechnology /> আইটি বিশ্ব
            </HomeLeadSideBarButtonItem>
            <HomeLeadSideBarButtonItem className='islam'>
              <FaMosque />
              ধর্ম ও জীবন
            </HomeLeadSideBarButtonItem>
            <HomeLeadSideBarButtonItem className='islam'>
              <GiVillage /> পল্লী নিউজ
            </HomeLeadSideBarButtonItem>
          </HomeLeadSideBarButtonContainer>
          <iframe
            width='100%'
            height='200px'
            src='https://www.youtube.com/embed/LIB7bJ02HPY'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeLeadSection;
