"use client";
import React, { useState} from 'react';
import {collapse,expand} from '../assets';
import styles , {layout} from '../style';
import Image from 'next/image';

export default function AccordionPannel() {
	const [id, setId] = useState<number>(0);

    const accordionList = [
		{
			id: 1,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 2,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 3,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 4,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 5,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
	];

    const handleItemClick = (index: number) => {
		if (index === id) {
			setId(-1);
		} else {
			setId(index);
		}
	};
    return (
		<>
		<div className="flex-1 flex flex-col">
			<h1
				className={`flex-1 ${styles.flexStart}font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[120.8px] leading-[75px] w-full1`}
			>
				LOREM IPSUMY DOLOR
			</h1>
		</div>
		{/* <div className="px-[12px] py-[60px] md:px-[200px] md:py-[100px]"> */}
			{accordionList?.map((item, index) => {
				return (
					<div key={item.id} className="flex flex-col">
						<div
							className={`flex justify-between cursor-pointer md:px-4 ${
								id === index &&
								"gradient-bg-image max-w-full"
							}`}
							onClick={() => handleItemClick(index)}
						>
							<span className="my-2">{item?.header}</span>
							<Image
								src={id === index ? collapse : expand}
								width={17}
								height={17}
								alt="expand or collapse"
							/>
						</div>
						{id === index && (
							<span className="opacity-50 my-4 md:px-4">{item?.body}</span>
						)}
					</div>
				);
			})}
		{/* </div> */}
		</>
	);
}

