import Axios from "axios";

export const getRequest = async (dataToGet)=> {
    let data;
    let url = "http://localhost:5000/";
    let response;
    switch(dataToGet){
        case "events":
            response = await Axios.get(url + "events");
            data = response.data.map(
                event=>{
                    return{
                        start:new Date(event.start),
                        end:new Date(event.end),
                        title:event.title,
                        allDay:false
                    }
                })
            break;
        case "therapists":
            response = await Axios.get(url + "gettherapists");
            data     = response.data;
            break;
        case "clients":
            response = await Axios.get(url + "getclients");
            data     = response.data;
            break;
        default:
            break;        
    }
    return data;

}
