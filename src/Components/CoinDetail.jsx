import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios
import Header from '../Pages/Header';

export const CoinDetail = () => {
    const [coinDetails, setCoinDetails] = useState({});
    const { coinId } = useParams();

    useEffect(() => {
        const getCoinData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
                    headers: {
                        accept: 'application/json',
                        'x-cg-demo-api-key': 'CG-ArQ3UDdtsPrLhUY1hFhPLigK'
                    }
                });
                setCoinDetails(response.data);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        getCoinData();

    }, [coinId]); // Include coinId in the dependency array to re-fetch data when coinId changes
    console.log(coinDetails)

    return (
        <div className='container m-auto p-0 m-0 content p-0 m-0 px-2 '>
            <div className='row p-0 m-0'>
                <Header />
            </div>
            <div className="coinAll">

                <div className="row p-0 m-0">
                    <div className="col-3 p-3">
                        <div className=' p-0 m-0'>
                            {coinDetails.image && <img src={coinDetails.image.thumb} alt={coinDetails.name} />}
                            <span className='ps-2'>  {coinDetails.symbol} <b>{coinDetails.name}</b></span>

                        </div>
                        <div className='' style={{ fontSize: '12px', height: '50vh', }}>
                            {coinDetails.description &&
                                (coinDetails.description.en
                                    ? coinDetails.description.en.split(' ').slice(0, 100).join(' ')
                                    : 'No description available.')}
                        </div>

                        <div>
                        {coinDetails.currentprice &&
                                (coinDetails.currentprice.usd
                                    ? coinDetails.currentprice.usd
                                    : 'No description available.')}
                        </div>
                    </div>
                </div>

                <div>

                </div>
                {/* Display other coin details as needed */}
            </div>
        </div >
    );
};
