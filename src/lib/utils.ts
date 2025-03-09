import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import CryptoJS from "crypto-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





export const encryptData = ({secret_key, data}:{secret_key: string, data: string}) => {
    try{
        
        const encrypted = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          btoa(secret_key)
        ).toString();
       
        return encrypted;
    }catch(err) {
        
        console.error(err)
    }
  };
  
  export const decryptData = ({secret_key, data}:{secret_key: string, data: string}) => {
    try{

        const encrypted = data;
        const decrypted = CryptoJS.AES.decrypt(
          encrypted,
          btoa(secret_key)
        ).toString(CryptoJS.enc.Utf8);
        
        return JSON.parse(decrypted);
    }catch(err) {
        
        console.error(err)
    }
  };
