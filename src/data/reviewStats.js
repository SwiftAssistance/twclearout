/**
 * Single source of truth for our public review numbers.
 * These must match the live counts on Google Business Profile and Trustpilot —
 * schema.org aggregateRating that overstates real review volume is a manual
 * action risk, so update here (and in index.html / public/llms*.txt) whenever
 * the platform totals change.
 */

export const GOOGLE_REVIEWS = 33;
export const GOOGLE_RATING = "5.0";

export const TRUSTPILOT_REVIEWS = 12;
export const TRUSTPILOT_RATING = "4.4";

export const TOTAL_REVIEWS = GOOGLE_REVIEWS + TRUSTPILOT_REVIEWS; // 45

// Volume-weighted average across both platforms, rounded to one decimal.
export const AVERAGE_RATING = (
  Math.round(
    ((GOOGLE_REVIEWS * parseFloat(GOOGLE_RATING) +
      TRUSTPILOT_REVIEWS * parseFloat(TRUSTPILOT_RATING)) /
      TOTAL_REVIEWS) * 10
  ) / 10
).toFixed(1); // "4.8"
