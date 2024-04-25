import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Pages/Header';
import { CoinDetail } from './CoinDetail';
import '../App.css'
import { useNavigate } from 'react-router-dom';

export default function GetCoins() {
    const [coinData, setCoinData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const navigate=useNavigate();



    useEffect(() => {
        const getCoinData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    headers: {
                        accept: 'application/json',
                        'x-cg-demo-api-key': 'CG-ArQ3UDdtsPrLhUY1hFhPLigK'
                    },
                    params: { vs_currency: 'inr', category: 'layer-1' }
                });
                setCoinData(response.data);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        getCoinData();

    }, []);
    console.log(coinData)

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = coinData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    return (
        <div className={`container m-auto p-0 m-0 content p-0 m-0 px-2 text-center`}>
            <div className='row p-0 m-0'>
                <Header />
            </div>
            <div className='coinAll m-0 p-0  px-2'>

                {coinData.length === 0
                    ?
                    (
                        <div className="spinner-grow" role="status">
                            <p className='py-5'>Loading</p>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                    :
                    (
                        <div className='p-0 m-0 pt-2 m-auto'>
                            <table className="table  p-0 m-0 m-auto">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th className='text-start'>Name</th>
                                        <th className='text-start'>Symbol</th>
                                        <th>Current Price</th>
                                        <th>Market Cap</th>
                                        <th>24h High</th>
                                        <th>24h Low</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((coin) => (
                                        <tr key={coin.id} onClick={() => {navigate(`/coin/${coin.id}`)}}>
                                            <td><img src={coin.image} width={20} alt="" /></td>
                                            <td className='text-start'>{coin.name}</td>
                                            <td className='text-start'>{coin.symbol}</td>
                                            <td>₹{coin.current_price}</td>
                                            <td>₹{coin.market_cap}</td>
                                            <td>₹{coin.high_24h}</td>
                                            <td>₹{coin.low_24h}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                    )
                }
                <div className='py-3'>
                    <button className='btn btn-secondary me-4'
                        onClick={prevPage}
                        disabled={currentPage === 1}>
                        &laquo;
                    </button>
                    <span>{currentPage}</span>
                    <button className='btn btn-secondary ms-4'
                        onClick={nextPage}
                        disabled={indexOfLastItem >= coinData.length}>
                        &raquo;
                    </button>
                </div>
            </div>
        </div>

    );
}
