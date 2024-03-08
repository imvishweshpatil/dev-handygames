import Image from "next/image";
import "../globals.css";

const Footer = () => {
    return (
        <main>
            <div className="footer flex items-center justify-center bg-white" style={{fontFamily:"sfprodisplay"}}>
                <div className="company flex">
                    <Image src={"/logofooter.png"} alt={"logo"} width={100} height={100} className={"footerlogo m-4"}/>
                    <div className="about">
                        <button className="career text-black m-2 font-bold" style={{ fontSize:"18px"}}>CAREERS</button>
                        <button className="contact text-black m-2 font-bold" style={{ fontSize:"18px"}}>CONTACT US</button>
                        <p className="text-black m-2" style={{ fontSize: "12px" }}>© 2023 KIDA Studios. All Rights Reserved. KIDA Studios,<br /> kidastudios.com and the KIDA Studios logo are trademarks <br /> of KIDA Studios in India and/or other countries.</p>
                    </div>
                </div>
                <div className="registration flex">
                    <div className="certification m-4 font-bold">
                        <Image src={"/startupindia.png"} alt={"startupindia"} width={160} height={160}/>
                        <p className="text-black" style={{ fontSize: "14px" }}>Certificate Number <br />DIPP12619</p>
                    </div>
                    <div className="duns m-4">
                        <Image src={"/duns.png"} alt={"duns"} width={100} height={100}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Footer;
