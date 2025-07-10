import React, { useEffect, useRef } from 'react';

export function withLogger<P>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithLogger: React.FC<P> = (props) => {
    const firstRender = useRef(true);

    useEffect(() => {
      console.log(`[withLogger] ${WrappedComponent.name} mounted`);

      return () => {
        console.log(`[withLogger] ${WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        console.log(`[withLogger] ${WrappedComponent.name} updated`);
      }
    });

    return <WrappedComponent {...props} />;
  };

  ComponentWithLogger.displayName =
    `WithLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithLogger;
}
