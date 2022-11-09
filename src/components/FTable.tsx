export type THeader = {
  label: string;
  key: string;
};

type TProps<T> = {
  headers: THeader[];
  items: T[];
};

const FTable = <T extends object>({ items, headers }: TProps<T>) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <th className="w-full" key={header.label}>
                {header.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              {headers.map((header) => {
                return <td key={header.label}>{item[header.key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FTable;
