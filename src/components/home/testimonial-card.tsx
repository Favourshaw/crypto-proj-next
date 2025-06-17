"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chinedu O.",
    role: "Business Owner, Lagos",
    content:
      "I needed a reliable way to convert my crypto earnings to naira for business expenses. Since discovering this platform 3 months ago, I've completed over 50 transactions without a single issue.",
    stars: 5,
    img: "/assets/home/nedu-L.png",
  },
  {
    name: "Amina T.",
    role: "Freelance Developer, Abuja",
    content:
      "As someone who gets paid in crypto by international clients, converting to naira used to be my biggest headache. Now it's literally just three clicks and I'm done. ",
    stars: 5,
    img: "/assets/home/amina.png",
  },
  {
    name: "Oluwaseun D.",
    role: "Crypto Trader, Port Harcourt",
    content:
      "The speed is what impresses me most. I've tried five different conversion services, and nothing comes close to how quickly I get my naira.",
    stars: 5,
    img: "/assets/home/segun-L.png",
  },
  {
    name: "Ngozi E.",
    role: "Online Merchant, Enugu",
    content:
      "I was skeptical about another crypto service, but the direct bank transfers won me over. No more juggling multiple apps and wallets just to access my own money. ",
    stars: 5,
    img: "/assets/home/ngozi.png",
  },
  {
    name: "Tunde B.",
    role: "Investment Advisor, Ibadan",
    content:
      "What stands out is the consistency. Every single transaction, regardless of size, is processed with the same efficiency.  I've recommended this platform to all my clients who deal with cryptocurrency,",
    stars: 5,
    img: "/assets/home/halima.png",
  },
  {
    name: "Halima M.",
    role: "Student, Kano",
    content:
      "As a student receiving financial support from family abroad, this platform has been a lifesaver. The process is so simple that even my non-tech-savvy relatives can use it. ",
    stars: 5,
    img: "/assets/home/halima.png",
  },

  {
    name: "Victor O.",
    role: "Tech Entrepreneur, Kaduna",
    content:
      "Running a startup means I need financial flexibility and immediate access to funds. This platform has revolutionized how I manage crypto-to-fiat conversions.",
    stars: 5,
    img: "/assets/home/victor.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Row1() {
  return (
    <div className="grid col-span-3 md:col-span-1 gap-4">
      <motion.div
        className="row-span-2 bg-white p-0 rounded-2xl border hidden lg:flex border-[#E9ECF2] flex-col"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-4">
          <img
            src="/assets/home/nedu-L.png"
            alt="Victor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-4 p-6 flex-col">
          <p className="home-text-xs mt-2 flex-grow">
            I needed a reliable way to convert my crypto earnings to naira for
            business expenses. Since discovering this platform 3 months ago,
            I've completed over 50 transactions without a single issue.
          </p>
          <div>
            <p className="font-semibold text-sm text-black">Chinedu O.</p>
            <p className="text-sm text-gray-500">Business Owner, Lagos</p>
            <div className="text-yellow-500 text-sm mt-2">★★★★★</div>
          </div>
        </div>
      </motion.div>
      {testimonials.slice(0, 1).map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white p-5 rounded-2xl border lg:hidden border-[#E9ECF2]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-4">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-black text-sm">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <div className="text-star text-sm mt-2">
            {"★".repeat(testimonial.stars)}
          </div>
          <p className="home-text-xs mt-2">{testimonial.content}</p>
        </motion.div>
      ))}

      {testimonials.slice(1, 2).map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white p-5 rounded-2xl border border-[#E9ECF2]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between gap-3">
            <div className="w-full hidden lg:block flex-auto">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full lg:hidden object-cover"
                />
                <div>
                  <p className="font-semibold text-[13.44px] text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-[13.44px] text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="text-star text-sm mt-2">
                {"★".repeat(testimonial.stars)}
              </div>
              <p className="home-text-xs mt-2">{testimonial.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Row2() {
  return (
    <div className="grid col-span-3 md:col-span-2 gap-4 h-fit">
      {testimonials.slice(2, 3).map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white p-5 lg:p-0 rounded-2xl border border-[#E9ECF2]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between gap-3">
            <div className="w-full hidden lg:block lg:flex-1/2">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="lg:py-5 lg:flex-1/2 flex flex-col lg:flex-col-reverse lg:justify-end">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full lg:hidden object-cover"
                />
                <div>
                  <p className="font-semibold text-[13.44px] text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-[13.44px] text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="text-star text-sm mt-2">
                {"★".repeat(testimonial.stars)}
              </div>
              <p className="home-text-xs mt-2">{testimonial.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
      {testimonials.slice(3, 5).map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white p-5 rounded-2xl border border-[#E9ECF2]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-4">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-black text-sm">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <div className="text-star text-sm mt-2">
            {"★".repeat(testimonial.stars)}
          </div>
          <p className="home-text-xs mt-2">{testimonial.content}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function Row3() {
  return (
    <div className="grid col-span-3 lg:col-span-1 md:grid-cols-2 lg:grid-cols-1 gap-4 h-fit">
      {testimonials.slice(5, 8).map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white p-5 rounded-2xl border border-[#E9ECF2]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between gap-3">
            <div className="w-full hidden lg:block flex-auto">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full lg:hidden object-cover"
                />
                <div>
                  <p className="font-semibold text-[13.44px] text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-[13.44px] text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="text-star text-sm mt-2">
                {"★".repeat(testimonial.stars)}
              </div>
              <p className="home-text-xs mt-2">{testimonial.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
