import React from "react";
import { useLocation } from "react-router-dom";

export default function Book() {
    const location = useLocation();
    const data = location.state.data;
    //   console.log(data) ;

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    const parser = new DOMParser();
    const htmlString = data.show.summary;
    const summary = parser.parseFromString(htmlString, "text/html");
    return (
        <>
            <div style={{
                display: 'grid',
                border: '2px solid grey',
                borderRadius: '5px',
                margin: '10px',
                padding: '5px',
                width: '95%',
                height: 'auto',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                }}>
                    <div style={{
                        maxWidth: "80%", height: 'auto'
                    }}>
                        <img src={data.show.image.original} alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div style={{ textAlign: 'center', fontSize:'20px'}}>
                        <div className="summry" dangerouslySetInnerHTML={{ __html: summary.body.innerHTML }} style={{
                            width: '100%',
                            height: 'auto',
                        }}></div>
                        <div style={{
                            margin:'30px'
                        }}>
                            <div>genres: {data.show.genres[0]} </div>
                            <div>language: {data.show.language} </div>
                            <button style={{ backgroundColor: '#8dc5f0', height:'50px', width:'80px', margin:'20px' }} >Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}