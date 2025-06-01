"use client";
import Image from 'next/image'
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import TitleHeader from '../common/title-header';
import Silk from '../common/backgrounds/Silk';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface FormType {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    // const {alert, showAlert, hideAlert} = useAlert();
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState<FormType>({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = ({ target: { name, value } }: { target: { name: string; value: string; } }) => {
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                {
                    from_name: form.name,
                    to_name: "Devansh",
                    from_email: form.email,
                    to_email: "work.devanshsk+portfolio@gmail.com",
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
            );

            setLoading(false);
            alert("Your message is sent");
            setForm({
                email: "",
                name: "",
                message: ""
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong.")
            setForm({
                email: "",
                name: "",
                message: ""
            });
        }

    }

    return (
        <div
            className="relative h-[100vh] "
            id="contact"
            // className="relative h-[700px] "
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div
                className='fixed bottom-0 w-full'
            >


                <section className='relative c-space' >
                    <div className="absolute left-0 top-0 w-full h-full z-[-1]">
                        <Silk
                            speed={5}
                            scale={.5}
                            // color="#007575"
                            // color="#00fcfe"
                            color="#00bfbf"
                            noiseIntensity={1}
                            rotation={1.63}
                        />
                    </div>
                    {/* <div className="flex flex-col justify-between max-w-7xl mx-auto p-10"> */}
                    <div className="max-w-7xl gap-6 mx-auto pt-12 sm:pt-16 z-10">



                        <div className="section2 flex flex-col justify-between gap-3 items-start">
                            <h1 className='text-4xl md:text-6xl leading-[0.8] font-semibold'>Let&apos;s Connect</h1>
                            {/* <h1 className='text-[6vw] leading-[0.8]'>Get in Touch – Let’s Connect</h1> */}
                        </div>

                        <div className="section1 mt-10">
                            <div className="nav flex flex-col md:flex-row gap-x-12 gap-y-8">
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="flex flex-1 flex-col gap-y-3"
                                >
                                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-6">
                                        <label
                                            className='space-y-3 md:flex-1'
                                        >
                                            <span className='field-label'>Hey There, I am</span>
                                            <input
                                                type='text'
                                                name='name'
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                className='field-input'
                                                placeholder='John Doe'
                                            />
                                        </label>
                                        <label
                                            className='space-y-3 md:flex-1'
                                        >
                                            <span className='field-label'>And my Email Address is</span>
                                            <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                className='field-input'
                                                placeholder='john@doe.com'
                                            />
                                        </label>
                                    </div>
                                    <label
                                        className='space-y-3 mb-3'
                                    >
                                        <span className='field-label'>I want to say</span>
                                        <textarea
                                            name='message'
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={3}
                                            className='field-input'
                                            placeholder="Hi, I'm interested in....."
                                        />
                                    </label>

                                    <button className='field-btn' type='submit' disabled={loading}>
                                        {loading ? "Sending..." : "Send Message"}
                                        {/* <img src="/assets/arrow-up.png" alt="Arrow-up" className='field-btn_arrow' /> */}
                                        <Image
                                            src="/assets/arrow-up.png" alt="Arrow-up"
                                            width={16}
                                            height={16}

                                            className='field-btn_arrow'
                                        />
                                    </button>
                                </form>
                                <div className='hidden  flex-col flex-1 justify-start mt-10 gap-5'>

                                    {/* <h1 className='text-7xl'>#SOCIALS</h1> */}
                                    {/* <Link href="https://github.com/DevanshSK" target='_blank' className='text-7xl'>GITHUB</Link> */}
                                    {/* <Link href="https://github.com/DevanshSK" target='_blank' className='text-7xl'>INSTAGRAM</Link> */}
                                    {/* <Link href="https://www.linkedin.com/in/devanshsk/" target='_blank' className='text-7xl'>LINKEDIN</Link> */}
                                    {/* <h3 className='mb-2 uppercase text-[#ffffff80]'>Right</h3> */}
                                    {/* <p className="text-xs text-center sm:text-left sm:text-base">© 2024 Devansh Singh Kushwah. All rights reserved.</p> */}

                                </div>
                            </div>
                        </div>

                        <footer className="mt-10 sm:mt-16 pt-6 pb-6 border-t border-white gap-3 sm:gap-5 flex justify-center md:justify-between items-center flex-wrap">
                            <p className="text-xs text-center sm:text-left sm:text-base">© 2024 Devansh Singh Kushwah. All rights reserved.</p>

                            <div className="flex gap-3">
                                <Link className='text-xs sm:text-base' target="_blank" href="https://github.com/DevanshSK">GitHub</Link>
                                <Link className='text-xs sm:text-base' target="_blank" href="https://www.linkedin.com/in/devanshsk/">LinkedIn</Link>
                                <Link className='text-xs sm:text-base' target="_blank" href="https://x.com/devansh_sk">Twitter</Link>
                            </div>
                        </footer>

                    </div>
                </section>


                {/* </div> */}
            </div>
        </div>
    );
}

export default Contact