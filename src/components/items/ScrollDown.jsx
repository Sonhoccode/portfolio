// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ScrollDown = () => {
  const { t } = useTranslation("Profile");
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      key={t("next")}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
      onClick={handleScroll}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }} // Tăng biên độ nhảy lên một chút cho 2 mũi tên
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center group opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-black mb-1 transition-colors">
          {t("next")}
        </span>

        {/* SVG với 2 mũi tên xếp chồng */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5} // Nét vẽ đậm hơn một chút cho ngầu
          stroke="currentColor"
          className="w-8 h-10 text-black transition-colors"
        >
          {/* Mũi tên trên */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5"
          />
          {/* Mũi tên dưới - dịch chuyển tọa độ y xuống 6 đơn vị */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12.75l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollDown;
