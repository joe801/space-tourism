import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const Animate = (
  props: Omit<
    ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>,
    "$$typeof"
  > &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
      duration?: number;
    },
) => {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.8 }}
      transition={{ ease: "linear", duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Animate;
