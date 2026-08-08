"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  direction?: RevealDirection;
  distancePx?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export default function Reveal({
  children,
  as: Component = "div",
  className = "",
  delayMs = 0,
  durationMs = 700,
  direction = "up",
  distancePx = 24,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
}: RevealProps): ReactNode {
  const elementRef = useRef<HTMLElement | null>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleChange = (
      event: MediaQueryListEvent | MediaQueryList
    ) => {
      const reduced = event.matches;

      setPrefersReducedMotion(reduced);

      if (reduced) {
        setIsVisible(true);
      }
    };

    handleChange(media);

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [
    once,
    prefersReducedMotion,
    rootMargin,
    threshold,
  ]);

  const style: CSSProperties = prefersReducedMotion
    ? {
        opacity: 1,
        transform: "none",
      }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0,0,0)"
          : getHiddenTransform(direction, distancePx),
        transition: `opacity ${durationMs}ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms,
                     transform ${durationMs}ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
        willChange: "opacity, transform",
      };

  return (
    <Component
      ref={elementRef}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

function getHiddenTransform(
  direction: RevealDirection,
  distancePx: number
): string {
  switch (direction) {
    case "up":
      return `translate3d(0, ${distancePx}px, 0)`;

    case "down":
      return `translate3d(0, -${distancePx}px, 0)`;

    case "left":
      return `translate3d(${distancePx}px, 0, 0)`;

    case "right":
      return `translate3d(-${distancePx}px, 0, 0)`;

    default:
      return "translate3d(0,0,0)";
  }
}