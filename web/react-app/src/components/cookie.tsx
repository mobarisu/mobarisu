// import { useCookies } from "react-cookie";

function Cookie() {
    const [cookies, setCookie, removeCookie] = useCookies(['storeCookie']);//--init
    const date = new Date();
    let cookieDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1,5,0,0);
    console.log(cookieDate);

    const Cookietest = (()=>{
        setCookie("storeCookie",'ログインしています。',{expires: cookieDate});
    })
    const Cookieremove = (()=>{
        removeCookie("storeCookie");
    })
    return(
        <div>
            <p>cookieTest</p>
            <button onClick={Cookietest}>クッキー追加</button>
            <button onClick={Cookieremove}>削除</button>
            <p>{cookies.storeCookie && cookies.storeCookie}</p>
        </div>
    )
} 
export default Cookie;