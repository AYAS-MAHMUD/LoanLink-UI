import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, FileText, CheckCircle, DollarSign } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Choose Loan',
    description: 'Browse our range of flexible loan options and select the one that fits your needs.',
    icon: MousePointerClick,
  },
  {
    id: 2,
    title: 'Quick Apply',
    description: 'Fill out our simple online application form. It takes less than 5 minutes.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Get Approved',
    description: 'Receive instant approval decision and get funds directly to your account.',
    icon: CheckCircle,
  },
];

export const HowItWork= () => {
  return (
    <section className="py-20 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting a loan shouldn't be complicated. We've streamlined the process into three simple steps.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 dark:bg-gray-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white dark:bg-dark-card border-4 border-gray-50 dark:border-gray-800 flex items-center justify-center mb-6 group-hover:border-primary/20 transition-colors duration-300 relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-4 border-white dark:border-dark-card">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
