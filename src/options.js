import { apikey } from "./env";

export const catOption={
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        "x-api-key":apikey,
    }
}