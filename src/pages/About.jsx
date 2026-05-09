import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaCode, FaServer, FaMobile, FaDatabase, FaPhone, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import nv from '../assets/profile.jpeg';
import file from '../assets/BabarCV.pdf';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 30,
            opacity: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                mass: 0.5
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 6,
                stiffness: 100,
                delay: 0.2
            }
        }
    };

    const skillVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        }),
        hover: {
            y: -10,
            scale: 1.05,
            boxShadow: "0 15px 30px rgba(110, 69, 226, 0.3)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const contactVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6
            }
        }
    };

    const skills = [
        { icon: <FaCode />, name: "Frontend", tech: "React, Next.js" },
        { icon: <FaServer />, name: "Backend", tech: "Django, Node.js" },
        { icon: <FaMobile />, name: "Mobile", tech: "React Native" },
        { icon: <FaDatabase />, name: "Database", tech: "MongoDB, SQL" }
    ];

    return (
        <section className="about-section" id="about" ref={ref}>
            <div className="section-header">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }
                        }
                    }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="section-divider"
                    initial={{ scaleX: 0 }}
                    animate={controls}
                    variants={{
                        visible: {
                            scaleX: 1,
                            transition: {
                                delay: 0.3,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }
                        }
                    }}
                />
            </div>

            <motion.div
                className="about-content"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.div
                    className="about-section__left"
                    variants={itemVariants}
                >
                    <motion.div
                        className="profile-image-container"
                        variants={imageVariants}
                    >
                        <img
                            src={nv}
                            alt="Asad Sajjad"
                            className="about-section__image"
                        />
                        <motion.div
                            className="image-glow"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0.2, 0.4, 0.2],
                                scale: [0.95, 1.05, 0.95]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    {/* <motion.div
                        className="about-section__socials"
                        variants={itemVariants}
                    >
                        {[
                            { icon: <FaGithub />, href: "https://github.com" },
                            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muhammad-asad4162/" },
                            { icon: <FaFacebook />, href: "https://facebook.com" },
                            { icon: <FaInstagram />, href: "https://instagram.com" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="about-section__social-link"
                                whileHover={{
                                    y: -5,
                                    scale: 1.1,
                                    boxShadow: "0 5px 15px rgba(110, 69, 226, 0.4)"
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div> */}

                    <motion.div
                        className=""
                        variants={contactVariants}
                    >
                        <motion.a
                            href={file}  // Make sure this path is correct
                            download="Asad.pdf"
                            className="download-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaDownload className="download-icon" />
                            <span>Download Resume</span>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-section__right"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="about-section__title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 100
                                }
                            }
                        }}
                    >
                        Babar Ali
                    </motion.h2>

                    <motion.h3
                        className="about-section__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.5,
                                    type: "spring",
                                    stiffness: 100
                                }
                            }
                        }}
                    >
                        <span className="highlight">Software Engineer</span> | <span className="highlight">Full Stack Developer</span>
                    </motion.h3>

                    <motion.p
                        className="about-section__text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.6,
                                    type: "spring",
                                    stiffness: 100
                                }
                            }
                        }}
                    >
                        I am a passionate software engineer with expertise in building scalable and user-friendly applications. Skilled in the MERN stack, Django, Django Rest Framework, React Native, React JS, Next JS, and MongoDB, SQLite3, I am experienced in both front-end and back-end development.
                    </motion.p>

                    <motion.p
                        className="about-section__text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.7,
                                    type: "spring",
                                    stiffness: 100
                                }
                            }
                        }}
                    >
                        My journey began with a hands-on internship focusing on React JS, React Native, NEXT JS, and WordPress. I am now contributing as a Full Stack Developer in a software engineering role, delivering high-quality solutions from concept to deployment.
                    </motion.p>

                    <motion.div
                        className="skills-container"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.8
                                }
                            }
                        }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skills-card"
                                custom={index}
                                variants={skillVariants}
                                whileHover="hover"
                            >
                                <motion.div
                                    className="skills-icon"
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h4 className="skills-name">{skill.name}</h4>
                                <p className="skills-tech">{skill.tech}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;