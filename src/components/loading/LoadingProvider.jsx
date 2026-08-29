import { useEffect, useMemo, useRef, useState } from "react";
import { LoadingContext } from "./LoadingContext";
import heroPortrait from "../../img/vishal.jpg";

const MIN_VISIBLE_MS = 700;
const EXIT_MS = 420;
const MESSAGE_INTERVAL_MS = 1050;
const SAFETY_TIMEOUT_MS = 1800;

const LOADING_MESSAGES = [
  "Building experiences...",
  "Loading engineering portfolio...",
  "Initializing interface...",
  "Preparing case studies...",
  "Optimizing performance...",
  "Ready in a moment...",
];

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

function LoadingProvider({ children }) {
  const [progress, setProgress] = useState(8);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const [isFontsReady, setIsFontsReady] = useState(false);
  const [isWindowReady, setIsWindowReady] = useState(false);
  const [isImageReady, setIsImageReady] = useState(false);

  const startedAtRef = useRef(0);
  const minTimerRef = useRef(null);
  const exitTimerRef = useRef(null);
  const messageTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);
  const completedRef = useRef(false);

  const currentMessage = LOADING_MESSAGES[messageIndex];

  const completeLoading = () => {
    if (completedRef.current) return;

    completedRef.current = true;
    setIsContentReady(true);
    setIsFontsReady(true);
    setIsWindowReady(true);
    setIsImageReady(true);
    setProgress(100);
    setIsExiting(true);

    exitTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, EXIT_MS);
  };

  useEffect(() => {
    startedAtRef.current = performance.now();

    const markWindowReady = () => {
      setIsWindowReady(true);
      setProgress((value) => Math.max(value, 72));
    };

    const onWindowLoad = () => markWindowReady();

    if (document.readyState === "complete") {
      markWindowReady();
    } else {
      window.addEventListener("load", onWindowLoad, { once: true });
    }

    let fontsCancelled = false;
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!fontsCancelled) {
          setIsFontsReady(true);
          setProgress((value) => Math.max(value, 48));
        }
      });
    } else {
      setIsFontsReady(true);
    }

    let imageCancelled = false;
    preloadImage(heroPortrait).then(() => {
      if (!imageCancelled) {
        setIsImageReady(true);
        setProgress((value) => Math.max(value, 60));
      }
    });

    minTimerRef.current = window.setTimeout(() => {
      setProgress((value) => Math.max(value, 80));
    }, MIN_VISIBLE_MS);

    messageTimerRef.current = window.setInterval(() => {
      setMessageIndex((value) => (value + 1) % LOADING_MESSAGES.length);
    }, MESSAGE_INTERVAL_MS);

    safetyTimerRef.current = window.setTimeout(() => {
      completeLoading();
    }, SAFETY_TIMEOUT_MS);

    return () => {
      window.removeEventListener("load", onWindowLoad);
      fontsCancelled = true;
      imageCancelled = true;

      if (minTimerRef.current) window.clearTimeout(minTimerRef.current);
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
      if (messageTimerRef.current) window.clearInterval(messageTimerRef.current);
      if (safetyTimerRef.current) window.clearTimeout(safetyTimerRef.current);
    };
  }, []);

  const markContentReady = () => {
    if (!completedRef.current) {
      setIsContentReady(true);
      setProgress((value) => Math.max(value, 90));
    }
  };

  useEffect(() => {
    if (!isVisible || completedRef.current) return;

    const minimumElapsed = performance.now() - startedAtRef.current >= MIN_VISIBLE_MS;
    const assetsReady = isContentReady && isFontsReady && isWindowReady && isImageReady;

    if (minimumElapsed && assetsReady) {
      completeLoading();
    }
  }, [isContentReady, isFontsReady, isWindowReady, isImageReady, isVisible]);

  const value = useMemo(
    () => ({
      isLoading: isVisible,
      progress,
      message: currentMessage,
      markContentReady,
      isExiting,
    }),
    [currentMessage, isExiting, isVisible, progress],
  );

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}

export default LoadingProvider;
