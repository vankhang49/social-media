import "./introduction.scss";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "@/components/shapes/Shapes";
import { transition } from "@/components/shapes/settings";
import useMeasure from "react-use-measure";
import {useRouter} from "next/router";

export default function Index() {
    const [ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const router = useRouter();

    const resetMousePosition = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleMoveToHomePage = () => {
        router.push("/").catch(console.error);
    }

    return (
        <div className="introduction">
            <div className="slogan">
                <h1>Join the conversation, unleash your creativity, and share your story</h1>
            </div>
            <MotionConfig transition={transition}>
                <motion.button
                    ref={ref}
                    initial={false}
                    animate={isHover ? "hover" : "rest"}
                    whileTap="press"
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.5 },
                        press: { scale: 1.4 }
                    }}
                    onHoverStart={() => {
                        resetMousePosition();
                        setIsHover(true);
                    }}
                    onHoverEnd={() => {
                        resetMousePosition();
                        setIsHover(false);
                    }}
                    onTapStart={() => setIsPress(true)}
                    onTap={() => setIsPress(false)}
                    onTapCancel={() => setIsPress(false)}
                    onPointerMove={(e) => {
                        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                    }}
                >
                    <motion.div
                        className="shapes"
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 }
                        }}
                    >
                        <div className="pink blush" />
                        <div className="blue blush" />
                        <div className="container">
                            <Suspense fallback={null}>
                                <Shapes
                                    isHover={isHover}
                                    isPress={isPress}
                                    mouseX={mouseX}
                                    mouseY={mouseY}
                                />
                            </Suspense>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                        className="label"
                        onClick={handleMoveToHomePage}
                    >
                        Let's get started
                    </motion.div>
                </motion.button>
            </MotionConfig>
        </div>
    );
}