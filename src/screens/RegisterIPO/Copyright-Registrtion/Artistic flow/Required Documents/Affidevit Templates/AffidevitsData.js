import { useSelector } from "react-redux";



class AffidevitDetails {
    //  user,work, date;
    constructor() {
        this.user = useSelector(state => state.copyrightReducer?.ownerdetail?.data)
        this.work = useSelector(state => state.copyrightReducer?.logodetail)
        this.date = new Date(work.completedYear)
    }

    getName() {
        return user.Name;
    }
    // getNationality() {

    // }
    // getCnic() {

    // }
    // getAddress() {

    // }
    // getLanguage() {

    // }
    // getTitle() {

    // }

    // getDay() {

    // }
    // getYear() {

    // }
    // getMonth() {

    // }
}

export default AffidevitDetails;
