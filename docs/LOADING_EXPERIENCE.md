# First-Load Experience

The portfolio now uses a lightweight first-load overlay to mask initial resource loading on hard refresh or direct entry.

Implementation notes:

- `LoadingProvider` manages visibility, progress, and readiness state.
- `LoadingScreen` renders the premium launch experience.
- `LoadingLogo`, `LoadingProgress`, and `LoadingMessage` are reusable presentation pieces.
- The Home route calls `markContentReady()` once the initial route has mounted.
- The overlay waits for a minimum display duration, document fonts, a critical image preload, and window load before dismissing.
- Internal route navigation never shows the loader again during the same session.
