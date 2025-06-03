import { motion } from 'framer-motion';

function Contact() {
    return (
        <>
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'blur',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}
        >Hello</motion.div>

        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
        >Click Me</motion.button>
        </>
    );
}

export default Contact; 