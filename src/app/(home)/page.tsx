import { getCityFilter } from "./lib/data";

import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import CompanyLogos from "../components/company-logos";

export default async function Home() {
  const filter = await getCityFilter();

  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0">
          <Navbar />
          <div className="hero-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[90px] mt-[103px]">
            <div className="title flex flex-col gap-[30px]">
              <h1 className="font-extrabold text-[80px] leading-[90px]">
                Best Flights. <br />
                Cheaper Budget.
              </h1>
              <p className="font-medium text-lg leading-[36px]">
                No more long queue, get more delicious heavy meals. <br />
                Crafted by best talented people around the world.
              </p>
            </div>

            <form className="bg-white text-flysha-black w-full flex justify-between items-center rounded-[20px] p-5">
              <div className="flex gap-[50px] items-center p-5">
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="departure" className="text-lg">
                    Departure
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <Image
                        width={150}
                        height={60}
                        src="/assets/images/icons/airplane.svg"
                        alt="icon"
                      />
                    </div>
                    <select
                      name="departure"
                      id="departure"
                      className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                    >
                      <option value="" disabled selected>
                        Departure
                      </option>
                      {filter?.map((val, key) => (
                        <option
                          key={`${key} ${val.departureCity}`}
                          value={val.departureCity}
                        >
                          {val.departureCity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="arrival" className="text-lg">
                    Arrival
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <Image
                        width={150}
                        height={60}
                        src="/assets/images/icons/airplane.svg"
                        alt="icon"
                      />
                    </div>
                    <select
                      name="arrival"
                      id="arrival"
                      className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                    >
                      <option value="" disabled selected>
                        Arrival
                      </option>
                      {filter?.map((val, key) => (
                        <option
                          key={`${key} ${val.destinationCity}`}
                          value={val.destinationCity}
                        >
                          {val.destinationCity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="date" className="text-lg">
                    Departure Date
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <Image
                        width={150}
                        height={60}
                        src="/assets/images/icons/calendar.svg"
                        alt="icon"
                      />
                    </div>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="relative font-semibold text-[22px] leading-[26.63px] w-[157px] bg-transparent focus:outline-none appearance-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                    />
                  </div>
                </div>
              </div>
              <Link
                href="signup.html"
                className="font-bold text-2xl leading-9 text-flysha-black text-center bg-flysha-light-purple rounded-[18px] p-[12px_30px] flex shrink-0 items-center h-[108px]  transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
              >
                Explore Now
              </Link>
            </form>
          </div>

          <CompanyLogos />
        </div>
      </section>

      <section
        id="Services"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <h2 className="font-bold text-[32px] leading-[48px] text-center">
          We Ensure You <br />
          Fly With Us Forever
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="../assets/images/icons/profile-2user.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Talented Crew</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="../assets/images/icons/shield-tick.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Safe Guard</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="../assets/images/icons/crown.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Best Awards</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="../assets/images/icons/building-3.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Pickup at Home
              </p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Selected"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <div className="flex gap-[10px]">
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                width={25}
                height={25}
                src="/assets/images/icons/arrow-right.svg"
                className="rotate-180"
                alt="icon"
              />
            </button>
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                src="/assets/images/icons/arrow-right.svg"
                alt="icon"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={40}
                height={40}
                src="/assets/images/thumbnail/thumbnail1.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                unoptimized={true}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">First Lounge</p>
                <p className="text-flysha-off-purple">Manhanggattan</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={40}
                height={40}
                src="/assets/images/thumbnail/thumbnail2.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                unoptimized={true}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Business First</p>
                <p className="text-flysha-off-purple">Gulfstream 109-BB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={40}
                height={40}
                src="/assets/images/thumbnail/thumbnail3.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                unoptimized={true}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Pickup at Home</p>
                <p className="text-flysha-off-purple">Bentley Banta</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={40}
                height={40}
                src="/assets/images/thumbnail/thumbnail4.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                unoptimized={true}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Fly Roam</p>
                <p className="text-flysha-off-purple">Capung A19-22</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Testimonials"
        className="w-full flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex flex-col gap-[6px] items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <p className="font-medium text-flysha-off-purple">
            We gave them all the best experiences ever
          </p>
        </div>
        <div className="testimonial-slider w-full overflow-hidden">
          <div className="slider flex shrink-0 w-max">
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
