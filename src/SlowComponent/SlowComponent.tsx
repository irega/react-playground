import { useMemo, useRef, useState } from "react";

const SlowComponent = () => {
  const [num, setNum] = useState(1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const slowFunction = (num: number) => {
    let result = "";
    for (let i = 0; i < 10000; i++) {
      result += num;
    }
    return result;
  };

  const memoizedValue = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  return (
    <>
      <input ref={inputRef} type="text" />
      <button
        onClick={() =>
          setNum(inputRef.current?.value ? +inputRef.current?.value : 1)
        }
      >
        Execute
      </button>
      <h1>Memoized: {memoizedValue}</h1>
    </>
  );
};
export { SlowComponent };
