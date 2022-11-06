

export const NewDate = (bar) => {

    const rawDate = new Date();
    let months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টবর", "নভেম্বর", "ডিসেম্বর"];
    let days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];

    if (bar === "bar") {
        return days[rawDate.getDay()] + ", " + rawDate.getDate().toLocaleString("bn-BD") + " " + months[rawDate.getMonth()] + " " + rawDate.getFullYear().toLocaleString("bn-BD").replace(',', '');
    }
    else if (bar === "time") {
        return rawDate.getDate().toLocaleString("bn-BD") + " " + months[rawDate.getMonth()] + " " + rawDate.getFullYear().toLocaleString("bn-BD").replace(',', '') + ", " + rawDate.toLocaleTimeString('bn-BD');

    }
    else {
        return rawDate.getDate().toLocaleString("bn-BD") + " " + months[rawDate.getMonth()] + " " + rawDate.getFullYear().toLocaleString("bn-BD").replace(',', '')
    }


}