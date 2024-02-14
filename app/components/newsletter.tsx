import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
const NewsLetter = () => {
    return (
        <main>
            <div className="overlay relative bg-gray-500 opacity-90" style={{ position: "relative", width: "100%", height: "90vh" }}>
                <Image src={"/newsletter.jpg"} alt={"newsletter"} layout={"fill"} objectFit={"cover"} />
                <div className="relative flex items-center justify-center" style={{padding:"0px"}}>
                    <Image src="/handygamesicon.png" alt="handygameicon" width={250} height={250} className={"handygamesicon mt-20"}/>
                </div>
                <div className="relative flex items-center justify-center mt-14">
                    <h1 className="newsletter-title font-bold text-white" style={{margin:"0 10px", fontSize:"40px"}}>NEWSLETTER SIGNUP</h1>
                </div>
                <div className="subscribe relative flex items-center justify-center subscribe mt-6">
                    <input type="email" placeholder="Enter your email" className="email mr-2 p-2 border border-gray-400 rounded" style={{width:"20%"}}/>
                    <button className="sub-button bg-gray-500 text-white p-2 rounded" style={{ width: "185px" }}>
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </main>
    );
};
export default NewsLetter;