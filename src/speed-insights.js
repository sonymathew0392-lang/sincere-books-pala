// Initialize Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSpeedInsights({
      debug: false // Set to true for development debugging
    });
  });
} else {
  // DOM is already ready
  injectSpeedInsights({
    debug: false // Set to true for development debugging
  });
}
