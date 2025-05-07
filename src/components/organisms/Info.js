'use client';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Advantages of Hiring Management Consulting Services',
    description:
      'Expertise and Experience: Gain access to industry experts with deep knowledge and proven strategies to solve complex business challenges.\nObjective Perspective: Receive unbiased analysis and recommendations.',
  },
  {
    title: 'Values',
    description:
      'Integrity: We uphold the highest standards of honesty and ethics.\nExcellence: We deliver exceptional quality and value.\nCollaboration: We foster teamwork and open communication for lasting success.',
  },
  {
    title: 'Improve your productivity',
    description:
      'Streamline Processes.\nEnhance Employee Engagement.\nFoster a positive work environment through recognition, development opportunities, and open communication.',
  },
  {
    title: 'Clients',
    description:
      'Small and Medium Enterprises\nStartups\nCorporations\nNonprofit Organizations\nGovernment Agencies',
  },
  {
    title: 'Advisory Services Are Personalized',
    description:
      'Initial Assessment & Discovery: We begin with a consultation to understand your structure, challenges, and goals.\nCustomized Strategy: A tailored plan aligned with your vision and market.',
  },
];

export default function ConsultingBenefits() {
  return (
    <section className='bg-white text-black py-24 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-14 text-center'>
          Why Our Consulting Services Make the Difference
        </h2>

        <div className='grid md:grid-cols-2 gap-12'>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200'
            >
              <h3 className='text-2xl font-semibold mb-4'>{item.title}</h3>
              {item.description.split('\n').map((line, i) => (
                <p key={i} className='text-gray-800 mb-2 leading-relaxed'>
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
