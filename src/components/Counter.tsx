import { countState } from '~/stores/count';

export const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div className="card">
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <p className="text-red-500">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
