import  {useCallback,useState,useEffect} from "react"
import * as axios from "axios";
///////////////////////////////////////////////////////////////////////////////////////////
    export const PostImg= (img)=>{
        const formData = new FormData();
        formData.append('image', img);
        return axios.post('https://api.imgur.com/3/upload', formData, {
            headers: {
                "Authorization": "Client-ID 13673efe05ed032"
            }
        })
};
///////////////////////////////////////////////////////////////////////////////////////////
export const useLoginAuth=()=>{
    const [token,setToken]=useState(null);
    const [userId,setUserId]=useState(null);
    const login=useCallback((jwtToken,id)=>{
        setToken(jwtToken);
        setUserId(id);
        localStorage.setItem("login",JSON.stringify({
            userId:id,token:jwtToken,
        }))
    },[]);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("login"));
        if (data && data.token){
            login(data.token,data.userId)
        }
    },[login,token]);
    return {login,userId,token}
};

/////////////////////////////////////////////////////////////////////////////////////
export const useObjects=()=>{
    const requestObj=useCallback( async(url, method='GET', body=null,headers={})=>{
        try {
            if(body) {
                body=JSON.stringify(body);
                headers['Content-Type']='application/json';
            }
            const response=await fetch(url,{method,body,headers});
            const data=await response.json();
            if (!response.ok){
                throw new Error(data.message||"Что-то пошло не так")
            }
            return  data
        }
        catch (e) {
            throw e
        }
    },[]);
    return {requestObj}
};
/////////////////////////////////////////////////////////////////////////////////
export  const useHTTP=()=>{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const request=useCallback( async(url, method='GET', body=null,headers={})=>{
        setLoading(true);
        try {
            if(body) {
                body=JSON.stringify(body);
                headers['Content-Type']='application/json';
            }
            const response=await fetch(url,{method,body,headers});
            const data=await response.json();
            if(!response.ok){
                throw new Error(data.message||"Что-то пошло не так")
            }
            setLoading(false);
            return data
        }
        catch (e) {
            setLoading(false);
            setError(e.message);
            throw e
        }
    },[]);
    return {loading,request,error}
};
///////////////////////////////////////////////////////////////////////////////
