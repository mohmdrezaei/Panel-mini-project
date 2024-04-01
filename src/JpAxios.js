import axios from "axios";

export const jpAxios = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
   /* headers : {
        Authorization : "Bearer 6sgftyr6756ej54iuy4wherfjfsjkdhfjkshdj",
        "Content-Type" : "application/json"
    },*/
    timeout : 5000,
    timeoutErrorMessage : "زمان پاسخگویی بیش از 5 ثانیه طول کشید ..."
})
  
