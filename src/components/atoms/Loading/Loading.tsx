import { useLayoutEffect } from "react";

export default function Loading() {
  useLayoutEffect(() => {
    const cls = ["fixed", "inset-0", "overflow-hidden"];
    document.body.classList.add(...cls);

    return () => {
      document.body.classList.remove(...cls);
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-black">
      <h1 className="select-none text-center font-jaapokki text-5xl font-medium uppercase">
        Loading...
      </h1>
    </div>
  );
}
