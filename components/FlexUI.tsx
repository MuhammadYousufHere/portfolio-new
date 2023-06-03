import type { ReactNode } from 'react';

type Props = {
   children: ReactNode;
};
function Row({ children }: Props) {
   return (
      <div className="row block lg:flex items-center justify-content my-3">
         {children}
      </div>
   );
}
function Col({ children }: Props) {
   return <div className="flex-1 p-2">{children}</div>;
}

export { Row, Col };
