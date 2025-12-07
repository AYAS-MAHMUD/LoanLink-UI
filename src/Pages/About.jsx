import React from 'react'
import { motion } from 'framer-motion';
import { Users, Target, Heart, Shield, Award, TrendingUp } from 'lucide-react';
const stats = [
  { label: 'Loans Disbursed', value: '$50M+', icon: TrendingUp },
  { label: 'Happy Customers', value: '10k+', icon: Users },
  { label: 'Success Rate', value: '98%', icon: Award },
  { label: 'Countries', value: '5', icon: Target },
];
const values = [
  {
    title: 'Integrity First',
    description: 'We believe in transparent, honest financial services without hidden fees or fine print.',
    icon: Shield,
  },
  {
    title: 'Customer Obsession',
    description: 'Your financial well-being is our top priority. We build products that solve real problems.',
    icon: Heart,
  },
  {
    title: 'Innovation',
    description: 'Leveraging technology to make lending faster, fairer, and more accessible for everyone.',
    icon: TrendingUp,
  },
];

const team = [
  {
    name: 'David Kim',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    bio: 'Former fintech executive with a passion for financial inclusion.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Product visionary focused on creating seamless user experiences.',
  },
  {
    name: 'Michael Ross',
    role: 'Chief Risk Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in risk management and sustainable lending practices.',
  },
];
const About = () => {
  return (
    <div className='my-10'>
        {/* Hero Section */}
        <section className="relative bg-cyan-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Empowering Financial Growth
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              We're on a mission to make credit accessible, transparent, and fair for everyone, everywhere.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 my-10 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='shadow-xl rounded-2xl'
                >
                  <div className="text-center py-8 border-t-4 border-cyan-800">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <stat.icon size={24} />
                    </div>
                    <div className="text-3xl font-bold  mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
                {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold  mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  At LoanLink, we believe that access to capital shouldn't be a privilege reserved for a few. Our mission is to democratize finance by providing fast, fair, and flexible microloans to individuals and small businesses who need them most.
                </p>
                <h2 className="text-3xl font-bold  mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We envision a world where financial barriers don't stop ambition. By leveraging technology and data, we're building a financial ecosystem that says "yes" to potential and fuels economic growth across communities.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20  dark:bg-dark-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold  mb-4">Our Core Values</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                These principles guide every decision we make and every product we build.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-cyan-700 mb-6">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold  mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold  mb-4">Meet the Team</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The passionate individuals working behind the scenes to make financial freedom a reality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="overflow-hidden p-0 group">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold  mb-1">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default About