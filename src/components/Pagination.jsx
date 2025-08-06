import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

function Items({ currentItems }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {
                currentItems.map((item, index) => (
                    <Product
                        id={item.id}
                        image={item.images[0]}
                        price={item.price}
                        title={item.title}
                        key={index}
                    />
                ))}
        </div>
    );
}

function Pagination({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(productsData => setData(productsData.products))
    }, [])

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="flex justify-between items-center  mt-12 flex-col md:flex-row gap-6">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<button className='h-12 w-12 flex text-center justify-center items-center border border-[#D8D8D8] text-[#767676] cursor-pointer duration-300 hover:bg-[#262626] hover:text-white'>&gt;</button>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<button className='h-12 w-12 flex text-center justify-center items-center border border-[#D8D8D8] text-[#767676] cursor-pointer duration-300 hover:bg-[#262626] hover:text-white'>&lt;</button>}
                    renderOnZeroPageCount={null}
                    containerClassName='flex gap-4 items-center'
                    pageLinkClassName='h-12 w-12 flex text-center justify-center items-center border border-[#D8D8D8] text-[#767676] cursor-pointer duration-300 hover:bg-[#262626] hover:text-white'
                    activeLinkClassName='h-12 w-12 flex text-center justify-center items-center border border-[#262626] cursor-pointer duration-300 bg-[#262626] text-white'
                />
                <p className='text-base text-dark'>Products from {itemOffset} to {endOffset < data.length ? endOffset : data.length} of {data.length}</p>
            </div>
        </>
    );
}

export default Pagination