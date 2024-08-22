import { baseUrl } from '@/config';
import MetaTag from '@/shared/MetaTag';
import React, { useEffect, useState } from 'react'
import CourseCard from '../Common/CourseCard';
import SkeletonCard from '../Common/SkeletonCard';
import { Button } from '../ui/button';

const RecordingCourse = () => {
    const [video, setVideo] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        baseUrl
            .get(
                `/course?status=video`
            )
            .then((res) => {
                setVideo(res.data?.data?.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.response?.data?.message);
                setVideo([]);
                setLoading(false);
            });
    }, [])
    return (
        <div className='container'>
            {/* <MetaTag title="Course" /> */}
            <p className='text-2xl font-bold'>Recording Course</p>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-12">

                <div className="col-span-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                        {loading ? (
                            [...Array(6).keys()].map((index) => <SkeletonCard key={index} />)
                        ) : video.length > 0 ? (
                            video.map((course, index) => (
                                <CourseCard key={index} course={course} />
                            ))
                        ) : (
                            <p className="text-center text-4xl my-20  text-gray-200  col-span-4">
                                Video courses not found
                            </p>
                        )}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default RecordingCourse