function cubicEaseIn(value: number) {
   return value ** 3;
}

const staggerTransition = (delayAmt = 0, staggerAmt = 0.3) => ({
   delayChildren: delayAmt,
   staggerChildren: staggerAmt,
});
const sliceItems = (array: string[], maxItems: number) => {
   if (!array) return { displayedItems: [], remainingItems: 0 };

   const displayedItems = array.slice(0, maxItems);
   const remainingItems = array.length - displayedItems.length;
   return {
      displayedItems,
      remainingItems,
   };
};
export { cubicEaseIn, staggerTransition, sliceItems };
