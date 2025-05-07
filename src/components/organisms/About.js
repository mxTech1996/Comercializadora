import { dataSite } from '@/data';

const About = () => {
  return (
    <section id='about' className='bg-black text-white px-6 md:px-20 py-24'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-24'>
        <div>
          <p className='text-[#00FFB2] font-medium mb-2'>Our Vision</p>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            We are a dynamic consulting firm
            <br />
            dedicated to driving positive change.
          </h2>
          <p className='text-white/80 max-w-xl mb-6'>
            At our firm, we don’t merely provide services—we become an extension
            of our clients, working hand-in-hand to drive their vision forward.
            Our commitment goes beyond just analysis; it’s about empowering
            organizations to achieve strategic clarity and operational
            excellence.
          </p>
          {/* <button className='bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition'>
            Our History
          </button> */}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center md:text-left'>
          <div>
            <h3 className='text-3xl font-bold'>75+</h3>
            <p className='text-white/70 text-sm mt-1'>
              Strategic initiatives delivered
            </p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>90%</h3>
            <p className='text-white/70 text-sm mt-1'>
              Client satisfaction rate
            </p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>100+</h3>
            <p className='text-white/70 text-sm mt-1'>
              Clients served globally
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12'>
        <div className='rounded-xl overflow-hidden shadow-lg'>
          <img src={dataSite.image_hero} className='w-full object-cover' />
        </div>

        <div>
          <p className='text-[#00FFB2] font-medium mb-2'>Why choose us</p>
          <blockquote className='text-2xl font-medium leading-relaxed'>
            &quot;We believe in the power of{' '}
            <span className='text-white'>collaboration</span>,{' '}
            <span className='text-white'>transparency</span>, and{' '}
            <span className='text-white'>strategic thinking</span>. Our mission
            is to help organizations navigate complex challenges and unlock
            growth by delivering actionable insights and measurable
            results.&quot;
          </blockquote>

          <div className='mt-6 flex items-center space-x-4'>
            {/* <img
              src='https://cms-webserver-statics.s3.amazonaws.com/media/team/ceo_avatar.png'
              alt='Founder'
              className='w-12 h-12 rounded-full object-cover'
            /> */}
            <div>
              <p className='font-semibold'>Alex Johnson</p>
              <p className='text-sm text-white/70'>
                Founder & Managing Partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
