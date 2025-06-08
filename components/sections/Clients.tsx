/* eslint-disable @next/next/no-img-element */
import { clientReviews } from "@/data";
import Image from "next/image";
import TitleHeader from "../common/title-header";
import GlareHover from "../common/glare-hover/GlareHover";
import { Star } from "lucide-react";
import Marquee from "../common/marquee/Marquee";


interface ReviewCardProps {
    avatar: string;
    name: string;
    rating: number;
    review: string;
}

const ReviewCard = ({ avatar, name, rating, review }: ReviewCardProps) => (
    <div className="w-80 p-4 bg-card rounded-lg border border-border shadow-sm">
        <div className="flex items-center gap-3 mb-3">
            <img
                src={avatar}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
            />
            <div>
                <h3 className="font-medium text-foreground">{name}</h3>
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
        <p className="text-sm text-muted-foreground">{review}</p>
    </div>
);



const Clients = () => {

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
            rating: 5,
            review:
                "This product exceeded my expectations! The quality is outstanding and the customer service was excellent.",
        },
        {
            id: 2,
            name: "Michael Chen",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
            rating: 4,
            review:
                "Great value for money. Would definitely recommend to others looking for a reliable solution.",
        },
        {
            id: 3,
            name: "Emma Davis",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
            rating: 5,
            review:
                "Absolutely love it! The features are exactly what I needed, and it's so easy to use.",
        },
        {
            id: 4,
            name: "James Wilson",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
            rating: 4,
            review:
                "Very impressed with the quality and attention to detail. A fantastic product overall.",
        },
    ];

    return (
        <section className="c-space mt-20 pb-32">
            {/* <h3 className="head-text">Hear from My Clients</h3> */}
            <TitleHeader
                title='What People Say About Me?'
                sub='⭐️ Customer feedback highlights'
            />

            {/* MARQUEE TESTIMONIALS */}
            {/* <div className="p-8 flex flex-col gap-8 items-center justify-center">
        <div className="w-full space-y-8">
          <div className="">
            <Marquee direction="left" className="py-4" speed={30}>
              {reviews.map((review) => {

                return (
                  <ReviewCard
                    key={review.id}
                    avatar={review.avatar}
                    name={review.name}
                    rating={review.rating}
                    review={review.review}
                  />
                )
              }
              )}
            </Marquee>
          </div>
        </div>
      </div> */}
            {/* MARQUEE TESTIMONIALS */}


            {/* Regular Cards */}
            <div className="client-container">
                {clientReviews.map((item) => (
                    <GlareHover
                        key={`review-${item.id}`}
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                    >
                        <div>
                            <p className="text-white-800 font-light">{item.review}</p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <div className="relative w-12 h-12 rounded-full aspect-square overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt="reviewer"
                                            fill
                                            // width={48}
                                            // height={48}
                                            className=""
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{item.name}</p>
                                        <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Image
                                            key={index}
                                            src="/assets/star.png"
                                            alt="star"
                                            width={20}
                                            height={20}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </GlareHover>
                ))}
            </div>
        </section>
    );
};

export default Clients;