export function canUseDOM() {
   return !!(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
   );
}

export function classNames(...args: string[]) {
   return args.filter(Boolean).join(' ');
}
