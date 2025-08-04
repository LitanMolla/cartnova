import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
            <ReactPaginate
                breakLabel="..."
                nextLabel={<button className='h-12 w-12 flex text-center justify-center items-center border border-[#D8D8D8] text-[#767676] cursor-pointer duration-300 hover:bg-[#262626] hover:text-white'>&gt;</button>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<button className='h-12 w-12 flex text-center justify-center items-center border border-[#D8D8D8] text-[#767676] cursor-pointer duration-300 hover:bg-[#262626] hover:text-white'>&lt;</button>}
                renderOnZeroPageCount={null}
                containerClassName='flex gap-4 mt-12 items-center'
                pageLinkClassName='h-12 w-12 flex text-center justify-center items-center border border-[#D8D8D8] text-[#767676] cursor-pointer duration-300 hover:bg-[#262626] hover:text-white'
                activeLinkClassName='h-12 w-12 flex text-center justify-center items-center border border-[#262626] cursor-pointer duration-300 bg-[#262626] text-white'
            />
        </>
    );
}

export default Pagination