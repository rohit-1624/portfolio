import React from "react";

const menus = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "about",
        label: "About"
    },
    {
        id: "projects",
        label: "Projects"
    },
    {
        id: "contact",
        label: "Contact"
    }
];

const Footer = () => {
    return (
        <footer className="bg-[#151C27] py-16">
            <div className="w-10/12 mx-auto grid md:grid-cols-3 md:gap-0 gap-16">
                <div className="pr-8">
                    <h1 className="text-white font-semibold text-2xl mb-3">Portfolio</h1>
                    <p className="text-gray-100 mb-6 text-left">
                        My portfolio showcases my skills as a frontend developer, featuring projects built with React.js, Tailwind CSS, etc. It includes my bio, skills, projects, and contact details for potential opportunities.
                    </p>
                </div>

                <div>
                    <h1 className="text-white font-semibold text-2xl mb-3">Social Links</h1>
                    <ul className="space-y-2 text-slate-50">
                        <li><a href="https://www.linkedin.com/in/rohit-sharma-870ab2261/" className="hover:underline hover:text-blue-600">LinkedIn</a></li>
                        <li><a href="https://github.com/rohit-1624" className="hover:underline hover:text-blue-600">Github</a></li>
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=rohitsharmasharma4689@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer" className="hover:underline hover:text-blue-600">Email</a></li>
                        <li><a href="#" className="hover:underline hover:text-blue-600">Portfolio</a></li>
                    </ul>
                </div>


                <div>
                    <h1 className="text-white font-semibold text-2xl mb-3">Contact-us</h1>
                    <form className="space-y-4">
                        <input
                            required
                            name="fullname"
                            className="bg-white w-full rounded p-3"
                            placeholder="Your name"
                        />

                        <input
                            required
                            type="email"
                            name="email"
                            className="bg-white w-full rounded p-3"
                            placeholder="Enter email id"
                        />

                        <textarea
                            required
                            name="message"
                            className="bg-white w-full rounded p-3"
                            placeholder="Message"
                            rows={3}
                        />

                        <button className="bg-black text-white py-3 px-6 rounded hover:bg-green-600 bg-linear-to-r/srgb from-indigo-500 to-teal-400">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
