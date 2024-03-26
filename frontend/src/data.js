import { isValidElement } from "react";

export const API_KEY ='AIzaSyAjcnKB4EmBF4XinQK9cueWPw2pud3bn48';


// converter view data to K + M
export const value_converter = (value) => {
    if(value>=1000000) 
    {
        return Math.floor (value/1000000)+"M"
    }
    else if (value>=1000)
    {
        return Math.floor (value/1000)+"K"
    }

    else {
        return value
    }
}