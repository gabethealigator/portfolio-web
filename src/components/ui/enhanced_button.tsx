import React, { useRef, useEffect, useState } from "react";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import { Button, ButtonProps } from "@/components/ui/button";
import { motion } from "framer-motion";

// Create a shared store to manage state for mouse position and background position
const useStore = createStore({
    mousePos: { x: 0, y: 0 }, // Current mouse position
    backgroundPos: { x: 0, y: 0 }, // Background's current position
});

/**
 * Override to add a hover-fill effect to a component.
 * The effect tracks the mouse position and animates a background shape
 * (e.g., a circular fill) to follow the mouse and appear on hover.
 *
 * @param Component The component to enhance with the hover-fill effect.
 * @returns The enhanced component with hover-fill behavior.
 */
export function withFillFollowCursor(Component) {
    return (props: ButtonProps) => {
        const ref = useRef<HTMLDivElement>(null);
        const [store, setStore] = useStore();
        const [isHover, setIsHover] = useState(false);

        const handleMouseOver = (event: React.MouseEvent) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (!isHover) {
                setIsHover(true);
            }
            setStore({
                mousePos: { x, y }, // Update mouse position relative to the element
            });
        };

        const handleMouseLeave = () => {
            setIsHover(false);
        };

        useEffect(() => {
            const { x, y } = store.mousePos;
            setStore({
                backgroundPos: { x, y }, // Update background position based on hover state
            });
        }, [isHover]);

        return (
            <div
                ref={ref}
                style={{ position: "relative", overflow: "hidden" }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <Component
                    {...props}
                    style={{
                        position: "relative",
                        zIndex: 1, // Ensure the button is above the background
                    }}
                />
                <motion.div
                    style={{
                        position: "absolute",
                        minWidth: "225%",
                        aspectRatio: 1,
                        pointerEvents: "none",
                        borderRadius: "50%",
                        visibility: isHover ? "visible" : "hidden",
                        transformOrigin: "center center",
                        top: store.backgroundPos.y,
                        left: store.backgroundPos.x,
                        backgroundColor: "white", // Set the background color
                        mixBlendMode: "difference", // Apply the difference blend mode
                    }}
                    animate={{
                        scale: isHover ? 1 : 0,
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                />
            </div>
        );
    };
}

// Create the EnhancedButton component
const EnhancedButton = withFillFollowCursor(Button);

export default EnhancedButton; 
