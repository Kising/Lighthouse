/** One complete breath has two phases. Each phase traverses all five dots. */
export function breathState(elapsedMs, breathsPerMinute) {
  const cycleMs = 60000 / breathsPerMinute;
  const progress = ((elapsedMs % cycleMs) + cycleMs) % cycleMs / cycleMs;
  const phase = progress < 0.5 ? '吸气' : '呼气';
  const phaseProgress = (progress * 2) % 1;
  return { phase, dot: Math.min(4, Math.floor(phaseProgress * 5)), cycleMs };
}
export function rescaleBreathElapsed(elapsedMs, oldRate, newRate) {
  return elapsedMs * oldRate / newRate;
}
