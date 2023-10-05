import React from 'react';

export const General = () => {
    return (
        <div className="flex-1 bg-white max-w-6xl rounded-lg h-auto md:h-full overflow-y-auto p-4">
            {Array(100)
                .fill(3)
                .map((x) => (
                    <p>Yess</p>
                ))}
        </div>
    );
};
