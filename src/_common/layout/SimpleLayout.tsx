import React, { ComponentProps, ReactNode } from 'react';

type SimpleLayoutProps = ComponentProps<'div'> & {
    children: ReactNode;
};
export const SimpleLayout = ({ children, ...props }: SimpleLayoutProps) => {
    return (
        <div className="h-full flex flex-col md:flex-row gap-2 md:gap-4 mt-16 md:mx-10 overflow-hidden">
            {/* <Submenu.Root></Submenu.Root>
          <div className="flex-1 bg-white max-w-6xl rounded-lg h-auto md:h-full overflow-y-auto p-4">
              {Array(100)
                  .fill(3)
                  .map((x) => (
                      <p>Yess</p>
                  ))}
          </div> */}
            {children}
        </div>
    );
};
