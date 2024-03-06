import Image from "next/image";
import "../globals.css";
const Footer = () => {
    return (
        <main>

            <div className="footer flex items-center justify-center bg-white">
                <Image src={"/logofooter.png"} alt={"logo"} width={100} height={100} className="logofooter mr-8"/>
                <div className="about my-10">
                    <button className="career text-black font-bold">CAREERS</button>
                    <button className="contact text-black ml-20 font-bold">CONTACT US</button>
                    <p className="info text-black mt-2" style={{fontSize:"11px"}}>© 2023 KIDA Studios. All Rights Reserved. KIDA Studios,<br/> kidastudios.com and the KIDA Studios logo are trademarks <br/> of KIDA Studios in India and/or other countries.</p>
                </div>
                <div className="registration ml-20">
                    <Image  src={"/startupindia.png"} alt={"startupindia"} width={160} height={160}/>
                    <p className="certificate text-black" style={{fontSize:"15px"}}>Certificate Number <br/>DIPP12619</p>
                </div>
                <div className="duns ml-4">
                    <Image src={"/duns.png"} alt={"duns"} width={100} height={100} />
                </div>
            </div>

            {/*<div className="footer flex bg-white">
                <div className="logo mx-20 mt-10">
                    <Image src={"/logofooter.png"} alt={"logo"} width={100} height={100} />
                </div>
                <div className="about mt-10">
                    <button className="career text-black ml-20" style={{fontSize:"18px"}}>CAREERS</button>
                    <button className="contact text-black ml-20" style={{fontSize:"18px"}}>CONTACT US</button>
                    <p className="ml-20 mt-2 text-black" style={{fontSize:"12px"}}>© 2023 KIDA Studios. All Rights Reserved. KIDA Studios,<br/> kidastudios.com and the KIDA Studios logo are trademarks <br/> of KIDA Studios in India and/or other countries.</p>
                </div>
                <div className="row" style={{margin:"40px auto"}}>
                    <div className="col">
                        <Image src={"/startupindia.png"} alt={"startupindia"} width={160} height={160} />
                        <p className="text-black" style={{fontSize:"14px"}}>Certificate Number <br/>DIPP12619</p>
                    </div>
                    <div className="col">
                        <Image src={"/duns.png"} alt={"duns"} width={100} height={100} />
                    </div>
                </div>
            </div>*/}
        </main>
    );
};

export default Footer;