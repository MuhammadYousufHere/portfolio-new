function cubicEaseIn(value: number) {
   return value ** 3;
}

const staggerTransition = (delayAmt = 0, staggerAmt = 0.3) => ({
   delayChildren: delayAmt,
   staggerChildren: staggerAmt,
});
export { cubicEaseIn, staggerTransition };
