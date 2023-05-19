import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { times } from "lodash";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import styled from "styled-components"
import { nanoid } from "nanoid";

const data = [

	"/logos/firstbank.jpeg",


"/logos/moniepoint.jpeg",


"/logos/justice.jpeg",

"/logos/mfm.jpeg",
"/logos/airtel.jpeg",
	"/logos/firstbank.jpeg",


"/logos/moniepoint.jpeg",


"/logos/justice.jpeg",

"/logos/mfm.jpeg",
"/logos/airtel.jpeg",
	"/logos/firstbank.jpeg",


"/logos/moniepoint.jpeg",


"/logos/justice.jpeg",

"/logos/mfm.jpeg",
"/logos/airtel.jpeg",

]

const Trusted = () => {

const [key, setKey] = useState(nanoid());

  const Photo = styled.img`
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: center;
  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
  `


// const FullWidth = styled.div`
//   width: 100%;
//   position: relative;
//   left: 50%;
//   right: 50%;
//   margin-left: -50vw;
//   margin-right: -50vw;
// `;


  return <div>
    <section className="pt-6 dark:bg-gray-900 dark:text-gray-100 ">
	<div className=" p-4 mx-auto text-center">
		<h2 className="text-4xl font-bold">Trusted by the industry leaders</h2>
	</div>
	<div className="py-10">

			
	<Marquee key={key} velocity={10} className="flex justify-between w-full">
        {times(12, Number).map(id => (
			<div className="">
          <Photo className="w-[100px] h-[80px] sm:w-[150px] sm:h-[120px]  md:w-[210px] md:h-[170px] ml-[60px] sm:ml-[87px]" src={data[id]} alt="" key={`marquee-example-people-${id}`}  />
		  </div>
        ))}
      </Marquee>

	</div>
</section>
  </div>;
};

export default Trusted;
