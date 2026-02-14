# Specification

## Summary
**Goal:** Update the Hero section to use one of the newly uploaded images as the top-of-page background/cover image.

**Planned changes:**
- Add `683CEC41-3F5D-48A7-A96D-FC2FE9C2332B-2.png` and `683CEC41-3F5D-48A7-A96D-FC2FE9C2332B-3.png` to the frontend’s static uploaded assets location (same convention as existing hero images under `/assets/uploaded/...`).
- Update the Hero section to render one of the new images on initial load instead of the previously referenced `/assets/uploaded/683CEC41-3F5D-48A7-A96D-FC2FE9C2332B.png`.
- Ensure the Hero remains full-screen and retains the existing gradient overlay, title text, scroll indicator, and background audio player control behavior.

**User-visible outcome:** When the page loads, the Hero section shows one of the newly uploaded images as its background/cover image, with the rest of the Hero content and controls unchanged.
