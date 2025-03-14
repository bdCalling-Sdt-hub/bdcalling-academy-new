import { baseUrl, imgUrl } from '@/config'
import { timeFormat } from '@/lib/utils'
import { Calendar, Clock8, MapPinned } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeadingText from '../Common/headingText'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

const Event = () => {
  const [events, setEvents] = useState([])
  const [desLen, setDesLen] = useState(false)
  useEffect(() => {
    baseUrl
      .get('/event')
      .then((res) => setEvents(res?.data?.data?.data))
      .catch((err) => {})
  }, [])
  const pathname = usePathname()

  return (
    <div className="my-20 container">
      {pathname == '/success-stories' ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            {events?.map((event, index) => (
              <div
                key={index}
                className="rounded-lg relative lg:h-[290px]"
                style={{
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                }}
              >
                <img
                  src={`${imgUrl}/${event?.image}`}
                  alt="course image"
                  className="rounded-md  w-full pb-16"
                />
                <div className="h-24 w-full border-t  absolute left-0 bottom-0 rounded-b-md p-2 text-white bg-[#1e99fd]">
                  <div className="lg:flex gap-5 items-center">
                    <p className="flex items-center gap-1">
                      <Calendar size={18} />
                      <span>
                        {new Date(event?.date).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Clock8 size={18} />
                      <span>{timeFormat(event?.time)}</span>-
                      <span>{timeFormat(event?.end_time)}</span>
                    </p>
                  </div>
                  <h2 className="text-sm lg:text-xl  my-3 capitalize">
                    {event?.course_name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <HeadingText
            title={
              <div className="mt-10 flex items-center justify-between">
                <div>Upcoming Events</div>
                <Link
                  href={{
                    pathname: '/success-stories',
                  }}
                  className="text-[16px] cursor-pointer text-blue-600 hover:text-blue-400 transition-all"
                >
                  See all
                </Link>
              </div>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
            {events.length > 0 && (
              <div
                className="col-span-2 rounded-lg"
                style={{
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                }}
              >
                <img
                  src={`${imgUrl}/${events[events.length - 1]?.image}`}
                  alt="course image"
                  className="rounded-t-lg w-full "
                />
                <div className="p-3">
                  <div className="lg:flex items-center justify-between">
                    <div className="lg:flex gap-5 items-center">
                      <p size={18} className="flex items-center gap-1">
                        <Calendar size={18} color="#1796fd" />
                        <span className=" text-gray-600">
                          {new Date(
                            events[events.length - 1]?.date
                          ).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </p>
                      <p size={18} className="flex items-center gap-1">
                        <Clock8 size={18} color="#1796fd" />
                        <span className=" text-gray-600">
                          {timeFormat(events[events.length - 1]?.time)}
                        </span>
                        -
                        <span className=" text-gray-600">
                          {timeFormat(events[events.length - 1]?.end_time)}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p
                        className={` text-md ${
                          events[events.length - 1]?.status == 'offline'
                            ? ' text-red-500 py-1 px-3 rounded-md'
                            : ' text-green-500 py-1 px-3 rounded-md'
                        }`}
                      >
                        {events[events.length - 1]?.status == 'offline'
                          ? 'OFFLINE'
                          : 'ONLINE'}
                      </p>
                      <Link href="/free-seminar">
                        <Button className="bg-primary">Join Seminar</Button>
                      </Link>
                    </div>
                  </div>
                  {events[events.length - 1]?.status == 'offline' && (
                    <div className="flex items-center  gap-1">
                      <MapPinned size={20} color="#1796fd" />
                      <p className="text-md capitalize text-gray-500">
                        {events[events.length - 1]?.locations}
                      </p>
                    </div>
                  )}
                  <h2 className="text-2xl capitalize my-2">
                    {events[events.length - 1]?.course_name}
                  </h2>
                  <p>
                    {!desLen &&
                      events[events.length - 1]?.descriptions.slice(0, 150)}
                    {!desLen && (
                      <span
                        className="text-primary cursor-pointer ml-1"
                        onClick={() => setDesLen(true)}
                      >
                        see more
                      </span>
                    )}

                    {desLen && events[events.length - 1]?.descriptions}
                  </p>
                </div>
              </div>
            )}
            <div className="space-y-4">
              {events.slice(0, 2).map((event, index) => (
                <div
                  key={index}
                  className="rounded-lg relative lg:h-[290px]"
                  style={{
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                  }}
                >
                  <img
                    src={`${imgUrl}/${event?.image}`}
                    alt="course image"
                    className="rounded-md  w-full pb-16"
                  />
                  <div className="h-24 w-full border-t  absolute left-0 bottom-0 rounded-b-md p-2 text-white bg-[#1e99fd]">
                    <div className="lg:flex gap-5 items-center">
                      <p className="flex items-center gap-1">
                        <Calendar size={18} />
                        <span>
                          {new Date(event?.date).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </p>
                      <p className="flex items-center gap-1">
                        <Clock8 size={18} />
                        <span>{timeFormat(event?.time)}</span>-
                        <span>{timeFormat(event?.end_time)}</span>
                      </p>
                    </div>
                    <h2 className="text-sm lg:text-xl  my-3 capitalize">
                      {event?.course_name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Event
