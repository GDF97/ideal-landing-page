import { motion } from "framer-motion";

function PageLoader() {
  const columns = [0, 1, 2];

  return (
    <div className="fixed inset-0 z-9999 flex pointer-events-none">
      {columns.map((column) => (
        <motion.div
          key={column}
          className="h-full flex-1 bg-ideal-yellow"
          initial={{ y: 0 }}
          animate={{ y: "100%" }}
          transition={{
            duration: 1.5,
            delay: column * 0.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </div>
  );
}

export default PageLoader;
