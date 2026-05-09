import React from 'react';
import { motion } from 'framer-motion';
import './Testimonial.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechSolutions',
    review: 'Absolutely phenomenal work! The team delivered beyond our expectations with incredible attention to detail.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    review: 'Working with them was a game-changer for our project. Their expertise and professionalism are unmatched.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandVision',
    review: 'The quality of work and communication was exceptional. Will definitely work with them again!',
    rating: 4
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'CTO, DigitalFuture',
    review: 'Transformed our digital presence completely. Highly recommend their services to anyone.',
    rating: 5
  },
  {
    id: 5,
    name: 'Jessica Kim',
    role: 'Founder, StartupHub',
    review: 'Incredibly responsive and creative team. They understood our vision perfectly.',
    rating: 5
  },
  {
    id: 6,
    name: 'Robert Taylor',
    role: 'Director, GlobalTech',
    review: 'Professional, timely, and outstanding results. Exceeded all our KPIs.',
    rating: 4
  },
  {
    id: 7,
    name: 'Amanda Smith',
    role: 'Head of Design, CreativeMinds',
    review: 'Their design solutions were innovative and perfectly aligned with our brand identity.',
    rating: 5
  },
  {
    id: 8,
    name: 'Daniel Brown',
    role: 'Product Owner, AppVenture',
    review: 'Delivered complex features ahead of schedule with flawless execution.',
    rating: 5
  },
  {
    id: 9,
    name: 'Olivia Martinez',
    role: 'CMO, MarketLeaders',
    review: 'Our engagement metrics improved by 300% after their campaign. Simply amazing!',
    rating: 5
  },
  {
    id: 10,
    name: 'James Wilson',
    role: 'VP Engineering, CodeCraft',
    review: 'Technical excellence combined with great communication. A rare find indeed.',
    rating: 5
  },
//   {
//     id: 11,
//     name: 'Sophia Lee',
//     role: 'Director, UXResearch',
//     review: 'Their user-centric approach resulted in our highest-rated product ever.',
//     rating: 5
//   },
//   {
//     id: 12,
//     name: 'William Johnson',
//     role: 'Founder, DataInsights',
//     review: 'Turned our complex data into beautiful visualizations that tell compelling stories.',
//     rating: 4
//   },
//   {
//     id: 13,
//     name: 'Emma Davis',
//     role: 'Head of Product, FinTechX',
//     review: 'Implemented security features that passed our most rigorous audits with flying colors.',
//     rating: 5
//   },
//   {
//     id: 14,
//     name: 'Christopher Martin',
//     role: 'CEO, CloudScale',
//     review: 'Scaled our infrastructure seamlessly during peak traffic. Flawless performance.',
//     rating: 5
//   },
//   {
//     id: 15,
//     name: 'Isabella Garcia',
//     role: 'Marketing Manager, GrowthHack',
//     review: 'Our conversion rates skyrocketed after their optimization work. Highly recommended!',
//     rating: 5
//   }
];

// Duplicate testimonials for infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Client <span>Testimonials</span></h2>
        <p className="section-subtitle">What people say about working with me</p>
      </motion.div>

      <div className="testimonial-columns">
        {/* Left Column - Scrolls Down */}
        <motion.div 
          className="testimonial-column left-column"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="testimonial-track"
            animate={{
              y: ['0%', '-50%'],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {duplicatedTestimonials.slice(0, 10).map((testimonial, index) => (
              <TestimonialCard key={`left-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </motion.div>

        {/* Middle Column - Scrolls Up */}
        <motion.div 
          className="testimonial-column middle-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="testimonial-track"
            animate={{
              y: ['-50%', '0%'],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {duplicatedTestimonials.slice(5, 15).map((testimonial, index) => (
              <TestimonialCard key={`middle-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Scrolls Down */}
        <motion.div 
          className="testimonial-column right-column"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="testimonial-track"
            animate={{
              y: ['0%', '-50%'],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {duplicatedTestimonials.slice(5, 15).map((testimonial, index) => (
              <TestimonialCard key={`right-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="testimonial-card"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <div className="testimonial-rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
      <p className="testimonial-review">"{testimonial.review}"</p>
      <div className="testimonial-author">
        <h4 className="author-name">{testimonial.name}</h4>
        <p className="author-role">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

export default Testimonial;