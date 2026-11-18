// canvas-confetti ships no types. This covers the options badge-notification uses.
// (Installing @types/canvas-confetti would replace this file.)
declare module "canvas-confetti" {
  interface ConfettiOptions {
    particleCount?: number
    angle?: number
    spread?: number
    startVelocity?: number
    origin?: { x?: number; y?: number }
    colors?: string[]
  }

  export default function confetti(options?: ConfettiOptions): Promise<null> | null
}
