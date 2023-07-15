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
const lerp = (start: number, end: number, amt: number) =>
   (1 - amt) * start + amt * end;

export default function debounce<T extends (...args: T[]) => void>(
   fn: T,
   ms = 300
) {
   let timeoutId: ReturnType<typeof setTimeout>;
   return function debouncedFn(...args: Parameters<T>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(args), ms);
   };
}
export { cubicEaseIn, staggerTransition, sliceItems, lerp };
