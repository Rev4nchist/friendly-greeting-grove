
import { motion } from "framer-motion";
import { useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    toast("Welcome to our site", {
      description: "We're glad you're here",
      position: "bottom-center",
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-gray-600 bg-gray-100 rounded-full"
        >
          Welcome
        </motion.span>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4"
        >
          Hello, World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-lg text-gray-600 max-w-md mx-auto"
        >
          A simple, elegant landing page crafted with attention to detail and modern design principles.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Index;
