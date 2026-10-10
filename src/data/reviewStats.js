/**
 * Single source of truth for our public review numbers.
 * These must match the live counts on Google Business Profile —
 * schema.org aggregateRating that overstates real review volume is a manual
 * action risk, so update here (and in index.html / public/llms*.txt) whenever
 * the platform totals change.
 */

export const GOOGLE_REVIEWS = 45;
export const GOOGLE_RATING = "5.0";

export const TOTAL_REVIEWS = GOOGLE_REVIEWS; // 45

export const AVERAGE_RATING = GOOGLE_RATING; // "5.0"
