import axios from "axios";

export const fetchPatient = () => {

    return axios
        .get(
            "https://api"
        )
        .then(res => {
            console.log(res);
            return res;
        })
}