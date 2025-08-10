import { motion } from 'framer-motion';
import { useState } from 'react';
import CommonButton from '../../globalComponents/CommonButton';
import CommonHeding from '../../globalComponents/CommonHeading';
import SerVicesCard from '../../globalComponents/ServiceCard';
import { services } from './ServiceApi/ServiceApi';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const [card, setCard] = useState(6);

  const handleClick = () => setCard(p => p + 6);

  window.scrollTo(0, 0);

  return (
    <div className="container mx-auto px-4">
      <div className="my-20 md:my-[150px] lg:my-[150px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CommonHeding
            Services="Services"
            p="I build fast, dynamic, and scalable frontend applications using React.js with reusable components and clean architecture."
          />
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 justify-center  sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.slice(0, card).map(item => (
            <motion.div
              key={item?.id}
              className="flex justify-center"
              variants={itemVariants}
            >
              <SerVicesCard
                id={item?.id}
                title={item?.title}
                icon={item?.icon}
                description={item?.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {card < services.length && (
          <div className="mt-10 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CommonButton handleClick={handleClick}>Load More</CommonButton>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
