import React from 'react'
import { useState, useEffect } from 'react';
// import Book from './Book.js';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate() ;
    const API = `https://api.tvmaze.com/search/shows?q=all`;

    const fetchShows = async () => {
        try {
            const res = await fetch(API);
            const result = await res.json();
            // console.log(result);
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error("Error while fetching: ", error);
        }
    }
    useEffect(() => {
        fetchShows();
    }, []);

    if (loading) {
        return <div>Loading....</div>;
    }

    const handleClick = (index) => {
        // console.log(data[index]) ;
        navigate('/book-show', { state: { data: data[index]} }) ;
    }

    return (
        <>
            <h1 style={{textAlign:'center', color:'#308191'}}>select your favourite show</h1>
            <div className='shows' style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gridAutoRows: 'minmax(100px, auto)', gap: '7px',
                margin:'20px'
            }}>
                {
                    data.map((obj, index) => (
                        obj.show.image != null ? (
                            <div className='show' key={index} style={{
                                border: '1px solid grey', borderRadius: '5px',
                                boxShadow: '3px 3px 3px grey', width: '100%', height: 'auto'
                            }} >
                                <div style={{ maxWidth: '100%' }}>
                                    <img
                                        src={obj.show.image.original}
                                        style={{ width: '100%', height: 'minmax(150px,200px)' }}
                                        alt='show image'
                                    />
                                </div>
                                <div style={{ color: "#308191", margin:'5px'}}>
                                    <span className='text' style={{margin:'5px'}}>Run time: {obj.show.averageRuntime}</span>
                                    <button style={{backgroundColor:'#8dc5f0'}} onClick={()=>{handleClick(index)}}>View</button>
                                </div>
                            </div>
                        ) : null
                    ))
                }
            </div> 
        </>
    );
}