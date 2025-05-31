import Image from 'next/image'
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import TitleHeader from '../common/title-header';

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
                    to_email: "work.devanshsk@gmail.com",
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


        // service_y29kv6b

    }

    return (
        <section className='c-space my-20' id="contact">
            <TitleHeader
                title="Get in Touch – Let’s Connect"
                sub="💬 Have questions or ideas? Let’s talk! 🚀"
            />

            <div className="bg-background border mt-10 flex items-center justify-center aspect-video p-10">
                CONTACT FORM
            </div>
        </section>
    )


    return (
        <section className='c-space my-20' id="contact">
            <TitleHeader
                title="Get in Touch – Let’s Connect"
                sub="💬 Have questions or ideas? Let’s talk! 🚀"
            />

            <div className="relative min-h-screen flex items-center flex-col mt-10">
                <img
                    src="/assets/terminal.png"
                    alt="Terminal bg"
                    className='absolute inset-0 min-h-screen mb-10'
                />
                {/* <Image
                src="/assets/terminal.png"
                alt='Terminal Background'
                width={0}
                height={0}
                style={{
                    minHeight: "100vh",
                }}
                className='absolute inset-0 min-h-screen'

            /> */}
                <div className="contact-container">
                    <h3 className='head-text mt-8 sm:mt-10 md:mt-14'>Lets Talk</h3>
                    <p>
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-3 sm:mt-6 lg:mt-9 xl:mt-12 flex flex-col space-y-7'
                    >
                        <label
                            className='space-y-3'
                        >
                            <span className='field-label'>Full Name</span>
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
                            className='space-y-3'
                        >
                            <span className='field-label'>Full Name</span>
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
                        <label
                            className='space-y-3'
                        >
                            <span className='field-label'>Your Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
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
                </div>
            </div>
        </section>
    )
}

export default Contact