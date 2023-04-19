import QRCode from "react-qr-code";
import { useState } from "react";
import Layout from "@/components/layout";

const Qr = () => {
    const [qr, setQr] = useState("");
    const handleChange = (e) => {
        setQr(e.target.value)
    }
    return (
        <Layout>
            <div className="normalize">
                <div className="page-div admin_div">
                    <h1 className="text">QR Code Generator</h1>
                    <p className="center text">
                        Enter the text you want to convert to a QR Code in the box below.
                    </p>
                    <p className="center text">Enter Text for a <i className="bi bi-qr-code"></i></p>
                    <div>
                        <div className="qr" style={{ textAlign: "center" }}>
                            <input type="text" onChange={handleChange} value={qr} name="qr" id="qrcode" />
                        </div>
                        <div style={{ padding: "2rem 0", textAlign: "center", }}>
                            <QRCode
                                size={256}
                                style={{ height: "auto", width: "256", border: "12px solid var(--yellow)", borderRadius: "12px",}}
                                value={qr}
                                bgColor={"#ffffff"}
                                fgColor={"#212121"}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Qr