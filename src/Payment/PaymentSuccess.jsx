import React, { useEffect } from 'react'
import { useSearchParams, Link } from 'react-router'
import { useAxiosSecure } from '../Hook/useAxiosSecure';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure()
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id')
    console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment_success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data)
            })
        }
    },[sessionId,axiosSecure])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white p-5">

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg border"
      >

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle className="text-green-600" size={80} />
        </motion.div>

        <h1 className="text-4xl font-bold text-green-600 mb-3">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment has been completed successfully.  
          Thank you for your purchase!
        </p>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Link 
            to="/dashboard/myloan"
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg inline-block hover:bg-green-700 transition"
          >
            Go to Dashboard
          </Link>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default PaymentSuccess
