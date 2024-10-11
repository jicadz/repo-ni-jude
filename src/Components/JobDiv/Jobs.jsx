import React from "react";
import { BiTimeFive } from "react-icons/bi";

import logo1 from "../../assets/logo (1).png";
import logo2 from "../../assets/logo (2).png";
import logo3 from "../../assets/logo (3).png";
import logo4 from "../../assets/logo (4).png";
import logo5 from "../../assets/logo (5).png";
import logo6 from "../../assets/logo (6).png";
import logo7 from "../../assets/logo (7).png";
import logo8 from "../../assets/logo (8).png";

const Data = [
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'Novac Linus Co.'
    },
    {
        id: 2,
        image: logo2,
        title: 'UI Designer',
        time: '14hrs',
        location: 'Australia',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'Facebook'
    },
    {
        id: 3,
        image: logo3,
        title: 'Computer Eng.',
        time: '15hrs',
        location: 'USA',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'HP Co.'
    },
    {
        id: 4,
        image: logo4,
        title: 'Software Eng.',
        time: '23hrs',
        location: 'China',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'Xiaomi'
    },
    {
        id: 5,
        image: logo5,
        title: 'UX Design',
        time: '1day',
        location: 'China',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'Huawei'
    },
    {
        id: 6,
        image: logo6,
        title: 'Software Eng.',
        time: '1day',
        location: 'USA',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'Google'
    },
    {
        id: 7,
        image: logo7,
        title: 'Web Developer',
        time: '2days',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'Instagram'
    },
    {
        id: 8,
        image: logo8,
        title: 'Video Editor',
        time: '3days',
        location: 'China',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum fuga modi!',
        company: 'Novac Linus Co.'
    }
]

const Jobs = () => {

    return(
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">


            {
                Data.map(({id, image, title, time, location, desc, company}) => {

                return (
                    <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]   hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                    <span className="flex justify-between items-center gap-4">
                        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>

                        <span className="flex items-center text-[#ccc] gap-1">
                        <BiTimeFive />{time}
                        </span>

                    </span>
                    <h6 className="text-[#ccc]">{location}</h6>

                    <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]     group-hover:text-white">{desc}</p>

                    <div className="company flex items-center gap-2">
                        <img src={image} alt="Company Logo" className="w-[10%]"/>
                        <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                    </div>

                    <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-white group-hover/item:text-textColor">
                        Apply Now
                    </button>

                    </div>
                    )
                })
            }
        </div>
    )
}

export default Jobs