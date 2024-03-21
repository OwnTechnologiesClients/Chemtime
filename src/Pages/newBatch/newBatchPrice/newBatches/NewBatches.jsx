import React from 'react'
import "./NewBatches.scss";
import { Link, useNavigate } from 'react-router-dom';

const newsAndUpdates = [
    {
        url: "/onlinecourses/csir-net",
        content: "CSIR NET Chemical Sciences Online Batches"
    },
    {
        url: "/offlinecourses/csir-net",
        content: "CSIR NET Chemical Sciences Offline Course"
    },
    {
        url: "/onlinecourses/gate",
        content: "GATE Chemistry Online Batch"
    },
    {
        url: "/offlinecourses/gate",
        content: "GATE Chemistry Offline Batch"
    },
    {
        url: "/onlinecourses/iit-jam",
        content: "IIT-JAM Chemistry Online Batch"
    },
    {
        url: "/offlinecourses/iit-jam",
        content: "IIT-JAM Chemistry Offline Batch"
    },
    {
        url: "/onlinecourses/cuet",
        content: "CUET(PG) Chemistry Online Batch"
    },
    {
        url: "/offlinecourses/cuet",
        content: "CUET(PG) Chemistry Offline Batch "
    },


]

const NewBatches = () => {
    return (



        <div className="new-batch-pricing-row">


            <div className="marquee-container">
                <div>
                    {
                        newsAndUpdates.map((item, index) => {
                            return <div className='notification' key={index}>
                                <Link to={item.url}> <div>⚫</div> <div className='content'>{item.content}</div></Link>
                            </div>
                        })
                    }
                </div>


            </div>



        </div>

    )
}

export default NewBatches